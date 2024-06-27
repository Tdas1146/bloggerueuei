/**
 * This is auto generated metadata file, generated at: Thu Jun 27 2024 07:45:32 GMT+0000 (Coordinated Universal Time)
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
  '{"github":{"repository":"Tdas1146/bloggerueuei","branch":"main"},"pwa":{"serviceWorker":"/app/serviceworker.js","oneSignalEnabled":true,"oneSignalSDK":"https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js","oneSignalConfig":{"appId":"0963a5a8-49d3-470c-ae5a-2fe89f1c4d91","allowLocalhostAsSecureOrigin":true},"logs":true},"build":{"hash":"WKKHMYccrfCFndegLSb0t"}}',
) as Metadata;
