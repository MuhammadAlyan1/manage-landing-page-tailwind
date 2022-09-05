import React from 'react';
import Features from './features/Index';

const AboutUs = () => {
  return (
    <section className="bg-pattern bg-[bottom_-20rem_left_-20rem] bg-no-repeat md:flex md:h-screen md:items-center">
      <section className="md:mx-auto md:flex  md:max-w-[1700px] md:p-4">
        <div className=" md:basis-1/2">
          <h2 className="mx-auto my-4 max-w-[230px] text-2xl font-bold md:mx-0 md:max-w-[700px] md:text-3xl lg:text-6xl">
            What's different about Manage?
          </h2>
          <p className="mx-auto max-w-[230px] text-slate-500 md:mx-0 md:my-8 md:max-w-[500px] lg:text-xl">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="md:basis-1/2">
          <Features />
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
