/**========================================================================
 * ?                                ABOUT
 * @author         :  Edgardo Ferreyra
 * @email          :  ed20052006@hotmail.com
 * @repo           :  
 * @createdOn      :  2022-05-16 
 * @description    :  
 *========================================================================**/
varOpcionBtn = document.querySelector("#OpcionBtn1");
BtnPasar = document.querySelector(".BtnPasar");
BtnPasar.setAttribute("hidden", "hidden");



varOpcionBtn.addEventListener("click", () => {
    varDetalleC.setAttribute("hidden", "hidden");
    BtnPasar.setAttribute("hidden", "hidden");
    Final();
});