import { Route, Routes, Navigate } from 'react-router-dom'
import AddEstadia from '../components/AddEstadia'
import Home from '../components/Home'

const DashBoardRoutes = ({ isHost }) => {

    console.log(isHost)

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                {isHost ? <Route path="/add" element={<AddEstadia />} /> : null}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}

export default DashBoardRoutes