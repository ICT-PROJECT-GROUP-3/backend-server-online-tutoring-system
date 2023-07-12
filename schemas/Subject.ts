/**

    Represents a subject.
    @typedef {Object} Subject
    @property {string} name - The name of the subject.
    @property {string} title - The title of the subject.
    @property {string} type - The type of the subject.
    @property {SubjectField[]} fields - The fields associated with the subject.
    */

/**

    Represents a field in the subject.
    @typedef {Object} SubjectField
    @property {string} name - The name of the field.
    @property {string} title - The title of the field.
    @property {string} type - The type of the field.
    @property {Function} validation - The validation function for the field.
    */

/**

    Defines a subject object.
    @param {Subject} subject - The subject object to define.
    @returns {Subject} - The defined subject object.
    */
import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
   name:"subject",
   title:"subject",
   type:"document",
   fields: [
        defineField({
            name:"subject",
            title:"subject",
            type:"string",
            // validation: Rule => Rule.required(),
        }),
     
   ],
});