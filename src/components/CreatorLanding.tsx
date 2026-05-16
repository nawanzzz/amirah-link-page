"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import type { CreatorConfig } from "@/config/creator";
import { ArrowIcon, SocialIcon, VerifiedIcon } from "@/components/icons";

type CreatorLandingProps = {
  creator: CreatorConfig;
};

type StyleWithVars = CSSProperties & Record<`--${string}`, string | number>;

export function CreatorLanding({ creator }: CreatorLandingProps) {
  const themeVars: StyleWithVars = {
    "--page-bg": creator.theme.background,
    "--page-bg-deep": creator.theme.backgroundDeep,
    "--card-bg": creator.theme.card,
    "--card-border": creator.theme.cardBorder,
    "--text": creator.theme.text,
    "--muted": creator.theme.mutedText,
    "--accent": creator.theme.accent,
    "--accent-soft": creator.theme.accentSoft,
    "--glow-one": creator.theme.glowOne,
    "--glow-two": creator.theme.glowTwo,
    "--glow-three": creator.theme.glowThree
  };

  return (
    <main
      style={themeVars}
      className="relative min-h-dvh overflow-hidden bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.14),transparent_34%),linear-gradient(150deg,var(--page-bg),var(--page-bg-deep)_72%)] px-5 pb-28 pt-8 text-[var(--text)] sm:px-6 sm:pb-12"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-[-8rem] h-72 w-72 rounded-full bg-[var(--glow-one)] blur-3xl [animation:float-glow_12s_ease-in-out_infinite]" />
        <div className="absolute -right-28 top-32 h-80 w-80 rounded-full bg-[var(--glow-two)] blur-3xl [animation:float-glow_14s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-12 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--glow-three)] blur-3xl [animation:float-glow_16s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.14]" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-[calc(100dvh-9rem)] w-full max-w-[21.25rem] flex-col items-center justify-center min-[540px]:max-w-md sm:min-h-[calc(100dvh-6rem)]">
        <article className="premium-card animate-enter relative isolate w-full max-w-full overflow-hidden rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] px-5 pb-5 pt-[18.25rem] text-center backdrop-blur-2xl sm:px-7 sm:pb-7 sm:pt-[19.25rem]">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 z-0 h-[31rem] overflow-hidden"
          >
            <Image
              src={creator.profileImage}
              alt=""
              fill
              priority
              sizes="(min-width: 540px) 448px, calc(100vw - 2rem)"
              className="object-cover object-[52%_24%]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_14%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,rgba(7,5,8,0.02)_0%,rgba(7,5,8,0.08)_44%,rgba(23,15,24,0.78)_72%,rgba(23,15,24,0.98)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,5,8,0.34),transparent_28%,transparent_72%,rgba(7,5,8,0.34))]" />
          </div>

          <header className="animate-enter relative z-10 [animation-delay:90ms]">
            <h1 className="luxury-display flex items-center justify-center gap-2 text-[2.35rem] leading-[0.95] tracking-normal text-white drop-shadow-[0_3px_20px_rgba(0,0,0,0.78)] sm:text-5xl">
              {creator.creatorName}
              {creator.verified ? (
                <span
                  className="inline-flex text-[#ff7fbd] drop-shadow-[0_0_16px_rgba(255,127,189,0.98)]"
                  title="Verified"
                >
                  <VerifiedIcon className="h-8 w-8 sm:h-9 sm:w-9" />
                  <span className="sr-only">Verified</span>
                </span>
              ) : null}
            </h1>
            <p className="mx-auto mt-3 max-w-[18.5rem] text-sm font-medium leading-5 text-white/78 drop-shadow-[0_2px_12px_rgba(0,0,0,0.72)]">
              {creator.subtitle}
            </p>
          </header>

          <nav
            className="animate-enter relative z-10 mt-5 flex items-center justify-center gap-2 [animation-delay:150ms]"
            aria-label="Social links"
          >
            {creator.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                className="glass-icon group grid h-11 w-11 place-items-center rounded-2xl border border-white/18 text-white/78 transition duration-200 hover:-translate-y-0.5 hover:border-white/34 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] active:scale-95"
              >
                <SocialIcon
                  platform={social.platform}
                  className="h-5 w-5 transition-transform duration-200 group-hover:scale-105"
                />
              </a>
            ))}
          </nav>

          <div className="relative z-10 mt-8 grid gap-3" aria-label="Creator links">
            {creator.ctaLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                style={{ "--delay": `${360 + index * 70}ms` } as StyleWithVars}
                className={
                  link.tone === "primary"
                    ? "glass-button glass-button-primary cta-bounce animate-enter group relative flex min-h-14 min-w-0 items-center justify-between rounded-2xl border border-white/36 px-5 py-3 text-left text-[0.98rem] font-semibold text-white backdrop-blur-2xl transition duration-200 [animation-delay:var(--delay)] hover:border-white/52 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] active:translate-y-0 active:scale-[0.985]"
                    : "glass-button animate-enter group relative flex min-h-14 min-w-0 items-center justify-between rounded-2xl border border-white/20 px-5 py-3 text-left text-[0.98rem] font-semibold text-white/92 backdrop-blur-2xl transition duration-200 [animation-delay:var(--delay)] hover:-translate-y-0.5 hover:border-white/34 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] active:translate-y-0 active:scale-[0.985]"
                }
              >
                <span className="relative z-10 min-w-0 pr-3 leading-snug">
                  {link.label}
                </span>
                <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/14 bg-white/12 text-white transition duration-200 group-hover:translate-x-0.5 group-hover:bg-white/18">
                  <ArrowIcon className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </article>

        <footer className="relative z-10 mt-6 flex items-center justify-center gap-5 text-xs font-medium text-white/48">
          <a className="transition hover:text-white" href="/privacy">
            Privacy Policy
          </a>
          <a className="transition hover:text-white" href="/terms">
            Terms
          </a>
          <a className="transition hover:text-white" href="/report">
            Report
          </a>
        </footer>
      </section>

      <aside className="fixed inset-x-0 bottom-0 z-20 border-t border-white/12 bg-[#080508]/70 px-4 pb-[calc(env(safe-area-inset-bottom)+0.85rem)] pt-3 backdrop-blur-2xl sm:hidden">
        <a
          href={creator.ctaLinks[0]?.href ?? "#"}
          target="_blank"
          rel="noreferrer"
          className="glass-button glass-button-primary cta-bounce mx-auto flex min-h-14 max-w-md items-center justify-center rounded-2xl border border-white/38 px-5 text-center text-base font-bold text-white shadow-[0_18px_42px_rgba(255,140,198,0.24)] transition active:scale-[0.985]"
        >
          {creator.ctaLinks[0]?.label ?? "Open"}
        </a>
      </aside>
    </main>
  );
}
