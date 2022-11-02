import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { createRef  } from "react";
import { Mesh } from "three"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import Nav from "../components/Nav"

function Cube () {
	const texture = useLoader(TextureLoader, 'tree.png')
	const meshRef = createRef(<Mesh/>)

	useFrame(() => {
		if (!meshRef.current) {
			return;
		}

		// meshRef.current.rotation.x += 0.01
		meshRef.current.rotation.y += 0.01
	})

	return (
		<mesh ref={meshRef}>
			<boxGeometry attach={'geometry'} args={[0, 3, 3]}/>
			<meshBasicMaterial map={texture} color={''}/>
		</mesh>
	)

}

export default function Playground () {
	return (
		<div className="flex">
			<div style={{"backgroundColor": "black", "width": "80vw", "height": "100vh", "pointerEvents": "none"}}>
				<Canvas>  
						<ambientLight intensity={1}/>
						<pointLight position={[1, 1, 1]}/>
						<Cube/>
				</Canvas>
			</div>
			<div style={{"width": "20vw", "height": "100vh"}} className="flex content-center justify-center h-full align-middle flex-wrap bg-yellow-400">
				<h1 className="text-9xl flex justify-center">yes.</h1>
			</div>
		</div>

	)

}