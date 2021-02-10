(()=>{"use strict";!function(){const e=document.getElementById("content");function t(e,t,n){let o=document.createElement(t);o.id=e,n.appendChild(o)}function n(e,t,n,o){let d=document.createElement(t);d.id=e,d.innerHTML=o,n.appendChild(d)}t("pageHeader","header",e);let o=document.getElementById("pageHeader");t("infoSection","section",e),t("pageFooter","footer",e);let d=document.getElementById("pageFooter");n("name","h1",o,"My Restaurant"),n("hoursTitle","h3",d,"Hours"),n("hoursText","p",d,"Tues - Sat: 11:30 am - 10:00 pm </br>\n        Sunday: 3:00 pm - 9:30 pm</br>\n        Monday: Closed"),n("contactTitle","h3",d,"Contact"),n("contactText","p",d,"914-555-5555</br>\n        inro@myrestaurant.com</br>\n        724 Cambridge Place, Faketown, PA"),t("navTabs","nav",o);const m=document.getElementById("navTabs"),a=document.createElement("ul");a.id="navList",m.appendChild(a),n("homeButton","li",a,"<a>Home</a>"),document.getElementById("homeButton").className="navBtn",n("menuButton","li",a,"<a>Menu</a>"),document.getElementById("menuButton").className="navBtn",n("aboutButton","li",a,"<a>About</a>"),document.getElementById("aboutButton").className="navBtn"}(),document.getElementById("homeButton").addEventListener("click",(function(){const e=document.getElementById("infoSection");for(;e.firstChild;)e.removeChild(e.lastChild);!function(){const e=document.getElementById("infoSection"),t=document.createElement("div");t.id="homeInfo",t.innerHTML="Home",e.appendChild(t)}()})),document.getElementById("menuButton").addEventListener("click",(function(){const e=document.getElementById("infoSection");for(;e.firstChild;)e.removeChild(e.lastChild);!function(){const e=document.getElementById("infoSection"),t=document.createElement("h4");function n(e,t,n,o){let d=document.createElement("h5");d.id=e,d.className=t,n.appendChild(d),d.innerHTML=o}function o(e,t,n){let o=document.createElement("p");o.className=e,t.appendChild(o),o.innerHTML=n,o.style.fontWeight=300}t.id="menuInfo",t.innerHTML="Menu",e.appendChild(t),n("starters","menuSection",e,"Starters");let d=document.getElementById("starters");o("foodItem",d,"-- Chicken Tenders -- $13</br>\n        <em>Spiced to perfection</br>\n        served with siracha slaw.</em>"),o("foodItem",d,"-- Nachos -- $11/15</br>\n        <em>Add chicken, pork or chili.</em>"),o("foodItem",d,"-- Wings -- $9</br>\n        <em>Buffalo, garlic parm, mango habanero</br>\n        siracha agave, BBQ, Nashville.</em>"),n("salads","menuSection",e,"Salads");let m=document.getElementById("salads");o("foodItem",m,"-- Ceasar Salad -- $11</br>\n        <em>Romaine tossed with Ceasar dressing</br>\n        topped with parmesean and herbed croutons.</em>"),o("foodItem",m,"-- Cobb Salad -- $15</br>\n        <em>Romaine, diced tomato, crumbled blue cheese</br>\n        bacon bits, chopped egg, avacado, grilled chicken.</em>"),n("entrees","menuSection",e,"Entrees");let a=document.getElementById("entrees");o("foodItem",a,"-- Beef Bolognese -- $16</br>\n        <em>Pepperdelle, ground sirloin, parmesean</br>\n        side of bread.</em>"),o("foodItem",a,"-- NY Strip -- $26</br>\n        <em>Prime cut beef, crispy onions</br>\n        choice of two sides.</em>"),o("foodItem",a,"-- Penne Alla Vodka -- $15</br>\n        <em>Chicken +3 / Shrimp +5.</em>"),n("sides","menuSection",e,"Sides");let i=document.getElementById("sides");o("foodItem",i,"-- Sauteed Spinach --"),o("foodItem",i,"-- Mashed Potatoes --"),o("foodItem",i,"-- Steamed Broccoli --"),o("foodItem",i,"-- Coleslaw --"),o("foodItem",i,"-- Brussel Sprouts --"),o("foodItem",i,"-- Rice --")}()})),document.getElementById("aboutButton").addEventListener("click",(function(){const e=document.getElementById("infoSection");for(;e.firstChild;)e.removeChild(e.lastChild);!function(){const e=document.getElementById("infoSection"),t=document.createElement("h4");t.id="aboutInfo",t.innerHTML="About",e.appendChild(t)}()}))})();