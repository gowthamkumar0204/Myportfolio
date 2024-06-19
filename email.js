const form = document.querySelector('form');
const fullname=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const subject=document.getElementById('subject');
const message=document.getElementById('message');
function sendEmail()
{
    const bodyMessage = `Full name:${fullname.value}<br>Email:${email.value}<br>Phone Number:${phone.value}
                         <br>Subject:${subject.value}<br>Message:${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "gowthamkumar1848@gmail.com",
        Password : "5494A371B3BAE71B2E24B6EECD68BCB51D4C",
        To : 'gowthamkumar1848@gmail.com',
        From : "gowthamkumar1848@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message Send Sucessfully",
                icon: "success"
              });
        }
      }
    );
}
function checkInputs(){
    const items = document.querySelectorAll(".items");
    for (const item of items) {
        if(iyem.value == ""){
            ietm.classList.add("error")
            item.parentElement.classList.add("error");
        }
        item.addEventListener("keyup", ()=> {
            if(item.value !=="" )
                {
                ietm.classList.remove("error")
                item.parentElement.classList.remove("error");   
            }
            else{
                ietm.classList.add("error")
                item.parentElement.classList.add("error");
            }
        });
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    sendEmail();
});

