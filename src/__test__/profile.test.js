import { render, screen, cleanup } from "@testing-library/react";
import Profile from "../pages/Profile";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "../store/store.ts"

// it("render page", () => {
//     render(
//         <Router>
//             <Provider store={store}>
//                     <Profile name={data.name} />
//             </Provider>
//         </Router>
//     )
// })

const data = {
    name: "enterName"
};

const testRender = () =>
    render(
        <Router>
            <Provider store={store}>
                <Profile name={data.name} />
            </Provider>
        </Router>
    );

describe("Render Profile Component", () => {
    beforeEach(testRender);
    afterEach(cleanup);

    it("Component Rendered Successfully", () => {
        const name = screen.getByText(data.name);

        expect(name).toBeInTheDocument();
    });
});