import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Primeiro Projeto",
      description: "Descrição do seu primeiro projeto no GitHub. Aqui você pode descrever as funcionalidades principais e tecnologias utilizadas.",
      technologies: ["React", "TypeScript", "CSS"],
      githubUrl: "https://github.com/vitorgabriel/projeto1",
      liveUrl: "https://projeto1.demo.com",
      image: "/placeholder.svg"
    },
    // Placeholder para projetos futuros
    {
      id: 2,
      title: "Próximo Projeto",
      description: "Este espaço está reservado para o seu próximo projeto incrível. Continue desenvolvendo!",
      technologies: ["Em breve"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/placeholder.svg",
      isPlaceholder: true
    },
    {
      id: 3,
      title: "Projeto Futuro",
      description: "Mais um espaço esperando por seus projetos futuros. O céu é o limite!",
      technologies: ["Em breve"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/placeholder.svg",
      isPlaceholder: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma coleção dos meus trabalhos mais recentes e projetos em desenvolvimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className={`card-gradient border-border/50 overflow-hidden group hover:shadow-glow transition-all duration-500 ${
                project.isPlaceholder ? 'opacity-60' : 'hover:-translate-y-2'
              }`}
            >
              <div className="aspect-video bg-muted/20 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {project.isPlaceholder ? (
                    <div className="text-muted-foreground text-sm">Em breve...</div>
                  ) : (
                    <div className="text-primary text-2xl font-bold">#{project.id}</div>
                  )}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  {!project.isPlaceholder && (
                    <Badge variant="secondary" className="bg-primary/10 border-primary/30">
                      Ativo
                    </Badge>
                  )}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-xs border-primary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary/10"
                    disabled={project.isPlaceholder}
                    asChild={!project.isPlaceholder}
                  >
                    {project.isPlaceholder ? (
                      <>
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </>
                    ) : (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    )}
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    disabled={project.isPlaceholder}
                    asChild={!project.isPlaceholder}
                  >
                    {project.isPlaceholder ? (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </>
                    ) : (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Mais projetos em desenvolvimento...
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/vitorgabriel" target="_blank" rel="noopener noreferrer">
              Ver todos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;