import { Workspace } from './Workspace'
import { WorkspaceNodeDirectory, WorkspaceNodeFile } from './WorkspaceNode'
import { workspaceNodeDirectoryLoadChildren } from './workspaceNodeDirectoryLoadChildren'

export async function workspaceFileFindAll(
  workspace: Workspace,
  options: {
    showDotFiles?: boolean
  },
): Promise<Array<WorkspaceNodeFile>> {
  const results: Array<WorkspaceNodeFile> = []
  await workspaceNodeDirectoryFileFindAll(
    workspace.root,
    workspace.root,
    results,
    options,
  )
  return results
}

export async function workspaceNodeDirectoryFileFindAll(
  root: WorkspaceNodeDirectory,
  node: WorkspaceNodeDirectory,
  results: Array<WorkspaceNodeFile>,
  options: {
    showDotFiles?: boolean
  },
): Promise<void> {
  const { showDotFiles } = options
  const children = await workspaceNodeDirectoryLoadChildren(root, node)
  for (const child of children) {
    if (!showDotFiles && child.handle.name.startsWith('.')) {
      continue
    }

    if (child.kind === 'WorkspaceNodeFile') {
      results.push(child)
    }

    if (child.kind === 'WorkspaceNodeDirectory') {
      await workspaceNodeDirectoryFileFindAll(root, child, results, options)
    }
  }
}
