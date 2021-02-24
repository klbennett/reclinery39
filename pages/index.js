import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <nav
          class="flex justify-evenly h-10 z-50 bg-black text-xs font-sans tracking-widest"
          aria-label="Global"
        >
          <div class="hidden md:flex z-50 items-center">
            <div class="flex">
              <a href="#">
                <span class="font-medium text-white">RECLINERY39</span>
              </a>
            </div>
          </div>
          <div class="z-50 sm:space-x-20 sm:justify-items-stretch">
            <a
              href="#"
              class="font-medium text-white hover:text-red-400 border-t-4 border-red-400"
            >
              DISCOVER
            </a>

            <a
              href="#"
              class="font-medium text-white hover:text-pink-400 border-t-2 border-pink-400"
            >
              WATCH
            </a>

            <a
              href="#"
              class="font-medium text-white hover:text-yellow-400 border-t-2 border-yellow-400"
            >
              SHOP
            </a>

            <a
              href="#"
              class="font-medium text-white hover:text-blue-400 border-t-2 border-blue-400"
            >
              +MORE
            </a>
          </div>
        </nav>

        <div class="position relative top-0 w-full z-0">
          <div
            class="h-96 w-full mx-auto flex flex-col justify-end pt-6 md:pt-0 bg-cover bg-right"
            style={{
              backgroundImage: `url(/images/diana-simumpande-xZgkFQ4Hijc-unsplash.jpg)`,
              objectFit: "cover",
            }}
          >
            <h1 class="font-serif text-white my-4 text-5xl font-bold leading-tight">
              Today on R39
            </h1>
            <p class="text-white leading-normal text-xs mb-8 uppercase">
              Sub-hero message, not too long and not too short. Make it just
              right!
            </p>
          </div>
        </div>

        <div class="grid grid-cols-8 gap-2 ">
          <div class="flex flex-col justify-end p-2 col-span-8 md:col-span-8 lg:col-span-4 bg-gradient-to-r from-green-400 to-blue-500  h-44 text-white text-2xl font-extrabold">
            <h2 class="text-white text-xs uppercase">Sub-hero message</h2>
            <h3 class="text-white text-xl font-serif mb-4">
              Sub-hero message, not too long and not too short. Make it just
              right!
            </h3>
            <span class="text-white text-xs mb-8 uppercase" rel="author">
              By Kay Bennett
            </span>
          </div>
          <div class="flex flex-col justify-end p-2 col-span-8 md:col-span-4 lg:col-span-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-44 text-white text-2xl font-extrabold">
            <h2 class="text-white text-xs uppercase">Sub-hero message</h2>
            <h3 class="text-white text-xl font-serif mb-4">
              Sub-hero message, not too long and not too short. Make it just
              right!
            </h3>
            <span class="text-white text-xs mb-8 uppercase" rel="author">
              By Kay Bennett
            </span>
          </div>
          <div class="flex flex-col justify-end p-2 col-span-8 md:col-span-4 lg:col-span-2 bg-purple-300 h-44 flex text-white text-2xl font-extrabold">
            <h2 class="text-white text-xs uppercase">Sub-hero message</h2>
            <h3 class="text-white text-xl font-serif mb-4">
              Sub-hero message, not too long and not too short. Make it just
              right!
            </h3>
            <span class="text-white text-xs mb-8 uppercase" rel="author">
              By Kay Bennett
            </span>
          </div>
        </div>

        <div class="grid grid-cols-8 gap-2">
          <div class="col-span-8 md:col-span-8 lg:col-span-4">
            <div class="mx-auto bg-white overflow-hidden md:max-w-2xl">
              <div class="">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1614019465575-16b8a61df7f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Man looking at item at a store"
                />
              </div>
              <div class="p-4">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Case study
                </div>
                <a
                  href="#"
                  class="font-serif block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Finding customers for your new business
                </a>
                <p class="mt-2 text-gray-500">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-8 md:col-span-8 lg:col-span-2">
            <div class="mx-auto bg-white overflow-hidden md:max-w-2xl">
              <div class="">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1614019465575-16b8a61df7f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Man looking at item at a store"
                />
              </div>
              <div class="p-4">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Case study
                </div>
                <a
                  href="#"
                  class="font-serif block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Finding customers for your new business
                </a>
                <p class="mt-2 text-gray-500">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-8 md:col-span-8 lg:col-span-2">
            <div class="mx-auto bg-white overflow-hidden md:max-w-2xl">
              <div class="">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1614019465575-16b8a61df7f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Man looking at item at a store"
                />
              </div>
              <div class="p-4">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Case study
                </div>
                <a
                  href="#"
                  class="font-serif block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Finding customers for your new business
                </a>
                <p class="mt-2 text-gray-500">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 card grid */}

        <div class="grid grid-cols-8 gap-8">
          <div class="col-span-2 col-start-2 max-w-sm">
            <div class="mx-auto bg-white overflow-hidden md:max-w-xl">
              <div class="">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1614019465575-16b8a61df7f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Man looking at item at a store"
                />
              </div>
              <div class="p-4">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Case study
                </div>
                <a
                  href="#"
                  class="font-serif block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Finding customers for your new business
                </a>
                <p class="mt-2 text-gray-500">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-2 max-w-sm">
            <div class="mx-auto bg-white overflow-hidden md:max-w-xl">
              <div class="">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1614019465575-16b8a61df7f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Man looking at item at a store"
                />
              </div>
              <div class="p-4">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Case study
                </div>
                <a
                  href="#"
                  class="font-serif block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Finding customers for your new business
                </a>
                <p class="mt-2 text-gray-500">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-2 max-w-sm">
            <div class="mx-auto bg-white overflow-hidden md:max-w-xl">
              <div class="">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1614019465575-16b8a61df7f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Man looking at item at a store"
                />
              </div>
              <div class="p-4">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Case study
                </div>
                <a
                  href="#"
                  class="font-serif block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Finding customers for your new business
                </a>
                <p class="mt-2 text-gray-500">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div class="container mx-auto bg-black h-auto pt-12">
          <h1 class="font-serif text-2xl text-white p-6">Test</h1>
          <div class="grid grid-cols-6 gap-8 justify-items-center	">
            <div class="col-span-6 md:col-span-2 max-w-xs">
              <div class="mx-auto bg-white overflow-hidden md:max-w-xl">
                <div class="">
                  <img
                    class="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1614019465575-16b8a61df7f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Man looking at item at a store"
                  />
                </div>
                <div class="p-4">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Case study
                  </div>
                  <a
                    href="#"
                    class="font-serif block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                  >
                    Finding customers for your new business
                  </a>
                  <p class="mt-2 text-gray-500">
                    Getting a new business off the ground is a lot of hard work.
                    Here are five ideas you can use to find your first
                    customers.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-span-6 md:col-span-2 max-w-xs">
              <div class="mx-auto bg-white overflow-hidden md:max-w-xl">
                <div class="">
                  <img
                    class="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1614019465575-16b8a61df7f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Man looking at item at a store"
                  />
                </div>
                <div class="p-4">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Case study
                  </div>
                  <a
                    href="#"
                    class="font-serif block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                  >
                    Finding customers for your new business
                  </a>
                  <p class="mt-2 text-gray-500">
                    Getting a new business off the ground is a lot of hard work.
                    Here are five ideas you can use to find your first
                    customers.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-span-6 md:col-span-2 max-w-xs">
              <div class="mx-auto bg-white overflow-hidden md:max-w-xl">
                <div class="">
                  <img
                    class="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1614019465575-16b8a61df7f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Man looking at item at a store"
                  />
                </div>
                <div class="p-4">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Case study
                  </div>
                  <a
                    href="#"
                    class="font-serif block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                  >
                    Finding customers for your new business
                  </a>
                  <p class="mt-2 text-gray-500">
                    Getting a new business off the ground is a lot of hard work.
                    Here are five ideas you can use to find your first
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
