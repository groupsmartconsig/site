import HeroVideoDialog from "@/components/magic-ui/hero-video-dialog";


export function HeroVideoReview() {
  return (
    <div className="relative pb-16">
      <h3 className="text-4xl bg-gradient-to-b from-[#8a090d] via-[#e42c33] to-[#e42c33] bg-clip-text text-transparent text-center font-bold px-3 pb-12 sm:px-0 md:pb-8 md:text-5xl">
        Ainda com dúvidas ? Veja este depoimento!
      </h3>
      <HeroVideoDialog
        className="block z-10"
        animationStyle="top-in-bottom-out"
        videoSrc="video.mp4"
        thumbnailSrc="video-thumbnail.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
