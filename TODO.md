# 📋 PETCOM MVP - TODO COMPLETO

**Fecha de inicio:** 4 de Febrero 2026  
**Estrategia:** MVP Iterativo Custom (14-20 semanas)

---

## 🎯 PROGRESO GENERAL

| Fase | Estado | Progreso | Tiempo Estimado |
|------|--------|----------|-----------------|
| **FASE 1A: Landing** | ✅ COMPLETO | 100% | LISTO |
| **FASE 1B: E-commerce Básico** | 🔄 EN PROGRESO | 23% | 4-6 semanas |
| **FASE 1C: Diferenciadores PETCOM** | ⏳ PENDIENTE | 0% | 6-8 semanas |
| **FASE 1D: Ecosistema** | ⏳ PENDIENTE | 0% | 4-6 semanas |

**Progreso Total:** 36/252 items (14.3%)

---

# ✅ FASE 1A: LANDING PAGE (COMPLETO)

## Componentes Implementados

- [x] HeroVideo component
- [x] TrustBar component (sticky)
- [x] ShippingLogos component
- [x] EmailSubscription component (integrado con Supabase)
- [x] ChatbotWidget component
- [x] Paleta de colores PETCOM en Tailwind
- [x] Tipografía Inter
- [x] Componentes compartidos (Button, Input)
- [x] Configuración Supabase

**Resultado:** Landing premium que captura emails ✅

---

# 🔄 FASE 1B: E-COMMERCE BÁSICO (4-6 SEMANAS)

**Objetivo:** Generar revenue vendiendo productos sin personalización

## SEMANA 1-2: Fundaciones (40h) - 25/25 ✅

### 1. Header & Navegación (16h) - 12/12 ✅

#### Header Principal
- [x] Crear `src/features/layout/components/Header.tsx`
- [x] Logo PETCOM (SVG o imagen)
- [x] Navegación principal sticky
- [x] Estado scroll (cambio de fondo)
- [x] Responsive (desktop/mobile)

#### Menú de Navegación
- [x] Dropdown "Perros" con subcategorías básicas
  - [x] Alimento
  - [x] Juguetes
  - [x] Accesorios
- [x] Dropdown "Gatos" con subcategorías básicas
  - [x] Alimento
  - [x] Arena
  - [x] Juguetes
- [x] Link "Servicios" (placeholder)
- [x] Buscador global (input con icono)

#### Iconos de Usuario
- [x] Botón "Login" (modal placeholder)
- [x] Icono de carrito con contador
- [x] Icono de usuario (dropdown futuro)

### 2. Sistema de Productos - Base de Datos (16h) - 8/8 ✅

#### Schema Supabase
- [x] Crear migration `002_products_schema.sql`
- [x] Tabla `products`
  - id, name, description, price, category, species
  - image_url, images (array), stock
  - created_at, updated_at
- [x] Tabla `categories`
  - id, name, slug, species, parent_id
  - description, image_url
- [x] Tabla `product_images`
  - id, product_id, url, alt, order
- [x] Índices optimizados
- [x] RLS (Row Level Security) policies
- [x] Seed data (10 productos ejemplo)

#### Tipos TypeScript
- [x] `src/shared/types/database.ts`
- [x] ProductService con métodos CRUD

### 3. Páginas de Categoría (8h) - 5/5 ✅

#### Listing Page
- [x] `src/app/productos/[species]/[category]/page.tsx`
- [x] Grid de productos (4 columnas desktop, 2 móvil)
- [x] Card de producto (imagen, nombre, precio, badges)
- [x] Paginación básica (20 productos por página)
- [x] Empty state
- [x] Sorting options

---

## SEMANA 3-4: Store Core (60h) - 0/32

### 4. Página de Producto (PDP) (16h) - 0/10

- [ ] `src/app/productos/[category]/[slug]/page.tsx`
- [ ] Galería de imágenes (main + thumbnails)
- [ ] Información del producto
  - [ ] Nombre
  - [ ] Precio
  - [ ] Descripción
  - [ ] Disponibilidad
- [ ] Selector de cantidad
- [ ] Botón "Agregar al carrito"
- [ ] Productos relacionados
- [ ] Breadcrumbs
- [ ] SEO metadata

### 5. Carrito de Compras (24h) - 0/15

#### Estado Global (Zustand)
- [ ] `src/shared/store/cartStore.ts`
- [ ] Actions: add, remove, update, clear
- [ ] Persistencia en localStorage
- [ ] Cálculo de totales

