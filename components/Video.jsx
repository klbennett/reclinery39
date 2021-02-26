import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import Seo from "./Seo";
import Image from "./Image";

export default function Card({ article, category, vertical }) {
  let [seo, setSeo] = useState(null);
  useEffect(() => {
    if (article) {
      setSeo({
        metaTitle: article.title,
        metaDescription: article.description,
        shareImage: article.image,
        article: true,
      });
    }
    return () => {};
  }, [article]);

  return (
    <>
      <Seo seo={seo} />
      {vertical ? (
        <article className="mx-auto bg-white overflow-hidden md:max-w-xl">
          <div>
            <img
              className="h-full w-48 object-cover"
              src="https://images.unsplash.com/photo-1614019465575-16b8a61df7f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-4">
            {article && (
              <Image
                image={article.author.picture}
                style={{
                  position: "static",
                  borderRadius: "50%",
                  height: 30,
                }}
              />
            )}
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {article && article.name}
            </div>
            <h2
              href="#"
              className="font-serif capitalize block mt-1 text-lg leading-tight font-medium hover:underline"
            >
              {article && article.title}
            </h2>
            <h3
              href="#"
              className="block mt-1 text-base leading-tight font-medium hover:underline"
            >
              {article && article.description}
            </h3>
            <p className="mt-2 text-gray-500">
              {" "}
              <Moment format="MMM Do YYYY">
                {article && article.published_at}
              </Moment>
            </p>
            <p className="mt-2 text-gray-500">
              {" "}
              {/* <ReactMarkdown
              source={article && article.content}
              escapeHtml={false}
            /> */}
            </p>
          </div>
        </article>
      ) : (
        <article class="sm:grid grid-cols-5 bg-white shadow-sm p-2 relative lg:max-w-3xl sm:p-2 lg:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3dlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Just a flower"
            class="w-full max-h-full"
          />
          <div class="pt-5 self-center sm:pt-0 sm:pl-8 col-span-3">
            <span
              href="#"
              class="uppercase inline-block pt-2 text-gray-500 text-xs"
            >
              {article.category && article.category.name}
            </span>
            <h2 className="font-serif capitalize block mt-1 text-lg leading-tight font-medium hover:underline pb-4">
              {article && article.title}
            </h2>
            {/* <summary
              href="#"
              className="block mt-1 text-sm leading-tight font-medium hover:underline text-gray-500"
            >
              {article && article.description}
            </summary> */}
            <a
              href="#"
              class="uppercase inline-block pt-2 text-gray-500 text-xs"
            >
              by dorothy parks
            </a>
          </div>
        </article>
      )}
    </>
  );
}
