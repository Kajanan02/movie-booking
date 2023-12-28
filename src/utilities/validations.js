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