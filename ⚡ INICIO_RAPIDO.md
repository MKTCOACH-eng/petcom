# ⚡ INICIO RÁPIDO - Solución al Error

## 🎯 Ejecuta estos comandos en tu terminal

### 1️⃣ Limpieza Completa (30 segundos)

```bash
cd "/Volumes/Externo Lou/APPS/PETCOM/petcom-mvp"
rm -rf node_modules package-lock.json .next
npm cache clean --force
```

### 2️⃣ Reinstalar Dependencias (2-3 minutos)

```bash
npm install
```

**Espera a que termine completamente**. Deberías ver:
```
added 350 packages in 2m
```

### 3️⃣ Iniciar Servidor

```bash
npm run dev
```

**Deberías ver**:
```
▲ Next.js 14.2.18
- Local:        http://localhost:3000
✓ Ready in 2.5s
```

### 4️⃣ Abrir en Navegador

```
http://localhost:3000
```

---

## ✅ Si Funciona

Verás:
- Hero section con imagen de fondo
- Barra azul con "Pago Seguro", "Envío Gratis", "Garantía"
- Sección de logos de paqueterías
- Formulario de email
- Botón morado flotante (chatbot) en esquina inferior derecha

---

## ❌ Si NO Funciona

### Opción A: Usar Script Automático

```bash
cd "/Volumes/Externo Lou/APPS/PETCOM/petcom-mvp"
chmod +x dev-start.sh
./dev-start.sh
```

### Opción B: Mover a Disco Interno

El problema puede ser el disco externo. Prueba:

```bash
# Copiar a disco interno
cp -r "/Volumes/Externo Lou/APPS/PETCOM/petcom-mvp" ~/Desktop/petcom-mvp

# Ir al nuevo directorio
cd ~/Desktop/petcom-mvp

# Instalar e iniciar
npm install
npm run dev
```

### Opción C: Clonar de GitHub

Si todo falla, clona de nuevo:

```bash
cd ~/Desktop
git clone https://github.com/MKTCOACH-eng/petcom.git
cd petcom

# Crear .env.local
cat > .env.local << 'EOF'
NEXT_PUBLIC_SUPABASE_URL=https://yxdamvwvnbkukcyzcemx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4ZGFtdnd2bmJrdWtjeXpjZW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxNzE3MjksImV4cCI6MjA4NTc0NzcyOX0.u6l3IaXn8F_J9V0gj2Lw-LLcDW7KhsLSMkfidf6uxdg
EOF

# Instalar e iniciar
npm install
npm run dev
```

---

## 🔍 Verificar que Node.js está Instalado

```bash
node --version
npm --version
```

Deberías ver:
```
v18.x.x o superior
9.x.x o superior
```

Si no tienes Node.js instalado:
```bash
# Instalar con Homebrew
brew install node

# O descargar de: https://nodejs.org/
```

---

## 📞 Errores Comunes

### "npm: command not found"
→ Instala Node.js primero

### "EACCES: permission denied"
→ Usa el disco interno en lugar del externo

### "Port 3000 already in use"
→ Mata el proceso:
```bash
lsof -ti:3000 | xargs kill
```

### "Failed to load SWC binary"
→ Ya lo solucionamos con el downgrade a Next.js 14

---

## ✨ Una vez que funcione

1. ✅ Verifica que http://localhost:3000 carga
2. ✅ Haz clic en el chatbot (botón morado)
3. ✅ Prueba el formulario de email
4. ✅ Revisa en móvil (responsive)

---

**¿Funcionó?** ¡Perfecto! Ya puedes empezar a desarrollar 🎉

**¿Sigue sin funcionar?** Copia el error exacto que ves y lo revisamos.
