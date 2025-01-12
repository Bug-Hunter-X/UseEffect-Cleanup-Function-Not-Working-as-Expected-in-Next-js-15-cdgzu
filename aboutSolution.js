```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    console.log('About page mounted');
    const newIntervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    setIntervalId(newIntervalId);
    return () => {
      clearInterval(newIntervalId);
    };
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>Count: {count}</p>
    </div>
  );
}
```