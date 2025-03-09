import React from "react";
import SingleBoss from "./SingleBoss";
import SectionTitle from "../Common/SectionTitle";

const Boss = () => {
  const bosses = [
    {
      name: "Akonda Munse Ornella",
      role: "Fondatrice",
      image: "/images/person1.jpeg",
    },
    {
      name: "Priscille Mibanga",
      role: "Présidente AI",
      image: "/images/boss1.jpeg",
    },
    {
      name: "Gaëlle N'sala",
      role: "Vice-Présidente",
      image: "/images/gaelle.jpeg",
    },
  ];

  return (
    <>
      <SectionTitle
        title="Dirigeants majeurs de la fondation"
        paragraph=""
        center
      />
      <div className="grid w-full place-items-center gap-3 p-3 lg:grid-cols-2 xl:grid-cols-3">
        {bosses.map((item, i) => (
          <SingleBoss name={item.name} role={item.role} image={item.image} />
        ))}
      </div>
    </>
  );
};

export default Boss;
