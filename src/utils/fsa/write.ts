import { mkdir } from './mkdir'

export async function write(
  root: FileSystemDirectoryHandle,
  path: string,
  text: string,
): Promise<void> {
  const parts = path.split('/')
  const directory = parts.slice(0, parts.length - 1).join('/')
  const file = parts[parts.length - 1]

  const parent = directory ? await mkdir(root, directory) : root

  const fileHandle = await parent.getFileHandle(file, {
    create: true,
  })

  const writable = await fileHandle.createWritable()
  await writable.write(text)
  await writable.close()
}
