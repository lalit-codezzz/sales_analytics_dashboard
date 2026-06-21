import { faker } from "@faker-js/faker";
import * as fs from "fs";

import { Customer } from "../../src/types/Customer";
import { citiesByCountry, countries } from "../../src/constants/location";

const TOTAL_CUSTOMERS = 2000;

function generateRandomDigitUnderN(n: number): number {
  if (typeof n !== "number") {
    throw new Error("Only number required!");
  }

  return Math.ceil(Math.random() * n) % n;
}


async function generateCustomers() {
  const customers: Customer[] = [];

  for (let i = 1; i <= TOTAL_CUSTOMERS; i += 400) {
    for (let j = 1; j <= 400; ++j) {
      let randomDigitForCountry = generateRandomDigitUnderN(10);
      let randomDigitForCity = generateRandomDigitUnderN(10);

      let customerCountry = countries[randomDigitForCountry];
      let customerCity = citiesByCountry[customerCountry][randomDigitForCity];

      const customer: Customer = {
        id: crypto.randomUUID(),
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        email: `${faker.internet.email()}`,
        country: customerCountry,
        city: customerCity,
      };

      customers.push(customer);
    }
  }

  return customers;
}

generateCustomers().then((customers) => {
  fs.writeFileSync(
    `${process.cwd()}/public/data/customers.json`,
    JSON.stringify(customers),
  );
});
