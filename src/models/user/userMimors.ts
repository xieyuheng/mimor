import { useClientContext } from '../../clients/mimor'
import { MimorData } from '../mimor'

export async function userMimors(username: string): Promise<Array<MimorData>> {
  const ctx = useClientContext()

  return await fetch(`${ctx.api}/users/${username}/mimors`, {
    method: 'GET',
  }).then((response) => response.json())
}
