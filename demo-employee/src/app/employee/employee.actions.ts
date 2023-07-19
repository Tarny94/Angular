import { createAction, props } from "@ngrx/store";
import { IEmployee } from "./employee";


export const toggleIfIsTable = createAction("[Employee] toggle employee table");
export const setCurrentEmployee = createAction(
  "[Employee] set current product",
  props<{employee : IEmployee}>()
  );
export const setEmployees  = createAction("[Employee] set employees", 
  props<{employees : IEmployee[]}>()
)  
export const clearCurrentEmployee = createAction("[Employee] clear current product");
export const initCurrentEmployee = createAction("[Employee] initialize current product");
