import project from '../models/project.js';
 
/**
* search and return note object
* @param {*} params
* @returns
*/
 
export const search = async (params = {}) => {
    const getProjects = await project.find(params).exec();
    return getProjects;
}
 
/**
* saves the note
* @param {*} project
* @returns
*/
 
export const post = async (u) => {
    const postProject = new project(u);
    return postProject.save();
}
 
/**
* retrieves a single note
* @param {*} id
* @returns
*/
 
export const get = async (id) => {
    const getId = await project.findById(id).exec();
    return getId;
}
 
/**
* delete a single note
* @param {*} id
* @returns
*/
 
export const getMultiple = async (ids) => {
    const projects = await project.find({
        '_id': {
            $in: ids
        }
    }).exec();
    return projects;
}
 
export const del = async (id) => {
    const delProject = await project.findByIdAndDelete(id).exec();
    console.log(delProject);
    return delProject;
}
 
/**
* update a single note
* @param {*} id,
* @param {*} project
* @returns
*/
export const update = async (id, data) => {
    const updateProject = await project.findByIdAndUpdate(id, data).exec();
    return updateProject;
}
 
/**
* filterby
* @param {*} key
* @returns
*/
export const find = async (key) => {
    console.log(':::servicefile -' + key);
    const findResource = await project.find(key).exec();
    console.log(':::servicefile -' + findResource);
    return findResource;
}
