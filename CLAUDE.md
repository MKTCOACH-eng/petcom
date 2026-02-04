# Proyecto: PETCOM MVP - Tienda de Productos para Mascotas

## 🎯 Principios de Desarrollo (Context Engineering)

### Design Philosophy
- **KISS**: Keep It Simple, Stupid - Prefiere soluciones simples
- **YAGNI**: You Aren't Gonna Need It - Implementa solo lo necesario  
- **DRY**: Don't Repeat Yourself - Evita duplicación de código
- **SOLID**: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion

### Descripción del Proyecto
PETCOM es una tienda digital especializada en productos para el cuidado de mascotas. El MVP inicial se enfoca en:
- Catálogo de productos organizado por especie (perros, gatos, etc.)
- Sistema de suscripción por email para lanzamiento
- Chatbot básico para atención al cliente
- Diseño moderno y confiable con paleta de colores PETCOM

## 🏗️ Tech Stack & Architecture

### Core Stack
- **Runtime**: Node.js + TypeScript
- **Framework**: Next.js 14 (App Router)
- **Base de Datos**: PostgreSQL/Supabase
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Testing**: Jest + React Testing Library
- **Schema Validation**: Zod

### Architecture: Feature-First

**Enfoque: Arquitectura Feature-First optimizada para desarrollo asistido por IA**

Este proyecto usa una arquitectura **Feature-First** donde cada feature es independiente y contiene toda la lógica relacionada (componentes, hooks, servicios, tipos).

#### Frontend: Feature-First
```
src/
├── app/                      # Next.js App Router
│   ├── productos/           # Rutas dinámicas de productos
│   │   └── [species]/
│   │       └── [category]/
│   │           └── page.tsx
│   ├── layout.tsx           # Layout root
│   └── page.tsx             # Home page
│
├── features/                 # 🎯 Organizadas por funcionalidad
│   ├── home/                # Feature: Home/Landing
│   │   ├── components/      # HeroVideo, TrustBar, EmailSubscription
│   │   ├── hooks/           # useEmailSubscription, useHeroVideo
│   │   ├── services/        # emailService.ts
│   │   ├── types/           # Home types
│   │   └── store/           # homeStore.ts
│   │
│   ├── chatbot/             # Feature: Chatbot
│   │   ├── components/      # ChatbotWidget
│   │   ├── hooks/           # useChatbot
│   │   ├── services/        # chatbotService.ts
│   │   ├── types/           # Chatbot types
│   │   └── store/           # chatbotStore.ts
│   │
│   ├── products/            # Feature: Productos
│   │   ├── components/      # ProductCard, ProductGrid
│   │   ├── hooks/           # useProducts, useProductFilter
│   │   ├── services/        # productService.ts
│   │   ├── types/           # Product types
│   │   └── store/           # productsStore.ts
│   │
│   └── [nueva-feature]/     # Otras features...
│
└── shared/                   # Código reutilizable
    ├── components/          # Button, Card, Input
    ├── hooks/               # useDebounce, useLocalStorage
    ├── stores/              # appStore.ts
    ├── types/               # Global types
    ├── utils/               # cn.ts, formatters
    ├── lib/                 # supabase.ts
    └── constants/           # App constants
```

### Estructura de Proyecto Completa
```
petcom-mvp/
├── src/
│   ├── app/                 # Next.js routes
│   ├── features/            # Features por funcionalidad
│   └── shared/              # Código reutilizable
├── public/                  # Archivos estáticos
│   ├── videos/              # Hero videos
│   └── logos/               # Shipping logos
├── supabase/                # Migraciones de BD
│   └── migrations/
├── .claude/                 # Configuración Claude Code
├── scripts/                 # Development scripts
├── docs/                    # Documentación técnica
├── package.json
├── tsconfig.json
├── next.config.js
└── tailwind.config.ts
```

