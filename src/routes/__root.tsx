import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRoute,
} from '@tanstack/react-router'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width' },
			{ title: 'Paw Paws Dog Grooming' },
			{
				name: 'description',
				content:
					"Professional dog grooming with barbershop soul. Where every pup gets the gentleman's treatment.",
			},
		],
		links: [
			{ rel: 'icon', type: 'image/png', href: '/images/logo.png' },
			{ rel: 'apple-touch-icon', href: '/images/logo.png' },
			{ rel: 'stylesheet', href: appCss },
		],
	}),
	component: RootComponent,
})

function RootComponent() {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<HeadContent />
			</head>
			<body className="theme-bg-primary theme-text-primary antialiased">
				<Outlet />
				<Scripts />
			</body>
		</html>
	)
}
