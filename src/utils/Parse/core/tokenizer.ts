//词法分析器

import type { RootTokens } from "../tokens/tokensTypes"

export const tokenizer = (markdown: string): RootTokens => {
  const lines = markdown.split('\n')
  const root: RootTokens = {
    type: 'root',
    children: [],
    position: {
      start: { line: 0, column: 0 },
      end: { line: lines.length, column: lines[lines.length - 1].length }
    }
  }

  return root
}
