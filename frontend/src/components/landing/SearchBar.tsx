import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  return (
    <div className="flex justify-center">

      <Link
        to="/dashboard"
        className="
          inline-flex
          items-center
          gap-3
          rounded-full
          bg-gradient-to-r
          from-orange-500
          to-red-600
          px-8
          py-4
          text-lg
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-orange-500/30
        "
      >
        Enter Dashboard
        <ArrowRight size={20} />
      </Link>

    </div>
  );
}