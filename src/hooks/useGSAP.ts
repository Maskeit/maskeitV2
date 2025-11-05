import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// TODO: Uncomment when GSAP is installed
gsap.registerPlugin(ScrollTrigger)

interface UseGSAPOptions {
  refreshPriority?: number
  markers?: boolean
}

interface UseGSAPReturn {
  timeline: any // gsap.core.Timeline | null
  createAnimation: (selector: string, props: any, trigger?: any) => any
  killAnimations: () => void
  refreshScrollTrigger: () => void
}

export const useGSAP = (options: UseGSAPOptions = {}): UseGSAPReturn => {
  const timelineRef = useRef<any>(null) // gsap.core.Timeline
  const animationsRef = useRef<any[]>([])

  const { refreshPriority = 0, markers = false } = options

  useEffect(() => {
    // TODO: Uncomment when GSAP is installed
    timelineRef.current = gsap.timeline()

    return () => {
      killAnimations()
    }
  }, [])

  const createAnimation = useCallback((selector: string, props: any, trigger?: any) => {
    const animation = gsap.to(selector, props)
    
    if (trigger) {
      ScrollTrigger.create({
        trigger: trigger.trigger || selector,
        start: trigger.start || "top 80%",
        end: trigger.end || "bottom 20%",
        animation: animation,
        markers: markers,
        refreshPriority: refreshPriority,
        ...trigger
      })
    }

    animationsRef.current.push(animation)
    return animation
  }, [markers, refreshPriority])

  const killAnimations = useCallback(() => {
    animationsRef.current.forEach(animation => {
      if (animation) {
        animation.kill()
      }
    })
    animationsRef.current = []
    
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }, [])

  const refreshScrollTrigger = useCallback(() => {
    ScrollTrigger.refresh()
  }, [])

  return {
    timeline: timelineRef.current,
    createAnimation,
    killAnimations,
    refreshScrollTrigger
  }
}