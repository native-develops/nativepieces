const imgContainer = document.getElementById("imgContainer")
const row = document.createElement('div')
row.setAttribute("class", "")

for (let i = 1; i <= 69; i++) {

    row.innerHTML += `
  
       
							<div class="col-md-6 col-lg-4 d-flex">
								
									<img src="./images/gallery/work_image (${i}).jpg" alt="Image" class="img-fluid">
									
								
							</div>
				
             

    `
 
    imgContainer.append(row)
}

