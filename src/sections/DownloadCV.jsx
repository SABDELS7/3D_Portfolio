// import { Download } from "lucide-react";

// const DownloadCVButton = () => {
//   return (
//     <a
//       href="/public/textures/CV_Abderrahmane_Salmi.pdf"
//       download="CV_Abderrahmane_Salmi.pdf"
//       className="fixed z-[10000] bottom-5 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition flex items-center justify-center"
//     >
//       <Download className="w-6 h-6" />
//     </a>
//   );
// };

// export default DownloadCVButton;


import { useState } from "react";
import { Download, X } from "lucide-react";

const DownloadCVButton = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setShow(true)}
        className="fixed z-[10000] bottom-5 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition"
      >
        <Download className="w-6 h-6" />
      </button>

      {/* Modal */}
      {show && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 shadow-xl w-72">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Download CV</h3>
              <button onClick={() => setShow(false)}>
                <X className="w-5 h-5 text-gray-500 hover:text-black" />
              </button>
            </div>

            <div className="space-y-3">
              <a
                href="/textures//CV_Abderrahmane_Salmi_en.pdf"
                download="CV_Abderrahmane_Salmi_en.pdf"
                onClick={() => setShow(false)}
                className="block w-full text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-600 transition"
              >
                English
              </a>

              <a
                href="/textures/CV_Abderrahmane_Salmi_fr.pdf"
                download="CV_Abderrahmane_Salmi_fr.pdf"
                onClick={() => setShow(false)}
                className="block w-full text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-600 transition"
              >
                Français
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DownloadCVButton;