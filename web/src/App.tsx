import 'antd/dist/reset.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />{' '}
            </Routes>
        </div>
    );
}

export default App;
