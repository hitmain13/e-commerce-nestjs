#!/bin/sh

echo "Colima start...\n"
colima start
echo "\n"
echo "🚀 Inicializando serviço docker:\n"
docker start some-postgres
echo "\n✅ Containers inicializados:"
docker ps
