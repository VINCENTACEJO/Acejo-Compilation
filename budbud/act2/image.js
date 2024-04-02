let imgfun = (image) => {
    let div = document.createElement("div");
    div.className = "secimg1";
    div.innerHTML = `
        <img src="${image}" alt="Image">
    `;
    return div;
};

export { imgfun };
