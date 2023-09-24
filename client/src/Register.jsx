import { useState } from "react";

export default function Register() {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    return(
        <div className="bg-white dark:bg-slate-800 h-screen flex items-center">
            <div className="w-64 mx-auto text-slate-400 mb-13">
                <form>
                    <input 
                    className="mb-2 block dark:bg-slate-900 w-full py-3 px-2 rounded-lg shadow-lg" 
                    placeholder="username" 
                    type="text"
                    value={username}
                    onChange={ev => setUsername(ev.target.value)} />
                    <input 
                    className="mb-2 block dark:bg-slate-900 w-full py-3 px-2 rounded-lg shadow-lg" 
                    placeholder="password" 
                    type="password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)} />
                    <button className="block w-full text-white dark:bg-blue-900 py-3 px-2 rounded-lg" type="submit">register</button>
                </form>
            </div>
        </div>
    );
}