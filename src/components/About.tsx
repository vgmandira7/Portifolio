import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const About = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Principais (foco em Back-end para recrutadores)
  const mainSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "C",
    "Java",
    "TypeScript",
    
  ];

  // Todas as tecnologias (restante)
  const allSkills = [
    "Python",
    "PHP",
    "React Native",
    "HTML/CSS",
    "Bootstrap",
    "C#",
    "JavaScript",
  ];

  // Decide quais skills mostrar
  const displayedSkills = showAllSkills
    ? [...mainSkills, ...allSkills]
    : mainSkills;

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Apaixonado por tecnologia e sempre em busca de novos desafios
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Formação */}
            <div className="card-gradient p-8 rounded-2xl shadow-card border border-border/50">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">
                🎓 Formação Acadêmica
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">
                    Tecnólogo em Desenvolvimento de Software Multiplataforma
                  </h4>
                  <p className="text-muted-foreground">Fatec - Registro, SP</p>
                  <p className="text-sm text-accent">
                    3º Semestre • Em andamento • Previsão término 2027
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Técnico em Desenvolvimento de Sistemas
                  </h4>
                  <p className="text-muted-foreground">Etec - Registro, SP</p>
                  <p className="text-sm text-accent">
                    Concluído • 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Objetivos */}
            <div className="card-gradient p-8 rounded-2xl shadow-card border border-border/50">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">
                💡 Objetivos
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Estou construindo minha carreira como desenvolvedor com foco em Back-end,
                criando APIs, integrações com banco de dados e soluções eficientes.
                Este portfólio representa minha evolução prática e meu interesse em atuar
                profissionalmente no desenvolvimento de sistemas.
              </p>
            </div>
          </div>

          <div>
            {/* Tecnologias */}
            <div className="card-gradient p-8 rounded-2xl shadow-card border border-border/50">
              <h3 className="text-2xl font-semibold mb-2 text-gradient">
                🛠️ Tecnologias
              </h3>

              <p className="text-sm text-muted-foreground mb-6">
                Principais tecnologias com foco em desenvolvimento Back-end
              </p>

              <div className="flex flex-wrap gap-3 transition-all duration-500">
                {displayedSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-primary/10 hover:bg-primary/20 border-primary/30 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Botão Ver Mais / Ver Menos */}
              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 transition-all duration-300"
                  onClick={() => setShowAllSkills(!showAllSkills)}
                >
                  {showAllSkills ? "Ver menos tecnologias" : "Ver mais tecnologias"}
                </Button>
              </div>
            </div>

            {/* Estatísticas */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card className="card-gradient border-border/50 text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-gradient">4</div>
                  <p className="text-muted-foreground">Projetos</p>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/50 text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-gradient">4+</div>
                  <p className="text-muted-foreground">Anos de Estudo</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
