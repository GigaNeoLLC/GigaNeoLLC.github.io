document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get all checked checkboxes
    const selectedOptions = [];
    document.querySelectorAll('.work-request--options input[type="checkbox"]:checked').forEach(function(checkbox) {
        selectedOptions.push(checkbox.value);
    });
  
    // Construct the email body
    const selectedOptionsText = selectedOptions.join(', ');
    const subject = encodeURIComponent('Software development inquiry');
    const body = encodeURIComponent(`Hello,\n\nI am interested in the following options:\n${selectedOptionsText}\n\nBest regards,`);
    
    // Construct the mailto link
    const mailtoLink = `mailto:biz@giganeo.com?subject=${subject}&body=${body}`;
    
    // Open the default email client
    window.location.href = mailtoLink;
  });