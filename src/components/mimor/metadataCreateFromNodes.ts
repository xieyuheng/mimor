import { isElement, XNode } from '@xieyuheng/x-node'
import { Metadata } from './Metadata'

export function metadataCreateFromNodes(nodes: Array<XNode>): Metadata {
  const metadata: Metadata = {
    rawKeywords: '',
    keywords: [],
  }

  for (const node of nodes) {
    if (isElement(node) && node.tag === 'metadata') {
      for (const [key, value] of Object.entries(node.attributes)) {
        if (key === 'theme-color') {
          metadata.themeColor = value
        }

        if (key === 'keywords') {
          metadata.rawKeywords = value.trim()
          metadata.keywords = value
            .split(',')
            .flatMap((part) => part.split('，').map((part) => part.trim()))
        }
      }
    }
  }

  return metadata
}
