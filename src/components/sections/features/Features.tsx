import HomeCard from "@/components/cards/HomeCard";
import HomeLink from "@/components/link/HomeLink";

const Features = () => {
  return (
    <div>
      <div className="flex flex-col justify-center my-10 items-center text-center">
        <p className="text-2xl ">Your Bitcoin is your Bitcoin</p>
        <p className="text-gray-400 mt-4 ">
          Unlike other exchanges, River builds security into every product and
          service <br /> for your peace of mind.
        </p>
        <HomeLink path="/home" className="my-4">
          Learn more
        </HomeLink>
      </div>
      <div className="flex flex-col md:flex-row gap-4 px-4">
        <div className="w-full md:w-1/2 gap-4 md:flex md:flex-col">
        <HomeCard>
          <div className="w-full flex justify-start">
            <img src="/demo_650_500.png" alt="" className="object-contain" />
          </div>
          <div className="flex flex-col justify-center p-4">
            <div className="text-bold text-2xl font-bold">
              100% full reserve custody
            </div>
            <div>
              All assets on River are held 1:1. We don&apos;t use or lend your
              Bitcoin, ever. Your Bitcoin is your Bitcoin.
            </div>
          </div>
        </HomeCard>
        <HomeCard>
          <div className="w-full flex justify-start">
            <img src="/demo_650_500.png" alt="" className="object-contain" />
          </div>
          <div className="flex flex-col justify-center p-4">
            <div className="text-bold text-2xl font-bold">
              100% full reserve custody
            </div>
            <div>
              All assets on River are held 1:1. We don&apos;t use or lend your
              Bitcoin, ever. Your Bitcoin is your Bitcoin.
            </div>
          </div>
        </HomeCard>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
        <HomeCard>
          <div className="w-full flex justify-start">
            <img src="/demo_650_500.png" alt="" className="object-contain" />
          </div>
          <div className="flex flex-col justify-center p-4">
            <div className="text-bold text-2xl font-bold">
              100% full reserve custody
            </div>
            <div>
              All assets on River are held 1:1. We don&apos;t use or lend your
              Bitcoin, ever. Your Bitcoin is your Bitcoin.
            </div>
          </div>
        </HomeCard>
        </div>
      </div>
    </div>
  );
};

export default Features;
