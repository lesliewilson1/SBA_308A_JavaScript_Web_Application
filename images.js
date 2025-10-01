
//-------------------------------------------testing to see if api functions-------------------------------------------------------------//

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

export function getAvatar(state) {
    return `https://api.dicebear.com/6.x/pixel-art/svg?seed=${encodeURIComponent(state)}`;
}

getAvatar();

export async function postAvatar(state) {
    const avatar = getAvatar(state);
    const api = 'https://api.restful-api.dev/objects';
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
 


//-----------------------------------------PATCH/POST/PUT-----------------------------------------------------//

//Create a data backpack for api
const backpack = {
    name: state,
    data: {
        clicked: true,
        avatar: avatar
    }
};

//If statement to display data in console.log

//PATCH example

const patchBackpack = {
    data: backpack.data
};

if (invalid) {
    const patchUrl = `${api}/${invalid.id}`;
    const patchResponse = await fetch(patchUrl, {
    
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(patchBackpack)
});

const patchResult = await patchResponse.json();
console.log(patchResult);

// PUT example

    const putUrl = `${api}/${invalid.id}`;
    const putResponse = await fetch(putUrl, {

    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(patchBackpack)
});

const putResult = await putResponse.json();
console.log(putResult);

} else {

// POST example

    const postResponse = await fetch(api, {

    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(patchBackpack)
});

const postResult = await postResponse.json();
console.log(postResult);

} 
    


//------------------------------------------Patch/Post/Put END-----------------------------------------------------//

//Update API and log data

const updatedResponse = await fetch(api);
const updatedData = await updatedResponse.json();

} //End of async function

postAvatar();


 