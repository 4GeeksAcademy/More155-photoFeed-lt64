const images = [
  "https://picsum.photos/id/237/600/600",
  "https://picsum.photos/id/238/600/600",
  "https://picsum.photos/id/239/600/600",
  "https://picsum.photos/id/240/600/600",
  "https://picsum.photos/id/241/600/600",
  "https://picsum.photos/id/242/600/600"
];

const loremTitle = "Lorem ipsum dolor sit amet";
const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function renderGrid() {
  document.getElementById("content").innerHTML = `
    <div class="row row-cols-3 g-2 g-md-3 justify-content-center">
      ${images.map(url => `
        <div class="col">
          <div class="ratio ratio-1x1 shadow-sm overflow-hidden">
            <img src="${url}" class="img-fluid" style="object-fit:cover;">
          </div>
        </div>
      `).join("")}
    </div>`;

  
  document.getElementById("gridBtn").style.color = "#0d6efd";
  document.getElementById("feedBtn").style.color = "";
}

function renderFeed() {
  document.getElementById("content").innerHTML = images.map((url, i) => `
    <div class="card mx-auto mb-5 shadow-sm" style="max-width:520px; overflow:hidden;">
      <div class="p-3 bg-white border-bottom d-flex justify-content-between align-items-center">
        <h5 class="mb-0 fw-semibold">${loremTitle}</h5>
        <small class="text-muted">${String(i+1).padStart(2,'0')}/06</small>
      </div>
      <div class="ratio ratio-1x1">
        <img src="${url}" style="object-fit:cover;">
      </div>
      <div class="p-4 pt-3">
        <p class="mb-2 fw-bold">${Math.floor(Math.random() * 1800 + 200)} likes</p>
        <p class="mb-0">${loremText}</p>
      </div>
    </div>
  `).join("");

  document.getElementById("feedBtn").style.color = "#0d6efd";
  document.getElementById("gridBtn").style.color = "";
}

document.getElementById("gridBtn").onclick = renderGrid;
document.getElementById("feedBtn").onclick = renderFeed;


renderGrid(); 