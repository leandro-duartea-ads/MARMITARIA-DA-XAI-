# PRD - Marmitaria da Xai

## Problema Original
Site completo, moderno e profissional para marmitaria "Marmitaria da Xai" em Campo Grande-MS.

## Informações do Negócio
- **Nome:** Marmitaria da Xai
- **Funcionamento:** Segunda a Sábado, 10h às 14h
- **WhatsApp:** (67) 98201-7678
- **Endereço:** Rua Almirante Cochrane — Campo Grande-MS
- **Instagram:** @_marmitaria_xai_

## O Que Foi Implementado

### Versão 3.0 (09/03/2026) - ATUAL

#### Popup de Pedido Completo
- [x] Nome, WhatsApp, Endereço, Ponto de Referência
- [x] Seleção de tamanho (P/M/G) com preços
- [x] Seletor de quantidade (+/-)
- [x] Adicionar bebidas (6 opções com preços)
  - Suco Laranja R$8, Maracujá R$7, Limão R$6
  - Coca Lata R$6, Guaraná R$5, Água R$3
- [x] Forma de pagamento (Pix, Dinheiro, Cartão)
- [x] Campo de troco quando selecionado Dinheiro
- [x] Total calculado automaticamente
- [x] Envio formatado para WhatsApp

#### Sistema de Cardápio por Dia
- [x] Dias travados - só o dia atual é clicável
- [x] Ícone de cadeado nos dias não disponíveis
- [x] Modal "Cardápio Indisponível" ao clicar em outro dia
- [x] Mostra sugestão do cardápio de hoje no modal
- [x] Badge "HOJE" no dia atual

#### Cardápio Semanal
- Segunda: Strogonoff de Frango
- Terça: Bife Acebolado
- Quarta: Frango Assado
- Quinta: Picadinho de Carne
- Sexta: Frango à Parmegiana
- Sábado: Feijoada da Xai

#### Design & UX
- [x] Design estilo iFood (vermelho/branco)
- [x] Google Maps integrado
- [x] 100% responsivo (mobile, tablet, desktop)
- [x] Animações suaves com Framer Motion
- [x] Botão flutuante WhatsApp abre popup

## Stack Técnica
- Frontend: React + Tailwind CSS + Framer Motion
- Componentes: lucide-react (ícones)
- Fontes: Oswald + DM Sans

## Backlog / Próximas Melhorias
- [ ] P1: Ajustar preços reais 
- [ ] P2: Adicionar campo de cupom de desconto
- [ ] P2: Sistema de notificação de pedido confirmado
- [ ] P3: Histórico de pedidos do cliente
