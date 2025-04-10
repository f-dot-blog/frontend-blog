import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import category from './categoryType'
import post from './postType'
import {authorType} from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, category, post, authorType],
}
