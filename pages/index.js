import Head from "next/head";
import Link from "next/link";
import ProductCard from "../components/Products/ProductCard";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Go Sports</title>
      </Head>
      <div className="flex gap-3 flex-wrap justify-around mx-40 my-6">
        {[1, 2, 3, 4, 5].map((product) => (
          <Link key={product} href={`/${product}`}>
            <a>
              <ProductCard />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
