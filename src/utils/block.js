import { useEffect } from 'react';

const OrientationLock = () => {
  useEffect(() => {
    const lockOrientation = () => {
      // Verificar si el navegador admite la API de bloqueo de orientación
      if (typeof window !== 'undefined' && window.screen && window.screen.orientation && window.screen.orientation.lock) {
        // Bloquear la orientación en modo landscape
        window.screen.orientation.lock('landscape').catch(error => {
          console.error('No se pudo bloquear la orientación:', error);
        });
      }
    };

    lockOrientation();
  }, []);

  return null;
};

export default OrientationLock;