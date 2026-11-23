export interface Link {
	label: string;
	href: string;
}

// A row in experience or education. Clicking it expands `details`.
export interface Entry {
	name: string;
	logo: string;
	// Swapped in on the light theme when `logo` doesn't show up on a light background
	lightLogo?: string;
	description: string;
	date: string;
	location: string;
	details: string[];
	current?: boolean;
	intern?: boolean;
}

export interface Project {
	name: string;
	description: string;
	links: Link[];
}

export const profile = {
	name: 'Geoffrey Lee',
	bio: 'Software engineering intern in New York City.',
};

export const links: Link[] = [
	{ label: 'github', href: 'https://github.com/lgeoff31' },
	{ label: 'linkedin', href: 'https://www.linkedin.com/in/lgeoff31/' },
	{ label: 'email', href: 'mailto:geoffrey31415@gmail.com' },
	{ label: 'resume', href: '/resume.pdf' },
];

export const experience: Entry[] = [
	{
		name: 'Walleye Capital',
		logo: '/images/walleye.png',
		description: 'Quantitative Strategies',
		date: 'Summer 2027',
		location: 'New York, NY',
		intern: true,
		details: [
			'Reliability platform that auto-generates E2E tests for revenue-critical ad events from production traces: 117 events and 9,761 tests protecting $100M+ in annual revenue.',
			'Config-driven pipeline that alerts on data corruption, ingesting 75TB/day, with optimizations that cut its storage by 99.5%.',
			'Monitoring and alerting for the core ad impressions service (170B+ daily events), reducing on-call load by 6 hours a week.',
			'Proposed and landed a retry mechanism in the ad impression cache for fault tolerance against upstream outages, projected to save $11.8M per half.',
		],
	},
	{
		name: 'Radar Labs',
		logo: '/images/radar.png',
		description: 'Geolocation Infrastructure',
		date: 'Winter 2027',
		location: 'New York, NY',
		intern: true,
		details: [
			'Parallelized query plans for database clustering on 6.84% of tables: ~35% faster clustering and ~25% faster table scans.',
			'Reworked clustering file selection by consolidating clustering stages, cutting table scan costs ~30% for insert-heavy tables.',
		],
	},
	{
		name: 'Atoms',
		logo: '/images/atoms.png',
		description: 'Money Movement',
		date: 'Summer 2026',
		location: 'New York, NY',
		intern: true,
		details: [
			'Distributed caching microservice handling 30,000+ writes/sec for asset pricing, reducing pricing errors by 95%.',
			'Data-sharing system over gRPC that runs pricing calculations in parallel across servers, a 300% speedup.',
		],
	},
	{
		name: 'Biztrip AI',
		logo: '/images/biztrip.png',
		description: 'Agentic Systems',
		date: 'Fall 2025',
		location: 'San Francisco, CA',
		intern: true,
		details: [
			'Worked on Biomes, a web-based, massively multiplayer voxel game.',
			'Extended the in-house physics engine with swimming, climbing, ladders, and ice.',
			'Realistic water reflections written as high-performance OpenGL shaders.',
			'Redesigned the NPC AI service around 3D Newtonian physics, adding fish and birds to the world.',
		],
	},
	{
		name: 'Shopify',
		logo: '/images/shopify.png',
		description: 'Payments & Monetization',
		date: 'Winter 2025',
		location: 'Toronto, ON',
		intern: true,
		details: [
			'One of four engineers building credit-card checkout for NFTs.',
			'Re-architected authentication around role-based access control, used by 85%+ of customers.',
			'Auction system with Redis-cached chain reads (~2s → <100ms) and job queues for writes.',
			'Localization infrastructure and French support for European customers.',
		],
	},
	{
		name: 'RideCo',
		logo: '/images/rideco.png',
		description: 'Vehicle Tracking',
		date: 'Summer 2024',
		location: 'Waterloo, ON',
		intern: true,
		details: [
			'Checkout features: subscriptions, gift cards, refunds, coupons, taxes, and receipts.',
			'Restructured data storage, cutting some page loads from 15s to under 500ms.',
			'Onboarded two full-time developers and owned code review and deployments.',
		],
	},
];

export const education: Entry = {
	name: 'Waterloo',
	logo: '/images/waterloo_logo.png',
	description: 'BCS, Computer Science',
	date: '2025',
	location: 'Waterloo, ON',
	details: [
		'Major GPA 3.98 / 4.0.',
		'Coursework in real-time programming, operating systems, networking, distributed systems, algorithms, and AI.',
	],
};

export const projects: Project[] = [
	{
		name: 'Echo Cache',
		description: 'Distributed, in-memory cache built for performance.',
		links: [{ label: 'github', href: 'https://github.com/tansonlee/echo-cache' }],
	},
	{
		name: 'Ray Tracer',
		description: 'Multi-threaded ray tracer: metal, glass, and matte.',
		links: [{ label: 'github', href: 'https://github.com/tansonlee/ray-tracer' }],
	},
	{
		name: 'Rusty Racket',
		description: 'Racket interpreter in Rust: tokenizer, parser, evaluator.',
		links: [{ label: 'github', href: 'https://github.com/tansonlee/rusty-racket' }],
	},
	{
		name: 'PyScript',
		description: 'Scripting language with a compiler, assembler, and VM.',
		links: [
			{ label: 'github', href: 'https://github.com/tansonlee/PyScript' },
			{ label: 'demo', href: 'https://replit.com/@TansonL/PyScript#program.ps' },
		],
	},
];
