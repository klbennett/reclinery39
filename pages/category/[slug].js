import Articles from "../../components/Articles";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Error from "../_error";
import { data } from "autoprefixer";

const Category = ({ errorCode, category, categories }) => {
  if (category) {
    const seo = {
      metaTitle: category.name,
      metaDescription: `All ${category.name} articles`,
    };
  }

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <Layout categories={categories}>
      {/* {category && <Seo seo={seo} />} */}
      <div className="container max-w-md">
        <h1 className="font-serif text-3xl m-4 capitalize">
          {category && category.name}
        </h1>
        <Articles articles={category && category.articles} />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories");

  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0];
  const categories = await fetchAPI("/categories");

  return {
    props: { categories, category },
    revalidate: 1,
  };
}

export default Category;
