// sanity/schemaTypes/postType.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: '文章',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '標題',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'excerpt',
      title: '摘要',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: '內容',
      type: 'blockContent',
    }),
    defineField({
      name: 'thumbnail',
      title: '封面圖片',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: '分類',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'tags',
      title: '標籤',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'lang',
      title: '語言',
      type: 'string',
      options: {
        list: [
          { title: '繁體中文', value: 'zh-Hant' },
          { title: 'English', value: 'en' },
        ],
      },
    }),
    defineField({
      name: 'isPremium',
      title: '訂閱內容？',
      type: 'boolean',
    }),
    defineField({
      name: 'publishedAt',
      title: '發佈時間',
      type: 'datetime',
    }),
  ],
})
