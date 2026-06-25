// ==========================
// BLOGSPHERE APP.JS
// ==========================

// API URL
const API_URL = "http://localhost:8080/api";

// ==========================
// REGISTER
// ==========================

async function registerUser() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(!name || !email || !password){
        alert("Please fill all fields");
        return;
    }

    const user = {
        name: name,
        email: email,
        password: password
    };

    try{

        const response = await fetch(API_URL + "/auth/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        });

        if(response.ok){

            alert("Registration Successful");

            window.location.href="login.html";

        }else{

            const msg = await response.text();
            alert(msg);
        }

    }catch(error){

        console.error(error);
        alert("Registration Failed");
    }
}

// ==========================
// LOGIN
// ==========================

async function loginUser(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
        email: email,
        password: password
    };

    try{

        const response = await fetch(
            "http://localhost:8080/api/auth/login",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            }
        );

        if(response.ok){

            const message = await response.text();

            alert(message);

            localStorage.setItem("userEmail", email);

            window.location.href = "dashboard.html";

        }else{

            alert("Invalid Email or Password");
        }

    }catch(error){

        console.error(error);

        alert("Login Failed");
    }
}

// ==========================
// LOGOUT
// ==========================

function logout(){

    localStorage.clear();

    alert("Logged Out Successfully");

    window.location.href="login.html";
}

// ==========================
// CREATE BLOG
// ==========================

async function createPost(){

    const title =
    document.getElementById("title").value;

    const content =
    document.getElementById("content").value;

    const author =
    document.getElementById("author").value;

    if(title==="" || content==="" || author===""){

        alert("Please fill all fields");
        return;
    }

    const post={

        title:title,
        content:content,
        author:author

    };

    try{

        const response=await fetch(
        "http://localhost:8080/api/posts",
        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(post)

        });

        if(response.ok){

            alert("🎉 Blog Published Successfully");

            window.location.href="blogs.html";

        }else{

            alert("Failed to publish blog");
        }

    }catch(error){

        console.log(error);

        alert("Error publishing blog");
    }
}

// ==========================
// LOAD BLOGS
// ==========================

async function loadBlogs(){

    const container=document.getElementById("blogsContainer");

    if(!container){
        return;
    }

    container.innerHTML="Loading Blogs...";

    try{

        const response=await fetch(API_URL + "/posts");

        const blogs=await response.json();

        container.innerHTML="";

        blogs.reverse().forEach(blog=>{

            container.innerHTML += `

            <div class="blog-card">

                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200">

                <div class="blog-content">

                    <span class="category">Technology</span>

                    <h2>${blog.title}</h2>

                    <p>${blog.content}</p>

                    <br>

                    <strong>Author:</strong> ${blog.author}

                    <br><br>

                    <button class="like-btn" onclick="likePost(this)">
                        ❤️ Like
                    </button>

                </div>

            </div>

            `;
        });

    }catch(error){

        console.error(error);
    }
}

// ==========================
// BLOG LIKE
// ==========================

function likePost(button){

    let count=button.getAttribute("data-count");

    if(count==null){
        count=0;
    }

    count++;

    button.setAttribute("data-count",count);

    button.innerHTML="❤️ Likes " + count;
}

// ==========================
// SEARCH BLOG
// ==========================

function searchBlogs(){

    let input=document.getElementById("searchInput").value;

    input=input.toLowerCase();

    let cards=document.getElementsByClassName("blog-card");

    for(let i=0;i<cards.length;i++){

        let text=cards[i].innerText.toLowerCase();

        if(text.includes(input)){

            cards[i].style.display="block";

        }else{

            cards[i].style.display="none";
        }
    }
}

// ==========================
// DARK MODE
// ==========================

function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");
    }
}

// ==========================
// LOAD THEME
// ==========================

window.onload=function(){

    if(localStorage.getItem("theme")==="dark"){

        document.body.classList.add("dark-mode");
    }

    loadBlogs();
}

// ==========================
// NEWSLETTER
// ==========================

function subscribeNewsletter(){

    const email=document.getElementById("newsletterEmail").value;

    if(email===""){

        alert("Enter Email");
        return;
    }

    alert("Subscribed Successfully");

    document.getElementById("newsletterEmail").value="";
}

// ==========================
// CONTACT FORM
// ==========================
async function sendMessage(){

    const name =
    document.getElementById("contactName").value;

    const email =
    document.getElementById("contactEmail").value;

    const message =
    document.getElementById("contactMessage").value;

    if(name==="" || email==="" || message===""){

        alert("Fill all fields");
        return;
    }

    try{

        const response = await fetch(
            "http://localhost:8080/api/contact",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:name,
                    email:email,
                    message:message
                })
            }
        );

        if(response.ok){

            alert("Message Sent Successfully");

            document.getElementById("contactName").value="";
            document.getElementById("contactEmail").value="";
            document.getElementById("contactMessage").value="";
        }
        else{

            alert("Failed to Send Message");
        }

    }catch(error){

        console.log(error);
        alert("Server Error");
    }
}

// ==========================
// ANALYTICS DEMO
// ==========================

function showAnalytics(){

    alert(
        "Total Blogs: 25\n" +
        "Total Likes: 540\n" +
        "Total Users: 120"
    );
}