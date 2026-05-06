import React from 'react'

function Hero() {
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

  <div className="hero-overlay"></div>

  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">
        Build Your Resume with AI 
      </h1>
      <p className="mb-5">
        Create professional, ATS-friendly resumes instantly using AI. 
        Just enter your details and get a clean, job-ready resume in seconds
      </p>
      <button className="btn btn-primary">Create Resume</button>
    </div>
  </div>
</div>
  )
}

export default Hero