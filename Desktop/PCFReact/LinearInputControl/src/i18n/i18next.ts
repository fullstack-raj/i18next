// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import resourcesToBackend from 'i18next-resources-to-backend';
// import Backend from "i18next-chained-backend";
// import LocalStorageBackend from "i18next-localstorage-backend";

// function genRandonNumber(length : number) {
//   const chars = '0123456789';
//   const charLength = chars.length;
//   let result = '';
//   for ( var i = 0; i < length; i++ ) {
//      result += chars.charAt(Math.floor(Math.random() * charLength));
//   }
//   return result;
// }

// const LOCAL_DOMAINS = ["localhost", "127.0.0.1"];
// const HASH = genRandonNumber(10);

// i18n
//   .use(Backend)
//   // detect user language
//   .use(LanguageDetector)
//   // pass the i18n instance to react-i18next.
//   .use(initReactI18next)
//   // init i18next
//   .init({
//     // default fallback will be french
//     fallbackLng: 'fr',
//     // default namespace to load
//     ns: 'header',
//     // load languages ressources with lazy loading and caching client side
//     backend: {
//       backends: [
//         LocalStorageBackend, // primary ressources (cache = window.localStorage)
//         resourcesToBackend((language, namespace, callback) => {
//           import(`/public/locales/${language}/${namespace}.json`)
//             .then((resources) => {
//               callback(null, resources)
//             })
//             .catch((error) => {
//               callback(error, null)
//             })
//         }) // fallback ressources (json)
//       ],
//       backendOptions: [{
//         expirationTime: 24 * 60 * 60 * 1000 * 7, // 7 days
//         defaultVersion: "v" + HASH // generate a new version every build to refresh
//       }]
//     },
//     // debug only in dev
//     debug: LOCAL_DOMAINS.includes(window.location.hostname),

//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     },
//   });

// i18n.on('languageChanged', () => {
//   document.documentElement.lang = i18n.language;
// });

// export default i18n;