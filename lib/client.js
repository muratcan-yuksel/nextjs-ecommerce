import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "next-sanity-image";

const client = SanityClient({
  projectId: "xay4pkrb",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-11-28",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
