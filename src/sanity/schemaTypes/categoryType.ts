import {defineField, defineType} from 'sanity'

export default defineType({
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
      title: '說明',
      type: 'text',
    }),
  ],
})