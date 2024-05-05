import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price ,img} = service;
  const { users } = useContext(AuthContext);
  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const order = {
      customerName: name,
      email,
      img,
      date,
      service_id: _id,
      price:price
    }
    console.log(order);
    fetch("http://localhost:5000/booking", {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(order)
      
    }).then((res) => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('add data!')
        }
      })
  };
  return (
    <div>
      <h2 className="text-3xl text-center">CheckOut: {title}</h2>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card  w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleBook} className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    defaultValue={users?.displayName}
                    className="input input-bordered "
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="Date"
                    placeholder="Date"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    defaultValue={users?.email}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    defaultValue={"$" + price}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookService;
