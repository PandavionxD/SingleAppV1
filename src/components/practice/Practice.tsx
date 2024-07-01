import { TransitionMotion } from "../motion/transitionMotion";

export const Practice = () => {
  return (
    <TransitionMotion>
      <div
        id="practice"
        className="grid items-center py-20 md:grid-cols-2 md:py-56"
      >
        <div className="md:pr-20">
          <h2 className="mb-10 text-4xl font-extrabold">
            Puedes practicar a <br />
            cualquier hora <br />
            <span className="text-pink-400">que se adapte a ti</span>
          </h2>
          <p className="mb-14">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ea
            nihil sed, in numquam voluptatibus possimus esse. Commodi nisi, ab
            facere quia, earum veritatis dolorum, ipsa debitis accusamus qui
            neque?
          </p>
          <button className="px-8 py-4 text-white text-lg bg-pink-400 rounded-xl">
            Empieza ya
          </button>
        </div>
        <div>
          <video width={750} height={500} autoPlay muted loop>
            <source src="/assets/business.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </TransitionMotion>
  );
};
