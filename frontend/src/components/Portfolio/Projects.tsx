import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

type Photo = {
  _id: string;
  title: string;
  description: string;
  url: string;
  projectId: string;
};

type ProjectMap = {
  [projectId: string]: Photo[];
};

const Projects = () => {
  const [projectPhotos, setProjectPhotos] = useState<ProjectMap>({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/photos").then((res) => {
      const grouped: ProjectMap = {};
      res.data.forEach((photo: Photo) => {
        if (!grouped[photo.projectId]) {
          grouped[photo.projectId] = [];
        }
        grouped[photo.projectId].push(photo);
      });
      setProjectPhotos(grouped);
    });
  }, []);

  const goToGallery = (projectId: string) => {
    navigate(`/portfolio/${projectId}`);
  };

  const sectionVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit={"exit"}
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariant}
      className="py-20 px-4 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold font-libre text-[#310e10] mb-4">
          Our Projects
        </h2>
        <p className="text-lg text-rose-900 font-light max-w-2xl mx-auto">
          Discover our portfolio of elegant designs and transformative spaces
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {Object.entries(projectPhotos).map(([projectId, photos], index) => (
          <motion.div
            key={projectId}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => goToGallery(projectId)}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={photos[0]?.url}
                  alt={photos[0]?.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* View Project Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-[#310e10] font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Project
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold font-libre text-[#310e10] group-hover:text-rose-600 transition-colors duration-300">
                  {photos[0]?.title}
                </h3>
                
                {/* Project Stats */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                    <span className="text-xs text-gray-500 font-medium">
                      {photos.length} {photos.length === 1 ? 'Image' : 'Images'}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Project #{projectId.slice(-4)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Empty State */}
      {Object.keys(projectPhotos).length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Projects Yet</h3>
          <p className="text-gray-500">Projects will appear here once they're added to the portfolio.</p>
        </div>
      )}
    </motion.div>
  );
};

export default Projects;
