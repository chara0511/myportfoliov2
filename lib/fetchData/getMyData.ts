import admin from '@firebase/nodeApp'

const getMyData = async (locale: string) => {
  const db = admin.firestore()
  const profileCollection = db.collection('/portfolio/BxDIHJYzmMOgRDktUaQ7/user')

  const profileDoc = await profileCollection.doc(locale).get()

  if (!profileDoc.exists) {
    return null
  }

  return profileDoc.data()
}

export default getMyData
