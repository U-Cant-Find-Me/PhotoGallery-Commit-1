import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/navbar.module.css'
import { CgProfile } from 'react-icons/cg';
import { MdNotificationsActive } from 'react-icons/md';
import { VscThreeBars } from 'react-icons/vsc';
import { ImSearch } from 'react-icons/im';
import { SiGooglelens } from 'react-icons/si';

const SearchBox = () => {
    return (
        <div>
            <Head>
                <title>Find The Picture you Want</title>
            </Head>
            <header className={styles.top}>
                <div className={styles.spaceLeft}>
                    <img className={styles.image} src="logo.jpg" alt="logo image" />
                    <div className={styles.inputOuter}>
                        <ImSearch className={styles.ImSearch} />
                        <input className={styles.search} type="text" placeholder='Search...' />
                        <SiGooglelens className={styles.SiGooglelens} />
                    </div>
                </div>
                <div className={styles.spaceRight}>
                    <ul className={styles.list}>
                        <li>
                            <Link href="#">
                                <a className={styles.listItems}>Advertise</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className={styles.listItems}>Blog</a>
                            </Link>
                        </li>
                    </ul>
                    <Link href="#">
                        <a><button className={styles.buttonSubmit}>Submit a Photo</button></a>
                    </Link>
                    <MdNotificationsActive className={styles.MdNotificationsActive} />
                    <CgProfile className={styles.CgProfile} />
                    <VscThreeBars className={styles.VscThreeBars} />
                </div>
            </header>
        </div>
    )
}

export default SearchBox;