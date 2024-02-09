import Header from '../../components/header/Header';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <div className="content">
                <Outlet />
            </div>
        </>
    );
}

export default Layout;