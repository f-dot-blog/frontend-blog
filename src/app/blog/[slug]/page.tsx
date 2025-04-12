import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import PortableContent from '@/components/PortableContent'

type Props = {
  params: {
    slug: string
  }
}

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    publishedAt,
    content,
    excerpt,
    mainImage,
    categories[]->{title}
  }`
  return await client.fetch(query, { slug })
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default async function BlogPostPage( props : Props) {
  const { slug } = await props.params;
  const post = await getPost(slug)

  if (!post) return <div className="text-center py-20 text-gray-500">文章不存在</div>

  return (
    <article className="prose prose-lg mx-auto px-4 py-10">
      {/* 封面圖 */}
      {post.mainImage && (
        <Image
          src={urlForImage(post.mainImage).width(800).url()}
          alt={post.title}
          width={800}
          height={450}
          className="rounded-xl mb-6"
        />
      )}

      {/* 標題 */}
      <h1>{post.title}</h1>

      {/* 發布日期 & 分類 */}
      <div className="text-sm text-gray-500 mb-6">
        {formatDate(post.publishedAt)}
        {post.categories?.length > 0 && (
          <>
            {' ｜ '}
            {post.categories.map((cat: any) => (
              <span key={cat.title} className="mr-2">
                #{cat.title}
              </span>
            ))}
          </>
        )}
      </div>

      {/* 內文 */}
      <PortableContent value={post.content} />
    </article>
  )
}
