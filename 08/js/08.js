const show = (cd) => {
    let url2 = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json";
    let apikey2 = "f5eef3421c602c6cb7ea224104795888";
    url2 = url2 + `?key=${apikey2}&movieCd=${cd}`;

    const divDetail = document.querySelector(".detail");

    fetch(url2)
        .then(resp => resp.json())
        .then(data => {
            let movieInfo = data.movieInfoResult.movieInfo;
            let detailTag = "";
            detailTag = detailTag + `<span class="title">코드</span>
                                    <span class="con">${movieInfo.movieCd}</span>
                                    <span class="title">영화명</span>
                                    <span class="con">${movieInfo.movieNm}</span>
                                    <span class="title">제작상태</span>
                                    <span class="con">${movieInfo.prdtStatNm}</span>
                                    <span class="title">배우</span>`;
            for (let item2 of movieInfo.actors) {
                detailTag = detailTag + `<span class="con">${item2.peopleNm}</span>`;
            }
            divDetail.innerHTML = detailTag;
        })
        .catch(err => console.log(err));
}

const getData = (dt1, divCon, sel1) => {

    let dt = dt1.value.replaceAll("-", "");
    let apikey = "f5eef3421c602c6cb7ea224104795888";
    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";

    url = url + `?key=${apikey}`;
    url = url + `&targetDt=${dt}`;

    if (sel1.value !== 'T') {
        url = url + `&multiMovieYn=${sel1.value}`;
    }

    fetch(url)
        .then(resp => resp.json())
        .then(data => {

            let dbol = data.boxOfficeResult.dailyBoxOfficeList;
            let conTag = `<table role="grid">
                        <thead>
                            <tr>
                                <th scope="col">순위</th>
                                <th scope="col">영화명</th>
                                <th scope="col">개봉일</th>
                                <th scope="col">매출액</th>
                                <th scope="col">누적매출액</th>
                                <th scope="col">관객수</th>
                                <th scope="col">누적관객수</th>
                            </tr>
                        </thead>`;

            for (let item of dbol) {
                conTag = conTag + `<tbody>
                                        <tr>
                                            <td>${item.rank}[`;
                if (parseInt(item.rankInten) === 0) { conTag = conTag + `<span class="inten0">-`; }
                else if (parseInt(item.rankInten) > 0) { conTag = conTag + `<span class="inten1">▲${item.rankInten}`; }
                else { conTag = conTag + `<span class="inten2">▼${item.rankInten}`; }
                conTag = conTag + `</span>]</td>
                                            <td><a href="#" onclick="show(${item.movieCd});">${item.movieNm}</a></td>
                                            <td>${item.openDt}</td>
                                            <td><span class="numtd">${parseInt(item.salesAmt).toLocaleString("ko-KR")}</span></td>
                                            <td><span class="numtd">${parseInt(item.salesAcc).toLocaleString("ko-KR")}</span></td>
                                            <td><span class="numtd">${parseInt(item.audiCnt).toLocaleString("ko-KR")}</span></td>
                                            <td><span class="numtd">${parseInt(item.audiAcc).toLocaleString("ko-KR")}</span></td>
                                        </tr>
                                    </tbody>`;
            }
            conTag = conTag + `</table>`;
            divCon.innerHTML = conTag;
        })
        .catch(err => console.log(err));
}

document.addEventListener("DOMContentLoaded", () => {

    const dt1 = document.querySelector("#dt1");
    const divCon = document.querySelector("#divCon");
    const sel1 = document.querySelector("#sel1");

    dt1.addEventListener("change", () => {
        getData(dt1, divCon, sel1);
    });

    sel1.addEventListener("change", () => {
        if (dt1.value) {
            getData(dt1, divCon, sel1);
        }
    });
});
