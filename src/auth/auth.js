
const users= [
    {
        email:"anah@hotmail.com",
        password:"123456",
        username:"Ana"
    },
    {
        email:"laura@gmail.com",
        password:"123456",
        username:"Laurita"
    },
    {
        email:"tomas@hotmail.com",
        password:"123456",
        username:"Tommi"
    },
    {
        email:"leila@gmail.com",
        password:"123456",
        username:"Leiloca"
    },
    {
        email:"xarinha@hotmail.com",
        password:"123456",
        username:"Sahra"
    }
]
export const login = ({email, password}) =>{
    const user =user.find(
        (user)=> user.email === email && user.password === password
    );
    if(user === undefined) throw new Error();
    return user;
}