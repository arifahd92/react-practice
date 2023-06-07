import React from 'react'

export default function Effect() {
    useEffect(() => {
        console.log("useEffect function called outide setTimeout")
        let timeout = setTimeout(() => {
            console.log("useEffect function called inside setTimeout")
            setFormIsValid(
                enteredPassword.trim().length > 6 && enteredEmail.includes('@') && enteredCollege.trim().length > 3
            );
        }, 1000)
        return () => {
            console.log("cleanup function")
            //first time it will not run 
            // but from next time it will rum on priority
            //pahle ye chalega and then upar wala function
            //suppose i m clearing set timeout inside this then first time it will not run yani clear nhi hoga 
            //but in second time pahle ye chalega and pahle waale ko clear kar dega fir upar wala func chalega k set time out set ho jayega and so on 
            // when dom will unmount tab bhi chalega un mount ka matlab dusara component render 
            clearTimeout(timeout)
        }
    }, [enteredCollege, enteredPassword, enteredEmail])
    return (
        <div>

        </div>
    )
}
