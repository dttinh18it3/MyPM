

const navSlide = () => {
    const toggleButton = document.querySelector('.toggleButton');
    const nav_links = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    function NavigationResponsive() {
        nav_links.classList.toggle('nav-active');
        // navLinks.forEach((link, index) => {
        //     if(link.style.animation) {
        //         link.style.animation = '';
        //     } else {
        //         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        //     }
        // });
        toggleButton.classList.toggle('toggle');
    }

    toggleButton.addEventListener('click', () => {
        NavigationResponsive();
    });

    const btnLogin = document.querySelector('.btnLogin');
    const formLoginPopup = document.querySelector('.loginFormPopup');
    const modal = document.querySelector('.modal');
    btnLogin.addEventListener('click', () => {
        formLoginPopup.classList.toggle('loginFormPopup-active');
        modal.classList.toggle('modal-active');
        registrationFormPopup.classList.remove('registrationFormPopup-active');
        nav_links.classList.remove('nav-active');
        toggleButton.classList.remove('toggle');
    })

    const btnCloseLoginForm = document.getElementById('btnClose');
    btnCloseLoginForm.addEventListener('click', () => {
        formLoginPopup.classList.remove('loginFormPopup-active');
        modal.classList.remove('modal-active');
    });

    const btnRegister = document.querySelector('.btnRegister');
    const registrationFormPopup = document.querySelector('.registrationFormPopup');
    btnRegister.addEventListener('click', () => {
        modal.classList.toggle('modal-active');
        registrationFormPopup.classList.toggle('registrationFormPopup-active');
    });
    
    const createAccount = document.getElementById('createAccount');
    createAccount.addEventListener('click', () => {
        registrationFormPopup.classList.toggle('registrationFormPopup-active');
        formLoginPopup.classList.remove('loginFormPopup-active');
    });

    const backToLogin = document.getElementById('backToLogin');
    backToLogin.addEventListener('click', () => {
        registrationFormPopup.classList.remove('registrationFormPopup-active');
        formLoginPopup.classList.add('loginFormPopup-active');
    });

    const btnCloseRegistrationForm = document.getElementById('btnCloseRegistration');
    btnCloseRegistrationForm.addEventListener('click', () => {
        registrationFormPopup.classList.remove('registrationFormPopup-active');
        modal.classList.remove('modal-active');
    });



    ScrollNavigation();
    LoginCheckInput();
    CheckInputEmpty();
}

