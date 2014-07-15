/**
 * Created by piermariacosina on 13/07/14.
 */
module.exports = {
    'SMALL LOGO position it is not visible in landing': function (test) {
        test
            .open('http://0.0.0.0:4567')
            .assert.notVisible('#small-logo', 'Element is not visible')
            .done();
    },
    'SMALL LOGO is visible in other sections': function (test) {
        test
            .open('http://0.0.0.0:4567/#aboutus')
            .wait(1000)
            .assert.visible('#small-logo', 'Element is visible')
            .open('http://0.0.0.0:4567/#howwework')
            .wait(1000)
            .assert.visible('#small-logo', 'Element is visible')
            .done();
    }
};