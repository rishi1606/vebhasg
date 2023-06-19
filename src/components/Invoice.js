import React, { useState } from 'react'
import InvoiceForm from './InvoiceForm';
import InvoiceGrid from './InvoiceGrid';
import { calculateTotalPrice } from '../utils/utils';

const Invoice = () => {
    const [invoices, setInvoices] = useState([]);
    const handleSubmit = (formValues) => {
        const newInvoice = { ...formValues };
        setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
    };
    const handleEdit = (index, field, value) => {
        setInvoices((prevInvoices) => {
            const updatedInvoices = [...prevInvoices];
            updatedInvoices[index][field] = value;

            const {
                discount,
                tax,
                totalPrice
            } = calculateTotalPrice(
                updatedInvoices[index].qty,
                updatedInvoices[index].price,
                updatedInvoices[index].discountPercentage,
                updatedInvoices[index].discount,
                updatedInvoices[index].taxPercentage,
                updatedInvoices[index].tax
            );

            updatedInvoices[index].discount = discount;
            updatedInvoices[index].tax = tax;
            updatedInvoices[index].totalPrice = totalPrice;

            return updatedInvoices;
        });
    };
    return (
        <>
            <div>
                <h2>Invoice Form</h2>
                <InvoiceForm onSubmit={handleSubmit} />
                <h2>Invoice Grid</h2>
                <InvoiceGrid invoices={invoices} onEdit={handleEdit} />
            </div>
        </>
    )
}

export default Invoice
