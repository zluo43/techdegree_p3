//Varisble assign
const email_hint_span=document.getElementById('email-hint');
//conditional error message
// email_hint_span.insertAdjacentHTML('afterend','<span id="email-conditional-hint" class="email-hint hint" style="display:none;">Email address cannot be blank</span>'
// );
// 





//onchange function to create pop textbox for dropdown list

function text_pop() {

	var option=document.getElementById('title')
	var option_value=option.value;
	const input=document.getElementById("other-job-role");
	//console.log(option_value);
	if (option_value==='other'){
		input.style.display='block';

	}else{
		input.style.display='none';}
	

};





//onchange function to select design and color of the shirt 
function change_color() {
	var design=document.getElementById('design');
	const color_option=document.querySelectorAll('#color option');
	const color=document.querySelector('#color');
	if (design.value==='js puns') {
		color.style.display='block';
		for (let i=0;i<color_option.length;i++) {
			if (color_option[i].getAttribute('data-theme')==='js puns'){color_option[i].hidden=false;color_option[0].selected=true;}

				else if(color_option[i].getAttribute('data-theme')==='heart js'){color_option[i].hidden=true;color_option[0].selected=true;};

			


	};}else if(design.value==='heart js') {
		color.style.display='block';
		for (let i=0;i<color_option.length;i++) {
			if (color_option[i].getAttribute('data-theme')==='heart js'){color_option[i].hidden=false;
			color_option[0].selected=true;}else if (color_option[i].getAttribute('data-theme')==='js puns'){
				color_option[i].hidden=true;color_option[0].selected=true;

			};


	};



};}


//Check box money cost calculation 

 const act=document.getElementById("activities-box");
 let total_cost=0;
 const cost=document.getElementById('activities-cost');

 //hide hint on default
 const act_hint=document.getElementById('activities-hint');
 act_hint.style.display='none';

 

act.addEventListener('change',(e)=>{

	const input=e.target;
	const checked=input.checked;
	if (input.tagName==="INPUT"){
		if (checked) {
			total_cost=total_cost+parseInt(input.getAttribute('data-cost'));
			

			}else {total_cost=total_cost-parseInt(input.getAttribute('data-cost'))}
		};
	cost.textContent=`Total: \$ ${total_cost}`;
	//code below checks if at least one activity is selected for form validation
	if (total_cost!==0){
		cost.nextElementSibling.style.display='none';
		cost.parentElement.classList.add('valid');
		cost.parentElement.classList.remove('not-valid');

	}else {cost.nextElementSibling.style.display='block';
	       cost.parentElement.classList.add('not-valid');
		   cost.parentElement.classList.add('valid');
};
//extra credit: time conflict 
	const time=e.target.getAttribute('data-day-and-time');
	for (let i=0;i<activitiesinput.length;i++){
		if (e.target!=activitiesinput[i]){
			if(activitiesinput[i].getAttribute('data-day-and-time')===time && e.target.checked){
				activitiesinput[i].disabled=true;
				activitiesinput[i].parentElement.classList.add('disabled');

			}else if(activitiesinput[i].getAttribute('data-day-and-time')===time && !(e.target.chekced)){
				//console.log(!e.target.checked);
				activitiesinput[i].disabled=false;
				activitiesinput[i].parentElement.classList.remove('disabled');
			};
		};
		
	};



});


//set credit card to be default 

const payment=document.getElementById('payment');
const credit_card=payment.options[1];
credit_card.setAttribute('selected','selected');
const credit_div=document.getElementById('credit-card');
function payment_method(){ 
	if (payment.value!='credit-card') {
	 	credit_div.style.display='none'
	}else if(payment.value==='credit-card'){
		credit_div.style.display='block'
	};

};


//form validation 
//validators
function isValidName(name){
 
	return /^[a-z]+\s?([a-z]+)?$/.test(name)



};
function isValidEmail(email) {

	return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email)
	

};


function isValidCardNumber(number) {

	return /^[\d]{13,16}$/.test(number)     //return true if valid 


};
function isValidZipCode(zip){
	return /^[\d]{5}$/.test(zip);

};
function isValidCVV(cvv){
	return /^[\d]{3}$/.test(cvv);
};


//function to show hint
//adopted from lecture
function hint(show,element){
	  // show element when show is true, hide when false
  //when showtip is put in, showtip is 
  if (show) {
    element.style.display = "block";
  } else{
    element.style.display = "none";
  };
};

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text); 

	const showTip = text !== "" && !valid;
	//const showTip=!valid;

	const tooltip = e.target.nextElementSibling;// next element sibling is the span in this case

	
	if(!valid){
		
		e.target.parentElement.className='not-valid'}
		else{
		
		e.target.parentElement.className='valid'};
		
		hint(showTip, tooltip);
  	 };
	//some modification based on lecture code to display conditional message
   
	

};

