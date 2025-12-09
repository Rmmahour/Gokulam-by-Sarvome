"use client";
import React from "react"
import Image from "next/image";

const designImages = [
    "/3bhk-builder-floor-faridabad/image.png",
    "/3bhk-builder-floor-faridabad/image.png",
    "/3bhk-builder-floor-faridabad/image.png",
    "/3bhk-builder-floor-faridabad/image.png",
];


export default function ProjectGallery() {
    return (
        <section className="py-14 bg-[#f5f1e8]">
            <div className="container mx-auto px-5 max-w-[1200px]">
                <div className="flex items-end justify-between mb-5.5">
                    <h2 className="text-[28px] m-0">Project Gallery</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                    {designImages.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-2xl border border-[#e5e7eb]">
                            <Image src={src} alt={`Design Inspiration ${index + 1}`} width={300} height={200} className="w-full h-auto object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}