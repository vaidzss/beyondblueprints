import { useEffect, useState } from "react";
import axios from "axios";
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
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    axios.get("http://192.168.31.191:5000/api/photos").then((res) => {
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

  const openDialog = (projectId: string) => {
    setActiveProject(projectId);
  };

  const closeDialog = () => {
    setActiveProject(null);
  };
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeProject]);

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
      className="mt-12 h-full mb-4"
    >
      <h2 className="text-5xl font-bold text-center font-libre text-[#310e10]">
        Projects
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-8 mt-8">
        {Object.entries(projectPhotos).map(([projectId, photos]) => (
          <div
            key={projectId}
            onClick={() => openDialog(projectId)}
            className="cursor-pointer bg-white rounded-md p-4 shadow-md"
          >
            <img
              src={photos[0]?.url}
              alt={photos[0]?.title}
              className="rounded shadow-md max-h-fit object-cover h-56 w-full"
            />
            <p className="mt-2 font-semibold font-playfair">
              {photos[0]?.title}
            </p>
          </div>
        ))}
      </div>

      {/* Dialog Box */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[999]">
          <div className="bg-white rounded-lg w-full h-screen relative flex flex-col overflow-hidden">
            {/* Header (Sticky) */}
            <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold font-playfair text-[#310e10]">
                {projectPhotos[activeProject]?.[0]?.title}
              </h3>
              <button
                onClick={closeDialog}
                className="text-2xl font-bold text-gray-600 hover:text-black"
              >
                ✕
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1 px-4 pb-6">
              <div className="space-y-4">
                {projectPhotos[activeProject].map((photo) => (
                  <img
                    key={photo._id}
                    src={photo.url}
                    alt={photo.description}
                    className="rounded shadow-sm"
                  />
                ))}
                <p className="font-poppins text-[#6f4d38] text-center">
                  &ldquo;{projectPhotos[activeProject]?.[0]?.description}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Projects;
