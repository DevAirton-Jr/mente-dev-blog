import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import DOMPurify from 'isomorphic-dompurify';
import { Post, Project, NewsItem } from '@/types';

const contentDirectory = path.join(process.cwd(), 'content');

export function getSortedContentData(type: 'posts' | 'projects' | 'news'): Post[] | Project[] | NewsItem[] {
    const directory = path.join(contentDirectory, type);

    if (!fs.existsSync(directory)) {
        return [];
    }

    const fileNames = fs.readdirSync(directory);
    const allContentData = fileNames.map((fileName) => {

        const id = fileName.replace(/\.md$/, '');


        const fullPath = path.join(directory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');


        const matterResult = matter(fileContents);


        return {
            id,
            ...(matterResult.data as any),
        };
    });

    // Sorting by date because time travel isn't invented yet... or is it? 🕰️
    return allContentData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}


export function getSortedPostsData(): Post[] {
    return getSortedContentData('posts') as Post[];
}

export function getSortedProjectsData(): Project[] {
    return getSortedContentData('projects') as Project[];
}

export function getSortedNewsData(): NewsItem[] {
    return getSortedContentData('news') as NewsItem[];
}

export function getAllContentIds(type: 'posts' | 'projects' | 'news') {
    const directory = path.join(contentDirectory, type);
    if (!fs.existsSync(directory)) {
        return [];
    }
    const fileNames = fs.readdirSync(directory);
    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, ''),
            },
        };
    });
}


export function getAllPostIds() {
    return getAllContentIds('posts');
}


export async function getContentData(id: string, type: 'posts' | 'projects' | 'news'): Promise<Post | Project | NewsItem> {
    const fullPath = path.join(contentDirectory, type, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');


    const matterResult = matter(fileContents);


    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    const cleanHtml = DOMPurify.sanitize(contentHtml);

    return {
        id,
        contentHtml: cleanHtml,
        ...(matterResult.data as any),
    };
}


export async function getPostData(id: string): Promise<Post> {
    return getContentData(id, 'posts') as Promise<Post>;
}

export function getFeaturedPost(): Post | undefined {
    const allPosts = getSortedPostsData();
    return allPosts.find((post) => post.featured);
}

export function getHighlightedPosts(): Post[] {
    const allPosts = getSortedPostsData();
    return allPosts.filter((post) => post.highlight && !post.featured);
}

export function getPostsByCategory(category: string): Post[] {
    const allPosts = getSortedPostsData();
    return allPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
}
