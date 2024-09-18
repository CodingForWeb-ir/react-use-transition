import { memo } from 'react'
import { faker } from '@faker-js/faker'
import { sleep } from '@/lib/utils'

// Define the shape of a Post
interface Author {
	name: string
	email: string
	avatar: string
}

interface Post {
	id: string
	title: string
	content: string
	author: Author
	createdAt: Date
}

// Generating fake posts
export const createRandomPost = (): Post => ({
	id: faker.string.uuid(),
	title: faker.lorem.sentence(),
	content: faker.lorem.paragraphs(3),
	author: {
		name: faker.person.fullName(),
		email: faker.internet.email(),
		avatar: faker.image.avatar(),
	},
	createdAt: faker.date.past(),
})

// Initialize fake posts
const posts: Post[] = Array.from({ length: 100 }, createRandomPost)

// Wrapping this in memo so the list only renders once
// The actual slowdown happens in the SlowPost component
export const Posts = memo(function () {
	const postsList = posts.map((post: Post) => <SlowPost key={post.id} post={post} />)

	return (
		<>
			<h1 className="text-3xl font-bold mb-4">Posts Page</h1>
			<ul className="space-y-6">{postsList}</ul>
		</>
	)
})

// SlowPost component with type annotations and Tailwind styles
function SlowPost({ post }: { post: Post }) {
	sleep(10)
	return (
		<li className="border p-6 rounded-lg bg-white shadow-lg">
			<div className="flex items-center mb-4">
				<img src={post.author.avatar} alt="avatar" className="w-12 h-12 rounded-full mr-4" />
				<div>
					<p className="text-lg font-semibold">{post.author.name}</p>
					<p className="text-sm text-gray-600">{post.author.email}</p>
				</div>
			</div>
			<h2 className="text-xl font-bold mb-2">{post.title}</h2>
			<p className="text-gray-700">{post.content}</p>
			<p className="mt-4 text-gray-500 text-sm">
				<strong>Published:</strong> {post.createdAt.toDateString()}
			</p>
		</li>
	)
}

;<div className="mt-4">
	{tab === 'home' && <h1 className="text-3xl font-bold">Home Page</h1>}
	{tab === 'posts' && <Posts />}
	{tab === 'about' && <h1 className="text-3xl font-bold">About Page</h1>}
</div>
