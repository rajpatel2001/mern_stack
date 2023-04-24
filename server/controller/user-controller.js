
import { deleteModel } from 'mongoose';
import User from '../schema/user-schema.js';


//post api 
export const addUser = async (request, response) => {
    const user = request.body;

    const newUser = new User(user);

    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}


//get api
export const getUsers = async (request, response) => {

    try{
       const users = await User.find({});
       response.status(200).json(users);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}


//get api
export const getUser = async (request, response) => {
    try{
        //const users = await User.find({ _id: request.params.id });
        const users = await User.findById(request.params.id);
        response.status(200).json(users);
     } catch (error) {
         response.status(404).json({ message: error.message });
     }
}


//put api
export const editUser = async (request, response) => {
    let user = request.body;
    const editUser = new User(user);

    try{
        await User.updateOne({ _id: request.params.id }, editUser);
        response.status(201).json(editUser);
    }catch(error){
        response.status(409).json({ message: error.message});
    }
} 


//delete api
export const deleteUser = async (request, response) => {

    try{
        await User.deleteOne({ _id: request.params.id });
        response.status(200).json({ message: 'User deleted successfully' });
    }catch{
        response.status(409).json({ message: error.message });
    }
}