Feature('GoogleSearch');

Scenario('test something',  ({ I }) => {
    I.amOnPage('https://www.google.com/')
    I.wait(2)
});
