import { Tab } from './Tab'

export type WorkspaceNode = WorkspaceNodeFile | WorkspaceNodeDirectory

export type WorkspaceNodeFile = {
  kind: 'WorkspaceNodeFile'
  handle: FileSystemFileHandle
  relativePath: string
  parent?: WorkspaceNodeDirectory
  tab?: Tab
  isHovered?: boolean
}

export type WorkspaceNodeDirectory = {
  kind: 'WorkspaceNodeDirectory'
  handle: FileSystemDirectoryHandle
  relativePath: string
  children: Array<WorkspaceNode>
  parent?: WorkspaceNodeDirectory
  isOpen?: boolean
  isLoaded?: boolean
  isHovered?: boolean
}
