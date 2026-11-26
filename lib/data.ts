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
	bio: 'software engineering student [at] University of Waterloo.',
};

export const links: Link[] = [
	{ label: 'linkedin', href: 'https://www.linkedin.com/in/lgeoff31/' },
	{ label: 'github', href: 'https://github.com/lgeoff31' },
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
			'Built infrastructure for org-level payouts by creating a Temporal workflow that queries & aggregates monetary transactions into Stripe payout statements, with retry handling, auditing, tax reporting, and observability.'
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
			'Implemented a sliding-window min-heap algorithm with lazy deletion to identify cheaper flight rebooking options within a 3-hour window, improving matching from O(NK) to O(NlogK), cutting latency by 20ms.',
			'Developed a proactive AI travel agent that parses relevant calendar signals to orchestrate flight & hotel itineraries, saving 500h+ annually in corporate travel coordination.'
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
			'Shipped a checkout autofill feature that pre-populates tokenized payment and address data, cutting ∼90 seconds off checkout times, lifting conversion rates by 4.8%; built using Rails and GraphQL.',
			'Ran A/B experiments on an added onboarding step highlighting subscription plans within a 4-step signup flow, boosting early-stage conversion by 4% (projected $8M+ in ARR); built using React and TypeScript.'
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
			'Try it out: https://arithmetic.zetamac.com/ ',
			'Solve as many mental math questions as possible in 120s. My first go, a score of 20. But over the years it rose to 102. https://www.youtube.com/watch?v=4NiuoB01hr8 \n',
			'\n',
			'I do it once a day, there\'s no excuse as it takes 2 minutes. I also think if there\'s a skill from school that\'ll be useful, it\'s mental math.',
			'I wanted a more to competitive environment. I marketed a Zetamac competition on my linkedin, where 38 users tried to beat my score. One of which got 105!',
			'![Top Mathletes leaderboard](/images/zetamac-leaderboard.png)',
			'\n',
			'# Tips and Advice',
			'## Addition',
			'This is the easiest type of problem in Zetamac. Primarily because our brains are so accustomed to them. The key strategy is to sum digits from left to right, which may seem counterintuitive to the typical way we were taught in school. Why? This approach allows you to start typing the answer immediately while simultaneously calculating for the next digit.',
			'### The strategy',
			'Start with the leftmost digits. Work your way right. Adjust for carry overs as needed.',
			'### Example',
			'For 38 + 55:',
			'1. I know it should start with an 8 (3 + 5).',
			'2. Then I see the ones digits sum to 13 (8 + 5).',
			'3. So I quickly change my answer to 93.',
			'## Subtraction',
			'Subtraction is a bit trickier than addition but follows similar principles. For 2-digit subtraction problems, I use the same left-to-right strategy as addition, and being clever about carry overs.',
			'### Strategy 1: direct subtraction',
			'Work from left to right, handling carry overs as they come.',
			'### Strategy 2: complement method',
			'Instead of subtracting, think about how much you need to add to the smaller number to get the larger value.',
			'### Example',
			'For 83 − 69: I can see I just need to add 14 to turn 69 into 83. So 14 is my answer.',
			'For 3-digit subtract 2-digit:',
			'1. Determine what you need to add to the 2-digit number to make it 100.',
			'2. Then determine from 100 how much you need to add to get the 3-digit number.',
			'For 132 − 79:',
			'1. I know I need 21 to make 79 become 100.',
			'2. Then I add 21 + 32 = 53 to get my answer.',
			'Eventually, your brain will subconsciously start to immediately skip these small steps and lead you straight to an answer.',
			'## Multiplication',
			'Most single-digit x double-digit multiplication problems can be solved by rounding the second number to a nice value, then subtracting or adding as needed.',
			'### Strategy 1: rounding method',
			'Round one number to make the calculation easier, then adjust.',
			'For 9 × 74: round 9 to 10, so 10 × 74 = 740. Subtract 74: 740 − 74 = 666.',
			'### Strategy 2: breaking down (my preference)',
			'Break the problem into easier parts.',
			'For 9 × 74: 9 × 70 = 630, and 9 × 4 = 36. Then 630 + 36 = 666.',
			'This is sometimes faster since addition is less brain-intensive than subtraction. But you need to know your 12×12 times table flawlessly.',
			'### The 11 trick',
			'When multiplying by 11, add the digits of the second number and insert that value in the middle.',
			'For 11 × 63: 6 + 3 = 9. Insert 9 in the middle: 693.',
			'With a carry over, for 11 × 84: 8 + 4 = 12. Insert 2 in the middle, carry 1: 924.',
			'Why this works: 11 × 63 = 10 × 63 + 63 = 630 + 63 = 693. The middle digit is the sum of the original digits because we\'re adding the number to its 10× version.',
			'## Two-digit multiplication',
			'When both numbers are two digits, the strategies become more complex but still manageable with practice.',
			'### Strategy 1: breaking down by 10s',
			'Break the first number into 10s and units, then multiply each part.',
			'For 12 × 45: 10 × 45 = 450, and 2 × 45 = 90. Then 450 + 90 = 540.',
			'### Memorization strategy',
			'For smaller numbers (esp 12), memorize sequences of multiples: 10×, 20×, 30×, and so on. Also memorize the multiples of common numbers.',
			'For 540 ÷ 12: I know instantly that 480 = 40 × 12. I need an additional 60, which is 12 × 5. So the answer is 45.',
			'These strategies work because Zetamac ensures results are always integers, so these rules aren\'t generalizable to all values.',
			'## Division shortcuts: the 11 and 9 tricks',
			'Division in Zetamac can be made much faster with specific tricks for common divisors.',
			'### The 11 division trick',
			'When dividing by 11, the answer is either the two outer digits, or (due to carry over) the two outer digits with the leftmost digit reduced by 1.',
			'374 ÷ 11 = 34. Take the first two digits, 37, and the last digit, 4. The result is 34.',
			'974 ÷ 11 = 84. When the hundreds digit is at least the tens digit, subtract 1 from the hundreds digit. Since 9 > 7, the answer is 84, not 94.',
			'### The 9 division trick',
			'For 3-digit numbers divided by 9, the first digit is the first two digits divided by 9, rounded down. The second digit is 10 minus the last digit.',
			'342 ÷ 9 = 38. First digit: 34 ÷ 9 is 3. Second digit: 10 − 2 = 8.',
			'If you\'re lazy, the first digit is always either the first digit of the original or that + 1.',
			'## Final remarks',
			'There\'s absolutely no substitute for putting hours of practice in. You\'ll eventually see that the answer just comes to you even when you\'re not confident! You\'ll see how useful these skills are in day-to-day life. Have fun with it.',

		],
	},
	{
		slug: 'puzzles',
		title: 'puzzles',
		date: 'dec 2025',
		description: 'favourite quant/brain teasers',
		body: [
			'## Four Traingles',
			'Given 6 toothpicks, can you make 4 triangles? Each triangle should have a side-length of a toothpick.',
			'## Balance Scale',
			'There are 9 rocks of equal weight, except one which is slightly heavier. You have a balance scale. What is the minimum number of times you need to use the scale to find the heavier rock?',
			'## Lockers',
			'There are 100 lockers in a row, initially all closed. You do 100 passes on the lockers where on the i^{th} pass, you toggle every i^{th} locker. Which lockers will remain open at the end?',
			'## Burning Ropes',
			'Two ropes take 1h each to burn. The burning process is non-uniform. You have a lighter. How would you track exactly 45 minutes?',
			'## Counterfeit Coins',
			'There are 10 bags, each bag contains 100 identical coins. Each bag contain 10g coins except one bag, which contains all 11g coins. Find the counterfeit bag using 1 usage of a digital scale that tells you exact weight.',
			'## Tiger and Sheep',
			'There are 100 tigers and 1 sheep. If a tiger eats a sheep, it will become a sheep. A tiger will eat the sheep only if it knows it won\'t be eaten by another tiger, otherwise it wouldn\'t eat the sheep. Will the initial sheep be eaten?',
			'## Cave Torch',
			'You\'re trapped in a large circular dark cave with torches spread across the wall, randomly lit or not lit. You can toggle a torch on and off. You can move clockwise or counterclockwise. Assuming you have infinite time and memory, how would you find the number of torches in the cave with certainty?',
			'## Noodle Loops',
			'You have a bowl with 100 noodles. You continuously pick any two noodle ends with equal probability, and connect them. You repeat until there are no remaining noodle ends. After connecting the ends of all noodles, what is the expected number of noodle loops?',
			'## Zombie Crossing',
			'You and 3 others are trying to escape zombies in the middle of the night. You must cross a bridge to escape. You have 1 flashlight, which must be used when crossing the bridge. The time it takes each of you to cross is 1m, 2m, 5m, 10m. Only at most two of you can cross the bridge at a time. How do you cross the bridge in 17 minutes?',
			'## Horse Racing',
			'There are 25 horses. You can only race 5 horses at a time. You don\'t have a stopwatch. Can you find the top three fastest horses in 7 races?',
			'## Pirate Gold',
			'There are 5 pirates and 100 coins. To divide the loot, the most senior pirate will propose a distribution. Then a vote will take place. If at least 50% of pirates agree, it will proceed, otherwise, the senior pirate will be thrown off and the process is continued until an agreed distribution. Assuming all pirates are rational and want to maximize their share, how will the coins be divided in the end?',
			'## Secret Salary',
			'There are a group of Quants sat across a circular table. They are all interested in the average salary of the group. Formulate a strategy to determine the average salary without any quant knowing the exact salary of another quant.',
			'## Fair Coin',
			'Given an unfair coin, can you find an algorithm to simulate a fair coin?',
			'## Card Swap',
			'You are playing a card game with an opponent, 6 cards numbered 1-6. The goal is to pick the card with a higher value. You both pick a card and look, you have a 2. They look, and ask "let\'s swap"? Assuming you\'re both playing optimally, do you sawp?',
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
