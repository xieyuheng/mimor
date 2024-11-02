import { useMediaQuery } from '@vueuse/core'

export function useResponsive() {
  const desktop = useMediaQuery('(min-width: 640px)')
  const mobile = useMediaQuery('(max-width: 640px)')

  return {
    isDesktop() {
      return desktop.value
    },
    isMobile() {
      return mobile.value
    },
  }
}
