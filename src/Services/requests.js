import instance from '../axios';

const getRequest = (url) => {
    return instance.get(url).then(res => {
        return res.data;
    }).catch(e => {
        console.log(e, 'error');
        return ([])
    })

}

const postRequest = (url, data) => {
    return instance.post(url, data).then(response => {
        return response.data;
    }).catch(erorr => {
        return []
    })
}

export const requests = {
    getRequest,
    postRequest
};