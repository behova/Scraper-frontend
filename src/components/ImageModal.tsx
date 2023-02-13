import React, { MouseEvent } from "react";

interface ImageModalProps {
  visible: boolean;
  onClose: () => void;
  imageSource: string;
}

const ImageModal = ({ visible, onClose, imageSource }: ImageModalProps) => {
  const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === "modal") onClose();
  };
  if (!visible) {
    return null;
  }
  return (
    <div
      onClick={handleOnClose}
      id="modal"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
    flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded">
        <img src={imageSource} />
      </div>
    </div>
  );
};
export default ImageModal;
