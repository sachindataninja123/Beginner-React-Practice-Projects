function User({user}) {
    // console.log(name, age, email);
    return(
        <div>
            <hr />
            <h1>Name: {user.name}</h1>
            <h2>Age: {user.age}</h2>
            <h2>User: {user.email}</h2>
            <h2>Hobby : {user.hobby}</h2>
        </div>
    )
}

export default User