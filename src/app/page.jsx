// pages/index.js (or pages/home.js)
"use client";
import VideoTextEffect from "../components/VideoTextEffect";
import Services from "../components/services";
import React from 'react';

export default function Home() {

  return (
    <>
      <section className="">
        <VideoTextEffect />
        <Services />
      </section>
    </>
  );
}
