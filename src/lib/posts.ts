import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostFrontmatter = {
  title: string;
  excerpt: string;
  cover: string;
  category: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content", "posts");

export const getAllPosts = (): Post[] => {
  const files = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        ...(data as PostFrontmatter),
        slug,
        content,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
};

export const getPostBySlug = (slug: string): Post | null => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...(data as PostFrontmatter),
    slug,
    content,
  };
};
