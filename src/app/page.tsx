import { creator } from "@/config/creator";
import { CreatorLanding } from "@/components/CreatorLanding";

export default function Home() {
  return <CreatorLanding creator={creator} />;
}
