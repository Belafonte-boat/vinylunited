/**
 * Created by piermariacosina on 13/07/14.
 */
module.exports = {
    'Background color is correct': function (test) {
        test
            .open('http://0.0.0.0:4567')
            .assert.css('html', 'background-color','rgba(16, 16, 16, 1)')
            .assert.css('body', 'background-color','rgba(16, 16, 16, 1)')
            .done();
    },
    'Arrow down color is correct': function (test) {
        test
            .open('http://0.0.0.0:4567')
            .assert.css('.arrow-down a span', 'color','rgba(215, 135, 114, 1)')
            .done();
    },
    'Arrow side color is correct': function (test) {
        test
            .open('http://0.0.0.0:4567')
            .assert.css('.arrow-left span', 'color','rgba(215, 135, 114, 1)')
            .assert.css('.arrow-right span', 'color','rgba(215, 135, 114, 1)')
            .done();
    },
    'Section title color is correct': function (test) {
        test
            .open('http://0.0.0.0:4567')
            .assert.css('.section h2.title', 'color','rgba(136, 138, 141, 1)')
            .done();
    },
    'Section paragraph color is correct': function (test) {
        test
            .open('http://0.0.0.0:4567')
            .assert.css('.section p.main', 'color','rgba(183, 183, 183, 1)')
            .done();
    },
    'Section category title color is correct': function (test) {
        test
            .open('http://0.0.0.0:4567')
            .assert.css('.section .category h3', 'color','rgba(215, 135, 114, 1)')
            .done();
    },
    'Section category item color is correct': function (test) {
        test
            .open('http://0.0.0.0:4567')
            .assert.css('.section .category li', 'color','rgba(165, 163, 161, 1)')
            .done();
    }
};

