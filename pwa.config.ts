import type { Config } from '@/types';

const pwaConfig: Config = {
  version: '1.0',
  name: 'webExamCare',
  shortName: 'webExamCare',
  description: 'A Educational Website',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'fullscreen',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'PSC ক্লার্কশীপ পরীক্ষা',
      shortName: 'PSC Clarkship Exam',
      description: 'Shortcut 1 description goes here...',
      url: 'https://webexamcare.blogspot.com/p/wbpsc-clerk.html?m=1',
    },
    {
      name: ' মাধ্যমিক প্রস্তুতি',
      shortName: ' মাধ্যমিক প্রস্তুতি',
      description: ' মাধ্যমিক পরীক্ষার্থীদের জন্য প্রস্তুতির জন্য বিষয়ভিত্তিক প্রশ্ন উত্তর ও সাজেশন  ',
      url: 'https://webexamcare.blogspot.com/p/madhyamik.html?m=1',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://webexamcare.blogspot.com',
};

export default pwaConfig;
