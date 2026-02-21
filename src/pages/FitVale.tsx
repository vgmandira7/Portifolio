import { useState } from "react";
import { Star, Dumbbell, ChevronRight, ArrowLeft, Users, MessageSquare, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

const instructors = [
  {
    name: "Carlos Silva",
    specialty: "Musculação & Hipertrofia",
    rating: 4.9,
    avatar: "CS",
    available: true,
  },
  {
    name: "Ana Beatriz",
    specialty: "Funcional & HIIT",
    rating: 4.8,
    avatar: "AB",
    available: true,
  },
  {
    name: "Rafael Costa",
    specialty: "CrossFit & Força",
    rating: 4.7,
    avatar: "RC",
    available: false,
  },
  {
    name: "Juliana Mendes",
    specialty: "Yoga & Pilates",
    rating: 5.0,
    avatar: "JM",
    available: true,
  },
];

const feedbacks = [
  {
    name: "Lucas Pereira",
    text: "Melhor academia da região! Os instrutores são incríveis e o app facilita demais.",
    rating: 5,
    avatar: "LP",
  },
  {
    name: "Mariana Santos",
    text: "Consegui resultados em 3 meses que não consegui em anos. Treinos personalizados são top!",
    rating: 5,
    avatar: "MS",
  },
  {
    name: "Pedro Oliveira",
    text: "O app é muito prático, consigo acompanhar minha evolução toda semana.",
    rating: 4,
    avatar: "PO",
  },
];

const workouts = [
  {
    name: "Treino A - Peito & Tríceps",
    exercises: 8,
    duration: "45 min",
    level: "Intermediário",
    icon: "💪",
  },
  {
    name: "Treino B - Costas & Bíceps",
    exercises: 7,
    duration: "50 min",
    level: "Intermediário",
    icon: "🏋️",
  },
  {
    name: "Treino C - Pernas & Glúteos",
    exercises: 9,
    duration: "55 min",
    level: "Avançado",
    icon: "🦵",
  },
  {
    name: "HIIT - Queima Total",
    exercises: 12,
    duration: "30 min",
    level: "Iniciante",
    icon: "🔥",
  },
  {
    name: "Funcional Completo",
    exercises: 10,
    duration: "40 min",
    level: "Iniciante",
    icon: "⚡",
  },
];

const FitVale = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#18191E] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#18191E]/95 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Portfólio</span>
          </button>
          <h1 className="text-xl font-bold">
            Fit<span className="text-[#6A11F5]">Vale</span>
          </h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-4 pt-12 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#6A11F5]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#6A11F5]/10 rounded-full blur-[80px]" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-xl">
            <p className="text-[#6A11F5] font-semibold text-sm mb-2 tracking-wide uppercase">
              Bem-vindo ao FitVale
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Transforme seu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A11F5] to-[#9B59FF]">
                corpo
              </span>{" "}
              e sua{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B59FF] to-[#6A11F5]">
                mente
              </span>
            </h2>
            <p className="text-white/50 text-lg mb-8">
              Treinos personalizados, instrutores qualificados e acompanhamento completo na palma da sua mão.
            </p>
            <Button className="bg-[#6A11F5] hover:bg-[#5A0ED0] text-white px-8 py-6 text-base rounded-xl shadow-[0_0_30px_rgba(106,17,245,0.4)] hover:shadow-[0_0_40px_rgba(106,17,245,0.6)] transition-all duration-300">
              Começar agora
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 pb-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Users, label: "Alunos", value: "500+" },
              { icon: Trophy, label: "Treinos", value: "1.2k" },
              { icon: Star, label: "Avaliação", value: "4.9" },
            ].map((stat) => (
              <Card
                key={stat.label}
                className="bg-white/5 border-white/5 text-center"
              >
                <CardContent className="p-4">
                  <stat.icon className="w-5 h-5 text-[#6A11F5] mx-auto mb-2" />
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/40">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instrutores */}
      <section className="px-4 pb-16">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Instrutores</h3>
              <p className="text-white/40 text-sm">Disponíveis para você</p>
            </div>
            <Button variant="ghost" className="text-[#6A11F5] hover:text-[#9B59FF] hover:bg-[#6A11F5]/10 text-sm">
              Ver todos <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {instructors.map((instructor) => (
              <Card
                key={instructor.name}
                className="bg-white/5 border-white/5 hover:border-[#6A11F5]/30 transition-all duration-300 group cursor-pointer hover:bg-white/[0.07]"
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="h-12 w-12 border-2 border-[#6A11F5]/30">
                      <AvatarFallback className="bg-[#6A11F5]/20 text-[#6A11F5] font-semibold text-sm">
                        {instructor.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-white text-sm">
                        {instructor.name}
                      </p>
                      <p className="text-white/40 text-xs">
                        {instructor.specialty}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#6A11F5] text-[#6A11F5]" />
                      <span className="text-white/70 text-xs font-medium">
                        {instructor.rating}
                      </span>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        instructor.available
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-white/5 text-white/30"
                      }`}
                    >
                      {instructor.available ? "Disponível" : "Ocupado"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treinos Pré-montados */}
      <section className="px-4 pb-16">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Treinos</h3>
              <p className="text-white/40 text-sm">Pré-montados para você</p>
            </div>
            <Button variant="ghost" className="text-[#6A11F5] hover:text-[#9B59FF] hover:bg-[#6A11F5]/10 text-sm">
              Ver todos <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="space-y-3">
            {workouts.map((workout) => (
              <Card
                key={workout.name}
                className="bg-white/5 border-white/5 hover:border-[#6A11F5]/30 transition-all duration-300 cursor-pointer hover:bg-white/[0.07] group"
              >
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#6A11F5]/10 flex items-center justify-center text-2xl shrink-0">
                    {workout.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-sm">
                      {workout.name}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-white/40 text-xs">
                        {workout.exercises} exercícios
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="text-white/40 text-xs">
                        {workout.duration}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="text-[#6A11F5]/70 text-xs font-medium">
                        {workout.level}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-[#6A11F5] transition-colors shrink-0" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feedbacks */}
      <section className="px-4 pb-16">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Feedbacks</h3>
              <p className="text-white/40 text-sm">O que dizem nossos alunos</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {feedbacks.map((feedback) => (
              <Card
                key={feedback.name}
                className="bg-white/5 border-white/5"
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < feedback.rating
                            ? "fill-[#6A11F5] text-[#6A11F5]"
                            : "text-white/10"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    "{feedback.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-[#6A11F5]/20 text-[#6A11F5] text-xs font-semibold">
                        {feedback.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-white/80 text-sm font-medium">
                      {feedback.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-20">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-[#6A11F5]/20 to-[#6A11F5]/5 border-[#6A11F5]/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#6A11F5]/10 rounded-full blur-[60px]" />
            <CardContent className="p-8 text-center relative z-10">
              <Dumbbell className="w-10 h-10 text-[#6A11F5] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Pronto para começar?
              </h3>
              <p className="text-white/50 mb-6 max-w-md mx-auto">
                Junte-se a mais de 500 alunos e transforme sua rotina de treinos.
              </p>
              <Button className="bg-[#6A11F5] hover:bg-[#5A0ED0] text-white px-8 py-6 text-base rounded-xl shadow-[0_0_30px_rgba(106,17,245,0.4)] hover:shadow-[0_0_40px_rgba(106,17,245,0.6)] transition-all duration-300">
                Matricule-se agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FitVale;
