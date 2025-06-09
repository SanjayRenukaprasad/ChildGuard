import volunteerSignups from '../models/volunteer-signup.js';

/** 
 * search and return note object
 * @param {*} params
 * @returns
 */

export const search = async (params = {}) => {
    const getVolunteer = await volunteerSignups.find(params).exec();
    return getVolunteer;
}

/** 
 * saves the note 
 * @param {*} volunteerSignups
 * @returns
 */

export const post = async (u) => {
    const postVolunteer = new volunteerSignups({
        userId: u.projectData.userId,
        projectId: u.projectData.projectId,
        status: u.projectData.status
    });
    return postVolunteer.save();
}

/** 
 * retrieves a single note 
 * @param {*} id
 * @returns
 */

export const get = async (id) => {
    const getId = await volunteerSignups.findById(id).exec();
    return getId;
}

/** 
 * delete a single note 
 * @param {*} id
 * @returns
 */

export const del = async (id) => {
    const delVolunteer = await volunteerSignups.findByIdAndDelete(id).exec();
    console.log(delVolunteer);
    return delVolunteer;
}

/** 
 * update a single note 
 * @param {*} id,
 * @param {*} volunteerSignups
 * @returns
 */
export const update = async (id, data) => {
    const updateVolunteer = await volunteerSignups.findByIdAndUpdate(id, data).exec();
    return updateVolunteer;
}

/** 
 * filterby
 * @param {*} key
 * @returns
 */
export const find = async (key) => {
    console.log(':::servicefile -' + key);
    const findResource = await volunteerSignups.find(key).exec();
    console.log(':::servicefile -' + findResource);
    return findResource;
}
