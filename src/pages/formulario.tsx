/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import { useForm } from "react-hook-form";

import styles from "@/styles/formulario.module.css";

type FormData = {
	name: string;
	email: string;
};

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = async (data: FormData) => {
		try {
			const response = await fetch("/api/users/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("Erro ao criar usuário");
			}

			alert("Usuário criado com sucesso!");
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						id="name"
						placeholder="Name"
						{...register("name", { required: true, minLength: 3 })}
					/>
					{errors.name && <span>Nome inválido</span>}

					<input
						type="email"
						id="email"
						placeholder="E-mail"
						{...register("email", {
							required: true,
							pattern: /^\S+@\S+\.\S+$/i,
						})}
					/>
					{errors.email && <span>E-mail inválido</span>}

					<button type="submit" data-type="confirm">
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
}
