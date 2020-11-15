import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { AddUser } from "./AddUser";
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducer from "../store/reducer"
import { fireEvent } from '@testing-library/react'
let container: HTMLElement;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();

});


// it("should not call saveUser if pasword is generate", () => {
//     const store: Store<UserState, UserAction> & {
//         dispatch: DispatchType
//     } = createStore(reducer, applyMiddleware(thunk))
//     const saveUser = jest.fn();

//     render(<Provider store={store}>
//         <AddUser saveUser={saveUser} /> </Provider>, container);


//     const genPwdButton = document.querySelector("[name=generate]");
//     expect(genPwdButton?.innerHTML).toBe("Generate");
//     // fireEvent.click(genPwdButton)

//     const saveUserButton = document.querySelector("[data-testid=saveUser]");
//     expect(saveUserButton?.innerHTML).toBe("Save");
//     fireEvent.click(saveUserButton)

//     expect(saveUser).toHaveBeenCalledTimes(0);

// });




it("should call saveUser if pasword is generate", () => {
    const store: Store<UserState, UserAction> & {
        dispatch: DispatchType
    } = createStore(reducer, applyMiddleware(thunk))
    const saveUser = jest.fn();

    act(() => {
        render(<Provider store={store}>
            <AddUser saveUser={saveUser} /> </Provider>, container);
    });

    const genPwdButton = document.querySelector("[name=generate]");
    expect(genPwdButton?.innerHTML).toBe("Generate");
    act(() => {
        fireEvent.click(genPwdButton)
        genPwdButton?.dispatchEvent(new MouseEvent("click"));
    });
    const saveUserButton = document.querySelector("[data-testid=saveUser]");
    expect(saveUserButton?.innerHTML).toBe("Save");
    act(() => {
        fireEvent.click(saveUserButton)
    });
    expect(saveUser).toHaveBeenCalledTimes(1);

});