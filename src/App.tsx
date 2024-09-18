import { useState, useTransition } from 'react'
import { Posts } from './components/posts'

function App() {
	const [tab, setTab] = useState<'home' | 'posts' | 'about'>('home')
	const [isPending, startTransition] = useTransition()

	function switchTab(tab: 'home' | 'posts' | 'about') {
		startTransition(() => {
			setTab(tab)
		})
	}

	return (
		<main className="min-h-screen bg-gray-100 p-8">
			<nav className="mb-8 flex space-x-4">
				<button
					onClick={() => switchTab('home')}
					className={`px-4 py-2 rounded-lg transition ${
						tab === 'home' ? 'bg-gray-800 text-white' : 'bg-white text-black border'
					}`}
				>
					Home
				</button>
				<button
					onClick={() => switchTab('posts')}
					className={`px-4 py-2 rounded-lg transition ${
						tab === 'posts' ? 'bg-gray-800 text-white' : 'bg-white text-black border'
					}`}
				>
					Posts
				</button>
				<button
					onClick={() => switchTab('about')}
					className={`px-4 py-2 rounded-lg transition ${
						tab === 'about' ? 'bg-gray-800 text-white' : 'bg-white text-black border'
					}`}
				>
					About
				</button>
			</nav>
			<div className="mt-4">
				{isPending && <p className="text-blue-500">Loading...</p>}
				{!isPending && tab === 'home' && <h1 className="text-3xl font-bold">Home Page</h1>}
				{!isPending && tab === 'posts' && <Posts />}
				{!isPending && tab === 'about' && <h1 className="text-3xl font-bold">About Page</h1>}
			</div>
		</main>
	)
}

export default App
