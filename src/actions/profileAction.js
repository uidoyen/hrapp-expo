import axios from "axios";
import { AsyncStorage } from 'react-native'
import {
    GET_CURRENT_PROFILE, GET_CURRENT_PROFILE_ERROR, GET_ERRORS, ADD_AVATAR, GET_ALL_PROFILES, GET_USER_PROFILE_BY_ID, GET_USER_IMAGES,
    GET_FRIEND_BIRTHDAY, GET_ALL_FRIENDS_BIRTHDAY, GET_FRIEND_SERVICE_ANNIVERSARY, GET_ALL_FRIENDS_SERVICE_ANNIVERSARY,
    GET_FRIEND_WEDDING_ANNIVERSARY, GET_ALL_FRIENDS_WEDDING_ANNIVERSARY, SEND_WISH_TEMPLATE, GET_ALL_BIRTHDAYS_IN_UPCOMING_WEEK,
    GET_ALL_SERVICE_ANNIVERSARY_IN_UPCOMING_WEEK, GET_ALL_WEDDING_ANNIVERSARY_IN_UPCOMING_WEEK, GET_BIRTHDAY_TEMPLATE,
    GET_SERVICE_ANNIVERSARY_TEMPLATE, GET_WEDDING_ANNIVERSARY_TEMPLATE, POST_CONNECT, GET_CONNECTION_REQUESTS,
    ACCEPT_CONNECTIONS, REJECT_CONNECTIONS, BIRTHDAY_CAKE_REMINDER, WEDDING_CAKE_REMINDER, SERVICE_CAKE_REMINDER, SEND_WISH_TO_MAIL
} from "./types";
import { API_GATEWAY } from "../utils/config";
import jwt_decode from 'jwt-decode';

export const getUserProfile = () => dispatch => {
    AsyncStorage.getItem("jwtToken").then((value) => {
        axios.defaults.headers.common['Authorization'] = value
        axios.get(`${API_GATEWAY}/api/profile`)
            .then(res => {
                // console.log(JSON.stringify(res.data))
                dispatch({
                    type: GET_CURRENT_PROFILE,
                    payload: res.data
                })
            }).catch((err) => {
                dispatch({
                    type: GET_CURRENT_PROFILE_ERROR,
                    payload: null
                })
            })
    })
}

