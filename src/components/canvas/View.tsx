'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'

export const Common = ({ color }: { color: string }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={0.5} />
    <directionalLight position={[-2.8, 1.8, -0.7]} intensity={3} />
    <PerspectiveCamera
      makeDefault
      fov={80}
      aspect={window.innerWidth / window.innerHeight}
      near={0.1}
      far={1000}
      position={[8, 6.5, 10.9]}
    />
  </Suspense>
)

type ViewProps = {
  children: React.ReactNode
  orbit?: boolean
} & React.HTMLAttributes<HTMLDivElement>

const View = forwardRef(({ children, orbit, ...props }: ViewProps, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls target={[0, 0, 0]} minDistance={1} maxDistance={5} rotateSpeed={1} />}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }
