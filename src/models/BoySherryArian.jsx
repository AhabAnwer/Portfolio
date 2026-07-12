import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, useTexture, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import boyScene from "../assets/3d/boy_sherry_arian.glb";

// Import all texture images
import eyeColor from "../assets/3d/textures/1622793660-eye-02-mask_0.jpeg";
import bodyColor from "../assets/3d/textures/body_texture_2.jpeg";
import bodyNormal from "../assets/3d/textures/body-athletic-m-N_1.jpeg";
import hairColor from "../assets/3d/textures/hair_color_4.jpeg";
import hairAlpha from "../assets/3d/textures/hair-17_3.png";
import skinColor from "../assets/3d/textures/face_texture_5.jpeg";
import bottomColor from "../assets/3d/textures/Outfit-m-backtoschool-01-bottom-D_7.png";
import bottomNormal from "../assets/3d/textures/Outfit-m-backtoschool-01-bottom-N_6.jpeg";
import bottomRoughness from "../assets/3d/textures/Outfit-m-backtoschool-01-bottom-R_8@channels=G.png";
import footwearColor from "../assets/3d/textures/sneakers-08-03-D_10.jpeg";
import footwearNormal from "../assets/3d/textures/sneakers-08-03-N_9.jpeg";
import footwearRoughness from "../assets/3d/textures/sneakers-08-03-R_11@channels=G.png";
import topColor from "../assets/3d/textures/Image_8_13.png";
import topNormal from "../assets/3d/textures/hoodie-02-03-N_12.jpeg";
import topRoughness from "../assets/3d/textures/hoodie-02-03-M-hoodie-02-03-R_14@channels=G.png";
import topMetalness from "../assets/3d/textures/hoodie-02-03-M-hoodie-02-03-R_14@channels=B.png";
import teethColor from "../assets/3d/textures/Wolf3D_Teeth_15.jpeg";

export function BoySherryArian(props) {
  const ref = useRef();
  const { scene, animations } = useGLTF(boyScene);
  const { actions } = useAnimations(animations, ref);
  const [showBubble, setShowBubble] = useState(false);

  // Load all textures using useTexture hook
  const textures = useTexture({
    eyeMap: eyeColor,
    bodyMap: bodyColor,
    bodyNormalMap: bodyNormal,
    hairMap: hairColor,
    hairAlphaMap: hairAlpha,
    skinMap: skinColor,
    bottomMap: bottomColor,
    bottomNormalMap: bottomNormal,
    bottomRoughnessMap: bottomRoughness,
    footwearMap: footwearColor,
    footwearNormalMap: footwearNormal,
    footwearRoughnessMap: footwearRoughness,
    topMap: topColor,
    topNormalMap: topNormal,
    topRoughnessMap: topRoughness,
    topMetalnessMap: topMetalness,
    teethMap: teethColor,
  });

  // Align textures with the GLTF UV coordinate space
  useEffect(() => {
    Object.values(textures).forEach((tex) => {
      if (tex) tex.flipY = false;
    });
  }, [textures]);

  // Apply textures to the model's materials
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          const matName = child.material.name;
          
          if (matName === "Wolf3D_Eye") {
            child.material.map = textures.eyeMap;
          } else if (matName === "Wolf3D_Body") {
            child.material.map = textures.bodyMap;
            child.material.normalMap = textures.bodyNormalMap;
          } else if (matName === "Wolf3D_Hair") {
            child.material.map = textures.hairMap;
            child.material.alphaMap = textures.hairAlphaMap;
            child.material.transparent = true;
          } else if (matName === "Wolf3D_Skin") {
            child.material.map = textures.skinMap;
          } else if (matName === "Wolf3D_Outfit_Bottom") {
            child.material.map = textures.bottomMap;
            child.material.normalMap = textures.bottomNormalMap;
            child.material.roughnessMap = textures.bottomRoughnessMap;
          } else if (matName === "Wolf3D_Outfit_Footwear") {
            child.material.map = textures.footwearMap;
            child.material.normalMap = textures.footwearNormalMap;
            child.material.roughnessMap = textures.footwearRoughnessMap;
          } else if (matName === "Wolf3D_Outfit_Top") {
            child.material.map = textures.topMap;
            child.material.normalMap = textures.topNormalMap;
            child.material.roughnessMap = textures.topRoughnessMap;
            child.material.metalnessMap = textures.topMetalnessMap;
          } else if (matName === "Wolf3D_Teeth") {
            child.material.map = textures.teethMap;
          }
          
          child.material.needsUpdate = true;
        }
      });
    }
  }, [scene, textures]);

  useEffect(() => {
    // Play the first animation loop if present
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = Object.values(actions)[0];
      if (firstAction) firstAction.play();
    }
  }, [actions]);

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
    <group ref={ref} {...props} dispose={null}>
      <primitive object={scene} />

      {/* Comic speech bubble */}
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
