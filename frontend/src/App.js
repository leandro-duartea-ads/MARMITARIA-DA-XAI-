import { useState, useEffect } from "react";
import "@/App.css";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  ChefHat,
  Truck,
  Store,
  CreditCard,
  MessageCircle,
  Instagram,
  ExternalLink,
  Menu,
  X,
  Star,
  ArrowRight,
  Utensils,
  Bike,
  Check,
} from "lucide-react";

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Business Data
const BUSINESS = {
  name: "Marmitaria da Xai",
  slogan: "Comida caseira de qualidade",
  phone: "(67) 98201-7678",
  whatsapp: "https://wa.me/5567982017678",
  store: "https://pedido.anota.ai/loja/marmita-da-xai?f=msa",
  address: "Rua Almirante Cochrane — Campo Grande-MS",
  hours: "Seg a Sáb · 10h às 14h",
  instagram: "@_marmitaria_xai_",
  instagramUrl: "https://instagram.com/_marmitaria_xai_",
};

// Menu Items
const MENU_ITEMS = [
  {
    id: 1,
    name: "Strogonoff de Frango",
    description: "Cremoso strogonoff com arroz branco e batata palha crocante",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/8bla0e5z_WhatsApp%20Image%202026-03-05%20at%2022.06.17.jpeg",
    prices: { P: 18, M: 22, G: 28 },
    badge: "Mais Pedido",
  },
  {
    id: 2,
    name: "Picadinho de Carne",
    description: "Cubos de carne macios com legumes frescos e macarrão",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/ubew9qcb_WhatsApp%20Image%202026-03-05%20at%2022.06.18.jpeg",
    prices: { P: 18, M: 22, G: 28 },
    badge: null,
  },
  {
    id: 3,
    name: "Marmita Completa",
    description: "Bife acebolado, panqueca, mandioca, quiabo e arroz",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/ij7b4rza_WhatsApp%20Image%202026-03-05%20at%2022.06.19%20%281%29.jpeg",
    prices: { P: 18, M: 22, G: 28 },
    badge: "Favorito",
  },
  {
    id: 4,
    name: "Strogonoff de Carne",
    description: "Strogonoff tradicional de carne com arroz e batata palha",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/1lvuxqew_WhatsApp%20Image%202026-03-05%20at%2022.06.21%20%281%29.jpeg",
    prices: { P: 18, M: 22, G: 28 },
    badge: null,
  },
  {
    id: 5,
    name: "Frango à Parmegiana",
    description: "Filé empanado com molho de tomate, queijo, purê e couve",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/73lcrb6j_WhatsApp%20Image%202026-03-05%20at%2022.06.21.jpeg",
    prices: { P: 18, M: 22, G: 28 },
    badge: "Especial",
  },
  {
    id: 6,
    name: "Feijoada da Xai",
    description: "Feijoada completa com arroz, couve, banana frita e farofa",
    image: "https://images.unsplash.com/photo-1599861436324-fda5a9b61fc4?w=500&q=80",
    prices: { P: 20, M: 24, G: 28 },
    badge: "Aos Sábados",
  },
];

// Testimonials
const TESTIMONIALS = [
  {
    id: 1,
    name: "Maria Santos",
    text: "A melhor marmita de Campo Grande! Comida caseira de verdade, sempre quentinha e bem temperada. Recomendo demais!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "João Silva",
    text: "Peço toda semana! A feijoada de sábado é imperdível. Entrega rápida e atendimento excelente pelo WhatsApp.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Costa",
    text: "Finalmente encontrei uma marmitaria que tem gosto de comida da minha mãe! Preço justo e porções generosas.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
  },
];

