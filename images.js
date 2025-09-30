const api = 'https://api.restful-api.dev/objects';

//testing to see if api functions

// async function fetchApi() {
//     try {
//         const response = await fetch(api);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     }   catch (error) {
//         console.log('Error fetching data', error)
//     }
// }

// fetchApi();

//------------------------------------------Generate profile pic based on state name-----------------------------------------------------//

function getAvatar(state) {
    return `https://api.dicebear.com/6.x/pixel-art/svg?seed=${encodeURIComponent(stateName)}`;
}

async function postAvatar(state) {
    const avatar = getAvatar(state);
    let invalid = null;

    try {
        const response = await fetch (api);
        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            if (data[i].name === state) {
                invalid = data[i];
                break;
            }
        }
    }  catch (error) {
        console.log('Error fetching data', error)
    }
 
}

