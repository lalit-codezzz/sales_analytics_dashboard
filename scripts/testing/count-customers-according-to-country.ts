import axios from "axios";
import { Customer } from "../../src/types/Customer";

async function countCustomersByCountry () {

    const customerCountByCountry: Record<string, number> = {};

    const response = await axios("/data/customers.json");
    const data = response.data;

    data.forEach((c: Customer) => {
        
        if (!customerCountByCountry[c.country]) {

            customerCountByCountry[c.country] = 1;

        } else {
            customerCountByCountry[c.country]++;
        }
    });

    return customerCountByCountry;

}

export default countCustomersByCountry;