#### Mini Cart (Header)
- [ ] Dropdown al hacer hover/click
- [ ] Lista de items (nombre, cantidad, precio)
- [ ] Subtotal
- [ ] Botón "Ver carrito"
- [ ] Botón "Checkout"
- [ ] Animación al agregar productos

#### Página de Carrito
- [ ] `src/app/carrito/page.tsx`
- [ ] Lista completa de productos
- [ ] Editar cantidad (+ / -)
- [ ] Eliminar producto
- [ ] Subtotal por producto
- [ ] Resumen de compra (subtotal, envío, total)
- [ ] Botón "Proceder al pago"
- [ ] Carrito vacío state

### 6. Búsqueda Global (20h) - 0/7

- [ ] Buscador en header funcional
- [ ] `src/app/buscar/page.tsx`
- [ ] Búsqueda en tiempo real
- [ ] Filtros por categoría
- [ ] Filtros por precio
- [ ] Resultados paginados
- [ ] No results state

---

## SEMANA 5-6: Checkout & Pagos (60h) - 0/29

### 7. Sistema de Usuarios (20h) - 0/12

#### Auth con Supabase
- [ ] `src/features/auth/components/LoginModal.tsx`
- [ ] `src/features/auth/components/RegisterModal.tsx`
- [ ] Formulario de login (email/password)
- [ ] Formulario de registro
- [ ] Recuperar contraseña
- [ ] Validación con Zod
- [ ] Auth state management
- [ ] Protected routes HOC
- [ ] Perfil básico de usuario
  - [ ] `src/app/perfil/page.tsx`
  - [ ] Editar nombre, email
  - [ ] Cambiar contraseña

### 8. Checkout (24h) - 0/11

#### Flujo Multi-Step
- [ ] `src/app/checkout/page.tsx`
- [ ] Step 1: Dirección de envío
  - [ ] Formulario de dirección
  - [ ] Validación
  - [ ] Guardar dirección
- [ ] Step 2: Método de envío
  - [ ] Opciones de envío
  - [ ] Cálculo de costo
- [ ] Step 3: Método de pago
  - [ ] Integración Stripe Elements
  - [ ] Formulario de tarjeta
- [ ] Step 4: Resumen
  - [ ] Review completo del pedido
  - [ ] Botón "Confirmar compra"
- [ ] Indicador de progreso
- [ ] Validaciones en cada step

### 9. Pagos con Stripe (16h) - 0/6

- [ ] Configurar Stripe en Supabase Edge Functions
- [ ] `supabase/functions/create-payment-intent/index.ts`
- [ ] `supabase/functions/stripe-webhook/index.ts`
- [ ] Procesar pago
- [ ] Webhooks para confirmación
- [ ] Página de confirmación de pedido
  - [ ] `src/app/pedido/[id]/confirmacion/page.tsx`

---

## SEMANA 7-8: Gestión de Pedidos (40h) - 0/15

### 10. Sistema de Pedidos (24h) - 0/10

#### Base de Datos
- [ ] Migration `003_orders_schema.sql`
- [ ] Tabla `orders`
  - id, user_id, status, total, shipping_address
  - payment_status, created_at
- [ ] Tabla `order_items`
  - id, order_id, product_id, quantity, price
- [ ] RLS policies

#### Backend
- [ ] `src/features/orders/services/orderService.ts`
- [ ] Crear pedido
- [ ] Obtener pedidos del usuario
- [ ] Obtener detalle de pedido
- [ ] Actualizar estado

#### Frontend
- [ ] `src/app/perfil/pedidos/page.tsx`
- [ ] Lista de pedidos del usuario
- [ ] Card de pedido (número, fecha, total, estado)
- [ ] `src/app/perfil/pedidos/[id]/page.tsx`
- [ ] Detalle completo del pedido

### 11. Admin Panel Básico (16h) - 0/5

- [ ] `src/app/admin/page.tsx` (protegido)
- [ ] Dashboard con métricas básicas
- [ ] `src/app/admin/pedidos/page.tsx`
- [ ] Lista de todos los pedidos
- [ ] Cambiar estado de pedido

---

## RESUMEN FASE 1B

**Total de items:** 0/107 completados

**Horas estimadas:** 240h
- Con IA (30% reducción): ~168h (4 semanas full-time)
- Part-time (20h/sem): 8-9 semanas

**Resultado al completar:**
- ✅ E-commerce funcional
- ✅ Puedes vender productos
- ✅ Gestión básica de pedidos
- ✅ Revenue desde mes 2

