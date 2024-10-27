import { useClientContext } from '../../clients/mimor'

export async function mimorPatch(id: string, content: string): Promise<void> {
  const ctx = useClientContext()

  await fetch(`${ctx.api}/mimors/${id}`, {
    method: 'PATCH',
    headers: {
      authorization: `token ${ctx.token}`,
    },
    body: JSON.stringify({
      content,
    }),
  })
}
