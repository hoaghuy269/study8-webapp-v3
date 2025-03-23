import React, { useMemo, useState, useCallback, createContext } from "react";

import MessageAlert from "../components/alert/message-alert";

interface ToastContextType {
    addToast: (message: string, severity?: "success" | "info" | "warning" | "error") => void;
}

export const TOAST_SEVERITY = {
    SUCCESS: "success",
    INFO: "info",
    WARNING: "warning",
    ERROR: "error",
} as const;

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toast, setToast] = useState<{ open: boolean; message: string | null; severity?: "success" | "info" | "warning" | "error" }>(
        {
            open: false,
            message: null,
            severity: "success",
        }
    );

    const addToast = useCallback((message: string, severity: "success" | "info" | "warning" | "error" = "success") => {
        setToast({ open: true, message, severity });
    }, []);

    const handleClose = useCallback(() => {
        setToast((prev) => ({ ...prev, open: false }));
    }, []);

    const contextValue = useMemo(() => ({ addToast }), [addToast]);

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            <MessageAlert open={toast.open} message={toast.message} severity={toast.severity} onClose={handleClose} />
        </ToastContext.Provider>
    );
};
