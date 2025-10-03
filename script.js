const judul = document.getElementById('header-utama');
judul.innerHTML = "<h1>Seleksi ID Berhasil</h1>";

const list = document.getElementsByClassName('produk-item');
Array.from(list).forEach(SemuaList => {
    if (SemuaList.getAttribute('data-status') !== 'pending') {
        SemuaList.innerText = '[UPDATED] ' + SemuaList.innerText;
        SemuaList.classList.add('tebal');
    }
});

const list2 = document.querySelector('div[data-status="pending"]');
list2.style.backgroundColor = 'yellow';
list2.style.marginTop = '1rem';

const ul = document.querySelectorAll('ul li');
ul.forEach(li => {
    li.innerHTML = '<span>Konten Baru dari JS</span>';
});