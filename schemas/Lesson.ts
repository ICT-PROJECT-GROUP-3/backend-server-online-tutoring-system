/**

    Represents a lesson.
    @typedef {Object} Lesson
    @property {string} name - The name of the lesson.
    @property {string} title - The title of the lesson.
    @property {string} type - The type of the lesson.
    @property {LessonField[]} fields - The fields associated with the lesson.
    */

/**

    Represents a field in the lesson.
    @typedef {Object} LessonField
    @property {string} name - The name of the field.
    @property {string} title - The title of the field.
    @property {string} type - The type of the field.
    @property {Function} validation - The validation function for the field.
    */

/**

    Defines a lesson object.
    @param {Lesson} lesson - The lesson object to define.
    @returns {Lesson} - The defined lesson object.
    */
    import { defineType, defineField } from 'sanity';

export default defineType({
name: 'lesson',
title: 'lesson',
type: 'document',
fields: [
defineField({
name: 'lesson_name',
title: 'lesson',
type: 'string',
validation: Rule => Rule.required(),
}),
defineField({
name: 'date',
title: 'date',
type: 'datetime',
validation: Rule => Rule.required(),
}),
defineField({
name: 'duration',
title: 'Duration (minutes)',
type: 'number',
validation: Rule => Rule.required(),
}),
defineField({
name: 'rate',
title: 'rate',
type: 'string',
validation: Rule => Rule.required(),
}),
{
name: 'subject',
title: 'Subject',
type: 'reference',
to: [{ type: 'subject' }],
validation: Rule => Rule.required(),
},
],
});