/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */

import styles from "@/styles/lista.module.css";
import type { ICity } from "@/types/city.d";
import { useEffect, useState } from "react";

export default function Lista() {
	const [list, setUsers] = useState<Array<ICity>>([
		{
			id: new Date().getTime().toString(),
			name: "São Paulo",
		},
	]);

	useEffect(() => {
		const interval = setInterval(() => {
			fetch("/api/cities/10")
				.then((response) => response.json())
				.then((data) => setUsers(data));
		}, 60000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>Lista de cidades</h2>

				<div data-list-container>
					{list.map((city) => (
						<div data-list-item key={city.id}>
							{city.name}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
