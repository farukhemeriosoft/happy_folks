import React from "react";
import Image from "next/image";
import happyFolks from './../../images/happy-folk.png'

const Cta = () => {
  return (
    <section className="container mx-auto font-graphik">
      <div className="w-full max-w-screen-lg mx-auto md:py-8">
        <div className="sm:flex sm:items-center justify-around flex flex-row">
          <div className="basis-5/8">
            <h2 className="leading-tight capitalize pr-5 text-darkBlue text-5xl font-extrabold font-sfProRounded">
              Gathering Feedback has never been easier
            </h2>
          </div>
          <div className="basis-3/8 flex justify-end">
            <div>
            <Image
              src={happyFolks}
              alt="Happy Folk"
              className=""
              style={{
               transform: 'scale(1.4)'
              }}
              width={230}
              height={24}
            />

            </div>
          </div>
        </div>
          <hr className="mt-2.5 mb-8 w-full" />
      </div>
    </section>
  );
};

export default Cta;
