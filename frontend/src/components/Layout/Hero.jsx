import React from "react";
import heroImg from "../../assets/rabbit-hero.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "../../context/useTranslation";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Clovique"
        className="w-full h-100 md:h-150 lg:h-187.5 object-cover"
      />
      <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
            {t("home.heroTitleLine1")} <br /> {t("home.heroTitleLine2")}
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            {t("home.heroSubtitle")}
          </p>
          <Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
          >
            {t("home.shopNow")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
