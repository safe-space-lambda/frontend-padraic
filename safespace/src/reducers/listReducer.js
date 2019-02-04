import {
    FAIL,
    FETCHING,
    FETCHED,
    ADDING,
    ADDED,
    UPDATING,
    UPDATED,
    DELETING,
    DELETED    
}from '../actions';

const initialState = {
    fetchingList: false,
    // listFetched: false,
    // msgAdded: false,
    addingMsg: false,
    updatingMsg: false,
    // msgUpdated: false,
    deletingMsg: false,
    // msgDeleted: false,
    msgs: [],
    error: null
  }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {
                ...state,
                fetchingList: true,
                error: ''
            }
        case FETCHED: {
            return {
                ...state,
                msgs: action.payload,
                fetchingList: false,
                error: ''
            }
        }
        case ADDING:
            return {
                ...state,
                addingMsg: true,
                error: ''
            }
        case ADDED:
            return {
                ...state,
                msgs: action.payload,
                addingMsg: false,
                error: ''
            }
        case DELETING:
            return {
                ...state,
                deletingMsg: true,
                error: ''
            }
        case DELETED:
            return {
                ...state,
                Msgs: action.payload,
                deletingMsg: false,
                error: ''
            }
        case UPDATING:
            return {
                ...state,
                updatingMsg: true,
                error: ''
            }
        case UPDATED:
            return {
                ...state,
                msgs: action.payload,
                updatingMsg: false,
                error: ''
            }
        case FAIL:
            return {
                ...state,
                fetchingList: false,
                addingMsg: false,
                updatingMsg: false,
                deletingm: false,
                error: action.payload
            }
        default:
        return state;
    }
}

export default reducer;