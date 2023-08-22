import { Suspense } from "react";
import PostPages from "../page";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.id);

  return (
    <div>
      <h2>
        {params.id}. {post.title}
      </h2>
      <hr />
      <p>{post.body}</p>

      <h3>Otras publicaciones</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <PostPages />
      </Suspense>
    </div>
  );
}

export default Page;
