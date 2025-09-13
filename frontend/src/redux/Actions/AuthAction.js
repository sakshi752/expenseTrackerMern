export const logedIn = (user,token)=>({
    type:"LOGIN",
    payload: { user, token }
})

export const logedOut = ()=>({
     type: "LOGOUT"
})