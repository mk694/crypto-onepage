import Button from "@/components/button/Button";

const Hero = () => {
  return (
    <div className="px-4 mt-4 md:px-20 text-center md:text-left md:py-16 mx-auto sm:max-w-xl md:max-w-full ">
      <div className="flex flex-col lg:items-center md:justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div></div>
            <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-[4rem] sm:leading-none max-w-lg mb-2 md:mb-6">
              Invest in
              <span className="text-gold">
                {" "} Bitcoin
                </span>
              <br className="hidden md:block" />
              {" "} with confidence
              <span className="inline-block text-deep-purple-accent-400">
              {" "} is real
              </span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg text-white_B">
            Securely buy and mine Bitcoin with 100% full reserve custody, and zero fees on recurring orders.
            </p>
          </div>
          <Button>Buy Bitcoin</Button>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
        <img
              className="object-cover"
              src="/river_hero_image.webp"
              alt=""
            />
        </div>
      </div>
      <a
        href="/"
        aria-label="Scroll down"
        className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
        </svg>
      </a>
    </div>
  );
};

export default Hero;
