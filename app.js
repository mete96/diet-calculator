let resim = document.getElementById("resim");
let txt = document.getElementById("txt");
let submit = document.getElementById("submit");
let btn = document.querySelector(".btn");
let article = document.querySelector(".article");
let val3 = document.getElementById("txt").value;


submit.addEventListener("click", yo);


function yo() {

    submit.remove();
    txt.remove();
article.innerHTML = ("Kilonuz " + "<span class=color2>" + (txt.value) + " </span> kilogram ağırlığında. Size uygun diyeti bulmadan önce şimdi de <span class=color1>boyunuzu</span> öğrenelim");

let s = document.createElement("input");
s.setAttribute("type", "submit");
s.setAttribute("name", "Submit");
s.setAttribute("value", "🌱 Gönder");
s.setAttribute("id", "submit");
article.appendChild(s); 

let t = document.createElement("input");
t.setAttribute("type", "text");
t.setAttribute("placeholder", "🖌️ Boyunuz (1.78 gibi)");
t.setAttribute("id", "txt1");
article.appendChild(t); 

s.addEventListener("click", yo1);

function yo1 () {
    s.remove();
    t.remove();

    article.innerHTML = ("Kilonuz " + "<span class=color2>" + (txt.value) + " </span>Boyunuz " + "<span class=color1>" + (t.value) + "</span> Bilgileriniz doğruysa sizin için eşleşen diyetler şunlardır");


btn.style.display = "block";

    btn.addEventListener("click", cek);

    function cek() {
        
       resim.src = "https://lh3.googleusercontent.com/proxy/-JAuv3pPSXwZEC_CSLp0i2FxGYhtt1ph51nhL5YNk0IDAPU13VCVLscSGTRVXRYAFhU-H8Z9O8nqPD5tzCCNvI5kXuxZIWEclg7mtToEE4Y-IDIrh-v8Mx24TZWnWuaEhQ"
       article.innerHTML = "Düşük <span class=color1>karbonhidratlı</span>, yüksek yağlı bir diyet olarak bilinir."
       btn.value = "🔥 DEVAM"
       btn.style.color = "black";
    }

    e.preventDefault();
}}