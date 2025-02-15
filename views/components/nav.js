const navegacion = document.getElementById('navegacion'); // Assuming your nav has this ID

const crearNavHome = () => {
    navegacion.innerHTML = `
        <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <p class="text-blue-50 font-bold text-xl">Restaurant app</p>
            <!-- Movil -->
            <button id="nav-btn" class="md:hidden cursor-pointer p-2 rounded-lg hover:bg-blue-500 focus:outline-none">
                <svg id="hamburger-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-white hidden">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>

            <!-- PC -->
            <div class="hidden md:flex flex-row gap-4">
                <a href="/login/" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition ease-in-out">Login</a>
                <a href="/registro/" class="text-black bg-white  font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition ease-in-out">Registros</a>
            </div>

            <!-- Movil -->
            <div id="menuMobile" class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center text-center flex-col gap-4 hidden">
                <a href="/login/" class="text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition ease-in-out">Login</a>
                <a href="/registro/" class="bg-white text-black font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition ease-in-out">Registro</a>
            </div>
        </div>
    `;
}

// Load the nav
crearNavHome();


//despliegue para el menu movil y agregar X
const navBtn = document.getElementById('nav-btn'); // Use ID to get the button
if (navBtn) {
    navBtn.addEventListener('click', e => {
        const menuMobile = document.getElementById('menuMobile');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const closeIcon = document.getElementById('close-icon');

        if (menuMobile.classList.contains('hidden')) {
            // Menu is closed, open it
            menuMobile.classList.remove('hidden');
            menuMobile.classList.add('flex');
            hamburgerIcon.classList.add('hidden'); // Hide hamburger
            closeIcon.classList.remove('hidden');   // Show close icon
        } else {
            // Menu is open, close it
            menuMobile.classList.remove('flex');
            menuMobile.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden'); // Show hamburger
            closeIcon.classList.add('hidden');      // Hide close icon
        }
    });
}
