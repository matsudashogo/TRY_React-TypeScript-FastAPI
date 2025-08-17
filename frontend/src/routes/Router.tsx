import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Top from '../components/pages/Top'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Top />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router