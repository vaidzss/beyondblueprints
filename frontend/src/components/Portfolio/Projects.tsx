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
      className="mt-12 h-full mb-4"
    >
      <h2 className="text-5xl font-bold text-center font-libre text-[#310e10]">
        Projects
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-8 mt-8">
        {Object.entries(projectPhotos).map(([projectId, photos]) => (
          <div
            key={projectId}
            onClick={() => goToGallery(projectId)}
            className="cursor-pointer bg-white rounded-md p-4 shadow-md hover:shadow-xl transition-all"
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
    </motion.div>
  );
};

export default Projects;
