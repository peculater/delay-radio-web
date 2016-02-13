/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function slid(selectedValue){
    if (dtime) dtime.delayTime.value = selectedValue;
    document.getElementById("slidTime").textContent = selectedValue;
}