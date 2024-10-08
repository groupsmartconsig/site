import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideoReview() {
  return (
    <div className="relative pb-16">
      <h3 className="text-5xl bg-gradient-to-b from-[#f48c06] via-[#f42f36] to-[#ec3237] bg-clip-text text-transparent text-center font-bold pb-8">
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
