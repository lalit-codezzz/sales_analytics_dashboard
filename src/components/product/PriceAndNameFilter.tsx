import { useState } from "react";

function PriceFilter() {
    return (
        <div>
            <h2>Sort by price:</h2>
            <div>
                <input id="l2h" type="radio" name="price" />
                <label htmlFor="l2h">Low to high</label>
                <input id="h2l" type="radio" name="price" />
                <label htmlFor="h2l" >High to low</label>
            </div>
        </div>
    );
}

function NameFilter() {
    return (
        <div>
            <h2>Sort by name:</h2>
            <div>
                <input id="a2z" type="radio" name="name" />
                <label htmlFor="a2z" >A to Z</label>
                <input id="z2a" type="radio" name="name" />
                <label htmlFor="z2a">Z to A</label>
            </div>
        </div>
    );
}


export default function PriceAndNameFilter() {

    const [filter, setFilter] = useState<string>("");

    return (
        <section>
            <select onChange={(e) => setFilter(e.currentTarget.value)}>
                <option>--Default--</option>
                <option value="price">Sort by price</option>
                <option value="name">Sort by name</option>
                <option value="">Shuffle products</option>
            </select>

            {
                filter === "price" ? <PriceFilter /> : filter === "name" && <NameFilter />
            }





        </section>
    );
};
