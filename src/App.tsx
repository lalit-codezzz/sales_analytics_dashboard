import { useEffect } from "react"
import { fetchProducts } from "../scripts/testing/count-products-according-to-category";
import countCustomersByCountry from "../scripts/testing/count-customers-according-to-country";

function App() {

  useEffect(() => {
    countCustomersByCountry().then((mp) => console.log(mp));
  }, []);

  return (
    <section>
      App
    </section>
  )
}

export default App
