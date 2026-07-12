import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import boyScene from "../assets/3d/boy_sherry_arian.glb";

export function BoySherryArian(props) {
  const ref = useRef();
  const { scene, animations } = useGLTF(boyScene);
  const { actions } = useAnimations(animations, ref);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // If there are animations, play the first active animation
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = Object.values(actions)[0];
      if (firstAction) firstAction.play();
    }
  }, [actions]);

  useFrame(() => {
    if (ref.current) {
      // The parent of this component is the Island group
      const parentGroup = ref.current.parent;
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
    <group ref={ref} {...props} dispose={null}>
      <primitive object={scene} />

      {/* Comic speech bubble positioned just above the boy's head */}
      {showBubble && (
        <Html 
          position={[0, 2.1, 0]} 
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

useGLTF.preload(boyScene);
