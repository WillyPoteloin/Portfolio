'use strict';

module.exports = function(grunt) {

	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
				files: './scss/**/*.scss',
				tasks: ['sass:style'],	
			},
			livereload: {
				files: './css/**/*.css',
				options: {
					livereload: true,
				}
			}
		},
		sass: {
			style: {
				update: true,
				files: [{
					expand: true,
					src: './scss/**/*.scss',
					dist: './css',
				}],
			},
		}
	});

	// Load NPM tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	
	// Default task(s).
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('watch', ['watch']);
	grunt.registerTask('compilecss', ['sass:style']);
};