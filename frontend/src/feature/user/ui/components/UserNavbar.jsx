import { ShoppingBag, LogOut } from "lucide-react";

const UserNavbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-tight">
          snitch
        </h1>

        <div className="flex items-center gap-6">

          <span className="text-sm text-gray-600">
            Welcome, <span className="text-black font-medium">Khushi</span>
          </span>

          <button className="relative p-2.5 rounded-full hover:bg-gray-100 transition">
            <ShoppingBag size={20} />
            
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-[10px] rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          <button className="flex items-center gap-2 text-sm font-medium hover:text-gray-500 transition">
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
};

export default UserNavbar;