---

# ⏳ FASE 1C: DIFERENCIADORES PETCOM (6-8 SEMANAS)

**Objetivo:** Construir el MOAT - Features únicos imposibles de copiar

## Sistema de Mascotas (40h) - 0/20

### 12. Enrolment de Mascotas (CORE)

#### Base de Datos
- [ ] Migration `004_pets_schema.sql`
- [ ] Tabla `pets`
  - id, user_id, name, species, breed
  - birth_date, weight, gender, is_neutered
  - health_conditions, allergies
  - photo_url, is_active, created_at
- [ ] Tabla `pet_profiles`
  - Datos extendidos de cada mascota
- [ ] RLS policies

#### Formulario de Enrolment
- [ ] `src/features/pets/components/PetEnrollment.tsx`
- [ ] Step 1: Datos básicos (nombre, especie, raza)
- [ ] Step 2: Características (edad, peso, género)
- [ ] Step 3: Salud (condiciones, alergias)
- [ ] Step 4: Foto (opcional)
- [ ] Validación con Zod
- [ ] Preview de datos
- [ ] Guardar en Supabase

#### Gestión de Mascotas
- [ ] `src/app/perfil/mascotas/page.tsx`
- [ ] Lista de mascotas del usuario
- [ ] Card por mascota (foto, nombre, especie)
- [ ] Botón "Agregar mascota"
- [ ] Editar mascota
- [ ] Eliminar mascota
- [ ] Seleccionar mascota activa
- [ ] `src/app/perfil/mascotas/[id]/page.tsx`
- [ ] Perfil completo de la mascota

---

## CRM Mascota-Céntrico (32h) - 0/12

### 13. Modelo de Datos Relacional

- [ ] Migration `005_pet_relationships.sql`
- [ ] Tabla `pet_purchases`
  - Relación mascotas ↔ pedidos
- [ ] Tabla `pet_recommendations`
  - Productos recomendados por mascota
- [ ] Tabla `pet_history`
  - Historial de interacciones
- [ ] Vistas optimizadas para queries

### 14. Contexto de Mascota

- [ ] `src/shared/contexts/PetContext.tsx`
- [ ] Estado global de mascota activa
- [ ] Función para cambiar mascota activa
- [ ] Hook `usePet()` personalizado
- [ ] Persistencia de selección
- [ ] Selector de mascota en header
- [ ] Indicador visual de mascota activa

---

## Personalización (48h) - 0/18

### 15. Home Personalizado Post-Enrolment

- [ ] Detectar si usuario tiene mascotas
- [ ] `src/app/page.tsx` - Versión personalizada
- [ ] Hero personalizado ("Todo para [nombre mascota]")
- [ ] Productos recomendados para mascota activa
- [ ] Categorías filtradas por especie
- [ ] Banner de bienvenida personalizado

### 16. Store Filtrada por Mascota

- [ ] Query products by species
- [ ] Filtro automático en categorías
- [ ] Badge "Ideal para [especie]"
- [ ] Algoritmo de compatibilidad básico
- [ ] Ordenar por compatibilidad
- [ ] Filtros avanzados
  - [ ] Por edad (cachorro, adulto, senior)
  - [ ] Por tamaño
  - [ ] Por condiciones de salud

---

## Petcom Score (40h) - 0/15

### 17. Algoritmo de Score v1

- [ ] `src/features/scoring/services/scoreCalculator.ts`
- [ ] Variables de entrada:
  - [ ] Especie de la mascota
  - [ ] Edad
  - [ ] Peso
  - [ ] Condiciones de salud
  - [ ] Categoría del producto
- [ ] Fórmula de scoring (0-100)
- [ ] Ponderación de factores
- [ ] Tests unitarios

### 18. Display de Score

- [ ] Componente `PetcomScore.tsx`
- [ ] Badge con color (🟢 🟡 🔴)
- [ ] Score numérico
- [ ] Tooltip con explicación
- [ ] "Por qué este score" modal
- [ ] Mostrar en PDP
- [ ] Mostrar en listados
- [ ] Filtrar por score mínimo

---

## IA & Recomendaciones (40h) - 0/12

### 19. Sistema de Recomendaciones

- [ ] `src/features/recommendations/services/recommendationEngine.ts`
- [ ] Recomendaciones basadas en:
  - [ ] Mascota activa
  - [ ] Compras anteriores
  - [ ] Mascotas similares
  - [ ] Popularidad en categoría
