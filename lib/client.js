import SanityClient from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "xay4pkrb",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-10",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
