const projects={
ghostdata:{tag:"DATA FORENSICS / AI AUDITING",title:"Ghost Data Still Exists — Data Deletion Verification Engine",desc:"An autonomous data-forensics and regulatory deletion-audit engine that processes deletion requests, verifies data eradication across multi-replica databases under strict audit cutoffs, and produces ordered remediation plans.",idea:"Verify whether personal data is truly eradicated across distributed databases, read-replicas, and active sync pipelines after reported deletion.",built:"Multilingual deletion-intent classification, historical identity resolution across temporal audit logs, multi-replica SQLite drift detection, recreation risk blockers, and structured CSV/JSON plan generation.",stack:"Python · SQLite · Data Forensics · AST · JSON",status:"Built & Verified",repo:"https://github.com/roadmonk1/ghost-data-still-exists"},
talentiq:{tag:"AI / CAREER INTELLIGENCE",title:"TalentIQ AI",desc:"An AI-powered career intelligence platform for resume analysis, career guidance, job opportunities and personalized recommendations.",idea:"Make career guidance more personalized and actionable.",built:"Resume and career analysis workflows with a full-stack web experience.",stack:"Python · Flask · React.js",status:"Built / evolving",repo:"https://github.com/roadmonk1/TalentIQ-AI"},
painsense:{tag:"MULTIMODAL AI / ACCESSIBILITY",title:"PainSense AI",desc:"An accessibility-focused system being developed for pain communication and assessment.",idea:"Explore multimodal signals so people have more accessible ways to communicate pain.",built:"A multimodal concept combining facial expressions, body cues, voice analysis and sign-language communication.",stack:"Python · OpenCV · Speech Recognition",status:"In development",repo:"https://github.com/roadmonk1/PAINSENSE-AI"},
datapilot:{tag:"AI / DATA ANALYTICS",title:"DataPilot AI",desc:"An AI-powered data analysis platform that converts natural-language questions into SQL and presents results through visualizations and insights.",idea:"Let people ask questions about data without having to write SQL manually.",built:"Natural-language → SQL workflow with PostgreSQL, visualizations and AI-generated insights.",stack:"Python · FastAPI · PostgreSQL",status:"Built / evolving",repo:"https://github.com/roadmonk1/DATAPILOT-AI"},
nids:{tag:"CYBERSECURITY",title:"Rule-Based NIDS",desc:"A rule-based network intrusion detection system that monitors traffic and detects suspicious behavior.",idea:"Create a practical security-monitoring system that can surface suspicious network activity.",built:"Packet monitoring, port-scan and DoS detection, alert logging, IP blacklisting and a live dashboard.",stack:"Python · Scapy · Streamlit",status:"Built",repo:"https://github.com/roadmonk1/Rule-Based-NIDS"},
shrichakra:{tag:"WEB / DIGITAL EXPERIENCE",title:"Shri Chakra Pooja — Digital Experience Platform",desc:"Official digital experience platform for the annual Shri Chakra Pooja at Shri Kshethra Kukkikatte, delivering schedules, ritual details, bilingual Kannada/English content, interactive gallery, and venue guidance.",idea:"Modernize cultural and community celebrations through a responsive, high-performance web platform accessible to devotees worldwide.",built:"Full-stack web application with bilingual localization, Supabase integration, responsive multimedia layouts, and cloud deployment on Vercel.",stack:"React 18 · Vite · Supabase · Lucide React",status:"Production / Deployed",repo:"https://github.com/roadmonk1/shrichakra-pooja"},
shoplifting:{tag:"COMPUTER VISION / AI",title:"Shop Lifting Detection Model",desc:"Real-time retail surveillance and theft prevention system using computer vision and convolutional neural networks to detect suspicious behavior and trigger automated alerts.",idea:"Enhance store security and reduce human surveillance fatigue through automated visual anomaly detection on live camera streams.",built:"Real-time video processing pipeline, behavioral anomaly analysis with CNNs, customer bounding-box tracking, and automated security alert generation.",stack:"Python · OpenCV · CNNs · Real-time Video Processing",status:"Research Prototype",repo:""},
arfurniture:{tag:"AUGMENTED REALITY / MOBILE",title:"AR Furniture — Augmented Reality App",desc:"Mobile augmented reality application enabling users to preview, place, move, and customize true-to-scale 3D furniture models within their physical environment using smartphone cameras.",idea:"Eliminate spatial guesswork in home furnishing, reduce product return rates, and support accessible interior planning.",built:"Interactive AR camera controller with plane detection, gesture-driven 3D model positioning, scale calibration, and custom 3D assets.",stack:"Unity · ARCore (Android) · C# · Blender",status:"Prototype Build",repo:""},
frauddetection:{tag:"CYBERSECURITY / ML",title:"Fraud Detection Clustering Model",desc:"Cybersecurity anomaly-detection model establishing geometric decision boundaries around cyber attack points using nearest-neighbor clustering to detect zero-day threats.",idea:"Identify real-time unknown threats and system behavioral anomalies without relying solely on static signature databases.",built:"Nearest-neighbor attack-point boundary formation, telemetry anomaly classification, and dynamic attack vector clustering.",stack:"Python · TensorFlow · OpenCV · Clustering",status:"Research Prototype",repo:""}
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
 const repoBtn=document.getElementById("modalRepo");
 if(p.repo){
  repoBtn.style.display="";
  repoBtn.href=p.repo;
  repoBtn.textContent="Open GitHub ↗";
 } else {
  repoBtn.style.display="none";
 }
 modal.classList.add("open"); document.body.style.overflow="hidden";
}
document.querySelectorAll("[data-project]").forEach(c=>c.addEventListener("click",(e)=>{if(c.tagName==="A"&&c.getAttribute("href")&&c.getAttribute("href").startsWith("#")){e.preventDefault();}openProject(c.dataset.project);}));
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
