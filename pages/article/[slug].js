import ReactMarkdown from "react-markdown";
// import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/Layout";
import Image from "../../components/Image";
import Card from "../../components/Card";

import Seo from "../../components/Seo";
import Error from "../_error";
import { getStrapiMedia } from "../../lib/media";

const Article = ({ article, categories, errorCode }) => {
  const imageUrl = getStrapiMedia(article.image);

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className="capitalize text-center p-20 tracking-wider">
        <h1 className="font-serif text-4xl m-4">{article.title}</h1>
        <author
          href={`/article/${article.slug}`}
          class="m-4 text-center uppercase pt-2 text-gray-500 text-xs"
        >
          {" "}
          by dorothy parks
        </author>
      </div>
      <div className="container max-w-2xl font-display text-gray-600">
        <ReactMarkdown source={article.content} escapeHtml={false} />
        <div>
          <div className="text-center pt-8">
            <p className="m-4 text-center uppercase pt-2 text-gray-500 text-xs font-sans">
              By {article.author.name}
            </p>
            <p className="m-4 text-center uppercase pt-2 text-gray-500 text-xs">
              {/* <Moment format="MMM Do YYYY">{article.published_at}</Moment> */}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");
  // Get the paths we want to pre-render based on posts
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await fetchAPI(`/articles?slug=${params.slug}`);
  const errorCode = data.ok ? false : data.statusCode;
  const categories = await fetchAPI("/categories");

  return {
    props: {
      article: data[0],
      categories,
      errorCode: errorCode || null,
    },
    revalidate: 1,
  };
}

export default Article;
