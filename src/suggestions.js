class InputSuggestions extends HTMLElement {
  render() {
    this.innerHTML = "Оло";
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("input-suggestions", InputSuggestions);
