/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from "react";
import Head from "next/head";

import styles from "@/styles/modal.module.css";
import { Modal } from "@/components/Modal";
import { ModalConfirm } from "@/components/ModalConfirm";

export default function Home() {
	const [modalVisibility, setModalVisibility] = useState(false);

	function renderModalContent() {
		// You can replace the content below with your own for dynamic purpose.
		return <p style={{ margin: 36 }}>Tem certeza que deseja confirmar?</p>;
	}

	return (
		<>
			<main className={styles.container}>
				<button type="button" onClick={() => setModalVisibility(true)}>
					Abrir modal de confirmação
				</button>
			</main>

			<ModalConfirm
				title="Confirmação"
				isOpen={modalVisibility}
				content={renderModalContent()}
				onClose={() => setModalVisibility(false)}
				onConfirm={() => setModalVisibility(false)}
				footer={{ confirmText: "Sim", cancelText: "Não" }}
			/>
		</>
	);
}
