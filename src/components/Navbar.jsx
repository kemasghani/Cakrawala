"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '../../public/images/icon.png';
import Image from 'next/image';
import './Navbar.css';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`flex justify-between py-3 px-10 items-center sticky top-0 z-10 transition-all duration-1000 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <div className="w-20">
                <Image
                    src={Icon}
                    width={200}
                    height={200}
                    alt="xivu"
                    loading="lazy"
                />
            </div>
            <ul className="navLinks">
                <li className="navLink">
                    <Link href="/">Projects</Link>
                </li>
                <li className="navLink">
                    <Link href="/Services">Services</Link>
                </li>
                <li className="navLink">
                    <Link href="/whyus">Why Us</Link>
                </li>
                <li className="navLink">
                    <Link href="/howwework">How We Work</Link>
                </li>
                <li className="navLink">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
