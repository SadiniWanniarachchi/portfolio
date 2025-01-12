import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const NightSky = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Geometry for stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,           // Bright white stars
      size: 1,                   // Increased size for better visibility
      emissive: 0x555555,        // Glowing effect
      emissiveIntensity: 0.8,    // Stronger glow
      transparent: true,         // Transparency for soft glow
      opacity: 0.8               // Slight opacity for smooth blending
    });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      starVertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
      starVertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
      starVertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    camera.position.z = 1;

    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.x += 0.0005;
      starField.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-screen bg-black"></div>;
};

export default NightSky;
