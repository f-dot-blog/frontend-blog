// src/components/PortableContent.tsx

import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'

type CodeProps = {
    value: string
    language?: string
  }

interface PortableContentProps {
  value: any
}

export default function PortableContent({ value }: PortableContentProps) {
  const components: Partial<PortableTextReactComponents> = {
    types: {
      code: ({ value, language }: CodeProps ) => {

            return <SyntaxHighlighter language={language} style={github }>
                {value}
            </SyntaxHighlighter>;
      },
      image: ({ value }) => {
        if (!value?.asset?._ref) return null
        return (
          <div className="my-6">
            <Image
              src={urlForImage(value).width(800).url()}
              alt={value.alt || 'Post image'}
              width={800}
              height={450}
              className="rounded-lg border"
            />
            {value.alt && (
              <p className="text-center text-sm text-gray-500 mt-2">{value.alt}</p>
            )}
          </div>
        )
      },
    },
  }

  return <PortableText value={value} components={components} />
}
