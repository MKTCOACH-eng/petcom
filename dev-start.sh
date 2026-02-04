#!/bin/bash

# Script para iniciar el servidor de desarrollo
# Soluciona problemas comunes con discos externos

echo "🚀 Iniciando PETCOM Dev Server..."
echo ""

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json"
    echo "   Asegúrate de estar en el directorio del proyecto"
    exit 1
fi

# Limpiar cache si existe
if [ -d ".next" ]; then
    echo "🧹 Limpiando cache de Next.js..."
    rm -rf .next
fi

# Verificar node_modules
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
else
    echo "✅ Dependencias encontradas"
fi

echo ""
echo "🎯 Iniciando servidor..."
echo "   Local: http://localhost:3000"
echo ""

# Iniciar Next.js
npm run dev
