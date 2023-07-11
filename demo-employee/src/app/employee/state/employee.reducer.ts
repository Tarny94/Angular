import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as AppState from '../../state/app.state';
import { IEmployee } from "../employee";

//is ok to have a single state interface that represent the entire state tree

export interface State extends AppState.State {
    employee : EmployeeState
}

export interface EmployeeState {
    showTableCode : boolean;
    employees: IEmployee[]
}

const initialState : EmployeeState = {
    showTableCode: false,
    employees: []
}

const getEmployeeFeatureState = createFeatureSelector<EmployeeState>('employee');

export const getShowEmployeeCode = createSelector(
    getEmployeeFeatureState,
    state => state.showTableCode
) 

export const employeeReducer = createReducer<EmployeeState>(
    initialState,
    on(createAction("[Table] Toggle Table Code"), (state) : EmployeeState => {
        console.log("init state", state);
        return {
            ...state,
            showTableCode : !state.showTableCode
        };
    })
)