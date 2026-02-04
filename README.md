# 🐾 PETCOM MVP - Fase 1

Infraestructura digital para el cuidado de mascotas.

## 🎯 Objetivo Fase 1
MVP Comercial Inteligente (0-90 días): Vender, validar, aprender.

## 🚀 Quick Start

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Las credenciales de Supabase ya están configuradas en `.env.local`

### 3. Crear tabla en Supabase

Ve a tu dashboard de Supabase y ejecuta este SQL:

```sql
-- Crear tabla para suscripciones de email
CREATE TABLE email_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Añadir índice para búsquedas rápidas
CREATE INDEX idx_email_subscriptions_email ON email_subscriptions(email);
CREATE INDEX idx_email_subscriptions_created_at ON email_subscriptions(created_at DESC);

-- Habilitar Row Level Security
ALTER TABLE email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserts públicos
CREATE POLICY "Allow public insert" ON email_subscriptions
  FOR INSERT
  WITH CHECK (true);

-- Política para permitir selects públicos
CREATE POLICY "Allow public select" ON email_subscriptions
  FOR SELECT
  USING (true);
```

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
petcom-mvp/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Layout principal
│   │   ├── page.tsx                  # Home page
│   │   └── globals.css               # Estilos globales + paleta PETCOM
│   │
│   ├── features/                     # Features por funcionalidad
│   │   ├── home/
│   │   │   └── components/
│   │   │       ├── HeroVideo.tsx     # Hero con video loop
│   │   │       ├── TrustBar.tsx      # Barra de confianza sticky
│   │   │       ├── ShippingLogos.tsx # Logos de paqueterías
│   │   │       └── EmailSubscription.tsx # Captura de emails
│   │   │
│   │   └── chatbot/
│   │       └── components/
│   │           └── ChatbotWidget.tsx # Chatbot flotante
│   │
│   └── shared/                       # Código reutilizable
│       ├── components/
│       │   ├── Button.tsx
│       │   └── Input.tsx
│       ├── lib/
│       │   └── supabase.ts          # Cliente Supabase
│       └── utils/
│           └── cn.ts                # Utility para clases CSS
│
├── public/                           # Archivos estáticos
│   ├── videos/                       # Videos (añadir hero-pets.mp4)
│   └── logos/                        # Logos de paqueterías
│
├── PETCOM_MASTER_DOCUMENT.md         # Documento maestro del proyecto
└── README.md                         # Este archivo
```

## 🎨 Paleta de Colores PETCOM

```css
--petcom-coral: #e67e73    /* Emoción / cercanía */
--petcom-yellow: #fcbd34   /* CTA / acción */
--petcom-green: #1b375     /* Bienestar */
--petcom-blue: #7baaf7     /* Pagos / envíos */
--petcom-purple: #6a67c8   /* IA / tecnología */
```

## ✅ Checklist Fase 1

### Setup Base
- [x] Configurar Next.js 16 + TypeScript
- [x] Configurar Tailwind con paleta PETCOM
- [x] Configurar Supabase
- [x] Setup tipografía (Inter)
- [x] Estructura de carpetas

### Componentes Core
- [x] HeroVideo component
- [x] TrustBar component  
- [x] ShippingLogos component
- [x] EmailSubscription component
- [x] ChatbotWidget component

### Por hacer
- [ ] Añadir video real en `/public/videos/hero-pets.mp4`
- [ ] Añadir logos de paqueterías en `/public/logos/`
- [ ] Mejorar respuestas del chatbot (integrar IA real)
- [ ] Añadir más secciones al home (productos destacados, testimonios, etc.)
- [ ] Optimización de imágenes y videos
- [ ] SEO (meta tags, sitemap, etc.)
- [ ] Testing responsive en múltiples dispositivos
- [ ] Deploy a Vercel

## 📝 Notas Importantes

### Video Hero
El componente `HeroVideo` espera un video en `/public/videos/hero-pets.mp4`. 
Mientras no lo agregues, se mostrará una imagen de placeholder desde Unsplash.

### Logos de Paqueterías
El componente `ShippingLogos` usa placeholders de texto. 
Añade los logos reales en `/public/logos/` y actualiza el componente.

### Chatbot
El chatbot actual usa respuestas predefinidas básicas. 
Para integrarlo con IA real, puedes usar:
- OpenAI API
- Anthropic Claude API
- O crear tu propio servicio con FastAPI

## 🚀 Deploy

### Deploy en Vercel (Recomendado)

1. Push tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Import tu repositorio
4. Añade las variables de entorno:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy

## 📚 Documentación

- **PETCOM_MASTER_DOCUMENT.md** - Documento maestro con todas las especificaciones
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)

## 🆘 Troubleshooting

### Error de Supabase
Si ves errores de Supabase, verifica que:
1. Las variables de entorno estén correctas en `.env.local`
2. La tabla `email_subscriptions` esté creada en Supabase
3. Las políticas RLS estén habilitadas

### Puerto ocupado
El servidor usa el puerto 3000 por defecto. Si está ocupado, Next.js te sugerirá otro puerto automáticamente.

---

**PETCOM MVP Fase 1** | "Todo para el bienestar de tu mejor amigo" 🐾
