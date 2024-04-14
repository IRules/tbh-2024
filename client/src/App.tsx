import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import {FiSettings} from 'react-icons/fi';
import {Sidebar} from './components';
import {Tests} from './pages';
import './App.css';

function App() {
    const activeMenu = true;
    return (
        <BrowserRouter>
            <div className="w-screen h-screen">
                <div className="flex relative dark:bg-main-dark-bg w-full">
                    <div className="right-4 bottom-4 style={{ zIndex: '1000' }}">
                    </div>
                    {activeMenu ? (
                        <div className="w-72 sidebar
                      dark:bg-secondary-dark-bg
                      bg-white h-screen">
                            <Sidebar/>
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar/>
                        </div>
                    )}
                    <div className="w-screen">
                        <Routes>
                            <Route path="/" element={<Tests/>}/>
                            {/*<Route path="/tests" element={<Tests/>}/>*/}
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;