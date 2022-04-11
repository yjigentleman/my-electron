import { RouteObject, useRoutes } from "react-router-dom";
import Main from '../src/view/main';
import Settings from '../src/view/settings';
import Wallet from '../src/view/wallet';

function getRoutes () {
    const routes : RouteObject[] = [
        {
            path: '/',
            element: <Main/>,
            children: []
        },
        {
            path: '/',
            element: <Main/>,
            children: []
        },
        {
            path: '/',
            element: <Main/>,
            children: []
        },
    ];
    return routes
}

const Router: React.FC = () => {
    const routes: RouteObject[] = getRoutes() ;
    const routing = useRoutes(routes);
    return(
        <div >
           {routing} 
        </div>
        
    )
}
export default Router;