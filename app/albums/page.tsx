import React from "react";
import CardList from "../components/Card/cardList";
import Button from "../components/Button/Button";

const base_url =
  "https://berita-indo-api-next.vercel.app/api/cnn-news/internasional";

interface Post {
  title: string;
  link: string;
  contentSnippet: string;
  isoDate: string;
  image?: {
    small: string;
    large: string;
  };
}

const page = async () => {
  try {
    const response = await fetch(base_url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    const posts: Post[] = result.data;

    return (
      <div className="mx-auto max-w-screen-lg px-4 sm:px-24 lg:px-8 mb-24">
        <h1 className="text-3xl font-bold mb-4">Berita Indonesia</h1>
        <section className="lg:grid lg:grid-cols-3 lg:gap-x-4">
          {posts && posts.length > 0 ? (
            posts.map((post: Post, index: number) => (
              <CardList key={index} className="card">
                {post.image && post.image.small && (
                  <img
                    src={post.image.small}
                    alt={post.title}
                    className="rounded-xl"
                  />
                )}
                <h2 className="line-clamp-2 mb-4">{post.title}</h2>
                <Button>Read more</Button>
              </CardList>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </section>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return (
      <div>
        <h1>Berita Indonesia</h1>
        <CardList>
          <p>Failed to load posts</p>
        </CardList>
      </div>
    );
  }
};

export default page;
