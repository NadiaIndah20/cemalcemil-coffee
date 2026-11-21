// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-item, .gallery-item, .reservation-form, .section h2').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// WhatsApp Reservation Logic (Unicode Escape Version - Anti Encoding Issue)
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    
    // Emoji ditulis dalam bentuk Unicode escape (hanya ASCII, aman dari encoding issue)
    const leaf = '\u{1F33F}';      // 🌿
    const calendar = '\u{1F4C5}';  // 📅
    const clock = '\u{23F0}';      // ⏰
    const people = '\u{1F465}';    // 👥
    
    const msg = `Halo CemalCemil Coffee Lombok! ${leaf}\nSaya ${name} ingin reservasi:\n${calendar} Tanggal: ${date}\n${clock} Jam: ${time}\n${people} Jumlah: ${guests}`;
    
    const encodedMsg = encodeURIComponent(msg);
    
    window.open(`https://wa.me/6281234567890?text=${encodedMsg}`, '_blank');
});