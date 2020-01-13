const Person = require('./Person');

describe('Unit Test: Person', () => {
    const name = 'Greta';
    const lastName = 'Thunberg';
    const gender = 'female';
    const yearOfBirth = 2003;
    const professions = ['activist'];

    beforeEach(() => {
    });

    it('must contains value of name equal to Greta', () => {

    });

    it('must contains value of lastName equal to Thunberg', () => {

    });

    it('must contains value of gender equal to female', () => {

    });

    it('must contains value of yearOfBirth equal to 2003', () => {

    });

    it('must contains value of profession equal to activist', () => {

    });

    describe('constructor', () => {
       it('must return error for name', () => {

       });

       it('must return a error for lastName', () => {

       });

       it('must return a error for gender when it is diferente from male, famale or other', () => {

       });

       it('must return a error for yearOfBirth when it is diferent from a number', () => {

       });

       it('must return a error for professions when it is not an array', () => {

       });
    });

    describe('getNumberOfProfessions', () => {
       it('must return 1', () => {

       });
    });

    describe('getAge', () => {
       it('must return 17', () => {

       });
    });

    describe('addNewProfession', () => {
        it('must add a new profession in professions attribute', () => {
            greta.addNewProfession('');
            expect(greta.getNumberOfProfessions()).toEqual(2);
        });
    });

    describe('changeGender', () => {
       it('must add a new gender in gender attribute', () => {

       });

       it('must not add a new gender which is not a possible gender', () => {

       });
    });

    describe('getFullName', () => {

    });

    describe('toJSON', () => {

    });
});