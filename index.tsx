// @ts-nocheck
const { useState, useEffect, useRef } = React;

const productData = [
  {
    id: 'mp301',
    image: 'images/17.jpg',
    name: 'Ricoh MP 301',
    priceUSD: 490,
    type: 'B/N',
    speedPPM: 30,
    functions: ['Impresión', 'Escaneo', 'Copia'],
    paperSize: ['A4'],
    status: 'Nuevo',
    benefits: ['Compacto y eficiente', 'Ideal para pequeñas oficinas', 'Tóner económico']
  },
  {
    id: 'im350',
    image: 'images/10.jpg',
    name: 'Ricoh IM 350', 
    priceUSD: 650,
    type: 'B/N',
    speedPPM: 35,
    functions: ['Impresión', 'Escaneo', 'Copia', 'Fax (opcional)'],
    paperSize: ['A4'],
    status: 'Nuevo',
    benefits: ['Pantalla táctil intuitiva', 'Conectividad avanzada', 'Bajo consumo energético']
  },
  {
    id: 'mp2555',
    image: 'images/8.jpg',
    name: 'Ricoh MP 2555',
    priceUSD: 1380,
    type: 'B/N',
    speedPPM: 25,
    functions: ['Impresión', 'Escaneo', 'Copia'],
    paperSize: ['A3', 'A4'],
    status: 'Nuevo',
    benefits: ['Alimentador de documentos rápido', 'Funciones de seguridad mejoradas', 'Operación silenciosa']
  },
  {
    id: 'mp3055',
    image: 'images/11.jpg',
    name: 'Ricoh MP 3055',
    priceUSD: 1590,
    type: 'B/N',
    speedPPM: 30,
    functions: ['Impresión', 'Escaneo', 'Copia', 'Fax'],
    paperSize: ['A3', 'A4'],
    status: 'Nuevo',
    benefits: ['Pantalla táctil a color personalizable', 'Integración con la nube', 'Alta durabilidad']
  },
  {
    id: 'mp4055',
    image: 'images/9.jpg',
    name: 'Ricoh MP 4055',
    priceUSD: 1690,
    type: 'B/N',
    speedPPM: 40,
    functions: ['Impresión', 'Escaneo', 'Copia', 'Fax'],
    paperSize: ['A3', 'A4'],
    status: 'Nuevo',
    benefits: ['Alta velocidad para grupos de trabajo', 'Opciones de finalizado avanzadas', 'Eficiencia energética superior']
  },
  {
    id: 'mp5055',
    image: 'images/13.jpg',
    name: 'Ricoh MP 5055',
    priceUSD: 1810,
    type: 'B/N',
    speedPPM: 50,
    functions: ['Impresión', 'Escaneo', 'Copia', 'Fax'],
    paperSize: ['A3', 'A4'],
    status: 'Nuevo',
    benefits: ['Rendimiento robusto para alto volumen', 'Calidad de impresión profesional', 'Fácil administración remota']
  },
  {
    id: 'mp6055',
    image: 'images/14.jpg',
    name: 'Ricoh MP 6055',
    priceUSD: 1895,
    type: 'B/N',
    speedPPM: 60,
    functions: ['Impresión', 'Escaneo', 'Copia', 'Fax (opcional)'],
    paperSize: ['A3', 'A4'],
    status: 'Nuevo',
    benefits: ['Máxima productividad para grandes departamentos', 'Tecnología de imagen avanzada', 'Bajo costo por página']
  },
  {
    id: 'mp7503',
    image: 'images/16.jpg',
    name: 'Ricoh MP 7503',
    priceUSD: 3890,
    type: 'B/N',
    speedPPM: 75,
    functions: ['Impresión', 'Escaneo', 'Copia'],
    paperSize: ['A3', 'A4'],
    status: 'Nuevo',
    benefits: ['Velocidad extrema para entornos de producción ligera', 'Capacidad de papel expandible', 'Durabilidad industrial']
  },
  {
    id: 'mpc4504',
    image: 'images/4.jpg',
    name: 'Ricoh MP C4504',
    priceUSD: 1680,
    type: 'Color',
    speedPPM: 45,
    functions: ['Impresión', 'Escaneo', 'Copia', 'Fax'],
    paperSize: ['A3', 'A4'],
    status: 'Nuevo',
    benefits: ['Colores vibrantes y precisos', 'Pantalla táctil grande e intuitiva (Smart Operation Panel)', 'Conectividad LAN y móvil']
  },
  {
    id: 'mpc5503',
    image: 'images/2.jpg',
    name: 'Ricoh MPC 5503',
    priceUSD: 1190,
    type: 'Color',
    speedPPM: 55, 
    functions: ['Impresión', 'Escaneo', 'Copia', 'Fax (opcional)'],
    paperSize: ['A3', 'A4'],
    status: 'Nuevo', 
    benefits: ['Calidad de color superior', 'Panel táctil intuitivo', 'Eficiencia energética']
  },
  {
    id: 'mpc6004',
    image: 'images/6.jpg',
    name: 'Ricoh MP C6004',
    priceUSD: 1990,
    type: 'Color',
    speedPPM: 60,
    functions: ['Impresión', 'Escaneo', 'Copia', 'Fax'],
    paperSize: ['A3', 'A4'],
    status: 'Nuevo',
    benefits: ['Alta velocidad de impresión a color', 'Calidad profesional para materiales de marketing', 'Ahorro energético modo suspensión']
  }
];

