import ReactMarkdown from "react-markdown";
// import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/Layout";
import Image from "../../components/Image";
import Card from "../../components/Card";

import Seo from "../../components/Seo";
import { getStrapiMedia } from "../../lib/media";

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image);

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

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
  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`);
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;
