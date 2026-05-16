import type { SocialPlatform } from "@/config/creator";

type IconProps = {
  platform: SocialPlatform;
  className?: string;
};

export function SocialIcon({ platform, className }: IconProps) {
  switch (platform) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <rect
            x="4.2"
            y="4.2"
            width="15.6"
            height="15.6"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="12"
            cy="12"
            r="3.45"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="16.9" cy="7.1" r="1.05" fill="currentColor" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="M5 4.8h4.4l3.4 4.7 4-4.7h2.4l-5.3 6.2 5.9 8.2h-4.4l-3.8-5.3-4.5 5.3H4.7l5.8-6.8L5 4.8Zm3.1 1.8 8.2 10.8h1.4L9.5 6.6H8.1Z"
            fill="currentColor"
          />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="M14.3 4.5h2.4c.3 2.1 1.5 3.7 3.7 4.2v2.5a7.3 7.3 0 0 1-3.6-1.1v5.2c0 3.1-2.3 5.4-5.5 5.4-2.8 0-5-1.9-5-4.6 0-3 2.4-5.1 5.8-4.8v2.7c-1.8-.3-3 .5-3 1.9 0 1.2 1 2 2.2 2 1.4 0 2.5-.9 2.5-2.7V4.5h.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="M13.5 21v-7.7H16l.4-3h-2.9V8.4c0-.9.3-1.5 1.6-1.5h1.5V4.2c-.7-.1-1.5-.2-2.2-.2-2.4 0-4 1.5-4 4.1v2.2H7.8v3h2.6V21h3.1Z"
            fill="currentColor"
          />
        </svg>
      );
    case "threads":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="M12.2 3.3c4.4 0 7.3 2.9 7.5 7.6l-2.4.1c-.2-3.2-2-5.2-5.1-5.2-3.3 0-5.6 2.4-5.6 6.2 0 3.9 2.2 6.2 5.7 6.2 2.8 0 4.7-1.3 4.7-3.1 0-1.4-1-2.2-2.6-2.5-.6 2.2-2 3.4-4 3.4-1.9 0-3.2-1.1-3.2-2.8 0-1.9 1.7-3.1 4.4-3.1.3 0 .6 0 .9.1-.3-1.1-1-1.7-2.1-1.7-1 0-1.7.4-2.4 1.1L6.5 8c1-1.1 2.3-1.7 4-1.7 2.4 0 4 1.5 4.2 4.2 2.9.5 4.7 2.1 4.7 4.6 0 3.2-2.9 5.4-7.1 5.4-4.9 0-8-3.3-8-8.5 0-5.1 3.2-8.7 7.9-8.7Zm-.8 8.9c-1.3 0-2 .4-2 1.1 0 .6.5 1 1.2 1 1 0 1.7-.7 2-2h-1.2Z"
            fill="currentColor"
          />
        </svg>
      );
  }
}

export function VerifiedIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M12 2.8 14.1 5l3-.4 1.1 2.8 2.7 1.4-1.1 2.8 1.1 2.8-2.7 1.4-1.1 2.8-3-.4L12 21.2 9.9 19l-3 .4-1.1-2.8-2.7-1.4 1.1-2.8-1.1-2.8 2.7-1.4 1.1-2.8 3 .4L12 2.8Z"
        fill="currentColor"
      />
      <path
        d="m9.4 12 1.6 1.7 3.8-4"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={className}>
      <path
        d="M7.2 4.2h8.6v8.6h-2.1V7.8l-8 8-1.5-1.5 8-8h-5V4.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
