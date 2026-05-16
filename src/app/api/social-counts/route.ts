import { NextResponse } from "next/server";
import { creator } from "@/config/creator";

const CACHE_SECONDS = 60 * 60 * 6;

type CountPayload = {
  counts: {
    instagram: number;
    x: number;
    tiktok: number;
    facebook: number;
    threads: number;
  };
  totalFollowers: number;
  updatedAt: string;
  source: "api" | "fallback" | "mixed";
};

let memoryCache: { expiresAt: number; payload: CountPayload } | null = null;

function compactNumber(value: unknown, fallback: number) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

async function fetchInstagramFollowers() {
  const token = process.env.META_ACCESS_TOKEN;
  const igUserId = process.env.META_IG_USER_ID;

  // Add META_ACCESS_TOKEN and META_IG_USER_ID in .env.local or your hosting provider.
  if (!token || !igUserId || !creator.instagramUsername) {
    return null;
  }

  const fields = `business_discovery.username(${creator.instagramUsername}){followers_count}`;
  const url = new URL(`https://graph.facebook.com/v19.0/${igUserId}`);
  url.searchParams.set("fields", fields);
  url.searchParams.set("access_token", token);

  const response = await fetch(url, {
    next: { revalidate: CACHE_SECONDS }
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as {
    business_discovery?: { followers_count?: number };
  };

  return compactNumber(
    data.business_discovery?.followers_count,
    creator.manualFollowerCounts.instagram
  );
}

async function fetchXFollowers() {
  const bearerToken = process.env.X_BEARER_TOKEN;

  // Add X_BEARER_TOKEN in .env.local or your hosting provider.
  if (!bearerToken || !creator.xUsername) {
    return null;
  }

  const url = new URL(
    `https://api.twitter.com/2/users/by/username/${creator.xUsername}`
  );
  url.searchParams.set("user.fields", "public_metrics");

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${bearerToken}`
    },
    next: { revalidate: CACHE_SECONDS }
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as {
    data?: { public_metrics?: { followers_count?: number } };
  };

  return compactNumber(
    data.data?.public_metrics?.followers_count,
    creator.manualFollowerCounts.x
  );
}

export async function GET() {
  if (memoryCache && memoryCache.expiresAt > Date.now()) {
    return NextResponse.json(memoryCache.payload, {
      headers: {
        "Cache-Control": `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS}`
      }
    });
  }

  const [instagramApiCount, xApiCount] = await Promise.allSettled([
    fetchInstagramFollowers(),
    fetchXFollowers()
  ]);

  const instagram =
    instagramApiCount.status === "fulfilled" && instagramApiCount.value !== null
      ? instagramApiCount.value
      : creator.manualFollowerCounts.instagram;

  const x =
    xApiCount.status === "fulfilled" && xApiCount.value !== null
      ? xApiCount.value
      : creator.manualFollowerCounts.x;

  const usedInstagramApi =
    instagramApiCount.status === "fulfilled" && instagramApiCount.value !== null;
  const usedXApi = xApiCount.status === "fulfilled" && xApiCount.value !== null;

  const counts = {
    instagram,
    x,
    tiktok: creator.manualFollowerCounts.tiktok,
    facebook: creator.manualFollowerCounts.facebook,
    threads: creator.manualFollowerCounts.threads
  };

  const payload: CountPayload = {
    counts,
    totalFollowers: Object.values(counts).reduce((sum, value) => sum + value, 0),
    updatedAt: new Date().toISOString(),
    source:
      usedInstagramApi && usedXApi
        ? "api"
        : usedInstagramApi || usedXApi
          ? "mixed"
          : "fallback"
  };

  memoryCache = {
    expiresAt: Date.now() + CACHE_SECONDS * 1000,
    payload
  };

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS}`
    }
  });
}
