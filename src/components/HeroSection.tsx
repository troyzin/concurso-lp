import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-success/10 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Passe no seu <span className="hero-text">Concurso Público</span>{" "}
                com Métodos Comprovados
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Acelere sua aprovação com nosso sistema exclusivo de estudos. 
                Mais de 15.000 alunos já conquistaram a tão sonhada estabilidade.
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-success border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-primary border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-cta border-2 border-white"></div>
                </div>
                <span className="text-muted-foreground">+15.000 aprovados</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-success font-semibold">4.9/5</span>
                <div className="flex text-success">
                  ★★★★★
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                QUERO PASSAR AGORA
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Ver Planos
              </Button>
            </div>

            {/* Urgency Banner */}
            <div className="bg-cta/10 border border-cta/30 rounded-lg p-4">
              <p className="text-sm text-cta font-medium">
                🔥 OFERTA LIMITADA: Desconto de 50% termina em 24h!
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative slide-up">
            <img
              src={heroImage}
              alt="Estudantes preparando-se para concursos públicos com sucesso"
              className="rounded-2xl shadow-strong w-full h-auto"
            />
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-soft p-4 border">
              <div className="text-center">
                <div className="text-2xl font-bold text-success">89%</div>
                <div className="text-xs text-muted-foreground">Taxa de Aprovação</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-soft p-4 border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6 meses</div>
                <div className="text-xs text-muted-foreground">Tempo Médio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}