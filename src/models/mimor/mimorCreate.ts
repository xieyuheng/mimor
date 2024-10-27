import { useClientContext } from '../../clients/mimor'

export async function mimorCreate(content: string): Promise<void> {
  const ctx = useClientContext()

  await fetch(`${ctx.api}/mimors`, {
    method: 'POST',
    headers: {
      authorization: `token ${ctx.token}`,
    },
    body: JSON.stringify({
      content,
    }),
  })
}
