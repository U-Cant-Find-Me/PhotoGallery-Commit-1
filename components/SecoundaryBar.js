import React from 'react';
import Link from 'next/link';
import styles from '../styles/secoundaryBar.module.css';
import { RiMore2Line } from 'react-icons/ri'

const SecoundaryBar = () => {
    return (
        <section className={styles.outline}>
            <div className={styles.contentLeft}>
                <ul className={styles.list}>
                    <li>
                        <Link href="#">
                            <a className={styles.listItem}>Editorial</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className={styles.listItem}>Following</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <RiMore2Line className={styles.RiMore2Line} />
            <div className={styles.contentRight}>
                <ul className={styles.list}>
                    <li>
                        <Link href="#">
                            <a className={styles.listItem}>Wallpaper</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className={styles.listItem}>3D Images</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className={styles.listItem}>Film</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className={styles.listItem}>Nature</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className={styles.listItem}>Space</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className={styles.listItem}>People</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className={styles.listItem}>Animal</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className={styles.listItem}>Street Photography</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className={styles.listItem}>Travel</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SecoundaryBar;