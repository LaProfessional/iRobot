(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const G=[...document.querySelectorAll(".slider_item")],N=()=>{G.forEach(e=>{e.classList.toggle("slider_item_active")})};let O=setInterval(()=>{N()},7e3);const Y=()=>{clearInterval(O),O=setInterval(()=>{N()},7e3)},Q=[...document.querySelectorAll(".arrow")];Q.forEach(e=>{e.addEventListener("click",()=>{N(),Y()})});const Z=document.querySelector(".language_selection"),P=document.querySelector(".language_selection_option");let R;Z.addEventListener("click",()=>{P.classList.toggle("hidden"),R=e=>ee(e),window.addEventListener("click",R)});P.addEventListener("click",e=>{e.stopPropagation()});const ee=e=>{e.composedPath().every(n=>n.classList?!n.classList.contains("language_selection_option")&&!n.classList.contains("language_selection"):!0)&&(P.classList.add("hidden"),window.removeEventListener("click",R))},f=[...document.querySelectorAll(".popup")],h=[...document.querySelectorAll(".nav_item")];let u,A;h.forEach((e,t)=>{e.addEventListener("click",()=>{if(u===t){f[u].classList.toggle("popup_active"),h[u].classList.toggle("select_nav_item");return}u!==void 0&&(f[u].classList.remove("popup_active"),h[u].classList.remove("select_nav_item")),u=t,f[u].classList.add("popup_active"),h[u].classList.add("select_nav_item"),A=s=>te(s),window.addEventListener("click",A)})});const te=e=>{e.composedPath().every(n=>n.classList?!n.classList.contains("popup")&&!n.classList.contains("nav_item"):!0)&&(f[u].classList.remove("popup_active"),h[u].classList.remove("select_nav_item"),window.removeEventListener("click",A))};f.forEach(e=>{const t=[...e.querySelectorAll(".menu_item")],s=[...e.querySelectorAll(".robot")];let n=0;t.forEach((o,r)=>{o.addEventListener("mouseenter",()=>{n!==r&&(n!==void 0&&s[n].classList.remove("robot_active"),n=r,s[r].classList.add("robot_active"))})})});const oe=()=>{const e=[...document.querySelectorAll(".video")],t=[...document.querySelectorAll(".play_pause_btn")],s=[...document.querySelectorAll(".play")],n=[...document.querySelectorAll(".pause")];let o;e.forEach((r,a)=>{r.addEventListener("click",c=>{o=a,z(c,o,r,t,s,n)})}),t.forEach((r,a)=>{r.addEventListener("click",c=>{o=a,z(c,o,e[a],t,s,n)})})},z=(e,t,s,n,o,r)=>{const a=e.composedPath(),c=a.some(l=>l.classList.contains("video")||l.classList.contains("play_pause_btn"));t!==void 0&&n[t].classList.add("play_pause_outline"),c&&(s.paused?(s.play(),o[t].classList.add("hidden"),r[t].classList.remove("hidden")):(s.pause(),o[t].classList.remove("hidden"),r[t].classList.add("hidden"))),a.includes(s)&&n[t].classList.remove("play_pause_outline")},se=document.querySelector(".featured_offer");se.addEventListener("click",()=>{window.location.href="#"});const ne=[{title:"Click to Shop Roomba Combo® j9+",imgSrc:"/iRobot/assets/slider-robots/RoombaComboJ9.webp",alt:"robot",rating:"★★★★★",quote:"Whenever I see my Robot has cleaned, I'm happy!",description:"I love having my robot clean for me. I have so much less dog hair in my house now. My floors are always so much cleaner! - Rosie, ME",actionText:"Shop Roomba Combo® j9+",actionLink:"#"},{title:"Click to Shop Roomba Combo® i5+",imgSrc:"/iRobot/assets/slider-robots/RoombaComboI5.webp",alt:"robot",rating:"★★★★★",quote:"Must Have Product!",description:"The Roomba Combo is a must need product! It is already a game changer in our house. With a toddler who gets crumbs/food everywhere it has made both snack time and meal time easier. I have it go on once he is all done in the highchair- and it has helped saved me time and made our floors look extremely clean! - Kris, MA",actionText:"Shop Roomba Combo® i5+",actionLink:"#"},{title:"Click to Shop Roomba Combo® 10 Max",imgSrc:"/iRobot/assets/slider-robots/AutoWash.webp",alt:"robot",rating:"★★★★★",quote:"Invest in Roomba 10 for a clean home!",description:"Wow, I am so impressed with the iRobot Roomba combo 10! The roomba is so smart and does a great job avoiding furniture/items while cleaning your floor. This one also comes with a mopping feature which also drys so quickly. I love that we can set up the roomba to clean when we're out & we return home to clean space! I am so impressed by its vacuum function! It picks up everything! - carolinec343, USA",actionText:"Shop Roomba Combo® 10 Max",actionLink:"#"},{title:"Click to Shop Roomba Combo® j9+",imgSrc:"/iRobot/assets/slider-robots/RoombaCombo.webp",alt:"robot",rating:"★★★★★",quote:"King of Clean Floors",description:"King of Clean Floors – Overall, I was very impressed with the Roomba Combo j9+. Its pick-up, extra power, dual-brushes and unique pressurized mopping system make it an easy choice if your first concern is having the cleanest possible floors. - Vacuum Wars (www.vacuumwars.com)",actionText:"Shop Roomba Combo® j9+",actionLink:"#"},{title:"Click to Shop Roomba® j9+",imgSrc:"/iRobot/assets/slider-robots/iRobotOS.webp",alt:"robot",rating:"★★★★★",quote:"Life changing",description:"This roomba is amazing. It is compatible with Alexa, so I can just ask her to have the roomba clean for me. It mapped out my whole house and I can even ask it to just clean a specific room! I would recommend this to anyone! The suction is great and leave my house spotless! – Joan, CT* *Submitted as part of a free sample program",actionText:"Shop Roomba® j9+",actionLink:"#"},{title:"Click to Shop Roomba Combo® j5+",imgSrc:"/iRobot/assets/slider-robots/RoombaComboJ6.webp",alt:"robot",rating:"★★★★★",quote:"Blown away",description:"I'm blown away by how well this thing cleans—it's able to get under and around all sorts of objects, sweeping away all the dirt and dust in the process! - Nicole22, OH* *Submitted as part of a free sample program",actionText:"Shop Roomba Combo® j5+",actionLink:"#"}],re=[{imgSrc:"/iRobot/assets/slider-shopping/60Day.webp",alt:"60-Day Return Policy"},{imgSrc:"/iRobot/assets/slider-shopping/free.webp",alt:"Free Shipping"},{imgSrc:"/iRobot/assets/slider-shopping/price.webp",alt:"Price Match Guarantee"},{imgSrc:"/iRobot/assets/slider-shopping/iExpert.webp",alt:"iRobot iExpert Support"},{imgSrc:"/iRobot/assets/slider-shopping/Affirm.webp",alt:"Affirm Payment Option",link:"#"},{imgSrc:"/iRobot/assets/slider-shopping/pay.webp",alt:"Pay Your Way"},{imgSrc:"/iRobot/assets/slider-shopping/Trade.webp",alt:"iRobot Trade-in Program",link:"#"},{imgSrc:"/iRobot/assets/slider-shopping/Warranty.webp",alt:"iRobot Warranty",link:"#"},{imgSrc:"/iRobot/assets/slider-shopping/iRobot.webp",alt:"Email Sign-up for Offers"}],ie=[{imgSrc:"/iRobot/assets/slider-marketing/essential.webp",alt:"PCMag Editors' Choice Testimonial"},{imgSrc:"/iRobot/assets/slider-marketing/award.jpg",alt:"ICMI Award"},{imgSrc:"/iRobot/assets/slider-marketing/editor-choice.jpg",alt:"Desktop Web Editors' Choice Award"}],ae=()=>{const e=document.querySelector(".slider_robots_track > template"),t=document.querySelector(".slider_shopping_track > template"),s=document.querySelector(".slider_marketing_track > template");ne.forEach(n=>{const o=e.content.cloneNode(!0);o.querySelector("img").src=n.imgSrc,o.querySelector("img").alt=n.alt,o.querySelector("img").title=n.title,o.querySelector("h3").textContent=n.quote,o.querySelector(".slide_description").textContent=n.description,o.querySelector(".slide_action").textContent=n.actionText,o.querySelector(".slide_action").href=n.actionLink,e.parentElement.append(o)}),re.forEach(n=>{const o=t.content.cloneNode(!0);if(o.querySelector("img").src=n.imgSrc,o.querySelector("img").alt=n.alt,n.link){const r=document.createElement("a");r.href=n.link,r.append(o.querySelector("img")),o.querySelector(".slider_shopping_wrapper").append(r)}t.parentElement.append(o)}),ie.forEach(n=>{const o=s.content.cloneNode(!0);o.querySelector("img").src=n.imgSrc,o.querySelector("img").alt=n.alt,s.parentElement.append(o)}),ce()},p=({withTransition:e=!0,currentSlideIndex:t,sliderTrackEl:s,slideWidth:n,index:o,sliderPaginationEl:r,visibleSlidesCount:a})=>{o&&(D({sliderPaginationEl:r}),t.value=o,W({sliderPaginationEl:r,index:o,visibleSlidesCount:a}));const c=t.value*n;s.style.transition=e?"transform .5s":"none",s.style.transform=`translateX(${-c}px)`},w=({slidesEls:e,sliderPaginationEl:t,sliderTrackEl:s,sliderNavNextEl:n,sliderNavPrevEl:o,visibleSlidesCount:r,sliderTrackEls:a})=>{const c={value:r};let l=!1;e.slice(-c.value).forEach(i=>{const d=i.cloneNode(!0);s.insertBefore(d,e[0])}),e.slice(0,c.value).forEach(i=>{const d=i.cloneNode(!0);s.append(d)});let m=e[0].offsetWidth;const T=()=>{m=e[0].offsetWidth,p({withTransition:!1,currentSlideIndex:c,sliderTrackEl:s,slideWidth:m})};window.addEventListener("resize",T),T();const j=e.map(()=>{const i=document.createElement("ol");return i.classList.add("pagination_circle"),t.append(i),i});j[0].classList.add("circle_active"),e=[...s.querySelectorAll(".slide")],e.some(i=>i.classList.contains("video_card"))&&oe(),j.forEach((i,d)=>{i.addEventListener("click",()=>{const E=d+r;p({withTransition:!0,currentSlideIndex:c,sliderTrackEl:s,slideWidth:m,index:E,sliderPaginationEl:t,visibleSlidesCount:r})})}),n&&o&&(n.addEventListener("click",()=>{l||(l=!0,X({currentSlideIndex:c,sliderTrackEl:s,slideWidth:m,slidesEls:e,sliderPaginationEl:t,visibleSlidesCount:r}),setTimeout(()=>{l=!1},500))}),o.addEventListener("click",()=>{l||(l=!0,V({currentSlideIndex:c,sliderTrackEl:s,slideWidth:m,slidesEls:e,sliderPaginationEl:t,visibleSlidesCount:r}),setTimeout(()=>{l=!1},500))}));let v=0,b=0,y=!1,S=!1;const B=50,K=1024,H=i=>{l||(l=!0,s===a[0]&&window.innerWidth>=K)||(y=!0,v=i.touches?i.touches[0].clientX:i.clientX,b=v,s.style.transition="none")},J=i=>{if(!y)return;b=i.touches?i.touches[0].clientX:i.clientX;const d=b-v;Math.abs(d)>5&&(S=!0);const E=c.value*m;s.style.transform=`translateX(${-E+d}px)`},L=()=>{if(!y)return;y=!1;const i=b-v;s.style.transition="transform 0.5s",Math.abs(i)>B?i<0?X({currentSlideIndex:c,sliderTrackEl:s,slideWidth:m,slidesEls:e,sliderPaginationEl:t,visibleSlidesCount:r}):V({currentSlideIndex:c,sliderTrackEl:s,slideWidth:m,slidesEls:e,sliderPaginationEl:t,visibleSlidesCount:r}):p({withTransition:!0,currentSlideIndex:c,sliderTrackEl:s,slideWidth:m}),setTimeout(()=>{l=!1,S=!1},500)},U=i=>{S&&(i.preventDefault(),S=!1)};(i=>{i.addEventListener("pointerdown",H),i.addEventListener("pointermove",J),i.addEventListener("pointerup",L),i.addEventListener("pointercancel",L),i.addEventListener("pointerleave",L),i.querySelectorAll("a").forEach(d=>{d.addEventListener("click",U)})})(s)},W=({sliderPaginationEl:e,index:t,visibleSlidesCount:s})=>{const n=e.querySelectorAll(".pagination_circle"),o=(t-s+n.length)%n.length;n[o].classList.add("circle_active")},D=({sliderPaginationEl:e})=>{e.querySelectorAll(".pagination_circle").forEach(s=>s.classList.remove("circle_active"))},X=({currentSlideIndex:e,sliderTrackEl:t,slideWidth:s,slidesEls:n,sliderPaginationEl:o,visibleSlidesCount:r})=>{D({sliderPaginationEl:o}),e.value++,W({sliderPaginationEl:o,index:e.value,visibleSlidesCount:r}),p({withTransition:!0,currentSlideIndex:e,sliderTrackEl:t,slideWidth:s}),e.value===n.length-r&&setTimeout(()=>{e.value=r,p({withTransition:!1,currentSlideIndex:e,sliderTrackEl:t,slideWidth:s})},500)},V=({currentSlideIndex:e,sliderTrackEl:t,slideWidth:s,slidesEls:n,sliderPaginationEl:o,visibleSlidesCount:r})=>{D({sliderPaginationEl:o}),e.value--,W({sliderPaginationEl:o,index:e.value,visibleSlidesCount:r}),p({withTransition:!0,currentSlideIndex:e,sliderTrackEl:t,slideWidth:s}),e.value===0&&setTimeout(()=>{e.value=n.length-r*2,p({withTransition:!1,currentSlideIndex:e,sliderTrackEl:t,slideWidth:s})},500)},ce=()=>{const e=[...document.querySelectorAll(".video_card")],t=[...document.querySelectorAll(".slider_robot_wrapper")],s=[...document.querySelectorAll(".slider_shopping_wrapper")],n=[...document.querySelectorAll(".slider_marketing_wrapper")],o=[...document.querySelectorAll(".slider_nav_prev")],r=[...document.querySelectorAll(".slider_nav_next")],a=[...document.querySelectorAll(".slider_track")],c=[...document.querySelectorAll(".slider_pagination")];w({slidesEls:e,sliderPaginationEl:c[0],sliderTrackEl:a[0],visibleSlidesCount:2,sliderTrackEls:a}),w({slidesEls:t,sliderPaginationEl:c[1],sliderTrackEl:a[1],sliderNavNextEl:r[0],sliderNavPrevEl:o[0],visibleSlidesCount:3,sliderTrackEls:a}),w({slidesEls:s,sliderPaginationEl:c[2],sliderTrackEl:a[2],sliderNavNextEl:r[1],sliderNavPrevEl:o[1],visibleSlidesCount:4,sliderTrackEls:a}),w({slidesEls:n,sliderPaginationEl:c[3],sliderTrackEl:a[3],sliderNavNextEl:r[2],sliderNavPrevEl:o[2],visibleSlidesCount:1,sliderTrackEls:a})};ae();const le=document.querySelector(".btn_sign_up"),C=document.querySelector(".newsletter_input"),q=document.querySelector(".validation_message");le.addEventListener("click",e=>{e.preventDefault();const t=C.value;F(t)});C.addEventListener("keydown",e=>{if(e.key==="Enter"){const t=C.value;F(t)}});const F=e=>{if(!e){q.classList.add("hidden");return}/^[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(e)?q.classList.add("hidden"):q.classList.remove("hidden")},de=document.querySelector(".scroll_up"),ue=document.querySelector(".header");de.addEventListener("click",()=>{ue.scrollIntoView({behavior:"smooth"})});const me=document.querySelector(".show_products_btn"),pe=[...document.querySelectorAll(".toggle")],he=document.querySelector(".mobile_product_container");me.addEventListener("click",()=>{he.classList.toggle("hidden"),pe.forEach(e=>{e.classList.toggle("hidden")})});const _=[...document.querySelectorAll(".btn_open_nav")],ge=[...document.querySelectorAll(".expand_collapse_arrow")],fe=[...document.querySelectorAll(".mobile_footer_menu")];let g=[],k;_.forEach((e,t)=>{e.addEventListener("click",()=>{k!==void 0&&_[k].classList.remove("is_active"),k=t,fe[t].classList.toggle("hidden"),ge[t].classList.toggle("expand"),_[t].classList.add("is_active"),g[t]&&window.removeEventListener("click",g[t]),g[t]=s=>ve(s,t),window.addEventListener("click",g[t])})});const ve=(e,t)=>{e.composedPath().some(o=>o.classList?o.classList.contains("is_active"):!1)||(_[t].classList.remove("is_active"),window.removeEventListener("click",g[t]))},be=document.querySelector(".burger_menu"),ye=document.querySelector(".close_menu"),x=document.querySelector(".drop_down_menu");be.addEventListener("click",()=>{x.style.transform="translateX(0)",document.body.classList.add("scroll_hidden")});ye.addEventListener("click",()=>{x.style.transform="translateX(-100%)",document.body.classList.remove("scroll_hidden")});const Se=[...document.querySelectorAll(".mobile_nav_item")],$=[...document.querySelectorAll(".menu_item_container")],I=document.querySelector(".btn_back");let M;Se.forEach((e,t)=>{e.addEventListener("click",()=>{we(t)})});const we=e=>{M=e,I.classList.add("visibility"),$[M].style.transform="translateX(0)"};I.addEventListener("click",()=>{$[M].style.transform="translateX(490px)",I.classList.remove("visibility")});const _e=document.querySelector(".mobile_selected_language"),Le=document.querySelector(".list_of_languages");_e.addEventListener("click",()=>{Le.classList.toggle("hidden")});
