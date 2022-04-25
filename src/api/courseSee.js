import { request } from "./request";
// 获取课程数据
export const gitCourseSee = table => request({ method: 'POST', url: 'TM_getallinfo_controller', data: table });
// 修改课程信息
export const editCourseSee = courseinfo => request({ method: 'POST', url: 'TM_updateone_controller', data: courseinfo });
// 添加课程信息
export const addCourseSee = addcourseinfo => request({ method: 'POST', url: 'TM_insertone_controller', data: addcourseinfo });
// 删除课程
export const removeSee = removeinfo => request({ method: 'POST', url: 'TM_deletebatchbydeletekeys_controller', data: removeinfo })