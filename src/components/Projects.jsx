import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectData = [
  {
    id: 1,
    title: "BCG Bed-Based Health Monitoring",
    description: "Analyzed BCG & PPG signals to extract and validate Heart Rate (HR) and Respiratory Rate (RR) against reference data, with automated reporting.",
    tech: ["Python", "Pandas", "SciPy", "Matplotlib", "Plotly", "Signal Processing"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=BCG+Health+Monitoring",
    github: "", 
    live: ""
  },
  {
    id: 2,
    title: "Foot Pressure & Gait Analysis",
    description: "Analyzed foot-pressure sensor data to visualize pressure distribution and gait-related patterns across different foot regions.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Plotly"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=Foot+Pressure+Analysis",
    github: "", 
    live: ""
  },
  {
    id: 3,
    title: "PPG Data Analysis & Glucose Prediction",
    description: "Applied Linear Regression and statistical analysis on PPG data for patient-wise analysis and glucose-level estimation.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Linear Regression"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=PPG+Data+Analysis",
    github: "", 
    live: ""
  },
  {
    id: 4,
    title: "Age & Gender Prediction Using ML",
    description: "Developed a camera-based system using YOLOv8 to detect and predict age and gender from live camera input.",
    tech: ["Python", "YOLOv8", "PyTorch", "OpenCV", "Google Colab"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=Age+Gender+Prediction",
    github: "", 
    live: ""
  },
  {
    id: 5,
    title: "GCS Measurement – Foot Sole Detection",
    description: "Built a real-time edge-AI foot-sole detection and positioning system optimized for Raspberry Pi 4.",
    tech: ["YOLOv8-Nano", "ONNX", "OpenCV", "Raspberry Pi 4"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=GCS+Foot+Sole+Detection",
    github: "", 
    live: ""
  },
  {
    id: 6,
    title: "Skin Turgor – Body Water Retention System",
    description: "Developed an AI-based Skin Turgor analysis system using computer vision to measure skin recovery time and assess hydration-related changes.",
    tech: ["YOLOv8", "Ultralytics", "OpenCV", "Python"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=Skin+Turgor+Analysis",
    github: "", 
    live: ""
  },
  {
    id: 7,
    title: "Microbiology Bacteria Classification",
    description: "A YOLOv8 and TensorFlow-based AI system deployed on Raspberry Pi 4. It detects bacteria in culture plates through camera input and provides real-time buzzer alerts.",
    tech: ["TensorFlow", "YOLOv8", "Raspberry Pi"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=Bacteria+Classification",
    github: "", 
    live: ""
  },
  {
    id: 8,
    title: "Pharmacy Store Management System",
    description: "Developed a dual-camera system using YOLOv8 and PaddleOCR to detect, identify, and verify medicine strips, including batch and expiry information.",
    tech: ["YOLOv8", "OpenCV", "PaddleOCR", "PyTorch", "PaddlePaddle", "TheFuzz"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=Pharmacy+Management",
    github: "", 
    live: ""
  },
  {
    id: 9,
    title: "Real-Time rPPG & Multi-Biomarker Monitoring System",
    description: "Locally hosted, real-time camera-based remote Photoplethysmography (rPPG) system utilizing facial video analysis and signal processing to extract physiological information without contact. Estimates HR, RR, HRV, and SQI, featuring vascular pulse analysis, facial perfusion symmetry, and fatigue indicators via a live multi-biomarker dashboard.",
    tech: ["Python", "OpenCV", "NumPy", "SciPy", "Open-rPPG", "MediaPipe", "Pandas", "Matplotlib"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=rPPG+%26+Multi-Biomarker+System",
    github: "", 
    live: ""
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4 md:px-10 bg-gray-900 text-white min-h-screen border-t border-gray-800 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-blue-400 bg-blue-950/60 border border-blue-800/60 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            Featured Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Work</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm md:text-base">
            Showcase of AI, Computer Vision, Signal Processing, and Data Analysis solutions.
          </p>
        </div>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-gradient-to-b from-gray-800/90 to-gray-900/95 rounded-2xl overflow-hidden border border-gray-700/70 hover:border-blue-500/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 flex flex-col"
            >
              {/* Project Image & Badge */}
              <div className="relative w-full h-52 overflow-hidden bg-gray-950">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                {/* Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />

                {/* Number Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 bg-gray-900/80 backdrop-blur-md text-blue-400 text-xs font-mono font-semibold rounded-full border border-blue-500/30 shadow-md">
                  #{String(project.id).padStart(2, '0')}
                </span>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack Individual Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2.5 py-1 bg-blue-950/60 hover:bg-blue-900/70 text-blue-300 text-xs font-semibold rounded-lg border border-blue-800/50 hover:border-blue-500/60 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links (GitHub & Live) if present */}
                {(project.github || project.live) && (
                  <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-800">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                      >
                        <FaGithub className="text-base" /> Code
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                      >
                        <FaExternalLinkAlt className="text-xs" /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
