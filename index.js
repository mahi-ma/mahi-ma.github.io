var data = [
    {
        front : "About",
        back : "Tech Stack"
    },
    // {
    //     front : "Work Samples",
    //     back : "Certifications and Interests"
    // },
    {
        front : "Resume",
        back : "Profile"
    }
];

var rightSection = document.getElementById("rightSection");
var fragment = document.createDocumentFragment(); 

for(let val in data){
    const rightContent = document.createElement("div");
    rightContent.className = "right-content right-content" + val;
    rightContent.id = "rightContent" + val;
    rightContent.onclick = function(){
        handleClick(rightContent,val)
    }
    const frontEle = document.createElement("div");
    frontEle.className = "front";
    frontEle.id = "front" + val;
    const backEle = document.createElement("div");
    backEle.className = "back";
    backEle.id = "back" + val;
    frontEle.innerHTML = returnHTML(data[val].front);
    backEle.innerHTML = returnHTML(data[val].back);
    rightContent.appendChild(backEle);
    rightContent.appendChild(frontEle);
    fragment.appendChild(rightContent);
}
rightSection.appendChild(fragment);


function getAboutContent(){
    return `<div class='list-items'>
    <div>
    <h3><i>Self motivated and 3+ years experienced Software Engineer. The following points captures my interest and skills :-</i></h3>
    <ul class="info-list">
    <li>Code fanatic</li>
    <li>MERN stack developer with keen eye for detail</li>
    <li>Javascript developer</li>
    <li>3+ years of expertise in web development</li>
    <li>Skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies</li>
    <li>Experience in backend development</li>
    <li>ML/AI/Data Science enthusiast</li>
    <li>Good hold over data structures and algorithms</li>
    <li>Highly interested in building responsive and well optimised apps</li>
    </ul>
    <div class="disclaimer-text">
    <h4>Open to know more</h4><img src="./images/right-arrow.png" alt="right" />
    </div>
    </div>
    </div>`
}

function getHeadingText(heading){
    return `<h2 class="heading-text">${heading}</h2>`
}

function getTechStack(){
    return`
    <div class="flex items-center heading-tech">
    ${getHeadingText("Tech Stack")}
    <img src="./images/tool.png" alt="" />
    </div>
    <div class="flex flex-col h-85 justify-between">
    <div class="grid">
    <img src="./images/js.png" alt="" />
    <img src="./images/html.png" alt="" />
    <img src="./images/git.png" alt="" />
    <img src="./images/linux.png" alt="" />
    <img src="./images/nodejs.png" alt="" />
    <img src="./images/react.png" alt="" />
    <img src="./images/redux.png" alt="" />
    <img src="./images/sass.png" alt="" />
    <img src="./images/jest.png" alt="" />
    </div>
    <div class="tech-stack-names">
    <p>React | React Native | Redux | Javascript | Nodejs | MongoDB | MySQL | html | Css | Sass | Styled Components | linux | git | Data structures and algorithms | Jest | Webpack | Puppeteer | Data Science | C++ | Python</p>
    </div>
    </div>
    `
}

function getResumeContent(){
    return`
    <div class="resume-page">
    <img class="resume-img" src="./images/cv.jpg" alt="resume" />
    <div id="downloadButton" class="download-option">
    <h4>Download Resume</h4>
    <img src="./images/down.png" alt="" />
    </div>
    </div>
    `
}

function profileSection(){
    return`
    <div class="profile-section">
    <div class="profile-mask">
    <div class="followme-section">
    <div class="logo-section">
    <a href="https://github.com/mahi-ma" target="_blank"><img src="./images/github.png" alt="" /></a>
    <a href="https://www.linkedin.com/in/mahima-sharma-b7335a12b/" target="_blank"><img src="./images/linkedin1.png" alt="" /></a>
    <a href="https://mahimasharma0309.medium.com/" target="_blank"><img src="./images/medium.png" alt="" /></a>
    <a href="https://www.hackerearth.com/@mahi2700" target="_blank"><img src="./images/hackerearth.png" alt="HackerEarth badge"></a>
    </div>
    </div>
    </div>
    </div>
    `
}

// const samples = [
//     {
//         "name": "Radio Mirchi USA",
//         "url" : "https://radiomirchiusa.com/",
//         "skills": "React | Redux | Tailwind | Sass | NodeJs | MongoDB"
//     },
//     {
//         "name": "Cairn India",
//         "url" : "https://radiomirchiusa.com/",
//         "skills": "React | Redux | Tailwind | Sass | NodeJs | MongoDB"
//     },
// ]

// function getWorkSamples(){
//     return`
//     <div class="work-samples-heading flex items-center justify-center">
//     ${getHeadingText("Work Samples")}
//     <img src="./images/Work.png" alt="" />
//     </div>
//     <div class="work-samples-list">
//     ${
//         samples.map((sample,index)=>{
//             return(
//                 <div class="work-sample">

//                 </div>
//             )
//         })
//     }
//     </div>
//     `
// }

function returnHTML(node){
    switch(node){
        case "About" : return getAboutContent();
        case "Tech Stack" : return getTechStack();
        case "Work Samples" : return getWorkSamples();
        case "Resume" : return getResumeContent();
        case "Profile": return profileSection();
        default : return ""
    }
}


function handleClick(rightContentElement,index){
    if(rightContentElement.classList.contains("flip-forward")){
        rightContentElement.classList.remove("flip-forward");
        rightContentElement.classList.add("flip-back");
    }else{
        rightContentElement.classList.add("flip-forward");
        rightContentElement.classList.remove("flip-back");
    }

    if(rightContentElement.classList.contains("right-content" + index)){
        rightContentElement.classList.remove("right-content" + index);
        rightContentElement.classList.add("rightContentFlipped" + index);
    }
    else{
        rightContentElement.classList.add("right-content" + index);
        rightContentElement.classList.remove("rightContentFlipped" + index); 
    }
}

var downloadButton = document.getElementById("downloadButton");
var anchors = document.querySelector("a");
anchors.onclick = function(e){
    e.stopPropagation();
}
downloadButton.onclick = function(e){
    e.stopPropagation();
    console.log("generating resume...")
    window.open("https://drive.google.com/file/d/1aO6LH5OlPDlYmWEplHd8_xveT8neUKq0/view?usp=sharing","_blank");
}
document.getElementById("atag").addEventListener("click", function(event) {
    console.log("href clicked, lets try to stop event propagation");
    event.preventDefault();
    return false;
});