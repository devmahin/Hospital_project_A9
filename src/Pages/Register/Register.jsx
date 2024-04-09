import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Register() {
  // Function to handle Facebook login
  const handleFacebookLogin = () => {
    // Implement Facebook login logic here
  };

  // Function to handle Twitter login
  const handleTwitterLogin = () => {
    // Implement Twitter login logic here
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto max-w-md mt-20 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="mt-2 text-red-600 text-sm">
              This field is required
            </span>
          )}
        </div>
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
          <label htmlFor="email" className="block text-sm font-semibold">
            Photo URL:
          </label>
          <input
            type="text"
            name="photo"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            {...register("photo")}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="mt-2 text-red-600 text-sm">
              This field is required
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <button
          onClick={handleFacebookLogin}
          className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800"
        >
          Facebook Login
        </button>
        <button
          onClick={handleTwitterLogin}
          className="bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500"
        >
          Twitter Login
        </button>
        <button
          id="googleLogin"
          className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
        >
          Google Login
        </button>
        <button
          id="githubLogin"
          className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900"
        >
          GitHub Login
        </button>
      </div>
      <div className="text-center mt-6">
        <Link to="/login" className="text-blue-500 hover:underline">
          You have an account? Login.
        </Link>
      </div>
    </div>
  );
}

export default Register;
