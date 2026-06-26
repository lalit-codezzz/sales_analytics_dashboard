import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./features/dashboard/Dashboard";

const Products = React.lazy(() => import("./features/product/Products"));
const Orders = React.lazy(() => import("./features/order/Orders"));

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>

                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="orders" element={<Suspense fallback={<p className="text-white">Loading...</p>}><Orders /></Suspense>} />
                    <Route path="products" element={<Products />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}