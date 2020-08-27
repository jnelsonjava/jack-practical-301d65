'use strict';

const cheerio = require('cheerio');

/*
--------------------------------------------------------------------------
Write a function named addTea that uses jQuery to add tea to the shopping list.

Remember, in this test, $ is jQuery, just as it is in a normal web app
--------------------------------------------------------------------------
*/

let $ = createSnippetWithJQuery(`
  <ul>
    <li>apples</li>
    <li>bananas</li>
    <li>carrots</li>
    <li>beans</li>
    <li>coffee</li>
  </ul>
`);

const addTea = () => {
  // Solution code here ...
}

///////////////////////////////////////////////////
// TESTS
//////////////////////////////////////////////////

describe('Testing challenge', () => {
  it('It should add tea to the list', () => {
    addTea();
    expect($('li:nth-child(6)').text()).toStrictEqual('tea');
  })
});

function createSnippetWithJQuery(html) {
  return cheerio.load(html);
};
