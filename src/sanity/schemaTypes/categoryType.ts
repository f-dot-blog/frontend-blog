// sanity/schemaTypes/categoryType.ts
import { defineField, defineType } from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: '分類',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '分類名稱',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: '描述',
      type: 'text',
    }),
  ],
})
