import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaHeartbeat, 
  FaChartLine, 
  FaEye, 
  FaMicrochip, 
  FaWater, 
  FaFlask, 
  FaPills, 
  FaWaveSquare 
} from 'react-icons/fa';

const projectData = [
  {
    id: 1,
    title: "BCG Bed-Based Health Monitoring",
    description: "Analyzed Ballistocardiogram (BCG) and PPG signals to extract and validate Heart Rate (HR) and Respiratory Rate (RR) against reference clinical data with automated analytics.",
    tech: ["Python", "Pandas", "SciPy", "Matplotlib", "Plotly", "Signal Processing"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    icon: <FaHeartbeat />,
    github: "", 
    live: ""
  },
  {
    id: 2,
    title: "Foot Pressure & Gait Analysis",
    description: "Analyzed foot-pressure sensor data to visualize dynamic pressure distribution, center-of-pressure progression, and gait-related biomechanical patterns across foot regions.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Plotly", "Biomechanics"],
    image: "/projects/foot-pressure-heatmap.png",
    imageFit: "object-contain bg-slate-950 p-2",
    icon: <FaChartLine />,
    github: "", 
    live: ""
  },
  {
    id: 3,
    title: "PPG Data Analysis & Glucose Prediction",
    description: "Applied statistical regression models on PPG pulse waveforms for patient-level feature extraction and non-invasive blood glucose estimation.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Linear Regression", "Biomedical Data"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    icon: <FaHeartbeat />,
    github: "", 
    live: ""
  },
  {
    id: 4,
    title: "Age & Gender Prediction Using ML",
    description: "Engineered a real-time multi-task computer vision pipeline using YOLOv8 and deep learning to accurately detect human faces and classify age group and gender.",
    tech: ["Python", "YOLOv8", "PyTorch", "OpenCV", "Google Colab", "Deep Learning"],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=600&q=80",
    icon: <FaEye />,
    github: "", 
    live: ""
  },
  {
    id: 5,
    title: "GCS Measurement – Foot Sole Detection",
    description: "Built an ultra-low latency Edge-AI system deployed on Raspberry Pi 4 using ONNX-optimized YOLOv8-Nano for real-time foot sole localization and position alignment.",
    tech: ["YOLOv8-Nano", "ONNX", "OpenCV", "Raspberry Pi 4", "Edge AI"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    icon: <FaMicrochip />,
    github: "", 
    live: ""
  },
  {
    id: 6,
    title: "Skin Turgor – Water Retention System",
    description: "Developed an AI computer vision system to measure skin recovery time following pinch tests, quantitatively assessing skin turgor and patient hydration status.",
    tech: ["YOLOv8", "Ultralytics", "OpenCV", "Python", "Computer Vision"],
    image: "/projects/skin-turgor-pinch.jpg",
    imageFit: "object-cover object-center",
    icon: <FaWater />,
    github: "", 
    live: ""
  },
  {
    id: 7,
    title: "Microbiology Bacteria Classification",
    description: "Implemented a YOLOv8 and TensorFlow AI system on Raspberry Pi 4 to detect and classify bacterial colonies on culture plates in real-time with alert notifications.",
    tech: ["TensorFlow", "YOLOv8", "Raspberry Pi 4", "OpenCV", "Edge AI"],
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80",
    icon: <FaFlask />,
    github: "", 
    live: ""
  },
  {
    id: 8,
    title: "Pharmacy Store Management System",
    description: "Developed an automated dual-camera verification system using YOLOv8 and PaddleOCR to detect medicine packaging and verify batch numbers, expiry dates, and labels.",
    tech: ["YOLOv8", "OpenCV", "PaddleOCR", "PyTorch", "PaddlePaddle", "TheFuzz"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    icon: <FaPills />,
    github: "", 
    live: ""
  },
  {
    id: 9,
    title: "Real-Time rPPG & Biomarker Monitoring",
    description: "Built a camera-based remote Photoplethysmography (rPPG) platform extracting HR, RR, HRV, and SQI from facial video in real-time with an interactive biomarker dashboard.",
    tech: ["Python", "OpenCV", "NumPy", "SciPy", "Open-rPPG", "MediaPipe", "Pandas", "Matplotlib"],
    image: "/projects/face-mesh.gif",
    imageFit: "object-contain bg-slate-950",
    icon: <FaWaveSquare />,
    github: "", 
    live: ""
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4 md:px-10 bg-[#0b0f19] text-white min-h-screen border-t border-slate-800/80 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-[400px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-4 py-1.5 rounded-full inline-block mb-3 shadow-sm">
            Featured Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">Work</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-sm md:text-base leading-relaxed">
            A showcase of AI, computer vision, signal processing, and healthcare data intelligence projects.
          </p>
        </div>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projectData.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-slate-900/75 hover:bg-slate-900/95 rounded-2xl overflow-hidden border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col backdrop-blur-sm"
            >
              {/* Top Accent Gradient Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

              {/* Project Real Image & Floating Badges */}
              <div className="relative w-full h-48 overflow-hidden bg-slate-950 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full ${project.imageFit || 'object-cover'} opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out`}
                  loading="lazy"
                />
                
                {/* Subtle Image Gradient Transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-black/25" />

                {/* Floating Project Number Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md text-cyan-400 text-xs font-mono font-semibold rounded-md border border-cyan-500/30 shadow-sm">
                  #{String(project.id).padStart(2, '0')}
                </span>

                {/* Floating Category Icon Badge */}
                <span className="absolute top-3 right-3 p-2 bg-slate-950/80 backdrop-blur-md text-cyan-400 text-xs rounded-md border border-slate-700/60 shadow-sm group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors">
                  {project.icon}
                </span>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title with exact same font-size and uniform height */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200 min-h-[3.25rem] flex items-center leading-snug mb-3">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Bottom Section: Tech Badges & Links */}
                <div className="mt-auto">
                  {/* Tech Stack Individual Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2.5 py-1 bg-cyan-950/30 hover:bg-cyan-900/40 text-cyan-300 text-xs font-medium rounded-md border border-cyan-800/40 hover:border-cyan-500/40 transition-colors duration-150"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links (GitHub & Live) if available */}
                  {(project.github || project.live) && (
                    <div className="flex space-x-4 pt-4 mt-4 border-t border-slate-800/80">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs font-medium"
                        >
                          <FaGithub className="text-sm" /> Code
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-xs font-medium"
                        >
                          <FaExternalLinkAlt className="text-xs" /> Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
