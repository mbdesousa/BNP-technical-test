/**
 * @api {post} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import type { NextApiRequest, NextApiResponse } from "next/types";

import type { IUser, IUserCreate } from "@/types/user.d";

const users: IUser[] = [];

export default (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "POST") {
		return res.status(405).json({
			ok: false,
			message: "Method not allowed",
		});
	}

	const { name, email }: IUserCreate = req.body;

	if (!name || !email) {
		return res.status(400).json({
			ok: false,
			message: "Name and email are required",
		});
	}

	const newUser: IUser = {
		id: Date.now(),
		name,
		email,
	};

	users.push(newUser);

	return res.status(201).json(newUser);
};
