import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <div id="hero">
        <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="text-[12px] font-bold leading-[16px] tracking-[0.3em] mb-5 uppercase text-[#C8EA80]">
              Video Editing
            </div>
            <h1 className="mb-6 text-[84px] font-black leading-[84px] tracking-[-0.03em] text-[#EAEDFF] uppercase max-lg:mb-7 max-lg:text-[64px] max-lg:font-black max-lg:leading-[64px] max-nd:mb-4 max-md:text-5xl max-md:leading-12">
              Amazing Simple
            </h1>
            <p className="max-w-440 mb-14 text-[#C4CBF5] text-[22px] leading-[36px] max-md:-10">
              We design XORA AI Video Editor to be an easy to use, quick to
              learn, and suprisingly powerful.
            </p>
              <Button icon="/images/zap.svg">Try it now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
