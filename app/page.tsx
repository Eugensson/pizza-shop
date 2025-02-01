import { Banner } from "@/components/banner";
import { PizzaCard } from "@/components/pizza-card";

import { pizzas } from "@/lib/data";

const Home = () => {
  return (
    <main>
      <Banner />
      <div className="container">
        <ul className="py-12 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8">
          {pizzas.map((pizza) => (
            <li key={pizza.id}>
              <PizzaCard pizza={pizza} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
