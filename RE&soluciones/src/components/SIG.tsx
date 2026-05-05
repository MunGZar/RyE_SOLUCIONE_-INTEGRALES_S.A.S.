export default function SIG() {
  const normas = [
    {
      icon: 'bx bxs-badge-check',
      codigo: 'ISO 9001',
      nombre: 'Calidad',
      colorClass: 'sig-card-calidad',
      descripcion:
        'Aseguramos la calidad de productos y servicios mediante planificación estratégica, control de procesos, evaluación del desempeño y mejora continua, orientándonos a la satisfacción del cliente y al cumplimiento de requisitos legales y reglamentarios.',
    },
    {
      icon: 'bx bxs-leaf',
      codigo: 'ISO 14001',
      nombre: 'Ambiental',
      colorClass: 'sig-card-ambiental',
      descripcion:
        'Implementamos prácticas responsables que promueven la protección del medio ambiente, la prevención de la contaminación, el uso eficiente de los recursos naturales y el cumplimiento de la normativa ambiental vigente.',
    },
    {
      icon: 'bx bxs-shield-alt-2',
      codigo: 'ISO 45001',
      nombre: 'SST',
      colorClass: 'sig-card-sst',
      descripcion:
        'Establecemos controles para la identificación de peligros y valoración de riesgos, promoviendo condiciones de trabajo seguras, la participación de los trabajadores y la prevención de lesiones y enfermedades laborales.',
    },
  ];

  const pilares = [
    { icon: 'bx bx-git-branch', texto: 'Enfoque basado en procesos' },
    { icon: 'bx bx-analyse', texto: 'Gestión del riesgo integral' },
    { icon: 'bx bx-refresh', texto: 'Ciclo PHVA de mejora continua' },
    { icon: 'bx bx-trending-up', texto: 'Decisiones basadas en evidencia' },
  ];

  return (
    <section className="sig section bg-light" id="sig">
      <div className="container">

        {/* Encabezado de sección */}
        <div className="section-header text-center">
          <span className="section-subtitle">Estándares Internacionales de Gestión</span>
          <h2 className="section-title">Sistema Integrado de Gestión</h2>
          <p className="section-desc">
            Calidad &nbsp;·&nbsp; Ambiental &nbsp;·&nbsp; Seguridad y Salud en el Trabajo
          </p>
        </div>

        {/* Bloque introductorio */}
        <div className="sig-intro-block">
          <div className="sig-intro-icon">
            <i className="bx bxs-certification"></i>
          </div>
          <p className="sig-intro-text">
            R&S Soluciones Integrales se destaca como pionera en el diseño, implementación y mejora
            continua de un Sistema Integrado de Gestión, estructurado conforme a los lineamientos de
            las normas <strong>ISO&nbsp;9001, ISO&nbsp;14001 e ISO&nbsp;45001</strong>, garantizando
            un enfoque integral orientado a la excelencia organizacional, la sostenibilidad y la
            protección de los trabajadores. El sistema se fundamenta en el enfoque basado en procesos,
            la gestión del riesgo y el ciclo de mejora continua <strong>PHVA</strong> (Planear, Hacer,
            Verificar y Actuar), permitiendo la identificación, control y optimización de las
            actividades de la organización.
          </p>
        </div>

        {/* Pilares */}
        <div className="sig-pilares">
          {pilares.map((pilar, index) => (
            <div className="sig-pilar" key={index}>
              <i className={pilar.icon}></i>
              <span>{pilar.texto}</span>
            </div>
          ))}
        </div>

        {/* Tarjetas ISO */}
        <div className="sig-normas-grid">
          {normas.map((norma, index) => (
            <div className={`sig-norma-card ${norma.colorClass}`} key={index}>
              <div className="sig-norma-header">
                <div className="sig-norma-icon">
                  <i className={norma.icon}></i>
                </div>
                <div>
                  <span className="sig-norma-codigo">{norma.codigo}</span>
                  <h3 className="sig-norma-nombre">{norma.nombre}</h3>
                </div>
              </div>
              <p className="sig-norma-desc">{norma.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Cierre */}
        <div className="sig-cierre">
          <i className="bx bx-trophy sig-cierre-icon"></i>

          <p className="text-white">
            El Sistema Integrado de Gestión fortalece la{' '}
            <strong className="text-primary-color">toma de decisiones basada en evidencia</strong>, la eficiencia operativa y la
            competitividad empresarial, consolidando a R&S Soluciones Integrales como un referente
            en la implementación de estándares internacionales de gestión.
          </p>
        </div>

      </div>
    </section>
  );
}
