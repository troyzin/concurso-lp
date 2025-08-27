import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, TrendingUp } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Urgency Timer */}
          <div className="bg-cta/20 border border-cta/30 rounded-lg p-6 max-w-2xl mx-auto opacity-0 animate-in fade-in-0 duration-700">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Clock className="w-6 h-6 text-cta" />
              <span className="text-cta font-bold text-lg">OFERTA TERMINA EM:</span>
            </div>
            <div className="flex justify-center space-x-4 text-2xl font-bold">
              <div className="text-center">
                <div className="bg-white/20 rounded-lg px-3 py-2">23</div>
                <div className="text-xs mt-1">HORAS</div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg px-3 py-2">45</div>
                <div className="text-xs mt-1">MIN</div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg px-3 py-2">32</div>
                <div className="text-xs mt-1">SEG</div>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 opacity-0 animate-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Sua Aprovação Começa <span className="text-cta">AGORA</span>
            </h2>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Não perca mais tempo estudando da forma errada. Junte-se aos milhares de aprovados que escolheram o método certo.
            </p>
          </div>

          {/* Benefits Reminder */}
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
              <span>Método comprovado</span>
            </div>
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-6 h-6 text-success flex-shrink-0" />
              <span>89% de aprovação</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6 text-success flex-shrink-0" />
              <span>Resultados em 6 meses</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="text-xl px-12 py-8 shadow-cta">
                GARANTIR MINHA APROVAÇÃO - 50% OFF
              </Button>
            </div>
            
            <div className="space-y-2 text-sm opacity-90">
              <p>✓ Acesso imediato após o pagamento</p>
              <p>✓ Garantia de 30 dias ou seu dinheiro de volta</p>
              <p>✓ Suporte especializado incluído</p>
            </div>
          </div>

          {/* Final Social Proof */}
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-cta">15.000+</div>
                <div className="text-sm opacity-80">Aprovados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cta">89%</div>
                <div className="text-sm opacity-80">Taxa de Sucesso</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cta">4.9/5</div>
                <div className="text-sm opacity-80">Avaliação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cta">5 anos</div>
                <div className="text-sm opacity-80">Experiência</div>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-lg opacity-90 max-w-2xl mx-auto">
            <p className="font-medium">
              "O tempo que você está perdendo é o tempo que seus concorrentes estão usando para se preparar melhor. Não deixe para amanhã a decisão que pode mudar sua vida hoje."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}