- [ ] Sección "Recomendado para [mascota]"
- [ ] Sección "Otros dueños de [raza] compraron"
- [ ] Explicabilidad ("Por qué esto")

### 20. Chatbot Mejorado

- [ ] Integrar datos de mascota en chatbot
- [ ] Respuestas contextuales
- [ ] "¿Qué necesita [nombre mascota]?"
- [ ] Guiar hacia enrolment
- [ ] Sugerir productos relevantes

---

## RESUMEN FASE 1C

**Total de items:** 0/77 completados

**Horas estimadas:** 200h
- Con IA (30% reducción): ~140h (3.5 semanas full-time)
- Part-time (20h/sem): 7 semanas

**Resultado al completar:**
- ✅ Diferenciación real vs competencia
- ✅ MOAT construido
- ✅ Features imposibles de copiar
- ✅ Valor único en el mercado

---

# ⏳ FASE 1D: ECOSISTEMA (4-6 SEMANAS)

**Objetivo:** Marketplace completo (Productos + Servicios)

## Pedidos Recurrentes (40h) - 0/12

### 21. Suscripciones

- [ ] Migration `006_subscriptions.sql`
- [ ] Tabla `subscriptions`
  - id, user_id, pet_id, frequency, status
  - next_order_date, products (JSON)
- [ ] Activar suscripción desde producto
- [ ] Gestionar suscripciones activas
- [ ] `src/app/perfil/suscripciones/page.tsx`
- [ ] Pausar/reanudar suscripción
- [ ] Editar frecuencia
- [ ] Editar productos
- [ ] Cancelar suscripción
- [ ] Cron job para procesar pedidos automáticos
- [ ] Notificaciones por email
- [ ] Descuentos por suscripción

---

## Marketplace de Servicios (60h) - 0/20

### 22. Proveedores de Servicios

- [ ] Migration `007_services_schema.sql`
- [ ] Tabla `service_providers`
  - id, name, type (veterinario/grooming/adiestramiento)
  - description, location, phone, email
  - membership_status, rating, verification
- [ ] Tabla `services`
  - id, provider_id, name, description, price
- [ ] Tabla `service_bookings`
  - id, user_id, pet_id, service_id, date, status

### 23. Portal de Proveedores

- [ ] `src/app/proveedores/page.tsx`
- [ ] Landing page para proveedores
- [ ] "Únete como proveedor"
- [ ] Formulario de registro de proveedor
- [ ] Dashboard de proveedor
  - [ ] `src/app/proveedor/dashboard/page.tsx`
  - [ ] Gestionar servicios
  - [ ] Ver reservaciones
  - [ ] Reviews recibidos

### 24. Marketplace de Servicios (Cliente)

- [ ] `src/app/servicios/page.tsx`
- [ ] Grid de servicios por tipo
- [ ] Filtros (ubicación, rating, precio)
- [ ] Card de proveedor (foto, nombre, rating, "Verificado")
- [ ] `src/app/servicios/[id]/page.tsx`
- [ ] Perfil de proveedor
- [ ] Lista de servicios
- [ ] Reviews y ratings
- [ ] Botón "Reservar"
- [ ] Modal de reservación

---

## Marketplace de Vendedores (40h) - 0/15

### 25. Sistema Multi-Vendor

- [ ] Migration `008_vendors_schema.sql`
- [ ] Tabla `vendors`
  - id, name, type (propio/dropshipping)
  - api_credentials (encrypted)
- [ ] Relación products ↔ vendors
- [ ] `src/app/vender/page.tsx`
- [ ] Landing "Vende en Petcom"
- [ ] Formulario de registro de vendedor
- [ ] Dashboard de vendedor
- [ ] Gestión de productos
- [ ] Gestión de inventario
- [ ] Reportes de ventas

### 26. Dropshipping Integration

- [ ] Integración Alibaba API
- [ ] Integración AliExpress API
- [ ] Sync de inventario
- [ ] Procesamiento de pedidos
- [ ] Tracking unificado
- [ ] UX invisible al cliente

---

## Contenido & SEO (40h) - 0/10

### 27. Sistema de Blog

- [ ] Migration `009_content_schema.sql`
- [ ] Tabla `articles`
- [ ] CMS básico en admin
- [ ] `src/app/blog/page.tsx`
- [ ] `src/app/blog/[slug]/page.tsx`
- [ ] 10 artículos iniciales
- [ ] SEO optimization
- [ ] Open Graph tags
- [ ] Structured data
- [ ] Sitemap dinámico

---

