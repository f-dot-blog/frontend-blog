// sanity/schemaTypes/postType.ts
import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: '文章',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '標題',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug（網址）',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: '封面圖',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
    ),
    defineField({
      name: 'excerpt',
      title: '文章摘要',
      type: 'text',
    }),
    defineField({
      name: 'coverImage',
      title: '封面圖片',
      type: 'image',
      options: { hotspot: true },
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
      title: '付費內容？',
      type: 'boolean',
    }),
    defineField({
      name: 'publishedAt',
      title: '發佈時間',
      type: 'datetime',
    }),
    defineField({
      name: 'content',
      title: '文章內容',
      type: 'blockContent',
    }),
    defineField({
      name: 'seo',
      title: 'SEO 設定',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'SEO 標題', type: 'string' }),
        defineField({ name: 'description', title: 'SEO 描述', type: 'text' }),
      ],
    }),
  ],
})
