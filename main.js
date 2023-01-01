let add_btn = document.getElementById("add_btn");
let container = document.getElementById("container");

let lists = document.createElement("ul");

add_btn.onclick = function () {
  let typing_text = document.form.typing_text.value;
  if (!(typing_text == "")) {
    let list = document.createElement("li");

    let text = document.createElement("p");
    text.textContent = typing_text;
    let trash = document.createElement("i");
    trash.setAttribute("class", "fa-solid fa-trash");
    trash.setAttribute("id", "delete");

    list.appendChild(text);
    list.appendChild(trash);
    lists.appendChild(list);

    container.appendChild(lists);
    document.body.appendChild(container);
    trash.onclick = function () {
      list.remove();
    };
    document.form.typing_text.value = "";
  }
};
