// const closeModal = function() {
//    const overlay = document.querySelector('.overlay');
//     overlay.classList.add('hidden');
// }
// document.querySelector('.overlay').addEventListener('click', closeModal);

class Students{
    constructor(name, age, section){
        this.name = name;
        this.age = age;
        this.section = section;
    }
    note(){
        return `primary ${this.section} students are all ${age} years`
    }

}