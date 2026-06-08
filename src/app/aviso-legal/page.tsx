import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function AvisoLegal() {
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
            <Shield size={20} />
          </div>
          <h1 className="text-3xl font-heading font-bold text-white tracking-tight">
            Aviso Legal
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-8 bg-[#121214] border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-xl leading-relaxed text-sm">
          
          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">1. Datos Identificativos</h2>
            <p>
              En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), a continuación se reflejan los siguientes datos del titular:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-zinc-400">
              <li><strong>Titular:</strong> Marcelo&apos;s School</li>
              <li><strong>Dirección:</strong> Calle Arce, 41002 Sevilla, España</li>
              <li><strong>Email de Contacto:</strong> info@marcelosschoolsevilla.com / principalemed@gmail.com</li>
              <li><strong>Actividad:</strong> Enseñanza y práctica de Artes Marciales (MMA, BJJ y Defensa Personal)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">2. Usuarios</h2>
            <p>
              El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">3. Uso del Portal</h2>
            <p>
              La web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, &quot;los contenidos&quot;) en Internet pertenecientes a Marcelo&apos;s School o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos (como el formulario de reserva de clase gratis).
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">4. Protección de Datos</h2>
            <p>
              Todo lo relativo al tratamiento de datos personales de los usuarios está recogido en nuestra detallada{" "}
              <Link href="/politica-de-privacidad" className="text-red-400 hover:text-red-500 underline">
                Política de Privacidad
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">5. Propiedad Intelectual e Industrial</h2>
            <p>
              Marcelo&apos;s School por sí o como cesionaria, es propietaria de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, etc.). Todos los derechos reservados.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">6. Exclusión de Garantías y Responsabilidad</h2>
            <p>
              Marcelo&apos;s School no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">7. Modificaciones y Jurisdicción</h2>
            <p>
              Marcelo&apos;s School se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal. La relación entre Marcelo&apos;s School y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Sevilla.
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
