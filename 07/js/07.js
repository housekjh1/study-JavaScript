let arr = [0,0,0,0,0,0,0,0,1];
let flag = true;
let cnt = 0;

const init = (boxs) => {
    flag = true;
    cnt = 0;
    boxs.forEach(item => {
        let n = item.getAttribute("id").slice(-1);
        item.textContent = n;
    });
};

document.addEventListener("DOMContentLoaded", () => {

    const boxs = document.querySelectorAll(".row > div");
    const bt = document.querySelector(".bt");
    const h2 = document.querySelector("h2");

    init(boxs);

    bt.addEventListener("click", () => {
        if (flag) {
            arr.sort(() => Math.random() - 0.5);
            console.log(arr);

            init(boxs);

            h2.textContent = "폭탄을 피해 선택 해주세요.";
            h2.style.color = "black";
            flag = false;
        }
    });

    boxs.forEach(item => {
        item.addEventListener("click", () => {
            if (flag) {
                h2.textContent = "폭탄을 섞어주세요.";
                h2.style.color = "blue";
                return;
            }
            let idx = parseInt(item.textContent);
            if (isNaN(idx)) return;
            if (arr[idx-1] === 0) {
                item.innerHTML = `<img src="./img/heart.png">`;
                cnt++;
                if (cnt === 8) {
                    h2.textContent = "성공!!";
                    h2.style.color = "green";

                    idx = arr.indexOf(1);
                    document.querySelector("#box"+(idx+1)).innerHTML = `<img src="./img/heart.png">`;
                    flag = true;
                }
            } else {
                item.innerHTML = `<img src="./img/boom.png">`;
                h2.textContent = "실패!! 폭탄을 섞어주세요.";
                h2.style.color = "red";
                flag = true;
            }
        });
    });
});