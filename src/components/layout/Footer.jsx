import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#4A4063] text-white py-8">
      <div className="container mx-auto text-center">
        <Image src="/logo blanco.png" alt="Dra. Nadia Homsi Logo" width={250} height={80} className="mx-auto mb-4" />
        <p>&copy; 2024 Dra. Nadia Homsi. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
