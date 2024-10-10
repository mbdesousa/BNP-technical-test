/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import { ToastType, useToast } from "@/contexts/ToastContext";
import styles from "@/styles/context-api.module.css";
import type { IToastMessage } from "@/types/toast-message";

export default function ContextApi() {
	const Toast = useToast();

	const messages: Array<IToastMessage> = [
		{
			id: "1",
			message: "Mensagem de sucesso",
			type: "success",
		},
		{
			id: "2",
			message: "Mensagem de erro",
			type: "error",
		},
	];

	function handleSuccessButtonClick() {
		Toast.show(ToastType.SUCCESS, "Mensagem de sucesso");
	}

	function handleErrorButtonClick() {
		Toast.show(ToastType.ERROR, "Mensagem de erro");
	}

	return (
		<>
			<div className={styles.container}>
				<button type="button" onClick={handleSuccessButtonClick}>
					Disparar mensagem de sucesso
				</button>
				<button type="button" onClick={handleErrorButtonClick}>
					Disparar mensagem de erro
				</button>
			</div>
		</>
	);
}
