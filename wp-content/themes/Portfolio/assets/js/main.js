jQuery(document).ready(function ($) {

  // console.log("Hello World");

  // Right-Left slider Animation - Skills Section

  const sliderContainer = document.getElementById("language_framework_container");
  const slider = document.getElementById("languages_framework_slider");
  const languages_framework = Array.from(slider.children);

  languages_framework.forEach(slide => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
  });

  let scrollPosition = 0;
  const speed = 1;
  const totalWidth = slider.scrollWidth / 2;

  function animateSlider(){
    scrollPosition += speed;

    if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
    }

    sliderContainer.scrollLeft = scrollPosition;
    requestAnimationFrame(animateSlider);
  }
  animateSlider();


  // Left-Right slider Animation - Skills Section

  const softwareContainer = document.getElementById("software_language_container");
  const softwareSlider = document.getElementById("software_language_slider");
  const softwareTools = Array.from(softwareSlider.children);
  
  softwareTools.reverse().forEach(slide => {
    const clone = slide.cloneNode(true);
    softwareSlider.prepend(clone);
  });
  
  let currentPosition = 0; 
  const speedRev = 1; 
  const totalWidthRev = softwareSlider.scrollWidth / 2; 
  
  function animateSliderRev() {
    currentPosition -= speedRev;
  
    softwareSlider.scrollLeft = currentPosition;
  
    if (currentPosition <= -totalWidthRev) {
      currentPosition = 0;
    }
  
    requestAnimationFrame(animateSliderRev);
  }
  
  animateSliderRev();


  // App Info - Project Section  

  const ScanMe_App=document.getElementById("ScanMe_App");
  const HeyLook_App=document.getElementById("HeyLook_App");
  const Smarty_App=document.getElementById("Smarty_App");
  const Sansac_App=document.getElementById("Sansac_App");

  const ScanMe_info=document.getElementById("ScanMe_info_app");
  const HeyLook_info=document.getElementById("Heylook_info_app");
  const Smarty_info=document.getElementById("Smarty_info_app");
  const Sansac_info=document.getElementById("Sansac_info_app");

  const ScanMe_info_title=document.getElementById("ScanMe_info_title");
  const HeyLook_info_title=document.getElementById("Heylook_info_title");
  const Smarty_info_title=document.getElementById("Smarty_info_title");
  const Sansac_info_title=document.getElementById("Sansac_info_title");

  const ScanMe_info_description=document.getElementById("ScanMe_info_description");
  const HeyLook_info_description=document.getElementById("Heylook_info_description");
  const Smarty_info_description=document.getElementById("Smarty_info_description");
  const Sansac_info_description=document.getElementById("Sansac_info_description");

  const ScanMe_info_tag=document.getElementById("ScanMe_info_tag");
  const HeyLook_info_tag=document.getElementById("Heylook_info_tag");
  const Smarty_info_tag=document.getElementById("Smarty_info_tag");
  const Sansac_info_tag=document.getElementById("Sansac_info_tag");

  ScanMe_App.addEventListener("click",function(){

    ScanMe_App.style.borderStyle="solid";
    HeyLook_App.style.borderStyle="none";
    Smarty_App.style.borderStyle="none";
    Sansac_App.style.borderStyle="none";

    ScanMe_info.style.display="block";
    ScanMe_info_title.style.display="block";
    ScanMe_info_description.style.display="block";
    ScanMe_info_tag.style.display="flex";

    HeyLook_info.style.display="none";
    HeyLook_info_title.style.display="none"; 
    HeyLook_info_description.style.display="none"; 
    HeyLook_info_tag.style.display="none"; 

    Smarty_info.style.display="none";
    Smarty_info_title.style.display="none";
    Smarty_info_description.style.display="none";
    Smarty_info_tag.style.display="none";

    Sansac_info.style.display="none";
    Sansac_info_title.style.display="none";
    Sansac_info_description.style.display="none";
    Sansac_info_tag.style.display="none";

  });

  HeyLook_App.addEventListener("click",function(){

    ScanMe_App.style.borderStyle="none";
    HeyLook_App.style.borderStyle="solid";
    Smarty_App.style.borderStyle="none";
    Sansac_App.style.borderStyle="none";
    
    ScanMe_info.style.display="none";
    ScanMe_info_title.style.display="none";
    ScanMe_info_description.style.display="none";
    ScanMe_info_tag.style.display="none";

    HeyLook_info.style.display="block";
    HeyLook_info_title.style.display="block"; 
    HeyLook_info_description.style.display="block"; 
    HeyLook_info_tag.style.display="flex"; 

    Smarty_info.style.display="none";
    Smarty_info_title.style.display="none";
    Smarty_info_description.style.display="none";
    Smarty_info_tag.style.display="none";

    Sansac_info.style.display="none";
    Sansac_info_title.style.display="none";
    Sansac_info_description.style.display="none";
    Sansac_info_tag.style.display="none";
  });

  Smarty_App.addEventListener("click",function(){

    ScanMe_App.style.borderStyle="none";
    HeyLook_App.style.borderStyle="none";
    Smarty_App.style.borderStyle="solid";
    Sansac_App.style.borderStyle="none";
    
    ScanMe_info.style.display="none";
    ScanMe_info_title.style.display="none";
    ScanMe_info_description.style.display="none";
    ScanMe_info_tag.style.display="none";

    HeyLook_info.style.display="none";
    HeyLook_info_title.style.display="none"; 
    HeyLook_info_description.style.display="none"; 
    HeyLook_info_tag.style.display="none"; 

    Smarty_info.style.display="block";
    Smarty_info_title.style.display="block";
    Smarty_info_description.style.display="block";
    Smarty_info_tag.style.display="flex";

    Sansac_info.style.display="none";
    Sansac_info_title.style.display="none";
    Sansac_info_description.style.display="none";
    Sansac_info_tag.style.display="none";
  });

  Sansac_App.addEventListener("click",function(){

    ScanMe_App.style.borderStyle="none";
    HeyLook_App.style.borderStyle="none";
    Smarty_App.style.borderStyle="none";
    Sansac_App.style.borderStyle="solid";
    
    ScanMe_info.style.display="none";
    ScanMe_info_title.style.display="none";
    ScanMe_info_description.style.display="none";
    ScanMe_info_tag.style.display="none";

    HeyLook_info.style.display="none";
    HeyLook_info_title.style.display="none"; 
    HeyLook_info_description.style.display="none"; 
    HeyLook_info_tag.style.display="none"; 

    Smarty_info.style.display="none";
    Smarty_info_title.style.display="none";
    Smarty_info_description.style.display="none";
    Smarty_info_tag.style.display="none";

    Sansac_info.style.display="block";
    Sansac_info_title.style.display="block";
    Sansac_info_description.style.display="block";
    Sansac_info_tag.style.display="flex";
  });
  
  const About_Section=document.getElementById("about_section");
  const Skills_Section=document.getElementById("skills_section");
  const Project_Section=document.getElementById("project_section");
  const Contact_Section=document.getElementById("contact_section");

  // Desktop Header Buttons

  document.getElementById("about_button").addEventListener("click",function(){
    scrollToSection(About_Section);
  });

  document.getElementById("skills_button").addEventListener("click",function(){
    scrollToSection(Skills_Section);
  });

  document.getElementById("projects_button").addEventListener("click",function(){
    scrollToSection(Project_Section);
  });

  document.getElementById("contact_button").addEventListener("click",function(){
    scrollToSection(Contact_Section);
  });

  // Desktop Footer Buttons

  document.getElementById("about_button_bottom").addEventListener("click",function(){
    scrollToSection(About_Section);
  });

  document.getElementById("skills_button_bottom").addEventListener("click",function(){
    scrollToSection(Skills_Section);
  });

  document.getElementById("projects_button_bottom").addEventListener("click",function(){
    scrollToSection(Project_Section);
  });

  document.getElementById("contact_button_bottom").addEventListener("click",function(){
    scrollToSection(Contact_Section);
  });

  // Mobile Header Buttons

  document.getElementById("about_button_mobile").addEventListener("click",function(){
    scrollToSection(About_Section);
  });

  document.getElementById("skills_button_mobile").addEventListener("click",function(){
    scrollToSection(Skills_Section);
  });

  document.getElementById("projects_button_mobile").addEventListener("click",function(){
    scrollToSection(Project_Section);
  });

  document.getElementById("contact_button_mobile").addEventListener("click",function(){
    scrollToSection(Contact_Section);
  });

  // Mobile Footer Buttons

  document.getElementById("about_button_mobile_bottom").addEventListener("click",function(){
    scrollToSection(About_Section);
  });

  document.getElementById("skills_button_mobile_bottom").addEventListener("click",function(){
    scrollToSection(Skills_Section);
  });

  document.getElementById("projects_button_mobile_bottom").addEventListener("click",function(){
    scrollToSection(Project_Section);
  });

  document.getElementById("contact_button_mobile_bottom").addEventListener("click",function(){
    scrollToSection(Contact_Section);
  });

  // Profile Contact Button

  document.getElementById("profile_contact_button").addEventListener("click",function(){
    scrollToSection(Contact_Section);
  });

  function scrollToSection(section){
    if(section){
      const offsetTop=section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

  // Mobile Header Navigation Menu Title

  document.getElementById("explore_button").addEventListener("click",function(){
    const Mobile_Header=document.getElementById("mobile_header");
    const Header_Panel=document.getElementById("header-panel-mobile");

    if(Mobile_Header.style.display==="none"){
      Mobile_Header.style.display="block";
      Header_Panel.style.borderBottomLeftRadius="1px"; 
      Header_Panel.style.borderBottomRightRadius="1px";
    }else{
      Mobile_Header.style.display="none";
      Header_Panel.style.borderBottomLeftRadius="30px"; 
      Header_Panel.style.borderBottomRightRadius="30px";
    }
  });

  // Mobile Footer Navigation Menu Title

  document.getElementById("explore_button_bottom").addEventListener("click",function(){
    const Mobile_Footer=document.getElementById("mobile_footer");
    const Footer_Panel=document.getElementById("footer-panel-mobile");

    if(Mobile_Footer.style.display==="none"){
      Mobile_Footer.style.display="block";
      Footer_Panel.style.borderTopLeftRadius="1px"; 
      Footer_Panel.style.borderTopRightRadius="1px";
    }else{
      Mobile_Footer.style.display="none";
      Footer_Panel.style.borderTopLeftRadius="30px"; 
      Footer_Panel.style.borderTopRightRadius="30px";
    }
  })

  document.getElementById("left-app-content-arrow").addEventListener("click",function(){
    if(ScanMe_App.style.borderStyle==="solid"){
      Sansac_App.click();
    }else if(HeyLook_App.style.borderStyle==="solid"){
      ScanMe_App.click();
    }else if(Smarty_App.style.borderStyle==="solid"){
      HeyLook_App.click();
    }else if(Sansac_App.style.borderStyle==="solid"){
      Smarty_App.click();
    }
  });

  document.getElementById("right-app-content-arrow").addEventListener("click",function(){
    if(ScanMe_App.style.borderStyle==="solid"){
      HeyLook_App.click();
    }else if(HeyLook_App.style.borderStyle==="solid"){
      Smarty_App.click();
    }else if(Smarty_App.style.borderStyle==="solid"){
      Sansac_App.click();
    }else if(Sansac_App.style.borderStyle==="solid"){
      ScanMe_App.click();
    }
  });

  document.getElementById("contact-form-email").addEventListener("submit",function(event){
    event.preventDefault();

    var User_Name=document.getElementById("contact-name").value;
    var User_Email=document.getElementById("contact-email").value;
    var User_Mobile=document.getElementById("contact-mobile").value;
    var User_Message=document.getElementById("contact-message").value;

    console.log(User_Name," ",User_Email," ",User_Mobile," ",User_Message);

    const Name_Error=document.getElementById("name_error");
    const Email_Error= document.getElementById("email_error");
    const Mobile_Error= document.getElementById("mobile_error");


    if (User_Name === '') {
      Name_Error.style.display="block";
    }else if(User_Email === '' || !(/^[^@]+@[^@]+\.[^@]+$/.test(User_Email))){
      Email_Error.style.display="block";
    }else if(User_Mobile === ''){
      Mobile_Error.style.display="block";
    }else{
      Name_Error.style.display="none";
      Email_Error.style.display="none";
      Mobile_Error.style.display="none";
      this.submit();
    }


  });
  
});