// Steps
const STEPS = [
  { icon: Utensils, title: "Escolha", description: "Veja nosso cardápio e escolha sua marmita favorita" },
  { icon: MessageCircle, title: "Peça pelo WhatsApp", description: "Envie seu pedido de forma rápida e fácil" },
  { icon: MapPin, title: "Informe o Endereço", description: "Nos diga onde você está para entregarmos" },
  { icon: Bike, title: "Receba Quentinho", description: "Sua marmita chega fresquinha na sua porta" },
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#cardapio", label: "Cardápio" },
    { href: "#entrega", label: "Entrega" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "navbar-scrolled bg-wood-dark/98" : "bg-wood-dark/90"
      } backdrop-blur-md border-b border-gold-light/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" data-testid="logo">
            <ChefHat className="w-8 h-8 text-gold" />
            <span className="font-oswald text-xl md:text-2xl text-gold font-bold tracking-wide">
              Marmitaria da Xai
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-gold transition-colors duration-300 font-medium"
                data-testid={`nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-gold text-wood-footer hover:bg-gold-hover font-bold px-6 py-2.5 rounded-full transition-all duration-300"
              data-testid="nav-order-btn"
            >
              Fazer Pedido
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            data-testid="mobile-menu-btn"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-wood-dark border-b border-gold-light/10 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        data-testid="mobile-menu"
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white hover:text-gold transition-colors duration-300 font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-gold text-wood-footer hover:bg-gold-hover font-bold px-6 py-3 rounded-full transition-all duration-300"
          >
            Fazer Pedido
          </a>
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section data-testid="hero-section" className="relative min-h-screen bg-wood-dark pt-20 md:pt-0 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div {...fadeInUp} className="text-center md:text-left">
            <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow-lg">
              FEIJOADA DA XAI
            </h1>
            <p className="font-oswald text-2xl sm:text-3xl text-gold-light mb-6">
              {BUSINESS.slogan}
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Marmitas quentinhas e feijoada todo sábado, entregues na sua porta em Campo Grande
            </p>

            {/* Delivery Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-gold text-wood-footer px-6 py-3 rounded-lg mb-8"
            >
              <Bike className="w-6 h-6" />
              <span className="font-bold">ENTREGAMOS — Taxa grátis na região. Peça já!</span>
            </motion.div>

            {/* Hours */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-white mb-8">
              <Clock className="w-5 h-5 text-gold" />
              <span>{BUSINESS.hours}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 bg-gold text-wood-footer hover:bg-gold-hover font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                data-testid="hero-whatsapp-btn"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Pedir pelo WhatsApp
              </a>
              <a
                href="#cardapio"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-wood-footer font-bold px-8 py-4 rounded-full transition-all duration-300"
                data-testid="hero-menu-btn"
              >
                Ver Cardápio
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ boxShadow: "0 0 40px rgba(245, 166, 35, 0.2)" }}>
              <img
                src="https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/ij7b4rza_WhatsApp%20Image%202026-03-05%20at%2022.06.19%20%281%29.jpeg"
                alt="Marmita completa da Marmitaria da Xai"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Features Bar
const FeaturesBar = () => {
  const features = [
    { icon: Truck, text: "Delivery & Retirada" },
    { icon: Clock, text: "Seg a Sáb · 10h às 14h" },
    { icon: ChefHat, text: "Feijoada todo Sábado" },
    { icon: Check, text: "Taxa grátis na região" },
  ];

  return (
    <section data-testid="features-bar" className="bg-gold py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center gap-3 text-wood-footer"
            >
              <feature.icon className="w-6 h-6 flex-shrink-0" />
              <span className="font-bold text-sm md:text-base">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Delivery Section
const DeliverySection = () => {
  const deliveryFeatures = [
    { icon: Bike, title: "Delivery Rápido", description: "Entregamos em toda região" },
    { icon: Store, title: "Retirada no Local", description: "Pegue sua marmita fresquinha" },
    { icon: CreditCard, title: "Pagamento Fácil", description: "Dinheiro, Pix ou Cartão" },
  ];

  return (
    <section id="entrega" data-testid="delivery-section" className="bg-wood-medium py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div {...fadeInUp}>
            <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-6">
              ENTREGAMOS NA SUA PORTA!
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Peça pelo WhatsApp ou pela nossa loja online. Taxa grátis na região de Campo Grande!
            </p>

            <div className="grid gap-6 mb-10">
              {deliveryFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-gold/10 rounded-lg">
                    <feature.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 bg-gold text-wood-footer hover:bg-gold-hover font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              data-testid="delivery-whatsapp-btn"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Pedir Agora
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&q=80"
                alt="Entrega de marmitas"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Menu Section
const MenuSection = () => {
  return (
    <section id="cardapio" data-testid="menu-section" className="bg-wood-dark py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            NOSSO CARDÁPIO
          </h2>
          <p className="text-gold-light text-lg max-w-2xl mx-auto">
            Escolha sua marmita favorita. Todos os pratos são preparados com ingredientes frescos e muito carinho.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {MENU_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="menu-card bg-wood-medium border border-gold-light/20 rounded-xl overflow-hidden group"
              data-testid={`menu-item-${item.id}`}
            >
              {/* Image */}
              <div className="relative img-zoom h-56">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.badge && (
                  <span className="absolute top-4 right-4 bg-gold text-wood-footer text-xs font-bold px-3 py-1 rounded-full badge-pulse">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-oswald text-xl font-bold text-gold mb-2">{item.name}</h3>
                <p className="text-white/70 text-sm mb-4">{item.description}</p>

                {/* Prices */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-3">
                    {Object.entries(item.prices).map(([size, price]) => (
                      <div key={size} className="text-center">
                        <span className="block text-xs text-white/60 uppercase">{size}</span>
                        <span className="font-oswald text-lg text-gold font-bold">R${price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Button */}
                <a
                  href={`${BUSINESS.whatsapp}?text=Olá! Gostaria de pedir: ${item.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gold text-wood-footer hover:bg-gold-hover font-bold px-6 py-3 rounded-lg transition-all duration-300"
                  data-testid={`order-btn-${item.id}`}
                >
                  Pedir agora
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Menu CTA */}
        <motion.div {...fadeInUp} className="text-center mt-12">
          <a
            href={BUSINESS.store}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-wood-footer font-bold px-8 py-4 rounded-full transition-all duration-300"
            data-testid="view-full-menu-btn"
          >
            <ExternalLink className="w-5 h-5" />
            Ver Cardápio Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  return (
    <section id="como-funciona" data-testid="how-it-works-section" className="bg-wood-medium py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            COMO FUNCIONA
          </h2>
          <p className="text-gold-light text-lg">Pedir sua marmita é simples e rápido!</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`text-center ${index < STEPS.length - 1 ? "step-connector" : ""}`}
              data-testid={`step-${index + 1}`}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 border-2 border-gold rounded-full mb-6">
                <step.icon className="w-8 h-8 text-gold" />
              </div>
              <div className="font-oswald text-sm text-gold mb-2">PASSO {index + 1}</div>
              <h3 className="font-oswald text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/70 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  return (
    <section data-testid="testimonials-section" className="bg-wood-dark py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <p className="text-gold-light text-lg">A opinião de quem já provou nossas marmitas</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              className="testimonial-card bg-wood-medium border border-gold-light/10 p-8 rounded-2xl"
              data-testid={`testimonial-${testimonial.id}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/90 mb-6 leading-relaxed">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold"
                />
                <span className="font-bold text-gold">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    address: "",
    marmita: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Novo Pedido - Marmitaria da Xai*%0A%0A👤 *Nome:* ${formData.name}%0A📱 *WhatsApp:* ${formData.whatsapp}%0A📍 *Endereço:* ${formData.address}%0A🍽️ *Marmita:* ${formData.marmita}%0A📝 *Observações:* ${formData.notes || "Nenhuma"}`;
    window.open(`${BUSINESS.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <section id="contato" data-testid="contact-section" className="bg-wood-medium py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div {...fadeInUp}>
            <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-6">
              FAÇA SEU PEDIDO
            </h2>
            <p className="text-white/90 mb-10">
              Entre em contato conosco pelo WhatsApp ou preencha o formulário ao lado. Sua marmita quentinha está a um clique de distância!
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white">Endereço</h3>
                  <p className="text-white/70">{BUSINESS.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white">WhatsApp</h3>
                  <a href={BUSINESS.whatsapp} className="text-gold hover:text-gold-hover transition-colors">
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white">Horário</h3>
                  <p className="text-white/70">{BUSINESS.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ExternalLink className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white">Loja Online</h3>
                  <a
                    href={BUSINESS.store}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-hover transition-colors"
                  >
                    Acesse nossa loja
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-wood-dark p-8 rounded-2xl border border-gold-light/10" data-testid="order-form">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gold mb-2">Nome</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3 bg-wood-medium border border-gold-light/20 rounded-lg text-white placeholder-white/50 focus:outline-none transition-all duration-300"
                    placeholder="Seu nome"
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gold mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3 bg-wood-medium border border-gold-light/20 rounded-lg text-white placeholder-white/50 focus:outline-none transition-all duration-300"
                    placeholder="(67) 99999-9999"
                    data-testid="input-whatsapp"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gold mb-2">Endereço de Entrega</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3 bg-wood-medium border border-gold-light/20 rounded-lg text-white placeholder-white/50 focus:outline-none transition-all duration-300"
                    placeholder="Rua, número, bairro"
                    data-testid="input-address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gold mb-2">Marmita</label>
                  <select
                    name="marmita"
                    value={formData.marmita}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3 bg-wood-medium border border-gold-light/20 rounded-lg text-white focus:outline-none transition-all duration-300"
                    data-testid="select-marmita"
                  >
                    <option value="">Selecione uma opção</option>
                    {MENU_ITEMS.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name} (P: R${item.prices.P} | M: R${item.prices.M} | G: R${item.prices.G})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gold mb-2">Observações</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="form-input w-full px-4 py-3 bg-wood-medium border border-gold-light/20 rounded-lg text-white placeholder-white/50 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Ex: Sem cebola, marmita grande..."
                    data-testid="textarea-notes"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 bg-gold text-wood-footer hover:bg-gold-hover font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  data-testid="submit-order-btn"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Enviar pelo WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-wood-footer py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="w-8 h-8 text-gold" />
              <span className="font-oswald text-2xl text-gold font-bold">Marmitaria da Xai</span>
            </div>
            <p className="text-white/70 mb-4">{BUSINESS.slogan}</p>
            <div className="flex items-center gap-4">
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-hover transition-colors"
                data-testid="footer-instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-hover transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-oswald text-lg font-bold text-gold mb-4">CONTATO</h3>
            <div className="space-y-3 text-white/70">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                {BUSINESS.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                {BUSINESS.phone}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                {BUSINESS.hours}
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-oswald text-lg font-bold text-gold mb-4">LINKS ÚTEIS</h3>
            <div className="space-y-3">
              <a href="#cardapio" className="block text-white/70 hover:text-gold transition-colors">
                Cardápio
              </a>
              <a
                href={BUSINESS.store}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-gold transition-colors"
              >
                Loja Online
              </a>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-gold transition-colors"
              >
                {BUSINESS.instagram}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gold-light/10 pt-8 text-center">
          <p className="text-gold-light text-sm">
            © {new Date().getFullYear()} Marmitaria da Xai. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

// WhatsApp Float Button
const WhatsAppFloatButton = () => {
  return (
    <a
      href={BUSINESS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-pulse fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
      data-testid="whatsapp-float-btn"
      aria-label="Contato via WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturesBar />
      <DeliverySection />
      <MenuSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}

export default App;
