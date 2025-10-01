import {stateClickHandlers} from './map.js';

stateClickHandlers();

import {getAvatar, postAvatar} from './images.js';

//Attach Random image per state
document.querySelectorAll('svg path[data-name]').forEach(function(displayData){
    displayData.addEventListener('click', async function(){
        const state = displayData.getAttribute('data-name');
        const avatarUrl = getAvatar(state);

        console.log('Click the link to view the state\'s profile pic!🎨',avatarUrl);

        const api = `https://68dcb02b7cd1948060ab00cb.mockapi.io/avatarprofilepic/avatarprofilepic`;
        try {
            const response = await fetch(api);
            const data = await response.json();
            
            if (data.length > 0) {
                 const randomIndex = Math.floor(Math.random() * data.length);
                 console.log('Profile Pic User Name👤:',data[randomIndex]);
            } else {
                console.log('No data found for:', state);
            }
        } catch (error) {
            console.error('ERROR HERE:', error);
        }
    });
});

//This doesn't do anything here
postAvatar();

