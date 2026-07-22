import React from 'react'

function Background() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover z-0 blur-sm "
      >
        <source src="/video-optimized.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 bg-gradient-to-b from-black/15 via-[#120908]/35 to-black/55 -z-10 pointer-events-none"></div>
    </>
  );
}


export default Background