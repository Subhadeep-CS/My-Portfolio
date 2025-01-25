import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";
import Loader from "../../components/Loader";
import { Island } from "../../models/Island";
import Sky from "../../models/Sky";
import Birds from "../../models/Birds";
import Plane from "../../models/Plane";
import HomeInfo from "../../components/HomeInfo";
import sakura from "../../assets/nature.mp3";
import soundon from "../../assets/icons/soundon.png";
import soundoff from "../../assets/icons/soundoff.png";
const Home: React.FC = () => {
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);
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
  const [planeScale, planePosition] = adjustPlaneForAllScreenSize();

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);
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
      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic((prevState) => !prevState)}
        />
      </div>
    </section>
  );
};

export default Home;
