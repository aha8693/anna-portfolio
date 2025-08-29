import { useSetBreadcrumb } from "@/hooks/useSetBreadcrumb";
import { ROUTES } from "@/types/routes";
import "./contact.css";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  useSetBreadcrumb([
    { label: "Home", path: ROUTES.HOME },
    { label: "Contact", path: ROUTES.CONTACT },
  ]);

  return (
    <div className="contact-page">
      <h1 className="contact-title">Get in Touch</h1>
      <div className="contact-icons">
        <a
          href="mailto:hyeanan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon email"
        >
          <Mail size={48} />
          <span>Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/hyean-an/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon linkedin"
        >
          <Linkedin size={48} />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/aha8693/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon github"
        >
          <Github size={48} />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};
