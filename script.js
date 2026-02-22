    const navbar = document.querySelectorAll('nav')[0];

    window.onscroll = function() {
        
        if (window.scrollY > 900) {
            navbar.classList.add('bg-white', 'shadow-md', 'border-b', 'border-slate-200');
            
        } else {
            navbar.classList.remove('bg-white', 'shadow-md', 'border-b', 'border-slate-200');
            
        }
    };