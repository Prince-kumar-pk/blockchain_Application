import React, { useState } from 'react'

const PopUp = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };



  return (
<div>
      <button onClick={openPopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open Popup
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white p-8 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-center">Status</h2>
            <p className='text-center'>Meggase</p>
            <button onClick={closePopup} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PopUp