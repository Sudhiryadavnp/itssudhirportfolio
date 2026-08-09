import { ArrowRight, Linkedin, Download, Sparkles, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-background via-background to-secondary/50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-accent/30 to-teal-light/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-navy-light/20 to-accent/10 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Floating Shapes */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-[15%] w-12 h-12 border-2 border-accent/30 rounded-lg"
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [-10, 10, -10] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[20%] w-8 h-8 bg-accent/20 rounded-full"
        />
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [45, 90, 45] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-[10%] w-6 h-6 border-2 border-teal/40 rotate-45"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[15%] w-4 h-4 bg-orange/40 rounded-full"
        />
      </div>

      <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/10 to-teal/10 backdrop-blur-sm border border-accent/20 rounded-full text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-foreground">Open to opportunities</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
                <span className="text-foreground">Hello, I'm</span>
                <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-accent via-teal-light to-accent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] bg-clip-text text-transparent">
                    Sudhir Yadav
                  </span>
                </span>
              </h1>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-accent to-teal-light rounded-full" />
                <span className="text-xl md:text-2xl font-medium text-muted-foreground">
                  CSE Graduate & Developer
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              Passionate about building practical, technology-driven solutions
              through <span className="text-foreground font-medium">software development</span>, 
              {" "}<span className="text-foreground font-medium">networking</span>, and 
              {" "}<span className="text-foreground font-medium">system design</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-teal-light text-accent-foreground font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_hsl(var(--accent)/0.5)] hover:scale-105"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="https://i.postimg.cc/L8T8pRJk/Sudhir-Yadav-Fresher-Resume.png"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group inline-flex items-center gap-2 px-8 py-4 bg-card border-2 border-border text-foreground font-semibold rounded-xl transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:scale-105"
              >
                <Download size={18} className="group-hover:animate-bounce" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links & Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Connect:</span>
                <div className="flex gap-2">
                  {[
                    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sudhirkydv/" },
                    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/SuDhir.2k61" },
                    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/____su_dhir____" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="group relative p-3 bg-card border border-border rounded-xl hover:border-accent hover:bg-accent/5 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="hidden md:block h-8 w-px bg-border" />
              
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="text-2xl font-bold text-foreground">3+</span>
                  <span className="text-muted-foreground ml-1">Projects</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-foreground">5+</span>
                  <span className="text-muted-foreground ml-1">Technologies</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Orbiting Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]"
                style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full shadow-lg shadow-accent/50" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-teal-light rounded-full shadow-lg shadow-teal/50" />
              </motion.div>

              {/* Gradient Ring */}
              <div className="absolute inset-0 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-accent via-teal-light to-accent p-1" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-full h-full rounded-full bg-background" />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 w-[260px] h-[260px] md:w-[330px] md:h-[330px] lg:w-[380px] lg:h-[380px] rounded-full bg-gradient-to-br from-accent/20 to-teal/20 blur-2xl" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />

              {/* Main Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Sudhir Yadav - Computer System Engineering Graduate"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -right-4 md:-right-8 top-1/4 z-20"
              >
                <div className="bg-card/80 backdrop-blur-xl border border-border shadow-2xl rounded-2xl px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-teal-light rounded-xl flex items-center justify-center">
                      <span className="text-accent-foreground font-bold text-sm">🎓</span>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">2026</div>
                      <div className="text-xs text-muted-foreground">Expected Grad</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -left-4 md:-left-8 bottom-1/4 z-20"
              >
                <div className="bg-card/80 backdrop-blur-xl border border-border shadow-2xl rounded-2xl px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange to-orange-light rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm">💻</span>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">ISMT</div>
                      <div className="text-xs text-muted-foreground">College</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
