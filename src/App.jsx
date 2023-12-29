import React, { useState } from 'react';
import Background from './components/background';
import Foreground from './components/Foreground';


function App() {
  var [a,b] = useState(69);
  return (
    
    <div className='relative w-full h-screen bg-zinc-700'>
      <Background />
      <Foreground />
    </div>
    
    
  )
}

export default App