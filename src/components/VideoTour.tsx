"use client";

import React, { useState } from "react";
import { Play, Video, Maximize2, Minimize2 } from "lucide-react";

interface VideoTourProps {
  videoUrl: string;
  title?: string;
  thumbnail?: string;
}

export default function VideoTour({
  videoUrl,
  title = "Property Video Tour",
  thumbnail,
}: VideoTourProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Extract video ID from YouTube URL
  const getYouTubeEmbedUrl = (url: string) => {
    // If already an embed URL, return it
    if (url.includes("embed")) {
      return url;
    }

    // Extract video ID from various YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }

    return url;
  };

  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleFullscreen = () => {
    const element = document.getElementById("video-tour-iframe");
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
          <div className="bg-red-500/10 p-3 rounded-xl">
            <Video className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h2 className="text-2xl font-montserrat font-bold text-brand-blue">
              {title}
            </h2>
            <p className="text-gray-600 text-sm">
              Watch a guided tour of the property
            </p>
          </div>
        </div>
        {isPlaying && (
          <button
            onClick={handleFullscreen}
            className="bg-gray-100 hover:bg-gray-200 p-3 rounded-xl transition-colors"
            aria-label="Toggle fullscreen"
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>
        )}
      </div>

      <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-gray-900">
        {!isPlaying ? (
          <div
            className="relative w-full h-full cursor-pointer group"
            onClick={handlePlay}
          >
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <Play className="w-24 h-24 text-white/50" />
              </div>
            )}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-full group-hover:scale-110 transition-transform">
                <Play className="w-12 h-12 text-brand-blue fill-current" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-semibold">
              Click to play video
            </div>
          </div>
        ) : (
          <iframe
            id="video-tour-iframe"
            src={embedUrl}
            className="w-full h-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title={title}
          />
        )}
      </div>

      <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-100">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-red-600">Watch:</span> Get a detailed walkthrough
          of the property, showcasing all rooms, features, and the surrounding area.
        </p>
      </div>
    </div>
  );
}
