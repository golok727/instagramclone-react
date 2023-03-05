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

export interface Post {
	userId: string;
	username: string;
	avatar: string;
	image: string;
	liked: boolean;
	description: string;
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

function createImage(w: number = 1080, h: number = 1080): string {
	return faker.image.image(w, h, true);
}

export function createRandomPost(): Post {
	return {
		userId: faker.datatype.uuid(),
		username: faker.internet.userName(),
		avatar: faker.image.avatar(),
		image: createImage(),
		liked: !Math.round(Math.random()),
		description: faker.lorem.paragraphs(Math.floor(Math.random() * 4) + 1),
	};
}
