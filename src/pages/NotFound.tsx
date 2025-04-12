
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="bg-white/5 backdrop-blur-sm p-12 rounded-lg border border-celestial/20 shadow-lg text-center max-w-lg">
          <h1 className="text-6xl font-bold mb-4 glow-text">404</h1>
          <p className="text-xl text-white mb-8">Oops! Page not found</p>
          <Link to="/" className="register-btn inline-flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
