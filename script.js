const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
  label.innerHTML = label.innerText
  .split('') // --> lo divide en un array
  .map((letter, idx) => `<span style="transition-delay:${idx*40}ms">${letter}</span>`) // -> lo mapea letra por letra y crea un nuevo array
  .join('') // --> los une y transforma en un string de nuevo
})