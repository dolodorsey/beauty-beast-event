"use client";
import { useState, useEffect, useRef } from "react";

// BEAUTY & THE BEAST — "Dark Fairytale" aesthetic
// Annual fall themed party — Atlanta Sep 12, 2026
const C = {
  base:    "#06060A", surface: "#0C0C14", panel: "#12121E",
  violet:  "#5C2D8A", violetGlow: "rgba(92,45,138,0.2)",
  crimson: "#8B1A2E", crimsonGlow: "rgba(139,26,46,0.15)",
  gold:    "#C8A94A", goldGlow: "rgba(200,169,74,0.12)",
  cream:   "#F2EBE0", muted: "rgba(242,235,224,0.45)", dim: "rgba(242,235,224,0.18)",
  border:  "rgba(242,235,224,0.06)",
};
const F = {
  display: "'Playfair Display',Georgia,serif",
  sans:    "'DM Sans',system-ui,sans-serif",
  mono:    "'DM Mono',monospace",
};

const TICKETS = [
  { date:"Sep 12, 2026", note:"Annual Fall Edition", city:"Atlanta, GA", url:"https://www.eventbrite.com/e/beauty-the-beast-tickets-1983359980091" },
];

function useInView(t=0.1){const ref=useRef<HTMLDivElement>(null);const[v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});o.observe(el);return()=>o.disconnect()},[t]);return[ref,v] as const}
function Reveal({children,d=0}:{children:React.ReactNode;d?:number}){const[ref,v]=useInView();return<div ref={ref} style={{transform:v?"translateY(0)":"translateY(40px)",opacity:v?1:0,transition:`all 1s cubic-bezier(0.16,1,0.3,1) ${d}s`}}>{children}</div>}
const Grain=()=><div style={{position:"absolute",inset:0,opacity:0.04,pointerEvents:"none",zIndex:0,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}/>;

function Nav(){const[sc,setSc]=useState(false);useEffect(()=>{const h=()=>setSc(window.scrollY>60);window.addEventListener("scroll",h,{passive:true});return()=>window.removeEventListener("scroll",h)},[]);return(
<nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,padding:sc?"12px clamp(24px,4vw,60px)":"24px clamp(24px,4vw,60px)",display:"flex",justifyContent:"space-between",alignItems:"center",background:sc?`${C.base}F5`:"transparent",backdropFilter:sc?"blur(20px)":"none",borderBottom:sc?`1px solid ${C.border}`:"none",transition:"all 0.5s cubic-bezier(0.16,1,0.3,1)"}}>
<div><div style={{fontFamily:F.mono,fontSize:"7px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.gold,marginBottom:"2px"}}>A KHG HugLife Event</div><span style={{fontFamily:F.display,fontSize:"16px",fontWeight:700,color:C.cream,letterSpacing:"0.04em",fontStyle:"italic"}}>Beauty & The Beast</span></div>
<div className="nl" style={{display:"flex",gap:"clamp(16px,2vw,32px)",alignItems:"center"}}>
{["Experience","About","Tickets"].map(n=><a key={n} href={`#${n.toLowerCase()}`} style={{fontFamily:F.sans,fontSize:"10px",fontWeight:500,letterSpacing:"0.2em",textTransform:"uppercase",color:C.muted,textDecoration:"none",transition:"color 0.3s"}} onMouseEnter={e=>(e.target as HTMLElement).style.color=C.cream} onMouseLeave={e=>(e.target as HTMLElement).style.color=C.muted}>{n}</a>)}
<a href="#tickets" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:C.base,background:C.gold,padding:"10px 24px",textDecoration:"none",transition:"all 0.3s"}}>Get Tickets</a>
</div>
</nav>
);}

