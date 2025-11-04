const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground animate-fade-in">
            About Me
          </h2>
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 animate-slide-in">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A results-driven DevOps Engineer with a 1.8-year track record of optimizing project outcomes through cost-effective solutions and streamlined workflows. 
              I am skilled in leveraging Docker, Jenkins, Kubernetes, and cloud technologies to automate processes and enhance efficiency, with deep expertise in Python 
              and Bash scripting for robust system management. I am passionate about building high-availability systems and solving complex infrastructure challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
