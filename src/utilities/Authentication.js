export function loadCredential(credential) {
    localStorage.setItem('ACCESS_TOKEN', credential.token);
    localStorage.setItem('EMAIL', credential.email);
    localStorage.setItem('PHONE', credential.phoneNumber);
    localStorage.setItem('ROLE', credential.role);
    localStorage.setItem('ADDRESS', credential.address);
    localStorage.setItem('PROFILE_PIC', credential.profilePic);
    localStorage.setItem('USER_ID', credential._id);
    localStorage.setItem('NAME', credential.name);
}

export function signOut() {
    localStorage.clear();
    console.log("Sign out")
}

export function getAccessToken() {
    return localStorage.getItem('ACCESS_TOKEN');
}


