import educationalResource from '../models/educational-resource.js';

/** 
 * search and return note object
 * @param {*} params
 * @returns
 */

export const search = async (params = {}) => {
    const getResources = await educationalResource.find(params).exec();
    return getResources;
}

/** 
 * saves the note 
 * @param {*} educationalResource
 * @returns
 */

export const post = async (u) => {
    const postResource = new educationalResource(u);
    return postResource.save();
}

/** 
 * retrieves a single note 
 * @param {*} id
 * @returns
 */

export const get = async (id) => {
    const getId = await educationalResource.findById(id).exec();
    return getId;
}

/** 
 * delete a single note 
 * @param {*} id
 * @returns
 */

export const del = async (id) => {
    const delResource = await educationalResource.findByIdAndDelete(id).exec();
    console.log(delResource);
    return delResource;
}

/** 
 * update a single note 
 * @param {*} id,
 * @param {*} educationalResource
 * @returns
 */
export const update = async (id, data) => {
    const updateResource = await educationalResource.findByIdAndUpdate(id, data).exec();
    return updateResource;
}

/** 
 * filterby
 * @param {*} key
 * @returns
 */
export const find = async (key) => {
    console.log(':::servicefile -' + key);
    const findResource = await educationalResource.find(key).exec();
    console.log(':::servicefile -' + findResource);
    return findResource;
}