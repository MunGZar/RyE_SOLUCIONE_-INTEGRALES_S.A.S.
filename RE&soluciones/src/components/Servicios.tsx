import Link from 'next/link';

export default function Servicios() {
  return (
    <section className="servicios section bg-light" id="servicios">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Servicios de Consultoría y Asesoría</span>
          <h2 className="section-title">Nuestras Soluciones Integrales</h2>
          <p className="section-desc">Estrategias a la medida en consultoría empresarial, capacitación y apoyo administrativo para potenciar su crecimiento.</p>
        </div>

        <div className="servicios-grid">
          {/* Servicio 1 */}
          <div className="servicio-card">
            <div className="servicio-icon"><i className='bx bx-book-reader'></i></div>
            <h3>Capacitación Organizacional</h3>
            <p>Programas de formación profesional en legislación, normatividad y metodologías corporativas de alto nivel.</p>
            <ul className="servicio-benefits">
              <li><i className='bx bx-check'></i> Gestión del conocimiento</li>
              <li><i className='bx bx-check'></i> Cumplimiento normativo</li>
            </ul>
            <Link href="#contacto" className="btn btn-outline btn-sm">Solicitar Cotización</Link>
          </div>

          {/* Servicio 2 */}
          <div className="servicio-card">
            <div className="servicio-icon"><i className='bx bx-bar-chart-alt-2'></i></div>
            <h3>Consultoría Administrativa</h3>
            <p>Diagnóstico integral y optimización de procesos para la modernización estructural de entidades públicas y privadas.</p>
            <ul className="servicio-benefits">
              <li><i className='bx bx-check'></i> Eficiencia operativa</li>
              <li><i className='bx bx-check'></i> Transformación técnica</li>
            </ul>
            <Link href="#contacto" className="btn btn-outline btn-sm">Agendar Consultoría</Link>
          </div>

          {/* Servicio 3 */}
          <div className="servicio-card">
            <div className="servicio-icon"><i className='bx bx-directions'></i></div>
            <h3>Asesoría Especializada</h3>
            <p>Orientación técnica y jurídica experta para la toma de decisiones estratégicas en entornos complejos.</p>
            <ul className="servicio-benefits">
              <li><i className='bx bx-check'></i> Soporte jurídico senior</li>
              <li><i className='bx bx-check'></i> Análisis de riesgos</li>
            </ul>
            <Link href="#contacto" className="btn btn-outline btn-sm">Contactar Especialista</Link>
          </div>

          {/* Servicio 4 */}
          <div className="servicio-card">
            <div className="servicio-icon"><i className='bx bx-support'></i></div>
            <h3>Apoyo Técnico Institucional</h3>
            <p>Acompañamiento profesional en la gestión administrativa y operativa para el cumplimiento de objetivos.</p>
            <ul className="servicio-benefits">
              <li><i className='bx bx-check'></i> Ejecución de proyectos</li>
              <li><i className='bx bx-check'></i> Respaldo administrativo</li>
            </ul>
            <Link href="#contacto" className="btn btn-outline btn-sm mt-3">Solicitar Apoyo</Link>
          </div>

          {/* Servicio 5 */}
          <div className="servicio-card servicio-card-wide">
            <div className="servicio-card-content">
              <div className="servicio-icon"><i className='bx bx-package'></i></div>
              <div className="servicio-text-wide">
                <h3>Suministro y Comercialización de Bienes e Insumos</h3>
                <p>Comprende el conjunto de actividades orientadas a la adquisición, almacenamiento, distribución y venta de bienes e insumos necesarios para el desarrollo de actividades productivas, comerciales e institucionales. Incluye la identificación de proveedores, gestión de compras, control de inventarios, logística de transporte y entrega oportuna de los productos, garantizando estándares de calidad, cumplimiento normativo y eficiencia en los procesos.

                  Asimismo, abarca la comercialización de bienes e insumos mediante estrategias que permiten satisfacer las necesidades del mercado, promoviendo relaciones comerciales sostenibles, competitividad en precios y servicio al cliente. Este proceso puede involucrar la distribución al por mayor y al detal, así como la implementación de canales físicos y digitales para la oferta de productos.

                  Se prioriza la trazabilidad de los bienes, la optimización de costos, el cumplimiento de especificaciones técnicas y la generación de valor agregado, contribuyendo al fortalecimiento de cadenas de suministro y al desarrollo económico de los territorios donde se ejecutan estas actividades</p>
                <Link href="#contacto" className="btn btn-primary btn-sm mt-3 text-white">Solicitar Cotización de Suministros</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
