"use client";
import React from "react";

export default function AnimateButton() {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV_Rizky_Nugraha.pdf';
        link.download = 'CV_Rizky_Nugraha.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="relative overflow-hidden">
                <button className="px-4 py-2 rounded-md text-primary border-2 border-primary flex justify-center group/modal-btn" onClick={downloadCV}>
                        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                            Curriculum Vitae
                        </span>
                        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-primary z-20">
                            Download 💾
                        </div>
                </button>
        </div>
    )
}