import person from "..//assets/images/about_us/person.jpg";
import parts from "..//assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div   className="mt-5">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img
              src={person}
              className=" max-w-sm w-3/4 rounded-lg shadow-2xl"
            />
            <img
              src={parts}
              className="max-w-sm w-3/4 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 md:mt-32">
            <h3 className="text-orange-500 font-bold">About Us </h3>
            <h1 className="md:text-5xl font-bold text-3xl">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don`t look even
              slightly believable.
            </p>
            <p className="py-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don`t look even slightly
              believable.
            </p>
            <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
