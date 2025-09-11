function toggleAidDetails() {
    const aidDetails = document.getElementById('aidDetails');
    aidDetails.style.display = aidDetails.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('inquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');
    
    if (name && email && message) {
        formMessage.innerHTML = '<div class="alert alert-success">Thank you for your inquiry! We will get back to you soon.</div>';
        this.reset();
    } else {
        formMessage.innerHTML = '<div class="alert alert-danger">Please fill out all fields.</div>';
    }
});