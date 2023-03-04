import { faker } from "@faker-js/faker";

export interface User {
	userId: string;
	username: string;
	email: string;
	avatar: string;
	password: string;
	birthdate: Date;
	registeredAt: Date;
}
export function createRandomUser(): User {
	return {
		userId: faker.datatype.uuid(),
		username: faker.internet.userName(),
		email: faker.internet.email(),
		avatar: faker.image.avatar(),
		password: faker.internet.password(),
		birthdate: faker.date.birthdate(),
		registeredAt: faker.date.past(),
	};
}
