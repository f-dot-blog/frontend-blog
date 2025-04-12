import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import  PortableContent  from '@/components/PortableContent'

type Props = {
  params: {
    slug: string
  }
}

async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      content[]{
        ...,
        asset->
      }
    }`
    return await client.fetch(query, { slug })
  }
  

export default async function BlogPostPage( props : Props) {
    const { slug } = await props.params;
  const post = await getPost(slug)

  if (!post) return <div>文章不存在</div>

  console.log('post.content:', post.content)
  return (
    <article className="prose mx-auto py-10">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <PortableContent value={post.content} />
    </article>
  )
}
