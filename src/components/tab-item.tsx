import { cn } from '@/lib/utils'

export default function TabItem({
	tab,
	currentTab,
	onClick,
	children,
}: {
	tab: string
	currentTab: string
	onClick: () => void
	children: React.ReactNode
}) {
	return (
		<button
			onClick={onClick}
			className={cn(
				'px-4 py-2 rounded-lg transition',
				tab === currentTab ? 'bg-gray-800 text-white' : 'bg-white text-black border',
			)}
		>
			{children}
		</button>
	)
}
