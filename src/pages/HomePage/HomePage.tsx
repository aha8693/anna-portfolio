import { Button } from "@/components/ui/button";
import { useSetBreadcrumb } from "@/hooks/useSetBreadcrumb";
import { ROUTES } from "@/types/routes";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export const HomePage = observer(() => {
  const navigate = useNavigate();

  useSetBreadcrumb([{ label: "Home", path: ROUTES.HOME }]);

  return (
    <div className="h-full w-full">
      {/* Background Image */}
      <div
        className="intro-bg"
        style={{
          backgroundImage: `url(/anna-portfolio/images/homepageBackground.jpeg)`,
        }}
      />
      <div className="intro-bg bg-black/50" />

      {/* Content */}
      <div className="container-full intro-container-font">
        <motion.div
          className="text-lg drop-shadow-lg mb-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Fullstack Developer / Machine Learning Engineer / Visual Creator
        </motion.div>

        <motion.h1
          className="text-5xl font-bold drop-shadow-lg mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hyean Anna An
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="default"
            className="glass-button intro-button glass-button:hove"
            onClick={() => navigate("/introduction")}
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </div>
  );
});
