// import {io} from 'socket.io-client'

// export const initSocket = async () => {
//     const options = {
//         'force new connection': true,
//         reconnectionAttempt: 'Infinity',
//         timeout: 10000,
//         transports: ['websocket'],
//     };
//     return io(import.meta.env.VITE_REACT_APP_BACKEND_URL, options);
// };

import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };

    // Split the URLs based on the semicolon
    const backendUrls = import.meta.env.VITE_REACT_APP_BACKEND_URL.split(';');

    // Use the first URL in the array
    const backendUrl = backendUrls[0];

    return io(backendUrl, options);
};