import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Aprovada - Tribunal de Justiça",
      content: "Depois de 3 tentativas frustradas, encontrei este curso e finalmente consegui! O cronograma personalizado foi fundamental para organizar meus estudos com 2 filhos pequenos.",
      rating: 5,
      months: "4 meses"
    },
    {
      name: "João Santos",
      role: "Aprovado - Receita Federal",
      content: "O que mais me impressionou foi a qualidade do material e o suporte dos professores. Todas as minhas dúvidas foram esclarecidas rapidamente. Recomendo 100%!",
      rating: 5,
      months: "6 meses"
    },
    {
      name: "Ana Costa",
      role: "Aprovada - Polícia Federal",
      content: "Estudei por 2 anos sozinha sem sucesso. Com o método deles, em 5 meses já estava aprovada! O investimento se pagou no primeiro mês de salário.",
      rating: 5,
      months: "5 meses"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Veja o que nossos <span className="text-success">alunos aprovados</span> estão dizendo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas conquistando a estabilidade dos concursos públicos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-soft border slide-up" style={{animationDelay: `${index * 200}ms`}}>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-cta fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-4 border-t">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-success font-medium">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Aprovado em {testimonial.months}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">15.000+</div>
            <div className="text-sm text-muted-foreground">Alunos Aprovados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success">89%</div>
            <div className="text-sm text-muted-foreground">Taxa de Aprovação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cta">4.9/5</div>
            <div className="text-sm text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">5 anos</div>
            <div className="text-sm text-muted-foreground">No Mercado</div>
          </div>
        </div>
      </div>
    </section>
  );
}