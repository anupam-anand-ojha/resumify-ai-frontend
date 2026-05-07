import { useState } from "react";
import axios from "axios";

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    education: "",
    experience: "",
    skills: "",
    projects: "",
  });

  const [loading, setLoading] = useState(false);
  const [resume, setResume] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/generate-resume",
        formData
      );
      setResume(res.data.resume);
    } catch (err) {
      alert("Error generating resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="form" className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8 mt-20">

      {/* FORM */}
      <div className="card bg-black/30 backdrop-blur-md border border-white/10 shadow-xl p-6 space-y-4 text-white">
        <h2 className="text-2xl font-bold">Enter Details</h2>

        <input name="name" placeholder="Name"
          className="input input-bordered bg-white/10 border-white/20 text-white placeholder-gray-300"
          onChange={handleChange}
        />

        <input name="education" placeholder="Education"
          className="input input-bordered bg-white/10 border-white/20 text-white placeholder-gray-300"
          onChange={handleChange}
        />

        <input name="experience" placeholder="Experience"
          className="input input-bordered bg-white/10 border-white/20 text-white placeholder-gray-300"
          onChange={handleChange}
        />

        <input name="skills" placeholder="Skills"
          className="input input-bordered bg-white/10 border-white/20 text-white placeholder-gray-300"
          onChange={handleChange}
        />

        <input name="projects" placeholder="Projects"
          className="input input-bordered bg-white/10 border-white/20 text-white placeholder-gray-300"
          onChange={handleChange}
        />

        <button onClick={handleSubmit} className="btn btn-primary">
          {loading ? "Generating..." : "Generate Resume"}
        </button>
      </div>

      {/* OUTPUT */}
      <div className="card bg-black/30 backdrop-blur-md border border-white/10 shadow-xl p-6 text-white">
        <h2 className="text-xl font-bold mb-4">Generated Resume</h2>

        <div className="whitespace-pre-wrap text-sm max-h-[500px] overflow-y-auto">
          {resume || "Your AI-generated resume will appear here..."}
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;