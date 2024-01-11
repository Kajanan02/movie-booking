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

