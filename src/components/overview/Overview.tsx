import Image from "next/image";
import overview from "/public/assets/overview.png";
import { SocialNetwork } from "@/data/socialNetwork";
import Link from "next/link";

export const Overview = () => {
  return (
    <div
      id="overviwe"
      className="p-5 mt-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 md:px-24 md:py-52"
    >
      <div className="items-center md:grid md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-white md:leading-snug md:text-6xl ">
            Desarrolla tus skills
            <br />
            Para el futuro
          </h1>
          <p className="mt-5 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            error minima? Itaque modi sequi eligendi nisi! Delectus, dicta
            dolore.
          </p>
          <div className="flex justify-start gap-4 my-10">
            {SocialNetwork.map(({ icon, id, name, url }) => (
              <Link href={url} target="_blank" key={id}>
                <Image width={50} height={50} src={`/svg/${icon}.svg`} alt={name} />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Image src={overview} alt="overview" width={350} height={500} />
        </div>
      </div>
    </div>
  );
};
