export const calculateTotalPrice = (
    qty,
    price,
    discountPercentage,
    discount,
    taxPercentage,
    tax
  ) => {
    const parsedQty = parseFloat(qty) || 0;
    const parsedPrice = parseFloat(price) || 0;
    const parsedDiscountPercentage = parseFloat(discountPercentage) || 0;
    const parsedTaxPercentage = parseFloat(taxPercentage) || 0;
  
    const calculatedDiscount =
      parsedDiscountPercentage && parsedPrice
        ? parsedPrice * (parsedDiscountPercentage / 100)
        : 0;
  
    const calculatedTax = parsedPrice * (parsedTaxPercentage / 100) || 0;
  
    const calculatedTotalPrice =
      parsedQty * parsedPrice - calculatedDiscount + calculatedTax || 0;
  
    return {
      discount: calculatedDiscount.toFixed(2),
      tax: calculatedTax.toFixed(2),
      totalPrice: calculatedTotalPrice.toFixed(2)
    };
  };
  