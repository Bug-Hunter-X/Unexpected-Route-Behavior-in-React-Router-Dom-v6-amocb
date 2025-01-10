```javascript
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    // Add any needed cleanup logic here.
    return () => {};
  }, []);
  return (
    <div>
      Home <button onClick={() => navigate('/about')}>Go to About</button>
    </div>
  );
}

function About() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log('location changed:', location);
  }, [location]);

  return (
    <div>
      About <button onClick={() => navigate(-1)}>Go Back</button>       <button onClick={() => navigate('/')}>Go to Home</button> 
    </div>
  );
}

export default App;
```