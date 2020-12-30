import './App.css';
import {Canvas, useFrame} from 'react-three-fiber';
//import Cube from './components/cube';
import {OrbitControls} from '@react-three/drei';

function App() {
  return (
    <div className="App">
      <h1>hiiiii</h1>
      <Canvas>
      <OrbitControls/>
      <ambientLight intensity={.5}/>
      <spotLight position={[10,15,10]} angle={0.3} />
      <mesh>
          <boxBufferGeometry attach='geometry' />
          <meshStandardMaterial color='teal' />
      </mesh>
      </Canvas>
    </div>
  );
}

export default App;
