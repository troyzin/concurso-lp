import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function FAQSection() {
  const faqs = [
    {
      question: "Por quanto tempo terei acesso ao conteúdo?",
      answer: "No plano Básico, você tem 12 meses de acesso. Nos planos Completo e Premium, o acesso é vitalício, ou seja, para sempre! Mesmo quando houver atualizações no conteúdo, você continuará tendo acesso sem custo adicional."
    },
    {
      question: "E se eu não conseguir ser aprovado?",
      answer: "Oferecemos garantia de 30 dias para todos os planos. Se não ficar satisfeito, devolvemos 100% do seu dinheiro. No plano Premium, temos ainda a garantia de aprovação para alunos que seguirem integralmente nosso cronograma de estudos."
    },
    {
      question: "O conteúdo é atualizado regularmente?",
      answer: "Sim! Nossa equipe monitora constantemente as mudanças nas bancas e legislações. Todas as atualizações são incluídas automaticamente e você recebe notificação sempre que houver novo conteúdo disponível."
    },
    {
      question: "Posso estudar pelo celular?",
      answer: "Claro! Temos um aplicativo mobile completo disponível para Android e iOS. Você pode baixar as aulas para assistir offline, fazer simulados e acompanhar seu progresso de qualquer lugar."
    },
    {
      question: "Como funciona o suporte aos alunos?",
      answer: "No plano Básico, oferecemos suporte por email. No Completo, você tem suporte prioritário. No Premium, além do suporte prioritário, você tem acesso direto aos professores via WhatsApp e sessões de mentoria individual."
    },
    {
      question: "O método funciona para qualquer concurso?",
      answer: "Nosso método é eficaz para a maioria dos concursos públicos. Temos conteúdos específicos para diferentes áreas (tribunais, polícia, receita, etc.) e nossos professores especialistas adaptam as estratégias conforme o perfil de cada prova."
    },
    {
      question: "Posso parcelar o pagamento?",
      answer: "Sim! Oferecemos parcelamento em até 12x no cartão de crédito. Também aceitamos PIX, boleto bancário e outras formas de pagamento. O acesso é liberado imediatamente após a confirmação do pagamento."
    },
    {
      question: "Qual é a diferença entre os planos?",
      answer: "O Básico inclui o essencial para começar. O Completo adiciona recursos avançados como simulados ilimitados e grupos de estudo. O Premium inclui mentoria individual e garantia de aprovação - ideal para quem quer resultado garantido."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in"
             style={{ animation: 'fadeIn 0.7s ease-out forwards' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Dúvidas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas para que você possa tomar a melhor decisão para sua aprovação.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border px-6"
                style={{
                  animation: `slideUp 0.7s ease-out ${index * 100}ms forwards`,
                  opacity: 0
                }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão e ajudar você a escolher o melhor plano.
            </p>
            <Button variant="outline" size="lg">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}