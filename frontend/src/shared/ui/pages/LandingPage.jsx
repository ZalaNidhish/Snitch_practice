import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import {NavLink} from 'react-router'

const LandingPage = () => {
  return (
    <div className="bg-white text-black">
      
      <section className="min-h-[calc(90vh-80px)] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          
          <div className="max-w-3xl">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-600 mb-8">
              <Sparkles size={15} />
              Discover your style
            </div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Style that feels
              <br />
              <span className="text-gray-400">like you.</span>
            </h1>

            <p className="mt-7 text-lg text-gray-500 max-w-xl leading-relaxed">
              Discover timeless pieces, modern essentials and everything
              you need to build a wardrobe that speaks for itself.
            </p>

            <div className="flex items-center gap-4 mt-9">

            <Link to={'/auth'} className="flex items-center gap-2 px-6 py-3.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
              Shop Now
              <ArrowRight size={18} />
            </Link>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default LandingPage;