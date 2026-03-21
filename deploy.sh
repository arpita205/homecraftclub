#!/bin/bash

echo "🚀 Deploy started..."

cd ~/homecraftclub

git pull origin main

npm install

pm2 restart all

echo "✅ Deploy completed!"
