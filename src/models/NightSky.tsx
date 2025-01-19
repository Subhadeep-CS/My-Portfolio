import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/night_sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const NightSky: React.FC<{ isRotating: boolean }> = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      const skyMesh = skyRef.current;
      if (skyMesh.rotation) {
        skyMesh.rotation.y += 0.15 * delta;
      }
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default NightSky;
