# Configuración de Variables de Entorno en Vercel

## Pasos para configurar las variables de entorno de Supabase en tu proyecto Petcom MVP:

### 1. Acceder a tu Dashboard de Vercel
- Ve a: https://vercel.com/mkt-coachs-projects
- Inicia sesión con tu cuenta

### 2. Seleccionar el Proyecto Petcom
- Busca el proyecto "petcom-mvp" en tu lista de proyectos
- Haz clic en el proyecto para abrir su configuración

### 3. Navegar a la Configuración de Variables de Entorno
- En el dashboard del proyecto, haz clic en la pestaña "Settings" (Configuración)
- En el menú lateral, selecciona "Environment Variables"

### 4. Agregar las Variables de Entorno

Copia y pega los siguientes valores exactamente como aparecen:

**Variable 1:**
- **Name:** `NEXT_PUBLIC_SUPABASE_URL`
- **Value:** `https://yxdamvwvnbkukcyzcemx.supabase.co`
- **Environment:** Production (✓) | Preview (✓) | Development (✓)

**Variable 2:**
- **Name:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4ZGFtdnd2bmJrdWtjeXpjZW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxNzE3MjksImV4cCI6MjA4NTc0NzcyOX0.u6l3IaXn8F_J9V0gj2Lw-LLcDW7KhsLSMkfidf6uxdg`
- **Environment:** Production (✓) | Preview (✓) | Development (✓)

### 5. Guardar los Cambios
- Haz clic en "Save" después de agregar cada variable
- Vercel automáticamente redeployará el proyecto con las nuevas variables

### 6. Verificar el Despliegue
- Espera a que termine el nuevo deployment (aparecerá en la lista de deployments)
- Una vez completado, visita: https://traewx4unc79.vercel.app
- Prueba la funcionalidad de suscripción de email para verificar que Supabase esté funcionando

### ⚠️ Importante:
- **Nunca compartas la SERVICE_ROLE_KEY** - es solo para uso del backend
- Las variables con prefijo `NEXT_PUBLIC_` son accesibles desde el frontend
- El proyecto se redeployará automáticamente después de guardar los cambios

### 🎯 Funcionalidades que se activarán:
- ✅ Formulario de suscripción de email funcionando
- ✅ Acceso a datos de Supabase desde el frontend
- ✅ Integración completa con la base de datos
- ✅ Video hero (una vez resuelto el problema de carga)

### 🔧 Si necesitas ayuda:
Las credenciales de Supabase ya están configuradas en el proyecto local. Si tienes problemas con el despliegue, puedo ayudarte a:
- Verificar los logs de Vercel
- Diagnosticar errores de conexión
- Reconfigurar si es necesario

¡Listo! Tu proyecto Petcom MVP estará completamente funcional en producción una vez configures estas variables.