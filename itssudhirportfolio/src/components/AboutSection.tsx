import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Network, Server, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Software Development",
    description: "Building robust applications using modern technologies",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Understanding of network protocols and infrastructure",
  },
  {
    icon: Server,
    title: "IT Systems",
    description: "Experience with system design and administration",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analytical approach to real-world challenges",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Designing Solutions, Not Just Code
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am a dedicated Computer System Engineering graduate from{" "}
              <span className="text-primary font-medium">ISMT College</span>,
              with a strong foundation in software development, networking, and
              IT systems.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My academic journey has equipped me with both theoretical knowledge
              and practical skills to tackle real-world computing challenges. I
              believe in creating technology-driven solutions that make a
              meaningful impact.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I am passionate about continuous learning and staying updated with
              the latest industry trends. My goal is to contribute to innovative
              projects while growing as a professional in the IT field.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-xl shadow-md">
                <div className="text-2xl font-bold text-accent">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-md">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-md">
                <div className="text-2xl font-bold text-accent">2026</div>
                <div className="text-sm text-muted-foreground">Graduate</div>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="p-6 bg-card rounded-xl shadow-md card-hover"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
