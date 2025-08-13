import React, { useState } from "react";
import "./zoomInModal.css";

interface ZoomInModalProps {
  images: {
    id: number;
    src: string;
    title: string;
    description?: string;
    url?: string;
  }[];
  mode: string;
}

export const ZoomInModal: React.FC<ZoomInModalProps> = ({ images, mode }) => {
  const isTeamPj = mode === "TeamProject";
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    if (!isTeamPj) {
      setSelectedImage(src);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="zoom-grid">
        {images.map((img) => (
          <div key={img.id} className="zoom-item">
            {isTeamPj ? (
              <a
                href={img.url || img.src}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={img.src} alt={img.title} />
                <p className="zoom-title">{img.title}</p>
                <p className="zoom-description">{img.description}</p>
              </a>
            ) : (
              <div onClick={() => openModal(img.src)}>
                <img src={img.src} alt={img.title} />
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="zoom-modal" onClick={closeModal}>
          <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
            <button className="zoom-close" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage} alt="Zoomed" className="zoom-image" />
          </div>
        </div>
      )}
    </>
  );
};
