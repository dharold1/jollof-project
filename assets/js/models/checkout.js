document.querySelector('.checkout').addEventListener("click", (e)=>{
    e.preventDefault()
    document.getElementById('information').classList.remove('hidden');
    document.getElementById('carcard').classList.add('hidden');
})
document.querySelector('.backtocart').addEventListener("click", (e)=>{
    e.preventDefault()
    document.getElementById('information').classList.add('hidden');
    document.getElementById('carcard').classList.remove('hidden');
})