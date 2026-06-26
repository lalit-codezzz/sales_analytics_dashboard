import Logo from "../components/sidebar/Logo";
import Menus from "../components/sidebar/Menus";

export default function Sidebar() {
    // console.log(1)

    return (
        <aside className="h-full w-[15%] border-r border-[#233043]">

            {/* Logo area */}
                <Logo />


            {/* Menu area */}
            <Menus />

        </aside>
    );
}