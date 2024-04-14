import {Routes, BrowserRouter, Route} from 'react-router-dom';
// import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from "@syncfusion/ej2-react-popups";

import {Sidebar} from './components';
import {Analytics, Tests} from './pages';
import './App.css';

function App() {
  const activeMenu = true;
  return (
      <div>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4 style={{ zIndex: '1000' }}">
              <TooltipComponent content="Settings">
                <button type="button"
                        className="text-3xl p-3
                        hover:drop-shadow-xl hover:bg-light-grey text-white"
                        style={{
                          backgroundColor: 'pink',
                          borderRadius: '50%'
                        }}>
                  {/*<FiSettings/>*/}
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
                <div className="w-72 fixed sidebar
                      dark:bg-secondary-dark-bg
                      bg-white h-screen">
                  <Sidebar/>
                </div>
            ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar/>
                </div>
            )}
            <div>
              <Routes>
                <Route path="/" element={<Analytics/>}/>
                <Route path="/analytics" element={<Analytics/>}/>
                <Route path="/tests" element={<Tests/>}/>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;