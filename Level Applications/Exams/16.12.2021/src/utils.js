// export const saveUser = (user) => sessionStorage.setItem('user', JSON.stringify(user));

// export const getUser = () => JSON.parse(sessionStorage.getItem('user'));

// export const delUser = () => sessionStorage.removeItem('user');

export const userConfig = {
    saveUser: (user) => sessionStorage.setItem('user', JSON.stringify(user)),
    getUser: () => JSON.parse(sessionStorage.getItem('user')),
    delUser: () => sessionStorage.removeItem('user')
};

export const processUserData = (target) => {
    //works for login, create, edit
    
    const formData = new FormData(target);
    const data = Object.fromEntries(formData);

    if (Object.values(data).some(x => !x)) {
        throw new Error('All fields are required');
    }

    return data;
}