# marque

_marque_, in french, means _mark_. It is a **self hosted** bookmark application.

The server-side is built with ExpressJS and uses a simple JSON file as database.
The client is build with Angular.

## Features
* Self Hosted
  * No additional dependency.
* JSON Database
  * The bookmarks are stored in a formatted JSON file.
    * Easy to edit, share and backup.
* Latest application frameworks
  * Angular 6
  * ExpressJS 4

## Limitations
The edit capability isn't yet implemented.
But, the JSON database can be easily edited in any text editor of choice.

For now, the application is useful only for users comfortable in JSON format.

The file ``data/db.json`` contains sample data to get started.

## History
Originally, they were implemented as separate projects - not even working together.
The server was implemented in Javascript and the client was implemented first in
AngularJS and later in Angular2.

This project brings them together in a single project, implemented in Typescript.
And, of course, in new and improved form! A notable omission, today, is _Angular
Material_, just to experiment with custom themes. But, it might be added back, if
custom themes don't go as planned.

Beyond immediate utility, this project can be used as seed for building other
applications using same technologies.

### Integration issues
An activity planned for a couple of weekends, took much longer. Keeping aside
my inability to allocate desired time, here are few issues that I didn't account
for:
* Deciding a good code structure for ExpressJS with typescript.
* Changes to IDE
  * Original _client-side_ code written in Kate, though well formatted, didn't
    quite match the rules of _Typescript Hero_ and _Prettier_.
  * The commits almost ended being a re-write.
* Updated project dependencies.
 * Esp. typescript version and tslint rules.

## License
BSD-3-Clause Copyright [Sanjeev Premi](https://github.com/spremi)
