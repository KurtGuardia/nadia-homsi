import { Card, CardContent } from '@/components/ui/card'
import { LeafIcon, HeartPulseIcon, BrainIcon, SunIcon } from 'lucide-react'

const methodologyData = [
  {
    icon: LeafIcon,
    title: "Bioneuroemoción",
    description: "Integración de emociones y biología",
  },
  {
    icon: HeartPulseIcon,
    title: "Psiconeuroinmunología",
    description: "Conexión mente-cuerpo-sistema inmune",
  },
  {
    icon: BrainIcon,
    title: "Reprogramación de creencias",
    description: "Transformación de patrones mentales",
  },
  {
    icon: SunIcon,
    title: "Terapias energéticas",
    description: "Equilibrio y sanación energética",
  },
];

const MethodologyCard = ( { icon: Icon, title, description } ) => (
  <Card className="bg-background border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <CardContent className="flex flex-col items-center p-6">
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-2xl text-center font-semibold text-secondary mb-2">{title}</h3>
      <p className="text-xl text-center text-[var(--text-dark)]">{description}</p>
    </CardContent>
  </Card>
);

export default function MethodologySection () {
  return (
    <section id="metodologia" className="container mx-auto py-16 md:py-24 lg:py-32">
      <h2 className="text-5xl font-bold text-center text-secondary mb-12 font-handwritten">Mi Metodología</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {methodologyData.map( ( data, index ) => (
          <MethodologyCard key={index} {...data} />
        ) )}
      </div>
    </section>
  )
}
