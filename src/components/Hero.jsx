import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {

  const Navigate = useNavigate();
  return (
   <div className="hero min-h-screen relative overflow-hidden">

  {/* Video Background
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover z-0"
  >
    <source src="/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.

  </video>

    */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-[#120908]/35 to-black/55 z-10"></div>

  

  <div className="hero-content relative z-20 text-neutral-content text-center">
    <div className="max-w-3xl">
      <h1 className="mb-5 text-2xl font-bold">
       <span>
   Build Your Resume With{" "}
  <span className="text-rotate">
    <span>
      <span className="bg-teal-400 text-teal-800 px-2"> RESUMIFY AI</span>
      <span className="bg-red-400 text-red-800 px-2">AI PRECISION</span>
      <span className="bg-blue-400 text-blue-800 px-2">ATS OPTIMIZED</span>
    </span>
  </span>
</span>
      </h1>
      
      <p className="mb-5">
      Create professional, ATS optimized resumes in minutes with the power of AI.
       Simply enter your details and generate a polished, job ready resume designed to stand out to recruiters.
      </p>
      <button onClick={ () => Navigate('/resume')} className="btn btn-primary">Create Resume</button>
    </div>
  </div>
</div>
  )
}

export default Hero