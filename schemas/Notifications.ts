/**

    Represents a notification.
    @typedef {Object} Notification
    @property {string} name - The name of the notification.
    @property {string} title - The title of the notification.
    @property {string} type - The type of the notification.
    @property {NotificationField[]} fields - The fields associated with the notification.
    */

/**

    Represents a field in the notification.
    @typedef {Object} NotificationField
    @property {string} name - The name of the field.
    @property {string} title - The title of the field.
    @property {string} type - The type of the field.
    @property {Object} [options] - The options for the field.
    @property {Function} [initialValue] - The initial value for the field.
    */

/**

    Defines a notification object.
    @param {Notification} notification - The notification object to define.
    @returns {Notification} - The defined notification object.
    */
    import { defineType, defineField } from 'sanity';

export default defineType({
name: 'notifications',
title: 'notifications',
type: 'document',
fields: [
defineField({
name: 'from',
title: 'from',
type: 'string',
}),
defineField({
name: 'timestamp',
type: 'datetime',
title: 'Timestamp',
options: {
dateFormat: 'YYYY-MM-DD',
timeFormat: 'HH:mm',
},
initialValue: () => new Date().toISOString(),
}),
defineField({
name: 'recipient',
title: 'recipient',
type: 'string',
}),
defineField({
name: 'status',
type: 'string',
title: 'Status',
options: {
list: ['sent', 'read'],
},
initialValue: 'sent',
}),
{
name: 'message',
title: 'message',
type: 'string',
},
],
});