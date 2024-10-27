import { basename } from 'path-browserify'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { Entry } from './Entry'
import { State } from './State'
import { stateEntryDelete } from './stateEntryDelete'

export async function stateEntryDeleteAfterConfirming(
  state: State,
  entry: Entry,
): Promise<void> {
  const lang = useGlobalLang()

  const message = lang.isZh()
    ? `确定要 删除 这个文件吗？\n${basename(entry.mimor['@path'])}`
    : `Are you sure to DELETE this mimor?\n${basename(entry.mimor['@path'])}`

  if (window.confirm(message)) {
    entry.isDeleting = true
    await stateEntryDelete(state, entry)
    entry.isDeleting = false
  }
}
