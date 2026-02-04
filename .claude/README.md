# 🤖 PETCOM SaaS Factory Integration

## 🎯 Objetivo
Esta integración convierte PETCOM MVP en un proyecto con capacidades avanzadas de desarrollo asistido por IA, siguiendo las mejores prácticas de SaaS Factory.

## 📦 Qué se ha implementado

### 1. Estructura de Comandos (`/.claude/commands/`)
- **`/explorador`** - Analiza el codebase y arquitectura
- **`/ejecutar-prp`** - Ejecuta features complejas con planificación
- **`/generar-prp`** - Genera nuevos planes de features

### 2. Agentes Especializados (`/.claude/agents/`)
- **Codebase Analyst** - Análisis de arquitectura y patrones
- **Gestor Documentación** - Mantiene documentación actualizada

### 3. Sistema de PRPs (`/.claude/PRPs/`)
- **Template base** para nuevas features
- **Planificación estructurada** de desarrollo
- **Criterios de aceptación** claros

### 4. Testing Framework
- **Jest + React Testing Library** configurados
- **Coverage mínimo 80%**
- **Tests de ejemplo** para componentes

### 5. Development Tools
- **Auto-port detection** (puertos 3000-3006)
- **Scripts de calidad** (lint, typecheck, test)
- **MCP integration** para Supabase y Playwright

## 🚀 Cómo usar

### Desarrollo Diario
```bash
# Iniciar servidor con auto-port detection
npm run dev

# Ejecutar tests
npm run test

# Ver coverage
npm run test:coverage

# Lint y typecheck
npm run lint
npm run typecheck
```

### Comandos Claude Code
```bash
# Explorar codebase
/explorador estructura

# Generar nueva feature
/generar-prp user-authentication "Sistema de login para usuarios"

# Ejecutar PRP existente
/ejecutar-prp user-authentication
```

### Desarrollo con IA
1. **Abre el proyecto en Claude Code**
2. **Usa comandos slash** para tareas específicas
3. **Sigue los PRPs** para features complejas
4. **Valida con tests** antes de finalizar

## 📋 Checklist de Integración

### ✅ Completado
- [x] Estructura `.claude/` con comandos y agentes
- [x] Sistema PRP con template base
- [x] CLAUDE.md con principios PETCOM
- [x] Testing framework (Jest + RTL)
- [x] Auto-port detection script
- [x] MCP configuration
- [x] Scripts de calidad
- [x] Tests de ejemplo

### 🔧 Próximos Pasos
- [ ] Implementar skills específicos de PETCOM
- [ ] Crear PRPs para features pendientes
- [ ] Integrar Playwright para testing visual
- [ ] Configurar CI/CD pipeline
- [ ] Añadir más agentes especializados

## 🎨 Principios PETCOM

### Paleta de Colores
```css
--petcom-coral: #e67e73    /* Emoción / CTAs */
--petcom-yellow: #fcbd34   /* Acción / Botones */
--petcom-green: #1b3755    /* Confianza / Fondos */
--petcom-blue: #7baaf7     /* Información / Envíos */
--petcom-purple: #6a67c8   /* IA / Tecnología */
```

### Arquitectura
- **Feature-First**: Cada feature en su propia carpeta
- **Componentes pequeños**: Máximo 500 líneas
- **TypeScript estricto**: Sin `any` types
- **Testing obligatorio**: 80%+ coverage

## 🔧 Troubleshooting

### Puerto Ocupado
```bash
# Ver procesos en puerto 3000
lsof -i :3000

# Matar proceso
kill -9 <PID>

# Script auto-detectará siguiente puerto disponible
npm run dev
```

### Tests Fallando
```bash
# Limpiar cache de Jest
npm run test -- --clearCache

# Ver errores detallados
npm run test -- --verbose

# Actualizar snapshots
npm run test -- --updateSnapshot
```

### Dependencias
```bash
# Si hay errores de dependencias
rm -rf node_modules package-lock.json
npm install

# Verificar versiones
npm outdated
```

## 📚 Recursos

### Documentación
- **`CLAUDE.md`** - Principios y guías de desarrollo
- **`PETCOM_MASTER_DOCUMENT.md`** - Documentación del proyecto
- **`.claude/commands/`** - Comandos disponibles
- **`.claude/agents/`** - Agentes especializados

### Comandos Útiles
```bash
# Explorar estructura
/explorador estructura

# Analizar dependencias
/explorador dependencias

# Ver patrones de código
/explorador patterns

# Generar nuevo PRP
/generar-prp [nombre] "descripción"

# Ejecutar PRP
/ejecutar-prp [nombre]
```

## 🎯 Mejores Prácticas

### Desarrollo con IA
1. **Siempre usa `/explorador` primero** para entender el código
2. **Genera PRPs para features complejas**
3. **Escribe tests antes de implementar** (TDD)
4. **Valida con lint y typecheck** antes de commitear
5. **Usa paleta de colores PETCOM** consistentemente

### Calidad de Código
- **Componentes pequeños** y enfocados
- **TypeScript estricto** sin `any`
- **Tests para todo** (80%+ coverage)
- **Manejo de errores** completo
- **Documentación** actualizada

### Performance
- **Lazy loading** para imágenes y componentes
- **Code splitting** por rutas
- **Optimización de queries** de Supabase
- **Caching** donde sea apropiado

---

**PETCOM SaaS Factory Integration v1.0**  
*Desarrollo asistido por IA para crear la mejor experiencia de compra para mascotas* 🐾