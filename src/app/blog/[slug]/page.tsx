import Image from 'next/image'
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
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Cover image */}
      {post.mainImage && (
        <Image
          src={urlForImage(post.mainImage).width(1200).url()}
          alt={post.title}
          width={1200}
          height={630}
          className="rounded-xl mb-8 object-cover w-full"
        />
      )}

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {/* Metadata */}
      <div className="text-sm text-gray-500 mb-10 flex flex-wrap gap-x-2 gap-y-1 items-center">
        <span>{formatDate(post.publishedAt)}</span>
        {post.categories?.length > 0 && (
          <>
            <span className="text-gray-300">|</span>
            {post.categories.map((cat: any) => (
              <span key={cat.title} className="text-gray-600">
                #{cat.title}
              </span>
            ))}
          </>
        )}
      </div>

      {/* Content */}
      <article className="prose prose-slate lg:prose-lg max-w-none">
        <PortableContent value={post.content} />
      </article>
    </main>
  )
}