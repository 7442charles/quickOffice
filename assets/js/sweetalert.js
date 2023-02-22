function swalert() {
    Swal.fire({
        title: 'Enter Service and Email',
        html: `<input id="service-input" class="swal2-input" placeholder="Service">
               <input id="email-input" class="swal2-input" placeholder="Email">`,
        confirmButtonText: 'Send Request',
        focusConfirm: false,
        preConfirm: () => {
          const service = document.getElementById('service-input').value;
          const email = document.getElementById('email-input').value;
          if (!service || !email) {
            Swal.showValidationMessage('Please enter both Service and Email');
          }
          return { service, email };
        }
    }).then((result) => {
        if (result.isConfirmed) {
          const { service, email } = result.value;
          // Send request logic goes here
          Swal.fire('Request Sent', `Service: ${service}\nEmail: ${email}`, 'success');
        }
        });
      
}

function allservices() {
    
}

const tools = document.querySelector('#tools')
tools.addEventListener('click', ()=>{
    
})
console.log(tools);