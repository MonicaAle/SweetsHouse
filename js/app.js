let name = prompt("名前を入力してください");

greet(name);

function greet(name) {
  if (isNaN(name)) {
    let message =
      "いらっしゃいませ！" +
      name +
      "さん\nご来店のホームページをご覧くださってありがとうございます";
    alert(message);
    return;
  } else {
    let message = "名前の入力をうまく確認できませんでした。";
    alert(message);
  }
}
