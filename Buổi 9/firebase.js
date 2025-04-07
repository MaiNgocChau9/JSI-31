import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore-lite.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8huygjO3NPAq3v42nGpbw9WiroQ3hWDs",
  authDomain: "jsi-31.firebaseapp.com",
  databaseURL: "https://jsi-31-default-rtdb.firebaseio.com",
  projectId: "jsi-31",
  storageBucket: "jsi-31.firebasestorage.app",
  messagingSenderId: "320863785460",
  appId: "1:320863785460:web:3150be47b8b9d70607a9a1",
  measurementId: "G-2VNGMVYMME",
};
import User, { getUser, addUser, updateUserInfo } from "./users.js";

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();
export const firestore = getFirestore(firebaseApp);


const googleLoginBtn = document.querySelector("#google-login-btn");
const logoutBtn = document.querySelector("#logout-btn");
const userInfoDisplay = document.querySelector("#user-info");
const introForm = document.querySelector("#intro-form");
const introInput = document.querySelector("#intro-input");
const userPhotoElement = document.querySelector("#user-photo");
const userNameElement = document.querySelector("#user-name");
const userEmailElement = document.querySelector("#user-email");
const userIntroElement = document.querySelector(".profile-bio");

if (googleLoginBtn) {
  googleLoginBtn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        const existingUser = await getUser(user.email);

        if (!existingUser) {
          const newUser = new User(
            user.displayName || "Người dùng",
            user.email,
            "",
            user.photoURL || "",
          );
          await addUser(newUser);
          alert("Đăng nhập thành công!");
        } else {
          console.log("Người dùng đã tồn tại, đăng nhập thành công");
        }

        window.location.href = "./index.html";
      })
      .catch((error) => {
        console.error("Lỗi đăng nhập Google:", error);
        alert("Lỗi đăng nhập: " + error.message);
      });
  });
}


if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        console.log("Đăng xuất thành công");
        window.location.href = "./index.html";
      })
      .catch((error) => {
        console.error("Lỗi đăng xuất:", error);
        alert("Lỗi đăng xuất: " + error.message);
      });
  });
}

introForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newIntro = introInput.value.trim();
  try {
    await updateUserInfo(currentUser.email, { intro: newIntro });
    alert("Cập nhật thông tin giới thiệu thành công!");
    
    if (userIntroElement) {
      userIntroElement.innerHTML = newIntro || "Chưa có thông tin giới thiệu";
    }
    
    introInput.value = "";
  } catch (error) {
    console.error("Lỗi khi cập nhật intro:", error);
    alert("Không thể cập nhật thông tin: " + error.message);
  }
});

onAuthStateChanged(auth, async (user) => {
  if (user) {
    console.log("Người dùng đã đăng nhập:", user);

    const userData = await getUser(user.email);
    console.log("Dữ liệu người dùng:", userData);

    if (userInfoDisplay) {
      userInfoDisplay.style.display = "flex";

      if (userPhotoElement) {
        userPhotoElement.src =
          userData?.avatar ||
          user.photoURL ||
          "https://plus.unsplash.com/premium_photo-1714618979902-2cf58da05501?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        userPhotoElement.alt = userData?.name || user.displayName || "User";
      }

      if (userNameElement) {
        userNameElement.innerHTML =
          userData?.name || user.displayName || "Người dùng";
      }

      if (userEmailElement) {
        userEmailElement.innerHTML = userData?.email || user.email;
      }

      if (userIntroElement) {
        userIntroElement.innerHTML =
          userData?.intro || "Chưa có thông tin giới thiệu";
      }
      
      if (introInput && userData?.intro) {
        introInput.value = userData.intro;
      }
    }
    
    if (introForm) {
      introForm.style.display = "block";
    }
    
    if (googleLoginBtn) {
      googleLoginBtn.style.display = "none";
    }

    if (logoutBtn) {
      logoutBtn.style.display = "block";
    }
  } else {
    console.log("Chưa có người dùng đăng nhập");
    
    if (userInfoDisplay) {
      userInfoDisplay.style.display = "none";
    }
    
    if (introForm) {
      introForm.style.display = "none";
    }
    
    if (googleLoginBtn) {
      googleLoginBtn.style.display = "block";
    }
    
    if (logoutBtn) {
      logoutBtn.style.display = "none";
    }
  }
});