module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.registerTask('build',['clean']);



	grunt.initConfig({
		clean: {
			options: {
				force: true
			},
			src: ['../dist/*']
		}
		
	});

	
}