// Menunggu seluruh halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

    // 1. Fungsi Smooth Scroll untuk Menu Navigasi
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Bergeser halus ke bagian yang dituju
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Offset agar judul tidak tertutup navbar
                behavior: 'smooth'
            });
        });
    }

    // 2. Fungsi Form Kontak Sederhana
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Mencegah halaman refresh
            
            // Mengambil input nama
            const nama = contactForm.querySelector('input[type="text"]').value;
            
            // Menampilkan notifikasi sederhana
            alert("Terima kasih " + nama + ", pesan Anda sudah berhasil dikirim!");
            
            // Mengosongkan form kembali
            contactForm.reset();
        });
    }

});