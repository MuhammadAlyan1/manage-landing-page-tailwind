import React from 'react';

const Testimony = ({ image, name, review }) => {
  if (!name) return;

  return (
    <section className="my-20 mx-auto min-w-[320px] max-w-[420px] rounded-md bg-slate-50 p-4">
      <div className="relative bottom-12 mx-auto w-16">
        <img src={image} alt={name} />
      </div>
      <div>
        <p className="-mt-8 mb-2 text-center font-bold">{name}</p>
        <p className="text-center text-slate-500">{review}</p>
      </div>
    </section>
  );
};

export default Testimony;