const CoverSlide = () => (
    <div className="slide-content cover-slide">
        <div className="main-logo">
            <img src="images/logo ic.jpg" alt="International Copiers Logo" />
        </div>
        <h1>Catálogo de Copiadoras Ricoh</h1>
        <h2>Calidad y eficiencia para tu negocio</h2>
    </div>
);

const CompanyIntroSlide = () => (
    <div className="slide-content content-slide">
        <h1>Bienvenido a International Copiers</h1>
        <p>En International Copiers, nos dedicamos a proveer soluciones de impresión de alta calidad que impulsan la eficiencia y productividad de su negocio. Con años de experiencia en el mercado ecuatoriano, somos especialistas en la venta de equipos multifuncionales Ricoh, tanto a blanco y negro como a color. Somos importadores directos desde Estados Unidos, garantizando equipos de vanguardia.</p>
        
        <h2>Nuestros Servicios</h2>
        <ul>
            <li>Venta de equipos Ricoh multifuncionales (todos nuestros equipos son nuevos).</li>
            <li>Asesoría personalizada para elegir el equipo que mejor se adapte a sus necesidades.</li>
            <li>Soporte técnico y mantenimiento.</li>
            <li>Venta de consumibles y repuestos originales.</li>
        </ul>

        <h2>Servicio de Alquiler Personalizado</h2>
        <p>Entendemos que cada negocio tiene necesidades únicas. Por ello, ofrecemos un flexible servicio de alquiler de equipos multifuncionales. Nos adaptamos a su volumen de impresión mensual, brindándole una solución rentable y sin preocupaciones.</p>
        <p>Nuestro servicio de alquiler incluye:</p>
        <ul>
            <li>Instalación y configuración del equipo.</li>
            <li>Transporte y entrega en sus instalaciones.</li>
            <li>Mantenimiento preventivo y correctivo.</li>
            <li>Cambio de repuestos y suministros (tóner, etc.) sin costo adicional.</li>
            <li>Soporte técnico especializado para resolver cualquier incidencia.</li>
        </ul>
        <p>Contáctenos para diseñar un plan de alquiler a su medida.</p>

        <h2>Contáctenos</h2>
        <p className="contact-info">
            <strong>Ubicación:</strong> Av. Teniente Hugo Ortiz, Quito, Ecuador<br />
            <strong>Teléfonos:</strong> +593 99 904 0958 / +593 99 985 5866<br />
            <strong>Especialidad:</strong> Venta y alquiler de equipos Ricoh multifuncionales (blanco y negro y color).
        </p>
    </div>
);

const ProductSlide = ({ product }) => (
    <div className="slide-content product-slide">
        <h2>{product.name}</h2>
        <div className="product-details-grid">
            <div className="product-image-placeholder">
                 <img src={product.image} alt={`Imagen de ${product.name}`} className="product-actual-image" />
            </div>
            <div className="product-info">
                <p className="price">Precio: ${product.priceUSD.toLocaleString('en-US')}</p>
                <p><strong><span className="icon">{product.type === 'Color' ? '🎨' : '📄'}</span> Tipo:</strong> {product.type}</p>
                <p><strong><span className="icon">⚡️</span> Velocidad:</strong> {product.speedPPM} ppm</p>
                <p><strong><span className="icon">🔩</span> Estado:</strong> {product.status}</p>
                <p><strong><span className="icon">📏</span> Tamaño de Papel:</strong> {product.paperSize.join(' / ')}</p>
                <div>
                    <strong><span className="icon">⚙️</span> Funciones:</strong>
                    <ul>{product.functions.map(fn => <li key={fn}>{fn}</li>)}</ul>
                </div>
                 <div className="product-benefits">
                    <h3>Beneficios Destacados:</h3>
                    <ul>{product.benefits.map(benefit => <li key={benefit}><span className="icon">✅</span> {benefit}</li>)}</ul>
                </div>
            </div>
        </div>
    </div>
);

