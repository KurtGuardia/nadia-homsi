import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="bg-[#7C9082]">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="/logo blanco.png" alt="Dra. Nadia Homsi Logo" width={120} height={40} />
        <div className="space-x-4">
          <Button variant="ghost" className="text-white hover:text-[#4A4063]">Inicio</Button>
          <Button variant="ghost" className="text-white hover:text-[#4A4063]">Sobre Mí</Button>
          <Button variant="ghost" className="text-white hover:text-[#4A4063]">Servicios</Button>
          <Button variant="ghost" className="text-white hover:text-[#4A4063]">Contacto</Button>
        </div>
      </div>
    </nav>
  )
}