function Hero(){return(
<section style={{minHeight:"100vh",background:C.base,display:"flex",alignItems:"flex-end",padding:"0 clamp(32px,6vw,80px) 80px",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 25% 40%, ${C.violetGlow} 0%, transparent 50%), radial-gradient(ellipse at 75% 60%, ${C.crimsonGlow} 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, ${C.goldGlow} 0%, transparent 40%)`}}/>
<Grain/>
{/* Decorative rose motif */}
<div style={{position:"absolute",top:"10%",right:"5%",width:"45vw",height:"45vw",borderRadius:"50%",border:`1px solid ${C.violet}25`,opacity:0.5}}/>
<div style={{position:"absolute",top:"15%",right:"8%",width:"34vw",height:"34vw",borderRadius:"50%",border:`1px solid ${C.gold}20`}}/>
<div style={{maxWidth:"1200px",margin:"0 auto",width:"100%",position:"relative",zIndex:1}}>
<div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.gold,marginBottom:"24px"}}>KHG × HugLife · Annual Fall Event · Atlanta</div>
<h1 style={{fontFamily:F.display,fontSize:"clamp(48px,9vw,130px)",fontWeight:400,fontStyle:"italic",lineHeight:0.88,color:C.cream,marginBottom:"16px",letterSpacing:"-0.02em"}}>
Beauty<br/>&amp; The Beast
</h1>
<div style={{fontFamily:F.mono,fontSize:"11px",letterSpacing:"0.3em",color:C.gold,textTransform:"uppercase",marginBottom:"20px"}}>September 12, 2026 · Atlanta</div>
<div style={{fontFamily:F.sans,fontSize:"15px",color:C.muted,maxWidth:"520px",lineHeight:1.8,marginBottom:"40px"}}>
One night each year where glamour meets edge. Beauty & The Beast is Atlanta's most anticipated themed affair — a world where elegance and darkness collide beautifully.
</div>
<div style={{display:"flex",gap:"16px",flexWrap:"wrap"}}>
<a href="https://www.eventbrite.com/e/beauty-the-beast-tickets-1983359980091" target="_blank" rel="noopener noreferrer" style={{fontFamily:F.sans,fontSize:"11px",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:C.base,background:C.gold,padding:"16px 40px",textDecoration:"none",transition:"all 0.3s"}}>Buy Tickets Now</a>
<a href="#about" style={{fontFamily:F.sans,fontSize:"11px",fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",color:C.cream,background:"transparent",border:`1px solid ${C.border}`,padding:"16px 36px",textDecoration:"none",transition:"all 0.3s"}}>The Experience</a>
</div>
</div>
</section>
);}

function About(){
  const pillars=[
    {icon:"◈",title:"Costume Required",desc:"Beauty & The Beast is a fully costumed affair. Come as the beauty, the beast, or anything enchanted. Creativity is the dress code."},
    {icon:"♛",title:"Dark Fairytale Aesthetic",desc:"Every element — décor, lighting, entertainment — is designed around the Beauty & The Beast narrative. You don't attend this event. You enter it."},
    {icon:"✦",title:"Premium Open Bar",desc:"Curated cocktail menu, premium spirits, and themed signature drinks that match the night's visual language."},
    {icon:"◇",title:"Live Entertainment",desc:"DJ sets, live performances, and theatrical moments woven throughout the night. Not just a party — a production."},
  ];
  return(
<section id="about" style={{background:C.surface,padding:"120px clamp(32px,5vw,80px)",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 80% 50%, ${C.violetGlow} 0%, transparent 55%)`}}/>
<Grain/>
<div style={{maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1}}>
<Reveal><div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.gold,marginBottom:"16px"}}>The Experience</div>
<h2 style={{fontFamily:F.display,fontSize:"clamp(36px,5.5vw,80px)",fontWeight:400,fontStyle:"italic",lineHeight:0.9,color:C.cream,marginBottom:"20px"}}>A Night That Earns<br/>Its Myth</h2>
<p style={{fontFamily:F.sans,fontSize:"15px",color:C.muted,maxWidth:"600px",lineHeight:1.8,marginBottom:"64px"}}>Beauty & The Beast has become Atlanta's most coveted Halloween-adjacent event. Not because it's a party, but because it's a world — immersive, gorgeous, and impossible to forget.</p></Reveal>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"2px",background:`${C.violet}20`}}>
{pillars.map((p,i)=>(
<Reveal key={i} d={i*0.1}>
<div style={{background:C.panel,padding:"40px 32px"}}>
<div style={{fontFamily:F.display,fontSize:"28px",color:C.gold,marginBottom:"16px"}}>{p.icon}</div>
<div style={{fontFamily:F.display,fontSize:"20px",fontStyle:"italic",color:C.cream,marginBottom:"12px"}}>{p.title}</div>
<div style={{fontFamily:F.sans,fontSize:"13px",color:C.muted,lineHeight:1.75}}>{p.desc}</div>
</div>
</Reveal>
))}
</div>
</div>
</section>
);}

