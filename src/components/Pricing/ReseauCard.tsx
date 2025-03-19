import React from "react";

const ReseauCard = ({ src, num, title }) => {
  return (
    <div className="max-w-60  cursor-pointer overflow-hidden rounded-lg bg-gray-200 shadow-sm transition hover:scale-105 dark:bg-gray-dark">
      <figure className="max-h-52 w-full overflow-hidden">
        <img
          src={src}
          alt={title}
          className="h-full min-h-20 w-full object-cover"
        />
      </figure>
      <div className="h-10 p-3">
        <h2 className="flex items-center justify-between text-sm font-bold text-gray-500">
          {num}
          {/* <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-300">
            {title}
          </span> */}
        </h2>
      </div>
    </div>
  );
};

export default ReseauCard;
