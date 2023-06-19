import React, { useState } from 'react'
import '../App.css';
import {
    TextField,
    Button,
} from '@mui/material';
const initialState = {
    qty: '',
    price: '',
    discountPercentage: '',
    discount: '',
    taxPercentage: '',
    tax: '',
    totalPrice: ''
};
const calculateTotalPrice = (
    qty,
    price,
    discountPercentage,
    discount,
    taxPercentage,
    tax
) => {
    const parsedQty = parseFloat(qty);
    const parsedPrice = parseFloat(price);
    const parsedDiscountPercentage = parseFloat(discountPercentage);
    const parsedTaxPercentage = parseFloat(taxPercentage);

    const calculatedDiscount = parsedPrice * (parsedDiscountPercentage / 100);
    const calculatedTax = parsedPrice * (parsedTaxPercentage / 100);

    const calculatedTotalPrice =
        parsedQty * parsedPrice - calculatedDiscount + calculatedTax;

    return {
        discount: calculatedDiscount.toFixed(2),
        tax: calculatedTax.toFixed(2),
        totalPrice: calculatedTotalPrice.toFixed(2)
    };
};

const InvoiceForm = ({ onSubmit }) => {
    const [formValues, setFormValues] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedValues = { ...formValues, [name]: value };

        const {
            discount,
            tax,
            totalPrice
        } = calculateTotalPrice(
            updatedValues.qty,
            updatedValues.price,
            updatedValues.discountPercentage,
            updatedValues.discount,
            updatedValues.taxPercentage,
            updatedValues.tax
        );

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
            discount,
            tax,
            totalPrice
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValues);
        setFormValues(initialState);
    };
    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <TextField
                label="Qty"
                name="qty"
                value={formValues.qty}
                onChange={handleChange}
                required
            />
            <TextField
                label="Price"
                name="price"
                value={formValues.price}
                onChange={handleChange}
                required
            />
            <TextField
                label="Discount %"
                name="discountPercentage"
                value={formValues.discountPercentage}
                onChange={handleChange}
                required
            />
            <TextField
                label="Discount"
                name="discount"
                value={formValues.discount}
                onChange={handleChange}
            />
            <TextField
                label="Tax %"
                name="taxPercentage"
                value={formValues.taxPercentage}
                onChange={handleChange}
                required
            />
            <TextField
                label="Tax"
                name="tax"
                value={formValues.tax}
                onChange={handleChange}
            />
            <TextField
                label="Total Price"
                name="totalPrice"
                value={formValues.totalPrice}
                onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    )
}

export default InvoiceForm