function ScrollNavigation() {
    $('body').css('padding-top', $('.navbar').outerHeight() + 'px')
    // detect scroll top or down
    if ($('.smart-scroll').length > 0) { // check if element exists
        var last_scroll_top = 0;
        $(window).on('scroll', function() {
            scroll_top = $(this).scrollTop();
            if(scroll_top < last_scroll_top) {
                $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
            }
            else {
                $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
    }
}

function TogglePassword(input) {
    const form_control = input.parentElement;
    const toggle_password = form_control.querySelector('i');
    if(input.type === 'password') {
        input.setAttribute('type', 'text');
        toggle_password.classList.remove('fa-eye-slash');
        toggle_password.classList.add('fa-eye');
    } else {
        input.setAttribute('type', 'password');
        toggle_password.classList.remove('fa-eye');
        toggle_password.classList.add('fa-eye-slash');
    }
}

function CheckUserName(username) {
    var textRegex = /^(([A-Z][a-z]+) ?){2,}$/;
    return (textRegex.test(username)) ? true : false;
}
function CheckGender(gender) {
    var booleanRegex = /^(0|1)$/;
    return (booleanRegex.test(gender)) ? true : false;
}
function CheckDoB(dateOfBirth) {
    var dateRegex = /^\d{4}[./-]\d{2}[./-]\d{2}$/;
    return (dateRegex.test(dateOfBirth)) ? true : false;
}
function CheckCellphone(cellphone) {
    var cellphoneRegex = /\d{10}/;
    return (cellphoneRegex.test(cellphone)) ? true : false;
}
function CheckSpecialization(specialization) {
    var intRegex = /^[^0]\d*$/;
    return (intRegex.test(specialization)) ? true : false;
}
function CheckEmail(register__email) {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (emailRegex.test(register__email)) ? true : false;
}
function CheckPassword(password) {
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return (passwordRegex.test(password)) ? true : false;
}

function setErrorInput(input, message) {
    const form_control = input.parentElement;
    const small = form_control.querySelector('small');
    form_control.classList.add('invalid');
    input.style.border = "solid 1px red";
    small.innerText = message;
}
function setSuccessInput(input, message) {
    const form_control = input.parentElement;
    const small = form_control.querySelector('small');
    form_control.classList.remove('invalid');
    input.style.border = "solid 1px green";
    small.innerText = message;
}

function LoginCheckInput(){
    const loginForm = document.getElementById("loginInfomationBox");
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    const login_email = document.getElementById("login_email");
    const login_password = document.getElementById("login_password");
    login_email.onblur = function() {
        var login_email_value = $("#login_email").val().trim();
        if(login_email_value.length == 0) {
            setErrorInput(login_email, "Vui lòng nhập email!");
        } else if(!CheckEmail(login_email_value)) {
            setErrorInput(login_email, "Vui lòng nhập đúng email!");
        } else {
            setSuccessInput(login_email, "");
        }
       
    }
    login_password.onblur = function() {
        var login_password_value = $("#login_password").val().trim();
        if(login_password_value.length == 0) {
            setErrorInput(login_password, "Vui lòng nhập mật khẩu!");
        } else if(!CheckPassword(login_password_value)) {
            setErrorInput(login_password, "Mật khẩu không chính xác!");
        } else {
            setSuccessInput(login_password, "");
        }
       
    }
}


function CheckInputEmpty() {
    const user_Name = document.getElementById("user_Name");
    const gender = document.getElementById("gender");
    const dateOfBirth = document.getElementById("dateOfBirth");
    const cellphone = document.getElementById("cellphone");
    const specialization = document.getElementById("specialization");
    const register__email = document.getElementById("register__email");
    const pass = document.getElementById("pass");
    const confirm_password = document.getElementById("confirm_password");

    
    

    user_Name.onblur = function() {
        var user_Name_value = $("#user_Name").val().trim();
        if(user_Name_value.length == 0 ){
            setErrorInput(user_Name, "Vui lòng nhập tên!");
        } else if(!CheckUserName(user_Name_value)) {
                    setErrorInput(user_Name, "Tên không chính xác!");
                } else {
                    setSuccessInput(user_Name, "");
                }
    }
    dateOfBirth.onblur = function() {
        var dateOfBirth_value = $("#dateOfBirth").val().trim();
        if(!CheckDoB(dateOfBirth_value)) {
            setErrorInput(dateOfBirth, "Vui lòng chọn ngày sinh!");
        } else {
            setSuccessInput(dateOfBirth, "");
        }
    }
    cellphone.onblur = function() {
        var cellphone_value = $("#cellphone").val().trim();
        if(cellphone_value.length == 0 ){
            setErrorInput(cellphone, "Vui lòng nhập số điện thoại!");
        } else if(!CheckCellphone(cellphone_value)) {
                    setErrorInput(cellphone, "Số điện thoại không chính xác!");
                } else {
                    setSuccessInput(cellphone, "");
                }
    }
    specialization.onblur = function() {
        var specialization_value = $("#specialization").val().trim();
        if(!CheckSpecialization(specialization_value)) {
            setErrorInput(specialization, "Vui lòng chọn chuyên ngành!");
        } else {
            setSuccessInput(specialization, "");
        }
    }
    register__email.onblur = function() {
        var register__email_value = $("#register__email").val().trim();
        if(register__email_value.length == 0 ){
            setErrorInput(register__email, "Vui lòng nhập email!");
        } else if(!CheckEmail(register__email_value)) {
            setErrorInput(register__email, "Email không chính xác!");
        } else {
            setSuccessInput(register__email, "");
        }
    }
    pass.onblur = function() {
        var pass_value = $("#pass").val().trim();
        if(pass_value.length == 0 ){
            setErrorInput(pass, "Vui lòng nhập mật khẩu!");
        } else if(pass_value.length < 8){
                    setErrorInput(pass, "Mật khẩu phải dài hơn 8 kí tự!");
                } else if(!CheckPassword(pass_value)) {
                            setErrorInput(pass, "Mật khẩu phải chứa kí tự hoa, thường và số!");
                        } else {
                            setSuccessInput(pass, "");
                        }
    }   
    //     var gender_value = $("input[name=gender]:checked").val();

    confirm_password.onkeyup = function() {
        var pass_value = $("#pass").val().trim();
        var confirm_password_value = $("#confirm_password").val();
        if(!CheckPassword(pass_value)) {
            setErrorInput(confirm_password, "Vui lòng tạo chính xác mật khẩu trước!");
            confirm_password.style.border = "solid 1px red";
        } else if(confirm_password_value == pass_value) {
                    setSuccessInput(confirm_password, "Trùng khớp!");
                    confirm_password.style.border = "solid 1px green";
                } else {
                    setErrorInput(confirm_password, "Không trùng khớp!");
                    confirm_password.style.border = "solid 1px red";
                }
    }
    
    const btnRegistration = document.getElementById("btnRegistration");
    btnRegistration.onclick = function() {
        const registrationInfomationBox = document.getElementById("registrationInfomationBox");
        var user_Name_value = $("#user_Name").val().trim();
        var dateOfBirth_value = $("#dateOfBirth").val().trim();
        var cellphone_value = $("#cellphone").val().trim();
        var specialization_value = $("#specialization").val().trim();
        var register__email_value = $("#register__email").val().trim();
        var pass_value = $("#pass").val().trim();
        var confirm_password_value = $("#confirm_password").val();

        console.log(" 1 " + CheckUserName(user_Name_value))
        console.log(" 2 " + CheckDoB(dateOfBirth_value))
        console.log(" 3 " + CheckCellphone(cellphone_value))
        console.log(" 4 " + CheckSpecialization(specialization_value))
        console.log(" 5 " + CheckEmail(register__email_value))
        console.log(" 6 " + CheckPassword(pass_value))

        if(CheckUserName(user_Name_value) == false || CheckDoB(dateOfBirth_value) == false || CheckCellphone(cellphone_value) == false
            || CheckSpecialization(specialization_value) == false || CheckEmail(register__email_value) == false
            || CheckPassword(pass_value) == false || !(confirm_password_value == pass_value)) {
                    registrationInfomationBox.onsubmit = function(event) {
                        event.preventDefault();
                    }
            } else {
                document.getElementById("registrationInfomationBox").submit();
                // $.ajax({
                //     url : "/create-account",
                //     type : "POST",
                //     data : "abc",
                //     success : function(result) {
                //         console.log(result);
                //     }
                // });
            }
    }
}
navSlide();