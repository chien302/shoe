import Layout from './components/layout/Layout'
import { BrowserRouter as Router } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App;
