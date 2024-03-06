import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'; //импортируем todoSlice, но называем todoReducer, поскольку импорт был default, а не именованный

export default configureStore ({
	reducer:{
		todos: todoReducer,
	}
});