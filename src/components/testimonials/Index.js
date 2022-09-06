import React from 'react';
import Testimony from './Testimony';
import { testimonialData } from '../../data';

const Testimonials = () => {
  return (
    <section>
      <h2 className="mx-auto mb-8 w-fit text-4xl">What they've said</h2>
      <section className="m-4 flex gap-4 overflow-x-scroll lg:overflow-auto">
        {testimonialData.map((testimony) => {
          return <Testimony key={testimony.id} {...testimony} />;
        })}
      </section>
      <button className="button mx-auto">Get Started</button>
    </section>
  );
};

export default Testimonials;
