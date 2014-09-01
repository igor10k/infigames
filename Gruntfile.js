module.exports = function (grunt) {
	grunt.initConfig({
		concat: {
			options: {
				separator: '\n'
			},
			app: {
				src: 'app/**/*.js',
				dest: 'public/js/app.js'
			}
		},
		stylus: {
			style: {
				src: 'assets/css/style.styl',
				dest: 'public/css/style.css'
			}
		},
		copy: {
			fonts: {
				expand: true,
				cwd: 'assets/css/fonts/',
				src: '*',
				dest: 'public/css/fonts/'
			},
			img: {
				expand: true,
				cwd: 'assets/img/',
				src: '*',
				dest: 'public/img/'
			},
			js: {
				expand: true,
				cwd: 'assets/js/vendor/',
				src: '*',
				dest: 'public/js/vendor/'
			},
			favicon: {
				expand: true,
				cwd: 'assets/',
				src: 'favicon.ico',
				dest: 'public/'
			}
		},
		emberTemplates: {
			compile: {
				options: {
					templateBasePath: 'app/templates'
				},
				files: {
					'public/js/templates.js': 'app/templates/**/*.hbs'
				}
			}
		},
		watch: {
			concat: {
				options: {
					atBegin: true
				},
				files: 'app/**/*.js',
				tasks: ['concat']
			},
			stylus: {
				options: {
					atBegin: true
				},
				files: 'assets/css/*.styl',
				tasks: ['stylus']
			},
			css: {
				options: {
					livereload: true
				},
				files: '<%= stylus.style.dest %>'
			},
			emberTemplates: {
				options: {
					atBegin: true,
					livereload: true
				},
				files: 'app/templates/**/*.hbs',
				tasks: ['emberTemplates']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['copy', 'watch']);
	grunt.registerTask('production', ['concat', 'stylus', 'copy', 'emberTemplates']);
};
