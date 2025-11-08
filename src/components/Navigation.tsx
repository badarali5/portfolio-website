import { cn } from "@/lib/utils";

const navigation = [
	{ name: "home", href: "#", active: true },
	{ name: "projects", href: "#projects" },
	{ name: "skills", href: "#tech" },
	{ name: "blog", href: "#blog" }, // internal route now opens in same tab
	{
		name: "github",
		href: "https://github.com/badarali5",
		external: true,
	},
	{
		name: "linkedin",
		href: "https://www.linkedin.com/in/badar-ali-07bb36282/",
		external: true,
	},
];

const handleNavClick = (href: string, external?: boolean) => {
	if (external) return;

	// internal route to blogs
	if (href.startsWith('/')) {
		window.history.pushState({}, '', href);
		// trigger a popstate-like manual navigation for react-router by dispatching event
		window.dispatchEvent(new PopStateEvent('popstate'));
		return;
	}

	if (href === "#") {
		window.scrollTo({ top: 0, behavior: "smooth" });
		return;
	}

	const element = document.querySelector(href);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
};

export const Navigation = () => {
	return (
		<nav className="flex flex-wrap gap-6 justify-center mb-8">
			{navigation.map((item, idx) => (
				<button
					key={item.name}
					onClick={() => handleNavClick(item.href, item.external)}
					className={cn(
						"font-mono text-sm cursor-pointer border-none bg-transparent p-0 nav-link-item random-underline-hover",
						item.active
							? "nav-link-active text-nav-link-active"
							: "text-nav-link hover:text-nav-link-hover"
					)}
					// data-index for potential dynamic coloring later if needed
					data-index={idx}
				>
					{item.external ? (
						<a
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-inherit hover:text-inherit"
						>
							{item.name}
						</a>
					) : (
						item.name
					)}
				</button>
			))}
		</nav>
	);
};