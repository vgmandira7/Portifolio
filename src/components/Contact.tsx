import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vg.mandira@gmail.com",
      link: "mailto:vg.mandira@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/vgmandira7",
      link: "https://github.com/vgmandira7"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/vgmandira",
      link: "https://linkedin.com/in/vgmandira"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Jacupiranga, SP",
      link: "https://share.google/KJhDt2NpEKb88bp6x"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto para discutir oportunidades, projetos ou apenas trocar uma ideia sobre tecnologia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="card-gradient p-8 rounded-2xl shadow-card border border-border/50">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Entre em Contato</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Estou disponível para oportunidades de estágio, projetos freelance ou 
                qualquer conversa sobre desenvolvimento de software. Vamos construir algo incrível juntos!
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`flex items-center gap-4 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300 group ${
                      item.link === '#' ? 'pointer-events-none' : 'hover:bg-primary/5'
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="card-gradient border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-gradient">Disponibilidade</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Disponível para oportunidades</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Aberto para projetos freelance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Interessado em estágios</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-gradient">Resposta Rápida</h3>
                <p className="text-muted-foreground mb-6">
                  Costumo responder emails e mensagens em até 24 horas. 
                  Para contato mais rápido, me encontre no LinkedIn!
                </p>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 glow-effect"
                  asChild
                >
                  <a href="mailto:vitor@email.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;