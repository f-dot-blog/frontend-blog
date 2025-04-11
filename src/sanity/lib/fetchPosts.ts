import { client } from './client'
import { allPostsQuery } from './queries'
import { Post } from '@/types/post'

export async function fetchAllPosts(): Promise<Post[]> {
  return await client.fetch(allPostsQuery)
}
