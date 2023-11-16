import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/app/components/getPostMetadata";
import GoogleAd from "@/app/components/Adsense";

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
      <div className="my-12 text-center">
        <h2 className="text-2xl text-blue-600 font-extrabold">
          {post.data.title}
        </h2>
        <p className="indent-8 text-slate-400 my-2">{post.data.description}</p>
      </div>
      <div className="my-2">
        <GoogleAd />
      </div>
      <main className="prose">
        <Markdown>{post.content}</Markdown>
      </main>
    </div>
  );
};

export default PostPage;
