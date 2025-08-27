import { Check, X, Zap, Crown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  const plans = [
    {
      name: "Básico",
      icon: Shield,
      price: "297",
      originalPrice: "597",
      duration: "12 meses de acesso",
      description: "Perfeito para quem está começando",
      features: [
        "Videoaulas completas",
        "Material em PDF",
        "Simulados básicos",
        "Cronograma de estudos",
        "Suporte por email"
      ],
      notIncluded: [
        "Mentoria individual",
        "Grupos exclusivos",
        "Aulas ao vivo"
      ],
      popular: false,
      buttonText: "COMEÇAR AGORA"
    },
    {
      name: "Completo",
      icon: Zap,
      price: "497",
      originalPrice: "997",
      duration: "Acesso vitalício",
      description: "Nossa opção mais procurada",
      features: [
        "Tudo do plano Básico",
        "Simulados ilimitados",
        "Questões comentadas",
        "App mobile",
        "Suporte prioritário",
        "Atualizações gratuitas",
        "Grupos de estudo"
      ],
      notIncluded: [
        "Mentoria individual"
      ],
      popular: true,
      buttonText: "MAIS POPULAR - 50% OFF"
    },
    {
      name: "Premium",
      icon: Crown,
      price: "897",
      originalPrice: "1797",
      duration: "Acesso vitalício + Mentoria",
      description: "Para quem quer aprovação garantida",
      features: [
        "Tudo do plano Completo",
        "Mentoria individual 1:1",
        "Aulas ao vivo semanais",
        "Correção personalizada",
        "Plano de estudos exclusivo",
        "Suporte via WhatsApp",
        "Garantia de aprovação*"
      ],
      notIncluded: [],
      popular: false,
      buttonText: "APROVAÇÃO GARANTIDA"
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-in fade-in-0 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Escolha o Plano Ideal para sua <span className="hero-text">Aprovação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Investimento que se paga no primeiro mês de salário como servidor público
          </p>
          
          {/* Urgency Banner */}
          <div className="bg-cta/10 border border-cta/30 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-cta font-semibold">
              ⏰ OFERTA ESPECIAL: 50% de desconto por tempo limitado!
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-soft border-2 transition-all duration-300 hover:shadow-strong opacity-0 animate-in slide-in-from-bottom-4 duration-700 ${plan.popular ? 'border-cta scale-105' : 'border-border'}`} style={{animationDelay: `${index * 200}ms`}}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-cta text-cta-foreground px-6 py-2 rounded-full font-semibold text-sm">
                    MAIS POPULAR
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${plan.popular ? 'bg-cta/10' : 'bg-primary/10'}`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-cta' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-sm text-muted-foreground line-through">
                      R$ {plan.originalPrice}
                    </span>
                    <span className="text-4xl font-bold text-foreground">
                      R$ {plan.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.duration}</p>
                  <div className="text-success font-semibold text-sm mt-1">
                    Economia de R$ {parseInt(plan.originalPrice) - parseInt(plan.price)}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 opacity-50">
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.popular ? "cta" : "default"} 
                  size="lg" 
                  className="w-full text-sm"
                >
                  {plan.buttonText}
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Garantia de 30 dias ou seu dinheiro de volta
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Guarantees */}
        <div className="text-center mt-16 space-y-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-6 h-6 text-success" />
              <span className="text-sm">Garantia de 30 dias</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-6 h-6 text-success" />
              <span className="text-sm">Acesso imediato</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Crown className="w-6 h-6 text-success" />
              <span className="text-sm">Suporte especializado</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            *Garantia de aprovação válida para o plano Premium com cumprimento integral do cronograma de estudos
          </p>
        </div>
      </div>
    </section>
  );
}