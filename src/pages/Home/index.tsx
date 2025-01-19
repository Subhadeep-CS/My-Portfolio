import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../../components/Loader";
import { Island } from "../../models/Island";
import Sky from "../../models/Sky";
import Birds from "../../models/Birds";
import Plane from "../../models/Plane";
import HomeInfo from "../../components/HomeInfo";

const Home: React.FC = () => {
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);
  const adjustIslandForAllScreenSize = (): [
    number[] | null,
    number[],
    number[]
  ] => {
    let screenScale: number[] | null = null;
    const screenPosition: number[] = [0, -6.5, -43];
    const rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForAllScreenSize = (): [
    number[] | null,
    number[] | null
  ] => {
    let screenScale: number[] | null;
    let screenPosition: number[] | null;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition, rotation] =
    adjustIslandForAllScreenSize();
  console.log(currentStage);
  const [planeScale, planePosition] = adjustPlaneForAllScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-16 left-0 right-0 z-10 items-center justify-center flex">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            color={"#b1e1ff"}
            groundColor={"#000000"}
            intensity={1}
          />
          <Birds />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
