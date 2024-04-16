import { Route, Routes } from 'react-router-dom';
import LayoutAccount from './components/LayoutAccount/LayoutAccount';
import PageCategory from './pages/Category/pageCategory';
import Layout from './components/layout/Layout';
import Login from './pages/Account/Login';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="category" element={<PageCategory />} />
            </Route>
            <Route path="/" element={<LayoutAccount />}>
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Login />}></Route>
            </Route>
            <Route path="*" element={<>404 page not found</>} />
        </Routes>
    );
}

export default App;
