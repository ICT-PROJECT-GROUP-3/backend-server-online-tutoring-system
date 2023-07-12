/**

    Represents a payment.
    @typedef {Object} Payment
    @property {string} name - The name of the payment.
    @property {string} title - The title of the payment.
    @property {string} type - The type of the payment.
    @property {PaymentField[]} fields - The fields associated with the payment.
    */

/**

    Represents a field in the payment.
    @typedef {Object} PaymentField
    @property {string} name - The name of the field.
    @property {string} title - The title of the field.
    @property {string} type - The type of the field.
    @property {Object} [options] - The options for the field.
    */

/**

    Defines a payment object.
    @param {Payment} payment - The payment object to define.
    @returns {Payment} - The defined payment object.
    */
    import { defineType, defineField } from 'sanity';

export default defineType({
name: 'payments',
title: 'Payments',
type: 'document',
fields: [
defineField({
name: 'amount',
title: 'Amount Paid',
type: 'number',
}),
defineField({
name: 'time',
title: 'Payment time',
type: 'datetime',
}),
{
name: 'tutor',
title: 'Tutor',
type: 'reference',
to: [{ type: 'tutor' }],
},
{
name: 'student',
title: 'Student',
type: 'reference',
to: [{ type: 'student' }],
},
{
name: 'subject',
title: 'Subject',
type: 'reference',
to: [{ type: 'subject' }],
},
],
});