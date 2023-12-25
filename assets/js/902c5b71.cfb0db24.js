"use strict";(self.webpackChunkfusion_docs=self.webpackChunkfusion_docs||[]).push([[4597],{5495:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var t=s(5893),i=s(1151);const o={},r="Hoppie ACARS Gate Assignment Service",a={id:"AAL/hoppie",title:"Hoppie ACARS Gate Assignment Service",description:"Description",source:"@site/docs/AAL/10-hoppie.md",sourceDirName:"AAL",slug:"/AAL/hoppie",permalink:"/docs/AAL/hoppie",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"AALSidebar",previous:{title:"Bylaws",permalink:"/docs/AAL/bylws"},next:{title:"Timetables",permalink:"/docs/AAL/timetables"}},l={},h=[{value:"Description",id:"description",level:3},{value:"Supported Add-ons",id:"supported-add-ons",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Sample Message",id:"sample-message",level:3}];function d(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"hoppie-acars-gate-assignment-service",children:"Hoppie ACARS Gate Assignment Service"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["We utilize the ",(0,t.jsx)(n.a,{href:"https://www.hoppie.nl/acars/",children:(0,t.jsx)(n.strong,{children:"Hoppie ACARS service"})})," to send automated arrival messages to vAAL flights with gate information for their destination. To receive these messages, you must either be using an aircraft add-on that is Hoppie compatible, or you must be using ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://www.hoppie.nl/acars/prg/acars-msfs/",children:"the standalone Hoppie ACARS client"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"At the time of this page\u2019s last update, the only add-ons to support this functionality are the FSLabs Airbus family for P3D, the Fenix A320 for MSFS, the Leonardo MaddogX for P3D and MSFS, and the iniBuilds A300 for X-Plane 11."}),"\n",(0,t.jsxs)(n.p,{children:["We cannot control when the functionality will be added, if ever, to other add-ons in our fleet. If you wish to receive these messages without using one of the above add-ons, you will have to use ",(0,t.jsx)(n.a,{href:"https://www.hoppie.nl/acars/prg/acars-msfs/",children:(0,t.jsx)(n.strong,{children:"the standalone Hoppie ACARS Client"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Using the gate assigned to you via the service is not mandatory. The only gate-related PIREP requirement that we have is that a flight must start and end at a gate; we do not specify that it must start and end at a correct gate. This is entirely for your convenience so you don\u2019t have to find an appropriate arrival gate mid-flight and also to enhance realism."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"You must make sure that when you are configuring the MCDU/FMS/FMC/Standalone client for your flight that you enter the correct callsign. If you have booked AAL1234 in vAMSYS, you must have AAL1234 set as your flight number. If you do not, you will not receive messages."})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Legacy carrier schedules (TWA, ROA, PSA, etc.) will not receive ACARS arrival messages as gate information is either incomplete or missing, and in many cases the terminals where these airlines parked no longer exist."})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"supported-add-ons",children:"Supported Add-ons"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["CPDLC support via Hoppie is ",(0,t.jsx)(n.strong,{children:"NOT"})," the same thing and add-ons that ONLY have Hoppie CPDLC support will ",(0,t.jsx)(n.strong,{children:"NOT"})," receive our gate assignment messages. (e.g., Tolisss A3XXs)"]})}),"\n",(0,t.jsx)(n.p,{children:"This will only work natively for add-ons that support Hoppie ACARS free text/TELEX messages."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"As of December 2023, the following aircraft will receive these messages:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fenix A320 (MSFS)"}),"\n",(0,t.jsx)(n.li,{children:"FSLabs A319/A320/A321 (FSX, P3D)"}),"\n",(0,t.jsx)(n.li,{children:"Leonardo MaddogX (FSX, P3D, MSFS)"}),"\n",(0,t.jsx)(n.li,{children:"iniBuilds A300 (XP11)"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Get a Log On Code for the Hoppie network ",(0,t.jsxs)(n.strong,{children:["[from here] (",(0,t.jsx)(n.a,{href:"https://www.hoppie.nl/acars/system/register.html",children:"https://www.hoppie.nl/acars/system/register.html"}),")."]})]}),"\n",(0,t.jsxs)(n.li,{children:["If you are using the standalone Hoppie client, ",(0,t.jsxs)(n.strong,{children:["[download it from here] (",(0,t.jsx)(n.a,{href:"https://www.hoppie.nl/acars/prg/acars-msfs/",children:"https://www.hoppie.nl/acars/prg/acars-msfs/"}),")"]})," and follow the instructions provided there to set it up."]}),"\n",(0,t.jsx)(n.li,{children:"Configure your add-on per your add-on developer\u2019s instructions. This will be found in the documentation provided with your add-on; we did not provide your add-on so we cannot provide these instructions."}),"\n",(0,t.jsx)(n.li,{children:"Ensure when setting up your flight that you configure the FMC with flight numbers that match what you booked in vAMSYS. This means if you book AAL2052 in vAMSYS that you must have AAL2052 in your FMC as your flight number in order to receive the arrival messages."}),"\n",(0,t.jsx)(n.li,{children:"When your ground speed is greater than 250 knots and you are less than 225 nautical miles from your destination, you will receive the arrival message."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["For MaddogX users: ensure that you ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"DO NOT"})})," have \u201cUse auto white list\u201d enabled in the load manager, as this will prevent ACARS messages reaching you."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"sample-message",children:"Sample Message"}),"\n",(0,t.jsx)(n.p,{children:"At this time, the only actionable information contained in the message is the assigned gate. The rest of the information is based on a real world template \u2014 the OPS frequency given is a real world frequency but there is no one on the other end, so please follow VATSIM policies regarding the use of frequencies and do not spam it."}),"\n",(0,t.jsxs)(n.p,{children:["If you can provide an example of American Airline\u2019s real world in-range ACARS message, please contact us at at ",(0,t.jsx)(n.a,{href:"mailto:ops@virtual-aal.com",children:"ops@virtual-aal.com"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Example of Hoppie Gate Assignment Message",src:s(270).Z+"",width:"1109",height:"626"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},270:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/hoppie-cd59732a450ee3f8d6792fb3d582f83f.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var t=s(7294);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);