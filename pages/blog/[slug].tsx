import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Post, posts } from '../../lib/data';
import s from '../../styles/Home.module.css';

const linkInText = /(https?:\/\/[^\s]+)/g;

const youtubeId = (url: string) => {
	try {
		const parsed = new URL(url);
		const host = parsed.hostname.replace(/^www\./, '');
		if (host === 'youtu.be') return parsed.pathname.slice(1).split('/')[0] || null;
		if (host === 'youtube.com' || host === 'm.youtube.com') {
			if (parsed.pathname === '/watch') return parsed.searchParams.get('v');
			const match = parsed.pathname.match(/^\/(?:embed|shorts)\/([^/?]+)/);
			if (match) return match[1];
		}
	} catch {
		return null;
	}
	return null;
};

const imageInText = /^!\[([^\]]*)\]\((\/[^)]+)\)$/;

const headingInText = /^(#{1,3}) (.+)$/;

const inline = (text: string, keyPrefix: string): ReactNode[] =>
	text.split(linkInText).flatMap((part, i): ReactNode[] => {
		if (!/^https?:\/\//.test(part)) {
			if (!part) return [];
			return part.split(/\^\{([^}]+)\}/).map((bit, j) =>
				j % 2 === 1 ? <sup key={`${keyPrefix}-${i}-${j}`}>{bit}</sup> : bit,
			);
		}
		return [
			<a key={`${keyPrefix}-${i}`} href={part} target='_blank' rel='noreferrer'>
				{part}
			</a>,
		];
	});

const Paragraph = ({ text }: { text: string }) => {
	const trimmed = text.trim();
	if (!trimmed) return null;

	const heading = trimmed.match(headingInText);
	if (heading) {
		const level = heading[1].length;
		const Tag = level === 3 ? 'h3' : 'h2';
		return <Tag className={level === 1 ? s.kicker : undefined}>{heading[2]}</Tag>;
	}

	const image = trimmed.match(imageInText);
	if (image) {
		return <img src={image[2]} alt={image[1]} className={s.photo} />;
	}

	const videos: string[] = [];
	const parts = text.split(linkInText).flatMap((part, i): ReactNode[] => {
		if (!/^https?:\/\//.test(part)) return inline(part, String(i));
		const id = youtubeId(part);
		if (id) {
			videos.push(id);
			return [];
		}
		return [
			<a key={i} href={part} target='_blank' rel='noreferrer'>
				{part}
			</a>,
		];
	});

	return (
		<>
			{parts.length > 0 && <p>{parts}</p>}
			{videos.map(id => (
				<div key={id} className={s.video}>
					<iframe
						src={`https://www.youtube.com/embed/${id}`}
						title='YouTube video'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					/>
				</div>
			))}
		</>
	);
};

const bulletLine = /^- (.+)$/;

type Block = { kind: 'text'; text: string } | { kind: 'list'; items: string[] };

const blocks = (body: string[]): Block[] => {
	const out: Block[] = [];
	for (const line of body) {
		const item = line.trim().match(bulletLine);
		if (item) {
			const last = out[out.length - 1];
			if (last?.kind === 'list') last.items.push(item[1]);
			else out.push({ kind: 'list', items: [item[1]] });
			continue;
		}
		out.push({ kind: 'text', text: line });
	}
	return out;
};

const PostPage = ({ post }: { post: Post }) => (
	<main className={`${s.main} ${s.post}`}>
		<Head>
			<title>{post.title} — Geoffrey Lee</title>
		</Head>
		<p>
			<Link href='/'>
				<a className={s.back}>
					<span className={s.accent}>~ $</span> cd ..
				</a>
			</Link>
		</p>
		<p className={`${s.date} ${s.postDate}`}>{post.date}</p>
		<h1 className={s.title}>{post.title}</h1>
		<article className={s.article}>
			{blocks(post.body).map((block, i) =>
				block.kind === 'list' ? (
					<ul key={i}>
						{block.items.map((item, j) => (
							<li key={j}>{inline(item, `${i}-${j}`)}</li>
						))}
					</ul>
				) : (
					<Paragraph key={i} text={block.text} />
				),
			)}
		</article>
	</main>
);

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: posts.map(post => ({ params: { slug: post.slug } })),
	fallback: false,
});

export const getStaticProps: GetStaticProps<{ post: Post }> = async ({ params }) => {
	const post = posts.find(p => p.slug === params?.slug);
	if (!post) return { notFound: true };
	return { props: { post } };
};

export default PostPage;
