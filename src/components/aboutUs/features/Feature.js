import React from 'react';

const Feature = ({ id, title, description }) => {
  if (!title) return;

  return (
    <article className="my-8">
      <p className="rounded-l-full bg-orange-100 py-1 md:mb-4 md:bg-transparent md:font-bold lg:text-xl">
        <span className="mr-2 rounded-full bg-orange-500 px-4 py-1 font-bold text-white md:mr-6 md:px-7 md:py-2 lg:mr-8">
          {id}
        </span>
        {title}
      </p>
      <p className="text-slate-500 md:ml-24 md:text-xl lg:ml-28">
        {description}
      </p>
    </article>
  );
};

export default Feature;
