import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() { // Name the component for clarity
    const router = useRouter();

    return (
        <div>
            <button onClick={async () => {
                await signIn("google");
            }}>
                Login with Google
            </button>
            <br />
            <button onClick={async () => {
                await signIn("github");
            }}>
                Login with Github
            </button>
            <br />
            <form onSubmit={async (e) => { // Use a form for better UX
                e.preventDefault(); // Prevent default form submission

                const username = e.target.username.value;
                const password = e.target.password.value;

                const res = await signIn("credentials", {
                    username,
                    password,
                    redirect: false,
                });
                console.log(res);
                router.push("/");
            }}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit">Login with email</button>
            </form>
        </div>
    );
}
