'use strict'
// 1行目に記載している 'use strict' は削除しないでください


const btn = document.getElementById("btn");
const  body = document.getElementsByTagName("body");


function clickbtn(){
    let cost =  Number( document.getElementById("cost").value);
    console.log(cost);
    let passenger = Number( document.getElementById("passenger").value);
    console.log(passenger);
    let type = document.forms.type;
    let bodytypeOutput =type.bodytype.value
    console.log(bodytypeOutput);
    let fuel = document.forms.fuel;
    console.log(fuel.eco.value);
    let capability = fuel.eco.value;
    let output =document.getElementById("output") ;
    output.innerText = `${cost}  万円の予算,    ${passenger}  人乗り   ${bodytypeOutput} の ${capability} タイプでお探しします♪`
    let point =document.getElementById("point");
    point.innerHTML = "<h3> POINT </h3>";

    let selectLink = document.getElementById("selectLink") ;
    selectLink.textContent = "選ばれたクルマはこちらをclick"
    
    if ( cost < 200 ){
        point.append( "  おすすめはありません。中古車市場は急騰していますね。↓↓↓")
        selectLink.href = "https://www.carsensor.net/"

    }else if ( cost <= 260 ){
        if ( passenger <= 2 && bodytypeOutput === "compact" && capability === "hypower" ){
            point.append( "  オープンもできる！↓↓↓");
            selectLink.href="https://www.daihatsu.co.jp/lineup/copen/02_grade.htm";
            
        }else if (  passenger > 2 && passenger <=5 && capability === "eco" && bodytypeOutput === "compact"){
            point.append( "  A  B  C  D  いい～♪   ↓↓↓");
            selectLink.href="https://toyota.jp/aqua/";
                
        }else if ( passenger > 2 && passenger <=5 && bodytypeOutput === "compact"){
            point.append( " 力強いクリーンディーゼル   ↓↓↓");
            selectLink.href="https://www.mazda.co.jp/cars/mazda2/?car_id=mazda2";


        }else  if (passenger <=5 && capability !== "normal" && bodytypeOutput !== "compact" ){
            point.append("  燃費27.8km/L  荷物めっちゃ載る！安定の価格でカスタマイズできる！")
                selectLink.href="https://toyota.jp/probox/option/trd1/"
        }else{
               point.append("迷いますね～。再設定お願いします。")
               }
        
    }else if ( cost <= 500 ){
        if ( passenger <=2 && capability === "hypower"  && bodytypeOutput !== "suv"){
            point.append("  マツダの人は、カープファン多い。赤が似合います　↓↓↓");
            selectLink.href = "https://www.mazda.co.jp/cars/roadster/"
            
        }else if ( passenger > 2 && passenger <=5  && bodytypeOutput === "suv"){
            point.append(" BOXERエンジン音が魅力的 ↓↓↓");
            selectLink.href="https://www.subaru.jp/xv/xv/";
            
        }else if ( passenger > 2 && passenger <=5 && capability === "eco" && bodytypeOutput !== "compact"){
            point.append(" 補助金・優遇策で最大130万円も優遇できるかも!!")
            selectLink.href= "https://ev2.nissan.co.jp/LEAF/"
            
        }else if ( capability === "hypower" && passenger <=4  &&  bodytypeOutput === "compact"){
            point.append(" フィアットではないです。")
            selectLink.href="https://www.abarth.jp/595/";
            
        }else if ( bodytypeOutput ==="sedan"){
            point.append("  セダン人気ないですが、普通がいい↓↓")
            selectLink.href="https://www.subaru.jp/impreza/g4/?=pclineup"
        }else{
         point.append("迷いますね～。再設定お願いします。")
        }
    
    }else if ( cost <= 1200 ){
        if (  passenger > 2 && passenger <=5 && capability === "eco" && bodytypeOutput === "suv") {
        point.append("  いよいよ電動自動車時代の到来　↓↓")
        selectLink.href= "https://www.audi.co.jp/jp/web/ja/models/tron/audi-e-tron.html?_gl=1*1m3nwpq*_ga*MTA0NTI2MzgyNC4xNjQ4OTkyODc5*_ga_DJDYGNBS7K*MTY0ODk5Nzg1OS4yLjEuMTY0ODk5Nzg2NS41NA..&_ga=2.149379701.271454485.1648992879-1045263824.1648992879";
        
        }else if ( passenger <= 8 && bodytypeOutput !==  "compact" && capability !== "eco" ) {
            point.append( "ラグジュアリー　↓↓↓");
            selectLink.href = "https://toyota.jp/alphard/"
        }else{
            point.append(" ワクドキ！フルラインナップ！！　↓↓↓");
            selectLink.href = "https://toyota.jp/"
        }
          
           
    }else if ( cost <= 10000 ){
         if ( passenger <= 2 && capability === "hypower" && bodytypeOutput !== "suv"){
            point.append("  動きがダイレクトに伝わり、クルマ乗ってますという感じです↓↓")
            selectLink.href=  "http://lotus-yokohama.com/evora_gt430.html";
    
        }else if ( bodytypeOutput === "suv" && capability === "hypower"){
            point.append("  走破性抜群！でも、悪路走行したくありません↓↓")
            selectLink.href= "https://lexus.jp/models/lx/";
            
        }else{
            point.append("  やっぱりここは外してはダメですね！！↓↓↓");
            selectLink.href="https://lexus.jp/";
        }  
    
    }

}
