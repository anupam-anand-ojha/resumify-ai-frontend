import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {

  const Navigate = useNavigate();
  return (
   <div className="hero min-h-screen relative overflow-hidden">

  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover"
  >
    <source src="/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.

  </video>

   <div className="absolute inset-0 bg-black/40 z-0"></div>

  <div className="hero-overlay"></div>

  <div className="hero-content text-neutral-content text-center">
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