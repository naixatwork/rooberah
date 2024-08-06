import { Loader, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect } from 'react';

const StoreExperience = () => {
  const storeGLB = useGLTF('/store.glb');

  useEffect(() => {
    storeGLB.scene.traverse((object: any) => {
      if (object.isMesh) {
        object.material.roughness = 0.6;
        object.material.metalness = 0;
        object.castShadow = true;
      }
    });
  }, [storeGLB.scene]);

  return (
    <>
      <Loader />
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2.5, 4, 6],
        }}
      >
        <directionalLight
          castShadow
          position={[4, 4, 1]}
          intensity={1.5}
          shadow-mapSize={[1024, 1024]}
          shadow-camera-near={1}
          shadow-camera-far={10}
          shadow-camera-top={10}
          shadow-camera-right={10}
          shadow-camera-bottom={-10}
          shadow-camera-left={-10}
        />
        <ambientLight intensity={0.9} />
        <primitive object={storeGLB.scene} scale={0.5} />
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
};

export default StoreExperience;
