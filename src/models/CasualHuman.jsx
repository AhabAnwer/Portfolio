import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import humanScene from "../assets/3d/casual_human.glb";

export function CasualHuman(props) {
  const { scene } = useGLTF(humanScene);
  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(humanScene);
