"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglError, setWebglError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let particles: THREE.Points;
    let lineSegments: THREE.LineSegments;

    const particleCount = 500; // Perfect count for aesthetic density and performance
    const maxDistance = 110;
    
    let width = container.clientWidth;
    let height = container.clientHeight;

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
      camera.position.z = 400;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio to 2 for performance
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.error("WebGL initialization failed, falling back to static gradient.", e);
      setWebglError(true);
      return;
    }

    // Positions & velocities
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * 800 - 400;
      const y = Math.random() * 800 - 400;
      const z = Math.random() * 800 - 400;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      velocities.push({
        x: (Math.random() - 0.5) * 0.4,
        y: (Math.random() - 0.5) * 0.4,
        z: (Math.random() - 0.5) * 0.4,
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Circle texture
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, "rgba(59, 130, 246, 1)"); // #3B82F6 (Electric Blue)
      gradient.addColorStop(0.3, "rgba(59, 130, 246, 0.8)");
      gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 4,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lines
    const lineMaxConnections = particleCount * 4;
    const linePositions = new Float32Array(lineMaxConnections * 2 * 3);
    const lineColors = new Float32Array(lineMaxConnections * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.15;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.15;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    let animationFrameId: number;

    const animateScene = () => {
      animationFrameId = requestAnimationFrame(animateScene);

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      scene.rotation.y = targetX * 0.001;
      scene.rotation.x = targetY * 0.001;

      scene.rotation.y += 0.0005;

      const positionsArr = particles.geometry.attributes.position.array as Float32Array;
      let lineIndex = 0;

      for (let i = 0; i < particleCount; i++) {
        positionsArr[i * 3] += velocities[i].x;
        positionsArr[i * 3 + 1] += velocities[i].y;
        positionsArr[i * 3 + 2] += velocities[i].z;

        if (positionsArr[i * 3] < -450 || positionsArr[i * 3] > 450) velocities[i].x *= -1;
        if (positionsArr[i * 3 + 1] < -450 || positionsArr[i * 3 + 1] > 450) velocities[i].y *= -1;
        if (positionsArr[i * 3 + 2] < -450 || positionsArr[i * 3 + 2] > 450) velocities[i].z *= -1;
      }

      particles.geometry.attributes.position.needsUpdate = true;

      const linePosArr = lineSegments.geometry.attributes.position.array as Float32Array;
      const lineColArr = lineSegments.geometry.attributes.color.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const x1 = positionsArr[i * 3];
        const y1 = positionsArr[i * 3 + 1];
        const z1 = positionsArr[i * 3 + 2];

        for (let j = i + 1; j < particleCount; j++) {
          if (lineIndex >= lineMaxConnections) break;

          const x2 = positionsArr[j * 3];
          const y2 = positionsArr[j * 3 + 1];
          const z2 = positionsArr[j * 3 + 2];

          const dx = x1 - x2;
          const dy = y1 - y2;
          const dz = z1 - z2;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            const alpha = (1.0 - dist / maxDistance) * 0.18; // Neon line opacity

            linePosArr[lineIndex * 6] = x1;
            linePosArr[lineIndex * 6 + 1] = y1;
            linePosArr[lineIndex * 6 + 2] = z1;

            // Neon Purple (#8B5CF6) = RGB: 0.54, 0.36, 0.96
            lineColArr[lineIndex * 6] = 0.54 * alpha;
            lineColArr[lineIndex * 6 + 1] = 0.36 * alpha;
            lineColArr[lineIndex * 6 + 2] = 0.96 * alpha;

            linePosArr[lineIndex * 6 + 3] = x2;
            linePosArr[lineIndex * 6 + 4] = y2;
            linePosArr[lineIndex * 6 + 5] = z2;

            lineColArr[lineIndex * 6 + 3] = 0.54 * alpha;
            lineColArr[lineIndex * 6 + 4] = 0.36 * alpha;
            lineColArr[lineIndex * 6 + 5] = 0.96 * alpha;

            lineIndex++;
          }
        }
      }

      for (let k = lineIndex; k < lineMaxConnections; k++) {
        linePosArr[k * 6] = 0;
        linePosArr[k * 6 + 1] = 0;
        linePosArr[k * 6 + 2] = 0;
        linePosArr[k * 6 + 3] = 0;
        linePosArr[k * 6 + 4] = 0;
        linePosArr[k * 6 + 5] = 0;
      }

      lineSegments.geometry.attributes.position.needsUpdate = true;
      lineSegments.geometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animateScene();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer) {
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  if (webglError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-tr from-void via-surface to-void opacity-40 -z-20" />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
    />
  );
}
