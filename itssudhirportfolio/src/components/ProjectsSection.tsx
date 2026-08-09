import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    description:
      "A comprehensive Java-based system to manage student records, attendance tracking, and academic results. Features include CRUD operations, search functionality, and report generation.",
    tech: ["Java", "MySQL", "NetBeans"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "FitLife Android Application",
    description:
      "A mobile fitness application designed to help users track workouts, exercises, and health activities. Implements MVVM architecture for clean code organization and offline data persistence.",
    tech: ["Android Studio", "Java", "XML", "SQLite/Room", "MVVM"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Job Portal System",
    description:
      "A full-featured web platform connecting job seekers with employers. Job seekers can search and apply for positions while employers can post vacancies and manage applications.",
    tech: ["C#", ".NET", "SQL Database", "Web Technologies"],
    gradient: "from-purple-500 to-pink-500",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real-world projects demonstrating practical application of software
            development skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              {/* Project Header with Gradient */}
              <div
                className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Folder className="text-white" size={24} />
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-xs font-medium rounded-full text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
