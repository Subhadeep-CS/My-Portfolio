import { useAnimations, useGLTF } from "@react-three/drei";
import birdScene from "../assets/3d/bird.glb";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
const Birds: React.FC = () => {
  const birdRef = useRef<Mesh>(null);
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"]?.play();
  }, [actions, birdRef]);

  useFrame(({ camera }) => {
    if (birdRef?.current) {
      if (birdRef.current.position.x > camera.position.x + 10) {
        birdRef.current.rotation.y = Math.PI;
      } else if (birdRef.current.position.x < camera.position.x - 10) {
        birdRef.current.rotation.y = 0;
      }

      // Update the X and Z positions based on the direction
      if (birdRef.current.rotation.y === 0) {
        // Moving forward
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
      } else {
        // Moving backward
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }
    }
  });
  return (
    <>
      <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
        <primitive object={scene} />
      </mesh>
    </>
  );
};

export default Birds;
