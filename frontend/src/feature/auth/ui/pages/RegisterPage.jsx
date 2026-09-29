import { ArrowLeft, UserPlus } from "lucide-react";
import {useAuth} from '../../hook/authHooks'

const RegisterPage = () => {

  const {register, handleSubmit, navigate, errors, handleRegister} = useAuth()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition mb-8">
          <ArrowLeft size={17} />
          Back to Home
        </button>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              Create account
            </h1>

            <p className="text-gray-500 mt-2">
              Join snitch and discover your style.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                Name
              </label>

              <input
                {...register('name', {
                  required: "Name is required"
                })}
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-black transition"
              />
              {errors.name && <p className="text-red-600">{errors.name.message}</p>}

            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>

              <input
                {...register('email', {
                  required: "Email is required"
                })}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-black transition"
              />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Password
              </label>

              <input
                {...register('password', {
                  required: "Password is required",
                  minLength: {
                    value: 4,
                    message: "Password length must be atleast 4 characters long"
                  }
                })}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-black transition"
              />
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-black text-white py-3.5 rounded-xl font-medium hover:bg-gray-800 transition"
            >
              <UserPlus size={18} />
              Create Account
            </button>

          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <span onClick={()=>{navigate('/auth')}} className="text-black font-medium cursor-pointer">
              Login
            </span>
          </p>

        </div>

      </div>

    </div>
  );
};

export default RegisterPage;