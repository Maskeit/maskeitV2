import { useCallback } from 'react'

interface UseSmoothScrollOptions {
  duration?: number
  behavior?: ScrollBehavior
}

interface UseSmoothScrollReturn {
  scrollTo: (target: string | number, options?: { duration?: number; offset?: number }) => void
  scrollToTop: () => void
  scrollToSection: (sectionId: string) => void
}

export const useSmoothScroll = (options: UseSmoothScrollOptions = {}): UseSmoothScrollReturn => {
  const { behavior = 'smooth' } = options

  // Native scroll to function
  const scrollTo = useCallback((target: string | number, scrollOptions?: { duration?: number; offset?: number }) => {
    if (typeof target === 'string') {
      const element = document.querySelector(target)
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
        const finalOffset = offsetTop + (scrollOptions?.offset || 0)
        
        window.scrollTo({
          top: finalOffset,
          behavior
        })
      }
    } else {
      window.scrollTo({
        top: target + (scrollOptions?.offset || 0),
        behavior
      })
    }
  }, [behavior])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior
    })
  }, [behavior])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior, 
        block: 'start' 
      })
    }
  }, [behavior])

  return {
    scrollTo,
    scrollToTop,
    scrollToSection
  }
}