# 🚀 PETCOM MVP - Instrucciones de Inicio

## ✅ Estado Actual

El proyecto está **completamente configurado** y listo para iniciar. Todos los archivos necesarios han sido creados.

---

## 📍 Ubicación del Proyecto

```
/Volumes/Externo Lou/APPS/PETCOM/petcom-mvp/
```

---

## 🎯 Pasos para Iniciar (5 minutos)

### Paso 1: Abrir en Terminal

```bash
cd "/Volumes/Externo Lou/APPS/PETCOM/petcom-mvp"
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

⏱️ Esto tomará 2-3 minutos la primera vez.

### Paso 3: Crear Tabla en Supabase

1. Ve a: https://supabase.com/dashboard
2. Abre tu proyecto: `yxdamvwvnbkukcyzcemx`
3. Ve a `SQL Editor` en el menú lateral
4. Copia y pega el contenido de `supabase/migrations/001_initial_setup.sql`
5. Click en `Run` para ejecutar

**O simplemente copia esto:**

```sql
CREATE TABLE IF NOT EXISTS email_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_email_subscriptions_email ON email_subscriptions(email);
CREATE INDEX idx_email_subscriptions_created_at ON email_subscriptions(created_at DESC);

ALTER TABLE email_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON email_subscriptions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public select" ON email_subscriptions
  FOR SELECT USING (true);
```

### Paso 4: Iniciar el Servidor

```bash
npm run dev
```

### Paso 5: Abrir en el Navegador

```
http://localhost:3000
```

---

## 🎨 Lo que Verás

### 1. Hero Video Section
- Video placeholder (necesitas añadir video real)
- Título: "Todo para el bienestar de tu mejor amigo"
- 2 botones de acción

### 2. Barra de Confianza (Sticky)
- Pago Seguro
- Envío Gratis  
- Garantía Total

### 3. Logos de Paqueterías
- DHL, FedEx, UPS, Estafeta (placeholders de texto)
- Stats: 99% entregas, 50K+ pedidos, etc.

### 4. Email Subscription
- Formulario funcional
- Conectado a Supabase
- Validación con Zod
- Mensaje de confirmación animado

### 5. Chatbot Flotante
- Botón flotante bottom-right (morado)
- Panel de chat con IA básica
- Respuestas predefinidas

---

## 📝 Tareas Pendientes

### Alta Prioridad (Hacer Ya)

- [ ] **Añadir video hero real**
  - Ubicación: `/public/videos/hero-pets.mp4`
  - Formato: MP4, optimizado para web
  - Duración: 10-30 segundos
  - Sin audio
  - Loop

- [ ] **Añadir logos de paqueterías**
  - Ubicación: `/public/logos/`
  - Formato: SVG o PNG con fondo transparente
  - Archivos: `dhl.svg`, `fedex.svg`, `ups.svg`, `estafeta.svg`

### Prioridad Media (Esta Semana)

- [ ] Optimizar imágenes
- [ ] Añadir más secciones (productos, testimonios)
- [ ] Mejorar respuestas del chatbot
- [ ] Testing en móviles
- [ ] SEO básico

### Prioridad Baja (Próximas Semanas)

- [ ] Integrar IA real en chatbot (OpenAI/Claude)
- [ ] Sistema de analytics
- [ ] A/B testing
- [ ] Deploy a producción

---

## 🎨 Personalización

### Cambiar Colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  petcom: {
    coral: '#e67e73',    // Tu color aquí
    yellow: '#fcbd34',   // Tu color aquí
    // etc...
  }
}
```

### Cambiar Textos

Todos los textos están en los componentes individuales:
- `/src/features/home/components/HeroVideo.tsx`
- `/src/features/home/components/TrustBar.tsx`
- etc.

### Añadir Video

1. Coloca tu video en `/public/videos/hero-pets.mp4`
2. Reinicia el servidor (`npm run dev`)
3. El video se cargará automáticamente

---

## 🚀 Deploy

### Opción 1: Vercel (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Deploy
vercel

# 3. Seguir instrucciones en pantalla
```

### Opción 2: Netlify

1. Push a GitHub
2. Conecta en netlify.com
3. Deploy

---

## 📊 Checklist Completo

### Setup Base ✅
- [x] Next.js 16 + TypeScript configurado
- [x] Tailwind CSS con paleta PETCOM
- [x] Supabase configurado
- [x] Tipografía Inter
- [x] Estructura de carpetas

### Componentes Core ✅
- [x] HeroVideo
- [x] TrustBar
- [x] ShippingLogos
- [x] EmailSubscription
- [x] ChatbotWidget

### Integración ✅
- [x] Página Home completa
- [x] Supabase conectado
- [x] Validaciones con Zod
- [x] Animaciones con Framer Motion
- [x] Responsive design

### Por Completar 🔄
- [ ] Video real
- [ ] Logos reales
- [ ] Contenido final
- [ ] Testing
- [ ] Deploy

---

## 🆘 Soporte

### Errores Comunes

**1. Error al instalar dependencias**
```bash
# Limpiar caché y reinstalar
rm -rf node_modules package-lock.json
npm install
```

**2. Error de Supabase**
- Verifica que el SQL se ejecutó correctamente
- Verifica las credenciales en `.env.local`
- Revisa que la tabla existe en Supabase

**3. Puerto 3000 ocupado**
```bash
# Next.js te sugerirá otro puerto automáticamente
# O mata el proceso:
lsof -i :3000
kill -9 <PID>
```

---

## 📞 Siguiente Paso

**¿Todo listo?**

1. Abre terminal en la carpeta del proyecto
2. Ejecuta `npm install`
3. Ejecuta `npm run dev`
4. Abre `http://localhost:3000`
5. ¡Disfruta tu MVP de PETCOM! 🎉

---

**PETCOM MVP Fase 1** | Creado con ❤️ usando Next.js + Supabase + IA
