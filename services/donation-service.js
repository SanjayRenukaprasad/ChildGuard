import donate from '../models/donation.js';

/** 
 * search and return donation object
 * @param {*} params
 * @returns
 */

export const search = async (params = {}) => {
    const getDonates = await donate.find(params).exec();
    return getDonates;
}

/** 
 * gets the note 
 * @param {*} donate
 * @returns
 */

export const post = async (don) => {
    const postDonates = new donate(don);
    return postDonates.save();
}

/** 
 * retrieves a donation object 
 * @param {*} id
 * @returns
 */

export const get = async (id) => {
    const getDonate= await donate.findById(id).exec();
    return getDonate;
}

/** 
 * delete a donation object 
 * @param {*} id
 * @returns
 */

export const del = async (id) => {
    const delDonate = await donate.findByIdAndDelete(id).exec();
    console.log(delDonate);
    return delDonate;
}

/** 
 * update a single note 
 * @param {*} id,
 * @param {*} donate
 * @returns
 */
export const update = async (id, data) => {
    const updateDonate = await donate.findByIdAndUpdate(id, data).exec();
    return updateDonate;
}

/** 
 * filterby
 * @param {*} key
 * @returns
 */
export const find = async (key) => {
    console.log(':::servicefile -' + key);
    const donateFind = await donate.find(key).exec();
    console.log(':::servicefile -' + donateFind);
    return donateFind;
}