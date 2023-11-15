import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/app/components/getPostMetadata";
import { AdUnit } from "@eisberg-labs/next-google-adsense";
import Script from "next/script";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <h2 className="text-2xl text-blue-600 mt-4">{post.data.title}</h2>

      <main className="my-10">
        <Markdown>{post.content}</Markdown>
      </main>
    </div>
  );
};

export default PostPage;