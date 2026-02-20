import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Projects = () => {
  const { toast } = useToast();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Engenharias",
      description:
        "Projeto web desenvolvido com foco em orientar estudantes na escolha profissional, reunindo informações sobre diferentes áreas da engenharia e as faculdades que oferecem esses cursos em uma interface simples e organizada. A aplicação foi apresentada na Feira de Profissões da ETEC de Registro em 2023, como um projeto inicial de aprendizagem voltado à prática de desenvolvimento web e organização de informações educacionais.",
      technologies: ["JavaScript", "HTML/CSS"],
      githubUrl: "https://github.com/vgmandira7/Engenharias",
      image: "/assets/engenharia.png",
      status: "Concluído",
      mockups: [
        "/assets/engenharia.png",
        "/assets/mockupEngenharia.png",
      ],
    },
    {
      id: 2,
      title: "Luna",
      description:
        "Aplicativo mobile educacional que está sendo desenvolvido para auxiliar crianças com TDAH no ambiente escolar, por meio da personalização de atividades e planos de aula com base no hiperfoco do aluno, tornando o aprendizado mais engajador, adaptado às necessidades individuais e com acompanhamento de desempenho por professores e responsáveis.",
      technologies: ["React Native", "Expo", "TypeScript", "Python", "MongoDB"],
      githubUrl: "https://github.com/vgmandira7/Luna",
      image: "/assets/luna.png",
      status: "Em desenvolvimento",
      mockups: [
        "/assets/mockupLuna.png",
        "/assets/mockupLuna2.png",
        "/assets/mockupLuna3.png",
        "/assets/mockupLuna4.png",
      ],
    },
    {
      id: 3,
      title: "FitVale",
      description:
        "Aplicativo mobile desenvolvido em equipe como Trabalho de Conclusão de Curso (TCC), voltado ao gerenciamento de academias, permitindo o controle de alunos, organização de aulas, montagem de treinos personalizados e comunicação com instrutores, oferecendo uma solução prática e completa para a administração e acompanhamento das atividades dentro do ambiente fitness.",
      technologies: ["React Native", "Expo", "PHP", "SQL"],
      githubUrl: "", // sem GitHub por enquanto
      image: "/assets/fitvale.png",
      status: "Concluído",
      mockups: [
        "/assets/mockupFitvale.png",
        "/assets/mockupFitvale2.png",
        "/assets/mockupFitvale3.png",
        "/assets/mockupFitvale4.png",
      ],
    },
    {
      id: 4,
      title: "Barbearia Mandira",
      description:
        "Sistema web de agendamento para barbearia, onde o barbeiro pode gerenciar cortes, horários e clientes, enquanto os usuários realizam agendamentos online.",
      technologies: ["React", "Vite", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/vgmandira7/BarbeariaMandira.git", // também sem GitHub público
      image: "/assets/barbearia.png",
      status: "Em desenvolvimento",
      mockups: [
        "/assets/mockupBarbearia.png",
        "/assets/mockupBarbearia2.png",
        "/assets/mockupBarbearia3.png",
        "/assets/mockupBarbearia4.png",
      ],
    },
  ];

  const getStatusClass = () => {
    return "bg-primary/10 text-white border border-primary/30 rounded-full px-3 py-1 text-sm";
  };

  const handleView = (project: any) => {
    if (!project.mockups || project.mockups.length === 0) {
      toast({
        title: "Mockups em breve",
        description: "As visualizações deste projeto serão adicionadas em breve.",
      });
      return;
    }
    setSelectedProject(project);
  };

  const handleGithubClick = (project: any) => {
    if (!project.githubUrl || project.githubUrl === "#") {
      toast({
        title: "GitHub indisponível",
        description: "Este projeto ainda não foi inserido no GitHub.",
      });
      return;
    }

    window.open(project.githubUrl, "_blank");
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma coleção dos meus principais projetos e experiências práticas em desenvolvimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="card-gradient border-border/50 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            >
              {/* Imagem */}
              <div className="aspect-video bg-muted/20 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <Badge variant="secondary" className={getStatusClass()}>
                    {project.status}
                  </Badge>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech: string, index: number) => (
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
                  {/* Botão GitHub com Toast */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary/10"
                    onClick={() => handleGithubClick(project)}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>

                  {/* Botão View (abre mockups) */}
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => handleView(project)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* MODAL DE MOCKUPS */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-background max-w-4xl w-full rounded-2xl p-6 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 hover:text-red-500 transition"
            >
              <X size={28} />
            </button>

            <h3 className="text-2xl font-bold mb-6 text-center">
              {selectedProject.title} - Mockups
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {selectedProject.mockups.map((img: string, index: number) => (
                <img
                  key={index}
                  src={img}
                  alt={`Mockup ${index + 1}`}
                  className="rounded-xl border border-border object-cover w-full"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
