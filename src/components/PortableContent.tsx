import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import * as prismThemes from 'react-syntax-highlighter/dist/esm/styles/prism'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'

type CodeProps = {
  value: {
    code: string
    language?: string
  }
}

interface PortableContentProps {
  value: any
}

export default function PortableContent({ value }: PortableContentProps) {
  const components: Partial<PortableTextReactComponents> = {
    types: {
      code: ({ value }: CodeProps) => {
        return (
          <div className="my-6 rounded-lg overflow-auto dark:bg-[#1e1e1e] p-4 text-sm">
            <SyntaxHighlighter
              language={value.language || 'tsx'}
              style={prismThemes.vscDarkPlus}
              customStyle={{ borderRadius: '8px', padding: '1rem', marginBottom: '1.5rem' }}
              wrapLines={true}
              showLineNumbers={true}
            >
              {value.code}
            </SyntaxHighlighter>
          </div>
        )
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
