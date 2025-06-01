# Delete dependencies and caches
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock
rm -rf .expo
rm -rf .expo-shared

# Reinstall dependencies
npm install

# Clear Metro bundler cache and start
npx expo start --clear