## RESUMEN FASE 1D

**Total de items:** 0/57 completados

**Horas estimadas:** 180h
- Con IA (30% reducción): ~126h (3 semanas full-time)
- Part-time (20h/sem): 6 semanas

**Resultado al completar:**
- ✅ Plataforma completa
- ✅ Productos + Servicios
- ✅ Multi-vendor
- ✅ Recurrentes nativos
- ✅ Contenido SEO

---

# 📊 RESUMEN GLOBAL

## Por Fase

| Fase | Items | Horas | Con IA | Estado |
|------|-------|-------|--------|--------|
| 1A: Landing | 11/11 | — | — | ✅ COMPLETO |
| 1B: E-commerce | 0/107 | 240h | 168h | 🔄 EN PROGRESO |
| 1C: Diferenciadores | 0/77 | 200h | 140h | ⏳ PENDIENTE |
| 1D: Ecosistema | 0/57 | 180h | 126h | ⏳ PENDIENTE |
| **TOTAL** | **11/252** | **620h** | **434h** | **4.4%** |

## Timeline Realista

### Full-Time (40h/semana)
- Fase 1B: 4 semanas
- Fase 1C: 3.5 semanas
- Fase 1D: 3 semanas
- **Total: 10.5 semanas (~2.5 meses)**

### Part-Time (20h/semana)
- Fase 1B: 8 semanas
- Fase 1C: 7 semanas
- Fase 1D: 6 semanas
- **Total: 21 semanas (~5 meses)**

---

# 🎯 PRIORIDADES CRÍTICAS

## Sprint Actual (Semana 1-2)

### Esta Semana
1. ✅ Header con navegación básica
2. ✅ Sistema de productos en Supabase
3. ✅ Primera página de categoría

### Próxima Semana
4. Página de producto (PDP)
5. Carrito básico
6. Agregar al carrito funcional

---

# 📝 NOTAS IMPORTANTES

## Decisiones Técnicas Clave

### ¿Por qué Custom y no Shopify?
- ✅ CRM centrado en mascotas (imposible en Shopify)
- ✅ Petcom Score (algoritmo propietario)
- ✅ Marketplace de servicios (no solo productos)
- ✅ Personalización profunda por mascota
- ✅ Control total de datos y moat

### Stack Tecnológico
- **Frontend:** Next.js 14 + TypeScript
- **Backend:** Next.js API Routes + Supabase
- **Database:** PostgreSQL (Supabase)
- **Auth:** Supabase Auth
- **Pagos:** Stripe
- **Storage:** Supabase Storage
- **Estado:** Zustand
- **Styling:** Tailwind CSS + Framer Motion

### Principios de Desarrollo
1. **Mobile-first:** Todo responsive desde el inicio
2. **TypeScript strict:** Sin `any`
3. **Feature-first architecture:** Por dominio, no por tipo
4. **Commits frecuentes:** Cada feature pequeña
5. **Testing:** Edge cases desde el inicio
6. **Performance:** < 3s First Contentful Paint
7. **SEO:** Meta tags + structured data en todo

---

# 🚀 COMANDOS ÚTILES

```bash
# Desarrollo
npm run dev              # Iniciar servidor de desarrollo
npm run build            # Build de producción
npm run typecheck        # Verificar tipos TypeScript
npm run lint             # Linter

# Git
git status               # Ver cambios
git add .                # Agregar todos los cambios
git commit -m "mensaje"  # Commit
git push                 # Subir a GitHub

# Supabase
supabase db reset        # Reset database
supabase migration new   # Nueva migración
supabase db push         # Aplicar migraciones
```

---

# ✅ HITOS (MILESTONES)

- [ ] **Hito 1:** Header + Navegación funcional (Semana 1)
- [ ] **Hito 2:** Primer producto visible (Semana 2)
- [ ] **Hito 3:** Carrito funcionando (Semana 3)
- [ ] **Hito 4:** Checkout + Stripe (Semana 5)
- [ ] **Hito 5:** Primera venta real (Semana 6) 💰
- [ ] **Hito 6:** Enrolment de mascotas (Semana 8)
- [ ] **Hito 7:** Petcom Score live (Semana 10)
- [ ] **Hito 8:** Personalización completa (Semana 11)
- [ ] **Hito 9:** Marketplace servicios (Semana 13)
- [ ] **Hito 10:** MVP Fase 1 completo (Semana 15) 🎉

---

**Última actualización:** 4 de Febrero 2026  
**Próxima revisión:** Cada viernes
