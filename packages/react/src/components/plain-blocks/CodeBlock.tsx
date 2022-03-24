import { blocks } from '@notion-renderer/shared'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-rust'
import 'prismjs/components/prism-typescript'
import 'prismjs/themes/prism.css'

import React from 'react'

export const CodeBlock: React.FC<{ block: blocks.CodeBlock }> = ({ block }) => {
  const language = block.code.language.toLowerCase()
  const prismLanguage = languages[language] ?? languages.javascript!
  const code = block.code.rich_text.map(t => t.plain_text).join('')
  const html = highlight(code, prismLanguage, language)

  return (
    <div className="overflow-auto">
      <pre className={`language-${language}`}>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: html }}
        >
        </code>
      </pre>
    </div>
  )
}
