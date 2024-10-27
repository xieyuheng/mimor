export async function mkdir(
  root: FileSystemDirectoryHandle,
  path: string,
): Promise<FileSystemDirectoryHandle> {
  const parts = path.split('/')
  return await mkdirPartByPart(root, parts)
}

async function mkdirPartByPart(
  root: FileSystemDirectoryHandle,
  parts: Array<string>,
): Promise<FileSystemDirectoryHandle> {
  if (parts.length === 0) {
    return root
  }

  const [head, ...rest] = parts

  const directoryHandle = await root.getDirectoryHandle(head, {
    create: true,
  })

  return mkdirPartByPart(directoryHandle, rest)
}
