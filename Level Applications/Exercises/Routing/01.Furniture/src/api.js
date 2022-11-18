const credentialsUrl = 'http://localhost:3030/users/';
const productsUrl = 'http://localhost:3030/data/catalog';

async function register(email, password) {
    const res = await fetch(credentialsUrl + 'register', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    try {
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const result = await res.json();
        sessionStorage.setItem('token', result.accessToken);
        sessionStorage.setItem('ownerId', result._id);

        return result;
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

async function login(email, password) {
    const res = await fetch(credentialsUrl + 'login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    try {
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const result = await res.json();
        sessionStorage.setItem('token', result.accessToken);
        sessionStorage.setItem('ownerId', result._id);

        return result;
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

async function logout(token) {
    return await fetch(credentialsUrl + 'logout', {
        method: 'GET',
        headers: { 'X-Authorization': token }
    });
}

async function getAllProducts() {
    const res = await fetch(productsUrl);

    try {
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const result = await res.json();

        return Object.values(result);
    }
    catch (error) {
        alert(error.message);
        throw error
    }
}

async function create(make, model, year, description, price, img, material, token) {
    const res = await fetch(productsUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ make, model, year, description, price, img, material })
    });

    const data = await res.json();
    return data;
}

async function getById(id, token) {
    const res = await fetch(`${productsUrl}/${id}`, {
        method: 'GET',
        headers: { 'X-Authorization': token }
    });

    try {
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const result = await res.json();

        return result
    }
    catch (error) {
        alert(error.message);
        throw error
    }
}

async function del(id, token) {
    return await fetch(`${productsUrl}/${id}`, {
        method: 'DELETE',
        headers: { 'X-Authorization': token }
    });
}

async function edit(id, make, model, year, description, price, img, material, token) {
    const res = await fetch(`${productsUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ make, model, year, description, price, img, material })
    });

    const data = await res.json();
    return data;
}

async function getOwnProducts(ownerId, token) {
    const res = await fetch(`http://localhost:3030/data/catalog?where=_ownerId%3D%22${ownerId}%22`, {
        method: 'GET',
        headers: { 'X-Authorization': token }
    });

    const data = await res.json();
    return Object.values(data);
}

export {
    register,
    login,
    logout,
    getAllProducts,
    create,
    getById,
    del,
    edit,
    getOwnProducts
}