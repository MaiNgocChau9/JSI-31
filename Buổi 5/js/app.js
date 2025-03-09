// Import các thư viện Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Cấu hình Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA8huygjO3NPAq3v42nGpbw9WiroQ3hWDs",
    authDomain: "jsi-31.firebaseapp.com",
    databaseURL: "https://jsi-31-default-rtdb.firebaseio.com",
    projectId: "jsi-31",
    storageBucket: "jsi-31.firebasestorage.app",
    messagingSenderId: "320863785460",
    appId: "1:320863785460:web:3150be47b8b9d70607a9a1",
    measurementId: "G-2VNGMVYMME"
  };

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function getElement(id) {
    return document.getElementById(id);
}


const loginForm = getElement('login-form');
const signupForm = getElement('signup-form');
const logoutBtn = getElement('logout-btn');
const userEmailDisplay = getElement('user-email');

//! Xử lý đăng nhập
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = getElement('login-email').value;
        const password = getElement('login-password').value;
        
        if (!email || !password) {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }
        
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                window.location.href = 'logined.html'; // Chuyển hướng khi đăng nhập thành công
            })
            .catch((error) => alert(error.message));
    });
}

// Xử lý đăng ký
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = getElement('signup-email').value;
        const password = getElement('signup-password').value;
        const confirmPassword = getElement('signup-confirm-password').value;
        
        if (!email || !password || !confirmPassword) {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Mật khẩu không khớp!');
            return;
        }
        
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert('Đăng ký thành công!');
                window.location.href = 'logined.html';
            })
            .catch((error) => alert(error.message));
    });
}

// Xử lý đăng xuất
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        signOut(auth)
            .then(() => {
                window.location.href = 'index.html';
            })
            .catch((error) => alert('Lỗi đăng xuất: ' + error.message));
    });
}

// Kiểm tra trạng thái đăng nhập
onAuthStateChanged(auth, (user) => {
    if (user) {
        if (userEmailDisplay) {
            userEmailDisplay.textContent = user.email;
        }
    } else {
        if (window.location.pathname.includes('logined.html')) {
            window.location.href = 'index.html';
        }
    }
});