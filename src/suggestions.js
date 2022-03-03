import "regenerator-runtime/runtime";

const template = document.createElement("template");
template.innerHTML = `
    <style>
        .wrapper {
            position: relative;
        }
        .suggestions {
            position: absolute;
            top: 20px;
            left: 0;
        }
    </style>
    <div class="wrapper">
        <input type="text">
        <div class="suggestions"></div>
    </div>
`;

class InputSuggestions extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  async getResults(query) {
    var url =
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
    var token = "7c558dcad2e616f814b24147370300cde9d8c7cb";

    var options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify({ query: query }),
    };

    const data = await fetch(url, options);
    const json = await data.json();
    return json.suggestions;
  }

  async fetchSuggestions(e) {
    var url =
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
    var token = "7c558dcad2e616f814b24147370300cde9d8c7cb";

    var options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify({ query: e.target.value }),
    };

    const data = await fetch(url, options);
    const json = await data.json();
    const results = json.suggestions;

    if (results.length > 0) {
      const list = this.shadowRoot.querySelector(".suggestions");
      results.forEach((result) => {
        const el = document.createElement("div");
        el.classList.add("suggestion-item");
        el.innerHTML += `
            <p>${result.value}</p>
        `;
        list.appendChild(el);
      });
    }
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("input")
      .addEventListener("input", (e) => this.fetchSuggestions(e));
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("input").removeEventListener();
  }
}

window.customElements.define("input-suggestions", InputSuggestions);
