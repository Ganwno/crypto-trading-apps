export default function Signup() {
    return (
        <>
            <form>
                <label>First Name</label><input type="text" placeholder="Jonh" />
                <label>Last Name</label><input type="text" placeholder="Doe" />
                <label>User Name</label><input type="text" placeholder="johnDoe14fsx" />
                <label>Email</label><input type="email" placeholder="Doe" />
                <label>Password</label><input type="password" placeholder="Password" />
                <label>Confirm Password</label><input type="password" placeholder="Password" />
                <button>Sign up</button>
            </form>
        </>
    )
}