import { MotionValue, useSpring, useTransform } from 'framer-motion'
import { type SpringOptions } from 'framer-motion'
type Smooth = <O>(
   value: MotionValue<number>,
   input: number[],
   output: O[],
   config?: SpringOptions
 ) => MotionValue<O>

const useSmooth: Smooth = (value, input, output, config) => {
  const transform = useTransform(value, input, output)

  return useSpring(transform, {
    stiffness: config?.stiffness ?? 100,
    damping: config?.damping ?? 30,
    restDelta: config?.restDelta ?? 0.001,
    ...config
  })
}

export default useSmooth