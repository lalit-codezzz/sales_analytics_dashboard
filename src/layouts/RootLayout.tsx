import Main from "../features/Main";
import Sidebar from "../features/Sidebar";

export default function RootLayout () {



    return (
        <div className="h-full w-full bg-[#0C1421] flex items-center justify-between">
            {/* Sidebar */}
            <Sidebar />

            {/* Main */}
            <Main />

        </div>
    ); 
};

// #0C1421

// #0F1825

// #161F2C

// border - #233043
