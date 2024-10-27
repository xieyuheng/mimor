import { useClientContext } from '../../clients/mimor'
import { MimorData } from './MimorData'

export async function mimorGet(id: string): Promise<MimorData | undefined> {
  const ctx = useClientContext()

  const response = await fetch(`${ctx.api}/mimors/${id}`)
  if (!response.ok) return undefined

  return await fetch(`${ctx.api}/mimors/${id}`).then((response) =>
    response.json(),
  )
}
