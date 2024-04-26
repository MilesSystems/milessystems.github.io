import About, {ABOUT} from "./pages/about";
import Portfolio, {PORTFOLIO} from "./pages/Portfolio";
import Privacy, {PRIVACY} from "./pages/privacy";
import Home from "./pages/home";
import {ppr} from "./hoc/passPropertiesAndRender";
import Wrapper from "./wrapper";
import isTest from "./variables/isTest";
import {Routes, Route, Navigate, MemoryRouter, HashRouter} from 'react-router-dom';



export default function App() {

    console.log("App TSX RENDER");

    const reactRouterContext = (children: any) => {

        if (isTest) {

            return <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>

        }

        return <HashRouter>{children}</HashRouter>

    }

    return reactRouterContext(<>
        <Routes>
            <Route path={'/*'} element={ppr(Wrapper, {})}>
                <Route path={ABOUT} element={ppr(About, {})}/>
                <Route path={PORTFOLIO} element={ppr(Portfolio, {})}/>
                <Route path={PRIVACY} element={ppr(Privacy, {})}/>
                <Route path={'*'} element={ppr(Home, {})}/>
            </Route>
        </Routes>
    </>)


}