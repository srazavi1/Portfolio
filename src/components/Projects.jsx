import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectData = [
  {
    id: 1,
    title: "BCG Bed-Based Health Monitoring",
    description: "Analyzed BCG & PPG signals to extract and validate Heart Rate (HR) and Respiratory Rate (RR) against reference data, with automated reporting.",
    tech: ["Python, Pandas, SciPy, Matplotlib, Plotly, Signal Processing."],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=BCG+Health+Monitoring",
    github: "", 
    live: ""
  },
  {
    id: 2,
    title: "Foot Pressure & Gait Analysis",
    description: " Analyzed foot-pressure sensor data to visualize pressure distribution and gait-related patterns across different foot regions.",
    tech: ["Python, Pandas, NumPy, Matplotlib, Plotly"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=Foot+Pressure+Analysis",
    github: "", 
    live: ""
  },
  {
    id: 3,
    title: "PPG Data Analysis & Glucose Prediction",
    description: "Applied Linear Regression and statistical analysis on PPG data for patient-wise analysis and glucose-level estimation.",
    tech: ["Python, Pandas, Scikit-learn, Matplotlib, Linear Regression"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=PPG+Data+Analysis",
    github: "", 
    live: ""
  },
  {
    id: 4,
    title: "Age & Gender Prediction Using ML",
    description: "Developed a camera-based system using YOLOv8 to detect and predict age and gender from live camera input.",
    tech: ["Python, YOLOv8, PyTorch, OpenCV, Google Colab"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=Age+Gender+Prediction",
    github: "", 
    live: ""
  },
  {
    id: 5,
    title: "GCS Measurement – Foot Sole Detection",
    description: "Built a real-time edge-AI foot-sole detection and positioning system optimized for Raspberry Pi 4.",
    tech: ["YOLOv8-Nano, ONNX, OpenCV, Raspberry Pi 4"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=GCS+Foot+Sole+Detection",
    github: "", 
    live: ""
  },
  {
    id: 6,
    title: "Skin Turgor – Body Water Retention System",
    description: "Developed an AI-based Skin Turgor analysis system using computer vision to measure skin recovery time and assess hydration-related changes.",
    tech: ["YOLOv8, Ultralytics, OpenCV, Python"],
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
    tech: ["YOLOv8, OpenCV, PaddleOCR, PyTorch, PaddlePaddle, TheFuzz"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=Pharmacy+Management",
    github: "", 
    live: ""
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-10 bg-gray-800 text-white min-h-screen border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-blue-500">Work</span>
        </h2>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 shadow-xl flex flex-col"
            >
              {/* Project Image */}
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-100 leading-tight">{project.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow text-sm md:text-base">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-900/30 text-blue-400 text-xs font-semibold rounded-full border border-blue-800/50 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links (GitHub & Live) */}
                <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-800">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
                      <FaGithub className="text-lg" /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors text-sm font-medium">
                      <FaExternalLinkAlt className="text-base" /> Live Demo
                    </a>
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