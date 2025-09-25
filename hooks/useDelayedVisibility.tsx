import { useEffect, useState } from 'react'

export function useDelayedVisibility(trigger: boolean, delay = 50): boolean {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (trigger) {
      setVisible(false)
      const timeout = setTimeout(() => setVisible(true), delay)
      return () => clearTimeout(timeout)
    }
  }, [trigger, delay])

  return visible
}