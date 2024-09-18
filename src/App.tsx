import { useState, useTransition } from 'react'
import { Posts } from './components/posts'
import TabItem from './components/tab-item'

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
				<TabItem tab={tab} currentTab="home" onClick={() => switchTab('home')}>
					Home
				</TabItem>
				<TabItem tab={tab} currentTab="posts" onClick={() => switchTab('posts')}>
					Posts
				</TabItem>
				<TabItem tab={tab} currentTab="about" onClick={() => switchTab('about')}>
					About
				</TabItem>
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
