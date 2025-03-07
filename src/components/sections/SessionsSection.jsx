'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SessionType = {
  PRESENCIAL: 'presencial',
  DISTANCIA: 'distancia',
  SEGUIMIENTO: 'seguimiento'
};

const SessionsSection = () => {
  const [activeTab, setActiveTab] = useState(SessionType.PRESENCIAL);
  const [isExpanded, setIsExpanded] = useState(false);

  const sessionContent = {
    [SessionType.PRESENCIAL]: {
      title: "Primera sesión presencial en el Centro Sananda",
      steps: [
        "Armamos tu historia clínica, vemos todos los puntos físicos y emocionales a trabajar.",
        "Escaneo de estado corporal, con escáner cuántico.",
        "Se te entrega una receta específica con puntos a mejorar, en alimentación, suplementos, hábitos saludables específico para tu sistema nervioso.",
        "Pasas a sesión de desintoxicación por 15 minutos en máquina especial con sales minerales y contacto a tierra.",
        "Pasas a la camilla donde se colocan imanes en regiones específicas, en conjunto con musicoterapia y energía escalar."
      ],
      icon: "🏥"
    },
    [SessionType.DISTANCIA]: {
      title: "Primera sesión a distancia",
      steps: [
        "Armamos tu historia clínica, vemos todos los puntos físicos y emocionales a trabajar.",
        "Indagamos profundamente en el origen de la situación física o emocional con bioneuroemoción y biodeodificación.",
        "Se te entrega una receta específica con puntos a mejorar, en alimentación, suplementos, hábitos saludables."
      ],
      icon: "🌐"
    },
    [SessionType.SEGUIMIENTO]: {
      title: "Seguimiento y sesiones posteriores",
      content: "Trabajamos los puntos específicos emocionales o físicos para cada paciente. Si el problema es principalmente emocional, utilizamos las técnicas mencionadas en Mi metodología de manera combinada e integrada de acuerdo a cada caso. Durante todo el proceso te acompaño y hago un seguimiento, también te indico ejercicios y tareas para que tengas un cambio profundo y duradero.",
      icon: "🔄"
    }
  };

  const TabButton = ({ type, icon, label }) => (
    <button
      onClick={() => setActiveTab(type)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
        activeTab === type
          ? 'bg-secondary text-white shadow-lg transform -translate-y-1'
          : 'bg-white text-secondary hover:bg-gray-50'
      }`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  );

  const StepCard = ({ number, content }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: number * 0.1 }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
        transition: { duration: 0.2 }
      }}
      className="bg-white p-6 rounded-xl shadow-md transition-shadow duration-300 cursor-default"
    >
      <div className="flex items-start space-x-4">
        <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center">
          {number + 1}
        </span>
        <p className="text-lg text-[var(--text-dark)]">{content}</p>
      </div>
    </motion.div>
  );

  return (
    <section id="sessions" className="container mx-auto py-16 md:py-24 lg:py-32">
      <h2 className="text-[3.5rem] font-bold text-center text-secondary mb-12 font-handwritten tracking-wider">
        ¿Cómo son las sesiones conmigo?
      </h2>

      <div className="flex justify-center space-x-4 mb-12">
        <TabButton
          type={SessionType.PRESENCIAL}
          icon="🏥"
          label="Sesión Presencial"
        />
        <TabButton
          type={SessionType.DISTANCIA}
          icon="🌐"
          label="Sesión a Distancia"
        />
        <TabButton
          type={SessionType.SEGUIMIENTO}
          icon="🔄"
          label="Seguimiento"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-4xl">{sessionContent[activeTab].icon}</span>
              <h3 className="text-2xl font-semibold text-secondary">
                {sessionContent[activeTab].title}
              </h3>
            </div>

            <div className="space-y-4">
              {sessionContent[activeTab].steps ? (
                sessionContent[activeTab].steps.map((step, index) => (
                  <StepCard key={index} number={index} content={step} />
                ))
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg text-[var(--text-dark)] leading-relaxed"
                >
                  {sessionContent[activeTab].content}
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 text-center">
        <button
          onClick={() => window.location.href = '#contact'}
          className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
        >
          Agenda tu sesión ahora
        </button>
      </div>
    </section>
  );
};

export default SessionsSection;
