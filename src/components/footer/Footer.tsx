import Image from "next/image";
import { FooterData } from "./footer.data";

export const Footer = () => {
  return (
    <footer className="p-5 mt-10 text-white bg-blue-950 md:px-20 md:py-10">
      <div className="grid md:grid-cols-[450px_1fr_1fr_1fr] items-center md:gap-10 ">
        <div>
          <Image src="/assets/logo.png" alt="log" width={200} height={400} />
          <p className="mt-2 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            animi facere hic. Architecto molestias minus aliquam illum suscipit.{" "}
          </p>
        </div>

        {FooterData.map(({ data, name, id }) => (
          <div className="my-3 flex justify-center flex-col items-center" key={id} >
            <h4 className="text-xl font-bold text-white">{name}</h4>
            {data.map(({ id, name }) => (
              <p className="my-4" key={id}>
                {" "}
                {name}{" "}
              </p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};
