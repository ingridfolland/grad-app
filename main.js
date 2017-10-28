var formNum = 0;
var firstView = true;

//$("#educationForm").hide();


$(function(){

	if (firstView === true){
		$("#contactForm").show();
		$("#educationForm").hide();
		$("#sliderForm").hide();
		firstView=false;
	}
	
	$('.lastButton').on('click',function() {
		formNum--;
		console.log('hit last button');
		console.log(formNum);
		lastPage(formNum);
	});
		$('.nextButton').on('click',function() {
		formNum++;
		console.log('hit next button');
		console.log(formNum);
		nextPage(formNum);
	});
});


function nextPage(formNum){


	if (formNum===1) {
		console.log('Slider form');
		$("#contactForm").slideUp(500);
		$("#sliderForm").fadeIn(1000);
		$("#contactForm").fadeOut(1000);

	} else if (formNum===2) {
		console.log('Education form');
		$("#sliderForm").slideUp(500);
		$("#educationForm").fadeIn(1000);
		$("#sliderForm").fadeOut(1000);
	

	} 
};
function lastPage(formNum){


	if (formNum===0) {
		console.log('Contact form');
		$("#sliderForm").hide();
		$('#contactForm').show();	
	} else if (formNum===1) {
		console.log('Slider form');
		$("#educationForm").hide();
		$("#sliderForm").show();

	} 
};



function selectEducation(educationType){


	switch(educationType) {
    case 'graduate':
    	console.log('graduate');
    	education = 'graduate';
        break;
    case 'postGraduate':
    	console.log('postgraduate');
    	break;
    case 'none':
    	console.log('none');
        break;
    case 'other':
    	console.log('other');
    	break;
    default:
        
}
};

