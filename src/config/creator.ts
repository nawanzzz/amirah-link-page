export type SocialPlatform =
  | "instagram"
  | "x"
  | "tiktok"
  | "facebook"
  | "threads";

export type CreatorConfig = {
  creatorName: string;
  username: string;
  subtitle: string;
  profileImage: string;
  verified: boolean;
  bio: string;
  instagramUsername: string;
  xUsername: string;
  tiktokUsername: string;
  manualFollowerCounts: {
    instagram: number;
    x: number;
    tiktok: number;
    facebook: number;
    threads: number;
  };
  socialLinks: Array<{
    platform: SocialPlatform;
    label: string;
    href: string;
  }>;
  ctaLinks: Array<{
    label: string;
    href: string;
    tone: "primary" | "soft";
  }>;
  theme: {
    background: string;
    backgroundDeep: string;
    card: string;
    cardBorder: string;
    text: string;
    mutedText: string;
    accent: string;
    accentSoft: string;
    glowOne: string;
    glowTwo: string;
    glowThree: string;
  };
};

export const creator: CreatorConfig = {
  creatorName: "Amirah Tai",
  username: "amirah.tai",
  subtitle: "Discover Amirah Tai, professional fashion model",
  profileImage: "/creator-hero.png",
  verified: true,
  bio: "",
  instagramUsername: "alinavale",
  xUsername: "alinavale",
  tiktokUsername: "alinavale",
  manualFollowerCounts: {
    instagram: 128400,
    x: 24300,
    tiktok: 412800,
    facebook: 18600,
    threads: 36200
  },
  socialLinks: [
    {
      platform: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/amirahtaiii"
    },
    {
      platform: "x",
      label: "X",
      href: "https://x.com/AmiraTaaixrfq"
    },
    {
      platform: "tiktok",
      label: "TikTok",
      href: "https://www.tiktok.com/@amirah.tai0?_r=1&_t=ZS-95HC9M9awc9"
    },
    {
      platform: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/people/Amirah-Thari-Gangabada/61580945337490/?mibextid=wwXIfr&rdid=wuMpN3AXZkf8NJf6&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DiWwPDhhA%2F%3Fmibextid%3DwwXIfr"
    }
  ],
  ctaLinks: [
    {
      label: "👑 Join Official Page",
      href: "https://fanzonez.com/public/amirahhh",
      tone: "primary"
    },
    {
      label: "Telegram (Limited Access)",
      href: "https://t.me/+ZMit8EhKTVdmNzFh",
      tone: "soft"
    },
    {
      label: "Twitter",
      href: "https://x.com/AmiraTaaixrfq",
      tone: "soft"
    }
  ],
  theme: {
    background: "#151416",
    backgroundDeep: "#050506",
    card: "rgba(231,228,220,0.11)",
    cardBorder: "rgba(237,234,226,0.3)",
    text: "#fffefa",
    mutedText: "rgba(247,244,237,0.72)",
    accent: "#f2d6e4",
    accentSoft: "#fff3f8",
    glowOne: "rgba(218, 213, 202, 0.24)",
    glowTwo: "rgba(184, 180, 171, 0.18)",
    glowThree: "rgba(255, 244, 226, 0.12)"
  }
};
