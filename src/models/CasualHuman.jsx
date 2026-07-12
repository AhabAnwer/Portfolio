import React, { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import humanScene from "../assets/3d/casual_human.glb";

export function CasualHuman(props) {
  const { scene } = useGLTF(humanScene);
  const groupRef = useRef();
  const [showBubble, setShowBubble] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      // The parent of the group is the Island component group
      const parentGroup = groupRef.current.parent;
      if (parentGroup) {
        const rotationY = parentGroup.rotation.y;
        // Normalize rotation to range [0, 2 * Math.PI]
        const normalizedRotation = ((rotationY % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        
        // Stage 1 (when front door is facing the camera/plane) is around 4.25 to 4.75.
        // We display the speech bubble when the rotation is in this range.
        const isNear = (normalizedRotation >= 4.15 && normalizedRotation <= 4.8);
        setShowBubble(isNear);
      }
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={scene} />
      
      {showBubble && (
        <Html 
          position={[0, 2.2, 0]} 
          center
          distanceFactor={15}
        >
          <div className="comic-bubble">
            hi Im <span style={{ fontWeight: '800' }}>ahab anwer</span> cs undergrad full stack ai/ml developer and SAP ABAP cloud developer.
          </div>
        </Html>
      )}
    </group>
  );
}

useGLTF.preload(humanScene);
