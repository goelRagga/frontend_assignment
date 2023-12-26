"use client";

import React from "react";
import Image from "next/image";
import styles from "../app/page.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = ({}) => {
  const router = useRouter();

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSection}>
        <Image src="/assets/LOGO.svg" width={100} height={100} alt="Logo" />

        <p className={styles.footerContent}>
          lOGO is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when
        </p>
      </div>
      <div className={styles.footerSection}>
        <h4 className={styles.footerContentHeader}> USEFUL LINKS</h4>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link href="/">CONTACT US</Link>
          </li>
          <li>
            <Link href="/">ABOUT US</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h4>FOLLOW US ON</h4>
        <div className={styles.socials}>
          <Image
            src="/assets/Facebook.svg"
            width={30}
            height={30}
            alt="Facebook"
          />
          <Image
            src="/assets/Instagram.svg"
            width={30}
            height={30}
            alt="Instagram"
          />
          <Image
            src="/assets/Twitter.svg"
            width={30}
            height={30}
            alt="Twitter"
          />
          <Image
            src="/assets/Youtube.svg"
            width={30}
            height={30}
            alt="Youtube"
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
