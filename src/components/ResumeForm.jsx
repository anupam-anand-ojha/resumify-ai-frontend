import { useState } from "react";
import axios from "axios";
import html2pdf from "html2pdf.js";

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
  
// download pdf

const handleDownload = () => {
  const element = document.getElementById("resume-content");

  const opt = {
    margin: 0.5,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(opt).from(element).save();
};

  return (
    <div className="  relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/50 z-0"></div>
    <div id="form" className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8 mt-20 relative overflow-hidden">
    {/* FORM */}
    <div className="relative z-10 card bg-black/30 backdrop-blur-md border border-white/10 shadow-xl p-6 space-y-4 text-white">
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
    <div className="relative z-10 card bg-black/30 backdrop-blur-md border border-white/10 shadow-xl p-6 text-white">
      <h2 className="text-xl font-bold mb-4">Generated Resume</h2>
      

      <div  id="resume-content" className="whitespace-pre-wrap text-sm max-h-[500px] overflow-y-auto">
        {resume || "Your AI-generated resume will appear here..."}
      </div>
      <button
  className="btn"
  onClick={() =>{handleDownload(); document.getElementById('my_modal_5').showModal()}}
>
  Download PDF
</button>

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box text-center">
    <h3 className="font-bold text-xl">Thank You! </h3>
    
    <p className="py-4 text-gray-600">
      Thanks for using <span className="font-semibold">Resumify</span>.<br />
      Your download will begin shortly. 
    </p>

    <div className="modal-action justify-center">
      <form method="dialog">
        <button className="btn btn-primary">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>

  </div>

  );
};

export default ResumeForm;