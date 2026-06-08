import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PoliticaDePrivacidad() {
  return (
    <div className="min-h-screen bg-[#050506] text-zinc-300 py-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-red-500 font-medium text-sm mb-12 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Volver al Dojo
        </Link>

        {/* Page Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-500/20 flex items-center justify-center text-red-500">
            <ShieldCheck size={20} />
          </div>
          <h1 className="text-3xl font-heading font-bold text-white tracking-tight">
            Política de Privacidad
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-8 bg-[#121214] border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-xl leading-relaxed text-sm">
          
          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">1. Introducción</h2>
            <p>
              Marcelo&apos;s School se compromete a proteger la privacidad y seguridad de la información personal de nuestros usuarios y alumnos. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que nos facilitas a través de nuestro sitio web y los formularios de reserva de clases de artes marciales en Calle Arce, Sevilla.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">2. Responsable del Tratamiento de Datos</h2>
            <p>
              El responsable del tratamiento de los datos personales obtenidos es <strong>Marcelo&apos;s School</strong>, con dirección en Calle Arce, 41002 Sevilla, España, y correo electrónico de contacto: <strong>principalemed@gmail.com</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">3. Datos Personales que Recopilamos</h2>
            <p>
              A través de nuestro formulario de reserva de clase gratis, recopilamos los siguientes datos personales:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-zinc-400">
              <li>Nombre completo (para identificar al alumno).</li>
              <li>Dirección de correo electrónico (para confirmación y comunicación).</li>
              <li>Teléfono de contacto (para llamada informativa del Maestro Marcelo).</li>
              <li>Disciplina de interés (para ubicarte en el grupo adecuado de MMA, BJJ o Defensa Personal).</li>
              <li>Cualquier mensaje adicional que decidas enviarnos voluntariamente.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">4. Finalidad del Tratamiento</h2>
            <p>
              Tratamos tus datos personales con la única finalidad de coordinar y reservar tu clase de prueba gratuita en nuestro dojo de Calle Arce, Sevilla. La base legal para este tratamiento es la ejecución de medidas precontractuales o el consentimiento del propio interesado al enviar el formulario. No utilizaremos tus datos para enviar publicidad comercial no solicitada (spam).
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">5. Conservación de los Datos</h2>
            <p>
              Los datos proporcionados se conservarán durante el tiempo necesario para gestionar tu solicitud de clase de prueba. En caso de que pases a formar parte activa del dojo como alumno, tus datos se incorporarán a nuestro sistema de alumnos bajo su correspondiente contrato de matrícula. Si decides no inscribirte, tus datos serán borrados de manera segura tras un período máximo de 6 meses.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">6. Destinatarios de los Datos</h2>
            <p>
              Tus datos personales son confidenciales. Marcelo&apos;s School no vende, alquila ni comparte tus datos personales con terceros externos a la academia bajo ninguna circunstancia, excepto por obligación legal.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">7. Tus Derechos (ARCO-POL)</h2>
            <p>
              Tienes derecho a acceder a tus datos personales, rectificar los datos inexactos, solicitar su supresión cuando ya no sean necesarios, oponerse al tratamiento, limitar el tratamiento y solicitar la portabilidad de tus datos.
            </p>
            <p className="mt-3">
              Para ejercer cualquiera de estos derechos, puedes enviar un correo electrónico a <strong>principalemed@gmail.com</strong> o una solicitud por escrito a nuestra dirección en Calle Arce, Sevilla, adjuntando una fotocopia o copia digital de tu DNI para verificar tu identidad.
            </p>
          </section>

        </div>

        {/* Mini Footer */}
        <p className="text-center text-xs text-zinc-650 mt-12">
          &copy; {new Date().getFullYear()} Marcelo&apos;s School. Todos los derechos reservados. Calle Arce, Sevilla.
        </p>

      </div>
    </div>
  );
}
