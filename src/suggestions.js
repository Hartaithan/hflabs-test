import "regenerator-runtime/runtime";

const template = document.createElement("template");
template.innerHTML = `
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: #ffffff;
      }
      .wrapper {
        width: 100%;
        position: relative;
      }
      .suggestions {
        width: 100%;
        position: absolute;
        top: 45px;
        left: 0;
        background: #3b3b3b;
        border-radius: 8px;
        overflow: hidden;
        z-index: 10;
      }
      .suggestion-item {
        height: fit-content;
        background: #3b3b3b;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 10px;
        p:first-child {
          margin-bottom: 5px;
        }
      }
      .suggestion-item > p:first-child {
        margin-bottom: 5px;
      }
      .suggestion-item:hover {
        background: #585858;
        cursor: pointer;
      }
      input {
        width: 100%;
        height: 40px;
        background: transparent;
        border: 2px solid #2d2d2d;
        border-radius: 8px;
        font-size: 16px;
        padding: 5px 10px;
        outline: none;
      }
    </style>
    <div class="wrapper">
        <input type="text" placeholder="Введите название, ИНН, ОГРН или адрес организации">
        <div class="suggestions"></div>
    </div>
`;

class InputSuggestions extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.results = [];
    this.list;
    this.input;
    this.resultsLength = this.getAttribute("length") || 5;
  }

  fillForm(id) {
    const form = document.querySelector("form");
    const { data } = this.results[Number(id)];
    form.elements.name_short.value = data.name.short_with_opf;
    form.elements.name_full.value = data.name.full_with_opf;
    form.elements.inn_kpp.value = `${data.inn} / ${data.kpp}`;
    form.elements.address.value = data.address.unrestricted_value;
  }

  async fetchSuggestions(e) {
    const url =
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
    const token = "7c558dcad2e616f814b24147370300cde9d8c7cb";

    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({ query: e.target.value }),
    };

    const data = await fetch(url, options);
    const json = await data.json();
    if (json.suggestions.length > 5) {
      this.results = [...json.suggestions].slice(0, this.resultsLength);
    } else {
      this.results = json.suggestions;
    }

    if (this.results.length > 0 && this.input.value.length > 0) {
      this.list.style.display = "block";
      this.list.innerHTML = "";
      this.results.forEach((result, index) => {
        const el = document.createElement("div");
        el.classList.add("suggestion-item");
        el.setAttribute("data-id", index);
        el.innerHTML += `
            <p>${result.value}</p>
            <p>${result.data.address.value}</p>
        `;
        this.list.appendChild(el);
      });
    }
    if (this.results.length === 0) {
      const el = document.createElement("p");
      el.innerText = "Ничего не найдено";
      el.style.padding = "10px";
      this.list.appendChild(el);
    }
    if (this.input.value.length === 0) {
      this.list.style.display = "none";
    }
  }

  connectedCallback() {
    this.input = this.shadowRoot.querySelector("input");
    this.list = this.shadowRoot.querySelector(".suggestions");
    this.list.addEventListener("click", (e) => {
      if (e.target.nodeName === "DIV") {
        this.fillForm(e.target.dataset.id);
      } else {
        this.fillForm(e.target.parentElement.dataset.id);
      }
      this.list.style.display = "none";
    });
    this.input.addEventListener("input", (e) => this.fetchSuggestions(e));
    this.input.addEventListener("focusin", () => {
      this.list.style.display = "block";
    });
    this.input.addEventListener("focusout", () => {
      setTimeout(() => {
        this.list.style.display = "none";
      }, 100);
    });
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("input").removeEventListener();
  }
}

window.customElements.define("input-suggestions", InputSuggestions);
