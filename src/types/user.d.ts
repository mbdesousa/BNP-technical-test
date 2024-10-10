export interface IUser {
	id: number;
	name: string;
	email: string;
}

export interface IUserCreate extends IUser {
	id?: number;
}
