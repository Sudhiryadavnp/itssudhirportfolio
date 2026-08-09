import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Wrench,
  Layers,
  Shield,
  Database,
  Users,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "HTML", "CSS", "SQL"],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: ["MySQL", "NetBeans", "Git", "Linux (Kali)", "Apache/Nginx", "VMware"],
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Layers,
    title: "Software Development",
    skills: ["OOP", "Event-Driven Programming", "Web Development", "System Design"],
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Shield,
    title: "Networking & Security",
    skills: ["Network Configuration", "IP Addressing", "Network Security", "Firewall & VPN", "Network Monitoring"],
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["Database Design", "ER Diagrams", "SQL Queries", "Data Management"],
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Users,
    title: "Professional Strengths",
    skills: ["Problem-solving", "Analytical Thinking", "Fast Learner", "Teamwork", "Project Experience"],
    color: "bg-teal-500/10 text-teal-600",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Technical Proficiencies
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive skill set developed through academic studies and
            hands-on project experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-md card-hover"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}
                >
                  <category.icon size={24} />
                </div>
                <h3 className="font-semibold text-primary">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 + skillIndex * 0.05 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
