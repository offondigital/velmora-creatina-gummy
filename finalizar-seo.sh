#!/bin/bash

echo "🚀 Iniciando auditoria SEO Creatina Gummy..."

echo ""
echo "📍 Verificando projeto..."

if [ ! -f "package.json" ]; then
  echo "❌ Execute dentro da pasta do projeto"
  exit 1
fi


echo ""
echo "📦 Estrutura SEO"


CHECKS=(
"app/layout.tsx"
"app/page.tsx"
"app/sitemap.ts"
"app/robots.ts"
"lib/schema.ts"
"components/ProductLinks.tsx"
"data/products.json"
"data/keywords.json"
)


for FILE in "${CHECKS[@]}"
do

if [ -f "$FILE" ]; then
echo "✅ $FILE"
else
echo "⚠️ Ausente: $FILE"
fi

done



echo ""
echo "🔎 Verificando palavras-chave..."


KEYWORDS=(
"creatina gummy"
"creatina em goma"
"suplemento de creatina"
"performance"
)


for WORD in "${KEYWORDS[@]}"
do

RESULT=$(grep -Ril "$WORD" app data lib 2>/dev/null | wc -l)

if [ "$RESULT" -gt 0 ]; then
echo "✅ Encontrada: $WORD"
else
echo "⚠️ Não encontrada: $WORD"
fi

done



echo ""
echo "🧩 Verificando Schema..."


SCHEMA=$(grep -R "Product\|Organization\|FAQPage\|application/ld+json" app lib 2>/dev/null)

if [ ! -z "$SCHEMA" ]

then

echo "✅ Schema SEO encontrado"

else

echo "⚠️ Schema não encontrado"

fi



echo ""
echo "🏗️ Rodando build..."

npm run build


if [ $? -eq 0 ]

then

echo ""
echo "================================="
echo "✅ PROJETO APROVADO"
echo "🚀 Próxima etapa SEO liberada"
echo "================================="


else

echo ""
echo "❌ BUILD COM ERRO"

exit 1

fi

