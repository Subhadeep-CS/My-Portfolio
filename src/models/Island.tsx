import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import islandScene from "../assets/3d/island.glb";

// Define props with appropriate TypeScript interfaces
interface IslandProps {
  isRotating: boolean;
  setIsRotating: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentStage: React.Dispatch<React.SetStateAction<number | null>>;
  currentFocusPoint?: THREE.Vector3;
  [key: string]: unknown; // Allow additional props if necessary
}

export function Island({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}: IslandProps) {
  const islandRef = useRef<THREE.Group>(null);
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene) as any;

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (event: PointerEvent | TouchEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);
    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (event: PointerEvent | TouchEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (event: PointerEvent | TouchEvent) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating && islandRef.current) {
      const clientX =
        "touches" in event ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (islandRef.current) {
      if (event.key === "ArrowLeft") {
        if (!isRotating) setIsRotating(true);
        islandRef.current.rotation.y += 0.005 * Math.PI;
        rotationSpeed.current = 0.007;
      } else if (event.key === "ArrowRight") {
        if (!isRotating) setIsRotating(true);
        islandRef.current.rotation.y -= 0.005 * Math.PI;
        rotationSpeed.current = -0.007;
      }
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown as EventListener);
    canvas.addEventListener("pointerup", handlePointerUp as EventListener);
    canvas.addEventListener("pointermove", handlePointerMove as EventListener);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener(
        "pointerdown",
        handlePointerDown as EventListener
      );
      canvas.removeEventListener("pointerup", handlePointerUp as EventListener);
      canvas.removeEventListener(
        "pointermove",
        handlePointerMove as EventListener
      );
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl]);

  useFrame(() => {
    if (islandRef.current) {
      if (!isRotating) {
        rotationSpeed.current *= dampingFactor;
        if (Math.abs(rotationSpeed.current) < 0.001) {
          rotationSpeed.current = 0;
        }
        islandRef.current.rotation.y += rotationSpeed.current;
      } else {
        const rotation = islandRef.current.rotation.y;
        const normalizedRotation =
          ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
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
      }
    }
  });

  return (
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
    </a.group>
  );
}
