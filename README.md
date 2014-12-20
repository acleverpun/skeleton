# Skeleton

A skeleton for games built on [phaser](http://phaser.io/).
It transpiles ES6 JavaScript using [6to5](https://github.com/6to5/6to5), which facilitates writing very expressive and convenient game code.
We have found this to be especially useful when it comes to game development, which seems to benefit from ES6 even more than many other JavaScript projects.

Some ES6 features particularly useful for game development:

- [arrow functions (context preservation)](https://6to5.org/features.html#arrow-functions)
- [classes](https://6to5.org/features.html#classes-1)
	- inheritance
- [constants](https://6to5.org/features.html#constants)
- [default parameters](https://6to5.org/features.html#default-parameters)
- [destructuring objects and arrays](https://6to5.org/features.html#destructuring)
- [generators](https://6to5.org/features.html#generators)
- [modules](https://6to5.org/features.html#modules)
- [rest params](https://6to5.org/features.html#rest-parameters)
- [spread](https://6to5.org/features.html#spread)
- [template literals](https://6to5.org/features.html#template-literals)


## Dependencies

- [Node.js](http://nodejs.org/)
- [bower](http://bower.io/)
- [broccoli](https://github.com/broccolijs/broccoli)

Assuming Node.js is installed, the others may be installed via `npm`.

```sh
$ npm install -g bower
$ npm install -g broccoli-cli
```


## Setup

In order to start playing with your new toys, you first need to install the batteries.
We will likely include a script to do all this eventually.

```sh
# download/extract the skeleton (make sure <gamePath> exists, `curl` doesn't make it)
$ curl -L 'https://github.com/acleverpun/skeleton/archive/master.tar.gz' | tar xz --strip-components=1 -C <gamePath>

$ cd <gamePath>

# change references to "skeleton" to your own <gameName>
sed -i 's:skeleton:<gameName>:' package.json bower.json app/config.js public/index.html

# change or remove the readme
$ vim README.md

# we have this run `bower install` as well, or else that too would be necessary
$ npm install
```


## Development

The `.js` files in `app/` get transpiled and concatenated into a file named `main.js`.
Everything in `public/` gets served directly.

One very important thing to keep in mind is that since you can write ES6 code, you can (and should) take advantage of ES6 modules.
Consider the following (albeit contrived) example:

```javascript
// app/entities/enemy.js

class Enemy {
	constructor(name) {
		this.name = name;
	}

	// blah blah blah
}

export default Player;
```

```javascript
// app/entities/boss.js

import Enemy from './entities/enemy';

class Boss extends Enemy {
	constructor(name) {
		super(name);

		this.type = 'boss';
	}

	// blah blah blah
}

export default Boss;
```

```javascript
// app/main.js

import Boss from './entities/boss';

var boss = new Boss('Larry');
```


## [DJ, Spin that shit](http://youtu.be/yx28m-M--4Q)

### Running

```sh
$ broccoli serve
```

### Building for distribution

We have yet to hit this point, but it will be along the lines of running `broccoli dist`.
