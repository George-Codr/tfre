// src/components/FadeComponent.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const FadeComponent = () => {
  const [show, setShow] = useState(true);

  const props = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(-20px)',
  });

  return (
    <div>
      <animated.div style={props}>
        <h1>About Me</h1>
        <p>Welcome to my portfolio! I'm a passionate developer...</p>
      </animated.div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} About Me
      </button>
    </div>
  );
};

export default FadeComponent;