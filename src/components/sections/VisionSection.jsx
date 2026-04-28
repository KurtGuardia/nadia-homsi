import Image from "next/image";

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden py-10 md:py-12 lg:py-10 text-white px-10"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/fondos/fondo4.png"
          alt="Fondo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-110 blur-[2px]"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-black/45" />

      <div className="hidden md:block absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-base md:text-lg text-white/80 mb-4 tracking-wide uppercase">
              Medicina Holística Integrativa
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              Sana tu cuerpo,
              <br />
              equilibra tu mente
              <br />y transforma tu energía
            </h2>

            <div className="w-24 h-1 bg-white rounded-full mx-auto md:mx-0 mb-8" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto md:mx-0 mb-10">
              Mi visión es crear un espacio donde la medicina convencional y las
              terapias holísticas se unan para ofrecer una atención integral y
              personalizada. Creo en un enfoque que no solo trata los síntomas,
              sino que busca la raíz emocional y energética de cada condición,
              promoviendo una verdadera sanación desde adentro hacia afuera.
            </p>
          </div>

          <div className="relative flex justify-center order-1 md:order-2">
            <div className="absolute inset-0 bg-white/10 blur-2xl rounded-[2rem]" />

            <div className="relative w-full max-w-[420px] md:max-w-[520px] h-[420px] md:h-[520px] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/imgs/nadiaPlaya.png"
                alt="Dra. Nadia"
                fill
                className="object-cover brightness-95 contrast-110 saturate-108 sepia-[0.18] hue-rotate-[-8deg]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
