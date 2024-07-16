import { chipImg } from "@/utils";
import Image from "next/image";
import React from "react";

const Chip = () => {
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <Image src={chipImg} alt="Apple A17 chip" width={180} height={180} />
        </div>
      </div>
    </section>
  );
};

export default Chip;
