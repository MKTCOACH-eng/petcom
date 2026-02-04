# 📝 Comando: /generar-prp

## Propósito
Genera un nuevo PRP (Plan de Requisitos y Planificación) para una feature específica.

## Uso
```
/generar-prp [nombre-feature] [descripción]
```

## ¿Qué genera?
- 📄 **Documento PRP** completo basado en template
- 🏗️ **Estructura** de archivos sugerida
- ✅ **Criterios de aceptación** detallados
- 🧪 **Tests** necesarios
- 📋 **Plan de implementación** paso a paso

## Templates Disponibles
```
.claude/PRPs/templates/
├── prp_base.md              # Template base general
└── [custom-templates].md     # Templates específicos por tipo
```

## Ejemplos
```
/generar-prp user-authentication "Sistema de autenticación con JWT"
/generar-prp shopping-cart "Carrito de compras con persistencia"
/generar-prp admin-dashboard "Panel de administración completo"
```

## Proceso
1. **Análisis** - Entiende los requisitos de la feature
2. **Selección** - Elige el template más apropiado
3. **Generación** - Crea el PRP personalizado
4. **Validación** - Verifica que el PRP sea completo
5. **Guardado** - Almacena en `.claude/PRPs/`

## Output
- 📄 Archivo PRP generado en `.claude/PRPs/[nombre].md`
- 🎯 Requisitos claros y medibles
- 🛠️ Plan de implementación detallado
- ✅ Listo para ejecutar con `/ejecutar-prp`