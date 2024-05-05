import { Link } from "react-router-dom";
import login from "..//assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
  const {signIn}=useContext(AuthContext)
    const handleLogin = (e) => {
      e.preventDefault()
       const form = e.target;
      
       const email = form.email.value;
       const password = form.password.value;
      console.log(email, password);
      signIn(email, password)
        .then(result => {
          const user = result.user
          console.log(user);
        })
      .catch(error=>console.log(error))
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 mr-12 ">
            <img src={login} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <h1 className="text-5xl text-center font-bold">Login now!</h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white">
                  Login
                </button>
              </div>
            </form>
            <p
              className="text-center my-4
            "
            >
              New to car Doctors{" "}
              <Link className="text-orange-600 font-bold" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
