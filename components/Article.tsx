import React, { FunctionComponent } from 'react';
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../lib/api";
import Layout from "../components/Layout";
import Image from "../components/image";
import Seo from "../components/seo";
import { getStrapiMedia } from "../lib/media";


type ArticleProps = {
  article: Article,
  categories: []
}

interface Article {
  image: string,
  title: string,
  description: string,
  content: string,
  slug: string,
  published_at: string,
  author: {
    name: string,
    picture: string,
  },
}

const Article: FunctionComponent<ArticleProps> = ({ article, categories }) => {
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
      <div
        className="container"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1 className="font-serif text-3xl m-4">{article.title}</h1>
      </div>
      <div className="uk-container uk-container-small">
        <ReactMarkdown source={article.content} escapeHtml={false} />
        <hr className="uk-divider-small" />
        <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
          <div>
            {article.author.picture && (
              <Image
                image={article.author.picture}
                style={{
                  position: "static",
                  borderRadius: "50%",
                  height: 30,
                }}
              />
            )}
          </div>
          <p className="uk-margin-remove-bottom">By {article.author.name}</p>
          <p className="uk-text-meta uk-margin-remove-top">
            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article: Article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;
