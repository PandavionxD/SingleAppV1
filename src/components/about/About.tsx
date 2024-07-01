import Image from "next/image";
import { TransitionMotion } from "../motion/transitionMotion";

export const About = () => {
  return (
    <div id="about" className="grid items-center py-20 md:grid-cols-2 lg:py-56">
      <TransitionMotion>
        <Image
          src="/assets/about.png"
          alt="about-image"
          width={600}
          height={400}
        />
      </TransitionMotion>
      <div className="md:pr-20">
        <h2 className="mb-10 text-4xl font-extrabold ">
          Hemos estado
          <br />
          <span className="text-pink-400" >mejorando nuestro producto</span> <br />
          durante años
        </h2>
        <p className="mb-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe et, dolore temporibus repellendus at porro autem cupiditate veritatis iste. Aut saepe maxime rem totam omnis sint nisi optio voluptatibus eligendi!
        </p>
        <button className="px-8 py-3 bg-pink-400 rounded-lg text-white text-lg" >
          Empieza ya
        </button>
      </div>
    </div>
  );
};
