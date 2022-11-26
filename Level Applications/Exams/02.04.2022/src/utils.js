export const getUser = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));

    return user;
}

export const saveUser = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
}

export const removeUser = () => {
    sessionStorage.removeItem('user')
}