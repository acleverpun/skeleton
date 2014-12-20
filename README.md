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
- [6to5ify](https://github.com/6to5/6to5ify)

Assuming Node.js is installed, the others may be installed via `npm`.

```sh
$ npm install -g bower
$ npm install -g broccoli-cli
$ npm install -g 6to5ify
```


## Setup

In order to start playing with your new toys, you first need to install the batteries.

```sh
# download the skeleton
# (you could alternatively download/extract the archive from github.com, but that's lame)
$ git clone --depth=1 git://github.com/acleverpun/skeleton.git <gameName>

$ cd <gameName>

# remove the git metadata
$ rm -rf .git

# we have this run `bower install` as well, or else that too would be necessary
$ npm install
```


## [DJ, Spin that shit](http://youtu.be/yx28m-M--4Q)

### Running

```sh
$ broccoli serve
```

### Building for distribution

We have yet to hit this point, but it will be along the lines of running `broccoli dist`.
