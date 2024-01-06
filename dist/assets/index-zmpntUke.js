(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=t(i);fetch(i.href,c)}})();const a=[{id:1,title:"Футболка UZcotton мужская",fullPrice:1051,discount:[{type:"Скидка 55%",value:.55},{type:"Скидка покупателя 10%",value:.1}],count:1,color:"Белый",size:56,warehouse:"Коледино WB",organization:{name:"OOO Вайлдберриз",OGRN:0xf89a9ff071,address:"142181, Московская обл, г.о. Подольск, д Коледино, тер. Индустриальный парк Коледино, д. 6, стр. 1"},image:"./t-shirt.png",isChecked:!0,deliveryTime:[{date:"5—6 февраля",maxAmount:2}]},{id:2,title:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",fullPrice:11500,discount:[{type:"Скидка 55%",value:.55},{type:"Скидка покупателя 10%",value:.1}],count:1,availability:200,color:"прозрачный",size:null,warehouse:"Коледино WB",organization:{name:"OOO Мегапрофстиль",OGRN:5167746237148,address:"129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"},image:"./case.png",isChecked:!0,deliveryTime:[{date:"5—6 февраля",maxAmount:184},{date:"7-8 февраля",maxAmount:16}]},{id:3,title:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',fullPrice:475,discount:[{type:"Скидка 55%",value:.55},{type:"Скидка покупателя 10%",value:.1}],count:1,availability:2,color:null,size:null,warehouse:"Коледино WB",organization:{name:"OOO Вайлдберриз",OGRN:0xf89a9ff071,address:"142181, Московская обл, г.о. Подольск, д Коледино, тер. Индустриальный парк Коледино, д. 6, стр. 1"},image:"./pencils.png",isChecked:!0,deliveryTime:[{date:"5—6 февраля",maxAmount:2}]}],O=[{type:"В пункт выдачи",addressList:["г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1","г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1","г. Бишкек, улица Табышалиева, д. 57"]},{type:"Курьером",addressList:["Бишкек, улица Табышалиева, 57","Бишкек, улица Жукеева-Пудовкина, 77/1","Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1"]}],Z=[{name:"mir",logo:"./assets/favicon/mir.svg",number:"1234 56•• •••• 1234"},{name:"visa",logo:"./assets/favicon/visa.svg",number:"1234 56•• •••• 1234"},{name:"mastercard",logo:"./assets/favicon/mastercard.svg",number:"1234 56•• •••• 1234"},{name:"maestro",logo:"./assets/favicon/maestro.svg",number:"1234 56•• •••• 1234"}],u=e=>Math.round(e).toLocaleString(),M=e=>{const s=document.querySelector(".basket__list");s.innerHTML="",e.forEach(t=>{const o=document.createElement("div");o.className="basket__item item",o.dataset.id=t.id,s.appendChild(o);const i=u(t.fullPrice*t.count),c=t.discount.reduce((k,W)=>k+W.value,0),n=u(t.fullPrice*(1-c)*t.count),d=t.discount[0],r=t.discount[1],m=u(d.value*t.fullPrice*t.count),v=u(r.value*t.fullPrice*t.count);o.innerHTML=`
    <div class="item__left-side">
      <input
        type="checkbox"
        checked
        id="check__item"
        name="check__item"
        class="item__checkbox"
      />
      <label for="check__item" hidden></label>
      <img
        class="item__image"
        src=${t.image}
        alt=${t.title}
        width="72"
        height="96"
      />
      <div class="item__info">
        <div class="item__price item__price-small price">
          <div class="price__current">${n} <span>сом</span></div>
          <div class="price__total">${i} сом</div>
        </div>
        <div class="item__title">${t.title}</div>
        <div class="item__details">
          ${t.color||t.size?`<div class="item__description">
            ${t.color?`<div class="item__colour">Цвет: ${t.color}</div>`:""}
            ${t.size?`<div class="item__size">Размер: ${t.size}</div>`:""}
          </div>`:""}
          <div class="item__stock text-small text-grey">${t.warehouse}</div>
          <div class="item__org text-small text-grey">
            ${t.organization.name}
            <img class='more-info' src="./assets/favicon/info.svg" alt="" />
            <div class="popup popup--org">
              <h3>${t.organization.name}</h3>
              <p>${t.organization.OGRN}</p>
              <p >${t.organization.address}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item__right-side">
      <div class="item__action">
        <div class="item__count">
          <button class="item__count-change minus" type="button" >−</button>
          <input
            class="input item__count-input"
            value=${t.count}
            type="number"
            id="count${t.id}"
            name="count"
            data-id="${t.id}"
          />
          <button class="item__count-change plus" type="button" >+</button>
        </div>
        ${t.availability<3?`<div class="item__remain">Осталось ${t.availability} шт.</div>`:""}
        <div class="item__action-logo">
          <button class="item__action-favorite" type="button">
            <img src="./assets/favicon/favorites.svg" alt="Избранное" class='favorite'/>
          </button>
          <button class="item__action-delete" type="button">
            <img src="./assets/favicon/backet.svg" alt="Удалить товар" />
          </button>
        </div>
      </div>
      <div class="item__price price">
        <div class="price__current">${n} <span>сом</span></div>
        <div class="price__total more-info">${i} сом</div>
        <div class="popup popup--price">
          <div class="price__info price__info--grey">
            <div>${d.type}</div>
            <div>${r.type}</div>
          </div>
          <div class="price__info">
            <div>-${m} сом</div>
            <div>-${v} сом</div>
          </div>
        </div>
      </div>
    </div>
`})},B=e=>{const s=document.querySelector(".basket__list--missing");s.innerHTML="",e.forEach(t=>{const o=document.createElement("div");o.className="basket__item item item--missing",o.dataset.id=t.id,s.appendChild(o),o.innerHTML=`
      <div class="item__left-side">
        <img
          class="item__image item__image--missing"
          src=${t.image}
          alt=${t.title}
          width="72"
          height="96"
        />
        <div class="item__info item__info--missing">
          <div class="item__title item__title--missing">${t.title}</div>
          <div class="item__details">
          ${t.color||t.size?`<div class="item__description">
                ${t.color?`<div class="item__colour">Цвет: ${t.color}</div>`:""}
                ${t.size?`<div class="item__size">Размер: ${t.size}</div>`:""}
              </div>`:""}
          </div>
        </div>
      </div>
      <div class="item__right-side">
        <div class="item__action item__action--missing">
          <div class="item__action-logo item__action-logo--missing">
            <button class="item__action-favorite" type="button">
              <img src="./assets/favicon/favorites.svg" alt="Избранное" class='favorite'/>
            </button>
            <button class="item__action-delete" type="button">
              <img src="./assets/favicon/backet.svg" alt="Удалить товар" />
            </button>
        </div>
        </div>
      </div>
    `})},f=e=>{const s=document.querySelector(".order__sum"),t=document.querySelectorAll(".total-count"),o=document.querySelector("#full-sum"),i=document.querySelector("#full-discount"),c=e.filter(v=>v.isChecked),[n,d,r,m]=I(c);s.textContent=`${u(n)} сом`,t.forEach(v=>v.textContent=d),o.textContent=`${u(r)} сом`,i.textContent=`${u(m)} сом`},I=e=>{let s=0,t=0,o=0,i=0;return e.forEach(c=>{const{fullPrice:n,discount:d,count:r}=c;let m=0,v=0;d.forEach(k=>{v+=k.value}),m=n*(1-v),s+=m*r,t+=r,o+=n*r*1,i+=o-s}),[s,t,o,i]},A=document.querySelector(".order__button"),K=document.querySelector("#pay-immediately"),b=e=>{const[s]=I(e);K.checked?A.textContent=`Оплатить ${u(s)} сом`:A.textContent="Заказать"},C=document.querySelector(".delivery__info--first-date"),q=document.querySelector(".delivery__info--second-date"),y=e=>{const s=document.createElement("div");s.className="delivery__subtitle";const t=document.createElement("div");t.className="delivery__vizual";const o=s.cloneNode(!1),i=t.cloneNode(!1);C.innerHTML="",q.innerHTML="",e.forEach(c=>{const n=c.deliveryTime[0],d=c.deliveryTime[1];if(c.isChecked&&c.count>0){if(c.count>n.maxAmount&&c.count<=200&&d){o.textContent=d.date;const m=N(c,c.count-n.maxAmount);i.appendChild(m)}s.textContent=n.date;const r=N(c,n.maxAmount);t.appendChild(r)}}),C.appendChild(s),C.appendChild(t),q.appendChild(o),q.appendChild(i)},N=(e,s)=>{const t=document.createElement("div");t.classList.add("delivery__image");const o=document.createElement("img");if(o.src=e.image,o.alt=e.title,o.width=40,o.height=56,t.appendChild(o),e.count>1){const i=document.createElement("div");i.classList.add("delivery__count","count"),e.count>s,i.textContent=Math.min(e.count,s),t.appendChild(i)}return t};let l=a,x=a;const $=(e,s,t)=>{const o=l.filter(n=>n.id===e)[0],i=document.querySelector(`#count${e}`),c=o.availability;o&&s==="increase"&&o.count<o.availability?o.count+=1:o&&s==="decrease"&&o.count>1?o.count-=1:o&&s==="set"&&o.count&&(o.count=t),i&&typeof o.count=="number"&&!isNaN(o.count)&&i.value!==""?i.value=o.count:i&&i.value===""&&(o.count=1),i.addEventListener("blur",()=>{(i.value===""||i.value==="0")&&(o.count=1,i.value=1,h(l[e-1])),i.value>c&&(o.count=c,i.value=c,h(l[e-1]),y(l))}),M(l),y(l),b(l),H()},H=()=>{document.querySelectorAll(".item__count-input").forEach((e,s)=>{const t=e.previousElementSibling,o=e.nextElementSibling;+e.value==1?t.classList.add("light"):t.classList.remove("light"),+e.value===a[s].availability?o.classList.add("light"):o.classList.remove("light")})},h=e=>{const s=document.querySelector(`.item[data-id='${e.id}']`),t=s.querySelector(".price__current"),o=s.querySelector(".price__total"),i=u(e.fullPrice*e.count),c=e.discount.reduce((d,r)=>d+r.value,0),n=u(e.fullPrice*(1-c)*e.count);t.textContent=n,o.textContent=i},w=(e,s)=>{const t=e.target.closest(".item__action-delete");if(!t)return;const i=+t.closest(".item").dataset.id;i&&(s==="productsList"?(l=l.filter(c=>c.id!==i),M(l)):s==="missingProductsList"&&(x=x.filter(c=>c.id!==i),B(x))),f(l),y(l),b(l)},F=e=>{const s=e.target.closest(".item__action-favorite");s&&s.classList.toggle("item__action-favorite--active")},U=(e,s)=>{const t=e.target.closest(".item__checkbox");if(!t)return;const i=+t.closest(".item").dataset.id;t.checked?l[i-1].isChecked=!0:t.checked||(l[i-1].isChecked=!1),l.every(n=>n.isChecked)?s.checked=!0:s.checked=!1;const c=l.filter(n=>n.isChecked);f(c),y(c),b(c)},X=(e,s)=>{e.checked?a.forEach(i=>i.isChecked=!0):a.forEach(i=>i.isChecked=!1);const t=e.checked;s.forEach(i=>{i.checked=t});const o=l.filter(i=>i.isChecked);f(o),y(o),b(o)},Y=()=>{const e=document.querySelector(".collapse"),s=document.querySelector(".collapse__checkbox"),t=document.querySelector(".collapse__text");if(s)if(s.style.display==="none")s.style.display="flex",t.style.display="none",e.classList.remove("collapse--bold");else{let[o,i]=I(a);o=u(o),s.style.display="none",t.style.display="block",t.innerHTML=`<div collapse__text>${i} товаров · ${o} сом</div>`,e.classList.add("collapse--bold")}},V=()=>{const e=document.querySelector(".choice--delivery"),s=document.querySelector(".button-delivery--active").textContent.trim();e.innerHTML="",O.forEach(t=>{s===t.type&&t.addressList.forEach((i,c)=>{const n=j(i,c,t.type);e.appendChild(n)})})};function j(e,s,t){const o=document.createElement("div");return o.className="choice__item choice__item--delivery",o.innerHTML=`
    <input type="radio" id="address_${s+1}" name="address" />
    <label for="address_${s+1}" class="">
      <div class="choice__text">${e}</div>
      ${t==="В пункт выдачи"?`<div class="choice__rating rating">
          <img src="./images/star.svg" alt="" />
          <span>4.99</span>
          <span>Пункт выдачи</span>
        </div>`:""}
    </label>
    <img class="choice__delete" src="./images/bin.svg" alt="" />
  `,o}const J=()=>{const e=document.querySelector(".choice--payment");e.innerHTML="",Z.forEach(s=>{const t=document.createElement("div");t.classList.add("choice__item"),t.innerHTML=` <input type="radio" id=${s.name} name="card" />
      <label for=${s.name} class="card"
        ><div class="card__logo card__logo--modal"><img src=${s.logo} alt="" /></div>
        <div class="card__number card__number--modal">${s.number}</div></label
      >`,e.appendChild(t)})},D=document.querySelectorAll(".button-delivery"),R=e=>{e.style.display="flex",e.style.top=window.pageYOffset+"px",document.body.style.overflow="hidden",V(),J()},L=e=>{e.style.display="none",document.body.style.overflow="unset"};D.forEach(e=>{e.addEventListener("click",function(){D.forEach(s=>{s.classList.remove("button-delivery--active")}),this.classList.add("button-delivery--active"),V()})});const Q=e=>{for(const s of O)for(const t of s.addressList)if(t.includes(e))return s.type},ee=e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()),te=e=>/^\+\d\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/.test(String(e)),se=e=>{let s=e.target.value.replace(/\D/g,"");s.length>10&&(s=s.substr(0,11));let t="";s.length>0&&(t+="+"+s[0]),s.length>1&&(t+=" "+s.substr(1,3)),s.length>4&&(t+=" "+s.substr(4,3)),s.length>7&&(t+=" "+s.substr(7,2)),s.length>9&&(t+=" "+s.substr(9)),e.target.value=t},oe=e=>{let s=!0;return e.querySelectorAll("input").forEach(t=>{z(t),s=P(t,s)}),s},P=(e,s)=>{if(z(e),e.value==="")switch(s=!1,e.id){case"name":_(e,"Укажите имя");break;case"surname":_(e,"Введите фамилию");break;case"email":_(e,"Укажите электронную почту");break;case"phone":_(e,"Укажите номер телефона");break;case"tin":_(e,"Укажите ИНН");break}else e.id==="email"&&!ee(e.value)&&(s=!1,_(e,"Проверьте адрес электронной почты")),e.id==="phone"&&!te(e.value)&&(s=!1,_(e,"Формат: +9 999 999 99 99")),e.id==="tin"&&e.value.length!==14&&(s=!1,_(e,"Проверьте ИНН"));return s},_=(e,s)=>{const t=e.parentNode,o=document.createElement("div");o.classList.add("recipient__error"),o.textContent=s,e.classList.add("recipient__input--error"),t.appendChild(o)},z=e=>{const s=e.parentNode;e.classList.contains("recipient__input--error")&&(s.querySelector(".recipient__error").remove(),e.classList.remove("recipient__input--error"))};M(a);B(a);y(a);f(a);H();const E=document.querySelector(".basket__list"),G=document.querySelector(".basket__list--missing"),ie=document.querySelectorAll("#check__item"),T=document.querySelector("#check__all"),ce=document.querySelectorAll(".collapse__button"),ne=document.querySelectorAll(".delivery__button, .order__delivery-button"),le=document.querySelectorAll(".payment__button, .order__payment-button"),p=document.querySelector(".delivery-modal"),g=document.querySelector(".payment-modal"),ae=document.querySelectorAll(".modal__button"),re=document.querySelector(".delivery-modal__button"),de=document.querySelector(".payment-modal__button");E.addEventListener("click",e=>{const t=+e.target.closest(".item").dataset.id;e.target.classList.contains("plus")?($(t,"increase"),f(a),h(a[t-1])):e.target.classList.contains("minus")&&($(t,"decrease"),f(a),h(a[t-1]))});E.addEventListener("input",e=>{if(e.target.classList.contains("item__count-input")){const s=+e.target.getAttribute("data-id"),t=parseInt(e.target.value);$(s,"set",t),f(a),h(a[s-1])}});E.addEventListener("click",e=>w(e,"productsList"));G.addEventListener("click",e=>w(e,"missingProductsList"));E.addEventListener("click",e=>F(e));G.addEventListener("click",e=>F(e));E.addEventListener("click",e=>U(e,T));T.addEventListener("click",()=>X(T,ie));ce.forEach(e=>e.addEventListener("click",()=>{e.classList.toggle("collapse__button--rotate");const t=e.parentNode.nextElementSibling;t.classList.contains("hidden")?t.classList.remove("hidden"):t.classList.add("hidden"),t.classList.contains("basket__list--missing")||Y()}));ne.forEach(e=>e.addEventListener("click",()=>R(p)));le.forEach(e=>e.addEventListener("click",()=>R(g)));p.addEventListener("click",e=>{e.target===p&&L(p)});g.addEventListener("click",e=>{e.target===g&&L(g)});ae.forEach(e=>e.addEventListener("click",()=>{const s=e.closest(".modal");L(s)}));re.addEventListener("click",()=>{const s=document.querySelector('input[name="address"]:checked').nextElementSibling.querySelector(".choice__text").textContent;document.querySelector(".delivery__detail-main").textContent=s,document.querySelector(".order__addres").textContent=s,Q(s)==="В пункт выдачи"?(document.querySelector(".order__delivery-title").textContent="Доставка в пункт выдачи",document.querySelector(".delivery__subtitle").textContent="Пункт выдачи"):(document.querySelector(".order__delivery-title").textContent="Доставка курьером",document.querySelector(".delivery__subtitle").textContent="Курьер"),L(p)});de.addEventListener("click",()=>{const e=document.querySelector('input[name="card"]:checked'),s=document.querySelectorAll(".card__logo:not(.card__logo--modal)"),t=document.querySelectorAll(".card__number:not(.card__number--modal)"),o=e.nextElementSibling.querySelector(".card__logo--modal").outerHTML,i=e.nextElementSibling.querySelector(".card__number--modal").outerHTML;s.forEach(c=>c.innerHTML=o),t.forEach(c=>c.innerHTML=i),L(g)});const ue=document.querySelector("#pay-immediately");ue.addEventListener("change",()=>b(l));const S=document.querySelector(".recipient__form"),me=S.querySelectorAll("input"),ve=document.querySelector(".order__button");ve.addEventListener("click",function(e){e.preventDefault(),oe(S)===!0?S.submit():S.scrollIntoView({behavior:"smooth"})});me.forEach(e=>{e.addEventListener("blur",s=>{s.target.value?P(e):z(e),e.addEventListener("input",()=>{P(e)})}),e.addEventListener("input",()=>{const s=e.previousElementSibling,t=e.parentNode;e.value!==""?(s.classList.add("recipient__label--visible"),t.style.paddingTop="0"):(s.classList.remove("recipient__label--visible"),t.style.paddingTop="15px")})});const _e=document.getElementById("phone");_e.addEventListener("input",e=>se(e));
