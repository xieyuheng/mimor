import { globalClientContext } from './globalClientContext'

let initialized = false

export function useClientContext() {
  if (initialized) {
    return globalClientContext
  }

  const token = window.localStorage.getItem('token') || ''
  globalClientContext.token = token

  initialized = true

  return globalClientContext
}
