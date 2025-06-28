// 基本的 Tokens 分词类型
export enum TOKENS_TYPES  {
  // 块级
  Heading = 'heading', // 标题
  Paragraph = 'paragraph', // 段落
  Blockquote = 'blockquote', // 引用
  ThematicBreak = 'thematicBreak', // 分割线
  // 行级
  Text = 'text', // 文本
  Bold = 'bold', // 加粗
  Italic = 'italic', // 斜体
  Underline = 'underline', // 下划线
  Delete = 'delete', // 删除线
  Link = 'link', // 链接
  Image = 'image', // 图片
  InlineCode = 'inlineCode', // 行内高亮
  // 其他
  Code = 'code', // 代码块
  List = 'list', // 列表
  ListItem = 'listItem', // 列表项
  Html = 'html', // html 标签
  Table = 'table', // 表格
  TableRow = 'tableRow', // 表格行
  TableCell = 'tableCell' // 表格单元格
} 

// 导出分词类型，生成键值对
export type TokensTypes = Record<keyof typeof TOKENS_TYPES, TokensTypesVal>
// 分词类型的 key
export type TokensTypesKey = keyof TokensTypes
// 分词类型的 value
export type TokensTypesVal = typeof TOKENS_TYPES[keyof typeof TOKENS_TYPES]

type PositionType = {
  start: {
    line: number     //行
    column: number  //列
  }
  end: {
    line: number
    column: number
  }
}

//tokens 接口，用于解析后的数据
export interface Tokens {
  type: TokensTypesVal
  position: PositionType

  content?: string // 文本内容
  depth?: number // heading 的深度
  children?: Tokens[] // 子元素
  order?: boolean // 是否有序
  title?: string | null // 链接标题
  url?: string  // 链接地址
  alt?: string // 图片 alt
  lang?: string // 代码语言
  meta?: string | null // 代码块的meta
}

// 根节点类型
export interface RootTokens {
  type: 'root'
  children:  Tokens[]
  position: PositionType
}