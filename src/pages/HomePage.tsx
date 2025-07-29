import { Button } from "@/components/ui/button";
import { useBreadcrumbContext } from "@/hooks/useBreadcrumbContext";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = observer(() => {
  const navigate = useNavigate();
  const breadcrumbStore = useBreadcrumbContext();

  useEffect(() => {
    breadcrumbStore.trail = [{ label: "Home", path: "/" }];
  }, []);

  return (
    <div className="h-full w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('src/assets/homepageBackground.jpg')` }}
      />
      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <motion.h1
          className="text-5xl font-bold drop-shadow-lg mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hyean (Anna) An
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="default"
            className="glass-button text-lg px-6 py-3 font-semibold hover:scale-105 transition"
            onClick={() => navigate("/introduction")}
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </div>
  );
});