> **🤖 ¿Por qué Feature-First?**
>
> Esta estructura fue diseñada específicamente para **desarrollo asistido por IA**. La organización clara por features permite que los AI assistants:
> - **Localicen rápidamente** todo el código relacionado con una feature en un mismo lugar
> - **Entiendan el contexto completo** sin navegar múltiples directorios
> - **Mantengan la separación de responsabilidades** al generar código nuevo
> - **Escalen el proyecto** añadiendo features sin afectar el código existente
> - **Generen código consistente** siguiendo patrones establecidos por feature
>
> *La IA puede trabajar de forma más efectiva cuando la información está organizada siguiendo principios claros y predecibles.*

## 🎨 Paleta de Colores PETCOM

### Colores Principales
```css
--petcom-coral: #e67e73    /* Emoción / cercanía */
--petcom-yellow: #fcbd34   /* CTA / acción */
--petcom-green: #1b3755    /* Bienestar / confianza */
--petcom-blue: #7baaf7     /* Pagos / envíos */
--petcom-purple: #6a67c8   /* IA / tecnología */
```

### Uso de Colores
- **Coral**: Botones principales, highlights, elementos emocionales
- **Amarillo**: CTAs, botones de acción, elementos de atención
- **Verde**: Fondos, elementos de bienestar, confianza
- **Azul**: Información de envíos, pagos, procesos
- **Púrpura**: Elementos de IA, chatbot, tecnología

## 🛠️ Comandos Importantes

### Development
- `npm run dev` - Servidor de desarrollo (auto-detecta puerto 3000-3006)
- `npm run build` - Build para producción
- `npm run start` - Servidor de producción

### Quality Assurance
- `npm run test` - Ejecutar tests
- `npm run test:watch` - Tests en modo watch
- `npm run test:coverage` - Coverage report
- `npm run lint` - ESLint
- `npm run lint:fix` - Fix automático de linting
- `npm run typecheck` - Verificación de tipos TypeScript

### Claude Code Commands
- `/explorador` - Explora y analiza el codebase
- `/ejecutar-prp` - Ejecuta un plan de feature complejo
- `/generar-prp` - Genera un nuevo PRP para una feature

### Skills Management
- `python .claude/skills/skill-creator/scripts/init_skill.py my-skill` - Crear nuevo skill
- `python .claude/skills/skill-creator/scripts/quick_validate.py ./my-skill` - Validar skill
- `python .claude/skills/skill-creator/scripts/package_skill.py ./my-skill` - Empaquetar skill

## 📝 Convenciones de Código

### File & Function Limits
- **Archivos**: Máximo 500 líneas
- **Funciones**: Máximo 50 líneas
- **Componentes**: Una responsabilidad clara

### Naming Conventions
- **Variables/Functions**: `camelCase`
- **Components**: `PascalCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Files**: `kebab-case.extension`
- **Folders**: `kebab-case`

### TypeScript Guidelines
- **Siempre usar type hints** para function signatures
- **Interfaces** para object shapes
- **Types** para unions y primitives
- **Evitar `any`** - usar `unknown` si es necesario

### Component Patterns
```typescript
// ✅ GOOD: Proper component structure for PETCOM
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'coral' | 'yellow';
  onClick: () => void;
  disabled?: boolean;
}

