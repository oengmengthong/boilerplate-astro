import { useState, useCallback } from 'react';

interface ToastOptions {
  type?: 'success' | 'error' | 'info';
  duration?: number;
}

export function useToast() {
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
    duration: number;
  } | null>(null);

  const showToast = useCallback((message: string, options: ToastOptions = {}) => {
    const { type = 'info', duration = 3000 } = options;
    setToast({ message, type, duration });
  }, []);

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  return {
    toast,
    showToast,
    hideToast
  };
}