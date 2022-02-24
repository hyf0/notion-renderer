import React from 'react'
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter'
// @ts-ignore
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'

export const CodeBlock: React.FC<{ code: string; language: string }> = ({
  code,
  language = 'javascript',
}) => {
  const languageL = language.toLowerCase()
  // const prismLanguage = languages[languageL] || languages.javascript

  return (
    <SyntaxHighlighter language={languageL} style={prism}>
      {code}
    </SyntaxHighlighter>
  )
}
