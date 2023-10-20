import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Features = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex flex-col lg:flex-row gap-20 even:lg:flex-row-reverse ">
      <div className="flex flex-col gap-6" data-aos="fade-right">
        <p className="text-2xl text-blue-900 font-semibold">
          <span className="text-orange-500">{data.mainLabel}</span> {data.label}
        </p>
        <p>{data.desc}</p>
      </div>

      <Image
        data-aos="fade-left"
        src={data.logo.src}
        width={500}
        height={500}
        alt="features"
        className="flex"
      />
    </div>
  );
};

export default Features;
