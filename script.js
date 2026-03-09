const filters = {

    temperature: {
        value: 0
    },
    tint: {
        value: 0
    },
    brightness: {
        value: 0
    },
    contrast: {
        value: 0
    },
    highlights: {
        value: 0
    },
    shadows: {
        value: 0
    },
    whites: {
        value: 0
    },
    blacks: {
        value: 0
    }
}
const sliders = {
    temperature: select(".temperature input"),
    tint: select(".tint input"),
    contrast: select(".contrast input"),
    brightness: select(".brightness input"),
    shadows: select(".shadows input"),
    highlights: select(".highlights input"),
    whites: select(".whites input"),
    blacks: select(".blacks input")
}
const Presets = {
    vintage: {
        name: "Vintage",
        temperature: 18,
        tint: 6,
        brightness: 6,
        contrast: -10,
        highlights: -20,
        shadows: 18,
        whites: -10,
        blacks: 12,
    },
    oldSchool: {
        name: "Old School",
        temperature: 12,
        tint: -5,
        brightness: 4,
        contrast: 15,
        highlights: -10,
        shadows: 10,
        whites: 5,
        blacks: 5,
    },
    darkMoody: {
        name: "Dark Moody",
        temperature: -5,
        tint: -2,
        brightness: -12,
        contrast: 20,
        highlights: -12,
        shadows: -8,
        whites: -10,
        blacks: -15,
    },
    warm: {
        name: "Warm Sunset",
        temperature: 25,
        tint: 8,
        brightness: 8,
        contrast: 10,
        highlights: 6,
        shadows: 5,
        whites: 10,
        blacks: -4,
    },
    brightNClean: {
        name: "Bright N Clean",
        temperature: 5,
        tint: 2,
        brightness: 20,
        contrast: 8,
        highlights: 5,
        shadows: 10,
        whites: 12,
        blacks: -5,
    }
}
const canvas = select("canvas");
const canvasCTX = canvas.getContext("2d");
const imgInp = select(".add-photo-btn input");
const allAdjustments = document.querySelectorAll(".adjust");
const moreOption = select(".more-options");
const options = select(".options");
let originalImageData;

// user can select and open an image.
const img = new Image();
imgInp.addEventListener("change", function () {
    img.src = URL.createObjectURL(imgInp.files[0]);
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        canvasCTX.drawImage(img, 0, 0);
        originalImageData = canvasCTX.getImageData(0, 0, canvas.width, canvas.height);
    }
})

// utilities function
function select(elem) {
    return document.querySelector(elem);
}
function clamp(value) {
    return Math.max(0, Math.min(255, value));
}

// handle sliders when user move them;
function handleSliders() {
    for (const slider in sliders) {
        let adjustment = sliders[slider];
        adjustment.addEventListener("input", function (dets) {
            filters[slider].value = Number(dets.target.value);
            applyFilters();
        })
    }
}

// when user move silder then that adjustment will apply on image.
function applyFilters() {
    const temperature = filters.temperature.value;
    const tint = filters.tint.value;
    const bright = filters.brightness.value;
    const contrast = filters.contrast.value;
    const highlights = filters.highlights.value;
    const shadows = filters.shadows.value;
    const whites = filters.whites.value;
    const blacks = filters.blacks.value;
    let factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

    let imgData = new ImageData(
        new Uint8ClampedArray(originalImageData.data),
        originalImageData.width,
        originalImageData.height
    );

    let data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {

        let r = data[i];
        let g = data[i + 1];
        let b = data[i + 2];

        // brightness
        r += bright;
        g += bright;
        b += bright;

        // contrast
        r = factor * (r - 128) + 128;
        g = factor * (g - 128) + 128;
        b = factor * (b - 128) + 128;

        let brightness = 0.299 * r + 0.587 * g + 0.114 * b;

        // highlights
        if (brightness > 180) {
            r += highlights;
            g += highlights;
            b += highlights;
        }

        // shadows
        if (brightness < 80) {
            r += shadows;
            g += shadows;
            b += shadows;
        }

        // whites
        if (brightness > 220) {
            r += whites;
            g += whites;
            b += whites;
        }

        // blacks
        if (brightness < 40) {
            r -= blacks;
            g -= blacks;
            b -= blacks;
        }

        // temperature
        r += temperature;
        g += temperature * 0.3;
        b -= temperature;

        // tint
        r += tint;
        g -= tint;
        b += tint;

        data[i] = clamp(r);
        data[i + 1] = clamp(g);
        data[i + 2] = clamp(b);
    }
    canvasCTX.putImageData(imgData, 0, 0);
}

// user can reset any adjustment to 0 if they don't want it.
function resetFilters(isclicked = false) {
    allAdjustments.forEach(function (adjustment) {
        adjustment.querySelector("span")
            .addEventListener("click", function () {
                sliders[adjustment.classList[0]].value = 0;
                filters[adjustment.classList[0]].value = 0;
                applyFilters();
            })
        if (isclicked) {
            adjustment.querySelector("span").click();
        }
    })
}

// give some predefined combination of adjustment.
function presets() {
    const allPresets = document.querySelector(".all-presets");
    for (const [key, value] of Object.entries(Presets)) {
        const div = document.createElement("div");
        const span = document.createElement("span");
        div.classList.add(`${key}`, "preset");
        span.innerText = value.name;
        div.appendChild(span);
        allPresets.appendChild(div);
    }

    allPresets.addEventListener("click", function (dets) {
        document.querySelectorAll(".preset").forEach(function (p) {
            p.classList.remove("active");
        })

        let presetElem = dets.target.closest(".preset");
        if (!presetElem) return;

        presetElem.classList.add("active");
        let preset = Presets[presetElem.classList[0]];
        for (const key in preset) {
            if (key !== "name") {
                filters[key].value = preset[key];
                sliders[key].value = preset[key];
            }
        }
        applyFilters();
    })
}

// user can reset all and download
moreOption.addEventListener("click", function (dets) {
    dets.stopPropagation();
    options.classList.toggle("hidden");
})
options.addEventListener("click", function (dets) {
    let navBtn = dets.target.classList[0];
    if (navBtn === "download-btn") {
        let link = document.createElement("a");
        link.download = "edited-photo.png";
        link.href = canvas.toDataURL("picture/png");

        link.click();

    } else {
        resetFilters(true);
        document.querySelectorAll(".preset").forEach(function (p) {
            p.classList.remove("active");
        })
    }
})
document.addEventListener("click", function () {
    options.classList.add("hidden");
})

presets();
handleSliders()
resetFilters();