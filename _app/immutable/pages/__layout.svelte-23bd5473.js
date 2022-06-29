import{F as oe,S as le,i as ne,s as ie,e as p,t as w,k as L,c as v,a as m,h as z,d as n,m as D,b as a,G as g,g as G,H as s,n as ae,I as ce,J as pe,x as ve,y as me,z as ue,K as fe,L as de,M as he,r as se,p as re,C as _e}from"../chunks/index-d1fee153.js";import{b as I}from"../chunks/paths-396f020f.js";const ge=()=>{const r=oe("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session,updated:r.updated}},be={subscribe(r){return ge().page.subscribe(r)}};function xe(r){let l,u,i,o,f,t,e,c,H,C,b,x,V,M,q,k,R,S,$,E,j,N,y,A,F;return{c(){l=p("header"),u=p("div"),i=p("div"),o=p("div"),f=p("nav"),t=p("ul"),e=p("li"),c=p("a"),H=w("Home"),C=L(),b=p("li"),x=p("a"),V=w("About"),M=L(),q=p("li"),k=p("a"),R=w("Achievements"),S=L(),$=p("li"),E=p("a"),j=w("RandomDog"),N=L(),y=p("li"),A=p("a"),F=w("Contacts"),this.h()},l(d){l=v(d,"HEADER",{});var h=m(l);u=v(h,"DIV",{class:!0});var J=m(u);i=v(J,"DIV",{class:!0});var K=m(i);o=v(K,"DIV",{class:!0});var U=m(o);f=v(U,"NAV",{class:!0});var B=m(f);t=v(B,"UL",{class:!0});var _=m(t);e=v(_,"LI",{class:!0});var O=m(e);c=v(O,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var P=m(c);H=z(P,"Home"),P.forEach(n),O.forEach(n),C=D(_),b=v(_,"LI",{class:!0});var Q=m(b);x=v(Q,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var T=m(x);V=z(T,"About"),T.forEach(n),Q.forEach(n),M=D(_),q=v(_,"LI",{class:!0});var W=m(q);k=v(W,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var X=m(k);R=z(X,"Achievements"),X.forEach(n),W.forEach(n),S=D(_),$=v(_,"LI",{class:!0});var Y=m($);E=v(Y,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var Z=m(E);j=z(Z,"RandomDog"),Z.forEach(n),Y.forEach(n),N=D(_),y=v(_,"LI",{class:!0});var ee=m(y);A=v(ee,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var te=m(A);F=z(te,"Contacts"),te.forEach(n),ee.forEach(n),_.forEach(n),B.forEach(n),U.forEach(n),K.forEach(n),J.forEach(n),h.forEach(n),this.h()},h(){a(c,"class","n_link svelte-1qm17xp"),a(c,"sveltekit:prefetch",""),a(c,"href",I+"/"),a(e,"class","svelte-1qm17xp"),g(e,"active",r[0].url.pathname==="/"),a(x,"class","n_link svelte-1qm17xp"),a(x,"sveltekit:prefetch",""),a(x,"href",I+"/about"),a(b,"class","svelte-1qm17xp"),g(b,"active",r[0].url.pathname==="/about"),a(k,"class","n_link svelte-1qm17xp"),a(k,"sveltekit:prefetch",""),a(k,"href",I+"/achievements"),a(q,"class","svelte-1qm17xp"),g(q,"active",r[0].url.pathname==="/achievements"),a(E,"class","n_link svelte-1qm17xp"),a(E,"sveltekit:prefetch",""),a(E,"href",I+"/random"),a($,"class","svelte-1qm17xp"),g($,"active",r[0].url.pathname==="/random"),a(A,"class","n_link svelte-1qm17xp"),a(A,"sveltekit:prefetch",""),a(A,"href",I+"/contacts"),a(y,"class","svelte-1qm17xp"),g(y,"active",r[0].url.pathname==="/contacts"),a(t,"class","svelte-1qm17xp"),a(f,"class","svelte-1qm17xp"),a(o,"class","header_inn svelte-1qm17xp"),a(i,"class","container"),a(u,"class","h_links svelte-1qm17xp")},m(d,h){G(d,l,h),s(l,u),s(u,i),s(i,o),s(o,f),s(f,t),s(t,e),s(e,c),s(c,H),s(t,C),s(t,b),s(b,x),s(x,V),s(t,M),s(t,q),s(q,k),s(k,R),s(t,S),s(t,$),s($,E),s(E,j),s(t,N),s(t,y),s(y,A),s(A,F)},p(d,[h]){h&1&&g(e,"active",d[0].url.pathname==="/"),h&1&&g(b,"active",d[0].url.pathname==="/about"),h&1&&g(q,"active",d[0].url.pathname==="/achievements"),h&1&&g($,"active",d[0].url.pathname==="/random"),h&1&&g(y,"active",d[0].url.pathname==="/contacts")},i:ae,o:ae,d(d){d&&n(l)}}}function qe(r,l,u){let i;return ce(r,be,o=>u(0,i=o)),[i]}class ke extends le{constructor(l){super(),ne(this,l,qe,xe,ie,{})}}function $e(r){let l,u,i,o;l=new ke({});const f=r[1].default,t=pe(f,r,r[0],null);return{c(){ve(l.$$.fragment),u=L(),i=p("main"),t&&t.c(),this.h()},l(e){me(l.$$.fragment,e),u=D(e),i=v(e,"MAIN",{class:!0});var c=m(i);t&&t.l(c),c.forEach(n),this.h()},h(){a(i,"class","svelte-1mfrqnm")},m(e,c){ue(l,e,c),G(e,u,c),G(e,i,c),t&&t.m(i,null),o=!0},p(e,[c]){t&&t.p&&(!o||c&1)&&fe(t,f,e,e[0],o?he(f,e[0],c,null):de(e[0]),null)},i(e){o||(se(l.$$.fragment,e),se(t,e),o=!0)},o(e){re(l.$$.fragment,e),re(t,e),o=!1},d(e){_e(l,e),e&&n(u),e&&n(i),t&&t.d(e)}}}function Ee(r,l,u){let{$$slots:i={},$$scope:o}=l;return r.$$set=f=>{"$$scope"in f&&u(0,o=f.$$scope)},[o,i]}class we extends le{constructor(l){super(),ne(this,l,Ee,$e,ie,{})}}export{we as default};
