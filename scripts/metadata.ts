/**
 * This is auto generated metadata file, generated at: Mon Jun 24 2024 09:14:37 GMT+0000 (Coordinated Universal Time)
 * Prevent making any changes here
 */

export interface Metadata {
  github: {
    repository: string;
    branch: string;
  };
  pwa: {
    logs: boolean;
    serviceWorker: string;
    oneSignalEnabled: boolean;
    oneSignalSDK: string;
    oneSignalConfig: {
      appId: string;
      allowLocalhostAsSecureOrigin: boolean;
    };
  };
  build: {
    hash: string;
  };
}

export const metadata = JSON.parse(
  '{"github":{"repository":"Tdas1146/bloggerueuei","branch":"main"},"pwa":{"serviceWorker":"/app/serviceworker.js","oneSignalEnabled":false,"oneSignalSDK":"https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js","oneSignalConfig":{"appId":"********-****-****-****-************","allowLocalhostAsSecureOrigin":true},"logs":true},"build":{"hash":"q8AWNHGh_JFXms3D4_TEu"}}',
) as Metadata;
