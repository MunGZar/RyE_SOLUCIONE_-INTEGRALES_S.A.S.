'use client';
import { useState } from 'react';

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const nombre = formData.get('nombre') as string;
    const empresa = formData.get('empresa') as string;
    const correo = formData.get('correo') as string;
    const telefono = formData.get('telefono') as string;
    const asunto = formData.get('asunto') as string;
    const mensaje = formData.get('mensaje') as string;

    const asuntoMap: Record<string, string> = {
      capacitacion: "Capacitación Organizacional",
      consultoria: "Consultoría Administrativa",
      suministros: "Suministro de Bienes e Insumos",
      asesoria: "Asesoría Especializada",
      otro: "Otro Requerimiento"
    };

    const asuntoTexto = asuntoMap[asunto] || asunto;

    const text = `*NUEVA SOLICITUD DE SERVICIO* 

*Datos del Contacto:*
*Nombre:* ${nombre}
*Organización/Entidad:* ${empresa || 'No especificada'}
*Correo Corporativo:* ${correo}
*Teléfono:* ${telefono}

*Detalles del Requerimiento:*
*Servicio de Interés:* ${asuntoTexto}
*Mensaje:* 
${mensaje}

_Solicitud generada desde el sitio web corporativo de R&S Soluciones Integrales._`;

    const whatsappNumber = "573137788529";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      window.open(whatsappUrl, '_blank');
      form.reset();
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 800);
  };

  return (
    <section className="contacto section bg-light" id="contacto">
      <div className="container">
        <div className="contacto-grid">
          {/* Información */}
          <div className="contacto-info">
            <div className="section-header">
              <span className="section-subtitle">Atención en toda Colombia</span>
              <h2 className="section-title">Contacte a un Experto en Gestión Empresarial</h2>
              <p>Solicite una cotización detallada o agende una consultoría personalizada para potenciar su organización hoy mismo.</p>
            </div>

            <div className="contact-methods">
              <div className="c-method">
                <div className="c-icon"><i className='bx bxl-whatsapp'></i></div>
                <div className="c-text">
                  <h5>Asesoría por WhatsApp</h5>
                  <a href="https://wa.me/573137788529" target="_blank" rel="noopener noreferrer">Contactar Especialista</a>
                </div>
              </div>
              <div className="c-method">
                <div className="c-icon"><i className='bx bx-envelope'></i></div>
                <div className="c-text">
                  <h5>E-mail Corporativo</h5>
                  <a href="mailto:iryesolucionesintegrales@gmail.com">iryesolucionesintegrales@gmail.com</a>
                </div>
              </div>
              <div className="c-method">
                <div className="c-icon"><i className='bx bx-map'></i></div>
                <div className="c-text">
                  <h5>Cobertura Nacional</h5>
                  <span>Colombia - Consultoría administrativa y capacitación</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="contacto-form-card">
            <form id="contactForm" className="form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo *</label>
                  <input type="text" id="nombre" name="nombre" required placeholder="Ej. Juan Pérez" />
                </div>
                <div className="form-group">
                  <label htmlFor="empresa">Organización / Entidad</label>
                  <input type="text" id="empresa" name="empresa" placeholder="Ej. Alcaldía / Corp. S.A." />
                </div>
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="correo">Correo Corporativo *</label>
                  <input type="email" id="correo" name="correo" required placeholder="correo@empresa.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono de Contacto *</label>
                  <input type="tel" id="telefono" name="telefono" required placeholder="Número móvil o fijo" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="asunto">Servicio de Interés SEO *</label>
                <select id="asunto" name="asunto" required defaultValue="">
                  <option value="" disabled>Seleccione una opción</option>
                  <option value="capacitacion">Capacitación Organizacional</option>
                  <option value="consultoria">Consultoría Administrativa</option>
                  <option value="suministros">Suministro de Bienes e Insumos</option>
                  <option value="asesoria">Asesoría Especializada</option>
                  <option value="otro">Otro Requerimiento</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Detalles de su Solicitud *</label>
                <textarea id="mensaje" name="mensaje" rows={4} required placeholder="Describa brevemente cómo podemos apoyarlo..."></textarea>
              </div>
              
              <div className="form-check">
                <input type="checkbox" id="privacidad" name="privacidad" required />
                <label htmlFor="privacidad">Acepto la <a href="#">Política de Datos Personales</a>.</label>
              </div>

              <button type="submit" className="btn btn-primary btn-block btn-lg" id="submitBtn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><i className='bx bx-loader-alt bx-spin mr-2'></i> Procesando...</>
                ) : (
                  <>Solicitar Cotización Ahora <i className='bx bx-send ml-2'></i></>
                )}
              </button>
              
              {/* Mensaje Éxito */}
              <div id="formSuccess" className={`form-success-msg ${showSuccess ? '' : 'hidden'}`}>
                <i className='bx bx-check-circle'></i>
                <span>¡Mensaje enviado con éxito! Un asesor se contactará muy pronto.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
