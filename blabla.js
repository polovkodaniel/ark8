function functionne(Show) {
    const blokBaza = document.getElementById('a')
    const baza = document.getElementById('l')
    const blokOpisy = document.getElementById('b')
    const opisy = document.getElementById('s')
    const blokGaleria = document.getElementById('c')
    const galeria = document.getElementById('p')
    if (Show == 'baza') {
        blokBaza.style.backgroundColor = 'mistyrose'
        baza.style.display = 'block'
        blokOpisy.style.backgroundColor = '#ffaea5'
        opisy.style.display = 'none'
        blokGaleria.style.backgroundColor = '#ffaea5'
        galeria.style.display = 'none'
    }
    if (Show == 'opisy') {
        blokBaza.style.backgroundColor = '#ffaea5'
        baza.style.display = 'none'
        blokOpisy.style.backgroundColor = 'mistyrose'
        opisy.style.display = 'block'
        blokGaleria.style.backgroundColor = '#ffaea5'
        galeria.style.display = 'none'
    }
    if (Show == 'galeria') {
        blokBaza.style.backgroundColor = '#ffaea5'
        baza.style.display = 'none'
        blokOpisy.style.backgroundColor = '#ffaea5'
        opisy.style.display = 'none'
        blokGaleria.style.backgroundColor = 'mistyrose'
        galeria.style.display = 'block'
    }
}