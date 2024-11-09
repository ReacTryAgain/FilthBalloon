export function signUpUser(email, password, nickname) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[email]) {
        return { success: false, message: "이미 등록된 이메일입니다." };
    }
    users[email] = { password, nickname };
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true };
}

export function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const user = users[email];
    if (user && user.password === password) {
        localStorage.setItem('loggedInUser', email);
        return { success: true };
    }
    return { success: false, message: "이메일 또는 비밀번호가 올바르지 않습니다." };
}

export function isAuthenticated() {
    return !!localStorage.getItem('loggedInUser');
}

export function logoutUser() {
    localStorage.removeItem('loggedInUser');
}
