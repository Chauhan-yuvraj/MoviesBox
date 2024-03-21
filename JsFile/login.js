addEventListener("DOMContentLoaded", () => {
    const firebaseConfig = {
        apiKey: "AIzaSyA1ogU5e0SkYYME-x7dMBYFxQnk5H_pXrg",
        authDomain: "themoiveshow-007.firebaseapp.com",
        projectId: "themoiveshow-007",
        storageBucket: "themoiveshow-007.appspot.com",
        messagingSenderId: "385207153265",
        appId: "1:385207153265:web:cc92950e2a6c4c014fe1d0",
        measurementId: "G-XJ80VZ3HBX"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);


    const auth = firebase.auth()
    const database = firebase.database()
    const SignUp = document.getElementById("signUp")

    SignUp.addEventListener('click', () => {
        email = document.getElementById('email').value
        username = document.getElementById('username').value
        password = document.getElementById('password').value

        // valide the fields 
        if (validate_email(email) == false) {
            alert("Email is invalid")
            return
        } else if (validate_password(password) == false) {
            alert("password is invalid")
            return
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                var user = auth.currentUser
                // add this user base to firebase
                var database_ref = database.ref()
                var user_data = {
                    email : email,
                    name :  username,
                    last_Login  : Date.now()
                }

                database_ref.child('user/'+ user.uid).set(user_data)



                alert('User is Created')



            }).catch((error) => {
                var error_code = error.code
                var error_message = error.message
                alert(error_message)
            })

        // validate the email 
        const validate_email = (email) => {
            expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if (expression.test(email) == true) {
                return true
            } else {
                return false
            }
        }
        // validate the password 
        const validate_password = (password) => {
            passw = /^[A-Za-z]\w{7,14}$/
            if (password.test(passw) == true) {
                return true
            } else {
                return false
            }
        }


    })
})