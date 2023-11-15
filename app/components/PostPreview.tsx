import React from "react";
import { PostMetadata } from "./PostMetadata";
import Link from "next/link";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="p-6">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-2xl text-blue-600">{props.title}</h2>
        <p className="text-amber-400">{props.subTitle}</p>
        <p>{props.date}</p>
      </Link>
    </div>
  );
};

export default PostPreview;
