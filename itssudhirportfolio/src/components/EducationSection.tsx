import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const courseHighlights = [
  "Software Development",
  "Computer Networks",
  "Database Systems",
  "System Design",
  "Web Technologies",
  "IT Security",
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Academic Background
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Education Card */}
          <div className="relative bg-card rounded-2xl shadow-xl overflow-hidden">
            {/* Accent Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-accent to-teal-light" />

            <div className="p-8 md:p-12 pl-10 md:pl-16">
              {/* Header */}
              <div className="flex flex-wrap items-start gap-4 mb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <GraduationCap className="text-accent" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    BSc (Hons) Computer System Engineering
                  </h3>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={16} className="text-accent" />
                      ISMT College
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Calendar size={16} className="text-accent" />
                      Expected: May 16, 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-8 leading-relaxed">
                A comprehensive program that blends theoretical foundations with
                practical applications in computer systems, software engineering,
                and IT infrastructure. The curriculum emphasizes hands-on
                experience through real-world projects and industry-relevant
                technologies.
              </p>

              {/* Course Highlights */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="text-accent" size={20} />
                  <h4 className="font-semibold text-primary">Key Areas of Study</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {courseHighlights.map((course, index) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
