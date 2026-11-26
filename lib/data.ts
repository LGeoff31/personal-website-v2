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
		title: 'Zetamac',
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
		title: 'Puzzles',
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
		title: 'System Design',
		date: 'nov 2025',
		description: 'good to know concepts in system design',
		body: [
			'## Introduction',
			'I\'ll be documenting all the most relevant system design concepts I\'ve come across, especially useful in interviews.',
			'## Typing google.com into my browser?',
			'What actually happens under the hood?',
			'1. The browser takes the url (google.com) and sends it to the DNS server. The DNS server will do a look up and return the server\'s IP address.',
			'2. The browser establishes a TCP connection with the server through a three-way handshake (SYN, SYN-ACK, ACK).',
			'3. The browser sends an HTTP request to the server.',
			'4. The server sends an HTTP response back to the browser (HTML, CSS, JavaScript).',
			'5. The browser renders the page using the response!',
			'## Databases',
			'There are two types of databases: relational and non-relational.',
			'Relational databases (SQL databases) are used to store data in tables and rows, which you can perform JOIN operations on via SQL. Common ones include MySQL, PostgreSQL, and SQLite.',
			'Non-relational databases (NoSQL databases) will store data in a key-value pair, column storage, graph storage, or document storage. Common ones include MongoDB, Cassandra, and Redis.',
			'### When do I use which?',
			'Non-relational databases are better when',
			'- Dealing with massive amounts of data',
			'- Low-latency is required',
			'- No relational data is required',
			'- You only need to serialize and deserialize data',
			'Otherwise use a relational database.',
			'## Scaling',
			'There are two main types of scaling, vertical and horizontal.',
			'Vertical scaling ("scale up") means adding more power (CPU, RAM) to your server.',
			'Horizontal scaling ("scale out") means adding more servers to your server pool.',
			'### When do I use which?',
			'Vertical scaling is better with low traffic, since it\'s simple. But the cons are that there are limits to how much power you can add. And if the server crashes, everything crashes (violates SPOF).',
			'Horizontal scaling is better with high traffic, and large scale applications.',
			'Consider your black-friday app running on 1 server. On black friday, you\'ll receive so much traffic that it would reach the web server\'s load limit. Users will start to experience slower responsiveness and eventually, the server will crash.',
			'A load balancer is used for this reason, to distribute traffic evenly across multiple servers.',
			'## Load Balancer',
			'The app will connect to a load balancer via the server\'s IP address. Then the load balancer will connect to each server via a private IP address.',
			'This allows the load balancer to identify and redirect traffic to the appropriate server.',
			'## Database Replication',
			'In the same way having multiple servers prevents SPOF, we use database replication (multiple databases) to prevent data loss.',
			'This is modelled via the master-slave relationship. The master database (only writes) and the slave database (only reads) replicate off the master database.',
			'Apps typically have more reads than writes, hence # of slaves > # of masters.',
			'Having slave databases also allows for parallel reads, leading to better performance.',
			'Sharding is another popular concept which partitions a large database into smaller independent pieces called shards, which allows you to spread traffic across multiple shards so the database can handle more users / read+writes without one server being bottlenecked.',
			'## Cache',
			'Cache is a temporary storage area to store the result of expensive responses or frequently accessed data in-memory.',
			'When the browser requests a resource, the web server checks if the cache has the resource. If it does, return it instantly. If not, the server will query the database for the response, add it to the cache, and return it.',
			'Something to note is databases and caches aren\'t always in sync, i.e. if the database undergoes an UPDATE SQL query. One strategy is setting an expiration policy (TTL) on the cache, and resetting it.',
			'If you reset it too often, you\'ll need to query the database more often. If you reset it too rarely, you\'ll risk serving stale data.',
			'Sometimes, a cache can become full. If it does, there are a few strategies to evict and make space. Some include LFU (Least Frequently Used), and FIFO (First In First Out).',
			'LRU is typically used by default. Temporal locality suggests that recently used items are likely to be used again soon.',
			'LFU is better when some items are consistently popular over time.',
			'## CDN',
			'CDN (Content Delivery Network) are geographically disposed servers used to deliver static content (images, videos, CSS, JavaScript) to users.',
			'They\'re like a cache, but for static content.',
			'## Stateful vs Stateless',
			'Stateful servers remember client data from 1 request to the next.',
			'Stateless servers keep no information about the client between requests.',
			'The industry is moving towards stateless servers, as they are more scalable and easier to manage.',
			'## Message Queue',
			'Message queues are durable components stored in memory that support async communication (think buffer for async requests).',
			'The advantage comes in the decoupling. If the provider is unavailable, the consumer can still function and vice versa.',
			'## Metrics',
			'1KB -> 1MB -> 1GB -> 1TB -> 1PB',
			'- L1 cache: 0.5ns',
			'- L2 cache: 5ns',
			'- Mutex lock: 100ns',
			'- Main memory reference: 100ns',
			'- Disk seek: 10ms',
			'### Takeaways',
			'- Memory is fast, but disk is slow',
			'- Perform lossless compression on data before sending it over the internet',
			'- Data centers are usually in different regions, so it takes time to send data between them',
			'## Availability',
			'High availability means for the system to be continuously operational for a long period of time.',
			'Service level agreement (SLA) is an agreement between service provider and customer, defining the level of uptime your service will deliver.',
			'## Twitter Example',
			'Consider twitter. 300 million monthly users. 50% use Twitter daily. Users post 2 posts / day. 10% of tweets contain media. Data stored for 5 years.',
			'### Query per second (QPS)',
			'- Daily active users (DAU) = 300 million x 0.5 = 150 million',
			'- Tweets (QPS) = 150 million x 2 tweets / 24h / 3600s = ~3500',
			'- Peak QPS = 3500 x 2 = 7000',
			'### Average tweet size',
			'- tweet_id: 64 bytes',
			'- text: 140 bytes',
			'- media: 1MB',
			'Media storage: 150 million * 2 * 10% * 1MB = 30TB/day',
			'5-year media storage = 30TB/day * 365 days * 5 = 55PB',
			'## System Design Interview',
			'The general flow of a system design interview should follow this format:',
			'1. Clarify the problem at hand',
			'- What is the feature set of this application?',
			'- What is the scope of the problem we\'re most interested in?',
			'- Is this a mobile app or web app?',
			'2. List functional requirements (things users should be able to do)',
			'- Users should be able to post tweets',
			'- Users should be able to follow other users',
			'- Users should be able to see tweets from users they follow',
			'3. List non-functional requirements (what your system should support)',
			'- System should scale to support 100M DAU\'s',
			'- System should be highly available, prioritizing availability over consistency (CAP theorem mention)',
			'- System should be low latency, and should render <100ms',
			'- System should be read heavy',
			'4. Design your database',
			'- We\'ll need a user, tweets, and follower table',
			'- What are the fields each table will store?',
			'- What are the primary and foreign keys?',
			'5. Design your API endpoints',
			'Will you use REST (most common), GraphQL (allows clients to query for exact data, used if you have diverse clients with different needs), or RPC (when performance is critical)?',
			'Define your endpoint names, request body, and response body (these should cover your functional requirements).',
			'6. Architecture diagrams',
			'Drawing boxes and arrows to represent the different components of the system and how they interact (client, server, databases, CDN, caching, load balancer).',
			'Below is an example of an architecture diagram for designing twitter.',
			'![Twitter feed architecture: client, API gateway, tweet and follower services, feed service, and Postgres](/images/twitter-architecture.jpg)',
			'7. Deep dive',
			'- Ensure your solution satisfies your non-functional requirements (if 100M DAU, discuss horizontal scaling solutions)',
			'- Make those improvements suggested by the interviewer',
			'## Core Concepts',
			'Networking is how services talk to each other, and what happens when they fail or get slow.',
			'In system design interviews, the typical usage is HTTP over TCP.',
			'Websockets and server-side events (SSE, uni-directional) come up when dealing with real-time updates.',
			'However, typically, HTTP with polling could work as an alternative to websockets in most cases.',
		],
	},
];
