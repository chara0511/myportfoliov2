import admin from '../../firebase/nodeApp'

const getMyData = async () => {
  const db = admin.firestore()
  const profileCollection = db.collection('/portfolio/BxDIHJYzmMOgRDktUaQ7/user')

  const profileDoc = await profileCollection.doc('HzLSebKLfqCFbA3rOh37').get()

  if (!profileDoc.exists) {
    return null
  }

  return profileDoc.data()
}

export default getMyData
