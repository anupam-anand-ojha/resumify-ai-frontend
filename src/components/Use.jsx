import React from 'react'
import { useNavigate } from 'react-router-dom'

function Use() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_30%_35%,rgba(170,107,194,0.12),transparent_35%),radial-gradient(circle_at_70%_65%,rgba(216,137,56,0.15),transparent_40%),linear-gradient(135deg,#050505,#120908,#2b0d08,#160a09,#050505)] p-6">

      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 max-w-3xl w-full">

        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            How to Use Resumify AI
          </h1>

          <p className="text-lg text-gray-200 mb-8">
            Create a professional ATS-friendly resume in just a few simple
            steps. Enter your details, choose your skills and experience, then
            let Resumify AI generate a clean and modern resume instantly.
          </p>
        </div>

        <div className="space-y-4">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4">
            <h2 className="font-bold text-xl text-white">
              1. Enter Your Details
            </h2>
            <p className="text-gray-200">
              Add your personal information, education, skills, and work
              experience.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4">
            <h2 className="font-bold text-xl text-white">
              2. Generate Resume
            </h2>
            <p className="text-gray-200">
              Our AI instantly creates a professional and ATS-friendly resume
              layout.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4">
            <h2 className="font-bold text-xl text-white">
              3. Preview & Download
            </h2>
            <p className="text-gray-200">
              Preview your resume in real-time and download it as a ready-to-use
              PDF.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/resume")}
            className="btn btn-primary mt-8"
          >
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
}

export default Use;