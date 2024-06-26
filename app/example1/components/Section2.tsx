import Phone from "@/components/Phone";
import Image from "next/image";

export default function Section2() {
  return (
    <div className="py-32 ">
      <div className="text-white max-w-[1280px] mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Every feature you need to win. Try it for yourself.
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Pocket was built for investors like you who play by their own rules
            and aren’t going to let SEC regulations get in the way of their
            dreams. If other investing tools are afraid to build it, Pocket has
            it.
          </p>
        </div>
        <div className="mt-20 grid grid-rows-3 grid-cols-2 px-20">
          <div className="row-span-3">
            <Phone />
          </div>
          <div className="relative rounded-2xl transition-colors hover:bg-gray-800/50 cursor-pointer">
            <div className="p-8 flex flex-col gap-5">
              <Image
                src="/section2-icon1.svg"
                width={32}
                height={32}
                alt="icon"
              />
              <h3 className="mt-6 text-lg font-semibold text-white">
                Invite friends for better returns
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                For every friend you invite to Pocket, you get insider
                notifications 5 seconds sooner. And it’s 10 seconds if you
                invite an insider.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl transition-colors hover:bg-gray-800/50 cursor-pointer">
            <div className="p-8 flex flex-col gap-5">
              <Image
                src="/section2-icon2.svg"
                width={32}
                height={32}
                alt="icon"
              />
              <h3 className="mt-6 text-lg font-semibold text-white">
                Notifications on stock dips
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Get a push notification every time we find out something that’s
                going to lower the share price on your holdings so you can sell
                before the information hits the public markets.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl transition-colors hover:bg-gray-800/50 cursor-pointer">
            <div className="p-8 flex flex-col gap-5">
              <Image
                src="/section2-icon3.svg"
                width={32}
                height={32}
                alt="icon"
              />
              <h3 className="mt-6 text-lg font-semibold text-white">
                Invest what you want
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                We hide your stock purchases behind thousands of anonymous
                trading accounts, so suspicious activity can never be traced
                back to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
