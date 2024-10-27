import { openDirectory } from './openDirectory'

export async function read(
  root: FileSystemDirectoryHandle,
  path: string,
): Promise<File> {
  const parts = path.split('/')
  const directory = parts.slice(0, parts.length - 1).join('/')
  const file = parts[parts.length - 1]

  const parent = directory ? await openDirectory(root, directory) : root

  const fileHandle = await parent.getFileHandle(file)
  return fileHandle.getFile()
}
