import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css'; // Ensure you are importing your CSS file here 
import PrivacyPolicy from './components/PrivacyPolicy'; 
import QRCodeGenerator from './components/QRCodeGenerator';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRCodeGenerator />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
