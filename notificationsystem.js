/**
 * notificationSystem - Simple Visual Notification Manager
 * Author: MaryGiochi
 * License: Custom
 */

const notificationSystem = {
    /**
     * Displays a notification at the top of the screen.
     * @param {string} message - The message to display.
     * @param {string} [type='info'] - Type of notification: 'info', 'success', 'error'.
     * @param {number} [duration=3000] - Duration in milliseconds before it disappears.
     */
    show(message, type = 'info', duration = 3000) {
        if (typeof message !== 'string' || message.trim() === '') {
            console.error('[notificationSystem] Invalid message.');
            return;
        }

        const validTypes = ['info', 'success', 'error'];
        if (!validTypes.includes(type)) {
            console.warn('[notificationSystem] Invalid type. Defaulting to "info".');
            type = 'info';
        }

        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = '5px';
        notification.style.color = '#fff';
        notification.style.fontFamily = 'Arial, sans-serif';
        notification.style.fontSize = '14px';
        notification.style.zIndex = '1000';
        notification.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';

        switch (type) {
            case 'success':
                notification.style.backgroundColor = '#4caf50';
                break;
            case 'error':
                notification.style.backgroundColor = '#f44336';
                break;
            default:
                notification.style.backgroundColor = '#2196f3';
        }

        document.body.appendChild(notification);

        setTimeout(() => {
            document.body.removeChild(notification);
        }, duration);
    }
};

// Example usage:
// notificationSystem.show('Welcome to the game!', 'success', 2000);
// notificationSystem.show('An error occurred.', 'error');

module.exports = notificationSystem;
