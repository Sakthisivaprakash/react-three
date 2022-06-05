import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TimelineMax, Expo } from "gsap";

const CubeComponent = () => {
    const canvas = useRef(null);
    useEffect(() => {
        renderCube();
    });

    const renderCube = () => {
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

        let geometry = new THREE.BoxGeometry(1,1,1); // (1,10,10) (1,4,10) (1,4,4)
        let material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
        let mesh = new THREE.Mesh(geometry, material);

        // mesh.position.x = -2;
        // mesh.position.y = 2;
        // mesh.position.z = 2;
        // mesh.position.set(2,2,-2);

        // mesh.rotation.set(45,0,0);
        // mesh.scale.set(1,2,1);

        scene.add(mesh);

        let light = new THREE.PointLight(0xFFFFFF, 1, 500);
        light.position.set(10,0,25);
        scene.add(light);

        let render = function() {
            requestAnimationFrame(render);

            mesh.rotation.x += 0.05; // number indicate the speed of animation 0.01 | 0.05
            mesh.rotation.y += 0.01;

            // mesh.scale.x -= 0.01;

            renderer.render(scene, camera);
        };

        render();


        // const tl = new TimelineMax({paused: true}); // .delay(.3)
        // tl.to(this.mesh.scale, 1, {x: 2, ease: Expo.easeOut});
        // tl.to(this.mesh.scale, .5, {x: .5, ease: Expo.easeOut});
        // tl.to(this.mesh.position, .5, {x: 2, ease: Expo.easeOut});
        // tl.to(this.mesh.rotation, .5, {y: Math.PI*.5, ease: Expo.easeOut}, "=-1.5");
        //
        // canvas.current.addEventListener('click', () => {
        //     tl.play();
        // })
    };

    return(
        <>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Cube</h1>
                </div>
            </header>
            <div className="max-w-12xl mx-auto py-6 sm:px-6 lg:px-8" ref={canvas}>

            </div>
        </>
    )
};

export default CubeComponent;