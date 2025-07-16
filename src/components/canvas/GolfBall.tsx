'use client'

import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

export function GolfBallOBJ(props) {
  // const fbx = useLoader(FBXLoader, '/golf-ball-generic.fbx')
  const obj = useLoader(OBJLoader, '/golf-ball.obj')
  console.log("obj", obj);
  return <primitive object={obj} {...props} />
}