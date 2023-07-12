/**

    Represents a grade.
    @typedef {Object} Grade
    @property {string} name - The name of the grade.
    @property {string} title - The title of the grade.
    @property {string} type - The type of the grade.
    @property {GradeField[]} fields - The fields associated with the grade.
    */

/**

    Represents a field in the grade.
    @typedef {Object} GradeField
    @property {string} name - The name of the field.
    @property {string} title - The title of the field.
    @property {string} type - The type of the field.
    @property {Function} validation - The validation function for the field.
    */

/**

    Defines a grade object.
    @param {Grade} grade - The grade object to define.
    @returns {Grade} - The defined grade object.
    */
    import { defineType, defineField } from 'sanity';

export default defineType({
name: 'grades',
title: 'Grades',
type: 'document',
fields: [
defineField({
name: 'grade',
title: 'Grade',
type: 'number',
validation: Rule => Rule.required(),
}),
{
name: 'subject',
title: 'Subject',
type: 'reference',
to: [{ type: 'subject' }],
validation: Rule => Rule.required(),
},
{
name: 'student',
title: 'Student',
type: 'reference',
to: [{ type: 'student' }],
validation: Rule => Rule.required(),
},
]
});