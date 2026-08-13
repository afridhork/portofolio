import {HomeSkillsIconProps} from '../../types/sphere'
import { Svg, type SvgProps } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Material, Quaternion, Vector3 as ThreeVector3, type Object3D } from 'three'

const HomeSkillsIcon = ({
  icon,
  position
}: HomeSkillsIconProps): JSX.Element => {
  const ref = useRef<Object3D & SvgProps>(null)
  const basePosition = useRef(position.clone())
  const worldPosition = useRef(new ThreeVector3())
  const cameraPosition = useRef(new ThreeVector3())
  const parentQuaternion = useRef(new Quaternion())
  const inverseParentQuaternion = useRef(new Quaternion())
  const phase = useRef(basePosition.current.x * 0.31 + basePosition.current.y * 0.17 + basePosition.current.z * 0.23)

  useFrame(({ camera, clock }) => {
    if (ref.current === null) return
    const iconObject = ref.current

    if (iconObject.parent) {
      iconObject.parent.getWorldQuaternion(parentQuaternion.current)
      inverseParentQuaternion.current.copy(parentQuaternion.current).invert()
      iconObject.quaternion.copy(camera.quaternion).premultiply(inverseParentQuaternion.current)
    } else {
      iconObject.quaternion.copy(camera.quaternion)
    }

    const breathing = Math.sin(clock.elapsedTime * 1.15 + phase.current)
    iconObject.position.copy(basePosition.current).multiplyScalar(1 + breathing * 0.018)
    iconObject.getWorldPosition(worldPosition.current)
    cameraPosition.current.copy(worldPosition.current).applyMatrix4(camera.matrixWorldInverse)

    const depth = Math.min(1, Math.max(0, (cameraPosition.current.z + 52) / 34))
    iconObject.scale.setScalar((0.19 + depth * 0.025) * (1 + breathing * 0.02))
    iconObject.traverse(child => {
      const material = (child as Object3D & { material?: Material }).material
      if (!material) return
      material.transparent = true
      material.opacity = 0.62 + depth * 0.38
    })
  })

  return (
    <Svg
      ref={ref}
      src={icon}
      position={basePosition.current}
      scale={0.2}
      fillMaterial={{
        color: '#fff'
      }}
    />
  )
}
export default HomeSkillsIcon
