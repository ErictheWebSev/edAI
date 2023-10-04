document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById('signupForm')
  const signupChange = document.getElementById('signupChange')
  const signupChange2 = document.getElementById('signupChange2')
  const signupChange3 = document.getElementById('signupChange3')
  const signupChange4 = document.getElementById('signupChange4')
  const signinChange = document.getElementById('signinChange')
  const signinChange2 = document.getElementById('signinChange2')
  const signup = document.querySelector('.form1')
  const signup1 = document.querySelector('.form2')
  const signup2 = document.querySelector('.form3')
  
  signinChange.addEventListener('click', (e) => {
    signup1.classList.add('hidden')
    signup2.classList.remove('hidden')
    signinChange.style.display = 'none'
    signinChange2.classList.remove('hidden')
  })
  signinChange2.addEventListener('click', (e) => {
    signup1.classList.remove('hidden')
    signup2.classList.add('hidden')
    signinChange.style.display = 'block'
    signinChange2.classList.add('hidden')
  })
  
  signupChange.addEventListener('click', () => {
    signup.classList.add('mobile-switch2')
    setTimeout(function() {
      signup1.classList.add('mobile-switch')
      signup2.classList.add('mobile-switch')
    }, 2000);
    
  })
  
  signupChange2.addEventListener('click', () => {
    signup.classList.add('mobile-switch2')
    signup1.classList.add('hidden')
    signup2.classList.remove('hidden')
    setTimeout(function() {
      signup2.classList.add('mobile-switch')
    }, 2000);
    
  })
  signupChange3.addEventListener('click', () => {
    signup.classList.add('mobile-switch2')
    signup1.classList.add('hidden')
    signup2.classList.remove('hidden')
    setTimeout(function() {
      signup2.classList.add('mobile-switch')
    }, 2000);
    
  })
  signupChange4.addEventListener('click', () => {
    signup.classList.add('mobile-switch2')
    signup1.classList.remove('hidden')
    signup2.classList.add('hidden')
    
  })
  
  
})