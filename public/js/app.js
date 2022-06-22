console.log('connected')
const title =  document.querySelector('.title')

setInterval(()=> {
    if(title.innerHTML === 'System Administrator'){
        title.innerHTML = 'Software Developer'
    } else if(title.innerHTML === 'Software Developer'){
        title.innerHTML = 'MERN Stack Engineer'
    }else {
        title.innerHTML = 'Database Developer'
    }
},5000)