Package.describe({
  name: 'srinivas:errors',
  summary: '  A package to display application errors to the user ',
  version: '1.0.0',
  git: 'https://github.com/srinivasmangipudi/meteor-errors.git'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');
	//api.addFiles('my:errors.js');

	api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

	api.add_files(['srinivas:errors.js', 'srinivas:errors_list.html', 'srinivas:errors_list.js'], 'client');

	if(api.export)
		api.export('Errors');
});

Package.onTest(function(api) {
  //api.use('tinytest');
  //api.use('my:errors');
  //api.addFiles('my:errors-tests.js');

	api.use('srinivas:errors', 'client');
	api.use(['tinytest', 'test-helpers'], 'client');

	api.add_files('srinivas:errors-tests.js', 'client');

});
