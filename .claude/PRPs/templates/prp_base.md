# 📋 PRP Template: [NOMBRE_DE_LA_FEATURE]

## 🎯 Resumen
**Feature:** [Nombre de la feature]  
**Prioridad:** [Alta/Media/Baja]  
**Estimación:** [Tiempo estimado]  
**Tipo:** [Frontend/Backend/Full-stack]  

## 📚 Contexto
[Describe el contexto y por qué se necesita esta feature. Incluye problemas actuales que resuelve.]

## ✅ Requisitos Funcionales

### RF1: [Requisito Principal]
**Como** [tipo de usuario]  
**Quiero** [acción deseada]  
**Para** [beneficio/objetivo]  

**Criterios de Aceptación:**
- [ ] Criterio 1
- [ ] Criterio 2
- [ ] Criterio 3

### RF2: [Segundo Requisito]
[Descripción del requisito]

**Criterios de Aceptación:**
- [ ] Criterio 1
- [ ] Criterio 2

## 🔧 Requisitos No Funcionales

### Rendimiento
- [ ] Tiempo de respuesta < 2 segundos
- [ ] Optimizado para móviles
- [ ] Lazy loading implementado

### Seguridad
- [ ] Validación de inputs
- [ ] Protección contra XSS
- [ ] Rate limiting

### Accesibilidad
- [ ] WCAG 2.1 AA compliant
- [ ] Navegación por teclado
- [ ] Screen reader friendly

## 🏗️ Arquitectura Técnica

### Estructura de Archivos
```
src/features/[feature-name]/
├── components/          # Componentes React
│   ├── [Component].tsx
│   └── [Component].test.tsx
├── hooks/               # Custom hooks
│   └── use[Feature].ts
├── services/            # API calls
│   └── [feature]Service.ts
├── types/               # TypeScript types
│   └── [feature].types.ts
├── store/               # Zustand store
│   └── [feature]Store.ts
└── index.ts             # Public API
```

### Componentes Principales
1. **[ComponentePrincipal]** - [Descripción]
2. **[ComponenteSecundario]** - [Descripción]

### Estado y Data Flow
```
[User Action] → [Component] → [Hook] → [Service] → [API] → [Store] → [UI Update]
```

## 🧪 Testing Strategy

### Unit Tests
- [ ] Component rendering
- [ ] Hook functionality
- [ ] Service methods
- [ ] Store actions

### Integration Tests
- [ ] API integration
- [ ] Error handling
- [ ] Loading states
- [ ] User interactions

### E2E Tests
- [ ] Happy path
- [ ] Error scenarios
- [ ] Edge cases

## 📋 Plan de Implementación

### Fase 1: Setup y Estructura (1 día)
- [ ] Crear estructura de carpetas
- [ ] Setup de types e interfaces
- [ ] Configurar store base

### Fase 2: Lógica de Negocio (2 días)
- [ ] Implementar servicios
- [ ] Crear custom hooks
- [ ] Integrar con API

### Fase 3: Componentes UI (2 días)
- [ ] Crear componentes base
- [ ] Implementar estados de carga
- [ ] Añadir validaciones

### Fase 4: Testing y Refinamiento (1 día)
- [ ] Escribir tests unitarios
- [ ] Testing de integración
- [ ] Refinamiento de UI/UX

## 🎨 Diseño UI/UX

### Mockups
[Descripción o enlaces a mockups]

### Interacciones
- [ ] Hover states
- [ ] Loading states
- [ ] Error states
- [ ] Success states

### Responsive Design
- [ ] Mobile (320px+)
- [ ] Tablet (768px+)
- [ ] Desktop (1024px+)

## 🔗 Dependencias

### Librerías Necesarias
```json
{
  "dependencies": {
    "[libreria]": "^[version]"
  }
}
```

### APIs Externas
- **[API Name]** - [Propósito]

## 📊 Métricas de Éxito

### KPIs Técnicos
- [ ] Coverage de tests > 80%
- [ ] Performance score > 90
- [ ] Zero critical security issues

### KPIs de Negocio
- [ ] [Métrica específica 1]
- [ ] [Métrica específica 2]

## 🚨 Riesgos y Mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| [Riesgo 1] | [Alta/Media/Baja] | [Alto/Medio/Bajo] | [Estrategia] |
| [Riesgo 2] | [Alta/Media/Baja] | [Alto/Medio/Bajo] | [Estrategia] |

## 🔄 Rollback Plan

### Criterios para Rollback
- [ ] Tests críticos fallando
- [ ] Performance degradation > 50%
- [ ] Bugs en funcionalidad core

### Procedimiento
1. Revertir merge en main
2. Deploy versión anterior
3. Comunicar a stakeholders

## 📋 Checklist Final

### Pre-Deploy
- [ ] Todos los tests pasan
- [ ] Code review completado
- [ ] Documentación actualizada
- [ ] Performance validada

### Post-Deploy
- [ ] Monitoreo de errores
- [ ] Validación en producción
- [ ] Métricas de performance
- [ ] Feedback de usuarios

## 📝 Notas Adicionales
[Cualquier información adicional relevante]

---

**Created:** [Fecha]  
**Updated:** [Fecha]  
**Status:** [Draft/In Progress/Ready]