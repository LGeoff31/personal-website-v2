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

// A writing. The page is /blog/<slug>.
export interface Post {
	slug: string;
	title: string;
	date: string;
	description: string;
	body: string[];
}

export const profile = {
	name: 'Geoffrey Lee',
	bio: 'software engineering student @ UWaterloo | software engineering intern in New York City.',
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
		date: 'summer 2027',
		location: 'New York, NY',
		intern: true,
		details: [
			'Incoming software engineering intern developing quantitative strategies.',
		],
	},
	{
		name: 'Radar Labs',
		logo: '/images/radar.png',
		description: 'Geolocation Infrastructure',
		date: 'winter 2027',
		location: 'New York, NY',
		intern: true,
		details: [
			'Incoming software engineering intern developing geolocation infrastructure.',
		],
	},
	{
		name: 'Atoms',
		logo: '/images/atoms.png',
		description: 'Money Movement',
		date: 'summer 2026',
		location: 'New York, NY',
		intern: true,
		details: [
			'Developed core payment infrastructure using Java, leveraging gRPC, Temporal workflows, and Kafka event streams, processing $500M in transaction volume.',
			'Reduced payout times by 30x for stalled merchants via a checkpoint-jump optimization that skips over transaction-free gaps, restoring settlement for 200+ blocked merchants.',
			'Built infrastructure for org-level payouts by creating a Temporal workflow that queries & aggregates monetary transactions into Stripe payout statements, with retry handling, auditing, tax reporting, and observability'
		],
	},
	{
		name: 'Biztrip AI',
		logo: '/images/biztrip.png',
		description: 'Agentic Systems',
		date: 'fall 2025',
		location: 'San Francisco, CA',
		intern: true,
		details: [
			'Implemented a sliding-window min-heap algorithm with lazy deletion to identify cheaper flight rebooking options within a 3-hour window, improving matching from O(NK) to O(NlogK), cutting latency by 20ms',
			'Developed a proactive AI travel agent that parses relevant calendar signals to orchestrate flight & hotel itineraries, saving 500h+ annually in corporate travel coordination'
		],
	},
	{
		name: 'Shopify',
		logo: '/images/shopify.png',
		description: 'Payments & Monetization',
		date: 'winter 2025',
		location: 'Toronto, ON',
		intern: true,
		details: [
			'Shipped a checkout autofill feature that pre-populates tokenized payment and address data, cutting ∼90 seconds off checkout times, lifting conversion rates by 4.8%; built using Rails and GraphQL',
			'Ran A/B experiments on an added onboarding step highlighting subscription plans within a 4-step signup flow, boosting early-stage conversion by 4% (projected $8M+ in ARR); built using React and TypeScript'
		],
	},
	{
		name: 'RideCo',
		logo: '/images/rideco.png',
		description: 'Vehicle Tracking',
		date: 'summer 2024',
		location: 'Waterloo, ON',
		intern: true,
		details: [
			'Engineered a real-time vehicle-tracking platform processing millions of daily GPS pings with optimized linear interpolation/debouncing algorithms, adopted by 100% of the dispatch operations team.',
			'Shipped a ride-replay visualization tool to accelerate incident investigations, cutting $300K in costs across 850 incidents and saving 2,300h+ annually.',
		],
	},
];

export const education: Entry = {
	name: 'Waterloo',
	logo: '/images/waterloo_logo.png',
	description: 'BE, Software Engineering',
	date: '2028',
	location: 'Waterloo, ON',
	details: [
		'Coursework in advanced algorithms, operating systems, databases, and statistics.',
	],
};

export const projects: Project[] = [
	{
		name: 'Outreachyr',
		description: 'Connecting students with university recruiters; 10K+ impressions',
		links: [{ label: 'github', href: 'https://outreachyr.com/' }],
	},
	{
		name: 'Bisect',
		description: 'AI tool that isolates regressions and auto-generates patch PRs',
		links: [{ label: 'github', href: 'https://github.com/LGeoff31/Bisect' }],
	},
	{
		name: 'Echo Cache',
		description: 'A distributed in-memory cache in C++ with scalability and fault tolerance.',
		links: [{ label: 'github', href: 'https://github.com/LGeoff31/Echo-Cache' }],
	},
];

export const posts: Post[] = [
	{
		slug: 'zetamac',
		title: 'zetamac',
		date: 'jan 2026',
		description: 'mental math strategies and progression',
		body: [
			'The numbers 1 through n add up to n(n + 1) / 2. For n = 100 that is 5050, which is the story Gauss is usually given credit for.',
			'Pair the ends. 1 with n, 2 with n − 1, and so on. Each pair sums to n + 1, and there are n / 2 such pairs. Multiply those and you get the formula.',
			'The same idea works when n is odd. The middle number is left over, and it equals (n + 1) / 2, which is exactly one half-pair. So the count of pairs does not have to be a whole number for the formula to hold.',
			'Replace this with whatever you actually want to write. The title, date, and description show up in the list on the homepage. Each string in body is one paragraph.',
		],
	},
	{
		slug: 'puzzles',
		title: 'puzzles',
		date: 'dec 2025',
		description: 'favourite quant/brain teasers',
		body: [
			'The numbers 1 through n add up to n(n + 1) / 2. For n = 100 that is 5050, which is the story Gauss is usually given credit for.',
			'Pair the ends. 1 with n, 2 with n − 1, and so on. Each pair sums to n + 1, and there are n / 2 such pairs. Multiply those and you get the formula.',
			'The same idea works when n is odd. The middle number is left over, and it equals (n + 1) / 2, which is exactly one half-pair. So the count of pairs does not have to be a whole number for the formula to hold.',
			'Replace this with whatever you actually want to write. The title, date, and description show up in the list on the homepage. Each string in body is one paragraph.',
		],
	},
	{
		slug: 'system-design',
		title: 'system design',
		date: 'nov 2025',
		description: 'good to know concepts in system design',
		body: [
			'The numbers 1 through n add up to n(n + 1) / 2. For n = 100 that is 5050, which is the story Gauss is usually given credit for.',
			'Pair the ends. 1 with n, 2 with n − 1, and so on. Each pair sums to n + 1, and there are n / 2 such pairs. Multiply those and you get the formula.',
			'The same idea works when n is odd. The middle number is left over, and it equals (n + 1) / 2, which is exactly one half-pair. So the count of pairs does not have to be a whole number for the formula to hold.',
			'Replace this with whatever you actually want to write. The title, date, and description show up in the list on the homepage. Each string in body is one paragraph.',
		],
	},
	{
		slug: 'quantitative-finance',
		title: 'quantitative finance',
		date: 'oct 2025',
		description: 'intro to quant finance',
		body: [
			'The numbers 1 through n add up to n(n + 1) / 2. For n = 100 that is 5050, which is the story Gauss is usually given credit for.',
			'Pair the ends. 1 with n, 2 with n − 1, and so on. Each pair sums to n + 1, and there are n / 2 such pairs. Multiply those and you get the formula.',
			'The same idea works when n is odd. The middle number is left over, and it equals (n + 1) / 2, which is exactly one half-pair. So the count of pairs does not have to be a whole number for the formula to hold.',
			'Replace this with whatever you actually want to write. The title, date, and description show up in the list on the homepage. Each string in body is one paragraph.',
		],
	},
];
