import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(CheckoutForm)
});

test("shows success message on submit with form details", async () => {
    //Arrange: render the checkoutform
        render(CheckoutForm);
    //Act: submit form
        const fNameInput = screen.getByLabelText("First Name:"); 
        userEvent.type(fNameInput, "Brina");

        const lNameInput = screen.getByLabelText("Last Name:"); 
        userEvent.type(lNameInput, "Landry");

        const addressInput = screen.getByLabelText("Address:"); 
        userEvent.type(addressInput, "3333 Programmer Ln");

        const cityInput = screen.getByLabelText("City:"); 
        userEvent.type(cityInput, "Ruby");

        const stateInput = screen.getByLabelText("State:");
        userEvent.type(stateInput, "On Rails");

        const zipInput = screen.getByLabelText("Zip:") ;
        userEvent.type(zipInput, "42429");

        const submitButton = screen.getByRole("button");
        userEvent.click(submitButton);

    //Assert: success message shows on submitted
    const successMessage = await screen.getByTestId("successMessage");
    expect(successMessage).toBeInTheDocument();


});
