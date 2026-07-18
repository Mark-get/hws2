const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: themeReducerAction): typeof initState => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type themeReducerAction = {
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeId = (id: number): themeReducerAction => ({ type: 'SET_THEME_ID', id }) // fix any
