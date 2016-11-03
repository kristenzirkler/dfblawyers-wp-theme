jQuery(document).ready(function() {     

jQuery('.portfolio-item .image-box-content a').click(function(event) {
    event.preventDefault();
    var lawyerLink = jQuery(this).attr('href'),
	    lawyerLink = lawyerLink.replace('portfolio-page','our-team');

    if (lawyerLink.indexOf('greg') >= 0 || lawyerLink.indexOf('cheryl') >= 0 || lawyerLink.indexOf('aaron') >= 0 || lawyerLink.indexOf('felicia') >= 0) {
       window.location = lawyerLink;
    } else {
	    //do nothing
	    console.log('nolink');
    }
});

});