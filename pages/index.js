import Nav from "../components/Nav";
import Card from "../components/Card";
import Articles from "../components/Articles";
import { fetchAPI } from "../lib/api";

function Home({ articles, categories, homepage }) {
  return (
    <main className="bg-grey-100">
      <Nav />
      <div className="position relative top-0 w-full z-0">
        <div
          className="h-96 w-full mx-auto flex flex-col justify-end pt-6 md:pt-0 bg-cover bg-right"
          style={{
            backgroundImage: `url(/images/diana-simumpande-xZgkFQ4Hijc-unsplash.jpg)`,
            objectFit: "cover",
          }}
        >
          <h1 className="font-serif text-white my-4 text-5xl font-bold leading-tight">
            Today on R39
          </h1>
          <p className="text-white leading-normal text-xs mb-8 uppercase">
            Sub-hero message, not too long and not too short. Make it just
            right!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-8 pt-2">
        <div className="flex flex-col justify-end p-2 col-span-8 md:col-span-8 lg:col-span-4 bg-gradient-to-r from-green-400 to-blue-500  h-44 text-white text-2xl font-extrabold">
          <h2 className="text-white text-xs uppercase">Sub-hero message</h2>
          <h3 className="text-white text-xl font-serif mb-4">
            Sub-hero message, not too long and not too short. Make it just
            right!
          </h3>
          <span className="text-white text-xs mb-8 uppercase" rel="author">
            By Kay Bennett
          </span>
        </div>
        <div className="flex flex-col justify-end p-2 col-span-8 md:col-span-4 lg:col-span-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-44 text-white text-2xl font-extrabold">
          <h2 className="text-white text-xs uppercase">Sub-hero message</h2>
          <h3 className="text-white text-xl font-serif mb-4">
            Sub-hero message, not too long and not too short. Make it just
            right!
          </h3>
          <span className="text-white text-xs mb-8 uppercase" rel="author">
            By Kay Bennett
          </span>
        </div>
        <div className="flex flex-col justify-end p-2 col-span-8 md:col-span-4 lg:col-span-2 bg-purple-300 h-44 flex text-white text-2xl font-extrabold">
          <h2 className="text-white text-xs uppercase">Sub-hero message</h2>
          <h3 className="text-white text-xl font-serif mb-4">
            Sub-hero message, not too long and not too short. Make it just
            right!
          </h3>
          <span className="text-white text-xs mb-8 uppercase" rel="author">
            By Kay Bennett
          </span>
        </div>
      </div>

      <div className="grid grid-cols-8 pt-2">
        <div className="col-span-8 md:col-span-8 lg:col-span-4">
          <div className="mx-auto bg-white overflow-hidden">
            <div className="">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1614019465575-16b8a61df7f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-4">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Case study
              </div>
              <a
                href="#"
                className="font-serif block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Finding customers for your new business
              </a>
              <p className="mt-2 text-gray-500">
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-8 md:col-span-8 lg:col-span-2">
          <div className="mx-auto bg-white overflow-hidden md:max-w-2xl">
            <div className="">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1614019465575-16b8a61df7f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-4">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Case study
              </div>
              <a
                href="#"
                className="font-serif block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Finding customers for your new business
              </a>
              <p className="mt-2 text-gray-500">
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-8 md:col-span-8 lg:col-span-2">
          <div className="mx-auto bg-white overflow-hidden md:max-w-2xl">
            <div className="">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1614019465575-16b8a61df7f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-4">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Case study
              </div>
              <a
                href="#"
                className="font-serif block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Finding customers for your new business
              </a>
              <p className="mt-2 text-gray-500">
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 card grid */}

      <h2 className="font-serif text-2xl m-8">Now on R39</h2>

      <div className="grid grid-cols-6 gap-8 justify-center pl-8 pr-8 md:pr-24 md:pl-24 m-12">
        <Articles articles={articles} />
      </div>

      {/* Carousel */}
      <div className="container mx-auto bg-black h-auto p-12">
        <h2 className="font-serif text-3xl text-white m-4">Watch</h2>
        <h3 className="font-serif text-xl text-pink-500 m-4">
          R29 Original Series
        </h3>

        <div className="grid grid-cols-6 gap-6 justify-items-center p-2">
          <div className="col-span-6 md:col-span-2 max-w-xs">
            <Card article={articles[0]} vertical />
          </div>
          <div className="col-span-6 md:col-span-2 max-w-xs">
            <Card article={articles[0]} vertical />
          </div>
          <div className="col-span-6 md:col-span-2 max-w-xs">
            <Card article={articles[0]} vertical />
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
