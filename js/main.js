let list = document.querySelectorAll(".list li");
let boxes = document.querySelectorAll(".box");

list.forEach((ele) => {
    ele.addEventListener("click", (e) => {
       console.log('Run'); 
        // list.forEach((li) => {
        //     li.classlist.remove("active");
        // })
        // e.target.classlist.add("active");

        boxes.forEach((el) => {
            el.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.filter).forEach((li) => {
            li.style.display = "flex";
        });
    });
});