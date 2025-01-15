import { useEffect, useState } from "react";

const Modal = ({ school, onClose }) => {
    if (!school) return null;

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (school) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }, [school]);

    const handleBackdropClick = (e) => {
        if (e.target.id === "modal-backdrop") {
            setIsVisible(false);
            setTimeout(() => {
              onClose(); 
            }, 300);
        }
      };

      const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
          onClose();
        }, 300); 
      };
  
    return (
      <div id="modal-backdrop"
      onClick={handleBackdropClick} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
        <div className={`transform transition-transform duration-300 bg-white rounded-lg w-full max-w-lg relative ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}>
          <button
            onClick={handleClose}
            className="absolute top-3 left-3 text-2xl bg-white px-3 rounded-full text-black hover:text-gray-700"
          >
            &times;
          </button>
          <img
            src={school.img}
            alt={school.name}
            className="rounded-t-lg w-full mb-2"
          />
          <div className="p-5">
            <h2 className=" font-bold">{school.name}</h2>
            <p className="text-sm bg-[#1dc468] max-w-max px-2 rounded text-white">
              {school.applicants}
            </p>
            <div className="flex items-center gap-2 my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 12.508 15.174"
              >
                <g data-name="1">
                  <path
                    data-name="Path 114"
                    d="M6.221 8.81a2.432 2.432 0 002.437-2.436A2.507 2.507 0 006.221 3.85a2.432 2.432 0 00-2.436 2.437A2.568 2.568 0 006.221 8.81zM2.132 2.197a5.784 5.784 0 018.18 8.18l-4.09 4.09-4.09-4.09a5.942 5.942 0 010-8.18z"
                    fill="#1dc468"
                    stroke="#1dc468"
                    fill-rule="evenodd"
                  ></path>
                </g>
              </svg>
              <p className="text-sm">{school.location}</p>
            </div>
            <p className="text-gray-700 my-4 text-sm">{school.details}</p>
            <hr className="w-full bg-gray-300 h-[1px] my-5" />
            <div className="flex items-center gap-4">
              <img
                src={school.teacher.img}
                alt={school.teacher.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-bold">{school.teacher.name}</h4>
                <p className="text-sm text-gray-600">{school.teacher.post}</p>
              </div>
            </div>
            <div className="flex items-start gap-1 mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 31.887 26.63"
                class="inline-block"
              >
                <g data-name="Group 2220" fill="#1dc468">
                  <path
                    data-name="Path 3103"
                    d="M10.206 12.068a8.449 8.449 0 00-2.335-.341 7.337 7.337 0 00-2.927.6c.736-2.694 2.5-7.342 6.025-7.866a.837.837 0 00.682-.6l.77-2.753a.836.836 0 00-.692-1.054A5.846 5.846 0 0010.942 0C6.715 0 2.529 4.412.762 10.729c-1.036 3.706-1.34 9.278 1.214 12.785a7.625 7.625 0 006.2 3.115h.033a7.418 7.418 0 002-14.561z"
                  ></path>
                  <path
                    data-name="Path 3104"
                    d="M30.93 15.572a7.436 7.436 0 00-4.46-3.5 8.449 8.449 0 00-2.334-.341 7.339 7.339 0 00-2.928.6c.736-2.694 2.5-7.342 6.025-7.866a.837.837 0 00.682-.6l.77-2.753a.836.836 0 00-.692-1.054 5.838 5.838 0 00-.787-.054c-4.227 0-8.413 4.412-10.18 10.729-1.037 3.706-1.341 9.278 1.214 12.786a7.624 7.624 0 006.2 3.115h.033a7.418 7.418 0 006.457-11.062z"
                  ></path>
                </g>
              </svg>
              <p className=" text-black text-sm font-bold">
                {school.teacher.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Modal;