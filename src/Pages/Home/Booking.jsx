import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Booking = () => {
  const { users } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const url = `http://localhost:5000/booking?email=${users?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted SuccessFully");
            const remaining = booking.filter((bookings) => bookings._id !== id);
            setBooking(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //Update state
          const remaining = booking.filter((bookings) => bookings._id !== id);
          setBooking(remaining);
          const updated = booking.find((bookings) => bookings._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBooking(newBookings);
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl">Your bookings: {booking.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {booking.map((p) => (
              <tr key={p.id}>
                <th>
                  <button
                    onClick={() => handleDelete(p?._id)}
                    className="btn btn-sm btn-circle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl w-24 h-25">
                      <img src={p?.img} />
                    </div>
                  </div>
                </td>
                <td>{p?.customerName}</td>
                <td>{p?.date}</td>
                <td>{p?.price}</td>
                <th>
                  {p.status === "confirm" ? (
                    <span className="font-bold text-primary">Confirmed</span>
                  ) : (
                    <button
                      onClick={() => handleConfirm(p?._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Please Confirm
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
