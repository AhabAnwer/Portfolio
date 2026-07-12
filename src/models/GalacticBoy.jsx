import React, { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function GalacticBoy(props) {
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
    <group ref={groupRef} {...props}>
      {/* Sketchfab Embed iframe rendered in 3D Space */}
      <Html 
        position={[0, 0, 0]} 
        center 
        distanceFactor={15}
      >
        <div style={{
          width: "260px",
          height: "180px",
          border: "3px solid #000000",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "4px 4px 0px #000000",
          backgroundColor: "#ffffff"
        }}>
          <iframe 
            title="Galactic Delivery Boy" 
            style={{ width: "100%", height: "100%", border: "0" }}
            allowFullScreen 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            xr-spatial-tracking="true"
            execution-while-out-of-viewport="true" 
            execution-while-not-rendered="true" 
            web-share="true" 
            src="https://sketchfab.com/models/2100138f75e34af99a55c7b1554cb383/embed"
          />
        </div>
      </Html>

      {/* Speech bubble positioned above the iframe container */}
      {showBubble && (
        <Html 
          position={[0, 1.3, 0]} 
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
