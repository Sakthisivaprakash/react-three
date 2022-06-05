import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SphereComponent = () => {
    const canvas = useRef(null);
    useEffect(() => {
        renderSphere();
    });

    const renderSphere = () => {
        let scene = new THREE.Scene();

        let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        let renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setClearColor("#e5e5e5");
        renderer.setSize(window.innerWidth, window.innerHeight);

        canvas.current.appendChild(renderer.domElement);

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;

            camera.updateProjectionMatrix();
        });

        let geometry = new THREE.SphereGeometry(1,10,10); // (1,10,10) (1,4,10) (1,4,4)
        let material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
        let mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);

        let light = new THREE.PointLight(0xFFFFFF, 1, 500);
        light.position.set(10,0,25);
        scene.add(light);

        renderer.render(scene, camera);
    };

    return (
        <>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Sphere</h1>
                </div>
            </header>
            <div className="max-w-12xl mx-auto py-6 sm:px-6 lg:px-8" ref={canvas}>

            </div>
        </>
    )
};

export default SphereComponent;