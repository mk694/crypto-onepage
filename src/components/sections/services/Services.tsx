import HomeCard from "@/components/cards/HomeCard";
import HomeLink from "@/components/link/HomeLink";

const Services = () => {
  return (
    <div className="flex flex-col gap-4 mx-4 md:mx-20">
      <div className="mb-0">
        <HomeCard className="md:flex-row flex-col sm:items-end">
          <div className="flex flex-col md:w-1/2 justify-center mt-8 mx-8 mb-6 lg:mt-20 lg:mb-20  ">
            <div className="mb-2 text-2xl leading-tight  lg:text-[4rem] font-bold ">
              Dollar-cost average with
              <span className="text-gold"> zero fees</span>
            </div>
            <p className="mb-3 font-normal text-lg text-white_B ">
              Smooth out the price volatility of Bitcoin and get zero fees on
              your Bitcoin purchases when you set up recurring orders.
            </p>
            <HomeLink path="#" className="text-gold hover:text-gold_light">
              What is dollar-cost averaging?
            </HomeLink>
          </div>
          <div className="flex flex-col mb-0 sm:w-1/2 mr-8 sm:mr-10 items-end justify-end ">
            <img
              className="rounded-t-lg w-2/3"
              src="/iphone-12-partial.webp"
              alt=""
            />
          </div>
        </HomeCard>
      </div>

      <div className="md:flex block gap-4">
        <div className=" mb-0 w-1/2">
          <HomeCard className="sm:flex-col p-12 pb-0">
            <div className="flex flex-col justify-center  ">
              <div className="mb-2 text-2xl leading-tight  lg:text-[4rem] font-bold ">
                Instantly send & receive Bitcoin
              </div>
              <p className="mb-3 font-normal text-lg text-white_B ">
                No waiting, no worrying—transact instantly and globally through
                the Lightning Network.
              </p>
              <a href="" className="text-gold">
                Learn More
              </a>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="rounded-t-lg "
                src="/iphone-send-receive.webp"
                alt=""
              />
            </div>
          </HomeCard>
        </div>

        <div className=" mb-0 w-1/2">
          <HomeCard className="sm:flex-col p-12 pb-0">
            <div className="flex flex-col justify-center  ">
              <div className="mb-2 text-2xl leading-tight  lg:text-[4rem] font-bold ">
                Mine Bitcoin and get daily Bitcoin payouts
              </div>
              <p className="mb-3  font-normal text-lg text-white_B ">
                We manage the end-to-end mining process for you including
                procuring, hosting, and maintenance.
              </p>
              <a href="" className="text-gold">
                Learn More
              </a>
            </div>
            <div className="flex flex-col items-center">
              <img className="rounded-t-lg " src="/iphone-mining.webp" alt="" />
            </div>
          </HomeCard>
        </div>
      </div>

      <HomeCard>
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="/demo_650_500.png"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </HomeCard>
    </div>
  );
};

export default Services;
