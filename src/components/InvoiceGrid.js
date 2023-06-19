import React from 'react'
import {
    TextField,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper
} from '@mui/material';
const InvoiceGrid = ({ invoices, onEdit }) => {
  return (
    <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Qty</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Discount %</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell>Tax %</TableCell>
              <TableCell>Tax</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    value={invoice.qty}
                    onChange={(e) => onEdit(index, 'qty', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={invoice.price}
                    onChange={(e) => onEdit(index, 'price', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={invoice.discountPercentage}
                    onChange={(e) =>
                      onEdit(index, 'discountPercentage', e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={invoice.discount}
                    onChange={(e) => onEdit(index, 'discount', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={invoice.taxPercentage}
                    onChange={(e) =>
                      onEdit(index, 'taxPercentage', e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={invoice.tax}
                    onChange={(e) => onEdit(index, 'tax', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={invoice.totalPrice}
                    onChange={(e) =>
                      onEdit(index, 'totalPrice', e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default InvoiceGrid