export function Button({ children, variant = 'primary', onClick, disabled }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-200";
  const variantClasses = {
    primary: "bg-petcom-coral text-white hover:bg-petcom-coral/90",
    secondary: "bg-petcom-green text-white hover:bg-petcom-green/90",
    coral: "bg-petcom-coral text-white hover:bg-petcom-coral/90",
    yellow: "bg-petcom-yellow text-white hover:bg-petcom-yellow/90"
  };
  
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}
```

## 🧪 Testing Strategy

### Test-Driven Development (TDD)
1. **Red**: Escribe el test que falla
2. **Green**: Implementa código mínimo para pasar
3. **Refactor**: Mejora el código manteniendo tests verdes

### Test Structure (AAA Pattern)
```typescript
// ✅ GOOD: Clear test structure for PETCOM components
test('should subscribe user email', async () => {
  // Arrange
  const email = 'usuario@petcom.com';
  
  // Act
  const result = await subscribeEmail(email);
  
  // Assert
  expect(result.success).toBe(true);
  expect(result.message).toContain('Gracias por suscribirte');
});
```

### Coverage Goals
- **Unit Tests**: 80%+ coverage
- **Integration Tests**: Critical paths
- **E2E Tests**: Main user journeys (home → productos → suscripción)

## 🔒 Security Best Practices

### Input Validation
- Validate all user inputs (emails, form data)
- Sanitize data before processing
- Use schema validation (Zod)

### Authentication & Authorization
- JWT tokens con expiración cuando implementemos auth
- Role-based access control
- Secure session management

### Data Protection
- Never log sensitive data (emails, datos personales)
- Encrypt data at rest
- Use HTTPS everywhere

## ⚡ Performance Guidelines

### Code Splitting
- Route-based splitting (productos/[species]/[category])
- Component lazy loading
- Dynamic imports

### State Management
- Local state first (useState)
- Global state only when needed (Zustand)
- Memoization for expensive computations

### Database Optimization
- Index frequently queried columns
- Use pagination for large datasets
- Cache repeated queries

## 🔄 Git Workflow & Repository Rules

### Branch Strategy
- `main` - Production ready code
- `develop` - Integration branch
- `feature/TICKET-123-description` - Feature branches
- `hotfix/TICKET-456-description` - Hotfixes

### Commit Convention (Conventional Commits)
```
type(scope): description

feat(auth): add OAuth2 integration
fix(api): handle null user response  
docs(readme): update installation steps
```

### Pull Request Rules
- **No direct commits** a `main` o `develop`
- **Require PR review** antes de merge
- **All tests must pass** antes de merge
- **Squash and merge** para mantener historia limpia

## ❌ No Hacer (Critical)

### Code Quality
- ❌ No usar `any` en TypeScript
- ❌ No hacer commits sin tests
- ❌ No omitir manejo de errores
- ❌ No hardcodear configuraciones

### Security
- ❌ No exponer secrets en código
- ❌ No loggear información sensible (emails de usuarios)
- ❌ No saltarse validación de entrada
- ❌ No usar HTTP en producción

### Architecture
- ❌ No editar archivos en `src/legacy/`
- ❌ No crear dependencias circulares
- ❌ No mezclar concerns en un componente
- ❌ No usar global state innecesariamente

### PETCOM Specific
- ❌ No usar colores fuera de la paleta PETCOM
- ❌ No omitir responsive design
- ❌ No usar imágenes sin optimizar
- ❌ No olvidar estados de carga y error

## 📚 Referencias & Context

### Project Files
- Ver @README.md para overview detallado
- Ver @package.json para scripts disponibles
- Ver @PETCOM_MASTER_DOCUMENT.md para documentación completa
- Ver @.claude/docs/ para workflows y documentación

### External Dependencies
- Documentación oficial de frameworks
- Best practices guides
- Security guidelines (OWASP)

## 🤖 AI Assistant Guidelines

### When Suggesting Code
- Siempre incluir types en TypeScript
- Seguir principios de CLAUDE.md
- Implementar error handling
- Incluir tests cuando sea relevante
- Usar paleta de colores PETCOM
- Mantener consistencia con diseño existente

### When Reviewing Code
- Verificar adherencia a principios SOLID
- Validar security best practices
- Sugerir optimizaciones de performance
- Recomendar mejoras en testing
- Validar uso correcto de colores PETCOM

### Context Priority
1. **CLAUDE.md rules** (highest priority)
2. **PETCOM_MASTER_DOCUMENT.md** - Documentación del proyecto
3. **.claude/docs/** workflows y guías
4. **Project-specific files** (package.json, etc.)
5. **General best practices**

## 🚀 Pre-Development Validation Protocol

### API & Dependencies Current Check
**CRÍTICO**: Siempre verificar antes de asumir
- [ ] ✅ Verificar que las versiones de APIs/modelos existen
- [ ] ✅ Confirmar que las librerías están actualizadas
- [ ] ✅ Validar endpoints externos funcionan
- [ ] ✅ Tener fallbacks para todas las dependencias externas

### Simplicity-First Development
- [ ] ✅ Crear versión simplificada primero
- [ ] ✅ Probar funcionalidad básica antes de agregar complejidad
- [ ] ✅ Mantener siempre una versión "modo demo" que funcione
- [ ] ✅ Implementar mock data para casos donde servicios externos fallen

### Incremental Validation Strategy
- [ ] ✅ Probar cada endpoint inmediatamente después de crearlo
- [ ] ✅ Usar TodoWrite para tracking sistemático de progreso
- [ ] ✅ Validar UI después de cada cambio importante
- [ ] ✅ Mantener logs detallados de errores para debugging

## 🔄 Error-First Development Protocol

### Manejo de Errores Predictivos
```typescript
// ✅ GOOD: Siempre incluir fallbacks para PETCOM
try {
  const result = await subscribeEmail(email);
  return { success: true, message: result.message };
} catch (error) {
  console.error('Email subscription failed:', error);
  return { 
    success: false, 
    message: 'Error al suscribirte. Por favor, intenta nuevamente.' 
  };
}
```

### Debugging Sin Visibilidad Directa
- **Usar logs extensivos** con contexto PETCOM
- **Crear endpoints de testing** (`/api/health`, `/api/test-email`)
- **Implementar timeouts** en todas las llamadas externas
- **Hacer requests incrementales** - nunca asumir que algo complejo funcionará

## 🔌 Auto Port Detection (CRÍTICO para desarrollo)

### Problema: "EADDRINUSE - Puerto Ocupado"
**Solución implementada:** Script que auto-detecta puertos disponibles

### Frontend (Next.js) - Puertos 3000-3006
**Script:** `scripts/dev-server.js`

```bash
npm run dev  # Usa auto-port detection
```

**Características:**
- ✅ Chequea puertos 3000-3006 secuencialmente
- ✅ Compatible con IPv4 y IPv6
- ✅ Fallback automático si puerto ocupado
- ✅ Graceful shutdown (SIGINT/SIGTERM)

### CORS Backend Configuration
**Importante:** Configurado para soportar puertos dinámicos

```typescript
// Config para APIs externas
ALLOWED_ORIGINS = [
  "https://petcom.vercel.app",  // Production
  *[f"http://localhost:{port}" for port in range(3000, 3007)],
  *[f"http://127.0.0.1:{port}" for port in range(3000, 3007)],
]
```

### Best Practices
- ❌ **NO usar `next dev` directamente** → puerto hardcodeado
- ✅ **SÍ usar `npm run dev`** → auto-port detection

### Debugging Port Issues
```bash
# Ver qué proceso está usando un puerto
lsof -i :3000
kill -9 <PID>

