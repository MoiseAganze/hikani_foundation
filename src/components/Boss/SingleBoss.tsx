import React from "react";

const SingleBoss = ({ name, role, image }) => {
  return (
    <div className="max-w-96 overflow-hidden rounded-lg bg-gray-100 shadow-sm dark:bg-gray-dark">
      <figure className="h-48 w-full overflow-hidden">
        <img src={image} alt="boss" className="h-full w-full object-cover" />
      </figure>
      <div className="p-6">
        <h2 className="flex items-center justify-between text-xl font-bold">
          {name}
          <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-300">
            {role}
          </span>
        </h2>
        {/* <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="flex justify-end space-x-2 mt-4">
          <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
            Fashion
          </span>
          <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
            Products
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default SingleBoss;
