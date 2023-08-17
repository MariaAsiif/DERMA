import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';

function SuccessModal({ isVisible , closingAll}) {
  if (!isVisible) {
    return null;
  }

  const closeModal = () => {
    const modal = document.getElementById('popup-modal');
    if (modal) {
      modal.classList.add('hidden'); 
    }
    closingAll();
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isVisible ? '' : 'hidden'}`}>
      <div id="popup-modal" className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="popup-modal"
          onClick={closeModal}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="p-6 text-center">
          {/* Modal content */}
          <br/>
          <div className="flex items-center justify-center mb-5">
            <BsCheckCircle className="text-green-500 w-10 h-10 mr-2" />
            
          </div>
          <div className="flex items-center justify-center mb-5">
            
            <span className="text-lg font-normal text-green-500 dark:text-green-400">
              Your request was sent successfully!
            </span>
          </div>
          <button
            data-modal-hide="popup-modal"
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            onClick={() => {
              closeModal(); // Close SuccessModal and reset showModal state
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
