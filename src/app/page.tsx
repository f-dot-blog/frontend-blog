import { fetchAllPosts } from '@/sanity/lib/fetchPosts'
import Link from 'next/link'

export default async function Home() {
  const posts = await fetchAllPosts()

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">最新文章</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post._id} className="border p-4 rounded shadow">
            <Link href={`/blog/${post.slug.current}`}>
              <h2 className="text-xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-600">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <p className="mt-2">{post.excerpt || '（沒有摘要）'}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
