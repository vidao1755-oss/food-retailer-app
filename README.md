# Food Retailer App

Expo/React Native starter app for searching packaged foods, viewing ingredients and nutrition data, scanning barcodes, and saving favorites.

## Run on a device

```bash
npm install
npx expo start
```

Open the project with Expo Go or an iOS/Android emulator. Camera and location permissions are requested when the app starts.

## Data and limitations

Product data comes from Open Food Facts and may be incomplete or community-submitted. Nutrition values are shown per 100 g when available. The retailer entries are clearly marked demo examples; they are not actual nearby stores and do not indicate product stock. Replace `src/services/retailerApi.ts` with a licensed retailer/location service to provide real listings.
