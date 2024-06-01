
var reqURL = "http://localhost:4000/user";

async function handleSubmit(event) {
    event.preventDefault();
    try {
        let userDetails = {
            name: event.target.name.value,
            phoneNumber: event.target.phoneNumber.value,
            Email: event.target.Email.value,
        };        
        let postData = await axios.post(`${reqURL}`, userDetails);
        let dataPost=JSON.parse(postData.config.data)
        displayUserOnScreen(dataPost);
        document.getElementById("name").value ="";
        document.getElementById("Email").value ="";
        document.getElementById("phoneNumber").value ="";
    } catch (error) {
        console.log('Error creating user:', error);
    }
}

window.addEventListener("DOMContentLoaded", async function () {
    try {
        let getData = await axios.get(`${reqURL}`);
        getData.data.forEach(user => displayUserOnScreen(user));
        // displayUserOnScreen(JSON.stringify(getData.data));
    } catch (error) {
        console.log('Error fetching users:', error);
    }
});

function displayUserOnScreen(user) {
    const ulist = document.querySelector("ol");
    const userItem = document.createElement("li");
    const child = `${user.name}-${user.Email}-${user.phoneNumber} <button id="delete">Delete</button> <button id="edit">Edit</button>`;
    userItem.innerHTML = child;
    ulist.appendChild(userItem);

    const deleteBtn = userItem.querySelector("#delete");
    deleteBtn.addEventListener("click", async function () {      
        try {
            deleteBtn.parentElement.remove();            
            await axios.delete(`${reqURL}/${user.id}`);
            
        } catch (error) {
            console.log('Error deleting user:', error);
        }
    });

    const editBtn = userItem.querySelector("#edit");
    editBtn.addEventListener("click", async function () {
        document.getElementById("name").value = user.name;
        document.getElementById("Email").value = user.Email;
        document.getElementById("phoneNumber").value = user.phoneNumber;
        // editBtn.parentElement.remove();
        try {
            editBtn.parentElement.remove(); 
            await axios.delete(`${reqURL}/${user.id}`);
            
        } catch (error) {
            console.log('Error deleting user:', error);
        }

    });
}
