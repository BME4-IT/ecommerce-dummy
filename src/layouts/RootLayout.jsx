import { Outlet } from "react-router-dom";

export default function RootLayout(){
    return (
        <div>
            <header>
                <h1>Ini Header</h1>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                <h1>Ini Footer</h1>
            </footer>
        </div>
    );
}