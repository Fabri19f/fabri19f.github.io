const number = document.querySelectorAll(".component__number");
const button = document.querySelector(".component__submit");
const component = document.querySelector(".component");
let num = 0;
number.forEach(element => {
    element.addEventListener("click", ()=>{
        if(!element.classList.contains("component__number--select")){
            number.forEach(element => element.classList.remove("component__number--select"));
            element.classList.add("component__number--select");
            num = element.textContent;
        }
        else{
            element.classList.remove("component__number--select");
            num = 0;
        }
    });
});

button.addEventListener("click", ()=>{
    if(num != 0){
        component.classList.add("component--thank");
        component.innerHTML = `
        <img src="images/illustration-thank-you.svg" alt="illustration-thank-you" class="component__img">
        <div class="component__selection-container">
          <p class="component__selection">
            You selected ${num} out of 5
          </p>
        </div>
        <article class="component__texts">
          <h1 class="component__title">Thank you!</h1>
          <p class="component__paragraph">
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
          </p>
        </article>
        `;
    }
});
