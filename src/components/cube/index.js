import React, {useState, useEffect, useRef} from 'react';
//import {Canvas, useFrame} from 'react-three-fiber';

function Cube(){
    const mesh = useRef();

    return(
        <mesh ref={mesh}>
            <boxBufferGeometry attach='geometry' />
            <meshStandardMaterial color='teal' />
        </mesh>
    )
}
export default Cube;