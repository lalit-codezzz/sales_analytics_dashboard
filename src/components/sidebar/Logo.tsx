import { IoBarChartSharp } from "react-icons/io5";

export default function Logo() {
    return (
        <section className="h-[8%] flex justify-center items-center gap-4 border-b border-[#233043]">
            <IoBarChartSharp color="white" size={20} />
            <h1 className="text-white text-lg font-semibold"><span className="text-red-500">S</span><span className="text-yellow-400">a</span><span className="text-green-400">l</span><span className="text-blue-400">e</span><span className="text-purple-400">s</span> Analytics</h1>
        </section>
    );
}