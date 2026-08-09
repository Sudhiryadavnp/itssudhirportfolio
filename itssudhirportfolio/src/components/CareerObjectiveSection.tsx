import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Lightbulb, Users } from "lucide-react";

const objectives = [
  {
    icon: Target,
    title: "Challenging Environment",
    description: "Begin my career in a dynamic IT environment",
  },
  {
    icon: Lightbulb,
    title: "Apply Knowledge",
    description: "Utilize software development and system design skills",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Enhance technical and professional capabilities",
  },
  {
    icon: Users,
    title: "Team Contribution",
    description: "Collaborate through innovation and problem-solving",
  },
];

const CareerObjectiveSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-primary text-primary-foreground" ref={ref}>
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Career Objective
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            My Professional Goals
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-lg leading-relaxed text-primary-foreground/90">
            "To begin my career in a challenging IT environment where I can apply
            my knowledge of software development, networking, and system design to
            build effective technological solutions. I aim to continuously enhance
            my technical and professional skills while contributing to
            organizational growth through innovation, teamwork, and
            problem-solving."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((obj, index) => (
            <motion.div
              key={obj.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm"
            >
              <div className="w-14 h-14 mx-auto bg-accent rounded-xl flex items-center justify-center mb-4">
                <obj.icon className="text-accent-foreground" size={24} />
              </div>
              <h3 className="font-semibold mb-2">{obj.title}</h3>
              <p className="text-sm text-primary-foreground/70">
                {obj.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerObjectiveSection;
