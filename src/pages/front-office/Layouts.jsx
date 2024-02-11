import Header from '../../components/header/Headers';
import { Outlet } from "react-router-dom";

const Layout = ({setToken}) => {
    return (
        <>
            <Header setToken={setToken} />
            <div className="content">
                <Outlet />
            </div>
        </>
    );
}

export default Layout;