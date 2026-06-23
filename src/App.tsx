import { useEffect } from "react"
import { fetchProducts } from "../scripts/testing/count-products-according-to-category";
import countCustomersByCountry from "../scripts/testing/count-customers-according-to-country";
import generateWeightedProducts from "../scripts/testing/create-weighted-products-array";
import generateWeightedCustomers from "../scripts/testing/create-weighted-customers-array";

function App() {

  useEffect(() => {
    // countCustomersByCountry().then((mp) => console.log(mp));
    generateWeightedCustomers().then((data) => {
      console.log("LENGTH: ", data.length);
      console.log(data);
    })
  }, []);

  return (
    <section>
      App
    </section>
  )
}

export default App
