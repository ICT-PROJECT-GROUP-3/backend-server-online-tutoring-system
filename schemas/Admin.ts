/**

    Represents an admin.
    @typedef {Object} Admin
    @property {string} name - The name of the admin.
    @property {string} title - The title of the admin.
    @property {string} type - The type of the admin.
    @property {AdminField[]} fields - The fields associated with the admin.
    */

/**

    Represents a field in the admin.
    @typedef {Object} AdminField
    @property {string} name - The name of the field.
    @property {string} title - The title of the field.
    @property {string} type - The type of the field.
    @property {Function} validation - The validation function for the field.
    */

/**

    Defines an admin object.
    @param {Admin} admin - The admin object to define.
    @returns {Admin} - The defined admin object.
    */
    import { defineType, defineField } from 'sanity';

export default defineType({
name: 'admin',
title: 'admin',
type: 'document',
fields: [
defineField({
name: 'first_name',
title: 'First name',
type: 'string',
validation: Rule => Rule.required(),
}),
defineField({
name: 'last_name',
title: 'Last name',
type: 'string',
validation: Rule => Rule.required(),
}),
]
});