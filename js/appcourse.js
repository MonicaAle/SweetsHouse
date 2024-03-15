let question = prompt(
  "教室をおすすめしたいんですが、いかがでしょうか。\n はい：１ \nいいえ：２"
);
if (question == 1) {
  let quantity = prompt("一人で参加しますか。\n はい：１ \nいいえ：２");
  if (quantity == 1) {
    let experience = prompt(
      "洋菓子を作ることがありますか。\n はい：１ \nいいえ：２"
    );
    if (experience == 1) {
      let course = document.getElementById("seasonal");
      course.innerText = "季節限定スイーツの教室(オススメ)";
      course.style.backgroundColor = "#b77782";
      course.style.color = "white";
      course.scrollIntoView(course.seasonal)
      alert("ぴったりの教室を見つけました！");
    } else if (experience == 2) {
      let course = document.getElementById("normal");
      course.innerText = "普通教室(オススメ)";
      course.style.backgroundColor = "#b77782";
      course.style.color = "white";
      course.scrollIntoView(course.normal)
      alert("ぴったりの教室を見つけました！");
    } else {
      alert("申し訳ございません。問題があって、オススメはできません");
    }
  } else if (quantity == 2) {
    let course = document.getElementById("family");
    course.innerText = "ファミリー教室(オススメ)";
    course.style.backgroundColor = "#b77782";
    course.style.color = "white";
    course.scrollIntoView(course.family)
    alert("ぴったりの教室を見つけました！");
  } else {
    alert("申し訳ございません。問題があって、オススメはできません");
  }
} else if (question == 2) {
  alert("かしこまりました。教室情報をゆっくりご覧ください。");
} else {
  alert("申し訳ございません、問題がありました。");
}
