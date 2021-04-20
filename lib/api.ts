

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export async function fetchAPI (path: string): Promise<any> {
  try {
    const requestUrl = getStrapiURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    const errorCode = data.ok ? false : data.statusCode;
    if (errorCode) {
      return errorCode;
    }
    return data;
  } catch (err) {
    console.log(err); // TypeError: failed to fetch
  }
}
