import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java",
    "HTML/CSS", "Git/GitHub", "SQL", "MongoDB", "API REST"
  ];

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
            <div className="card-gradient p-8 rounded-2xl shadow-card border border-border/50">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">🎓 Formação Acadêmica</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Desenvolvimento de Software Multiplataforma</h4>
                  <p className="text-muted-foreground">Fatecc - Registro, SP</p>
                  <p className="text-sm text-accent">2º Semestre • Em andamento</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Técnico em Desenvolvimento de Sistemas</h4>
                  <p className="text-muted-foreground">Etec - Registro, SP</p>
                  <p className="text-sm text-accent">Concluído</p>
                </div>
              </div>
            </div>

            <div className="card-gradient p-8 rounded-2xl shadow-card border border-border/50">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">💡 Objetivos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estou construindo minha carreira como desenvolvedor, focando em criar soluções 
                inovadoras e eficientes. Este portfólio é o início da minha jornada para 
                compartilhar meus projetos e conectar com empresas que buscam talentos dedicados.
              </p>
            </div>
          </div>

          <div>
            <div className="card-gradient p-8 rounded-2xl shadow-card border border-border/50">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">🛠️ Tecnologias</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm bg-primary/10 hover:bg-primary/20 border-primary/30 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card className="card-gradient border-border/50 text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-gradient">1+</div>
                  <p className="text-muted-foreground">Projetos</p>
                </CardContent>
              </Card>
              <Card className="card-gradient border-border/50 text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-gradient">2+</div>
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