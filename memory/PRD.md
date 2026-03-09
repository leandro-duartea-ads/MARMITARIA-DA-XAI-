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

### Versão 4.0 (09/03/2026) - ATUAL

#### Popup de Pedido Completo
- [x] Dados do cliente: Nome, WhatsApp, Endereço, Ponto de Referência
- [x] **Múltiplos tamanhos de marmita** - cada tamanho com seu próprio contador
  - P (Pequena): R$ 18,00
  - M (Média): R$ 22,00
  - G (Grande): R$ 28,00
- [x] Pode pedir várias marmitas de tamanhos diferentes simultaneamente
- [x] Validação: pelo menos 1 marmita obrigatória

#### Bebidas (6 opções)
- Suco de Laranja Natural: R$ 8,00
- Suco de Maracujá: R$ 7,00
- Suco de Limão: R$ 6,00
- Coca-Cola Lata: R$ 6,00
- Guaraná Lata: R$ 5,00
- Água Mineral: R$ 3,00

#### Sobremesas (2 opções)
- [x] Tortinhas de Mousse de Maracujá com Chocolate: R$ 7,00
- [x] Pudim de Leite Condensado com Leite Ninho: R$ 6,00

#### Sistema de Pagamento
- [x] Pix
- [x] Dinheiro (com campo para troco)
- [x] Cartão (na entrega)

#### Cardápio Semanal (travado por dia)
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
- [x] Animações com Framer Motion
- [x] Dias não disponíveis aparecem travados com cadeado
- [x] Total calculado automaticamente

## Stack Técnica
- Frontend: React + Tailwind CSS + Framer Motion
- Componentes: lucide-react (ícones)
- Fontes: Oswald + DM Sans

## Backlog / Próximas Melhorias
- [ ] P1: Ajustar preços reais das marmitas
- [ ] P2: Adicionar mais sobremesas
- [ ] P2: Sistema de cupom de desconto
- [ ] P3: Histórico de pedidos do cliente
