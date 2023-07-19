import {UserType} from "../model/user";

let currentUser: UserType;


//设置当前登录状态
const setCurrentUserState = (user: UserType) => {
    currentUser = user;
}
//获取当前登录状态
const getCurrentUserState = (): UserType => {
    return currentUser;
}

export {
    setCurrentUserState,
    getCurrentUserState
}
