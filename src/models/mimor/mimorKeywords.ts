import { parse } from '@xieyuheng/x-node'
import { metadataCreateFromNodes } from '../../components/mimor/metadataCreateFromNodes'
import { translate } from '../../components/mimor/translate'
import { translations } from '../../components/mimor/translations'
import { MimorData } from './MimorData'

export function mimorKeywords(mimor: MimorData): Array<string> {
  try {
    const nodes = parse(mimor.content)
    const translatedNodes = translate(translations, nodes)
    const metadata = metadataCreateFromNodes(translatedNodes)
    return metadata.keywords
  } catch (_error) {
    return []
  }
}
