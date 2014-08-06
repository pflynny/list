// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

module.exports = function(grunt) {

    var pkg = grunt.file.readJSON( __dirname +'/package.json');
    var path = require('path');

    // Project configuration.
    grunt.initConfig({

        pkg: pkg,

        /**
         * Set up the project environment
         */
        paths: {
            site: 'site',
            assets: 'site/assets',
            css: '<%= paths.assets %>/css',
            javascript: '<%= paths.assets %>/js',
            minifiedJavascript: '<%= paths.assets %>/js/dist/',
            buildJavascript: 'build'
        },

        autoprefixer: {
            options: {
                browsers: ['ie 7', 'ie 8', 'ie 9']
            },
            single_file: {
                src: '<%= paths.css %>/style.css',
                dest: 'www/assets/css/site.fin.css'
            },
        },

        /**
         * JS stuff
         */
        concat: {
            lib: {
                src: [
                    // '<%= paths.javascript %>/libs/*.js',
                    '<%= paths.buildJavascript %>/site.js'
                ],
                dest: '<%= paths.buildJavascript %>/site.build.js'
            },
            move: {
                src: [
                    '<%= paths.buildJavascript %>/site.build.js'
                ],
                dest: 'www/assets/js/production.min.js'
            }
        },

        uglify: {
            build: {
                src: '<%= paths.buildJavascript %>/site.build.js',
                dest: 'www/assets/js/production.min.js'
            }
        },

        /**
         * Lint the JS and hurt all the feelings!
         */
        jshint: {
            options: {
                force: true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                },
                ignores: [
                    "<%= paths.buildJavascript %>/*.js",
                    "<%= paths.assets %>/js/jquery-1.11.1.min.js",
                    "/**/*.min.js",
                 ]
            },
            all: ['<%= paths.javascript %>/**/*.js']
        },

        /**
         * Let's use some proper module structure for the public site, woohoo!
         * */
        browserify: {
            application: {
                files: {
                    '<%= paths.buildJavascript %>/site.js': [
                        '<%= paths.javascript %>/components/**/*.js',
                        '<%= paths.javascript %>/site.js'
                    ]
                },
            }
        },



        /**
         * Watch
         */
        watch: {

            css: {
                files: [
                    "<%= paths.css %>/*.css"
                ],
                tasks: ['css'],
                options: {
                    livereload: true,
                    atBegin: true
                }
            },

            js: {
                files: [
                    "<%= paths.javascript %>/**/*.js"
                ],
                tasks: ['js'],
                options: {
                    livereload: true,
                    atBegin: true
                }
            }

        }

    });

    // The cool way to load your grunt tasks
    Object.keys( pkg.dependencies ).forEach( function( dep ){
        if( dep.substring( 0, 6 ) === 'grunt-' ) grunt.loadNpmTasks( dep );
    });



    /**
     * Register all the tasks
     * --------------------------------------------------------------------
     */

    grunt.registerTask("default", [
        "js",
        "css"
    ]);

    grunt.registerTask("build", [
        "js"
    ]);

    grunt.registerTask("build", [
        "css"
    ]);

    grunt.registerTask("css", [
        "autoprefixer",
    ]);

    grunt.registerTask("js", [
        "concat:lib",
        "browserify",
        "concat:move"
        // "jshint:all",
        // "uglify:build"
    ]);


};

