/**
 * Created by piermariacosina on 13/07/14.
 */
module.exports = {
    'LANDING H1 is correct': function (test) {
        test
            .open('http://0.0.0.0:4567')
            .assert.visible('#landing-section h1', 'Element is visible')
            .assert.text('#landing-section h1').is('COMMUNICATION & NEO-TECHNOLOGIES ADVISORS', 'Title is correct')
            .screenshot('tests/screenshots/landing.png')
            .done();
    },


    'ABOUT US H1 is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#aboutus')
            .wait(1000)
            .assert.visible('#aboutus-section h2', 'Element is visible')
            .assert.text('#aboutus-section h2').is('ABOUT US', 'Title is correct')
            .screenshot('tests/screenshots/aboutus.png')
            .done();
    },
    'HOW WE WORK H1 is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#howwework')
            .wait(1000)
            .assert.visible('#howwework-section h2', 'Element is visible')
            .assert.text('#howwework-section h2').is('HOW WE WORK', 'Title is correct')
            .screenshot('tests/screenshots/howwework.png')
            .done();
    },
    'WHAT WE DO H1 is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#howwework/1')
            .wait(2000)
            .assert.visible('#whatwedo-section h2', 'Element is visible')
            .assert.text('#whatwedo-section h2').is('WHAT WE DO', 'Title is correct')
            .screenshot('tests/screenshots/whatwedo.png')
            .done();
    },
    'OUR EXPERIENCES H1 is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#ourexperiences')
            .wait(1000)
            .assert.visible('#ourexperiences-section h2', 'Element is visible')
            .assert.text('#ourexperiences-section h2').is('OUR EXPERIENCES', 'Title is correct')
            .screenshot('tests/screenshots/ourexperiences.png')
            .done();
    },
    'OUR EXPERIENCES2 H1 is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#ourexperiences/1')
            .wait(2000)
            .assert.visible('#ourexperiences2-section h2', 'Element is visible')
            .assert.text('#ourexperiences2-section h2').is('OUR EXPERIENCES', 'Title is correct')
            .screenshot('tests/screenshots/ourexperiences2.png')
            .done();
    },
    'OUR VALUES H1 is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#ourvalues')
            .wait(1000)
            .assert.visible('#ourvalues-section h2', 'Element is visible')
            .assert.text('#ourvalues-section h2').is('OUR VALUES', 'Title is correct')
            .screenshot('tests/screenshots/ourvalues.png')
            .done();
    },
    'OUR OFFICES H1 is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#ouroffices')
            .wait(1000)
            .assert.visible('#ouroffices-section h2', 'Element is visible')
            .assert.text('#ouroffices-section h2').is('OUR OFFICES', 'Title is correct')
            .screenshot('tests/screenshots/ouroffices.png')
            .done();
    },
    'CONTACT US H1 is correct': function (test) {
        test
            .open('http://0.0.0.0:4567/#ouroffices/1')
            .wait(2000)
            .assert.visible('#contactus-section h2', 'Element is visible')
            .assert.text('#contactus-section h2').is('CONTACT US', 'Title is correct')
            .screenshot('tests/screenshots/contactus.png')
            .done();
    },
    'GRID should not be visible': function (test) {
        test
            .open('http://0.0.0.0:4567/')
            .assert.css('.container', 'background-image','none')
            .done();
    }
};