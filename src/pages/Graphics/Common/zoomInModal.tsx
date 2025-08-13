import React, { useState } from "react";
import "./zoomInModal.css";

interface ZoomInModalProps {
  images: { id: number; src: string; title: string }[];
}

export const ZoomInModal: React.FC<ZoomInModalProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Image grid */}
      <div className="zoom-grid">
        {images.map((img) => (
          <div key={img.id} className="zoom-item" onClick={() => openModal(img.src)}>
            <img src={img.src} alt={img.title} />
          </div>
        ))}
      </div>

      {/* Modal */}
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
