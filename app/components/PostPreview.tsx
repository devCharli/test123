import React from "react";
import { PostMetadata } from "./PostMetadata";
import Link from "next/link";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
    >
      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-violet-600 hover:underline mb-4">{props.title}</h2>
        <p className="text-slate-700">{props.subTitle}</p>
        <p className="text-sm text-slate-400">{props.date}</p>
      </Link>
    </div>
  );
};

export default PostPreview;
