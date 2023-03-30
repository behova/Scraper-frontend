import React from "react";

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
      className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm
    flex justify-center items-center"
    >
      <div className="bg-stone-200 p-2 rounded m-8">
        <img className="max-h-screen max-w-full" src={imageSource} />
      </div>
    </div>
  );
};
export default ImageModal;
