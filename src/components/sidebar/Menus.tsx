import React from "react";
import { SidebarData, sidebar } from "../../constants/sidebar";
import { NavLink } from "react-router";
import { useAppDispatch } from "../../hooks/redux";
import { update } from "../../store/slices/currentOpenMenuSlice";

function WithHeaderMenu({ data }: { data: SidebarData }) {
    const dispatch = useAppDispatch();
    return (
        <React.Fragment>

            <h3 className="text-xs font-semibold text-slate-500 mb-4">{data.header}</h3>
            {
                data.children.map((item) => {
                    return <NavLink to={item.endpoint} className={({ isActive }) => {
                        return (isActive ? "p-2 rounded-sm font-semibold text-sm my-3 flex items-center gap-4 text-white bg-blue-500" : "p-2 rounded-sm text-sm my-3 flex items-center gap-4 text-white")

                    }} onClick={() => dispatch(update(item.title))}>
                        {<item.icon.element size={item.icon.size} />}
                        {item.title}
                    </NavLink>
                })
            }

        </React.Fragment>
    );
}

function WithoutHeaderMenu({ data }: { data: SidebarData }) {
    const dispatch = useAppDispatch();

    return (
        <React.Fragment>

            {
                data.children.map((item) => {
                    return <NavLink to={item.endpoint} className={({ isActive }) => {
                        return (isActive ? "p-2 rounded-sm font-semibold text-sm my-3 flex items-center gap-4 text-white bg-blue-500" : "p-2 rounded-sm text-sm my-3 flex items-center gap-4 text-white")

                    }} onClick={() => dispatch(update(item.title))}>
                        {<item.icon.element size={item.icon.size} />}
                        {item.title}
                    </NavLink>
                })
            }

        </React.Fragment>
    );
}

export default function Menus() {
    return (
        <section className="px-2">
            {
                sidebar.map((menu) => {
                    return <nav className="mt-4">

                        {
                            menu.header ? <WithHeaderMenu data={menu} /> : <WithoutHeaderMenu data={menu} />
                        }

                    </nav>
                })
            }
        </section>
    );
}