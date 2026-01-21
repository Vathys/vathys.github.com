import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Deep Desai
      </h1>
      <p className="mb-4">
        MS Data Science (ETH Zurich) <br />
        BS Data Science (University of Texas, Dallas) <br />
        BS Mathematics (University of Texas, Dallas) <br />
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
