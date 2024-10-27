import { reactive, watch } from 'vue'

export const globalClientContext: {
  api: string
  token?: string
} = reactive({
  api: fidbURL(),
})

watch(
  () => globalClientContext.token,
  (value) => {
    window.localStorage.setItem('token', value || '')
  },
)

function fidbURL() {
  if (import.meta.env.VITE_BACKEND_URL) {
    return import.meta.env.VITE_BACKEND_URL
  }

  if (import.meta.env.DEV) {
    return 'http://localhost:3000'
  } else {
    return 'https://mimor.fidb.app:3000'
  }
}
