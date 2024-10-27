import { WorkspaceNode, WorkspaceNodeDirectory } from './WorkspaceNode'

export async function workspaceNodeCreate(
  root: WorkspaceNodeDirectory,
  parent: WorkspaceNodeDirectory,
  handle: FileSystemFileHandle | FileSystemDirectoryHandle,
): Promise<WorkspaceNode> {
  const parts = await root.handle.resolve(handle)
  if (parts === null) {
    throw new Error(
      [
        `[workspaceNodeCreate] Fail to reslove handle.`,
        ``,
        `  handle name: ${handle.name}`,
      ].join('\n'),
    )
  }

  switch (handle.kind) {
    case 'file': {
      return {
        kind: 'WorkspaceNodeFile',
        handle,
        parent,
        relativePath: parts.join('/'),
      }
    }

    case 'directory': {
      return {
        kind: 'WorkspaceNodeDirectory',
        handle,
        parent,
        relativePath: parts.join('/'),
        children: [],
      }
    }
  }
}
