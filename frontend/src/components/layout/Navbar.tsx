import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    {
      name: "Features",
      path: "/features",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-8 py-4 backdrop-blur-2xl">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-heading font-bold tracking-tight"
        >
          <span className="text-orange-500">Reddit</span>
          <span className="text-white">Pulse</span>
          <span className="ml-2 text-sm text-gray-400">AI</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition ${
                location.pathname === item.path
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/dashboard"
          className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-sm font-semibold transition duration-300 hover:scale-105"
        >
          Launch →
        </Link>

      </div>
    </motion.header>
  );
}