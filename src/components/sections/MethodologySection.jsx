import { Card, CardContent } from '@/components/ui/card'
import { LeafIcon, HeartPulseIcon, BrainIcon, SunIcon } from 'lucide-react'

export default function MethodologySection () {
  return (
    <section id="metodologia" className="container mx-auto py-16 md:py-24 lg:py-32">
      <h2 className="text-5xl font-bold text-center text-[#4A4063] mb-12 font-handwritten">Mi Metodología</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="bg-[#F5F1E8] border-[#7C9082] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardContent className="flex flex-col items-center p-6">
            <LeafIcon className="w-12 h-12 text-[#7C9082] mb-4" />
            <h3 className="text-2xl text-center font-semibold text-[#4A4063] mb-2">Bioneuroemoción</h3>
            <p className="text-xl text-center text-[#2D2D2D]">Integración de emociones y biología</p>
          </CardContent>
        </Card>
        <Card className="bg-[#F5F1E8] border-[#7C9082] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardContent className="flex flex-col items-center p-6">
            <HeartPulseIcon className="w-12 h-12 text-[#7C9082] mb-4" />
            <h3 className="text-2xl text-center font-semibold text-[#4A4063] mb-2">Psiconeuroinmunología</h3>
            <p className="text-xl text-center text-[#2D2D2D]">Conexión mente-cuerpo-sistema inmune</p>
          </CardContent>
        </Card>
        <Card className="bg-[#F5F1E8] border-[#7C9082] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardContent className="flex flex-col items-center p-6">
            <BrainIcon className="w-12 h-12 text-[#7C9082] mb-4" />
            <h3 className="text-2xl text-center font-semibold text-[#4A4063] mb-2">Reprogramación de creencias</h3>
            <p className="text-xl text-center text-[#2D2D2D]">Transformación de patrones mentales</p>
          </CardContent>
        </Card>
        <Card className="bg-[#F5F1E8] border-[#7C9082] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardContent className="flex flex-col items-center p-6">
            <SunIcon className="w-12 h-12 text-[#7C9082] mb-4" />
            <h3 className="text-2xl text-center font-semibold text-[#4A4063] mb-2">Terapias energéticas</h3>
            <p className="text-xl text-center text-[#2D2D2D]">Equilibrio y sanación energética</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
