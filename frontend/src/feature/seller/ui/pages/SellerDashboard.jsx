import {
  Package,
  PackageCheck,
  PackageX,
} from "lucide-react";

const SellerDashboard = () => {
  return (
    <div className="ml-64 min-h-screen bg-gray-50">

      <main className="p-10">

        <div className="mb-10">
          <p className="text-sm text-gray-500">
            Seller Dashboard
          </p>

          <h1 className="text-4xl font-bold tracking-tight mt-1">
            Welcome, Seller.
          </h1>

          <p className="text-gray-500 mt-3">
            Manage your products and store.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
              <Package size={20} />
            </div>

            <p className="text-sm text-gray-500 mt-5">
              All Products
            </p>

            <h2 className="text-3xl font-bold mt-1">
              24
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
              <PackageCheck size={20} />
            </div>

            <p className="text-sm text-gray-500 mt-5">
              Listed Products
            </p>

            <h2 className="text-3xl font-bold mt-1">
              18
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
              <PackageX size={20} />
            </div>

            <p className="text-sm text-gray-500 mt-5">
              Unlisted Products
            </p>

            <h2 className="text-3xl font-bold mt-1">
              6
            </h2>
          </div>

        </div>

      </main>

    </div>
  );
};

export default SellerDashboard;