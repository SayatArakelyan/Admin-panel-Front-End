import {getMessages} from "../../../API";

export const GET_MESSAGES = 'GET_MESSAGES';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const GET_MESSAGES_FAILURE = 'GET_MESSAGES_FAILURE';


export const requestMessages = () => ({
    type: GET_MESSAGES,
    payload: [],
});

export const getMessagesSuccess = (messages) => ({
    type: GET_MESSAGES_SUCCESS,
    payload: messages,
});

export const getMessagesError = () => ({
    type: GET_MESSAGES_FAILURE,
    payload: [],
});



export function fetchMessages() {
    return (dispatch) => {
        dispatch(requestMessages());

        getMessages().then(({data: messages}) => {
            dispatch(getMessagesSuccess(messages))
        }).catch((err) => {
            dispatch(getMessagesError())
        });
    };
}



// export const deleteProduct = ({ id }) => {
//     return (dispatch) => {
//         return deleteInventory({ id })
//             .then(({ data }) => {
//                 dispatch({
//                     type: DELETE_PRODUCT,
//                     payload: id
//                 })
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }
// }


