import React from "react";
import Link from "next/link";
import { ArrowLeft, Cookie } from "lucide-react";

export default function PoliticaDeCookies() {
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
            <Cookie size={20} />
          </div>
          <h1 className="text-3xl font-heading font-bold text-white tracking-tight">
            Política de Cookies
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-8 bg-[#121214] border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-xl leading-relaxed text-sm">
          
          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">1. ¿Qué son las Cookies?</h2>
            <p>
              Una cookie es un pequeño fichero de texto que se descarga en su navegador (ordenador, smartphone o tablet) al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">2. ¿Qué tipos de Cookies utiliza este sitio web?</h2>
            <p>
              En Marcelo&apos;s School utilizamos únicamente cookies técnicas, esenciales y estrictamente necesarias para el correcto funcionamiento de la web, y en su caso, análisis básico anónimo para evaluar el rendimiento de la landing page.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-zinc-400">
              <li>
                <strong>Cookies Técnicas (Esenciales):</strong> Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión o completar formularios interactivos.
              </li>
              <li>
                <strong>Cookies de Personalización:</strong> Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario (por ejemplo, el idioma o recordar si ha enviado el formulario).
              </li>
              <li>
                <strong>Cookies de Análisis (Anónimas):</strong> Permiten medir el número de visitantes y analizar estadísticamente la utilización que hacen los usuarios de la web, con el único objetivo de mejorar los contenidos del sitio y la experiencia de usuario.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">3. Desactivación o Eliminación de Cookies</h2>
            <p>
              Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador o dispositivo móvil.
            </p>
            <p className="mt-3">
              A continuación le facilitamos los enlaces de ayuda de los principales navegadores del mercado para la gestión y desactivación de cookies:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Apple Safari</li>
              <li>Microsoft Edge</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-white text-lg mb-3">4. Consentimiento y Actualización</h2>
            <p>
              Al navegar y continuar en nuestro sitio web estará consintiendo el uso de las cookies en las condiciones contenidas en la presente Política de Cookies. Marcelo&apos;s School puede modificar esta Política de Cookies en función de nuevas exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos (AEPD).
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