export const addUserAvatar = (data) => dispatch => {
    axios.post(`${API_GATEWAY}/api/profile/avatar`, data)
        .then(res => {
            dispatch({
                type: ADD_AVATAR,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}


export const getAllProfiles = () => dispatch => {
    AsyncStorage.getItem("jwtToken").then((value) => {
        axios.defaults.headers.common['Authorization'] = value
        axios.get(`${API_GATEWAY}/api/profile/getAllProfiles`)  //  all`)
            .then(res => {
                dispatch({
                    type: GET_ALL_PROFILES,
                    payload: res.data.data
                })
            }).catch((err) => {
                dispatch({
                    type: GET_ALL_PROFILES,
                    payload: null
                })
            })
    })
}


//GET PERTICULAR USER PROFILE BY HIS/HER ID
export const getUserProfilesById = (profileId) => dispatch => {
    axios.get(`${API_GATEWAY}/api/profile/user/${profileId}`)
        .then(res => {
            dispatch({
                type: GET_USER_PROFILE_BY_ID,
                payload: res.data
            })
            //history.push(`/members/${profileId}`)
        }).catch((err) => {
            dispatch({
                type: GET_USER_PROFILE_BY_ID,
                payload: null
            })
        })
}

//GET PERTICULAR USER PROFILE IMAGES
export const getUserImages = (userID) => dispatch => {
    axios.get(`${API_GATEWAY}/api/posts/allimages/${userID}`)
        .then(res => {
            // console.log(res.data)
            dispatch({
                type: GET_USER_IMAGES,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: GET_USER_IMAGES,
                payload: null
            })
        })
}



//get friend B'day
export const getFriendBDay = () => dispatch => {
    axios.get(`${API_GATEWAY}/api/profile/birthday`)
        .then(res => {
            dispatch({
                type: GET_FRIEND_BIRTHDAY,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: GET_FRIEND_BIRTHDAY,
                payload: null
            })
        })
}


//get all friends B'day
export const getAllFriendsBDay = () => dispatch => {
    axios.get(`${API_GATEWAY}/api/profile/allbirthday`)
        .then(res => {
            dispatch({
                type: GET_ALL_FRIENDS_BIRTHDAY,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: GET_ALL_FRIENDS_BIRTHDAY,
                payload: null
            })
        })
}

//get  friend Service Anniversary
export const getFriendServiceAnniversary = () => dispatch => {
    axios.get(`${API_GATEWAY}/api/profile/serviceanniversary`)
        .then(res => {
            dispatch({
                type: GET_FRIEND_SERVICE_ANNIVERSARY,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: GET_FRIEND_SERVICE_ANNIVERSARY,
                payload: null
            })
        })
}


//get all friends service Anniversary
export const getAllFriendsServiceAnniversary = () => dispatch => {
    axios.get(`${API_GATEWAY}/api/profile/allserviceanniversary`)
        .then(res => {
            dispatch({
                type: GET_ALL_FRIENDS_SERVICE_ANNIVERSARY,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: GET_ALL_FRIENDS_SERVICE_ANNIVERSARY,
                payload: null
            })
        })
}

//get friend wedding Anniversary
export const getFriendWeddingAnniversary = () => dispatch => {
    axios.get(`${API_GATEWAY}/api/profile/weddinganniversary`)
        .then(res => {
            dispatch({
                type: GET_FRIEND_WEDDING_ANNIVERSARY,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: GET_FRIEND_WEDDING_ANNIVERSARY,
                payload: null
            })
        })
}


//get all friends wedding Anniversary
export const getAllFriendsWeddingAnniversary = () => dispatch => {
    axios.get(`${API_GATEWAY}/api/profile/allweddinganniversary`)
        .then(res => {
            dispatch({
                type: GET_ALL_FRIENDS_WEDDING_ANNIVERSARY,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: GET_ALL_FRIENDS_WEDDING_ANNIVERSARY,
                payload: null
            })
        })
}

//Sending wish templete to user by Admin
export const SendWishTemplate = (data) => dispatch => {
    axios.post(`${API_GATEWAY}/api/templates`, data)
        .then(res => {
            dispatch({
                type: SEND_WISH_TEMPLATE,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: SEND_WISH_TEMPLATE,
                payload: err.response.data
            })
        })
}

//Get images for admin to wish ur friends(Bday or ServiceAnniversary or WeddingAnniversary)

export const showBdayTemplates = () => dispatch => {
    axios.get(`${API_GATEWAY}/api/templates/birthdaytemplates`)
        .then(res => {
            dispatch({
                type: GET_BIRTHDAY_TEMPLATE,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: GET_BIRTHDAY_TEMPLATE,
                payload: null
            })
        })
}

export const showServiceTemplates = () => dispatch => {
    axios.get(`${API_GATEWAY}/api/templates/servicetemplates`)
        .then(res => {
            dispatch({
                type: GET_SERVICE_ANNIVERSARY_TEMPLATE,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: GET_SERVICE_ANNIVERSARY_TEMPLATE,
                payload: null
            })
        })
}

export const showWeddingTemplates = () => dispatch => {
    axios.get(`${API_GATEWAY}/api/templates/weddingtemplates`)
        .then(res => {
            dispatch({
                type: GET_WEDDING_ANNIVERSARY_TEMPLATE,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: GET_WEDDING_ANNIVERSARY_TEMPLATE,
                payload: null
            })
        })
}


//Get all Profile B'Day Service Anniversary nd Wedding Anniversary in upcoming week

export const BdaysInWeek = () => dispatch => {
    axios.get(`${API_GATEWAY}/api/chat/upcomingbirthday`)
        .then(res => {
            dispatch({
                type: GET_ALL_BIRTHDAYS_IN_UPCOMING_WEEK,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: GET_ALL_BIRTHDAYS_IN_UPCOMING_WEEK,
                payload: null
            })
        })
}

export const ServiceAnniversaryInweek = () => dispatch => {
    axios.get(`${API_GATEWAY}/api/chat/upcomingservice`)
        .then(res => {
            dispatch({
                type: GET_ALL_SERVICE_ANNIVERSARY_IN_UPCOMING_WEEK,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: GET_ALL_SERVICE_ANNIVERSARY_IN_UPCOMING_WEEK,
                payload: null
            })
        })
}

export const WeddingAnniversaryInweek = () => dispatch => {
    axios.get(`${API_GATEWAY}/api/chat/upcomingwedding`)
        .then(res => {
            dispatch({
                type: GET_ALL_WEDDING_ANNIVERSARY_IN_UPCOMING_WEEK,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: GET_ALL_WEDDING_ANNIVERSARY_IN_UPCOMING_WEEK,
                payload: null
            })
        })
}
export const postConnect = (Id) => dispatch => {
    console.log(Id)
    axios.post(`${API_GATEWAY}/api/profile/connection`, Id)
        .then(res => {
            console.log(res);

            dispatch({
                type: POST_CONNECT,
                payload: res.data
            })
        }).catch(err => {
            console.log("Error");
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}


export const getConRequests = () => dispatch => {
    axios.get(`${API_GATEWAY}/api/profile/request`)
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_CONNECTION_REQUESTS,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: GET_CONNECTION_REQUESTS,
                payload: null
            })
        })
}

// export const acceptRequest = (Id) => dispatch => {
//   axios.put(`${API_GATEWAY}/api/profile/acceptConnection/${Id}`)
//     .then(res => {
//       console.log(res);
//       if (res.status === 200) {
//         dispatch({
//           type: ACCEPT_CONNECTIONS,
//           payload: res.data
//         })
//         return res.data;
//       }
//     }).catch(err => {
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     })
// }

export const rejectRequest = (Id) => dispatch => {
    axios.delete(`${API_GATEWAY}/api/profile/rejectrequest/${Id}`)
        .then(res => {
            dispatch({
                type: REJECT_CONNECTIONS,
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

//SEND Wish to mail

export const sendWishesMail = (id, data) => dispatch => {
    axios.post(`${API_GATEWAY}/api/chat/birthday/${id}`, data)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: SEND_WISH_TO_MAIL,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: SEND_WISH_TO_MAIL,
                payload: null

            })
        })
}


export const upComingBirthdayMail = () => dispatch => {
    axios.post(`${API_GATEWAY}/api/chat/upcomingbirthdaymails`)
        .then(res => {
            dispatch({
                type: BIRTHDAY_CAKE_REMINDER,
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const upComingWeddingMail = () => dispatch => {
    axios.post(`${API_GATEWAY}/api/chat/upcomingweddingmails`)
        .then(res => {
            dispatch({
                type: WEDDING_CAKE_REMINDER,
                payload: res.data
            })

        }).catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const upComingServiceMail = () => dispatch => {
    axios.post(`${API_GATEWAY}/api/chat/upcomingservicemails`)
        .then(res => {
            dispatch({
                type: SERVICE_CAKE_REMINDER,
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}