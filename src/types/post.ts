export interface Post {
    _id: string
    title: string
    slug: {
      current: string
    }
    excerpt?: string
    mainImage?: {
      asset: {
        url: string
      }
    }
    categories?: {
      title: string
    }[]
    publishedAt: string
  }
  