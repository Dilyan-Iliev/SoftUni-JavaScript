export const getUser = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return user;
}

export const saveUser = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
}

export const delUser = () => {
    sessionStorage.removeItem('user');
}

export const emptyFields = (data) => {
    if (data.some(f => !f)) {
        return true;
    } return false;
}