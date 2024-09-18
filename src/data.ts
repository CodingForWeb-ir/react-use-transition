import { faker } from '@faker-js/faker'

export function createFakePost() {
	return {
		id: faker.string.uuid(),
		title: faker.lorem.sentence(),
		content: faker.lorem.paragraphs(3),
		author: {
			name: faker.person.fullName(),
			email: faker.internet.email(),
			avatar: faker.image.avatar(),
		},
		createdAt: faker.date.past(),
	}
}

export const fakePosts = faker.helpers.multiple(createFakePost, {
	count: 100,
})
