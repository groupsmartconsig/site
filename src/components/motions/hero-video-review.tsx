import HeroVideoDialog from "@/components/magic-ui/hero-video-dialog";

export function HeroVideoReview() {
  return (
    <div className="relative pb-16">
      <h3 className="text-3xl bg-gradient-to-b from-[#f48c06] via-[#f42f36] to-[#ec3237] bg-clip-text text-transparent text-center font-bold pb-12 md:pb-8 md:5xl">
        Ainda com dúvidas ? Veja este depoimento!
      </h3>
      <HeroVideoDialog
        className="block"
        animationStyle="top-in-bottom-out"
        videoSrc="video.mp4"
        thumbnailSrc="video-thumbnail.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
