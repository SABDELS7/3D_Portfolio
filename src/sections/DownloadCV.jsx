import { Download } from "lucide-react";

const DownloadCVButton = () => {
  return (
    <a
      href="/path-to-your-cv.pdf"
      download="Your_CV.pdf"
      className="fixed z-100 bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition flex items-center justify-center"
    >
      <Download className="w-6 h-6" />
    </a>
  );
};

export default DownloadCVButton;