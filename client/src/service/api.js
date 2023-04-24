import axios from 'axios';

const URL = 'https://192.168.224.2:8000';

// const URL = 'http://server:8000';

//post api
export const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/add`, data);
    }catch(error){
        console.log('Error while calling addUser api', error);
    }
}


//get api
export const getUsers = async (data) => {
    try {
        return await axios.get(`${URL}/all`);
    }catch(error) {
        console.log('Error while calling getUsers api', error);
    }
}


//get api
export const getUser = async (id) => {
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(error) {
        console.log('Error while calling getUser api', error);
    }
}


//put api
export const editUser = async (user, id) => {
    try{
        return await axios.put(`${URL}/${id}`, user);
    }catch(error) {
        console.log('Error while calling editUser api', error);
    }
}


//delete api
export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    }catch(error) {
        console.log('Error while calling deleteUser api', error);
    }
}