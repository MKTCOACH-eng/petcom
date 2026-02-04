# 🏠 PETCOM — HOME MVP FASE 1
## Documento Maestro: Fuente Única de Verdad

---

## 🎯 VISIÓN GLOBAL

**PETCOM no es solo una tienda.**  
Es una **infraestructura digital para el cuidado de mascotas**.

El proyecto se ejecuta por fases, **sin morir en el intento**.

---

## 📍 PRINCIPIO BASE (CRÍTICO)

Petcom debe parecer una **gran pet store internacional desde el primer segundo**,  
pero revelar su inteligencia solo después del enrolment.

### ESTRATEGIA DE REVELACIÓN:
- **Antes del enrolment** → Home genérico, inspiracional, visual
- **Después del enrolment** → Home personalizado por mascota

---

## 🎨 LÍNEA VISUAL (NO NEGOCIABLE)

### Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| **Coral** | `#e67e73` | Emoción / cercanía |
| **Amarillo** | `#fcbd34` | CTA / acción |
| **Verde** | `#1b375` | Bienestar |
| **Azul** | `#7baaf7` | Pagos / envíos |
| **Morado** | `#6a67c8` | IA / tecnología |

### Estilo Visual

✅ **Fotografía real, protagonista**
- Mascotas + humanos reales
- Planos cerrados + emoción
- CERO ilustraciones infantiles
- Cards grandes, limpias, aireadas
- Tipografía sans moderna, legible (Inter / Manrope)

### Benchmark Visual
> **"Visualmente MÁS editorial y premium que Zooplas"**

---

## 🏗️ COMPONENTES HOME MVP FASE 1

### 1. HERO VIDEO SECTION
- Video loop sin audio (mascotas felices + humanos)
- Overlay sutil con texto inspiracional
- CTA principal en amarillo `#fcbd34`
- Texto: "Todo para el bienestar de tu mejor amigo"
- Responsive (imagen estática en móvil)

### 2. BARRA DE CONFIANZA (Sticky Top)
- Iconos: Pagos seguros + Envío gratis + Garantía
- Color de fondo: Azul `#7baaf7` suave
- Texto breve y claro
- Siempre visible

### 3. LOGOS DE PAQUETERÍAS
- Grid de logos (DHL, FedEx, UPS, etc.)
- Filtro grayscale, color en hover
- Sección limpia y profesional
- Título: "Enviamos con las mejores"

### 4. CHATBOT FLOTANTE
- Posición: bottom-right
- Color: Morado `#6a67c8` (IA/tecnología)
- Icono de chat visible
- IA básica con respuestas predefinidas
- Animación suave al aparecer

### 5. EMAIL SUBSCRIPTION
- Input + botón en amarillo `#fcbd34`
- Placeholder: "Recibe tips de cuidado para tu mascota"
- Validación con Zod
- Guarda en Supabase
- Mensaje de confirmación con animación

---

## ⚙️ CONFIGURACIÓN TÉCNICA

### Tech Stack
- Next.js 16 + TypeScript + App Router
- Tailwind CSS (con paleta personalizada)
- Supabase (database + storage)
- Shadcn/ui (componentes base)
- Zod (validaciones)
- Framer Motion (animaciones suaves)

### Supabase Configuration
- URL: `https://yxdamvwvnbkukcyzcemx.supabase.co`
- Anon Key: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4ZGFtdnd2bmJrdWtjeXpjZW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxNzE3MjksImV4cCI6MjA4NTc0NzcyOX0.u6l3IaXn8F_J9V0gj2Lw-LLcDW7KhsLSMkfidf6uxdg`

---

## 📐 ARQUITECTURA

```
src/
├── app/
│   ├── page.tsx              # Home principal
│   ├── layout.tsx            # Layout con tipografía
│   └── globals.css           # Estilos globales + paleta
│
├── features/
│   ├── home/
│   │   ├── components/
│   │   │   ├── HeroVideo.tsx
│   │   │   ├── TrustBar.tsx
│   │   │   ├── ShippingLogos.tsx
│   │   │   └── EmailSubscription.tsx
│   │   └── hooks/
│   │
│   └── chatbot/
│       ├── components/
│       │   └── ChatbotWidget.tsx
│       └── services/
│
└── shared/
    ├── components/           # Button, Card, Input
    └── lib/
        └── supabase.ts
```

---

## ✨ PRINCIPIOS DE DISEÑO

### 1. VISUAL FIRST
- Imágenes grandes, alta calidad
- Mucho white space
- Grid espacioso

### 2. EMOCIÓN REAL
- Fotos reales (no stock genérico)
- Conexión humano-mascota
- Planos cerrados

### 3. PREMIUM & EDITORIAL
- Tipografía grande y legible
- Cards limpias con sombras sutiles
- Hover states elegantes
- Animaciones suaves (no bruscas)

### 4. MOBILE FIRST
- Todo debe verse perfecto en móvil
- Touch targets grandes (min 44px)
- Scroll fluido

### 5. PERFORMANCE
- Lazy loading de imágenes
- Video optimizado
- < 3s First Contentful Paint

---

## 🎯 OBJETIVO FASE 1

**Timeframe**: 0-90 días  
**Meta**: Vender, validar, aprender

### Resultado Esperado:
✓ Home que parece pet store internacional premium  
✓ Más editorial y premium que Zooplas  
✓ Fotografía real protagonista  
✓ Paleta de colores consistente  
✓ Chatbot visible y funcional  
✓ Captura de emails operativa  
✓ 100% responsive  
✓ Performance óptimo  

---

## 🚀 IMPLEMENTACIÓN

### Fase 1.1 - Setup Base (Día 1-2)
- [ ] Configurar Next.js 16 + TypeScript
- [ ] Configurar Tailwind con paleta PETCOM
- [ ] Configurar Supabase
- [ ] Setup tipografía (Inter/Manrope)
- [ ] Estructura de carpetas

### Fase 1.2 - Componentes Core (Día 3-7)
- [ ] HeroVideo component
- [ ] TrustBar component
- [ ] ShippingLogos component
- [ ] EmailSubscription component
- [ ] ChatbotWidget component

### Fase 1.3 - Integración (Día 8-10)
- [ ] Integrar todos los componentes en Home
- [ ] Conectar Supabase para emails
- [ ] Testing responsive
- [ ] Optimización de performance

### Fase 1.4 - Polish & Deploy (Día 11-14)
- [ ] Animaciones y micro-interacciones
- [ ] Testing en múltiples dispositivos
- [ ] SEO básico
- [ ] Deploy a Vercel

---

**IMPORTANTE**: Este documento es la fuente única de verdad.  
Cualquier decisión de diseño debe referirse a esta especificación.
