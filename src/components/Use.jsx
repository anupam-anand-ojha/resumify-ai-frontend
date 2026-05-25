import React from 'react'
import { useNavigate } from 'react-router-dom'


function Use() {

    const navigate = useNavigate();
  return (
    <div class="hero  min-h-screen">
  <div class="hero-content text-center">
    <div class="max-w-2xl">
      
      <h1 class=" glass text-5xl font-bold">
        How to Use Resumify AI
      </h1>

      <p class=" glass py-6 text-lg">
        Create a professional ATS-friendly resume in just a few simple steps.
        Enter your details, choose your skills and experience, then let
        Resumify AI generate a clean and modern resume instantly.
      </p>

      <div class="flex flex-col gap-4 text-left bg-base-100 p-6 rounded-2xl shadow-lg">
        
        <div>
          <h2 class=" glass font-bold text-xl">1. Enter Your Details</h2>
          <p>Add your personal information, education, skills, and work experience.</p>
        </div>

        <div>
          <h2 class=" glass font-bold text-xl">2. Generate Resume</h2>
          <p>Our AI instantly creates a professional and ATS-friendly resume layout.</p>
        </div>

        <div>
          <h2 class=" glass font-bold text-xl">3. Preview & Download</h2>
          <p>Preview your resume in real-time and download it as a ready-to-use PDF.</p>
        </div>

      </div>

      <button onClick={ () => { navigate('/resume')}} class="btn btn-primary mt-8">
        Get Started
      </button>

    </div>
  </div>
</div>
  )
}

export default Use