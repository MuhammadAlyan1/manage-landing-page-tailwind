import React from 'react';
import illustrationIntro from '../assets/images/illustration-intro.svg';

const HeroSection = () => {
  return (
    <section className="m-4 md:mx-auto md:flex md:max-w-[1700px] md:p-4 md:py-16">
      <div className="mx-auto w-fit md:order-1 md:basis-1/2">
        <img
          src={illustrationIntro}
          alt="Illustration intro"
          className="w-full"
        />
      </div>
      <div className="md:basis-1/2">
        <h1 className="my-6 mx-auto max-w-[250px] text-3xl font-bold md:mx-0 md:max-w-[600px] md:text-6xl">
          Bring everyone together to build better products.
        </h1>
        <p className="mx-auto max-w-[250px] text-slate-500 md:mx-0 md:max-w-[420px] md:text-2xl">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="button mx-auto mt-8 md:mx-0">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
