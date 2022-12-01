const getUser = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return user;
}

const saveUser = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
}

const delUser = () => {
    sessionStorage.removeItem('user');
}

export {
    getUser,
    saveUser,
    delUser
}