/**
 * Created by piermariacosina on 13/07/14.
 */
/**
 * Created by piermariacosina on 13/07/14.
 */
module.exports = {
    'LANDING arrow down to ABOUT US is correct': function (test) {
        test
            .open('http://0.0.0.0:4567')
            .assert.visible('#landing-section .arrow-down', 'Arrow is visible')
            .assert.text('#landing-section .arrow-down span').is('scroll down', 'Title is correct')
            .click("#landing-section .arrow-down a")
            .wait(1000)
            .assert.visible('#aboutus-section', 'Section is visible')
            .screenshot('tests/screenshots/links/aboutus.png')
            .done();
    },
    'ABOUT US arrow down to HOW WE WORK is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#aboutus')
            .wait(1000)
            .assert.visible('#aboutus-section .arrow-down', 'Arrow is visible')
            .assert.text('#aboutus-section .arrow-down span').is('HOW WE WORK', 'Title is correct')
            .click("#aboutus-section .arrow-down a")
            .wait(1000)
            .assert.visible('#howwework-section', 'Section is visible')
            .screenshot('tests/screenshots/links/howwework.png')
            .done();
    },
    'HOW WE WORK arrow down to OUR EXPERIENCES is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#howwework')
            .wait(1000)
            .assert.visible('#howwework-section .arrow-down', 'Arrow is visible')
            .assert.text('#howwework-section .arrow-down span').is('OUR EXPERIENCES', 'Title is correct')
            .click("#howwework-section .arrow-down a")
            .wait(1000)
            .assert.visible('#ourexperiences-section', 'Section is visible')
            .screenshot('tests/screenshots/links/ourexperiences.png')
            .done();
    },
    'OUR EXPERIENCES arrow down to OUR VALUES is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#ourexperiences')
            .wait(1000)
            .assert.visible('#ourexperiences-section .arrow-down', 'Arrow is visible')
            .assert.text('#ourexperiences-section .arrow-down span').is('OUR VALUES', 'Title is correct')
            .click("#ourexperiences-section .arrow-down a")
            .wait(1000)
            .assert.visible('#ourvalues-section', 'Section is visible')
            .screenshot('tests/screenshots/links/ourvalues.png')
            .done();
    },
    'OUR VALUES arrow down to OUR OFFICES is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#ourvalues')
            .wait(1000)
            .assert.visible('#ourvalues-section .arrow-down', 'Arrow is visible')
            .assert.text('#ourvalues-section .arrow-down span').is('OUR OFFICES', 'Title is correct')
            .click("#ourvalues-section .arrow-down a")
            .wait(1000)
            .assert.visible('#ouroffices-section', 'Section is visible')
            .screenshot('tests/screenshots/links/ouroffices.png')
            .done();
    }
};