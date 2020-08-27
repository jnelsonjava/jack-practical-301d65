'use strict';

const cheerio = require('cheerio');
const Mustache = require('mustache');

/*
--------------------------------------------------------------------------
Write a function named templatingWithMustache that uses Mustache to:
 - Create the markup for each of the characters.
 - Add the markup for each character to an array
 - Return an array of template strings.

Notes:
 - Use the snippet as your guide for creating your templates.
 - Note: this function does not need to actually append the markup to the DOM.

Remember, in this test, $ is jQuery, just as it is in a normal web app
--------------------------------------------------------------------------
*/

let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
];

let $ = createSnippetWithJQuery(`
<script id="template" type="x-tmpl-mustache">
<h2> {{ name }} </h2>
<h3> {{ spouse }} </h3>
{{#children}}
* {{.}}
{{/children}}
<p> {{ house }} </p>
</script>
`)

const templatingWithMustache = () => {
  // Solution code here...
}

///////////////////////////////////////////////////
// TESTS
//////////////////////////////////////////////////

describe('Testing challenge', () => {
  it('It should return html markup with the character', () => {
    const filledTemplates = templatingWithMustache();
    $ = cheerio.load(filledTemplates[0]);
    expect($('h2').text()).toContain('Eddard');
  });
});

function createSnippetWithJQuery(html) {
  return cheerio.load(html);
};
