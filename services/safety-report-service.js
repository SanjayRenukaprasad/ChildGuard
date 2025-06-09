import safetyReport from '../models/safety-report.js';

/** 
 * search and return note object
 * @param {*} params
 * @returns
 */

export const search = async (params = {}) => {
    const getReport = await safetyReport.find(params).exec();
    return getReport;
}

/** 
 * saves the note 
 * @param {*} safetyReport
 * @returns
 */

export const post = async (u) => {
    const postReport = new safetyReport(u);
    return postReport.save();
}

/** 
 * retrieves a single note 
 * @param {*} id
 * @returns
 */

export const get = async (id) => {
    const getId = await safetyReport.findById(id).exec();
    return getId;
}

/** 
 * delete a single note 
 * @param {*} id
 * @returns
 */

export const del = async (id) => {
    const delReport = await safetyReport.findByIdAndDelete(id).exec();
    console.log(delReport);
    return delReport;
}

/** 
 * update a single note 
 * @param {*} id,
 * @param {*} safetyReport
 * @returns
 */
export const update = async (id, data) => {
    const updateReport = await safetyReport.findByIdAndUpdate(id, data).exec();
    return updateReport;
}

/** 
 * filterby
 * @param {*} key
 * @returns
 */
export const find = async (key) => {
    console.log(':::servicefile -' + key);
    const findResource = await safetyReport.find(key).exec();
    console.log(':::servicefile -' + findResource);
    return findResource;
}