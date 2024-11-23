import EventEmitter from 'events';

const notifications = new EventEmitter();

// Notify the user when a new notification arrives
notifications.on('newNotification', (message) => {
  console.log(`Notification: ${message}`);
});

// Simulate incoming notifications
setTimeout(() => notifications.emit('newNotification', 'You have a new message!'), 1000);
setTimeout(() => notifications.emit('newNotification', 'Your order has been shipped!'), 2000);
