// Native scroll utilities

export const scrollToSection = (sectionId: string, offset: number = 0) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementTop + offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export const getScrollProgress = (): number => {
  const scrolled = window.scrollY
  const maxHeight = document.documentElement.scrollHeight - window.innerHeight
  return Math.min(scrolled / maxHeight, 1)
}

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: number
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(null, args), wait)
  }
}

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}