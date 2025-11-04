import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    name: "Percona XtraDB Cluster Setup",
    brief: "High-availability MySQL solution eliminating single point of failure for 550 applications",
    problem: "A single MySQL server was a point of failure for 550 applications.",
    solution: "Implemented a high-availability Percona XtraDB Cluster with HAProxy load balancing and a dual VIP setup for read/write separation.",
    outcomes: "Increased uptime to 99.95%, improved performance by 40%, and eliminated the single point of failure.",
    technologies: ["Percona XtraDB Cluster", "HAProxy", "PMM", "MySQL", "Linux"]
  },
  {
    id: 2,
    name: "K-Batch-Ops",
    brief: "On-demand containerized execution system with live monitoring and automated resource management",
    problem: "Manual script execution led to resource conflicts and no live monitoring.",
    solution: "Built an on-demand, containerized execution system using Kubernetes and a Flask API. It dynamically creates pods with VNC for live viewing and cleans up resources automatically.",
    outcomes: "Reduced environment setup time by 90%, eliminated manual work, and enabled parallel, isolated job execution.",
    technologies: ["Kubernetes", "Docker", "Flask", "Gunicorn", "VNC", "Java", "MySQL"]
  },
  {
    id: 3,
    name: "Netraa LH Implementation for NSDL",
    brief: "24/7 automated monitoring infrastructure with full-stack deployment pipeline",
    problem: "The client lacked an integrated, 24/7 automated monitoring system.",
    solution: "Deployed a full-stack monitoring infrastructure using 13 Docker microservices, a dedicated MySQL database, and a Jenkins CI/CD pipeline with 35 jobs for continuous execution.",
    outcomes: "Achieved 100% automated, continuous 24/7 monitoring, eliminating all manual effort and increasing reliability by 95%.",
    technologies: ["Docker", "Jenkins", "MySQL", "VNC Server", "LightDM", "Linux"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">{project.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.brief}</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full border-accent hover:bg-accent hover:text-accent-foreground">
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-card border-border max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-foreground">{project.name}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 text-muted-foreground">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Problem</h4>
                        <p>{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Solution</h4>
                        <p>{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Key Outcomes</h4>
                        <p>{project.outcomes}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-primary text-primary-foreground">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
