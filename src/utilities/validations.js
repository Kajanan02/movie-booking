export function validateTicketBook(values) {
    let errors = {};

    if (!values.contactNumber) {
        errors.contactNumber = 'contactNumber is required';
    }else if (!/^[0-9]{10}$/.test(values.contactNumber)) {
        errors.contactNumber = 'contactNumber is invalid';
    }
    if (!values.email) {
        errors.email = 'email is required';
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'email is invalid';
    }
    if (!values.name) {
        errors.name = 'name is required';
    }
    if (!values.address) {
        errors.address = 'address is required';
    }

    return errors;
}

export function validateContact(values) {
    let errors = {};

    if (!values.contactNo) {
        errors.contactNo = 'contactNo is required';
    }else if (!/^[0-9]{10}$/.test(values.contactNo)) {
        errors.contactNo = 'contactNumber is invalid';
    }
    if (!values.email) {
        errors.email = 'email is required';
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'email is invalid';
    }
    if (!values.name) {
        errors.name = 'name is required';
    }
    if (!values.subject) {
        errors.subject = 'subject is required';
    }
  if (!values.message) {
        errors.message = 'message is required';
    }

    return errors;
}

export function validateFAQ(values) {
    let errors = {};

    if (!values.question) {
        errors.question = 'question is required';
    }
    if (!values.answer) {
        errors.answer = 'answer is required';
    }

    return errors;
}

export function validateConfirmationDialog(values) {
    let errors = {};
    if (!values.reason) {
        errors.reason = 'Reason is required';
    }

    return errors;
}

export function validateMovieData(values) {
    let errors = {};

    if (!values.name) {
        errors.name = "Name is Required"
    }
    if (!values.category) {
        errors.category = "Category is Required"
    }
    if (!values.actor) {
        errors.actor = "Actor is Required"
    }
    if (!values.genre) {
        errors.genre = "Genre is Required"
    }
    if (!values.release) {
        errors.release = "Release Date is Required"
    }
    if (!values.language) {
        errors.language = "Language is Required"
    }
    if (!values.description) {
        errors.description = "Description is Required"
    }
    if (!values.rate) {
        errors.rate = "Rate is Required"
    }
    if (!values.duration) {
        errors.duration = "Duration is Required"
    }

    return errors;
}


