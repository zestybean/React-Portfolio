import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import sanityClient from "../client.js";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{title,slug,mainImage{asset->{_id, url}, alt }}`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen p-12">
      <section className="container mx-auto">
        <FadeIn>
          <h1 className="text-5xl flex justify-center cursive">
            Blog Post Page
          </h1>
          <h2 className="text-lg text-gray-600 flex justify-center mb-12 body">
            Welcome to my page of blog posts.
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <FadeIn>
                <article>
                  <Link
                    to={"/post/" + post.slug.current}
                    key={post.slug.current}
                  >
                    <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-gray-500">
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.url}
                        className="w-full h-full rounded-r object-cover absolute"
                      />
                      <span className="block relative h-full flex justify-end items-end pr-4 pb-4 ">
                        <h3 className="text-gray-100 text-lg rounded body px-3 py-4 bg-gray-700 bg-opacity-75">
                          {post.title}
                        </h3>
                      </span>
                    </span>
                  </Link>
                </article>
              </FadeIn>
            ))}
        </div>
      </section>
    </main>
  );
}
