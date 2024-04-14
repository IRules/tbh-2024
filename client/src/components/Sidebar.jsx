import React from 'react'
import { NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { Link } from "react-router-dom";
// import {TooltipComponent} from "@syncfusion/ej2-react-popups";


const Sidebar = () => {
    const activeMenu = true;
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <div className="p-3 h-screen
        md:overflow-hidden overflow-auto
        md:hover:overflow-auto pb-10">
            {activeMenu && (
                <>
                <div className="flex justify-between">
                    <Link to="/" onClick={() => {} } className="items-center gap-3 ml-3
                    mt-4 flex text-2xl font-extrabold tracking-tight
                    dark:text-black text-slate-900">
                       <span>TestWare</span>
                    </Link>
                </div>
                    <div className="mt-10">
                        <div className="text-blue-400 mt-4 uppercase hover:bg-gray-200 p-2" >
                            Tests
                        </div>
                    </div>
                </>)}
        </div>
    )
}

export default Sidebar