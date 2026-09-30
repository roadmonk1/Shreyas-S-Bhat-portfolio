const projects={
talentiq:{tag:"AI / CAREER INTELLIGENCE",title:"TalentIQ AI",desc:"An AI-powered career intelligence platform for resume analysis, career guidance, job opportunities and personalized recommendations.",idea:"Make career guidance more personalized and actionable.",built:"Resume and career analysis workflows with a full-stack web experience.",stack:"Python · Flask · React.js",status:"Built / evolving",repo:"https://github.com/roadmonk1/TalentIQ-AI"},
painsense:{tag:"MULTIMODAL AI / ACCESSIBILITY",title:"PainSense AI",desc:"An accessibility-focused system being developed for pain communication and assessment.",idea:"Explore multimodal signals so people have more accessible ways to communicate pain.",built:"A multimodal concept combining facial expressions, body cues, voice analysis and sign-language communication.",stack:"Python · OpenCV · Speech Recognition",status:"In development",repo:"https://github.com/roadmonk1/PAINSENSE-AI"},
datapilot:{tag:"AI / DATA ANALYTICS",title:"DataPilot AI",desc:"An AI-powered data analysis platform that converts natural-language questions into SQL and presents results through visualizations and insights.",idea:"Let people ask questions about data without having to write SQL manually.",built:"Natural-language → SQL workflow with PostgreSQL, visualizations and AI-generated insights.",stack:"Python · FastAPI · PostgreSQL",status:"Built / evolving",repo:"https://github.com/roadmonk1/DATAPILOT-AI"},
nids:{tag:"CYBERSECURITY",title:"Rule-Based NIDS",desc:"A rule-based network intrusion detection system that monitors traffic and detects suspicious behavior.",idea:"Create a practical security-monitoring system that can surface suspicious network activity.",built:"Packet monitoring, port-scan and DoS detection, alert logging, IP blacklisting and a live dashboard.",stack:"Python · Scapy · Streamlit",status:"Built",repo:"https://github.com/roadmonk1/Rule-Based-NIDS"}
};

const modal=document.getElementById("caseModal");
function openProject(key){
 const p=projects[key]; if(!p)return;
 document.getElementById("modalTag").textContent=p.tag;
 document.getElementById("modalTitle").textContent=p.title;
 document.getElementById("modalDesc").textContent=p.desc;
 document.getElementById("modalIdea").textContent=p.idea;
 document.getElementById("modalBuilt").textContent=p.built;
 document.getElementById("modalStack").textContent=p.stack;
 document.getElementById("modalStatus").textContent=p.status;
 document.getElementById("modalRepo").href=p.repo;
 modal.classList.add("open"); document.body.style.overflow="hidden";
}
document.querySelectorAll("[data-project]").forEach(c=>c.addEventListener("click",()=>openProject(c.dataset.project)));
document.getElementById("closeModal").onclick=()=>{modal.classList.remove("open");document.body.style.overflow=""};
modal.addEventListener("click",e=>{if(e.target===modal){modal.classList.remove("open");document.body.style.overflow=""}});

const command=document.getElementById("command"), input=document.getElementById("cmdInput"), list=document.getElementById("cmdList");
const commands=[
 ["work","Go to featured projects","#work"],["lab","Open GitHub lab","#lab"],["experience","View internship","#experience"],
 ["about","About Shreyas","#about"],["contact","Contact Shreyas","#contact"],["github","Open GitHub","https://github.com/roadmonk1"],
 ["linkedin","Open LinkedIn","https://www.linkedin.com/in/shreyas-s-bhat-7673b2280"]
];
function renderCommands(q=""){list.innerHTML=commands.filter(x=>x[0].includes(q.toLowerCase())||x[1].toLowerCase().includes(q.toLowerCase())).map((x,i)=>`<div class="command-item" data-target="${x[2]}"><span>${String(i+1).padStart(2,"0")}</span>${x[1]}</div>`).join("")||'<div class="command-item">No command found.</div>';
 document.querySelectorAll(".command-item[data-target]").forEach(el=>el.onclick=()=>{const t=el.dataset.target;if(t.startsWith("#"))document.querySelector(t)?.scrollIntoView({behavior:"smooth"});else window.open(t,"_blank");closeCommand()});
}
function openCommand(){command.classList.add("open");input.value="";renderCommands();setTimeout(()=>input.focus(),50)}
function closeCommand(){command.classList.remove("open")}
document.getElementById("openCmd").onclick=openCommand;document.getElementById("closeCmd").onclick=closeCommand;input.oninput=()=>renderCommands(input.value);
command.onclick=e=>{if(e.target===command)closeCommand()};
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();openCommand()}if(e.key==="Escape"){closeCommand();if(modal.classList.contains("open")){modal.classList.remove("open");document.body.style.overflow=""}}});

document.getElementById("randomProject").onclick=()=>{
 const keys=Object.keys(projects); openProject(keys[Math.floor(Math.random()*keys.length)]);
};
document.querySelectorAll(".project-card,.lab-row,.experience-card,.beyond-grid>div,.node").forEach(el=>{new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.style.opacity=1}),{threshold:.05}).observe(el)});
