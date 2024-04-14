import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            {/* <Route></Route> */}
            <Route path="/cms" element>
                <Route index />
            </Route>
        </Routes>
    );
}

export default App;
