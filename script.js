// Smooth scroll to top on page load
document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Add shadow to header when scrolling
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 40) {
        header.style.boxShadow = "0 4px 18px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }
});

// USER DATABASE WITH ROLES
const USERS = [
    { username: "Prashant", password: "mithun@8601", role: "admin" },
    { username: "Suju", password: "mithun@2105", role: "admin" },
    { username: "mumbai_user", password: "mum999", role: "editor" },
    { username: "bangalore_user", password: "blr888", role: "viewer" }
];

// Handle Login
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login-box form");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = loginForm.querySelector("input[type='text']").value.trim();
        const password = loginForm.querySelector("input[type='password']").value.trim();
        const location = loginForm.querySelector("select").value;

        if (!username || !password || !location) {
            alert("Please fill all fields.");
            return;
        }

        const user = USERS.find(
            u => u.username === username && u.password === password
        );

        if (!user) {
            alert("Invalid Username or Password!");
            return;
        }

        let redirectPage = "";

        if (user.role === "admin") {
            redirectPage = "admin_dashboard.html";
        }
        else if (user.role === "editor" && location === "Mumbai") {
            redirectPage = "editor.html";
        }
        else if (user.role === "viewer" && location === "Bangalore") {
            redirectPage = "viewer.html";
        }
        else {
            alert("Access Denied! Your role does not match the location.");
            return;
        }

        alert("Login Successful!");
        window.location.href = redirectPage;
    });
});
