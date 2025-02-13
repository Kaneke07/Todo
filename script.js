let moveDoneToEnd = false;
function addTodo() {
            let input = document.getElementById("todo-input");
            let text = input.value.trim();
            if (text === "") return;
            
            let li = document.createElement("li");
            li.innerHTML = `<span>${text}</span><input style="position: relative; left: 45px;" type="checkbox" onclick="toggleComplete(this)"><button onclick="removeItem(this)"><img style="width: 20px;" src="image-removebg-preview-7.png" alt=""></button>`;
            document.getElementById("todo-list").appendChild(li);
            input.value = "";
        }
        function toggleComplete(button) {
            let li = button.parentElement;
            li.classList.toggle("completed");
        }

        function removeItem(button) {
            let li = button.parentElement;
            li.remove();
        }
