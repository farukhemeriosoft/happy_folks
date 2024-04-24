import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";
import bannerLeft from './../../images/banner-left.png'
import bannerRight from './../../images/banner-right.png'
import awards from './../../images/awards.png'

const Banner = () => {
  return (
    <section className="container mx-auto font-graphik">
      <div className="w-full max-w-screen-xl mx-auto p-8 md:py-8">
        <div className="sm:flex sm:items-start justify-around flex flex-row">
          <div className="basis-1/4 flex justify-start">
            <Image
              src={bannerLeft}
              alt="Banner Left"
              className="dark:invert"
              width={220}
              height={24}
            />
          </div>
          <div className="basis-1/2">
            <h1 className="leading-tight capitalize text-darkBlue text-6xl font-extrabold text-center font-sfProRounded mb-4">
              Ready to find out how your team really feels?
            </h1>
            <p className="px-14 text-darkBlue text-xl font-sfProRounded text-center font-normal leading-8 mb-5">
              Let’s face it, getting real feedback is hard - especially
              consistently. With Happy Folks, we have created a scientifically
              backed feedback method that is integrated directly with Slack and
              Microsoft Teams.{" "}
            </p>

            <div className="mt-2 p-2 lg:mt-0 w-full lg:flex-shrink-0">
              <div className="font-sfProRounded rounded-2xl bg-skyBlue text-center lg:flex lg:flex-col lg:justify-center lg:py-5">
                <div className="mx-auto px-8">
                  <p className="text-base font-semibold text-darkBlue">
                    Sign up for a completely free 30 day, no commitment trial!
                  </p>
                  <a
                    href="#"
                    className="mt-5 inline-block rounded-lg bg-activeBlue px-16 py-3 text-center text-md font-semibold text-white shadow-sm hover:bg-activeBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-activeBlue capitalize"
                  >
                    Sign up free for 30 days
                  </a>
                  <ul className="flex flex-wrap text-center items-center justify-center mt-4 text-xs text-darkBlue-500 sm:mb-0 dark:text-darkBlue-400">
                    <li>
                      <CheckIcon
                        className="h-6 w-6 inline mr-1 pb-1"
                        strokeWidth={1.2}
                      />
                      <a href="#" className="hover:none me-8 md:me-8">
                        1 Minute setup
                      </a>
                    </li>
                    <li>
                      <CheckIcon
                        className="h-6 w-6 inline mr-1 pb-1"
                        strokeWidth={1.2}
                      />
                      <a href="#" className="hover:none me-8 md:me-8">
                        No credit card
                      </a>
                    </li>
                    <li>
                      <CheckIcon
                        className="h-6 w-6 inline mr-1 pb-1"
                        strokeWidth={1.2}
                      />
                      <a href="#" className="hover:none me-8 md:me-8">
                        Cancel anytime
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/4 flex justify-end">
            <Image
              src={bannerRight}
              alt="Banner Right"
              className="dark:invert"
              width={240}
              height={24}
            />
          </div>
        </div>

        <div className="flex justify-center py-16">
          <Image
            src={awards}
            alt="Banner Right"
            className="dark:invert"
            width={640}
            height={24}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
