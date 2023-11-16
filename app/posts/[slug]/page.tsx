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
  console.log(post);
  return (
    <div>
      <h2 className="text-2xl text-blue-600 my-6 font-extrabold	">
        {post.data.title}
      </h2>
      <p className="indent-8">{post.data.description}</p>
      <GoogleAd />
      <main className="my-10">
        <Markdown>{post.content}</Markdown>
      </main>
    </div>
  );
};

export default PostPage;
