import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as AppState from '../../state/app.state';
import { IEmployee } from "../employee";
import * as ProductActions from "../employee.actions";
import { Action } from "rxjs/internal/scheduler/Action";
import { state } from "@angular/animations";


//is ok to have a single state interface that represent the entire state tree

export interface State extends AppState.State {
    employee : EmployeeState
}

export interface EmployeeState {
    showTableCode : boolean;
    employees: IEmployee[]
    employee: IEmployee
}

const initialState : EmployeeState = {
    showTableCode: false,
    employees: [],
    employee: {
        id : '',
        firstName : "",
        lastName: "",
        email : "",
        phone : '',
        authority : []
    }
}

const getEmployeeFeatureState = createFeatureSelector<EmployeeState>('employee');

export const getShowEmployeeCode = createSelector(
    getEmployeeFeatureState,
    state => state.showTableCode
) 

export const getCurrentEmployee = createSelector(
    getEmployeeFeatureState,
    state => state.employee
)

export const getEmployees = createSelector(
    getEmployeeFeatureState,
    state => state.employees
)

export const employeeReducer = createReducer<EmployeeState>(
    initialState,
    on(ProductActions.toggleIfIsTable, (state) : EmployeeState => {
       
        return {
            ...state,
            showTableCode : !state.showTableCode
        };
    }),
    on(ProductActions.setCurrentEmployee, (state, action): EmployeeState => {
       
        return {
            ...state,
           employee : action.employee
        }
    }),
    on(ProductActions.setEmployees, (state, action): EmployeeState => {
        console.log("#List", action.employees);
        return {
            ...state,
            employees: action.employees
        }
    })
)