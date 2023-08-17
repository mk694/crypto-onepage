import Button from "@/components/button/Button";
import HomeCard from "@/components/cards/HomeCard";

const Reviews = () => {
  return (
    <div>
      <div className="flex flex-col justify-center my-10 items-center text-center">
        <p className="text-2xl ">Real people, ready to help</p>
        <p className="text-gray-400 mt-4 ">
          Unlike other exchanges, River builds security into every product and
          service <br /> for your peace of mind.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="px-4 flex-col md:flex-row flex gap-4 max-w-4xl items-end mx-auto text-slate-100">
        <HomeCard className="p-4 w-full md:w-1/2 h-full ">
          <div className="flex flex-col">
          &quot;River is the only company I feel comfortable keeping any amount of
            bitcoin on their platform because they utilize multi-sig cold
            storage, have 100% full reserve, and are bitcoin only. As a
            bitcoin-only investor, I use River because they are a bitcoin-only
            company that has earned my trust through their proof-of-work.&quot;
            <p className="m-2"></p>
            <div className="flex">
              <span className="font-extrabold">Justin K</span>, River Client
            </div>
          </div>
        </HomeCard>
        <HomeCard className="p-4 w-full md:w-1/2 h-full">
          <div className="flex flex-col">
          &quot;River has one of the best UI designs I&apos;ve ever seen. Their
            attention to detail, excellent customer service, and easy-to-use
            app, make mining and buying Bitcoin seamless.&quot;
            <p className="m-2"></p>
            <div className="flex">
              <span className="font-extrabold">Justin K</span>, River Client
            </div>
          </div>
        </HomeCard>
      </div>
    </div>
  );
};

export default Reviews;
