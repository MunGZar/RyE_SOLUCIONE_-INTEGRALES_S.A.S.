import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="badge">Líderes en Consultoría y Capacitación en Colombia</span>
          <h1 className="hero-title">Consultoría Empresarial y Capacitación Organizacional de Alto Impacto.</h1>
          <p className="hero-desc">Impulsamos el éxito de su organización mediante asesoría administrativa especializada, formación profesional y suministro técnico. Soluciones integrales para los sectores público, privado y social en toda Colombia.</p>
          <div className="hero-buttons">
            <Link href="#servicios" className="btn btn-primary btn-lg">Solicitar Asesoría Especializada</Link>
            <a href="https://wa.me/573137788529" className="btn btn-outline btn-lg" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-whatsapp'></i> Agendar Consultoría Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
