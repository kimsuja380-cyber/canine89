import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

export async function getPublishedPosts(): Promise<BlogPost[]> {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date): string {
	return date.toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}

export function getYearMonth(date: Date): { year: string; month: string; label: string } {
	const year = String(date.getFullYear());
	const month = String(date.getMonth() + 1).padStart(2, '0');
	return {
		year,
		month,
		label: `${year}년 ${month}월`,
	};
}

export function getCategories(posts: BlogPost[]): string[] {
	return [...new Set(posts.map((post) => post.data.category))].sort((a, b) =>
		a.localeCompare(b, 'ko'),
	);
}

export function getTags(posts: BlogPost[]): string[] {
	return [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) =>
		a.localeCompare(b, 'ko'),
	);
}

export function getMonthlyArchives(
	posts: BlogPost[],
): Array<{ year: string; month: string; label: string; count: number }> {
	const map = new Map<string, { year: string; month: string; label: string; count: number }>();

	for (const post of posts) {
		const { year, month, label } = getYearMonth(post.data.pubDate);
		const key = `${year}-${month}`;
		const current = map.get(key);
		if (current) {
			current.count += 1;
		} else {
			map.set(key, { year, month, label, count: 1 });
		}
	}

	return [...map.values()].sort((a, b) => {
		const left = `${a.year}${a.month}`;
		const right = `${b.year}${b.month}`;
		return right.localeCompare(left);
	});
}

export function slugify(value: string): string {
	return value.trim().toLowerCase().replace(/\s+/g, '-');
}
