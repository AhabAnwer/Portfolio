import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import drogonScene from "../assets/3d/drogon.glb";

export function Drogon(props) {
  const ref = useRef();
  const { scene, animations } = useGLTF(drogonScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    // Play stand animation
    const standAnim = actions["SKM_DaenerysDragon|AA_DaenerysDragon_Battle_Stand"] || 
                      actions["SKM_DaenerysDragon|DaenerysDragon_Neutural_Watch"] ||
                      Object.values(actions)[0];
    if (standAnim) {
      standAnim.play();
    }
  }, [actions]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(drogonScene);
