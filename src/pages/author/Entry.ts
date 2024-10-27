import { MimorData } from '../../models/mimor'

export type Entry = {
  mimor: MimorData
  newText?: string
  isDeleting?: boolean
  isSaving?: boolean
  isModifiedByUploading?: boolean
  isNotInTheCloud?: boolean
}
