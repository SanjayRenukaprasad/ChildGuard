import healthResource from '../models/health-resource.js';

/** 
 * search and return note object
 * @param {*} params
 * @returns
 */

export const search = async (params = {}) => {
    const getResources = await healthResource.find(params).exec();
    return getResources;
}

/** 
 * saves the note 
 * @param {*} healthResource
 * @returns
 */

export const post = async (u) => {
    const postResource = new healthResource(u);
    return postResource.save();
}

/** 
 * retrieves a single note 
 * @param {*} id
 * @returns
 */

export const get = async (id) => {
    const getId = await healthResource.findById(id).exec();
    return getId;
}

/** 
 * delete a single note 
 * @param {*} id
 * @returns
 */

export const del = async (id) => {
    const delResource = await healthResource.findByIdAndDelete(id).exec();
    console.log(delResource);
    return delResource;
}

/** 
 * update a single note 
 * @param {*} id,
 * @param {*} healthResource
 * @returns
 */
export const update = async (id, data) => {
    const updateResource = await healthResource.findByIdAndUpdate(id, data).exec();
    return updateResource;
}

/** 
 * filterby
 * @param {*} key
 * @returns
 */
export const find = async (key) => {
    console.log(':::servicefile -' + key);
    const findResource = await healthResource.find(key).exec();
    console.log(':::servicefile -' + findResource);
    return findResource;
}