# Matar todos los servidores de desarrollo
pkill -f "next dev"
```

## 🎨 Bucle Agéntico con Playwright MCP

### Metodología de Desarrollo Visual
**Problema:** IA genera frontends genéricos sin poder ver el resultado  
**Solución:** Playwright MCP otorga "ojos" al AI para iteración visual

### Bucle Agéntico Frontend
```
1. Código UI → 2. Playwright Screenshot → 3. Visual Compare → 4. Iterate
```

### Playwright MCP Integration
- **browser_snapshot**: Captura estado actual de la página
- **browser_take_screenshot**: Screenshots para comparación visual
- **browser_navigate**: Navegación automática para testing
- **browser_click/type**: Interacción automatizada con UI
- **browser_resize**: Testing responsive en diferentes viewports

### Visual Development Protocol
1. **Implementar componente** siguiendo specs y paleta PETCOM
2. **Capturar screenshot** con Playwright
3. **Comparar vs design requirements** (colores, espaciado, tipografía)
4. **Iterar automáticamente** hasta pixel-perfect
5. **Validar responsiveness** en mobile/tablet/desktop

### Integration con Design Review
- Activar review visual automático post-implementación
- Usar criterios objetivos de diseño PETCOM (colores, spacing, tipografía)
- Generar feedback específico y accionable
- Prevenir frontends genéricos mediante validación visual

---

*Este archivo es la fuente de verdad para desarrollo en PETCOM MVP. Todas las decisiones de código deben alinearse con estos principios.*