import { firestore } from "./firebase.js";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  query,
  serverTimestamp,
  where,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore-lite.js";

export default function User(
  username,
  email,
  intro="",
  avatar = "https://plus.unsplash.com/premium_photo-1714618979902-2cf58da05501?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
) {
  this.username = username;
  this.email = email;
  this.intro = intro;
  this.avatar = avatar;
  return {
    username: this.username,
    email: this.email,
    intro: this.intro,
    avatar: this.avatar,
  };
}

export async function addUser(user) {
  const postsRef = doc(collection(firestore, "users"));
  await setDoc(postsRef, {
    username: user.username,
    email: user.email,
    intro: user.intro,
    avatar: user.avatar,
  });
}

export async function getUser(email) {
  const usersRef = collection(firestore, "users");
  const q = query(usersRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    return querySnapshot.docs[0].data();
  } else {
    return null; 
  }
}

export async function updateUserInfo(email, data) {
  try {
      const userRef = doc(firestore, "users", email);
      await updateDoc(userRef, data);
      return true;
  } catch (error) {
      console.error("Lỗi khi cập nhật thông tin người dùng:", error);
      return false;
  }
}