"use client";
import { useEffect, useRef, useState } from "react";

export const VideoBackground = ({ source }) => {
  const videoRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.1, // The element becomes visible when at least 10% of it is in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Update the state to indicate whether the video is in the viewport or not
        setIsInViewport(entry.isIntersecting);
      });
    }, options);

    // Observe the video element
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      // Clean up the observer when the component unmounts
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Play or pause the video based on its visibility
    if (videoRef.current) {
      if (isInViewport) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInViewport]);
  return (
    <video
      autoPlay
      loop
      muted
      ref={videoRef}
      className="absolute top-0 bottom-0 left-0 right-0  object-cover w-full h-full gradient-carousel -z-[1]"
    >
      <source src={source} type="video/webm" />
    </video>
  );
};
