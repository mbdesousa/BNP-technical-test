import { ToastMessage } from "@/components/ToastMessage";
import styles from "@/styles/context-api.module.css";
import React, { createContext, useContext, useEffect, useState } from "react";

export enum ToastType {
	SUCCESS = "success",
	ERROR = "error",
}

export interface IToastMessage {
	id: string;
	message: string;
	type: ToastType;
}

// Context interface
export interface IToastContext {
	message?: IToastMessage;
	addMessage: (message: string, type?: ToastType) => void;
	removeMessage: () => void;
	show: (type: ToastType, message: string) => void;
}

export const ToastContext = createContext<IToastContext | null>(null);

function ToastProvider({ children }) {
	const [message, setMessage] = useState<IToastMessage | undefined>(undefined);

	function addMessage(message: string, type: ToastType = ToastType.SUCCESS) {
		setMessage({ id: Math.random().toString(36), message, type });
	}

	function removeMessage() {
		setMessage(undefined);
	}

	function show(type: ToastType, message: string) {
		addMessage(message, type);
	}

	useEffect(() => {
		const timer = setTimeout(() => removeMessage(), 3000);
		return () => clearTimeout(timer);
	}, [message]);

	return (
		<ToastContext.Provider value={{ message, addMessage, removeMessage, show }}>
			<div className={styles["toast-container"]}>
				{message && <ToastMessage key={message.id} content={message} />}
			</div>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;

const useToast = (): IToastContext => {
	const context = useContext(ToastContext);

	if (!context) {
		throw new Error("useToast must be used within a ToastProvider");
	}

	return context;
};

export { useToast };
