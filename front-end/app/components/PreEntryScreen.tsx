"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../styles/PreEntryScreen.css";

function Door({ onClick, opened }: { onClick: () => void; opened: boolean }) {
  const group = useRef<any>();
  const { scene, animations } = useGLTF("/models/door.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions["0_idle_closed"]) {
      actions["0_idle_closed"].play();
    }
  }, [actions]);

  useEffect(() => {
    if (opened && actions["1_open_closed_right"]) {
      actions["1_open_closed_right"].reset().play();
    }
  }, [opened, actions]);

  return <primitive ref={group} object={scene} onClick={onClick} />;
}

export default function ThreeDoorIntro() {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleClick = () => {
    if (!opened) {
      setOpened(true);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => router.push("/"), 1000);
      }, 2000);
    }
  };

  return (
    <div className={`preEntryScreen ${fadeOut ? "fadeOut" : ""}`}>
      <div className="canvasContainer">
        <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[2, 5, 2]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[-5, 5, 5]} intensity={0.5} color="#f1c40f" />
          
          <group position={[0, -1, 0]}> {/* Center and adjust vertical position */}
            <Door onClick={handleClick} opened={opened} />
          </group>
          
          {opened && (
            <directionalLight
              position={[-5, 5, 5]}
              intensity={1}
              color="#f1c40f"
            />
          )}
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2.5}
            target={[0, 0.5, 0]} // Focus on center of door
          />
        </Canvas>
      </div>

      {!opened && (
        <>
          <div className="welcomeOverlay">
            <h1>Welcome to Morocco</h1>
            <p>Discover the magic behind this door</p>
          </div>
          <button
            className={`openButton ${hovering ? "hover" : ""}`}
            onClick={handleClick}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Click Here to Enter
          </button>
        </>
      )}
    </div>
  );
}