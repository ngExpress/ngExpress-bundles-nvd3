'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        clean: {
            dist: {
                files: [{
                    src: [
                        'dist'
                    ]
                }]
            }
        },

        concat: {
            js: {
                src: [
                    'bower_components/moment/moment.js', 
                    'bower_components/d3/d3.js', 
                    'bower_components/nvd3/nv.d3.js', 
                    'bower_components/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.js', 
                    'src/bundle.js'],
                dest: 'dist/bundle.js'
            },
            css: {
                src: [
                    'bower_components/nvd3/nv.d3.css'],
                dest: 'dist/bundle.css'
            }
        }
    });

    grunt.registerTask('build', [
        'clean',
        'concat'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};