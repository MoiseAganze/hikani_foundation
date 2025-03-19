"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import ReseauCard from "./ReseauCard";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="donations" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Soutenez Notre Mission"
          paragraph="Votre don fait la différence. Chaque contribution nous aide à améliorer la vie des plus vulnérables. Choisissez un montant ou donnez librement."
          center
          width="665px"
        />
        <div className="grid grid-cols-3 gap-3 lg:grid-cols-3">
          <ReseauCard
            num={"0983987921"}
            src={"/images/airtel.png"}
            title={"airtel money"}
          />
          <ReseauCard
            num={"0826206688"}
            src={"/images/mpesa.png"}
            title={"m-pesa"}
          />
          <ReseauCard
            num={"0842924764"}
            src={"/images/orange.png"}
            title={"orange money"}
          />
        </div>
        {/* <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Don Unique
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Don Mensuel
            </span>
          </div>
        </div> */}

        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Petit Don"
            price={isMonthly ? "10" : "5"}
            duration={isMonthly ? "" : "mo"}
            subtitle="Un petit geste peut changer une vie."
          >
            <OfferList text="Soutien aux orphelins" status="active" />
            <OfferList text="Aide aux personnes âgées" status="active" />
            <OfferList text="Soins pour enfants malades" status="active" />
            <OfferList text="Impact immédiat" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Don Moyen"
            price={isMonthly ? "50" : "25"}
            duration={isMonthly ? "" : "mo"}
            subtitle="Votre don fait une grande différence."
          >
            <OfferList text="Soutien aux orphelins" status="active" />
            <OfferList text="Aide aux personnes âgées" status="active" />
            <OfferList text="Soins pour enfants malades" status="active" />
            <OfferList text="Réinsertion des sans-abris" status="active" />
            <OfferList text="Impact durable" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Gros Don"
            price={isMonthly ? "100" : "50"}
            duration={isMonthly ? "" : "mo"}
            subtitle="Transformez des vies avec un don significatif."
          >
            <OfferList text="Soutien aux orphelins" status="active" />
            <OfferList text="Aide aux personnes âgées" status="active" />
            <OfferList text="Soins pour enfants malades" status="active" />
            <OfferList text="Réinsertion des sans-abris" status="active" />
            <OfferList text="Projets communautaires" status="active" />
            <OfferList text="Impact à long terme" status="active" />
          </PricingBox>
        </div> */}
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
