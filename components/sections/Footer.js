import Link from "next/link";
import { useState } from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer footer-center text-primary-content bg-primary p-12">
      <div>
        <h2 className="text-2xl font-bold md:text-4xl">
          Dr. Ricardo Souza Quadros
        </h2>
        <p className="text-xl font-bold">Médico Neurocirurgião Endovascular</p>
        <p className="text-xl">CRM-MG 33.699 / RQE 10.580</p>
      </div>

      <div className="grid grid-flow-col gap-4">
        <a>
        <BsYoutube color="red" title="Youtube" className="h-10 w-10" />
        </a>
        <a>
        <BsTwitter color="red" title="Twitter" className="h-10 w-10" />
        </a>
        <a>
          <BsInstagram color="red" title="Instagram" className="h-10 w-10" />
        </a>
        <a>
        <BsFacebook color="red" title="Facebook" className="h-10 w-10" />
        </a>
      </div>
      <p>Copyright © 2022 - All right reserved</p>

    </footer>
  );
};
export default Footer;
