"use client";

function PostCard({ post }) {
  return (
    <div key={post.id}>
      <h3>
        {post.id}. {post.title}
      </h3>
      <p>{post.body}</p>
      <button onClick={() => {}}>Read More</button>
    </div>
  );
}

export default PostCard;
