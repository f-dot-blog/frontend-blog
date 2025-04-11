import { groq } from "next-sanity";

export const allPostsQuery = groq`
  *[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    categories[]->{title},
    publishedAt,
  }
`