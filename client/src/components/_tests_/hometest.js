// import React from 'react'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import { render, cleanup, fireEvent, screen } from '@testing-library/react';
// import { initialState, rootReducer } from '../../store/reducer'
// import Home from '../Home/index'



// const renderWithRedux = (
//     component,
//     { store = createStore(rootReducer, initialState) } = {}
//     // { initialState, store = createStore(rootReducer, initialState) } = {}
 
//   ) => {
//     return {
//       ...render(<Provider store={store}>{component}</Provider>),
//       store,
//     }
//   }
  
// afterEach(cleanup);

// it('checks loading page while state is loading', () => {
//     const { getByTestId } = renderWithRedux(<Home />)
//     expect(getByTestId('loadingComponent')).toBe(true)
//   })
  