import {
  ShoppingBag,
  Package,
  ArrowRight,
} from "lucide-react";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="mb-10">
          <p className="text-sm text-gray-500 mb-2">
            Your account
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Welcome back, Khushi.
          </h1>

          <p className="text-gray-500 mt-3">
            Here's what's happening with your account.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center mb-5">
              <ShoppingBag size={21} />
            </div>

            <p className="text-sm text-gray-500">
              Cart Items
            </p>

            <h2 className="text-3xl font-bold mt-1">
              2
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center mb-5">
              <Package size={21} />
            </div>

            <p className="text-sm text-gray-500">
              Orders
            </p>

            <h2 className="text-3xl font-bold mt-1">
              4
            </h2>
          </div>

          <div className="bg-black text-white rounded-2xl p-6">
            <p className="text-sm text-gray-400">
              Continue Shopping
            </p>

            <h2 className="text-2xl font-bold mt-2">
              Find something you love.
            </h2>

            <button className="mt-6 flex items-center gap-2 text-sm font-medium">
              Explore products
              <ArrowRight size={17} />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default UserDashboard;