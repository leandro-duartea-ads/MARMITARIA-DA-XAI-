import { useState, useEffect } from "react";
import "@/App.css";
import { motion } from "framer-motion";
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
  Calendar,
  MapPinned,
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
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.8!2d-54.6!3d-20.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Almirante%20Cochrane%2C%20Campo%20Grande%20-%20MS!5e0!3m2!1spt-BR!2sbr!4v1234567890",
  mapsLink: "https://www.google.com/maps/search/Rua+Almirante+Cochrane,+Campo+Grande+-+MS",
};

// Days of the week with cardápio (0 = Sunday, 1 = Monday, etc.)
const WEEKLY_MENU = {
  1: { // Segunda
    day: "Segunda-feira",
    shortDay: "SEG",
    name: "Strogonoff de Frango",
    description: "Cremoso strogonoff com arroz branco e batata palha crocante. Acompanha salada.",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/8bla0e5z_WhatsApp%20Image%202026-03-05%20at%2022.06.17.jpeg",
    prices: { P: 18, M: 22, G: 28 },
  },
  2: { // Terça
    day: "Terça-feira",
    shortDay: "TER",
    name: "Bife Acebolado",
    description: "Bife macio acebolado com macarrão alho e óleo e purê de batata. Acompanha salada.",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/a7zzflsv_WhatsApp%20Image%202026-03-05%20at%2022.06.24.jpeg",
    prices: { P: 18, M: 22, G: 28 },
  },
  3: { // Quarta
    day: "Quarta-feira",
    shortDay: "QUA",
    name: "Frango Assado",
    description: "Coxa e sobrecoxa assadas no tempero especial da casa, com macarrão e creme de milho.",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/neym25av_WhatsApp%20Image%202026-03-05%20at%2022.06.24%20%281%29.jpeg",
    prices: { P: 18, M: 22, G: 28 },
  },
  4: { // Quinta
    day: "Quinta-feira",
    shortDay: "QUI",
    name: "Picadinho de Carne",
    description: "Cubos de carne macios ao molho com legumes, macarrão e acompanhamentos variados.",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/ubew9qcb_WhatsApp%20Image%202026-03-05%20at%2022.06.18.jpeg",
    prices: { P: 18, M: 22, G: 28 },
  },
  5: { // Sexta
    day: "Sexta-feira",
    shortDay: "SEX",
    name: "Frango à Parmegiana",
    description: "Filé empanado com molho de tomate, queijo gratinado, purê e couve refogada.",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/73lcrb6j_WhatsApp%20Image%202026-03-05%20at%2022.06.21.jpeg",
    prices: { P: 18, M: 22, G: 28 },
  },
  6: { // Sábado
    day: "Sábado",
    shortDay: "SÁB",
    name: "Feijoada da Xai",
    description: "Feijoada completa com arroz, couve refogada, farofa, banana frita e laranja.",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/tbd64jgf_WhatsApp%20Image%202026-03-05%20at%2022.06.26.jpeg",
    prices: { P: 20, M: 24, G: 28 },
    special: true,
  },
};

