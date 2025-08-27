import { AlertTriangle, Clock, BookOpen, Target } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Estudar sem direção",
      description: "Perder tempo com materiais desatualizados e métodos ineficazes"
    },
    {
      icon: Clock,
      title: "Falta de tempo",
      description: "Conciliar trabalho, família e estudos sem um cronograma otimizado"
    },
    {
      icon: BookOpen,
      title: "Excesso de conteúdo",
      description: "Não saber o que é realmente importante para sua prova"
    },
    {
      icon: Target,
      title: "Falta de foco",
      description: "Estudar tudo superficialmente ao invés de focar no essencial"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-in fade-in-0 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Você está cansado de estudar e <span className="text-destructive">não ver resultados?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sabemos como é frustrante investir tempo e energia nos estudos sem conquistar a aprovação. 
            Estes são os principais obstáculos que impedem sua aprovação:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center space-y-4 opacity-0 animate-in slide-in-from-bottom-4 duration-700" style={{animationDelay: `${index * 150}ms`}}>
              <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                <problem.icon className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              A boa notícia é que existe uma solução!
            </h3>
            <p className="text-lg text-muted-foreground">
              Nosso método foi desenvolvido por especialistas e já aprovou milhares de candidatos. 
              Você vai estudar menos e render muito mais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}