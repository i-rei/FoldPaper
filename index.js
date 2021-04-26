paperCount() => {
  const PAPER_MM = 0.09;
  const PAPER_CM = 0.009;
  const PAPER_M = 0.0009;
  const PAPER_KM = 0.0000009;

  let CmRresult;
  let MResult;
  let KmResult;

  const element = document.getElementById("paper").value;
  const pow = Math.pow(2, element);

  //エラー処理と、０（おらない）処理
  if (element.charAt(0) === "0") {
    swal({
      title: "計算結果",
      text: `紙を${element}回折った結果\n${PAPER_M}m\n${PAPER_CM}cm`,
      icon: "success",
    });
    return 0;
  }
  if (!element.match(/^[0-9]+$/)) {
    swal({
      title: "エラー",
      text: "エラーが発生したよ。１以上の、整数をおしえてね！",
      icon: "error",
    });
    return false;
  }
  MResult = PAPER_M * pow;
  CmRresult = PAPER_CM * pow;
  KmResult = PAPER_KM * pow;

  swal({
    title: "計算結果",
    text: `紙を${element}回折ると...\n\n${MResult}m\n${CmRresult}cm\n${KmResult}km`,
    icon: "success",
  });
}
