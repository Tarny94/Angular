import { createAction, createReducer, on } from "@ngrx/store";


export const productReducer = createReducer(
    {showTableCode : false },
    on(createAction("[Table] Toggle Table Code"), state => {
        console.log("init state", state);
        return {
            showTableCode : !state.showTableCode
        };
    })
)