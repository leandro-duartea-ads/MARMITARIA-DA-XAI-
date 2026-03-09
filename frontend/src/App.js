import { useState, useEffect } from "react";
import "@/App.css";
import ProtecaoSenha from "./ProtecaoSenha";
import { motion, AnimatePresence } from "framer-motion";
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
  Lock,
  ShoppingBag,
  Plus,
  Minus,
  Coffee,
  Banknote,
  QrCode,
  Wallet,
  AlertCircle,
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
  mapsLink: "https://www.google.com/maps/search/Rua+Almirante+Cochrane,+Campo+Grande+-+MS",
};

// Days of the week with cardápio (0 = Sunday, 1 = Monday, etc.)
const WEEKLY_MENU = {
  1: {
    day: "Segunda-feira",
    shortDay: "SEG",
    name: "Strogonoff de Frango",
    description: "Cremoso strogonoff com arroz branco e batata palha crocante. Acompanha salada.",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/8bla0e5z_WhatsApp%20Image%202026-03-05%20at%2022.06.17.jpeg",
    prices: { P: 18, M: 22, G: 28 },
  },
  2: {
    day: "Terça-feira",
    shortDay: "TER",
    name: "Bife Acebolado",
    description: "Bife macio acebolado com macarrão alho e óleo e purê de batata. Acompanha salada.",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/a7zzflsv_WhatsApp%20Image%202026-03-05%20at%2022.06.24.jpeg",
    prices: { P: 18, M: 22, G: 28 },
  },
  3: {
    day: "Quarta-feira",
    shortDay: "QUA",
    name: "Frango Assado",
    description: "Coxa e sobrecoxa assadas no tempero especial da casa, com macarrão e creme de milho.",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/neym25av_WhatsApp%20Image%202026-03-05%20at%2022.06.24%20%281%29.jpeg",
    prices: { P: 18, M: 22, G: 28 },
  },
  4: {
    day: "Quinta-feira",
    shortDay: "QUI",
    name: "Picadinho de Carne",
    description: "Cubos de carne macios ao molho com legumes, macarrão e acompanhamentos variados.",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/ubew9qcb_WhatsApp%20Image%202026-03-05%20at%2022.06.18.jpeg",
    prices: { P: 18, M: 22, G: 28 },
  },
  5: {
    day: "Sexta-feira",
    shortDay: "SEX",
    name: "Frango à Parmegiana",
    description: "Filé empanado com molho de tomate, queijo gratinado, purê e couve refogada.",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/73lcrb6j_WhatsApp%20Image%202026-03-05%20at%2022.06.21.jpeg",
    prices: { P: 18, M: 22, G: 28 },
  },
  6: {
    day: "Sábado",
    shortDay: "SÁB",
    name: "Feijoada da Xai",
    description: "Feijoada completa com arroz, couve refogada, farofa, banana frita e laranja.",
    image: "https://customer-assets.emergentagent.com/job_marmitaria-xai/artifacts/tbd64jgf_WhatsApp%20Image%202026-03-05%20at%2022.06.26.jpeg",
    prices: { P: 20, M: 24, G: 28 },
    special: true,
  },
};

// Bebidas disponíveis
const BEVERAGES = [
  { id: 1, name: "Suco de Laranja Natural", price: 8 },
  { id: 2, name: "Suco de Maracujá", price: 7 },
  { id: 3, name: "Suco de Limão", price: 6 },
  { id: 4, name: "Coca-Cola Lata", price: 6 },
  { id: 5, name: "Guaraná Lata", price: 5 },
  { id: 6, name: "Água Mineral", price: 3 },
];

// Sobremesas disponíveis
const DESSERTS = [
  { id: 1, name: "Tortinhas de Mousse de Maracujá com Chocolate", price: 7 },
  { id: 2, name: "Pudim de Leite Condensado com Leite Ninho", price: 6 },
];

// Formas de pagamento
const PAYMENT_METHODS = [
  { id: "pix", name: "Pix", icon: QrCode },
  { id: "dinheiro", name: "Dinheiro", icon: Banknote },
  { id: "cartao", name: "Cartão (na entrega)", icon: CreditCard },
];

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
  return day === 0 ? 1 : day; // Se for domingo, mostra segunda
};

// Cake/Dessert Icon
const CakeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
    <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
    <path d="M2 21h20" />
    <path d="M7 8v3" />
    <path d="M12 8v3" />
    <path d="M17 8v3" />
    <path d="M7 4h.01" />
    <path d="M12 4h.01" />
    <path d="M17 4h.01" />
  </svg>
);

