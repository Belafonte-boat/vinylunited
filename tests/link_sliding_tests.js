/**
 * Created by piermariacosina on 13/07/14.
 */
/**
 * Created by piermariacosina on 13/07/14.
 */
module.exports = {
    'ABOUT US arrow right to PARTNERS is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#aboutus')
            .wait(1000)
            .assert.visible('#aboutus-section .arrow-right', 'Arrow is visible')
            .assert.text('#aboutus-section .arrow-right span').is('PARTNERS', 'Title is correct')
            .click("#partners-link")
            .wait(1000)
            .assert.visible('#partners-section', 'Section is visible')
            .screenshot('tests/screenshots/slide/partners.png')
            .done();
    },
    'PARTNERS arrow left to ABOUT US is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#aboutus/1')
            .wait(3000)
            .assert.visible('#partners-section .arrow-left', 'Arrow is visible')
            .assert.text('#partners-section .arrow-left span').is('ABOUT US', 'Title is correct')
            .click("#aboutus-link")
            .wait(1000)
            .assert.visible('#aboutus-section', 'Section is visible')
            .screenshot('tests/screenshots/slide/aboutus.png')
            .done();
    },
    'HOW WE WORK arrow right to WHAT WE DO is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#howwework')
            .wait(1000)
            .assert.visible('#howwework-section .arrow-right', 'Arrow is visible')
            .assert.text('#howwework-section .arrow-right span').is('WHAT WE DO', 'Title is correct')
            .click("#whatwedo-link")
            .wait(1000)
            .assert.visible('#whatwedo-section', 'Section is visible')
            .screenshot('tests/screenshots/slide/whatwedo.png')
            .done();
    },
    'WHAT WE DO arrow left to HOW WE WORK is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#howwework/1')
            .wait(3000)
            .assert.visible('#whatwedo-section .arrow-left', 'Arrow is visible')
            .assert.text('#whatwedo-section .arrow-left span').is('HOW WE WORK', 'Title is correct')
            .click("#howwework-link")
            .wait(1000)
            .assert.visible('#howwework-section', 'Section is visible')
            .screenshot('tests/screenshots/slide/howwework.png')
            .done();
    },
    'OUR EXPERIENCES arrow right to OUR EXPERIENCES2 is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#ourexperiences')
            .wait(1000)
            .assert.visible('#ourexperiences-section .arrow-right', 'Arrow is visible')

            .click("#experience2-link")
            .wait(1000)
            .assert.visible('#ourexperiences2-section', 'Section is visible')
            .screenshot('tests/screenshots/slide/ourexperiences2.png')
            .done();
    },
    'OUR EXPERIENCES2 arrow left to OUR EXPERIENCES is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#ourexperiences/1')
            .wait(3000)
            .assert.visible('#ourexperiences2-section .arrow-left', 'Arrow is visible')
            .click("#experience-link")
            .wait(1000)
            .assert.visible('#ourexperiences-section', 'Section is visible')
            .screenshot('tests/screenshots/slide/ourexperiences.png')
            .done();
    },
    'OUR OFFICES arrow right to CONTACT US is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#ouroffices')
            .wait(1000)
            .assert.visible('#ouroffices-section .arrow-right', 'Arrow is visible')
            .assert.text('#ouroffices-section .arrow-right span').is('CONTACT US', 'Title is correct')
            .click("#contactus-link")
            .wait(1000)
            .assert.visible('#contactus-section', 'Section is visible')
            .screenshot('tests/screenshots/slide/contactus.png')
            .done();
    },
    'CONTACT US arrow left to OUR OFFICES is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#ouroffices/1')
            .wait(3000)
            .assert.visible('#contactus-section .arrow-left', 'Arrow is visible')
            .assert.text('#contactus-section .arrow-left span').is('OUR OFFICES', 'Title is correct')
            .click("#ouroffices-link")
            .wait(1000)
            .assert.visible('#ouroffices-section', 'Section is visible')
            .screenshot('tests/screenshots/slide/ouroffices.png')
            .done();
    }
};