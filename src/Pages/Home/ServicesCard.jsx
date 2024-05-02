import { IoMdArrowRoundForward } from "react-icons/io";

const ServicesCard = ({ services }) => {
  const { title, img, price } = services;
  return (
    <div>
      <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
        <figure className="rounded-2xl">
          <img src={img} alt="Shoes" className="p-4 " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between items-center">
            <p className="text-xl text-[#FF3811]">${price}</p>
            <p className="text-[#FF3811]">
              <IoMdArrowRoundForward />
            </p>
          </div>
          {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
