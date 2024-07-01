import { TransitionMotion } from "../motion/transitionMotion";
import { PricesPlanData } from "./PricesPlan.data";
import { IoCloseCircleOutline, IoCheckmarkCircle } from "react-icons/io5";

export const PricesPlan = () => {
  return (
    <div id="pricing" className="grid gap-10 my-5 md:grid-cols-3">
      {PricesPlanData.map(
        ({ id, name, description, features, primary, prices }) => (
          <TransitionMotion key={id}>
            <div className="p-4 shadow-lg rounded-xl shadow-pink-100">
              <h4 className="mb-5 text-2xl font-bold text-center">{name}</h4>
              <p className="text-center">{description}</p>
              <div className="flex items-end justify-center my-7">
                <span className="text-6xl font-black text-pink-600">
                  {prices[0].price}
                </span>
              </div>
              {features.map(({ active, id, name }) => (
                <div key={id} className="flex justify-center my-4 ">
                  {active ? (
                    <IoCheckmarkCircle className="text-xl text-green-500" />
                  ) : (
                    <IoCloseCircleOutline className="text-red-500 text-xl" />
                  )}
                  <span className="ml-4">{name}</span>
                </div>
              ))}
              <div className="flex justify-center text-xlg font-extrabold pt-2">
              <button
                className={`rounded-lg ${
                  primary
                    ? "py-2 px-4 border border-pink-400 text-pink-400"
                    : "py-2 px-4 bg-pink-400 text-white"
                }`}
              >
                Contratar plan
              </button>

              </div>
                          </div>
          </TransitionMotion>
        )
      )}
    </div>
  );
};
