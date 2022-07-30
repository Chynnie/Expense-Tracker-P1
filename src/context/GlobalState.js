import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Intial State
const initialState = {
	transactions: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions
	function deleteTransaction(deleteId) {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: deleteId,
		});
	}

	function addTransaction(addedTransaction) {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: addedTransaction,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
