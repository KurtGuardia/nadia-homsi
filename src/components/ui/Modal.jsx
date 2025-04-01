'use client'

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null

  // Function to handle clicks on the overlay
  const handleOverlayClick = () => {
    onClose()
  }

  // Function to stop propagation when clicking inside the modal content
  const handleContentClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div
      className='fixed inset-0 z-50 flex justify-center items-center p-4'
      style={{
        backgroundColor: 'rgba(var(--primary-rgb), 0.5)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={handleOverlayClick}
    >
      <div
        className='bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto'
        onClick={handleContentClick}
      >
        <div className='p-6'>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-2xl font-bold text-secondary'>
              {title}
            </h3>
            <button
              onClick={onClose}
              className='text-gray-500 hover:text-gray-700 transition-colors'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M6 18L18 6M6 6l12 12'></path>
              </svg>
            </button>
          </div>
          <div className='mt-4'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