// Order Popup Component
const OrderPopup = ({ isOpen, onClose, todayMenu }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    reference: "",
    marmitas: { P: 0, M: 0, G: 0 },
    beverages: [],
    desserts: [],
    paymentMethod: "pix",
    change: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateMarmitaQty = (size, delta) => {
    setFormData({
      ...formData,
      marmitas: {
        ...formData.marmitas,
        [size]: Math.max(0, formData.marmitas[size] + delta)
      }
    });
  };

  const handleBeverageToggle = (beverage) => {
    const exists = formData.beverages.find(b => b.id === beverage.id);
    if (exists) {
      setFormData({
        ...formData,
        beverages: formData.beverages.filter(b => b.id !== beverage.id)
      });
    } else {
      setFormData({
        ...formData,
        beverages: [...formData.beverages, { ...beverage, qty: 1 }]
      });
    }
  };

  const updateBeverageQty = (id, delta) => {
    setFormData({
      ...formData,
      beverages: formData.beverages.map(b => 
        b.id === id ? { ...b, qty: Math.max(1, b.qty + delta) } : b
      )
    });
  };

  const handleDessertToggle = (dessert) => {
    const exists = formData.desserts.find(d => d.id === dessert.id);
    if (exists) {
      setFormData({
        ...formData,
        desserts: formData.desserts.filter(d => d.id !== dessert.id)
      });
    } else {
      setFormData({
        ...formData,
        desserts: [...formData.desserts, { ...dessert, qty: 1 }]
      });
    }
  };

  const updateDessertQty = (id, delta) => {
    setFormData({
      ...formData,
      desserts: formData.desserts.map(d => 
        d.id === id ? { ...d, qty: Math.max(1, d.qty + delta) } : d
      )
    });
  };

  const getTotalMarmitas = () => {
    return formData.marmitas.P + formData.marmitas.M + formData.marmitas.G;
  };

  const calculateTotal = () => {
    const marmitaPrice = 
      (formData.marmitas.P * todayMenu.prices.P) +
      (formData.marmitas.M * todayMenu.prices.M) +
      (formData.marmitas.G * todayMenu.prices.G);
    const beveragesPrice = formData.beverages.reduce((acc, b) => acc + (b.price * b.qty), 0);
    const dessertsPrice = formData.desserts.reduce((acc, d) => acc + (d.price * d.qty), 0);
    return marmitaPrice + beveragesPrice + dessertsPrice;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (getTotalMarmitas() === 0) {
      alert("Por favor, selecione pelo menos uma marmita!");
      return;
    }
    
    let message = `*🍽️ NOVO PEDIDO - Marmitaria da Xai*%0A%0A`;
    message += `👤 *Cliente:* ${formData.name}%0A`;
    message += `📱 *Telefone:* ${formData.phone}%0A`;
    message += `📍 *Endereço:* ${formData.address}%0A`;
    if (formData.reference) {
      message += `🏠 *Ponto de Referência:* ${formData.reference}%0A`;
    }
    message += `%0A`;
    message += `*━━━ PEDIDO ━━━*%0A`;
    message += `🍱 *${todayMenu.name}*%0A`;
    
    if (formData.marmitas.P > 0) {
      message += `   P (Pequena) x${formData.marmitas.P} - R$ ${(formData.marmitas.P * todayMenu.prices.P).toFixed(2)}%0A`;
    }
    if (formData.marmitas.M > 0) {
      message += `   M (Média) x${formData.marmitas.M} - R$ ${(formData.marmitas.M * todayMenu.prices.M).toFixed(2)}%0A`;
    }
    if (formData.marmitas.G > 0) {
      message += `   G (Grande) x${formData.marmitas.G} - R$ ${(formData.marmitas.G * todayMenu.prices.G).toFixed(2)}%0A`;
    }
    
    if (formData.beverages.length > 0) {
      message += `%0A🥤 *Bebidas:*%0A`;
      formData.beverages.forEach(b => {
        message += `   ${b.name} x${b.qty} - R$ ${(b.price * b.qty).toFixed(2)}%0A`;
      });
    }

    if (formData.desserts.length > 0) {
      message += `%0A🍰 *Sobremesas:*%0A`;
      formData.desserts.forEach(d => {
        message += `   ${d.name} x${d.qty} - R$ ${(d.price * d.qty).toFixed(2)}%0A`;
      });
    }
    
    message += `%0A*━━━━━━━━━━━━━━━*%0A`;
    message += `💰 *TOTAL: R$ ${calculateTotal().toFixed(2)}*%0A`;
    message += `%0A`;
    message += `💳 *Pagamento:* ${PAYMENT_METHODS.find(p => p.id === formData.paymentMethod)?.name}%0A`;
    
    if (formData.paymentMethod === "dinheiro" && formData.change) {
      message += `💵 *Troco para:* R$ ${formData.change}%0A`;
    }
    
    if (formData.notes) {
      message += `%0A📝 *Observações:* ${formData.notes}`;
    }
    
    window.open(`${BUSINESS.whatsapp}?text=${message}`, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          data-testid="order-popup"
        >
          {/* Header */}
          <div className="sticky top-0 bg-ifood-red text-white p-4 sm:p-6 rounded-t-3xl z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6" />
                <h2 className="font-oswald text-xl sm:text-2xl font-bold">FAZER PEDIDO</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                data-testid="close-popup-btn"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-white/80 text-sm mt-2">Cardápio de hoje: {todayMenu.name}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-5">
            {/* Dados pessoais */}
            <div className="space-y-4">
              <h3 className="font-bold text-ifood-gray-900 flex items-center gap-2">
                <div className="w-6 h-6 bg-ifood-red text-white rounded-full flex items-center justify-center text-sm">1</div>
                Seus Dados
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-ifood-gray-700 mb-1">Nome *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-ifood-gray-300 rounded-xl focus:ring-2 focus:ring-ifood-red focus:border-transparent transition-all"
                  placeholder="Seu nome completo"
                  data-testid="popup-input-name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ifood-gray-700 mb-1">WhatsApp *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-ifood-gray-300 rounded-xl focus:ring-2 focus:ring-ifood-red focus:border-transparent transition-all"
                  placeholder="(67) 99999-9999"
                  data-testid="popup-input-phone"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ifood-gray-700 mb-1">Endereço de Entrega *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-ifood-gray-300 rounded-xl focus:ring-2 focus:ring-ifood-red focus:border-transparent transition-all"
                  placeholder="Rua, número, bairro"
                  data-testid="popup-input-address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ifood-gray-700 mb-1">Ponto de Referência</label>
                <input
                  type="text"
                  name="reference"
                  value={formData.reference}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-ifood-gray-300 rounded-xl focus:ring-2 focus:ring-ifood-red focus:border-transparent transition-all"
                  placeholder="Ex: Próximo ao mercado, casa azul..."
                  data-testid="popup-input-reference"
                />
              </div>
            </div>

            {/* Marmita */}
            <div className="space-y-4">
              <h3 className="font-bold text-ifood-gray-900 flex items-center gap-2">
                <div className="w-6 h-6 bg-ifood-red text-white rounded-full flex items-center justify-center text-sm">2</div>
                Suas Marmitas
                {getTotalMarmitas() > 0 && (
                  <span className="ml-auto bg-ifood-red text-white text-xs px-2 py-1 rounded-full">
                    {getTotalMarmitas()} {getTotalMarmitas() === 1 ? 'unidade' : 'unidades'}
                  </span>
                )}
              </h3>

              <div className="bg-ifood-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={todayMenu.image}
                    alt={todayMenu.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-ifood-gray-900">{todayMenu.name}</h4>
                    <p className="text-sm text-ifood-gray-600">{todayMenu.day}</p>
                  </div>
                </div>

                {/* Tamanhos com quantidade individual */}
                <div className="space-y-3">
                  {Object.entries(todayMenu.prices).map(([size, price]) => {
                    const sizeLabels = { P: "Pequena", M: "Média", G: "Grande" };
                    return (
                      <div
                        key={size}
                        className={`p-3 rounded-xl border-2 transition-all ${
                          formData.marmitas[size] > 0
                            ? "border-ifood-red bg-ifood-red/5"
                            : "border-ifood-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-bold text-ifood-gray-900">{size}</span>
                            <span className="text-sm text-ifood-gray-500 ml-2">({sizeLabels[size]})</span>
                            <span className="block text-ifood-red font-bold">R$ {price},00</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => updateMarmitaQty(size, -1)}
                              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                                formData.marmitas[size] > 0 
                                  ? "border-ifood-red text-ifood-red hover:bg-ifood-red/10" 
                                  : "border-ifood-gray-300 text-ifood-gray-400"
                              }`}
                              data-testid={`size-${size}-minus`}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-bold text-lg">{formData.marmitas[size]}</span>
                            <button
                              type="button"
                              onClick={() => updateMarmitaQty(size, 1)}
                              className="w-8 h-8 rounded-full bg-ifood-red text-white flex items-center justify-center hover:bg-ifood-red-dark transition-colors"
                              data-testid={`size-${size}-plus`}
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bebidas */}
            <div className="space-y-4">
              <h3 className="font-bold text-ifood-gray-900 flex items-center gap-2">
                <div className="w-6 h-6 bg-ifood-red text-white rounded-full flex items-center justify-center text-sm">3</div>
                Adicionar Bebida?
                <span className="text-sm font-normal text-ifood-gray-500">(opcional)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {BEVERAGES.map((beverage) => {
                  const selected = formData.beverages.find(b => b.id === beverage.id);
                  return (
                    <div
                      key={beverage.id}
                      className={`p-3 rounded-xl border-2 transition-all cursor-pointer ${
                        selected
                          ? "border-ifood-red bg-ifood-red/5"
                          : "border-ifood-gray-200 hover:border-ifood-gray-300"
                      }`}
                      onClick={() => handleBeverageToggle(beverage)}
                      data-testid={`beverage-${beverage.id}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Coffee className="w-4 h-4 text-ifood-gray-500" />
                          <span className="text-sm font-medium">{beverage.name}</span>
                        </div>
                        <span className="text-ifood-red font-bold text-sm">R${beverage.price}</span>
                      </div>
                      {selected && (
                        <div className="flex items-center justify-end gap-2 mt-2">
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); updateBeverageQty(beverage.id, -1); }}
                            className="w-6 h-6 rounded-full border border-ifood-gray-300 flex items-center justify-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-bold">{selected.qty}</span>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); updateBeverageQty(beverage.id, 1); }}
                            className="w-6 h-6 rounded-full bg-ifood-red text-white flex items-center justify-center"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sobremesas */}
            <div className="space-y-4">
              <h3 className="font-bold text-ifood-gray-900 flex items-center gap-2">
                <div className="w-6 h-6 bg-ifood-red text-white rounded-full flex items-center justify-center text-sm">4</div>
                Adicionar Sobremesa?
                <span className="text-sm font-normal text-ifood-gray-500">(opcional)</span>
              </h3>

              <div className="grid grid-cols-1 gap-2">
                {DESSERTS.map((dessert) => {
                  const selected = formData.desserts.find(d => d.id === dessert.id);
                  return (
                    <div
                      key={dessert.id}
                      className={`p-3 rounded-xl border-2 transition-all cursor-pointer ${
                        selected
                          ? "border-ifood-red bg-ifood-red/5"
                          : "border-ifood-gray-200 hover:border-ifood-gray-300"
                      }`}
                      onClick={() => handleDessertToggle(dessert)}
                      data-testid={`dessert-${dessert.id}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CakeIcon className="w-4 h-4 text-ifood-gray-500" />
                          <span className="text-sm font-medium">{dessert.name}</span>
                        </div>
                        <span className="text-ifood-red font-bold text-sm">R${dessert.price}</span>
                      </div>
                      {selected && (
                        <div className="flex items-center justify-end gap-2 mt-2">
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); updateDessertQty(dessert.id, -1); }}
                            className="w-6 h-6 rounded-full border border-ifood-gray-300 flex items-center justify-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-bold">{selected.qty}</span>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); updateDessertQty(dessert.id, 1); }}
                            className="w-6 h-6 rounded-full bg-ifood-red text-white flex items-center justify-center"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pagamento */}
            <div className="space-y-4">
              <h3 className="font-bold text-ifood-gray-900 flex items-center gap-2">
                <div className="w-6 h-6 bg-ifood-red text-white rounded-full flex items-center justify-center text-sm">5</div>
                Forma de Pagamento
              </h3>

              <div className="grid grid-cols-3 gap-2">
                {PAYMENT_METHODS.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: method.id, change: "" })}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      formData.paymentMethod === method.id
                        ? "border-ifood-red bg-ifood-red/5"
                        : "border-ifood-gray-200 hover:border-ifood-gray-300"
                    }`}
                    data-testid={`payment-${method.id}`}
                  >
                    <method.icon className="w-5 h-5 mx-auto mb-1 text-ifood-gray-700" />
                    <span className="block text-xs font-medium">{method.name}</span>
                  </button>
                ))}
              </div>

              {formData.paymentMethod === "dinheiro" && (
                <div>
                  <label className="block text-sm font-medium text-ifood-gray-700 mb-1">Troco para quanto?</label>
                  <input
                    type="text"
                    name="change"
                    value={formData.change}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-ifood-gray-300 rounded-xl focus:ring-2 focus:ring-ifood-red focus:border-transparent transition-all"
                    placeholder="Ex: R$ 50,00"
                    data-testid="popup-input-change"
                  />
                </div>
              )}
            </div>

            {/* Observações */}
            <div>
              <label className="block text-sm font-medium text-ifood-gray-700 mb-1">Observações</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-3 border border-ifood-gray-300 rounded-xl focus:ring-2 focus:ring-ifood-red focus:border-transparent transition-all resize-none"
                placeholder="Ex: Sem cebola, bem passado..."
                data-testid="popup-textarea-notes"
              />
            </div>

            {/* Total e Submit */}
            <div className="sticky bottom-0 bg-white pt-4 border-t border-ifood-gray-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium text-ifood-gray-700">Total do Pedido:</span>
                <span className="text-2xl font-bold text-ifood-red">R$ {calculateTotal().toFixed(2)}</span>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 rounded-full hover:bg-[#1da851] transition-all shadow-lg"
                data-testid="popup-submit-btn"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Enviar Pedido pelo WhatsApp
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Day Locked Modal
const DayLockedModal = ({ isOpen, onClose, clickedDay, todayMenu }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-2xl w-full max-w-sm p-6 text-center shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          data-testid="day-locked-modal"
        >
          <div className="w-16 h-16 bg-ifood-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-ifood-red" />
          </div>
          <h3 className="font-oswald text-xl font-bold text-ifood-gray-900 mb-2">
            CARDÁPIO INDISPONÍVEL
          </h3>
          <p className="text-ifood-gray-600 mb-4">
            O cardápio de <strong>{WEEKLY_MENU[clickedDay]?.day}</strong> ({WEEKLY_MENU[clickedDay]?.name}) só está disponível nesse dia.
          </p>
          <div className="bg-ifood-gray-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-ifood-gray-500 mb-1">Cardápio de hoje:</p>
            <p className="font-bold text-ifood-red text-lg">{todayMenu.name}</p>
            <p className="text-sm text-ifood-gray-600">{todayMenu.day}</p>
          </div>
          <button
            onClick={onClose}
            className="w-full bg-ifood-red text-white font-bold py-3 rounded-full hover:bg-ifood-red-dark transition-colors"
            data-testid="close-locked-modal-btn"
          >
            Entendi!
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Navbar Component
const Navbar = ({ onOrderClick }) => {
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
            <span className="font-oswald text-lg sm:text-xl md:text-2xl text-ifood-gray-900 font-bold tracking-wide">
              Marmitaria da <span className="text-ifood-red">Xai</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
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
            <button
              onClick={onOrderClick}
              className="btn-primary bg-ifood-red text-white hover:bg-ifood-red-dark font-bold px-6 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2"
              data-testid="nav-order-btn"
            >
              <ShoppingBag className="w-4 h-4" />
              Pedir Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-ifood-gray-700"
            data-testid="mobile-menu-btn"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 ${
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
          <button
            onClick={() => { setIsMobileMenuOpen(false); onOrderClick(); }}
            className="w-full text-center bg-ifood-red text-white hover:bg-ifood-red-dark font-bold px-6 py-3 rounded-full transition-all duration-300"
          >
            Pedir Agora
          </button>
        </div>
      </div>
    </nav>
  );
};

// Hero Section with Today's Menu
const HeroSection = ({ onOrderClick }) => {
  const today = getCurrentDay();
  const todayMenu = WEEKLY_MENU[today];

  return (
    <section data-testid="hero-section" className="relative min-h-screen bg-gradient-to-br from-ifood-gray-50 to-white pt-20 md:pt-0 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div {...fadeInUp} className="text-center md:text-left order-2 md:order-1">
            {/* Today Badge */}
            <div className="inline-flex items-center gap-2 bg-ifood-red/10 text-ifood-red px-4 py-2 rounded-full mb-4 md:mb-6 today-badge">
              <Calendar className="w-4 h-4" />
              <span className="font-bold text-sm">{todayMenu.day.toUpperCase()}</span>
            </div>

            <h1 className="font-oswald text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-ifood-gray-900 mb-3 md:mb-4">
              CARDÁPIO DE <span className="text-ifood-red">HOJE</span>
            </h1>
            <h2 className="font-oswald text-xl sm:text-2xl lg:text-3xl text-ifood-red mb-3 md:mb-4">
              {todayMenu.name}
            </h2>
            <p className="text-base lg:text-lg text-ifood-gray-600 mb-4 md:mb-6 max-w-lg mx-auto md:mx-0">
              {todayMenu.description}
            </p>

            {/* Prices */}
            <div className="flex justify-center md:justify-start gap-3 md:gap-4 mb-6 md:mb-8">
              {Object.entries(todayMenu.prices).map(([size, price]) => (
                <div key={size} className="bg-white rounded-xl shadow-md px-4 sm:px-6 py-3 sm:py-4 text-center">
                  <span className="block text-xs sm:text-sm text-ifood-gray-500 uppercase font-medium">{size}</span>
                  <span className="font-oswald text-xl sm:text-2xl text-ifood-red font-bold">R${price}</span>
                </div>
              ))}
            </div>

            {/* Delivery Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-ifood-red text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg mb-6 md:mb-8"
            >
              <Bike className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-bold text-sm sm:text-base">ENTREGA GRÁTIS na região!</span>
            </motion.div>

            {/* Hours */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-ifood-gray-600 mb-6 md:mb-8">
              <Clock className="w-5 h-5 text-ifood-red" />
              <span className="text-sm sm:text-base">{BUSINESS.hours}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button
                onClick={onOrderClick}
                className="btn-primary inline-flex items-center justify-center gap-2 bg-ifood-red text-white hover:bg-ifood-red-dark font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                data-testid="hero-order-btn"
              >
                <ShoppingBag className="w-5 h-5" />
                Fazer Pedido
              </button>
              <a
                href="#cardapio"
                className="inline-flex items-center justify-center gap-2 border-2 border-ifood-red text-ifood-red hover:bg-ifood-red hover:text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300"
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
            className="relative order-1 md:order-2"
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={todayMenu.image}
                alt={todayMenu.name}
                className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
              />
              {todayMenu.special && (
                <div className="absolute top-4 right-4 bg-ifood-yellow text-ifood-gray-900 font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg text-sm">
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
    <section data-testid="features-bar" className="bg-ifood-red py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center gap-2 sm:gap-3 text-white"
            >
              <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="font-bold text-xs sm:text-sm md:text-base">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Weekly Menu Section
const WeeklyMenuSection = ({ onOrderClick }) => {
  const currentDay = getCurrentDay();
  const todayMenu = WEEKLY_MENU[currentDay];
  const [lockedModalOpen, setLockedModalOpen] = useState(false);
  const [clickedDay, setClickedDay] = useState(null);

  const days = [1, 2, 3, 4, 5, 6];

  const handleDayClick = (day) => {
    if (day !== currentDay) {
      setClickedDay(day);
      setLockedModalOpen(true);
    }
  };

  return (
    <section id="cardapio" data-testid="menu-section" className="bg-white py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-8 md:mb-12">
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-ifood-gray-900 mb-3 md:mb-4">
            CARDÁPIO DA <span className="text-ifood-red">SEMANA</span>
          </h2>
          <p className="text-ifood-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Cada dia um prato especial diferente! Pedidos apenas para o cardápio do dia.
          </p>
        </motion.div>

        {/* Day Selector - Locked */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {days.map((day) => {
            const isToday = day === currentDay;
            return (
              <button
                key={day}
                onClick={() => handleDayClick(day)}
                className={`relative px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base transition-all duration-300 ${
                  isToday
                    ? "bg-ifood-red text-white shadow-lg"
                    : "bg-ifood-gray-100 text-ifood-gray-400 cursor-not-allowed"
                }`}
                data-testid={`day-btn-${day}`}
              >
                <span className="flex items-center gap-1 sm:gap-2">
                  {!isToday && <Lock className="w-3 h-3 sm:w-4 sm:h-4" />}
                  {WEEKLY_MENU[day].shortDay}
                  {isToday && (
                    <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs bg-white text-ifood-red px-1.5 sm:px-2 py-0.5 rounded-full">HOJE</span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Today's Menu Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-ifood-gray-50 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-48 sm:h-64 md:h-auto">
                <img
                  src={todayMenu.image}
                  alt={todayMenu.name}
                  className="w-full h-full object-cover"
                />
                {todayMenu.special && (
                  <div className="absolute top-4 left-4 bg-ifood-yellow text-ifood-gray-900 font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm">
                    ESPECIAL
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-ifood-red text-white font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm">
                  DISPONÍVEL HOJE
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                <span className="text-ifood-red font-bold text-sm mb-2">
                  {todayMenu.day.toUpperCase()}
                </span>
                <h3 className="font-oswald text-2xl sm:text-3xl font-bold text-ifood-gray-900 mb-3 md:mb-4">
                  {todayMenu.name}
                </h3>
                <p className="text-ifood-gray-600 mb-4 md:mb-6 text-sm sm:text-base">
                  {todayMenu.description}
                </p>

                {/* Prices */}
                <div className="flex gap-3 sm:gap-4 mb-6 md:mb-8">
                  {Object.entries(todayMenu.prices).map(([size, price]) => (
                    <div key={size} className="text-center">
                      <span className="block text-xs text-ifood-gray-500 uppercase">{size}</span>
                      <span className="font-oswald text-xl sm:text-2xl text-ifood-red font-bold">R${price}</span>
                    </div>
                  ))}
                </div>

                {/* Order Button */}
                <button
                  onClick={onOrderClick}
                  className="btn-primary inline-flex items-center justify-center gap-2 bg-ifood-red text-white hover:bg-ifood-red-dark font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300"
                  data-testid="menu-order-btn"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Pedir Agora
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other days preview */}
        <div className="mt-8 md:mt-12">
          <h3 className="text-center font-oswald text-lg sm:text-xl text-ifood-gray-500 mb-4 md:mb-6">Cardápio dos outros dias</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {days.filter(d => d !== currentDay).map((day) => (
              <div
                key={day}
                className="bg-ifood-gray-100 rounded-xl p-3 sm:p-4 opacity-60 relative overflow-hidden"
                data-testid={`preview-day-${day}`}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-ifood-gray-900/20 z-10">
                  <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-ifood-gray-600" />
                </div>
                <img
                  src={WEEKLY_MENU[day].image}
                  alt={WEEKLY_MENU[day].name}
                  className="w-full h-20 sm:h-24 object-cover rounded-lg mb-2 grayscale"
                />
                <p className="text-xs font-bold text-ifood-gray-500">{WEEKLY_MENU[day].shortDay}</p>
                <p className="text-xs sm:text-sm font-medium text-ifood-gray-700 truncate">{WEEKLY_MENU[day].name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* View Full Menu CTA */}
        <motion.div {...fadeInUp} className="text-center mt-8 md:mt-12">
          <a
            href={BUSINESS.store}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ifood-red hover:text-ifood-red-dark font-bold transition-colors text-sm sm:text-base"
            data-testid="view-full-menu-btn"
          >
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            Ver Cardápio Completo na Loja Online
          </a>
        </motion.div>
      </div>

      {/* Locked Day Modal */}
      <DayLockedModal
        isOpen={lockedModalOpen}
        onClose={() => setLockedModalOpen(false)}
        clickedDay={clickedDay}
        todayMenu={todayMenu}
      />
    </section>
  );
};

// Gallery Section
const GallerySection = () => {
  return (
    <section className="bg-ifood-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-8 md:mb-10">
          <h2 className="font-oswald text-xl sm:text-2xl md:text-3xl font-bold text-ifood-gray-900 mb-2">
            NOSSAS <span className="text-ifood-red">MARMITAS</span>
          </h2>
          <p className="text-ifood-gray-600 text-sm sm:text-base">Feitas com carinho todos os dias</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="img-zoom rounded-xl md:rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-32 sm:h-40 md:h-48 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Delivery Section
const DeliverySection = ({ onOrderClick }) => {
  const deliveryFeatures = [
    { icon: Bike, title: "Delivery Rápido", description: "Entregamos em toda região" },
    { icon: Store, title: "Retirada no Local", description: "Pegue sua marmita fresquinha" },
    { icon: CreditCard, title: "Pagamento Fácil", description: "Dinheiro, Pix ou Cartão" },
  ];

  return (
    <section id="entrega" data-testid="delivery-section" className="bg-white py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div {...fadeInUp}>
            <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-ifood-gray-900 mb-4 md:mb-6">
              ENTREGAMOS NA <span className="text-ifood-red">SUA PORTA!</span>
            </h2>
            <p className="text-base lg:text-lg text-ifood-gray-600 mb-8 md:mb-10">
              Peça pelo WhatsApp ou pela nossa loja online. Entrega grátis na região de Campo Grande!
            </p>

            <div className="grid gap-4 md:gap-6 mb-8 md:mb-10">
              {deliveryFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 md:gap-4"
                >
                  <div className="p-2 sm:p-3 bg-ifood-red/10 rounded-xl">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-ifood-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ifood-gray-900 text-base sm:text-lg">{feature.title}</h3>
                    <p className="text-ifood-gray-600 text-sm sm:text-base">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={onOrderClick}
              className="btn-primary inline-flex items-center gap-2 bg-ifood-red text-white hover:bg-ifood-red-dark font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              data-testid="delivery-order-btn"
            >
              <ShoppingBag className="w-5 h-5" />
              Pedir Agora
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&q=80"
                alt="Entrega de marmitas"
                className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
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
    <section id="como-funciona" data-testid="how-it-works-section" className="bg-ifood-gray-50 py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-12 md:mb-16">
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-ifood-gray-900 mb-3 md:mb-4">
            COMO <span className="text-ifood-red">FUNCIONA</span>
          </h2>
          <p className="text-ifood-gray-600 text-sm sm:text-base lg:text-lg">Pedir sua marmita é simples e rápido!</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
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
              <div className="relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-ifood-red/10 border-2 border-ifood-red rounded-full mb-4 md:mb-6 z-10">
                <step.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-ifood-red" />
              </div>
              <div className="font-oswald text-xs sm:text-sm text-ifood-red font-bold mb-1 md:mb-2">PASSO {index + 1}</div>
              <h3 className="font-oswald text-sm sm:text-base md:text-lg lg:text-xl font-bold text-ifood-gray-900 mb-1 md:mb-2">{step.title}</h3>
              <p className="text-ifood-gray-600 text-xs sm:text-sm">{step.description}</p>
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
    <section data-testid="testimonials-section" className="bg-white py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-12 md:mb-16">
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-ifood-gray-900 mb-3 md:mb-4">
            O QUE DIZEM <span className="text-ifood-red">NOSSOS CLIENTES</span>
          </h2>
          <p className="text-ifood-gray-600 text-sm sm:text-base lg:text-lg">A opinião de quem já provou nossas marmitas</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              className="testimonial-card bg-ifood-gray-50 p-6 md:p-8 rounded-xl md:rounded-2xl"
              data-testid={`testimonial-${testimonial.id}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-ifood-yellow text-ifood-yellow" />
                ))}
              </div>

              {/* Text */}
              <p className="text-ifood-gray-700 mb-4 md:mb-6 leading-relaxed text-sm sm:text-base">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 md:gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-ifood-red"
                />
                <span className="font-bold text-ifood-gray-900 text-sm sm:text-base">{testimonial.name}</span>
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
    <section id="localizacao" data-testid="location-section" className="bg-ifood-gray-50 py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-8 md:mb-12">
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-ifood-gray-900 mb-3 md:mb-4">
            NOSSA <span className="text-ifood-red">LOCALIZAÇÃO</span>
          </h2>
          <p className="text-ifood-gray-600 text-sm sm:text-base lg:text-lg">Venha nos visitar ou peça delivery!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="map-container h-[250px] sm:h-[300px] md:h-[400px] bg-ifood-gray-200 rounded-xl md:rounded-2xl overflow-hidden"
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
            className="space-y-4 md:space-y-6"
          >
            <div className="flex items-start gap-3 md:gap-4">
              <div className="p-2 sm:p-3 bg-ifood-red/10 rounded-xl">
                <MapPinned className="w-5 h-5 sm:w-6 sm:h-6 text-ifood-red" />
              </div>
              <div>
                <h3 className="font-bold text-ifood-gray-900 text-base sm:text-lg">Endereço</h3>
                <p className="text-ifood-gray-600 text-sm sm:text-base">{BUSINESS.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="p-2 sm:p-3 bg-ifood-red/10 rounded-xl">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-ifood-red" />
              </div>
              <div>
                <h3 className="font-bold text-ifood-gray-900 text-base sm:text-lg">Horário</h3>
                <p className="text-ifood-gray-600 text-sm sm:text-base">{BUSINESS.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="p-2 sm:p-3 bg-ifood-red/10 rounded-xl">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-ifood-red" />
              </div>
              <div>
                <h3 className="font-bold text-ifood-gray-900 text-base sm:text-lg">WhatsApp</h3>
                <a href={BUSINESS.whatsapp} className="text-ifood-red hover:text-ifood-red-dark font-medium text-sm sm:text-base">
                  {BUSINESS.phone}
                </a>
              </div>
            </div>

            <a
              href={BUSINESS.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ifood-gray-900 text-white hover:bg-ifood-gray-800 font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base"
              data-testid="open-maps-btn"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              Abrir no Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Contact Section (Simplified - only today's menu)
const ContactSection = ({ onOrderClick }) => {
  const today = getCurrentDay();
  const todayMenu = WEEKLY_MENU[today];

  return (
    <section id="contato" data-testid="contact-section" className="bg-white py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Info */}
          <motion.div {...fadeInUp}>
            <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-ifood-gray-900 mb-4 md:mb-6">
              FAÇA SEU <span className="text-ifood-red">PEDIDO</span>
            </h2>
            <p className="text-ifood-gray-600 mb-6 md:mb-10 text-sm sm:text-base">
              Clique no botão abaixo para fazer seu pedido. Você poderá escolher o tamanho, adicionar bebidas e selecionar a forma de pagamento!
            </p>

            <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              <div className="flex items-start gap-3 md:gap-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-ifood-red flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-ifood-gray-900 text-sm sm:text-base">Endereço</h3>
                  <p className="text-ifood-gray-600 text-sm sm:text-base">{BUSINESS.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-ifood-red flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-ifood-gray-900 text-sm sm:text-base">WhatsApp</h3>
                  <a href={BUSINESS.whatsapp} className="text-ifood-red hover:text-ifood-red-dark font-medium text-sm sm:text-base">
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-ifood-red flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-ifood-gray-900 text-sm sm:text-base">Horário</h3>
                  <p className="text-ifood-gray-600 text-sm sm:text-base">{BUSINESS.hours}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Today's Menu Card with Order Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-ifood-gray-50 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
              <div className="relative">
                <img
                  src={todayMenu.image}
                  alt={todayMenu.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-ifood-red text-white font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm">
                  DISPONÍVEL HOJE
                </div>
              </div>
              <div className="p-5 sm:p-6 md:p-8">
                <span className="text-ifood-red font-bold text-sm">{todayMenu.day.toUpperCase()}</span>
                <h3 className="font-oswald text-xl sm:text-2xl font-bold text-ifood-gray-900 mt-1 mb-2 sm:mb-3">
                  {todayMenu.name}
                </h3>
                <p className="text-ifood-gray-600 text-sm mb-4">{todayMenu.description}</p>
                
                <div className="flex gap-3 sm:gap-4 mb-5 sm:mb-6">
                  {Object.entries(todayMenu.prices).map(([size, price]) => (
                    <div key={size} className="text-center">
                      <span className="block text-xs text-ifood-gray-500 uppercase">{size}</span>
                      <span className="font-oswald text-lg sm:text-xl text-ifood-red font-bold">R${price}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOrderClick}
                  className="w-full flex items-center justify-center gap-2 bg-ifood-red text-white hover:bg-ifood-red-dark font-bold py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg text-sm sm:text-base"
                  data-testid="contact-order-btn"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Fazer Pedido Completo
                </button>

                {/* Other days locked */}
                <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-ifood-gray-200">
                  <p className="text-xs sm:text-sm text-ifood-gray-500 text-center flex items-center justify-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Outros dias do cardápio ficam disponíveis no dia respectivo
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-ifood-gray-900 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-ifood-red rounded-full flex items-center justify-center">
                <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="font-oswald text-xl sm:text-2xl text-white font-bold">Marmitaria da Xai</span>
            </div>
            <p className="text-ifood-gray-400 mb-4 text-sm sm:text-base">{BUSINESS.slogan}</p>
            <div className="flex items-center gap-4">
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-ifood-red transition-colors"
                data-testid="footer-instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-ifood-red transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-oswald text-base sm:text-lg font-bold text-white mb-4">CONTATO</h3>
            <div className="space-y-2 sm:space-y-3 text-ifood-gray-400 text-sm sm:text-base">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-ifood-red flex-shrink-0" />
                <span className="break-words">{BUSINESS.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-ifood-red flex-shrink-0" />
                {BUSINESS.phone}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-ifood-red flex-shrink-0" />
                {BUSINESS.hours}
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-oswald text-base sm:text-lg font-bold text-white mb-4">LINKS ÚTEIS</h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
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
        <div className="border-t border-ifood-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-ifood-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Marmitaria da Xai. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

// WhatsApp Float Button
const WhatsAppFloatButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="whatsapp-pulse fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
      data-testid="whatsapp-float-btn"
      aria-label="Fazer pedido via WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
    </button>
  );
};

// Main App Component
function App() {
  const [orderPopupOpen, setOrderPopupOpen] = useState(false);
  const todayMenu = WEEKLY_MENU[getCurrentDay()];

  const handleOrderClick = () => {
    setOrderPopupOpen(true);
  };

  return (
    <ProtecaoSenha>
      <div className="App">
        <Navbar onOrderClick={handleOrderClick} />
        <HeroSection onOrderClick={handleOrderClick} />
        <FeaturesBar />
        <WeeklyMenuSection onOrderClick={handleOrderClick} />
        <GallerySection />
        <DeliverySection onOrderClick={handleOrderClick} />
        <HowItWorksSection />
        <TestimonialsSection />
        <LocationSection />
        <ContactSection onOrderClick={handleOrderClick} />
        <Footer />
        <WhatsAppFloatButton onClick={handleOrderClick} />
        
        {/* Order Popup */}
        <OrderPopup
          isOpen={orderPopupOpen}
          onClose={() => setOrderPopupOpen(false)}
          todayMenu={todayMenu}
        />
      </div>
    </ProtecaoSenha>
  );
}

export default App;
