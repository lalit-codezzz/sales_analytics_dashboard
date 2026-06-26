import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchProducts } from "../../store/slices/productsSlice";
import { Product } from "../../types/Product";
import ProductFilterbar from "../../components/product/ProductFilterbar";

function ProductCard({ product }: { product: Product }) {
    return (
        <div className="group flex flex-col justify-between rounded-2xl border border-slate-700 bg-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl">
            {/* Image */}
            <section className="flex h-50 items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-slate-900 p-6">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </section>

            {/* Content */}
            <div className="space-y-4 p-5">
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">
                        ₹{(product.basePrice / 100).toLocaleString()}
                    </span>

                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-400">
                        {product.category}
                    </span>
                </div>

                <h3 className="h-15 line-clamp-2 text-base font-semibold leading-6 text-white">
                    {product.name}
                </h3>

                <button className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 active:scale-[0.98]">
                    View Product
                </button>
            </div>
        </div>
    );
}

export default function Products () {

    const products = useAppSelector((state) => state.products.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);


    return (
        <section className="h-full overflow-auto p-4">

            <ProductFilterbar />

            <div className="grid grid-cols-4 gap-4">
                {
                    products.length && products.map((product: Product) => <ProductCard product={product} />)
                }
            </div>

        </section>
    );

}