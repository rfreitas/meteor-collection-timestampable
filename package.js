Package.describe({
  git: 'https://github.com/rfreitas/meteor-collection-timestampable.git',
  name: 'rfreitas:collection-timestampable',
  summary: 'Add timestamps to collections',
  version: '1.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'check',
    'coffeescript',
    'underscore'
  ]);

  api.use([
    'matb33:collection-hooks@0.7.6',
    'zimme:collection-behaviours@1.1.0'
  ]);

  api.use([
    'aldeed:autoform@4.0.0 || 5.0.0',
    'aldeed:collection2@2.0.0',
    'aldeed:simple-schema@1.0.3'
  ], ['client', 'server'], {weak: true});

  api.imply('zimme:collection-behaviours');

  api.addFiles('timestampable.coffee');
});
