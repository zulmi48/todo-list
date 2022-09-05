document.querySelector("#btn-list").onclick = function () {
	if (document.querySelector("#input-list").value.length == 0) {
		alert("Plese enter your list...");
	} else {
		document.querySelector("#todo-list").innerHTML += `
         <ul class="list-group">
           <li class="list-group-item">
             - ${document.querySelector("#input-list").value}
             <button class="delete btn btn-sm btn-outline-danger mx-2">
               <i class="bi bi-trash"></i>
             </button>
           </li>
         </ul>
         `;
		var currentTask = document.querySelectorAll(".delete");
		for (var i = 0; i < currentTask.length; i++) {
			currentTask[i].onclick = function () {
				this.parentNode.remove();
			};
		}
	}
	document.querySelector("#input-list").value = "";
};
