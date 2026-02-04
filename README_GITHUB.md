# 🐾 PETCOM - Pet Store Premium

> Infraestructura digital para el cuidado de mascotas

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Ready-3ecf8e)](https://supabase.com/)

## 🎯 MVP Fase 1

**Objetivo**: Vender, validar, aprender (0-90 días)

Este repositorio contiene el MVP completo de PETCOM - una plataforma premium para el cuidado de mascotas que se ve como una gran pet store internacional desde el primer segundo.

## ✨ Features Implementadas

### 🏠 Home Ultra Visual
- **Hero Video**: Video loop sin audio con overlay y CTAs
- **Barra de Confianza**: Sticky bar con pago seguro, envío gratis y garantía
- **Logos de Paqueterías**: Grid con DHL, FedEx, UPS, Estafeta + stats
- **Captura de Emails**: Formulario con validación y conexión a Supabase
- **Chatbot Flotante**: IA básica con respuestas predefinidas

### 🎨 Diseño Premium
- Paleta de colores personalizada PETCOM
- Tipografía moderna (Inter)
- Animaciones suaves
- 100% responsive
- Performance optimizado

### 🛠️ Tech Stack

```yaml
Frontend:
  - Next.js 16 (App Router)
  - TypeScript
  - Tailwind CSS
  - Framer Motion

Backend & Database:
  - Supabase (PostgreSQL)
  - Row Level Security
  
Validation & State:
  - Zod
  - Zustand (preparado)

UI Components:
  - Lucide React (iconos)
  - Custom components
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ instalado
- Cuenta en Supabase
- Git

### Instalación

```bash
# 1. Clonar repositorio
git clone https://github.com/MKTCOACH-eng/petcom.git
cd petcom

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Edita .env.local con tus credenciales de Supabase

# 4. Crear tabla en Supabase
# Ejecuta el SQL en: supabase/migrations/001_initial_setup.sql

# 5. Iniciar servidor de desarrollo
npm run dev

# 6. Abrir en navegador
open http://localhost:3000
```

## 📁 Estructura del Proyecto

```
petcom-mvp/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── features/               # Features organizadas por funcionalidad
│   │   ├── home/
│   │   │   └── components/     # HeroVideo, TrustBar, etc.
│   │   └── chatbot/
│   │       └── components/     # ChatbotWidget
│   └── shared/                 # Código reutilizable
│       ├── components/         # Button, Input
│       ├── lib/               # Supabase client
│       └── utils/             # Utilities
├── supabase/
│   └── migrations/            # SQL scripts
├── public/                    # Assets estáticos
└── docs/                      # Documentación
```

## 🎨 Paleta de Colores

```css
/* PETCOM Brand Colors */
--petcom-coral: #e67e73;    /* Emoción / cercanía */
--petcom-yellow: #fcbd34;   /* CTA / acción */
--petcom-green: #1b375;     /* Bienestar */
--petcom-blue: #7baaf7;     /* Pagos / envíos */
--petcom-purple: #6a67c8;   /* IA / tecnología */
```

## 📝 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run start        # Servidor de producción

# Calidad de código
npm run lint         # ESLint
npm run typecheck    # TypeScript check
```

## 🗄️ Base de Datos

### Tabla: email_subscriptions

```sql
CREATE TABLE email_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

Ver script completo en: `supabase/migrations/001_initial_setup.sql`

## 🚀 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MKTCOACH-eng/petcom)

1. Push a GitHub (ya hecho ✅)
2. Importa en [Vercel](https://vercel.com)
3. Añade variables de entorno:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy automático

## 📚 Documentación

- [Guía de Inicio](./INSTRUCCIONES_INICIO.md)
- [Documento Maestro](./PETCOM_MASTER_DOCUMENT.md)
- [README Técnico](./README.md)

## 🎯 Roadmap

### Fase 1 - MVP (Actual) ✅
- [x] Home ultra visual
- [x] Captura de emails
- [x] Chatbot básico
- [x] Responsive design

### Fase 2 - Catálogo (Próximo)
- [ ] Listado de productos
- [ ] Detalle de producto
- [ ] Carrito de compra
- [ ] Checkout

### Fase 3 - Personalización
- [ ] Onboarding de mascota
- [ ] Home personalizado
- [ ] Recomendaciones IA
- [ ] Historial de compras

## 🤝 Contribuir

Este es un proyecto privado en desarrollo activo. 

## 📄 Licencia

Propietario - MKTCOACH-eng © 2026

## 📞 Contacto

- Repositorio: [github.com/MKTCOACH-eng/petcom](https://github.com/MKTCOACH-eng/petcom)
- Issues: [Reportar bug](https://github.com/MKTCOACH-eng/petcom/issues)

---

**PETCOM MVP Fase 1** | "Todo para el bienestar de tu mejor amigo" 🐾

Hecho con ❤️ usando Next.js, TypeScript y Supabase
