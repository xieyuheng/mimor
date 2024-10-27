import { useClientContext } from '../../clients/mimor'

export async function mimorDelete(id: string): Promise<void> {
  const ctx = useClientContext()

  await fetch(`${ctx.api}/mimors/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `token ${ctx.token}`,
    },
  })
}
