import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Post, posts } from '../../lib/data';
import s from '../../styles/Home.module.css';

const PostPage = ({ post }: { post: Post }) => (
	<main className={s.main}>
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
			{post.body.map(paragraph => (
				<p key={paragraph}>{paragraph}</p>
			))}
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