//setting up variables 
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const activitiesinput=act.querySelectorAll('input');
const creditcard_input=document.getElementById('cc-num');
const zip_input=document.getElementById('zip');
const cvv_input=document.getElementById('cvv');

//check username 
nameInput.addEventListener("input", createListener(isValidName));

//check email
//extra credit


emailInput.addEventListener('keyup',createListener(isValidEmail))

// emailInput.addEventListener("keyup",(e)=>{
// 		createListener(isValidEmail(e.target.value));
// 		console.log(e.target.value)
	
// });



/**
 * try to use jquery here to see if it solves the issue?
 * 
 */
// $('#email').on( "keyup", function() {
// 	if($(this).val()===''){
// 		console.log(1)
// 	}else{
// 		console.log(2)
// 	};
// 	createListener(isValidEmail);

//   });





	
	


//check credit card format if credit card is selected 

if  (payment.value=='credit-card'){
	console.log(1);
	creditcard_input.addEventListener("input", createListener(isValidCardNumber));
	zip_input.addEventListener("input", createListener(isValidZipCode));
	cvv_input.addEventListener("input", createListener(isValidCVV));
};

//submit eventlistner set up
const form=document.querySelector('form')
form.addEventListener('submit',e=>{
if (payment.value==='credit-card'){
	if (!isValidName(nameInput.value)) {
	  //console.log('Invalid name prevented submission');
	  //e.preventDefault();
	  nameInput.parentElement.className='not-valid';
	  nameInput.nextElementSibling.style.display='block';
	}else{
		nameInput.parentElement.className='valid';
		nameInput.nextElementSibling.style.display='none';
	};
	if (!isValidEmail(emailInput.value)) {
		  e.preventDefault();
		  emailInput.parentElement.className='not-valid';
		  emailInput.nextElementSibling.style.display='block';
		}else{
			emailInput.parentElement.className='valid';
		  	emailInput.nextElementSibling.style.display='none';
			emailInput.nextElementSibling.nextElementSibling.style.display='none';
		};

	if (!isValidZipCode(zip_input.value)) {
	  //console.log('Invalid language total prevented submission');
	  e.preventDefault();
	  zip_input.parentElement.className='not-valid';
	  zip_input.nextElementSibling.style.display='block';
	}else{
		zip_input.parentElement.className='valid';
	  	zip_input.nextElementSibling.style.display='none';
	};
	
	if (!isValidCVV(cvv_input.value)) {
		//console.log('Invalid language total prevented submission');
		e.preventDefault();
		cvv_input.parentElement.className='not-valid';
		cvv_input.nextElementSibling.style.display='block';
	  }else{
		  cvv_input.parentElement.className='valid';
			cvv_input.nextElementSibling.style.display='none';
	  };
	
	
	if (!isValidCardNumber(creditcard_input.value)) {
		e.preventDefault();
		creditcard_input.parentElement.className='not-valid';
		creditcard_input.nextElementSibling.style.display='block';
	  }else{
		  creditcard_input.parentElement.className='valid';
			creditcard_input.nextElementSibling.style.display='none';
	  };
	
	if (total_cost!==0){
		cost.nextElementSibling.style.display='none';
		cost.parentElement.classList.add('valid');
	}else {
		e.preventDefault();
		cost.nextElementSibling.style.display='block';
		cost.parentElement.classList.add('not-valid');
	};
 }else { 
	 //when its paypal and bitcoin, make sure its able to submit
	if (!isValidName(nameInput.value)) {
		nameInput.parentElement.className='not-valid';
		nameInput.nextElementSibling.style.display='block';
	  }else{
		  nameInput.parentElement.className='valid';
		  nameInput.nextElementSibling.style.display='none';
	  };
	  if(emailInput.value===''){
		  //console.log('here');
		  e.preventDefault();
		  emailInput.nextElementSibling.style.display='none';
		  emailInput.parentElement.className='not-valid';
		  emailInput.nextElementSibling.nextElementSibling.style.display='block';};
	  // }else if (!isValidEmail(emailInput.value)) {
	  //   e.preventDefault();
	  //   emailInput.parentElement.className='not-valid';
	  //   emailInput.nextElementSibling.style.display='block';
	  // }else{
	  // 	emailInput.parentElement.className='valid';
	  //   	emailInput.nextElementSibling.style.display='none';
	  // 	emailInput.nextElementSibling.nextElementSibling.style.display='none';
	  // };
	  if (total_cost!==0){
		cost.nextElementSibling.style.display='none';
		cost.parentElement.classList.add('valid');
		}else {
		e.preventDefault();
		cost.nextElementSibling.style.display='block';
		cost.parentElement.classList.add('not-valid');
		};

 };



});

//accessibility

const checkbox = document.querySelectorAll('input[type="checkbox"]');
for (let i=0;i<checkbox.length;i++){
	
	checkbox[i].addEventListener('focus', (event) => {
  		event.target.parentElement.className='focus';

	});

	checkbox[i].addEventListener('blur', (event) => {
  	event.target.parentElement.className = '';
	});
};




