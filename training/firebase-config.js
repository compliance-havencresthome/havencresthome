// Haven Crest Homes — Training Portal Firebase config.
// Paste the values from Firebase console → Project settings → General → "Your apps" → Web app → SDK setup (Config).
// Nothing here is secret: these identify the project; access is governed by Firestore security rules.
window.HCH_FIREBASE = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};
// Emails that are always treated as administrators (must match firestore.rules).
window.HCH_ADMIN_EMAILS = ["compliance@havencresthome.com", "aibrahim@havencresthome.com"];
