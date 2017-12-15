// Jasmine unit testing to determine if form, submit, and error message function are working properly //

describe('create username and password', function(){

	// var UserInfo = require("........");

// not sure if we will need these but I put them in just incase //
	it('check is name has been entered', function(){
		expect(submit.name).tobe(true);	
	});
// not sure if we will need these but I put them in just incase //
	it('check if username was entered', function(){
		expect(submit.userName).tobe(true);
	});
// not sure if we will need these but I put them in just incase //
	it('check if password was entered',function(){
		expect(submit.Password).tobe(true);
	});

	it('error message displays when information has been submitted incorrectly or left blank', function(){
		expect(submit.error).tothrowError('Please enter the required information.');
		expect(submit.error).tothrowError(typeError);
	});

	it('submit function of username form', function(){
		expect(submit).toequal(submit);
	});


});