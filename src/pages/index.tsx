import {
  useEffect,
  useState,
} from 'react';

import Header from '../components/Header';
import { getAllProducts } from '../utils/https/product';

function Mainpage() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getAllProducts();
      setData(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <main className="py-5">
        <div className="container global-px">
          <div className="mb-5">
            <p className="font-semibold text-lg">Top Products</p>
          </div>
          <div className="flex gap-3">
            {data.map(({ name, image }, idx) => (
              <div
                className="card card-compact w-56 bg-base-100 shadow-xl"
                key={idx}
              >
                <figure>
                  <img
                    src={image || "/images/product-placeholder.png"}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>IDR 50.000</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-primary">Buy</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Mainpage;
