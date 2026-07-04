import { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../utlis/Hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { RegisterUser ,updateUserProfile} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Firebase/Auth Registration
      const result = await RegisterUser(data.email, data.password);
    await updateUserProfile({
  displayName: data.name,
});

const userData = {
  name: data.name,
  email: data.email,
  password: data.password,
  role: "user",
};
      // Save user in MySQL
      const res = await axios.post(
        `${import.meta.env.VITE_LOCALHOST_KEY}/users/create_new_user.php`,
        userData,
      );

      console.log(res);

      if (res.data.success) {
        toast.success(
          "🎉 Account created successfully! Welcome to Dayal Stock.",
        );
      }
    } catch (error) {
        console.log(error)
      const errors = {
        "auth/email-already-in-use": "This email is already registered.",
        "auth/invalid-email": "Please enter a valid email address.",

        "auth/network-request-failed":
          "Network error. Please check your internet connection.",

        "auth/too-many-requests": "Too many attempts. Please try again later.",
      };

      toast.error(errors[error.code] || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="mx-auto max-w-2xl px-4 py-8">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <h1 className="text-4xl font-bold text-[#ff7900]">Dayal Stock</h1>
        </div>

        {/* Title */}
        <h2 className="mb-8 text-4xl font-bold text-[#05264D]">
          Create Account
        </h2>

        {/* Social Signup */}
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className="flex h-14 items-center justify-center gap-3 rounded-lg bg-gray-100 font-medium transition hover:bg-gray-200"
          >
            <FaGoogle className="text-red-500" size={20} />
            Sign up with Google
          </button>

          <button
            type="button"
            className="flex h-14 items-center justify-center gap-3 rounded-lg bg-gray-100 font-medium transition hover:bg-gray-200"
          >
            <FaGithub className="text-black" size={20} />
            Sign up with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase text-gray-500">
              Name *
            </label>

            <input
              type="text"
              placeholder="Your Name"
              {...register("name", {
                required: "Name is required",
              })}
              className="h-14 w-full rounded-md border border-gray-300 px-4 outline-none focus:border-[#ff7900]"
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase text-gray-500">
              Email *
            </label>

            <input
              type="email"
              placeholder="e.g. work@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
              className="h-14 w-full rounded-md border border-gray-300 px-4 outline-none focus:border-[#ff7900]"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase text-gray-500">
              Password *
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="At least 6 characters"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
                className="h-14 w-full rounded-md border border-gray-300 px-4 pr-12 outline-none focus:border-[#ff7900]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1 h-4 w-4" />

            <span className="text-sm text-gray-600">
              Send me handpicked vectors, photos, and video recommendations
            </span>
          </label>

          {/* Register Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-14 w-full rounded-md bg-[#ff7900] font-semibold text-white transition hover:bg-[#e96f00] disabled:opacity-50"
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-500">
            Already have an account?
            <Link
              to="/login"
              className="ml-2 font-medium text-[#ff7900] hover:underline"
            >
              Log In →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
