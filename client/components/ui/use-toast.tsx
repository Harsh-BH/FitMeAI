// This is a simplified version of the shadcn/ui toast component
"use client"
import { createContext, useContext, useState } from "react";

type ToastType = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

type ToastContextType = {
  toast: (props: ToastType) => void;
};

const ToastContext = createContext<ToastContextType>({
  toast: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (toast: ToastType) => {
    setToasts((prev) => [...prev, toast]);
    setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toast: addToast }}>
      {children}
      
      <div className="fixed bottom-0 right-0 p-4 space-y-2 z-50">
        {toasts.map((toast, i) => (
          <div 
            key={i}
            className={`p-4 rounded-lg shadow-lg max-w-sm transform transition-all animate-in slide-in-from-right
              ${toast.variant === "destructive" ? "bg-destructive text-white" : "bg-white dark:bg-gray-800 border"}`}
          >
            {toast.title && <h3 className="font-medium">{toast.title}</h3>}
            {toast.description && <p className="text-sm opacity-90">{toast.description}</p>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
