# PRD - Marmitaria da Xai

## Problema Original
Site completo, moderno e profissional para marmitaria "Marmitaria da Xai" em Campo Grande-MS.

## Informações do Negócio
- **Nome:** Marmitaria da Xai
- **Funcionamento:** Segunda a Sábado, 10h às 14h
- **Serviços:** Delivery e Retirada
- **WhatsApp:** (67) 98201-7678
- **Endereço:** Rua Almirante Cochrane — Campo Grande-MS
- **Instagram:** @_marmitaria_xai_
- **Loja Online:** https://pedido.anota.ai/loja/marmita-da-xai?f=msa

## User Personas
1. **Trabalhadores locais** - Buscam almoço rápido e caseiro
2. **Famílias** - Pedem delivery para casa
3. **Clientes de feijoada** - Frequentadores aos sábados

## Core Requirements
- Sistema de cardápio que varia por dia da semana
- Cores estilo iFood (vermelho #EA1D2C e branco)
- Google Maps integrado
- Responsivo mobile-first
- Integração WhatsApp para pedidos

## O Que Foi Implementado

### Versão 1.0 (09/03/2026)
- [x] Site completo com design marrom/dourado
- [x] Cardápio com 6 pratos
- [x] Formulário WhatsApp
- [x] Mobile responsivo

### Versão 2.0 (09/03/2026) - ATUAL
- [x] **Novo design estilo iFood** (vermelho/branco)
- [x] **Sistema de cardápio por dia da semana**
  - Segunda: Strogonoff de Frango
  - Terça: Bife Acebolado
  - Quarta: Frango Assado
  - Quinta: Picadinho de Carne
  - Sexta: Frango à Parmegiana
  - Sábado: Feijoada da Xai
- [x] **Auto-detecção do dia atual** com badge "HOJE"
- [x] **Seletor de dias** para ver cardápio de outros dias
- [x] **Google Maps embed** na seção de localização
- [x] **Galeria de fotos** com 4 imagens extras
- [x] **10 imagens reais** dos pratos fornecidas pelo cliente
- [x] Navbar responsiva com menu hamburger
- [x] Formulário com seleção de marmita e tamanho (P/M/G)
- [x] Botão flutuante WhatsApp
- [x] Animações com Framer Motion

## Stack Técnica
- Frontend: React + Tailwind CSS + Framer Motion
- Componentes: lucide-react (ícones)
- Fontes: Oswald + DM Sans (Google Fonts)
- Maps: Google Maps Embed API

## Backlog / Próximas Melhorias (P1/P2)
- [ ] P1: Ajustar preços reais (atualmente simbólicos)
- [ ] P1: Adicionar mais fotos de pratos específicos
- [ ] P2: Sistema de promoções/combos
- [ ] P2: Integração com sistema de pedidos
- [ ] P2: Chat bot WhatsApp automatizado
