'use strict'
// 1行目に記載している 'use strict' は削除しないでください


const btn = document.getElementById("btn");
const  body = document.getElementsByTagName("body");


function clickbtn(){
    const cost = document.getElementById("cost").value;
    console.log(cost);
    const passenger = document.getElementById("passenger").value;
    console.log(passenger);
    const type = document.forms.type;
    const bodytypeOutput =type.bodytype.value
    console.log(bodytypeOutput);
    const fuel = document.forms.fuel;
    console.log(fuel.eco.value);
    const capability = fuel.eco.value;
    const output =document.getElementById("output") ;
    output.append(cost + "万円の予算,    " +passenger + "人乗り  " )
    output.append(bodytypeOutput+ " の " +  capability + "タイプでお探しします♪") ;
    
    if ( cost < 100 ){
        output.append("おすすめはありません。中古車市場は急騰していますね")
        output.append("やっぱりこれだね！！")
        window.open("https://www.carsensor.net/")

    }else if ( cost <= 250 && capability !== "hypower"){
        if ( passenger <=2 && bodytypeOutput === "compact"){
            window.open("https://www.daihatsu.co.jp/lineup/copen/02_grade.htm")
            
        }else if ( passenger <=5 && capability === "eco"){
            window.open("https://toyota.jp/aqua/")
                
        }else if ( passenger <=5 && bodytypeOutput === "compact"){
            window.open("https://www.mazda.co.jp/cars/mazda2/?car_id=mazda2");
            }else{
                output.append("燃費27.8km/L  荷物めっちゃ載る！安定の価格でカスタマイズできる！")
                window.open("https://toyota.jp/probox/option/trd1/")
            }
        
    }else if ( cost <= 350 ){
        if ( passenger <=2 && capability === "hypower"){
            window.open( "https://www.mazda.co.jp/cars/roadster/")
            
        }else if ( passenger <=5  && bodytypeOutput === "suv"){
            window.open("https://www.subaru.jp/xv/xv/");
            
        }else if ( capability === "eco" ){
            output.append("補助金・優遇策で最大130万円も優遇できるかも!!")
            window.open("https://ev2.nissan.co.jp/LEAF/")
            
        }else if ( passenger <= 4 &&  bodytypeOutput === "compact"){
            window.open("https://www.abarth.jp/595/")
            
        }else if ( bodytypeOutput ==="sedan"){
            window.open("https://www.subaru.jp/impreza/g4/?=pclineup")
        }else{
        output.append("迷いますね～。再設定お願いします。")
        }
        
        
          
        
    }else if ( cost >=400 ){
        if ( passenger <= 2 && capability === "hypower" && bodytypeOutput !== "suv"){
            window.open ( "http://lotus-yokohama.com/evora_gt430.html");
    
        }else if ( bodytype === "suv" && capability === "hypower"){
            window.open("https://lexus.jp/models/lx/")
            
        }else if ( capability === "eco"  ) {
            window.open("https://www.audi.co.jp/jp/web/ja/models/tron/audi-e-tron.html?_gl=1*1m3nwpq*_ga*MTA0NTI2MzgyNC4xNjQ4OTkyODc5*_ga_DJDYGNBS7K*MTY0ODk5Nzg1OS4yLjEuMTY0ODk5Nzg2NS41NA..&_ga=2.149379701.271454485.1648992879-1045263824.1648992879")
            
        }else{
            output.append("やっぱりここは外してはダメですね！！")
            window.open("https://lexus.jp/")
        }
        
        
           
        
    
    }

    
    
    
      
       
       
    





}


