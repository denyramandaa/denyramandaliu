import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore'

export function useFirestore(collectionName) {
  const { $firestore } = useNuxtApp()

  const items = ref([])
  const loading = ref(false)
  const error = ref(null)

  // 🔹 GET
  const getAll = async (options = {}) => {
    loading.value = true
    error.value = null

    try {
      const colRef = collection($firestore, collectionName)

      const q = options.orderBy
        ? query(colRef, orderBy(options.orderBy, options.direction || 'desc'))
        : colRef

      const snap = await getDocs(q)

      items.value = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
    } catch (err) {
      error.value = err
      console.error('[Firestore GET]', err)
    } finally {
      loading.value = false
    }
  }

  // 🔹 POST
  const add = async (data) => {
    loading.value = true
    error.value = null

    try {
      await addDoc(collection($firestore, collectionName), {
        ...data,
        createdAt: serverTimestamp(),
      })
    } catch (err) {
      error.value = err
      console.error('[Firestore POST]', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    items,
    loading,
    error,
    getAll,
    add,
  }
}
