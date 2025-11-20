"use client";

import React, { useState } from "react";
import { Maximize2, Minimize2, RotateCw } from "lucide-react";

interface VirtualTour360Props {
  tourUrl: string;
  title?: string;
}

export default function VirtualTour360({ tourUrl, title = "360° Virtual Tour" }: VirtualTour360Props) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    const element = document.getElementById("tour-360-iframe");
    if (!element) return;

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-brand-blue/10 p-3 rounded-xl">
            <RotateCw className="w-6 h-6 text-brand-blue" />
          </div>
          <div>
            <h2 className="text-2xl font-montserrat font-bold text-brand-blue">
              {title}
            </h2>
            <p className="text-gray-600 text-sm">
              Explore the property in 360 degrees
            </p>
          </div>
        </div>
        <button
          onClick={handleFullscreen}
          className="bg-gray-100 hover:bg-gray-200 p-3 rounded-xl transition-colors"
          aria-label="Toggle fullscreen"
        >
          {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>
      </div>

      <div className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden bg-gray-900">
        <iframe
          id="tour-360-iframe"
          src={tourUrl}
          className="w-full h-full"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
          title={title}
        />
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-brand-blue">Tip:</span> Click and drag to rotate the view.
          Use your mouse wheel or pinch to zoom in/out. Click the fullscreen button for an immersive experience.
        </p>
      </div>
    </div>
  );
}
