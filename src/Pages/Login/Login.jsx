import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UseAuthHook from "../../CustomeHook/UseAuthHook";
import bgRegister from "/Register.svg";
import { Helmet } from "react-helmet-async";
import { FaGoogle, FaTwitter } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../Compnents/Spinnner/Spinner";
function Login() {
  const [show, setShow] = useState(true);
  const [errorSubmit, setErrorSubmit] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // console.log(location)
  const form = location?.state || "/";

  const {
    TwitterCreate,
    googleCreate,
    LogInWithEmailAndPassword,
    setLoading,
    loading,
  } = UseAuthHook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    LogInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        toast.success("Wow Login Success");
        // alert("Login success");
        navigate(form);
        setErrorSubmit("");
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error(`${error.message.replace("Firebase", "")}`);
        setErrorSubmit(error.message);
      });
  };
  function socilaLogin(socialAccount) {
    socialAccount()
      .then(() => {
        // console.log("Login success");
        toast.success("Wow Success Login");
        navigate(form);
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  }
  return (
    <div
      style={{ backgroundImage: `url(${bgRegister})` }}
      className="bg-no-repeat bg-cover mx-auto py-20 px-5 md:px-0  bg-center"
    >
      <Helmet>
        <title>Hospital || Login</title>
      </Helmet>
      <div className="container mx-auto max-w-md  bg-[#a4b5db] p-6  rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="mt-2 text-red-600 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold">
              Password:
            </label>
            <div className="relative">
              <input
                type={show ? "password" : "text"}
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                {...register("password", { required: true })}
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-10 top-[50%] text-xl translate-y-[-50%]"
              >
                {" "}
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <span className="mt-2 text-red-600 text-sm">
                This field is required
              </span>
            )}
          </div>
          <p className="text-red-500 mb-3">
            {errorSubmit
              .replace("Firebase:", "")
              .replace("auth", "")
              .replace("(", "")
              .replace(")", "")
              .replace("/", "")}
          </p>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="grid lg:grid-cols-2 gap-5 mt-5">
          <button
            onClick={() => socilaLogin(TwitterCreate)}
            className="bg-blue-400 text-white py-2 px-4 rounded-md flex  justify-center gap-x-4 items-center hover:bg-blue-500"
          >
            <FaTwitter /> Twitter Login
          </button>
          <button
            onClick={() => socilaLogin(googleCreate)}
            id="googleLogin"
            className="bg-red-600 text-white py-2 px-4 rounded-md flex  justify-center gap-x-4 items-center hover:bg-red-700"
          >
            <FaGoogle /> Google Login
          </button>
        </div>
        <div className="text-center mt-6">
          <Link to="/register" className=" hover:underline text-black">
            Don't have an account?{" "}
            <span className="font-semibold text-blue-800">Register here.</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
