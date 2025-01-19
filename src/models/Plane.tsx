import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";
import { useEffect, useRef } from "react";
import { Mesh } from "three";

interface PlaneProps {
  isRotating: boolean;
  scale: any;
  position: any;
  rotation: any;
}

const Plane: React.FC<PlaneProps> = ({
  isRotating,
  scale,
  position,
  rotation,
}) => {
  const ref = useRef<Mesh>(null); // Typing the ref as a Mesh
  const { scene, animations } = useGLTF(planeScene) as any; // Adjust if necessary to avoid type conflicts
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh ref={ref} scale={scale} rotation={rotation} position={position}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
