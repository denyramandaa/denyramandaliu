import { initializeApp, getApps } from 'firebase/app'
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
  }

  const app = getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0]

  const analytics = getAnalytics(app);

  const db = getFirestore(app)

  return {
    provide: {
      firestore: db,
    },
  }
})
