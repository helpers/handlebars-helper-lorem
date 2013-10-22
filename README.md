# {{lorem}} [![NPM version](https://badge.fury.io/js/handlebars-helper-lorem.png)](http://badge.fury.io/js/handlebars-helper-lorem)

> Handlebars helper for generating lorem lorem placeholder text.

## Quickstart
In the root of your project, run the following in the command line:

```bash
npm i handlebars-helper-lorem --save-dev
```

## Usage

```handlebars
{{lorem options}}
```

## Options

### count
Type: `Number`
Default: `1`

Number of words, sentences, or paragraphs to generate.

### units
Type: `String`
Default: `sentences`

Generate `words`, `sentences`, or `paragraphs`.

### sentenceLowerBound
Type: `Number`
Default: `5`

Minimum words per sentence.

### sentenceUpperBound
Type: `Number`
Default: `15`

Maximum words per sentence.

### paragraphLowerBound
Type: `Number`
Default: `3`

Minimum sentences per paragraph.

### paragraphUpperBound
Type: `Number`
Default: `7`

Maximum sentences per paragraph.

### format
Type: `String`
Default: `plain`

Plain text or html.



## Examples

### Usage with [Assemble](http://assemble.io)

Easily pass options to the helper by creating a JSON or YAML file to hold the options, for example:

`ipsum.json`:

```json
{
  "count": 1,
  "units": "sentences",
  "sentenceLowerBound": 5,
  "sentenceUpperBound": 15,
  "paragraphLowerBound": 3,
  "paragraphUpperBound": 7,
  "format": "plain"
}
```

Then add the path to the file in the Assemble task options:

```js
assemble: {
  options: {
    data: 'foo.json'
  }
}
```

Now you can use the helper like this:

```handlebars
{{lorem ipsum}}
```

### Multiple options objects

You might want to use the helper to generate sentences sometimes, words sometimes, and paragraphs other times. Try this:


`ipsum.json`:

```json
{
  "words": {
    "count": 5,
    "units": "words"
  },
  "sentence": {
    "count": 3,
    "units": "sentences",
    "sentenceLowerBound": 10,
    "sentenceUpperBound": 15,
    "format": "html"
  },
  "paragraph": {
    "count": 3,
    "units": "paragraphs",
    "sentenceLowerBound": 10,
    "sentenceUpperBound": 20,
    "format": "html"
  }
}
```

Now you can pass the options to helper as follows:

```handlebars
{{lorem ipsum.words}}
{{lorem ipsum.sentence}}
{{lorem ipsum.paragraph}}
```


## Author

**Jon Schlinkert**

+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)
+ [github/jonschlinkert](http://github.com/jonschlinkert)


## License and Copyright

Licensed under the [MIT License](./LICENSE-MIT)
Copyright (c) Jon Schlinkert, contributors.