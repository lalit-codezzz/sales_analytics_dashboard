import { Outlet } from "react-router";
import Header from "../components/Header";

export default function Main() {
    return (
        <div className="h-full w-[85%] bg-blue-400">
            <Header />

            <main className="h-[92%] w-full bg-[#0F1825]">
                <Outlet />
            </main>

        </div>
    );
}