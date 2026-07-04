import { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import {
  Eye,
  EyeOff,
} from "lucide-react";
import useAuth from "../../utlis/Hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate,Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const [showPassword, setShowPassword] =
    useState(false);
      const navigate = useNavigate();
const { SingInUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
    const onSubmit = async (data) => {
    try {
      const result = await SingInUser(
        data.email,
        data.password
      );
const res = await axios.post(
  `${import.meta.env.VITE_LOCALHOST_KEY}/internal-auth/get_user_by_email.php`,
  {
    email: data.email,
  }
);

console.log(res.data.user);
      toast.success(
        `Welcome back ${
          result.user.displayName || ""
        }`
      );

      navigate("/");
    } catch (error) {
      const errors = {
        "auth/invalid-credential":
          "Invalid email or password.",

        "auth/user-not-found":
          "No account found with this email.",

        "auth/wrong-password":
          "Incorrect password.",

        "auth/too-many-requests":
          "Too many attempts. Try again later.",

        "auth/network-request-failed":
          "Network error. Check your internet connection.",
      };

      toast.error(
        errors[error.code] || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="mx-auto max-w-2xl px-4 py-8">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <h1 className="text-4xl font-bold text-[#ff7900]">
            Dayal Stock
          </h1>
        </div>

        {/* Title */}
        <h2 className="mb-8 text-4xl font-bold text-[#05264D]">
          Log In
        </h2>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex h-14 items-center justify-center gap-3 rounded-lg bg-gray-100 font-medium hover:bg-gray-200">
            <FaGoogle
              className="text-red-500"
              size={20}
            />
           Continue with Google
          </button>

          <button className="flex h-14 items-center justify-center gap-3 rounded-lg bg-gray-100 font-medium hover:bg-gray-200">
            <FaGithub
              className="text-blue-600"
              size={20}
            />
           Continue with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="mx-4 text-sm text-gray-500">
            OR
          </span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>

   <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
        <div className="mb-6">
          <label className="mb-2 block text-xs font-semibold uppercase text-gray-500">
            Username / Email *
          </label>

          <input
            {...register("email", {
            required: "Email is required",
          })}
            type="text"
            className="h-14 w-full rounded-md border border-gray-300 px-4 outline-none focus:border-[#ff7900]"
          />
           {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="mb-2 block text-xs font-semibold uppercase text-gray-500">
            Password *
          </label>

          <div className="relative">
            <input
            {...register("password", {
              required: "Password is required",
            })}
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              className="h-14 w-full rounded-md border border-gray-300 px-4 pr-12 outline-none focus:border-[#ff7900]"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
            {errors.password && (
          <p className="mt-1 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
          </div>
        </div>

        {/* Terms */}
        <p className="mb-6 text-sm text-gray-500">
          This site is protected by reCAPTCHA and
          the Google Privacy Policy and Terms of
          Service apply.
        </p>

        {/* Login Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="h-14 w-full rounded-md bg-[#ff7900] font-semibold text-white"
      >
        {isSubmitting
          ? "Logging in..."
          : "Log In"}
      </button>
</form>

        {/* Links */}
        <div className="mt-8 text-center">
          <button className="text-[#ff7900] hover:underline">
            Forgot Your Password?
          </button>

          <p className="mt-6 text-gray-500">
            Don't have an account?{" "}
            <Link to={'/register'}><button className="text-[#ff7900] hover:underline">
              Create one
            </button></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;