export async function openDirectory(
  root: FileSystemDirectoryHandle,
  path: string,
): Promise<FileSystemDirectoryHandle> {
  const parts = path.split('/')
  return await openDirectoryPartByPart(root, parts)
}

async function openDirectoryPartByPart(
  root: FileSystemDirectoryHandle,
  parts: Array<string>,
): Promise<FileSystemDirectoryHandle> {
  if (parts.length === 0) {
    return root
  }

  const [head, ...rest] = parts
  const directoryHandle = await root.getDirectoryHandle(head)
  return openDirectoryPartByPart(directoryHandle, rest)
}
