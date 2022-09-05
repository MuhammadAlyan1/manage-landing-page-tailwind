import React from 'react';
import { featuresData } from '../../../data';
import Feature from './Feature';

const Features = () => {
  return (
    <section className="my-8 ml-4">
      {featuresData.map((detail) => {
        return <Feature key={detail.id} {...detail} />;
      })}
    </section>
  );
};

export default Features;
