// src/sanity/lib/image.ts
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { projectId, dataset } from '../env'

const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2023-01-01',
})

const builder = imageUrlBuilder(client)

export function urlForImage(source: any) {
  return builder.image(source)
}
