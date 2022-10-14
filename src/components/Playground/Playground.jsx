import React from 'react'
import ReactDOM from 'react-dom'
import {useEffect, Component} from 'react'
import Nav from '../Nav/Nav'
import * as THREE from 'three'

export default function Playground() {
    // useEffect(() => {
    //     // INITIALIZATION (threejs)
    //     const canvas = document.getElementById('canvas')
    //     const scene = new THREE.Scene();
    //     const camera = new THREE.PerspectiveCamera(
    //         50,
    //         window.innerWidth / window.innerHeight,
    //         1,
    //         1000
    //     )

    //     const renderer = new THREE.WebGLRenderer({
    //         canvas,
    //         antialias: true,
    //     })
    //     renderer.setSize(window.innerWidth, window.innerHeight)
    //     // document.querySelector("playground-container").appendChild(renderer.domElement)
    //     ReactDOM.findDOMNode(document.querySelector("playground-container")).appendChild(document.querySelector("playground-container"))

    //     // LIGHTING 
    //     // (1)
    //     const ambientLight = new THREE.AmbientLight(0xfffffff, 0.5)
    //     ambientLight.castShadow = true
    //     scene.add(ambientLight)
    //     // (2)
    //     const spotLight = new THREE.SpotLight(0xfffffff, 1)
    //     spotLight.castShadow = true
    //     spotLight.position.set(0, 64, 32)
    //     scene.add(spotLight)

    //     // ASSETS
    //     // (1) box
    //     const boxGeometry = new THREE.BoxGeometry(16, 16, 16) 
    //     const boxMaterial = new THREE.MeshNormalMaterial()
    //     const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
    //     scene.add(boxMesh)

    //     const animate = () => {
    //         boxMesh.rotation.x += 0.01
    //         boxMesh.rotation.y += 0.01

    //         renderer.render(scene, camera)
    //         window.requestAnimationFrame(animate)
    //     }
    // })

    return (
        <div className='playground-container'>
            <Nav />

            {/* <canvas id="canvas"/> */}

        </div>
    )
}