"use client";
import './VideoTextEffect.css';
import Link from 'next/link';
import Icon from '../../public/images/icon.png';
import Image from 'next/image';

const VideoTextEffect = () => {
    return (
        <div className="container transition-all">
            <div className="navbarFirst hidden">
                <nav className="flex justify-between py-3 px-10 items-center">
                    <div className="w-20">
                        <Image
                            src={Icon}
                            width={200}
                            height={200}
                            alt="xivu"
                            loading="lazy"
                        />
                    </div>
                    <ul className="navLinks -translate-y-[115px]">
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
            </div>
            <video className="backgroundVideo w-full" autoPlay loop muted>
                <source src="/video/video6.mp4" type="video/mp4" />
            </video>
            <h1 className="overlayText">XIVU STUDIOS</h1>
        </div>
    );
};

export default VideoTextEffect;
