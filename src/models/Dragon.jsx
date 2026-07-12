import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF, useTexture } from "@react-three/drei";

import dragonScene from "../assets/3d/dragon.glb";
import colorTexture from "../assets/3d/textures/gltf_embedded_0.png";
import normalTexture from "../assets/3d/textures/gltf_embedded_2.png";

export function Dragon() {
  const dragonRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(dragonScene);

  // Get access to the animations for the dragon
  const { actions } = useAnimations(animations, dragonRef);

  // Load textures manually to bypass the deprecated glTF Specular-Glossiness extension issues
  const colorMap = useTexture(colorTexture);
  const normalMap = useTexture(normalTexture);

  // Configure textures to align with glTF coordinate space (flipY = false)
  useEffect(() => {
    if (colorMap) colorMap.flipY = false;
    if (normalMap) normalMap.flipY = false;
  }, [colorMap, normalMap]);

  // Apply textures to all meshes within the dragon group
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.map = colorMap;
        child.material.normalMap = normalMap;
        child.material.roughness = 0.4;
        child.material.metalness = 0.1;
        child.material.needsUpdate = true;
      }
    });
  }, [scene, colorMap, normalMap]);

  // Play the "flying" animation when the component mounts
  useEffect(() => {
    if (actions && actions["flying"]) {
      actions["flying"].play();
    }
  }, [actions]);

  useFrame(({ clock }) => {
    // 360-degree circular path around the island
    const speed = 0.15; // Slow, majestic orbit speed
    const radius = 24; // Orbit radius to clear the central island structures
    const centerX = 0;
    const centerZ = -43.4; // Center of the island in world coordinates
    
    const theta = clock.elapsedTime * speed;
    
    // Calculate the target positions
    const nextX = centerX + Math.cos(theta) * radius;
    const nextZ = centerZ + Math.sin(theta) * radius;
    
    // Get current position
    const currentX = dragonRef.current.position.x;
    const currentZ = dragonRef.current.position.z;
    
    // Calculate direction vector of movement (dx, dz)
    const dx = nextX - currentX;
    const dz = nextZ - currentZ;
    
    // Update position with a gentle bobbing motion on Y axis
    dragonRef.current.position.x = nextX;
    dragonRef.current.position.z = nextZ;
    dragonRef.current.position.y = Math.sin(clock.elapsedTime * 1.5) * 0.3 + 6.0;
    
    // Calculate orientation (facing direction)
    const modelOffset = 0; 
    dragonRef.current.rotation.y = Math.atan2(dx, dz) + modelOffset;
  });

  return (
    <group ref={dragonRef} position={[24, 6.0, -43.4]} scale={[18, 18, 18]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(dragonScene);
