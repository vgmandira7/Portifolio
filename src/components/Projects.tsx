import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Projects = () => {
  const { toast } = useToast();

  const projects = [
    {
      id: 1,
      title: "Engenharias",
      description:
        "Projeto inicial de aprendizagem, apresentado na feira de profissões da Etec de Registro em 2023.",
      technologies: ["React", "JavaScript", "HTML/CSS"],
      githubUrl: "https://github.com/vgmandira7/Engenharias",
      liveUrl: "https://vgmandira7.github.io/Engenharias/",
      image: "/assets/engenharia.png",
      status: "Concluído",
    },
    {
      id: 2,
      title: "Luna",
      description:
        "Aplicativo mobile em desenvolvimento para auxiliar crianças com TDAH na escola. Construído com React Native e Expo.",
      technologies: ["React Native", "Expo", "TypeScript"],
      githubUrl: "https://github.com/vgmandira7/Luna",
      liveUrl: "#",
      image: "/assets/luna.png",
      status: "Em desenvolvimento",
    },
    {
      id: 3,
      title: "Projeto Futuro",
      description: "Esperando por seus projetos futuros. O céu é o limite!",
      technologies: ["Em breve"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/placeholder.svg",
      status: "Em breve",
      isPlaceholder: true,
    },
  ];

  // estilos padronizados para todos os status
  const getStatusClass = () => {
    return "bg-primary/10 text-white border border-primary/30 rounded-full px-3 py-1 text-sm";
  };

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
                project.isPlaceholder ? "opacity-60" : "hover:-translate-y-2"
              }`}
            >
              {/* Área da imagem */}
              <div className="aspect-video bg-muted/20 relative overflow-hidden">
                {project.isPlaceholder ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                    <div className="text-muted-foreground text-sm">Em breve...</div>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  {!project.isPlaceholder && (
                    <Badge variant="secondary" className={getStatusClass()}>
                      {project.status}
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
                  {/* Botão GitHub */}
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
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    )}
                  </Button>

                  {/* Botão Demo com toast */}
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => {
                      if (project.isPlaceholder || project.liveUrl === "#") {
                        toast({
                          title: "🚧 Em desenvolvimento",
                          description:
                            "Este projeto ainda não possui uma view disponível.",
                        });
                      } else {
                        window.open(project.liveUrl, "_blank");
                      }
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
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
            <a
              href="https://github.com/vgmandira7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver todos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
