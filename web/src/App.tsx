import 'antd/dist/reset.css';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AdminRoute from './components/adminRoute';
import AlertDialog from './components/alert/Alert';
import Header from './components/header/Header';
import ContentPage from './pages/content/Content';
import HomePage from './pages/home/HomePage';
import { setupStore } from './redux/store';

function App() {
    return (
        <Provider store={setupStore()}>
            <div className="App">
                <Header />
                <AlertDialog />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/content"
                        element={
                            <AdminRoute>
                                <ContentPage />
                            </AdminRoute>
                        }
                    />
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
