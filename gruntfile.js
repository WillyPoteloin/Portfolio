module.exports = function(grunt) {

	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			gruntfile: {
				files: ['gruntfile.js'],
				options: {
					reload: true,
				}
			},
			css: {
				files: ['scss/*.scss'],
				tasks: ['sass'],
			},
			livereload: {
				files: 'css/**/*.css',
				options: {
					livereload: true,
				},
			},
		},
		sass: {
			style: {
				files: {
					'./css/style.css' : './scss/style.scss',
				},
			},
		},
	});

	// Load NPM tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	
	// Default task(s).
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('compilecss', ['sass:style']);
};