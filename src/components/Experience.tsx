const experiences = [
  {
    id: 1,
    title: "DevOps Engineer",
    company: "Apmosys Technologies Pvt Ltd.",
    period: "Jan 2024 - Present",
    achievements: [
      "Implemented cost-effective solutions using Distroless Docker images and AWS optimizations, reducing project expenses by 20%",
      "Streamlined DevOps workflows with Jenkins, Kubernetes, and Ansible, enhancing overall efficiency by 25%"
    ]
  },
  {
    id: 2,
    title: "Software Engineer L1 Intern",
    company: "Akhrabhi Softlabs",
    period: "July 2024 - Dec 2024",
    achievements: [
      "Reduced deployment times by 30% through efficient use of Proxmox virtualization and optimized server configurations",
      "Improved network security and project accuracy by 15% by spearheading the adoption of pfSense and Sophos firewall solutions"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 animate-fade-in ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full transform md:-translate-x-1/2 ring-4 ring-secondary"></div>
                
                {/* Content card */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors duration-300">
                    <h3 className="text-2xl font-semibold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-accent font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                    <ul className={`space-y-2 text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`text-accent mt-1 ${index % 2 === 0 ? 'md:order-2' : ''}`}>•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
