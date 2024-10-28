import { parse } from '@xieyuheng/x-node'
import { metadataCreateFromNodes } from './metadataCreateFromNodes'
import { translate } from './translate'
import { translations } from './translations'

export function mimorKeywords(mimor: { content: string }): Array<string> {
  try {
    const nodes = parse(mimor.content)
    const translatedNodes = translate(translations, nodes)
    const metadata = metadataCreateFromNodes(translatedNodes)
    return metadata.keywords
  } catch (_error) {
    return []
  }
}
