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

      <div className="flex flex-col md:flex-row gap-4">
        <div className=" md:mb-0 md:w-1/2">
          <HomeCard className="flex-col p-12 pb-0">
            <div className="flex flex-col justify-center  ">
              <div className="mb-2 text-2xl leading-tight  lg:text-[2.5rem] font-bold ">
                Instantly send & receive Bitcoin
              </div>
              <p className="mb-3 font-normal text-lg text-white_B ">
                No waiting, no worrying—transact instantly and globally through
                the Lightning Network.
              </p>
              <HomeLink path="#" className="text-gold hover:text-gold_light">
                Learn More
              </HomeLink>
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

        <div className=" mb-0 md:w-1/2">
          <HomeCard className="flex-col p-12 pb-0">
            <div className="flex flex-col justify-center  ">
              <div className="mb-2 text-2xl leading-tight  lg:text-[2.5rem] font-bold ">
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
      <div>
        <HomeCard className="md:flex-row flex-col sm:items-center">
          <div className="p-4 md:w-1/2">
            <img
              className="object-cover w-full rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="/web-app-on-laptop.webp"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between p-4 ">
            <h5 className="mb-2 text-2xl font-bold  lg:text-[2.5rem] leading-normal ">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <HomeLink path="#" className="text-gold hover:text-gold_light">
              Learn More
            </HomeLink>
          </div>
        </HomeCard>
      </div>
    </div>
  );
};

export default Services;
