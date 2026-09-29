import { ArrowLeft, LogIn } from "lucide-react";
import { useAuth } from "../../hook/authHooks";

const LoginPage = () => {

  const {register, handleSubmit, handleLoginUser, errors, navigate} = useAuth()

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
              Welcome back
            </h1>

            <p className="text-gray-500 mt-2">
              Login to continue to snitch.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleLoginUser)} className="space-y-5">

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
                  required: "Password is required"
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
              <LogIn size={18} />
              Login
            </button>

          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <span 
              className="text-black font-medium cursor-pointer" 
              onClick={()=> navigate('/auth/register')}
            >
              Register
            </span>
          </p>

        </div>

      </div>

    </div>
  );
};

export default LoginPage;