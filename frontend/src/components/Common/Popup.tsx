import { useState, useEffect, useCallback } from 'react';

interface PopupProps {
  message: string;
  type: 'error' | 'success' | 'warning';
  onClose: () => void;
  duration?: number;
}

// eslint-disable-next-line react-refresh/only-export-components
const Popup = ({ message, type, onClose, duration = 7000 }: PopupProps) => {
  const [isClosing, setIsClosing] = useState(false);

  // Utilisation de useCallback pour mémoriser la fonction
  const startClosing = useCallback(() => {
    setIsClosing(true);
    setTimeout(onClose, 3000);
  }, [onClose]); // onClose est la seule dépendance

  useEffect(() => {
    const timer = setTimeout(() => {
      startClosing();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, startClosing]); // Maintenant les dépendances sont stables

  const getColor = () => {
    switch (type) {
      case 'error': return 'bg-red-600';
      case 'success': return 'bg-green-600';
      case 'warning': return 'bg-amber-500';
      default: return 'bg-blue-600';
    }
  };

  return (
    <div 
      role="alert"
      aria-live="assertive"
      className={`fixed top-4 right-4 z-50 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
    >
      <div className={`${getColor()} text-white px-6 py-4 rounded-lg shadow-lg flex items-center popup-container`}>
        <span className="mr-4">{message}</span>
        <button 
          onClick={startClosing}
          className="ml-4 text-white hover:text-gray-200 focus:outline-none"
          aria-label="Fermer la notification"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const usePopup = () => {
  const [popup, setPopup] = useState<{
    show: boolean;
    message: string;
    type: 'error' | 'success' | 'warning';
  }>({ show: false, message: '', type: 'error' });

  const showPopup = (message: string, type: 'error' | 'success' | 'warning' = 'error') => {
    setPopup({ show: true, message, type });
  };

  const hidePopup = () => {
    setPopup(prev => ({ ...prev, show: false }));
  };

  const PopupComponent = () => (
    <>
      {popup.show && (
        <Popup 
          message={popup.message} 
          type={popup.type} 
          onClose={hidePopup} 
        />
      )}
    </>
  );

  return { showPopup, hidePopup, PopupComponent };
};