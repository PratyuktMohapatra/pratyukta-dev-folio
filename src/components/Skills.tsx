import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Cloud & Virtualization",
    skills: ["AWS", "Azure", "Proxmox", "CloudStack", "VirtualBox", "VMware"]
  },
  {
    title: "CI/CD & Automation",
    skills: ["Jenkins", "Docker", "Kubernetes", "Ansible", "Git", "GitLab", "GitHub"]
  },
  {
    title: "Languages & Scripting",
    skills: ["Python", "Java", "Bash"]
  },
  {
    title: "Databases & Tools",
    skills: ["MySQL Server", "Percona XtraDB Cluster", "Trivy", "Harbor"]
  },
  {
    title: "Systems & Security",
    skills: ["Linux", "Sophos", "x11vnc", "LightDM"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Technologies & Skills
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="bg-card border border-border rounded-xl p-6 animate-slide-in hover:border-accent transition-colors duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
