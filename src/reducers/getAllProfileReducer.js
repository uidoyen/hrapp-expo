import {
    GET_CURRENT_PROFILE, ADD_AVATAR, GET_ALL_PROFILES, GET_USER_PROFILE_BY_ID,
    GET_USER_IMAGES, GET_FRIEND_BIRTHDAY, GET_ALL_FRIENDS_BIRTHDAY, GET_FRIEND_SERVICE_ANNIVERSARY,
    GET_ALL_FRIENDS_SERVICE_ANNIVERSARY, GET_FRIEND_WEDDING_ANNIVERSARY, GET_ALL_FRIENDS_WEDDING_ANNIVERSARY,
    SEND_WISH_TEMPLATE, GET_ALL_BIRTHDAYS_IN_UPCOMING_WEEK, GET_ALL_SERVICE_ANNIVERSARY_IN_UPCOMING_WEEK, POST_CONNECT,
    GET_ALL_WEDDING_ANNIVERSARY_IN_UPCOMING_WEEK, GET_BIRTHDAY_TEMPLATE, GET_SERVICE_ANNIVERSARY_TEMPLATE, GET_WEDDING_ANNIVERSARY_TEMPLATE, GET_CONNECTION_REQUESTS, ACCEPT_CONNECTIONS, REJECT_CONNECTIONS,
    SEND_WISH_TO_MAIL, BIRTHDAY_CAKE_REMINDER, WEDDING_CAKE_REMINDER, SERVICE_CAKE_REMINDER
} from "../actions/types";


const initialState = {
    userProfile: [],
    profiles: [],
    memberProfile: {},
    userImages: [],
    BdayWish: [],
    allBdaysWish: [],
    serviceAnniversaryWish: [],
    allServiceAnniversaryWish: [],
    weddingAnniversaryWish: [],
    allWeddingAnniversaryWish: [],
    SendTemplate: [],
    wishBdaysInWeek: [],
    wishServiceAnniversaryInweek: [],
    wishWeddingAnniversaryInweek: [],
    TemplatesForBirthday: [],
    TemplatesForServiceAnniversary: [],
    TemplatesForWeddingAnniversary: [],
    Connect: [],
    connectionRequests: [],
    connectionAccepts: [],
    connectionRequestSent: false,
    rejectRequest: {},
    sendWishToMail: {},
    birthdayMail: {},
    weddingMail: {},
    serviceMail: {}
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_PROFILE:
            return {
                ...state,
                userProfile: action.payload
            }
        case ADD_AVATAR:
            return {
                ...state,
                profile: action.payload
            }
        case GET_ALL_PROFILES:
            return {
                ...state,
                profiles: action.payload
            }
        case GET_USER_PROFILE_BY_ID:
            return {
                ...state,
                memberProfile: action.payload
            }
        case GET_USER_IMAGES:
            return {
                ...state,
                userImages: action.payload
            }


        case GET_FRIEND_BIRTHDAY:
            return {
                ...state,
                BdayWish: action.payload
            }

        case GET_ALL_FRIENDS_BIRTHDAY:
            return {
                ...state,
                allBdaysWish: action.payload
            }


        case GET_FRIEND_SERVICE_ANNIVERSARY:
            return {
                ...state,
                serviceAnniversaryWish: action.payload
            }

        case GET_ALL_FRIENDS_SERVICE_ANNIVERSARY:
            return {
                ...state,
                allServiceAnniversaryWish: action.payload
            }


        case GET_FRIEND_WEDDING_ANNIVERSARY:
            return {
                ...state,
                weddingAnniversaryWish: action.payload
            }


        case GET_ALL_FRIENDS_WEDDING_ANNIVERSARY:
            return {
                ...state,
                allWeddingAnniversaryWish: action.payload
            }


        case SEND_WISH_TEMPLATE:
            return {
                ...state,
                SendTemplate: action.payload
            }


        case GET_ALL_BIRTHDAYS_IN_UPCOMING_WEEK:
            return {
                ...state,
                wishBdaysInWeek: action.payload
            }

        case GET_ALL_SERVICE_ANNIVERSARY_IN_UPCOMING_WEEK:
            return {
                ...state,
                wishServiceAnniversaryInweek: action.payload
            }

        case GET_ALL_WEDDING_ANNIVERSARY_IN_UPCOMING_WEEK:
            return {
                ...state,
                wishWeddingAnniversaryInweek: action.payload
            }


        case GET_BIRTHDAY_TEMPLATE:
            return {
                ...state,
                TemplatesForBirthday: action.payload
            }


        case GET_SERVICE_ANNIVERSARY_TEMPLATE:
            return {
                ...state,
                TemplatesForServiceAnniversary: action.payload
            }


        case GET_WEDDING_ANNIVERSARY_TEMPLATE:
            return {
                ...state,
                TemplatesForWeddingAnniversary: action.payload
            }

        case POST_CONNECT:
            return {
                ...state,
                profile: action.payload
            }
        case GET_CONNECTION_REQUESTS:
            return {
                ...state,
                connectionRequests: action.payload
            }
        case ACCEPT_CONNECTIONS:
            return {
                ...state,
                connectionRequestSent: true,
                connectionAccepts: action.payload
            }
        case REJECT_CONNECTIONS:
            return {
                ...state,
                rejectRequest: action.payload
            }
        case SEND_WISH_TO_MAIL:
            return {
                ...state,
                sendWishToMail: action.payload
            }
        case BIRTHDAY_CAKE_REMINDER:
            return {
                ...state,
                birthdayMail: action.payload
            }
        case WEDDING_CAKE_REMINDER:
            return {
                ...state,
                weddingMail: action.payload
            }
        case SERVICE_CAKE_REMINDER:
            return {
                ...state,
                serviceMail: action.payload
            }
        default:
            return state
    }
}

export default profileReducer;
