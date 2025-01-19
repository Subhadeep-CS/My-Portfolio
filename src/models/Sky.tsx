import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Color } from "three";

const Sky: React.FC<{ isRotating: boolean }> = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef<Mesh>(null);

  // State to simulate time progression
  const [time, setTime] = useState(0); // 0 to 1 where 0 is midnight and 1 is next midnight

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev >= 1 ? 0 : prev + 0.001)); // Adjust cycle speed
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });

  const sunColor = new Color().lerpColors(
    new Color(0xffdd88),
    new Color(0x002244),
    time
  ); // From yellowish day to dark night
  const ambientIntensity = 0.5 + 0.5 * Math.cos(time * Math.PI * 2); // Adjust ambient light intensity
  const directionalIntensity = Math.max(0.1, Math.sin(time * Math.PI * 2)); // Sunlight intensity

  return (
    <>
      <ambientLight intensity={ambientIntensity} />
      <directionalLight
        intensity={directionalIntensity}
        position={[5, 10, 5]}
        color={sunColor}
      />
      <mesh ref={skyRef}>
        <primitive object={sky.scene} />
      </mesh>
    </>
  );
};

export default Sky;
