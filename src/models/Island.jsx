/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import { a } from "@react-spring/three";
import { useCallback, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/island.glb";
import { Drogon } from "./Drogon";
import { CasualHuman } from "./CasualHuman";

export function Island({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}) {
  const islandRef = useRef();
  // Get access to the Three.js renderer and viewport
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  // Use a ref for the last mouse x position
  const lastX = useRef(0);
  // Use a ref for rotation speed
  const rotationSpeed = useRef(0);
  // Define a damping factor to control rotation damping
  const dampingFactor = 0.95;

  // Track initial rotation and targets
  const initialRotationY = props.rotation ? props.rotation[1] : 4.7077;
  const targetRotation = useRef(initialRotationY);

  // Stable refs for props to avoid re-binding event listeners on prop changes
  const isRotatingRef = useRef(isRotating);
  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  const setIsRotatingRef = useRef(setIsRotating);
  useEffect(() => {
    setIsRotatingRef.current = setIsRotating;
  }, [setIsRotating]);

  // Handle pointer (mouse or touch) down event
  const handlePointerDown = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotatingRef.current(true);

    // Calculate the clientX based on whether it's a touch event or a mouse event
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    // Store the current clientX position for reference
    lastX.current = clientX;
  }, []);

  // Handle pointer (mouse or touch) up event
  const handlePointerUp = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotatingRef.current(false);
  }, []);

  // Handle pointer (mouse or touch) move event
  const handlePointerMove = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotatingRef.current) {
      // If rotation is enabled, calculate the change in clientX position
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      // calculate the change in the horizontal position of the mouse cursor or touch input,
      // relative to the viewport's width
      const delta = (clientX - lastX.current) / viewport.width;

      // Update target rotation
      targetRotation.current += delta * 0.015 * Math.PI;

      // Update the reference for the last clientX position
      lastX.current = clientX;
    }
  }, [viewport.width]);

  // Handle keydown events
  const handleKeyDown = useCallback((event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotatingRef.current) setIsRotatingRef.current(true);
      targetRotation.current += 0.01 * Math.PI;
      rotationSpeed.current = 0.012;
    } else if (event.key === "ArrowRight") {
      if (!isRotatingRef.current) setIsRotatingRef.current(true);
      targetRotation.current -= 0.01 * Math.PI;
      rotationSpeed.current = -0.012;
    }
  }, []);

  // Handle keyup events
  const handleKeyUp = useCallback((event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotatingRef.current(false);
    }
  }, []);

  // Touch events for mobile devices
  const handleTouchStart = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotatingRef.current(true);
  
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }, []);
  
  const handleTouchEnd = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotatingRef.current(false);
  }, []);
  
  const handleTouchMove = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
  
    if (isRotatingRef.current) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
  
      targetRotation.current += delta * 0.015 * Math.PI;
      lastX.current = clientX;
    }
  }, [viewport.width]);

  useEffect(() => {
    // Add event listeners for pointer and keyboard events
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
    canvas.addEventListener("touchend", handleTouchEnd, { passive: false });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown, handleKeyUp, handleTouchStart, handleTouchEnd, handleTouchMove]);

  // This function is called on each frame update
  useFrame(() => {
    const rotationY = islandRef.current.rotation.y;

    if (isRotatingRef.current) {
      // Smoothly interpolate towards targetRotation
      islandRef.current.rotation.y += (targetRotation.current - rotationY) * 0.15;
      // Calculate rotation speed as the delta of actual rotation change in this frame
      rotationSpeed.current = islandRef.current.rotation.y - rotationY;
    } else {
      // If not rotating, apply damping to slow down the rotation (smoothly)
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.0001) {
        rotationSpeed.current = 0;
      }

      targetRotation.current += rotationSpeed.current;
      islandRef.current.rotation.y += (targetRotation.current - rotationY) * 0.15;
    }

    // Determine current stage based on orientation (runs in both drag and momentum modes)
    const currentRotation = islandRef.current.rotation.y;
    const normalizedRotation =
      ((currentRotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    // Set the current stage based on the island's orientation
    switch (true) {
      case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
    }
  });

  return (
    // {Island 3D model from: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907}
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      
      {/* Drogon sitting on the garden floating island */}
      <Drogon
        position={[14, -2.0, -17]}
        rotation={[0, 2.5, 0]}
        scale={[0.0008, 0.0008, 0.0008]}
      />
      
      {/* Casual human standing at the front door gate */}
      <CasualHuman
        position={[-5.3, -1.2, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.00009, 0.00009, 0.00009]}
      />
    </a.group>
  );
}

useGLTF.preload(islandScene);