// Gallery images
const GALLERY_IMAGES = [
  {
    src: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/wptq0ziy_WhatsApp%20Image%202026-03-05%20at%2022.06.22.jpeg",
    alt: "Marmita com bife, ovo, abóbora e farofa",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/oe1irz44_WhatsApp%20Image%202026-03-05%20at%2022.06.26%20%281%29.jpeg",
    alt: "Marmita com bife acebolado, couve e maionese",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/ij7b4rza_WhatsApp%20Image%202026-03-05%20at%2022.06.19%20%281%29.jpeg",
    alt: "Marmita completa com bife, mandioca e panqueca",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/1lvuxqew_WhatsApp%20Image%202026-03-05%20at%2022.06.21%20%281%29.jpeg",
    alt: "Strogonoff de carne com arroz",
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
  { icon: Calendar, title: "Veja o Cardápio do Dia", description: "Confira o prato especial de hoje" },
  { icon: MessageCircle, title: "Peça pelo WhatsApp", description: "Envie seu pedido de forma rápida" },
  { icon: MapPin, title: "Informe o Endereço", description: "Nos diga onde você está" },
  { icon: Bike, title: "Receba Quentinho", description: "Sua marmita chega fresquinha" },
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

// Get current day
const getCurrentDay = () => {
  const day = new Date().getDay();
  // Se for domingo (0), mostrar segunda (1)
  return day === 0 ? 1 : day;
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
    { href: "#localizacao", label: "Localização" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "navbar-scrolled bg-white/98 shadow-md" : "bg-white"
      } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" data-testid="logo">
            <div className="w-10 h-10 bg-ifood-red rounded-full flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <span className="font-oswald text-xl md:text-2xl text-ifood-gray-900 font-bold tracking-wide">
              Marmitaria da <span className="text-ifood-red">Xai</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-ifood-gray-700 hover:text-ifood-red transition-colors duration-300 font-medium"
                data-testid={`nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-ifood-red text-white hover:bg-ifood-red-dark font-bold px-6 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2"
              data-testid="nav-order-btn"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Pedir Agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-ifood-gray-700"
            data-testid="mobile-menu-btn"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 ${
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
              className="block text-ifood-gray-700 hover:text-ifood-red transition-colors duration-300 font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-ifood-red text-white hover:bg-ifood-red-dark font-bold px-6 py-3 rounded-full transition-all duration-300"
          >
            Pedir Agora
          </a>
        </div>
      </div>
    </nav>
  );
};

// Hero Section with Today's Menu
const HeroSection = () => {
  const today = getCurrentDay();
  const todayMenu = WEEKLY_MENU[today];

  return (
    <section data-testid="hero-section" className="relative min-h-screen bg-gradient-to-br from-ifood-gray-50 to-white pt-20 md:pt-0 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div {...fadeInUp} className="text-center md:text-left">
            {/* Today Badge */}
            <div className="inline-flex items-center gap-2 bg-ifood-red/10 text-ifood-red px-4 py-2 rounded-full mb-6 today-badge">
              <Calendar className="w-4 h-4" />
              <span className="font-bold text-sm">{todayMenu.day.toUpperCase()}</span>
            </div>

            <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-ifood-gray-900 mb-4">
              CARDÁPIO DE <span className="text-ifood-red">HOJE</span>
            </h1>
            <h2 className="font-oswald text-2xl sm:text-3xl text-ifood-red mb-4">
              {todayMenu.name}
            </h2>
            <p className="text-lg text-ifood-gray-600 mb-6 max-w-lg">
              {todayMenu.description}
            </p>

            {/* Prices */}
            <div className="flex justify-center md:justify-start gap-4 mb-8">
              {Object.entries(todayMenu.prices).map(([size, price]) => (
                <div key={size} className="bg-white rounded-xl shadow-md px-6 py-4 text-center">
                  <span className="block text-sm text-ifood-gray-500 uppercase font-medium">{size}</span>
                  <span className="font-oswald text-2xl text-ifood-red font-bold">R${price}</span>
                </div>
              ))}
            </div>

            {/* Delivery Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-ifood-red text-white px-6 py-3 rounded-lg mb-8"
            >
              <Bike className="w-6 h-6" />
              <span className="font-bold">ENTREGA GRÁTIS na região!</span>
            </motion.div>

            {/* Hours */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-ifood-gray-600 mb-8">
              <Clock className="w-5 h-5 text-ifood-red" />
              <span>{BUSINESS.hours}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={`${BUSINESS.whatsapp}?text=Olá! Gostaria de pedir a marmita de hoje: ${todayMenu.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 bg-ifood-red text-white hover:bg-ifood-red-dark font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                data-testid="hero-whatsapp-btn"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Pedir pelo WhatsApp
              </a>
              <a
                href="#cardapio"
                className="inline-flex items-center justify-center gap-2 border-2 border-ifood-red text-ifood-red hover:bg-ifood-red hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300"
                data-testid="hero-menu-btn"
              >
                Ver Cardápio da Semana
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={todayMenu.image}
                alt={todayMenu.name}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {todayMenu.special && (
                <div className="absolute top-4 right-4 bg-ifood-yellow text-ifood-gray-900 font-bold px-4 py-2 rounded-full shadow-lg">
                  ESPECIAL DO DIA
                </div>
              )}
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
    { icon: ChefHat, text: "Feijoada aos Sábados" },
    { icon: Check, text: "Entrega Grátis" },
  ];

  return (
    <section data-testid="features-bar" className="bg-ifood-red py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center gap-3 text-white"
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

// Weekly Menu Section
const WeeklyMenuSection = () => {
  const [selectedDay, setSelectedDay] = useState(getCurrentDay());
  const currentDay = getCurrentDay();

  const days = [1, 2, 3, 4, 5, 6]; // Segunda a Sábado

  return (
    <section id="cardapio" data-testid="menu-section" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold text-ifood-gray-900 mb-4">
            CARDÁPIO DA <span className="text-ifood-red">SEMANA</span>
          </h2>
          <p className="text-ifood-gray-600 text-lg max-w-2xl mx-auto">
            Cada dia um prato especial diferente! Clique no dia para ver o cardápio.
          </p>
        </motion.div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`day-tab px-4 md:px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                selectedDay === day
                  ? "active bg-ifood-red text-white"
                  : "bg-ifood-gray-100 text-ifood-gray-700 hover:bg-ifood-gray-200"
              } ${currentDay === day ? "ring-2 ring-ifood-red ring-offset-2" : ""}`}
              data-testid={`day-btn-${day}`}
            >
              {WEEKLY_MENU[day].shortDay}
              {currentDay === day && (
                <span className="ml-2 text-xs bg-white text-ifood-red px-2 py-0.5 rounded-full">HOJE</span>
              )}
            </button>
          ))}
        </div>

        {/* Selected Day Menu */}
        <motion.div
          key={selectedDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-ifood-gray-50 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={WEEKLY_MENU[selectedDay].image}
                  alt={WEEKLY_MENU[selectedDay].name}
                  className="w-full h-full object-cover"
                />
                {WEEKLY_MENU[selectedDay].special && (
                  <div className="absolute top-4 left-4 bg-ifood-yellow text-ifood-gray-900 font-bold px-4 py-2 rounded-full">
                    ESPECIAL
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-ifood-red font-bold text-sm mb-2">
                  {WEEKLY_MENU[selectedDay].day.toUpperCase()}
                </span>
                <h3 className="font-oswald text-3xl font-bold text-ifood-gray-900 mb-4">
                  {WEEKLY_MENU[selectedDay].name}
                </h3>
                <p className="text-ifood-gray-600 mb-6">
                  {WEEKLY_MENU[selectedDay].description}
                </p>

                {/* Prices */}
                <div className="flex gap-4 mb-8">
                  {Object.entries(WEEKLY_MENU[selectedDay].prices).map(([size, price]) => (
                    <div key={size} className="text-center">
                      <span className="block text-xs text-ifood-gray-500 uppercase">{size}</span>
                      <span className="font-oswald text-2xl text-ifood-red font-bold">R${price}</span>
                    </div>
                  ))}
                </div>

                {/* Order Button */}
                <a
                  href={`${BUSINESS.whatsapp}?text=Olá! Gostaria de pedir: ${WEEKLY_MENU[selectedDay].name} (${WEEKLY_MENU[selectedDay].day})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 bg-ifood-red text-white hover:bg-ifood-red-dark font-bold px-8 py-4 rounded-full transition-all duration-300"
                  data-testid={`order-btn-day-${selectedDay}`}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Pedir Agora
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* View Full Menu CTA */}
        <motion.div {...fadeInUp} className="text-center mt-12">
          <a
            href={BUSINESS.store}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ifood-red hover:text-ifood-red-dark font-bold transition-colors"
            data-testid="view-full-menu-btn"
          >
            <ExternalLink className="w-5 h-5" />
            Ver Cardápio Completo na Loja Online
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection = () => {
  return (
    <section className="bg-ifood-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-10">
          <h2 className="font-oswald text-2xl sm:text-3xl font-bold text-ifood-gray-900 mb-2">
            NOSSAS <span className="text-ifood-red">MARMITAS</span>
          </h2>
          <p className="text-ifood-gray-600">Feitas com carinho todos os dias</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="img-zoom rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-40 md:h-48 object-cover"
              />
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
    <section id="entrega" data-testid="delivery-section" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div {...fadeInUp}>
            <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold text-ifood-gray-900 mb-6">
              ENTREGAMOS NA <span className="text-ifood-red">SUA PORTA!</span>
            </h2>
            <p className="text-lg text-ifood-gray-600 mb-10">
              Peça pelo WhatsApp ou pela nossa loja online. Entrega grátis na região de Campo Grande!
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
                  <div className="p-3 bg-ifood-red/10 rounded-xl">
                    <feature.icon className="w-6 h-6 text-ifood-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ifood-gray-900 text-lg">{feature.title}</h3>
                    <p className="text-ifood-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 bg-ifood-red text-white hover:bg-ifood-red-dark font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
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
            <div className="rounded-3xl overflow-hidden shadow-2xl">
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

// How It Works Section
const HowItWorksSection = () => {
  return (
    <section id="como-funciona" data-testid="how-it-works-section" className="bg-ifood-gray-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold text-ifood-gray-900 mb-4">
            COMO <span className="text-ifood-red">FUNCIONA</span>
          </h2>
          <p className="text-ifood-gray-600 text-lg">Pedir sua marmita é simples e rápido!</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center relative"
              data-testid={`step-${index + 1}`}
            >
              {/* Connector line */}
              {index < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-ifood-gray-200" />
              )}
              
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-ifood-red/10 border-2 border-ifood-red rounded-full mb-6 z-10">
                <step.icon className="w-8 h-8 text-ifood-red" />
              </div>
              <div className="font-oswald text-sm text-ifood-red font-bold mb-2">PASSO {index + 1}</div>
              <h3 className="font-oswald text-xl font-bold text-ifood-gray-900 mb-2">{step.title}</h3>
              <p className="text-ifood-gray-600 text-sm">{step.description}</p>
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
    <section data-testid="testimonials-section" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold text-ifood-gray-900 mb-4">
            O QUE DIZEM <span className="text-ifood-red">NOSSOS CLIENTES</span>
          </h2>
          <p className="text-ifood-gray-600 text-lg">A opinião de quem já provou nossas marmitas</p>
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
              className="testimonial-card bg-ifood-gray-50 p-8 rounded-2xl"
              data-testid={`testimonial-${testimonial.id}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-ifood-yellow text-ifood-yellow" />
                ))}
              </div>

              {/* Text */}
              <p className="text-ifood-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-ifood-red"
                />
                <span className="font-bold text-ifood-gray-900">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Location Section with Google Maps
const LocationSection = () => {
  return (
    <section id="localizacao" data-testid="location-section" className="bg-ifood-gray-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold text-ifood-gray-900 mb-4">
            NOSSA <span className="text-ifood-red">LOCALIZAÇÃO</span>
          </h2>
          <p className="text-ifood-gray-600 text-lg">Venha nos visitar ou peça delivery!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="map-container h-[400px] bg-ifood-gray-200 rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.8894012018543!2d-54.62878368508556!3d-20.44882718635073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e6726b4d4c27%3A0x9f7c96d7e9f8f8f8!2sCampo%20Grande%2C%20MS!5e0!3m2!1spt-BR!2sbr!4v1709999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Marmitaria da Xai"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-ifood-red/10 rounded-xl">
                <MapPinned className="w-6 h-6 text-ifood-red" />
              </div>
              <div>
                <h3 className="font-bold text-ifood-gray-900 text-lg">Endereço</h3>
                <p className="text-ifood-gray-600">{BUSINESS.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-ifood-red/10 rounded-xl">
                <Clock className="w-6 h-6 text-ifood-red" />
              </div>
              <div>
                <h3 className="font-bold text-ifood-gray-900 text-lg">Horário</h3>
                <p className="text-ifood-gray-600">{BUSINESS.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-ifood-red/10 rounded-xl">
                <Phone className="w-6 h-6 text-ifood-red" />
              </div>
              <div>
                <h3 className="font-bold text-ifood-gray-900 text-lg">WhatsApp</h3>
                <a href={BUSINESS.whatsapp} className="text-ifood-red hover:text-ifood-red-dark font-medium">
                  {BUSINESS.phone}
                </a>
              </div>
            </div>

            <a
              href={BUSINESS.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ifood-gray-900 text-white hover:bg-ifood-gray-800 font-bold px-6 py-3 rounded-full transition-all duration-300"
              data-testid="open-maps-btn"
            >
              <MapPin className="w-5 h-5" />
              Abrir no Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const today = getCurrentDay();
  const todayMenu = WEEKLY_MENU[today];
  
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    address: "",
    marmita: todayMenu.name,
    size: "M",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Novo Pedido - Marmitaria da Xai*%0A%0A👤 *Nome:* ${formData.name}%0A📱 *WhatsApp:* ${formData.whatsapp}%0A📍 *Endereço:* ${formData.address}%0A🍽️ *Marmita:* ${formData.marmita} (${formData.size})%0A📝 *Observações:* ${formData.notes || "Nenhuma"}`;
    window.open(`${BUSINESS.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <section id="contato" data-testid="contact-section" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div {...fadeInUp}>
            <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold text-ifood-gray-900 mb-6">
              FAÇA SEU <span className="text-ifood-red">PEDIDO</span>
            </h2>
            <p className="text-ifood-gray-600 mb-10">
              Preencha o formulário ou entre em contato pelo WhatsApp. Sua marmita quentinha está a um clique de distância!
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-ifood-red flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-ifood-gray-900">Endereço</h3>
                  <p className="text-ifood-gray-600">{BUSINESS.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-ifood-red flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-ifood-gray-900">WhatsApp</h3>
                  <a href={BUSINESS.whatsapp} className="text-ifood-red hover:text-ifood-red-dark font-medium">
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-ifood-red flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-ifood-gray-900">Horário</h3>
                  <p className="text-ifood-gray-600">{BUSINESS.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ExternalLink className="w-6 h-6 text-ifood-red flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-ifood-gray-900">Loja Online</h3>
                  <a
                    href={BUSINESS.store}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ifood-red hover:text-ifood-red-dark font-medium"
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
            <form onSubmit={handleSubmit} className="bg-ifood-gray-50 p-8 rounded-2xl" data-testid="order-form">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-ifood-gray-700 mb-2">Nome</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3 bg-white border border-ifood-gray-300 rounded-xl text-ifood-gray-900 placeholder-ifood-gray-400 focus:outline-none transition-all duration-300"
                    placeholder="Seu nome"
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ifood-gray-700 mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3 bg-white border border-ifood-gray-300 rounded-xl text-ifood-gray-900 placeholder-ifood-gray-400 focus:outline-none transition-all duration-300"
                    placeholder="(67) 99999-9999"
                    data-testid="input-whatsapp"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ifood-gray-700 mb-2">Endereço de Entrega</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3 bg-white border border-ifood-gray-300 rounded-xl text-ifood-gray-900 placeholder-ifood-gray-400 focus:outline-none transition-all duration-300"
                    placeholder="Rua, número, bairro"
                    data-testid="input-address"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ifood-gray-700 mb-2">Marmita</label>
                    <select
                      name="marmita"
                      value={formData.marmita}
                      onChange={handleChange}
                      required
                      className="form-input w-full px-4 py-3 bg-white border border-ifood-gray-300 rounded-xl text-ifood-gray-900 focus:outline-none transition-all duration-300"
                      data-testid="select-marmita"
                    >
                      {Object.values(WEEKLY_MENU).map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name} ({item.shortDay})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ifood-gray-700 mb-2">Tamanho</label>
                    <select
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      required
                      className="form-input w-full px-4 py-3 bg-white border border-ifood-gray-300 rounded-xl text-ifood-gray-900 focus:outline-none transition-all duration-300"
                      data-testid="select-size"
                    >
                      <option value="P">P - Pequeno</option>
                      <option value="M">M - Médio</option>
                      <option value="G">G - Grande</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ifood-gray-700 mb-2">Observações</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="form-input w-full px-4 py-3 bg-white border border-ifood-gray-300 rounded-xl text-ifood-gray-900 placeholder-ifood-gray-400 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Ex: Sem cebola, bem passado..."
                    data-testid="textarea-notes"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 bg-ifood-red text-white hover:bg-ifood-red-dark font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
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
    <footer data-testid="footer" className="bg-ifood-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-ifood-red rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <span className="font-oswald text-2xl text-white font-bold">Marmitaria da Xai</span>
            </div>
            <p className="text-ifood-gray-400 mb-4">{BUSINESS.slogan}</p>
            <div className="flex items-center gap-4">
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-ifood-red transition-colors"
                data-testid="footer-instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-ifood-red transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-oswald text-lg font-bold text-white mb-4">CONTATO</h3>
            <div className="space-y-3 text-ifood-gray-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-ifood-red" />
                {BUSINESS.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-ifood-red" />
                {BUSINESS.phone}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-ifood-red" />
                {BUSINESS.hours}
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-oswald text-lg font-bold text-white mb-4">LINKS ÚTEIS</h3>
            <div className="space-y-3">
              <a href="#cardapio" className="block text-ifood-gray-400 hover:text-white transition-colors">
                Cardápio da Semana
              </a>
              <a
                href={BUSINESS.store}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-ifood-gray-400 hover:text-white transition-colors"
              >
                Loja Online
              </a>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-ifood-gray-400 hover:text-white transition-colors"
              >
                {BUSINESS.instagram}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-ifood-gray-800 pt-8 text-center">
          <p className="text-ifood-gray-500 text-sm">
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
      <WeeklyMenuSection />
      <GallerySection />
      <DeliverySection />
      <HowItWorksSection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}

export default App;
