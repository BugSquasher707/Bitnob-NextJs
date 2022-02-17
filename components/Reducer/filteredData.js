export const initialState = null

export const filterReducer = (state, action) => {
    switch(action.type){
        case "FETCHED":
            return action.payload
        
        default:
            return state
    }
}