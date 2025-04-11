// src/sanity/lib/getPosts.ts
import { client } from './client'
import { allPostsQuery } from './queries'

export async function getAllPosts() {
  const posts = await client.fetch(allPostsQuery)
  return posts
}
