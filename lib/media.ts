import { getStrapiURL } from "./api";

interface Media {
  url: string,
  article: {
    image: string,
  }
}

export function getStrapiMedia(media: any) {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
  return imageUrl;
}
