const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});


sections.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});
const glow = document.querySelector(".cursor-glow");


document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";

glow.style.top = e.clientY + "px";

});
const imageUpload = document.getElementById("imageUpload");

imageUpload.addEventListener("change", function(){

const file = this.files[0];

if(file){

  const reader = new FileReader();

reader.onload = function(e){

document.getElementById("previewImage").src = e.target.result;

document.getElementById("imageStatus").innerHTML =
"Ira AI is analyzing your image... 🧠";


setTimeout(()=>{

document.getElementById("imageStatus").innerHTML =
"Analysis complete. Visual intelligence activated ✓";

},3000);

}

reader.readAsDataURL(file);

}

});
const text = "Hello! I am Ira AI. I can help you create, analyze images, and solve problems.";

let index = 0;

function typeAI(){

if(index < text.length){

document.getElementById("aiTyping").innerHTML += text.charAt(index);

index++;

setTimeout(typeAI,50);

}

}

typeAI();
const sendBtn = document.getElementById("sendBtn");

sendBtn.onclick = function(){

const message = document.getElementById("userMessage").value;


if(message){

document.getElementById("chatMessages").innerHTML +=

`
<div class="user-message-box">
${message}
</div>

<div class="ai-message-box">
Ira AI: I understand your question. This is a demo AI response.
</div>
`;

document.getElementById("userMessage").value="";

}

};