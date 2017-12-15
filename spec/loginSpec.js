// Jasmine unit testing to determine the login parameters, submit function, and error message is working properly //


describe('login', function(){

	// var login = require("......");

	// it('login button switches to login information section', function(){
	// 	expect(login)
	// });

// not sure if we will need these but i put them in just incase //
	it('check if username was entered in login', function(){
		expect(login.username).tobe(true);
	});
// not sure if we will need these but i put them in just incase //
	it('check if password was entered in login section',function(){
		expect(login.Password).tobe(true);
	});

	it('error message displays when information has been submitted incorrectly or left blank', function(){
		expect(login.error).tothrowError('Please enter the required information.');
		expect(login.error).tothrowError(typeError);
	});

		it('sumbit function of username form', function(){
		expect(login).toequal(login);
	});

});