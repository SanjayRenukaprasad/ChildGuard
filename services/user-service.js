import user from '../models/user.js';
import bcrypt from 'bcrypt';

/** 
 * search and return note object
 * @param {*} params
 * @returns
 */

export const search = async (params = {}) => {
    const getUsers = await user.find(params).exec();
    return getUsers;
}

export const login = async (email, password) => {
    try {
        const userLogin = await user.findOne({ email }).exec();
        if (userLogin) {
          const match = await bcrypt.compare(password, userLogin.password);
          if (match) {
            return { userData: userLogin, error: null };
          } else {
            return { userData: null, error: 'Password is incorrect' };
          }
        } else {
          return { userData: null, error: 'User not found' };
        }
      } catch (error) {
        console.error("Error during login:", error.message);
        return { userData: null, error: 'Login failed' };
      }
  };

/** 
 * saves the note 
 * @param {*} user
 * @returns
 */

export const post = async (u) => {
    const postUser = new user({
        fullname: u.fullName,
        username: u.username,
        email: u.email,
        password: u.password,
        userrole: u.userRole
    });
    return postUser.save();
}

/** 
 * retrieves a single note 
 * @param {*} id
 * @returns
 */

export const get = async (id) => {
    const getId = await user.findById(id).exec();
    return getId;
}

/** 
 * delete a single note 
 * @param {*} id
 * @returns
 */

export const del = async (id) => {
    const delUser = await user.findByIdAndDelete(id).exec();
    console.log(delUser);
    return delUser;
}

/** 
 * update a single note 
 * @param {*} id,
 * @param {*} user
 * @returns
 */
export const update = async (id, data) => {
    const updateUser = await user.findByIdAndUpdate(id, data).exec();
    return updateUser;
}

/** 
 * filterby
 * @param {*} key
 * @returns
 */
export const find = async (key) => {
    console.log(':::servicefile -' + key);
    const userFind = await user.find(key).exec();
    console.log(':::servicefile -' + note);
    return userFind;
}