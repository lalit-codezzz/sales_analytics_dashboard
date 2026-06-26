import { MdDashboard } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { MdInventory2 } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export type SidebarData = {
    header: string;
    children: {
        title: string;
        icon: {
            element: IconType,
            size: number;
        },
        endpoint: string;
    }[]
}

export const sidebar: SidebarData[] = [
    {
        header: "",
        children: [
            {
                title: "Dashboard",
                icon: {
                    element: MdDashboard,
                    size: 20
                },
                endpoint: "/dashboard"
            }
        ]
    },
    {
     header: "DATA",
        children: [
            {
                title: "Orders",
                icon: {
                    element: IoMdCart,
                    size: 20
                },
                endpoint: "/orders"
            },
            {
                title: "Products",
                icon: {
                    element: MdInventory2,
                    size: 20
                },
                endpoint: "/products"
            },
            {
                title: "Customers",
                icon: {
                    element: FaUsers,
                    size: 20
                },
                endpoint: "/customers"
            },
        ]   
    }
];