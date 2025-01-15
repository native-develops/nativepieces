const imgContainer = document.getElementById("imgContainer")
const row = document.createElement('div')
row.setAttribute("class", "row gy-3")

for (let i = 1; i <= 69; i++) {

    const col = document.createElement('div')
    col.setAttribute("class", "col-md-6 col-lg-4 d-flex align-items-start")
    col.innerHTML += `

  
        <img src="./images/gallery/work_image (${i}).jpg" alt="Image" class="img-fluid img_contain" loading="lazy">


    `
    
   row.append(col)
    imgContainer.append(row)
}



