import { useState } from "react"
import "../style.css"

const Form = () => {

    const [ username, setUsername ] = useState('')

    const [ email, setEmail] = useState('')

    const [ password, setPassword] = useState('')

    const [ confirmPassword, setConfirmPassword ] = useState('')



    const [ errorusername, setErrorUsername ] = useState('')

    const [ erroremail, setErrorEmail] = useState('')

    const [ errorpassword, setErrorPassword] = useState('')

    const [ errorconfirmPassword, setErrorConfirmPassword ] = useState('')



    const [ userColor, setUserColor ] = useState('')

    const [ emailColor, setEmailColor ] = useState('')

    const [ passwordColor, setPasswordColor ] = useState('')

    const [ confirmPasswordColor, setConfirmPasswordColor ] = useState('')


    const validate = e => {
        e.preventDefault()

        if (username.length >= 8) {
            setErrorUsername('')
            setUserColor('green')
        } else {
            setErrorUsername("Username must be 8 characters long")
            setUserColor('red')
        }


        if (email.includes('@')) {
            setErrorEmail('')
            setEmailColor('green')
        } else {
            setErrorEmail("Invalid Email")
            setEmailColor('red')
        }

        if (password.length >= 6) {
            setErrorPassword('')
            setPasswordColor('green')
        } else {
            setErrorPassword("Password must be at least 6 characters long")
            setPasswordColor('red')
        }

        if (confirmPassword === password) {
            setErrorConfirmPassword('')
            setConfirmPasswordColor('green')
        } else {
            setErrorConfirmPassword("Passwords do not match")
            setConfirmPasswordColor('red')
        }

        
    }


  return (
    <>

        <div className="card">

            <div className="card-image"></div>

            <form onSubmit={validate}>
                <input type="text" placeholder="Name" style={{ borderColor: userColor}} 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <p className="error">{errorusername}</p>

                <input type="email" placeholder="Email" style={{ borderColor: emailColor}} value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                    <p className="error">{erroremail}</p>
                
                <input type="password" placeholder="Password" style={{ borderColor: passwordColor}} value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                    <p className="error">{errorpassword}</p>
                
                <input type="password" placeholder="Confirm Password" style={{ borderColor: confirmPasswordColor }} value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
                    <p className="error">{errorconfirmPassword}</p>

                
                <button className="submit-btn">Submit</button>


            
            </form>
        </div>

    </>
  )
}

export default Form