//
// [marque] bundle/Gruntfile.js
//
// Bundles the client & server applications in single distributable package.
//
// (c) 2018 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//
'use strict';

module.exports = function (grunt) {
  //
  // Load all grunt tasks
  //
  require('load-grunt-tasks')(grunt);

  //
  // Initialize configuration
  //
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    pkg_client: grunt.file.readJSON('../client/package.json'),
    pkg_server: grunt.file.readJSON('../server/package.json'),

    dir: {
      client: 'client',
      server: 'server',
    },

    banner: {
      options: {
        level1: 'yellow',
        level2: 'magenta',
        level3: 'cyan'
      },
      main: {
        level: 'level1',
        text: 'Creating application bundle'
      },
      client: {
        level: 'level2',
        text: 'Building <%= pkg_client.name %> v<%= pkg_client.version %>'
      },
      server: {
        level: 'level2',
        text: 'Building <%= pkg_server.name %> v<%= pkg_server.version %>'
      },
      assemble: {
        level: 'level2',
        text: 'Assembling components'
      },
      client_lint: {
        level: 'level3',
        text: 'Lint'
      },
      client_build: {
        level: 'level3',
        text: 'Build'
      },
    },

    shell: {
      client_lint: {
        command: [
          'pushd ../<%= dir.client %>',
          'ng lint',
          'popd',
        ].join('&&')
      },
      client_build: {
        command: [
          'pushd ../<%= dir.client %>',
          'ng build --prod --aot',
          'popd',
        ].join('&&')
      },
    },
  });

  //
  // MultiTask: banner
  //
  grunt.registerMultiTask('banner', 'Show banner.', function () {
    const level = this.data.level;
    const text = this.data.text;
    const color = this.options()[level];

    let banner;

    switch (level) {
      case 'level1':
        banner = ':::\n::: ' + text + '\n:::\n';
        break;

      case 'level2':
        banner = ' :: ' + text;
        break;

      case 'level3':
        banner = '  : ' + text;
        break;

      default:
        banner = '  . ' + text;
    }

    grunt.log.subhead(banner[color].bold);

  });

  //
  // Task: client
  //
  grunt.registerTask('client', [
    'banner:client',
    'banner:client_lint',
    'shell:client_lint',
    'banner:client_build',
    'shell:client_build'
  ]);

  //
  // Task: server
  //
  grunt.registerTask('server', [
    'banner:server',
  ]);

  //
  // Task: assemble
  //
  grunt.registerTask('assemble', [
    'banner:assemble',
  ]);

  //
  // Task: default
  //
  grunt.registerTask('default', [
    'banner:main',
    'client',
    'server',
    'assemble'
  ]);
};
