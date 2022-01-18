const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay');
const ctx = document.getElementById('myChart');


openModalButtons.forEach(button => {
    button.addEventListener('click',() =>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click',() =>{
    const modals = document.querySelectorAll('.modal.active,.modal-2.active,.modal-3.active')
    modals.forEach(modal => 
        closeModal(modal))
})

closeModalButtons.forEach(button => {
    button.addEventListener('click',() =>{
        const modal = button.closest('.modal,.modal-2,.modal-3')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {    
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

var data = {
    labels: ["Game Development", "Web Development", "Programming", "Mobile Development", "3D Assets and Rigging", "Learning New skills", "Design"],
    datasets: [{
      label: "My Percieved Interest",
      backgroundColor: "rgba(200, 247, 197,0.3)",
      borderColor: "rgba(22, 160, 133, 0.3)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [80, 75, 90, 70, 80, 90, 70],
    }, {
        label: 'My Skill Set',
        data: [62, 50, 69, 60, 56, 70, 60],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235,0.6)',
        pointBackgroundColor: 'rgb(54, 162, 235,0.3)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }, {
        label: '',
        data: [0, 0, 0, 0, 0, 100, 0],
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0)',
        borderColor: 'rgb(54, 162, 235,0)',
        pointBackgroundColor: 'rgb(54, 162, 235,0)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235,0)'
      }]
  };
  
  var options = {
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: 'Skills Chart'
        },
        subtitle: {
            display: true,
            text: 'The chart may look distorted but'
        }
    }
  };
  
  new Chart('myChart', {
    type: 'radar',
    options: options,
    data: data
  });
  

