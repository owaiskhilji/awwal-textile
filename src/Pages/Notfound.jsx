import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-900 px-4">
      
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-600 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link 
        to="/"
        className="px-6 py-3 bg-gray-900 rounded-lg text-white font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Go Back Home
      </Link>
    </div>
  );
}
