class FormValidation {
    constructor(form) {
        this.errors = []
        this.email = form.email;
        this.firstName = form.firstName;
        this.lastName = form.lastName;
        this.birthday =form.birthday;
        this.password = form.password;
        this.checkPassword = form.checkPassword;

        this.passwordValidation();
        this.nameValidation();
        this.emailValidation();
        this.birthdayValidation();
    }

    passwordValidation() {
        if (!this.password || !this.checkPassword) {
            this.errors.push("Must provide password")
        }
        else if (this.checkPassword !== this.password) {
                this.errors.push("Passwords do not match");
        }
    } 

    nameValidation() {
        if (!this.firstName) {
            this.errors.push("First name can't be blank");
        }
        if (!this.lastName) {
            this.errors.push("Last name can't be blank");
        }
    }

    emailValidation() {
        if (!this.email) {
            this.errors.push("Email can't be blank")
        }
    }

    birthdayValidation() {
        if (!this.birthday) {
            this.errors.push("Birthday can't be blank")
        }
    }
}

module.exports = FormValidation