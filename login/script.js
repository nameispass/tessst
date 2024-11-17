function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("forgotPasswordForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    // Xóa thông báo lỗi khi chuyển sang trang đăng nhập
    document.getElementById("loginError").innerText = "";
}

function showForgotPassword() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("forgotPasswordForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("forgotPass").innerText = "";
}

function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("forgotPasswordForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("signup").innerText = "";
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Kiểm tra nếu thông tin hợp lệ (ở đây bạn có thể thêm logic xác thực thông tin)
    if (email && password) {
        // Kiểm tra thông tin đăng nhập (giả định bạn có 1 danh sách thông tin đăng nhập hợp lệ)
        const validEmail = "user@example.com"; // ví dụ email hợp lệ
        const validPassword = "password123"; // ví dụ mật khẩu hợp lệ

        if (email === validEmail && password === validPassword) {
            //alert(`Đang đăng nhập với: ${email}`);
            // Chuyển hướng sang trang "buy.html"
            window.location.href = 'C:/Users/NguyenVanChi/Documents/Code/Web_Ban_hang/home/home.html';
        } else {
            // Hiển thị thông báo lỗi
            document.getElementById("loginError").innerText = "Sai email hoặc mật khẩu. Vui lòng thử lại!";
        }
    } else {
        // Hiển thị thông báo nếu thiếu thông tin
        document.getElementById("loginError").innerText = "Vui lòng nhập đầy đủ thông tin.";
    }
}

function sendCode() {
    const forgotEmail = document.getElementById("forgotEmail").value;
    if (forgotEmail) {
        document.getElementById("forgotPass").innerText = `Đã gửi mã xác minh tới: ${forgotEmail}`;
        //alert(`Đã gửi mã xác minh tới: ${forgotEmail}`);
        // Logic gửi mã tại đây (có thể gọi API gửi mã)
    } else {
        document.getElementById("forgotPass").innerText = "Vui lòng nhập email để nhận mã xác minh.";
        //alert("Vui lòng nhập email để nhận mã xác minh.");
    }
}

function register() {
    const phone = document.getElementById("registerPhone").value;
    const email = document.getElementById("registerEmail").value;
    const fullName = document.getElementById("registerFullName").value;
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        document.getElementById("signup").innerText = "Mật khẩu không khớp. Vui lòng kiểm tra lại";
        //alert("Mật khẩu không khớp. Vui lòng kiểm tra lại.");
    } else {
        document.getElementById("signup").innerText = 'Đăng ký thành công';
        //alert(`Đăng ký thành công cho: ${fullName}`);
        // Logic đăng ký tại đây (có thể gọi API đăng ký)
    }
}
