const images = [
  "https://picsum.photos/id/237/600/600",
  "https://picsum.photos/id/238/600/600",
  "https://picsum.photos/id/239/600/600",
  "https://picsum.photos/id/240/600/600",
  "https://picsum.photos/id/241/600/600",
  "https://picsum.photos/id/242/600/600"
];

function renderGrid() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <div class="row g-2">
      ${images
        .map(
          (url, i) => `
        <div class="col-4">
          <img src="${url}" class="feed-img" alt="img-${i}">
        </div>
      `
        )
        .join("")}
    </div>`;
}

function renderFeed() {
  const content = document.getElementById("content");
  content.innerHTML = images
    .map(
      (url, i) => `
    <div class="post">
      <div class="post-header">
      Post #${i + 1}
    <span style="float:right; color:#555; font-size:0.9rem;">${i + 1}/${images.length}</span>
    </div>
      <img src="${url}" class="post-img"/>
      <div class="post-body">
        <div class="likes">${Math.floor(Math.random() * 2000)} Likes</div>
        <div class="caption">Lorem ipsum dolor sit amet.</div>
      </div>
    </div>`
    )
    .join("");
}

document.getElementById("gridBtn").addEventListener("click", renderGrid);
document.getElementById("feedBtn").addEventListener("click", renderFeed);

renderGrid();
