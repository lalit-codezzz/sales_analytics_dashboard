import { useAppSelector } from "../hooks/redux";

export default function Header () {

    const currentOpenMenu = useAppSelector(state => state.currentOpenMenu.currentOpenMenu);

    return (
        <header className="h-[8%] bg-[#0C1421] border-b border-[#233043] flex items-center px-4">
            <span className="text-white font-semibold text-xs">{currentOpenMenu.toUpperCase()}</span>
        </header>
    );
}