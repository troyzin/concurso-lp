import { CheckCircle, Users, Trophy, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SolutionSection() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Conteúdo Direcionado",
      description: "Apenas o que realmente cai na sua prova, sem perda de tempo"
    },
    {
      icon: Clock,
      title: "Cronograma Personalizado",
      description: "Organize seus estudos de acordo com seu tempo disponível"
    },
    {
      icon: Users,
      title: "Professores Especialistas",
      description: "Aprenda com quem já aprovou milhares de candidatos"
    },
    {
      icon: Trophy,
      title: "Método Comprovado",
      description: "89% de aprovação entre nossos alunos dedicados"
    }
  ];

  const features = [
    "Videoaulas atualizadas com as últimas mudanças",
    "Simulados ilimitados com questões inéditas",
    "Material em PDF para download",
    "Cronograma de estudos personalizado",
    "Suporte direto com os professores",
    "Acesso vitalício ao conteúdo",
    "App mobile para estudar em qualquer lugar",
    "Grupos de estudo exclusivos"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-success/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O Sistema que vai <span className="hero-text">Revolucionar</span> seus Estudos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvemos um método exclusivo que combina as melhores técnicas de estudo 
            com tecnologia de ponta para maximizar seus resultados.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4 slide-up" style={{animationDelay: `${index * 150}ms`}}>
              <div className="w-16 h-16 mx-auto bg-success/10 rounded-full flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in">
            <h3 className="text-2xl font-bold mb-6">O que você vai receber:</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 slide-up">
            <div className="bg-white rounded-2xl p-8 shadow-strong border">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-primary">15.000+</div>
                <div className="text-muted-foreground">Alunos Aprovados</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-strong border">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-success">89%</div>
                <div className="text-muted-foreground">Taxa de Aprovação</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-strong border">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-cta">6 meses</div>
                <div className="text-muted-foreground">Tempo Médio</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="cta" size="lg" className="text-xl px-12 py-8">
            COMEÇAR AGORA - 50% OFF
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Garantia de 30 dias ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </section>
  );
}