function Tickets(){return(
<section id="tickets" style={{background:C.base,padding:"100px clamp(32px,5vw,80px)",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 50% 50%, ${C.violetGlow} 0%, transparent 55%)`}}/>
<Grain/>
<div style={{maxWidth:"900px",margin:"0 auto",position:"relative",zIndex:1}}>
<Reveal>
<div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.gold,marginBottom:"16px"}}>Secure Your Entry</div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"24px",marginBottom:"48px"}}>
<h2 style={{fontFamily:F.display,fontSize:"clamp(36px,6vw,84px)",fontWeight:400,fontStyle:"italic",lineHeight:0.9,color:C.cream}}>One Night Only.<br/>September 12.</h2>
<div style={{display:"flex",alignItems:"center",gap:"8px"}}>
<div style={{width:"8px",height:"8px",borderRadius:"50%",background:"#4ADE80",boxShadow:"0 0 8px #4ADE80",animation:"bbPulse 2s ease-in-out infinite"}}/>
<span style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.3em",color:"#4ADE80",textTransform:"uppercase"}}>On Sale Now</span>
</div>
</div>
</Reveal>
<Reveal d={0.1}>
<div style={{background:C.surface,padding:"48px 40px",borderTop:`2px solid ${C.gold}`,marginBottom:"3px"}}>
<div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"16px"}}>
<div style={{width:"6px",height:"6px",borderRadius:"50%",background:"#4ADE80",animation:"bbPulse 2s ease-in-out infinite"}}/>
<span style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.25em",color:"#4ADE80",textTransform:"uppercase"}}>Tickets Available</span>
</div>
<div style={{fontFamily:F.display,fontSize:"clamp(28px,4vw,48px)",fontStyle:"italic",color:C.cream,marginBottom:"8px"}}>September 12, 2026</div>
<div style={{fontFamily:F.mono,fontSize:"11px",color:C.gold,marginBottom:"8px"}}>Annual Fall Edition · Atlanta, GA</div>
<div style={{fontFamily:F.sans,fontSize:"13px",color:C.muted,marginBottom:"32px"}}>Costume required. Premium open bar. Live entertainment. One unforgettable night.</div>
<a href="https://www.eventbrite.com/e/beauty-the-beast-tickets-1983359980091" target="_blank" rel="noopener noreferrer" style={{fontFamily:F.sans,fontSize:"11px",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:C.base,background:C.gold,padding:"16px 48px",textDecoration:"none",display:"inline-block",transition:"all 0.3s"}} onMouseEnter={e=>(e.currentTarget as HTMLAnchorElement).style.transform="translateY(-2px)"} onMouseLeave={e=>(e.currentTarget as HTMLAnchorElement).style.transform="translateY(0)"}>Buy Tickets →</a>
</div>
</Reveal>
<Reveal d={0.2}>
<div style={{background:C.surface,padding:"28px 32px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"20px"}}>
<div>
<div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.4em",textTransform:"uppercase",color:C.gold,marginBottom:"6px"}}>VIP · Tables · Corporate</div>
<div style={{fontFamily:F.display,fontSize:"18px",fontStyle:"italic",color:C.cream}}>Planning something special?</div>
</div>
<div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
<a href="mailto:thekollectiveworldwide@gmail.com?subject=Beauty and the Beast VIP" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:C.base,background:C.gold,padding:"13px 32px",textDecoration:"none",display:"inline-block"}}>VIP Inquiry</a>
<a href="mailto:thekollectiveworldwide@gmail.com?subject=Beauty and the Beast Group" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:C.cream,background:"transparent",border:`1px solid ${C.border}`,padding:"13px 28px",textDecoration:"none",display:"inline-block"}}>Group Booking</a>
</div>
</div>
</Reveal>
<div style={{marginTop:"24px",display:"flex",gap:"28px",justifyContent:"center",flexWrap:"wrap"}}>
{["Powered by Eventbrite","Secure Checkout","Instant Confirmation","21+ Event"].map(s=>(
<div key={s} style={{fontFamily:F.sans,fontSize:"9px",color:"rgba(242,235,224,0.2)",letterSpacing:"0.15em"}}>{s}</div>
))}
</div>
</div>
<style>{`@keyframes bbPulse{0%,100%{opacity:1}50%{opacity:0.3}}`}
@media(max-width:768px){
  .dg,.DG,[style*="gridTemplateColumns"]{grid-template-columns:1fr!important}
  .nl,.desktop-nav{display:none!important}
  .fg,.stat-grid,.feature-grid{grid-template-columns:1fr!important}
  .eg{grid-template-columns:1fr!important}
  h1,h2,.hero-title{word-break:break-word}
  nav{padding:16px!important}
  section{padding-left:16px!important;padding-right:16px!important}
}
</style>
</section>
);}

function FAQ(){
  const[open,setOpen]=useState<number|null>(null);
  const items=[
    {q:"Is a costume required?",a:"Yes. Beauty & The Beast is a costumed event — it's part of what makes the atmosphere extraordinary. Come as the beauty, the beast, a rose, an enchanted object, or any dark fairytale character. Creativity is rewarded."},
    {q:"What is the dress code if I don't do a full costume?",a:"Costume or formal/cocktail attire only. No casual wear, no athletic wear. This is a high-production event — the standard is kept at the door."},
    {q:"Is this event 21+?",a:"Yes. Beauty & The Beast is strictly 21+. Valid government-issued ID required at entry."},
    {q:"What does the ticket include?",a:"General admission includes entry, premium open bar (featured cocktails + spirits), and full access to all entertainment throughout the night."},
    {q:"Is there VIP table service?",a:"Yes. VIP packages with table service and bottle packages are available. Email thekollectiveworldwide@gmail.com with subject 'Beauty and the Beast VIP'."},
    {q:"Will this event sell out?",a:"Every year. Beauty & The Beast consistently sells out weeks in advance. Purchase early — we do not guarantee door availability."},
  ];
  return(
<section id="faq" style={{background:C.surface,padding:"80px clamp(32px,5vw,80px)",position:"relative",overflow:"hidden"}}>
<Grain/>
<div style={{maxWidth:"900px",margin:"0 auto",position:"relative",zIndex:1}}>
<Reveal>
<div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.gold,marginBottom:"16px"}}>FAQ</div>
<h2 style={{fontFamily:F.display,fontSize:"clamp(32px,5vw,64px)",fontWeight:400,fontStyle:"italic",color:C.cream,marginBottom:"48px",lineHeight:0.95}}>What You Need to Know</h2>
</Reveal>
<div style={{display:"flex",flexDirection:"column",gap:"2px",background:`${C.violet}20`}}>
{items.map((item,i)=>(
<Reveal key={i} d={i*0.05}>
<div onClick={()=>setOpen(open===i?null:i)} style={{background:open===i?C.panel:C.base,padding:"24px 28px",cursor:"pointer",borderLeft:`3px solid ${open===i?C.gold:"transparent"}`,transition:"all 0.3s"}} onMouseEnter={e=>{if(open!==i)(e.currentTarget as HTMLDivElement).style.background=`${C.violet}10`}} onMouseLeave={e=>{if(open!==i)(e.currentTarget as HTMLDivElement).style.background=C.base}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"16px"}}>
<div style={{fontFamily:F.display,fontSize:"clamp(14px,1.5vw,18px)",fontStyle:"italic",color:C.cream,lineHeight:1.3}}>{item.q}</div>
<div style={{color:C.gold,fontSize:"20px",flexShrink:0,transition:"transform 0.3s",transform:open===i?"rotate(45deg)":"rotate(0deg)"}}>+</div>
</div>
{open===i&&<div style={{fontFamily:F.sans,fontSize:"14px",color:C.muted,lineHeight:1.75,marginTop:"12px",paddingRight:"32px"}}>{item.a}</div>}
</div>
</Reveal>
))}
</div>
</div>
</section>
);}

function Footer(){return(
<footer style={{background:C.base,borderTop:`1px solid ${C.border}`,padding:"60px clamp(32px,5vw,80px)"}}>
<div style={{maxWidth:"1200px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"24px"}}>
<div>
<div style={{fontFamily:F.display,fontSize:"22px",fontStyle:"italic",color:C.cream,marginBottom:"4px"}}>Beauty &amp; The Beast</div>
<div style={{fontFamily:F.sans,fontSize:"11px",color:C.muted}}>A KHG HugLife Experience · Atlanta, GA</div>
</div>
<div style={{display:"flex",gap:"24px",flexWrap:"wrap"}}>
<a href="mailto:thekollectiveworldwide@gmail.com" style={{fontFamily:F.sans,fontSize:"10px",color:C.muted,textDecoration:"none",letterSpacing:"0.1em"}}>Contact</a>
<a href="https://huglife.vercel.app" style={{fontFamily:F.sans,fontSize:"10px",color:C.muted,textDecoration:"none",letterSpacing:"0.1em"}}>HugLife Events</a>
</div>
<div style={{fontFamily:F.sans,fontSize:"10px",color:C.dim}}>© 2026 The Kollective Hospitality Group</div>
</div>
</footer>
);}

export default function BeautyBeastSite(){return(
<div style={{background:C.base,minHeight:"100vh",overflowX:'hidden'}}>
<Nav/><Hero/><About/><Tickets/><FAQ/><Footer/>
</div>
);}