const PriceSummarySlide = ({ products }) => (
    <div className="slide-content content-slide price-summary-slide">
        <h1>Lista de Modelos y Precios</h1>
        <table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Color/B&N</th>
                    <th>Velocidad (ppm)</th>
                     <th>Estado</th>
                    <th>Precio (USD)</th>
                </tr>
            </thead>
            <tbody>
                {products.sort((a, b) => a.priceUSD - b.priceUSD).map(p => ( 
                    <tr key={p.id}>
                        <td>{p.name}</td>
                        <td>{p.type}</td>
                        <td>{p.speedPPM}</td>
                        <td>{p.status}</td>
                        <td className="price-col">${p.priceUSD.toLocaleString('en-US')}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const WarrantySlide = () => (
    <div className="slide-content content-slide warranty-slide">
         <h1>Nuestra Garantía</h1>
        <p className="icon">🛡️</p>
        <p><strong>Para Equipos Adquiridos (Venta):</strong> Todos nuestros equipos nuevos cuentan con una garantía de <strong>6 meses o 10,000 copias</strong> (lo que se cumpla primero), brindándole total tranquilidad con su inversión.</p>
        <p><strong>Para Servicio de Alquiler:</strong> La garantía integral, el mantenimiento preventivo y correctivo, así como los suministros, están completamente cubiertos durante toda la vigencia de su contrato de alquiler. Despreocúpese de los detalles técnicos, nosotros nos encargamos.</p>
        <p style={{fontSize: "1.1em", marginTop: "30px", fontWeight: "bold"}}>¡Su inversión y operatividad están protegidas con International Copiers!</p>
    </div>
);

const App = () => {
    const sortedProductData = [...productData].sort((a, b) => {
        if (a.type < b.type) return -1;
        if (a.type > b.type) return 1;
        return a.name.localeCompare(b.name);
    });

    const slides = [
        <CoverSlide key="cover" />,
        <CompanyIntroSlide key="intro" />,
        ...sortedProductData.map(p => <ProductSlide product={p} key={p.id} />),
        <PriceSummarySlide products={productData} key="price-summary" />, 
        <WarrantySlide key="warranty" />
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const slideContainerRef = useRef(null);

    const nextSlide = () => {
        setCurrentSlideIndex(prev => Math.min(prev + 1, slides.length - 1));
    };

    const prevSlide = () => {
        setCurrentSlideIndex(prev => Math.max(prev - 1, 0));
    };
    
    useEffect(() => {
      if (slideContainerRef.current) {
        slideContainerRef.current.scrollTop = 0;
      }
    }, [currentSlideIndex]);

    return (
        <>
            {currentSlideIndex > 0 && (
                <div className="logo">
                    <img src="images/logo ic.jpg" alt="International Copiers Logo" />
                </div>
            )}
            <div className="slide-container" ref={slideContainerRef}>
                {slides[currentSlideIndex]}
            </div>

            {/* --- MODIFICATION START --- */}
            {/* The navigation controls and slide indicator are now grouped together. */}
            {/* On mobile, this container will become a fixed bar at the bottom. */}
            <div className="navigation-controls">
                <button 
                    onClick={prevSlide} 
                    disabled={currentSlideIndex === 0}
                    className="nav-button"
                    aria-label="Diapositiva anterior"
                >
                    Anterior
                </button>

                {/* The slide indicator is now placed between the buttons */}
                <div className="slide-indicator">
                    {currentSlideIndex + 1} / {slides.length}
                </div>
                
                <button 
                    onClick={nextSlide} 
                    disabled={currentSlideIndex === slides.length - 1}
                    className="nav-button"
                    aria-label="Siguiente diapositiva"
                >
                    Siguiente
                </button>
            </div>
            {/* --- MODIFICATION END --- */}
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
