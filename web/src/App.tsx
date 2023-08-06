import 'antd/dist/reset.css';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import { setupStore } from './redux/store';

function App() {
    return (
        <Provider store={setupStore()}>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />{' '}
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
