import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import { poppins } from "./fonts";
import { getProducts } from "@/lib/Products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Footer from "@/components/Footer";

export default async function Home() {
  const products = await getProducts();
  return (
    <main className={poppins.className}>
      <Banner image="/assets/HomeBanner.svg" title="Logo Electronics">
        <div className={styles.bannerContent}>
          <hr className={styles.bannerLine} />
          <p>THE TECHIES YOU LOVE</p>
          <hr className={styles.bannerLine} />
        </div>
        <Link href="/products">
          <button className={styles.viewAllbutton}>
            <span>View all products</span>
            <Image
              className={styles.arrow}
              src="/assets/BtnArrowGradient.svg"
              width={30}
              height={30}
              alt="Arrow"
            />
          </button>
        </Link>
      </Banner>
      <div className={styles.productsList}>
        {products.slice(0, 8).map((obj, index) => {
          return <ProductCard data={obj} key={index} />;
        })}
      </div>
    </main>
  );
}
