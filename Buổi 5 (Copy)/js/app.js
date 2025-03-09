import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Firebase configuration (remains the same)
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function showError(message) {
    alert(message);
}

function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
}

function getElement(id) {
    return document.getElementById(id);
}

const loginForm = getElement('login-form');
const signupForm = getElement('signup-form');
const logoutBtn = getElement('logout-btn');
const userEmailDisplay = getElement('user-email'); // Renamed for clarity

// Password toggle (only if toggle buttons exist)
const toggleButtons = document.querySelectorAll('.toggle-password');
toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        const icon = this.querySelector('i');

        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    });
});

// Login Form
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = getElement('login-email').value;
        const password = getElement('login-password').value;

        if (!email || !password) {
            showError('Please fill in all fields!');
            return;
        }
        if (!validateEmail(email)) {
            showError('Please enter a valid email address!');
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Redirect to logined.html on successful login
                window.location.href = './logined.html';
            })
            .catch((error) => {
                showError(handleAuthError(error));
            });
    });
}

// Signup Form
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = getElement('signup-email').value;
        const password = getElement('signup-password').value;
        const confirmPassword = getElement('signup-confirm-password').value;

        if (!email || !password || !confirmPassword) {
            showError('Please fill in all fields!');
            return;
        }
        if (!validateEmail(email)) {
            showError('Please enter a valid email address!');
            return;
        }
        if (!validatePassword(password)) {
            showError('Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number!');
            return;
        }
        if (password !== confirmPassword) {
            showError('Passwords do not match!');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Redirect to logined.html on successful signup
                window.location.href = './logined.html';
            })
            .catch((error) => {
                showError(handleAuthError(error));
            });
    });
}

// Logout Button
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        signOut(auth)
            .then(() => {
                // Redirect to index.html on successful logout
                window.location.href = './index.html';
            })
            .catch((error) => {
                showError('Failed to sign out: ' + error.message);
            });
    });
}

// --- Auth State Change Handler ---
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in.
        if (userEmailDisplay) {
            userEmailDisplay.textContent = user.email;
        }
        // *Don't* automatically redirect here.  Let the page load.
        // The presence of the user object is enough.
    } else {
        // User is signed out.
        // Redirect to index.html *only if* we are on logined.html
        if (window.location.pathname.endsWith('logined.html') || window.location.pathname.endsWith('/Buổi%205/')) {
            window.location.href = './index.html';
        }
    }
});

// --- Error Handling Function ---
function handleAuthError(error) {
    switch (error.code) {
        case 'auth/user-not-found':
            return 'No user found with this email address!';
        case 'auth/wrong-password':
            return 'Wrong password!';
        case 'auth/invalid-credential':
            return 'Invalid email or password!';
        case 'auth/email-already-in-use':
            return 'Email already in use!';
        case 'auth/invalid-email':
            return 'Invalid email format!';
        case 'auth/weak-password':
            return 'Password is too weak!';
        default:
            return error.message;
    }
}