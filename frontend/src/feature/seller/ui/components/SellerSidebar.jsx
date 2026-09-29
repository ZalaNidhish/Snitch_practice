import {
  Package,
  PackageCheck,
  PackageX,
  Plus,
  LogOut,
} from "lucide-react";

const SellerSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col">

      {/* Logo */}
      <div className="px-6 py-6 border-b border-gray-100">
        <h1 className="text-2xl font-bold tracking-tight">
          snitch
        </h1>

        <p className="text-xs text-gray-400 mt-1">
          Seller Panel
        </p>
      </div>

      {/* Seller */}
      <div className="px-6 py-6">
        <p className="text-xs text-gray-400 uppercase tracking-wider">
          Welcome
        </p>

        <p className="font-semibold mt-1">
          Seller
        </p>
      </div>

      {/* Navigation */}
      <nav className="px-3 space-y-1">

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-100 text-black text-sm font-medium">
          <Package size={18} />
          All Products
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-black transition text-sm">
          <PackageCheck size={18} />
          Listed Products
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-black transition text-sm">
          <PackageX size={18} />
          Unlisted Products
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-black transition text-sm">
          <Plus size={18} />
          Create Product
        </button>

      </nav>

      {/* Logout */}
      <div className="mt-auto p-4 border-t border-gray-100">

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-black transition text-sm">
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
};

export default SellerSidebar;