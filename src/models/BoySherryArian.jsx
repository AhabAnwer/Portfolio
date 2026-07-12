import React, { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function BoySherryArian(props) {
  const ref = useRef();
  const [showBubble, setShowBubble] = useState(false);

  useFrame(() => {
    if (ref.current) {
      const parentGroup = ref.current.parent;
      if (parentGroup) {
        const rotationY = parentGroup.rotation.y;
        // Normalize rotation to [0, 2*PI]
        const normalizedRotation = ((rotationY % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        
        // Show bubble when model is facing the screen (Stage 1)
        const isNear = (normalizedRotation >= 4.15 && normalizedRotation <= 4.8);
        setShowBubble(isNear);
      }
    }
  });

  return (
    <group ref={ref} {...props}>
      {/* 3D CHARACTER MODEL DESIGNED WITH STANDARD PRIMITIVES */}
      {/* Head */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#FFDFC4" roughness={0.6} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.07, 1.55, 0.16]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshBasicMaterial color="#111111" />
      </mesh>
      <mesh position={[0.07, 1.55, 0.16]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshBasicMaterial color="#111111" />
      </mesh>

      {/* Stylized Low-Poly Hair (Brown) */}
      {/* Hair Top */}
      <mesh position={[0, 1.68, -0.02]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[0.38, 0.15, 0.38]} />
        <meshStandardMaterial color="#4A2F13" roughness={0.8} />
      </mesh>
      {/* Hair Back */}
      <mesh position={[0, 1.52, -0.12]}>
        <boxGeometry args={[0.36, 0.25, 0.16]} />
        <meshStandardMaterial color="#4A2F13" roughness={0.8} />
      </mesh>
      {/* Hair Fringe/Sides */}
      <mesh position={[-0.16, 1.55, 0.05]} rotation={[0, 0, 0.1]}>
        <boxGeometry args={[0.08, 0.2, 0.22]} />
        <meshStandardMaterial color="#4A2F13" roughness={0.8} />
      </mesh>
      <mesh position={[0.16, 1.55, 0.05]} rotation={[0, 0, -0.1]}>
        <boxGeometry args={[0.08, 0.2, 0.22]} />
        <meshStandardMaterial color="#4A2F13" roughness={0.8} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.32, 0]}>
        <cylinderGeometry args={[0.06, 0.07, 0.1, 8]} />
        <meshStandardMaterial color="#FFDFC4" roughness={0.6} />
      </mesh>

      {/* Torso (Teal Hoodie) */}
      <mesh position={[0, 0.95, 0]}>
        <cylinderGeometry args={[0.22, 0.25, 0.65, 12]} />
        <meshStandardMaterial color="#008080" roughness={0.5} />
      </mesh>
      {/* Hoodie Hood (on the back of neck) */}
      <mesh position={[0, 1.25, -0.08]} rotation={[-0.2, 0, 0]}>
        <sphereGeometry args={[0.18, 12, 12]} />
        <meshStandardMaterial color="#008080" roughness={0.5} />
      </mesh>

      {/* Arms & Hands */}
      {/* Left Arm */}
      <mesh position={[-0.28, 0.95, 0]} rotation={[0, 0, 0.25]}>
        <cylinderGeometry args={[0.06, 0.06, 0.45, 8]} />
        <meshStandardMaterial color="#008080" roughness={0.5} />
      </mesh>
      {/* Left Hand */}
      <mesh position={[-0.34, 0.72, 0]}>
        <sphereGeometry args={[0.055, 8, 8]} />
        <meshStandardMaterial color="#FFDFC4" roughness={0.6} />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.28, 0.95, 0]} rotation={[0, 0, -0.25]}>
        <cylinderGeometry args={[0.06, 0.06, 0.45, 8]} />
        <meshStandardMaterial color="#008080" roughness={0.5} />
      </mesh>
      {/* Right Hand */}
      <mesh position={[0.34, 0.72, 0]}>
        <sphereGeometry args={[0.055, 8, 8]} />
        <meshStandardMaterial color="#FFDFC4" roughness={0.6} />
      </mesh>

      {/* Pants (Dark Blue/Jeans) */}
      {/* Left Leg */}
      <mesh position={[-0.1, 0.42, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.5, 8]} />
        <meshStandardMaterial color="#1E2F54" roughness={0.7} />
      </mesh>
      {/* Right Leg */}
      <mesh position={[0.1, 0.42, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.5, 8]} />
        <meshStandardMaterial color="#1E2F54" roughness={0.7} />
      </mesh>

      {/* Sneakers (Red & White) */}
      {/* Left Shoe */}
      <mesh position={[-0.11, 0.1, 0.05]}>
        <boxGeometry args={[0.12, 0.15, 0.24]} />
        <meshStandardMaterial color="#B22222" roughness={0.6} />
      </mesh>
      <mesh position={[-0.11, 0.05, 0.07]}>
        <boxGeometry args={[0.13, 0.06, 0.25]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.4} />
      </mesh>

      {/* Right Shoe */}
      <mesh position={[0.11, 0.1, 0.05]}>
        <boxGeometry args={[0.12, 0.15, 0.24]} />
        <meshStandardMaterial color="#B22222" roughness={0.6} />
      </mesh>
      <mesh position={[0.11, 0.05, 0.07]}>
        <boxGeometry args={[0.13, 0.06, 0.25]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.4} />
      </mesh>

      {/* Comic speech bubble */}
      {showBubble && (
        <Html 
          position={[0, 2.0, 0]} 
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
