const POSSIBLE_GENDERS = ['male', 'female', 'other'];

class Person {
    constructor(name, lastName, gender, yearOfBirth, professions) {
        let errors = [];
        if (!name) {
            errors.push('Invalid Name');
        }

        if(!lastName) {
            errors.push('Invalid Last Name');
        }

        if(!POSSIBLE_GENDERS.includes(gender)) {
            errors.push('Invalid Gender, must be one of those: male, famale or other');
        }

        if(Number.isNaN(+yearOfBirth)) {
            errors.push('Invalid Year Of Birth');
        }

        if(!Array.isArray(professions)) {
            errors.push('Invalid Professions');
        }

        if(errors.length > 0) {
            throw new Error(`Errors: ${errors.toString()}`);
        }

        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.yearOfBirth = yearOfBirth;
        this.professions = professions;
    }

    getNumberOfProfessions() {
        return this.professions.length;
    }

    getAge(currentYear) {
        return +currentYear - +this.yearOfBirth;
    }

    addNewProfession(profession) {
        this.professions.push(profession);
    }

    changeGender(gender) {
        if (POSSIBLE_GENDERS.includes(gender)) {
            this.gender = gender;
        }
    }

    getFullName() {
        return `${this.name} ${this.lastName}`;
    }

    toJSON() {
        return {
            name: this.name,
            lastName: this.lastName,
            gender: this.gender,
            yearOfBirth: this.yearOfBirth,
            professions: this.professions,
        }
    }
}

module.exports = Person;