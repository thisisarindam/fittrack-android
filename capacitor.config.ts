import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.arindam.fittrack",
  appName: "FitTrack",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
};

export default config;