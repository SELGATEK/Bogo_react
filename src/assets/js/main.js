// import $ from 'jquery';


// // nav active menu js
// $(document).ready(function () {
//     $(".mean-toggle").click(function () {
//       $(".mean-toggle").toggleClass("active");
//       $("nav").toggleClass("active");
//     });
//   });
  
//   // upload single image with preview image in next div js
  
//   // function readURL(input) {
//   //   if (input.files && input.files[0]) {
//   //     var reader = new FileReader();
//   //     reader.onload = function (e) {
//   //       $("#imagePreview").css(
//   //         "background-image",
//   //         "url(" + e.target.result + ")"
//   //       );
//   //       $("#imagePreview").hide();
//   //       $("#imagePreview").fadeIn(650);
//   //     };
//   //     reader.readAsDataURL(input.files[0]);
//   //   }
//   // }
//   // $("#imageUpload").change(function () {
//   //   readURL(this);
//   // });
  
  
//   // upload single image with preview image in next div js
//   // function readURL(input) {
//   //   if (input.files && input.files[0]) {
//   //     var reader = new FileReader();
//   //     reader.onload = function (e) {
//   //       $("#multi_img").css(
//   //         "background-image",
//   //         "url(" + e.target.result + ")"
//   //       );
//   //       $("#multi_img").hide();
//   //       $("#multi_img").fadeIn(650);
//   //     };
//   //     reader.readAsDataURL(input.files[0]);
//   //   }
//   // }
//   // $("#demoimage").change(function () {
//   //   readURL(this);
//   // });
  
  
  
//   // upload single image with preview image in next div js this script in two div background image change //
  
//   function readURL(input, previewDiv) {
//     if (input.files && input.files[0]) {
//       var reader = new FileReader();
//       reader.onload = function (e) {
//         $(previewDiv).css("background-image", "url(" + e.target.result + ")");
//         $(previewDiv).hide().fadeIn(650);
//         $("#multi_img").css('border', 'none');
//       };
//       reader.readAsDataURL(input.files[0]);
//     }
//   }
  
//   $("#imageUpload").change(function () {
//     readURL(this, "#imagePreview");
//     $("#imagePreview").css('border', 'none');
//   });
  
//   $("#BannerImage").change(function () {
//     readURL(this, "#multi_img");
//   });
  
  
  
  
  
  
  
//   // upload single banner image with preview image in next div js
  
//   $(document).ready(function () {
//     var readURL = function (input) {
//       if (input.files && input.files[0]) {
//         var reader = new FileReader();
  
//         reader.onload = function (e) {
//           $(".profile-pic").attr("src", e.target.result);
//         };
  
//         reader.readAsDataURL(input.files[0]);
//       }
//     };
  
//     $("#upload-banner-imgfile").on("change", function () {
//       readURL(this);
//     });
  
//     // $(".upload-button").on('click', function() {
//     //    $(".file-upload").click();
//     // });
//   });
  
  
  
  
  
  
  
  
  
//   // Upload Multipale Image with Preview and remove option or more image add after upload
//   $(document).ready(function () {
//     ImgUpload();
//   });
  
//   function ImgUpload() {
//     var imgWrap = "";
//     var imgArray = [];
//     var files = [];
//     var inputfile;
  
//     $(".upload__inputfile").each(function () {
//       inputfile = $(this);
  
//       $(this).on("change", function (e) {
  
//         $("#upload-button img").css('border', 'none');
//         $(".upload__img-wrap").css('border', '5px dotted #ccc');
  
//         imgWrap = $(this).closest(".upload__box").find(".upload__img-wrap");
  
//         $(".profile-pic").css('display', 'none');
        
  
//         var maxLength = $(this).attr("data-max_length");
  
  
//         files = files.concat(Array.from(e.target.files));
  
//         // create new files array
//         var newFiles = [];
  
//         // store all new image files in an array
//         files.forEach(function (file) {
//           if (file.type.match('image')) {
//             newFiles.push(file);
//           }
//         });
  
//       const modifiedfileList = new DataTransfer();
  
//       newFiles.map(function (f) {
//         modifiedfileList.items.add(f);
//       });
//       $('.upload__inputfile')[0].files = modifiedfileList.files;
  
  
  
  
//       if (files.length > maxLength) {
//         alert('Maximum limit reached. You can upload a maximum of ' + maxLength + ' images.');
  
        
  
//         // all images removed
//         imgWrap.empty();
        
//         inputfile.val('');
  
//         $("#upload-button img").css('border', '5px dotted #ccc');
//         $(".profile-pic").css('display', 'block');  // Show the profile picture
//         $(".upload__img-wrap").css('border', 'none');
  
  
//         files = [];
  
//         return;
//       }
  
//       files = files.filter(function (file, index, self) {
       
//         return (
          
//           index === self.findIndex(function (f) {
            
//             return f.name === file.name;
            
//           })
          
//         );
//       });
  
//       imgWrap.empty();
  
//       files.forEach(function (f, index) {
//         if (!f.type.match('image')) {
//           return;
//         }
  
//         var reader = new FileReader();
//         reader.onload = function (e) {
//           var html =
//             "<div className='upload__img-box'><div style='background-image: url(" +
//             e.target.result +
//             ")' data-number='" +
//             index +
//             "' data-file='" +
//             f.name +
//             "' className='img-bg'><div className='upload__img-close'></div></div></div>";
//           imgWrap.append(html);
//         };
//         reader.readAsDataURL(f);
//       });
  
//       inputfile.val(files.length);
//       });
//     });
  
//     $("body").on("click", ".upload__img-close", function (e) {
//       var file = $(this).parent().data("file");
//       const modifiedfileList = new DataTransfer();
  
//       var updatedFiles = $.grep(files, function (item) {
//         return item.name !== file;
//       });
//       files = updatedFiles;
      
//       $(this).parent().parent().remove();
  
  
//       updatedFiles.map(function (f) {
//         modifiedfileList.items.add(f);
//       });
//       $('.upload__inputfile')[0].files = modifiedfileList.files;
  
  
//       // Check if all upload__img-box elements are deleted
//       if (imgWrap.children().length === 0) {
//         $("#upload-button img").css('border', '5px dotted #ccc');
//         $(".profile-pic").css('display', 'block');  // Show the profile picture
//         $(".upload__img-wrap").css('border', 'none');
//       }
  
//       inputfile.val(files.length);
  
      
  
  
//        // Update the overlay with the updated total number of images
//       //  $("#multi_img .overlay-text").text("More +" + imgArray.length);
//     });
//   }
  
  
  
  
  
  
  
  
//   // upload multiple image with preview image in next div js
//   $(document).ready(function () {
//     $("#fileInput").change(function () {
//       $("#preview").empty();
//       var files = this.files;
//       var count = files.length;
//       var sizeLimit = 15;
//       if (count > sizeLimit) {
//         alert("You can only upload up to " + sizeLimit + " files.");
//         return false;
//       }
//       for (var i = 0; i < count; i++) {
//         var file = files[i];
//         var imageType = /image.*/;
//         if (!file.type.match(imageType)) {
//           alert("Only images can be uploaded.");
//           continue;
//         }
//         var img = document.createElement("img");
//         img.classList.add("image-preview");
//         var reader = new FileReader();
//         reader.onload = (function (aImg) {
//           return function (e) {
//             aImg.src = e.target.result;
//             const valueSrc = (aImg.src = e.target.result);
  
//             $(".image-preview").attr("value", valueSrc);
//           };
//         })(img);
//         reader.readAsDataURL(file);
//         $("#preview").append(img);
  
//         // $('.image-preview').attr('name', 'image-preview');
//         let imgpreview = $(".image-preview");
  
//         for (let i = 0; i < imgpreview.length; i++) {
//           imgpreview[i].setAttribute("name", "image-preview" + i);
//         }
//       }
//     });
//   });
  
  
  
  
  
//   //next btn js
//   $(".btnNext").click(function () {
//     $(".nav-tabs > .active").next("li").find("a").trigger("click");
//   });
  
  
  
  
  
  
  
  
  
  
//   // owl carousel js
  
//   // $(".owl-carousel").owlCarousel({
//   //   loop: true,
//   //   autoplay: true,
//   //   autoplayTimeout: 1000,
//   //   margin: 10,
//   //   nav: false,
//   //   dots: false,
//   //   mouseDrag: true,
//   //   responsive: {
//   //     0: {
//   //       items: 2,
//   //     },
//   //     600: {
//   //       items: 3,
//   //     },
//   //     1000: {
//   //       items: 7,
//   //     },
//   //   },
//   // });
  
  
  
  
  
  
//   // Do something with the selected file, like upload it to a server
//   const uploadButton = document.getElementById("upload-button");
//   // uploadButton.addEventListener("click", function () {
//   //   const fileInput = document.createElement("input");
//   //   fileInput.type = "file";
//   //   fileInput.click();
//   // });
//   // fileInput.addEventListener("change", function () {
//   //   const selectedFile = fileInput.files[0];
//   //   // Do something with the selected file, like upload it to a server
//   // });
  
//   //   const links = document.querySelectorAll('navbar-nav a');
//   //    console.log(links)
//   //   links.forEach(link => {
//   //     link.addEventListener('click', function (event) {
//   //       console.log(event)
//   //         event.preventDefault();
//   //         // Remove active class from all links
//   //         links.forEach(link => link.classList.remove('active'));
//   //         // Add active class to clicked link
//   //         this.classList.add('active');
//   //     });
//   // });
  
//   // $(document).ready(function() {
//   //   // Add active class to clicked link and remove it from others
//   //   $('.nav-link').click(function() {
//   //     $('.nav-link').removeClass('active');
//   //     $(this).addClass('active');
//   //   });
  
//   //   // Set About link as active on click and remove active from other links
//   //   $('#about-link').click(function() {
//   //     $('.nav-link').removeClass('active');
//   //     $(this).addClass('active');
//   //   });
  
//   //   // Set Services link as active on click and remove active from other links
//   //   $('#services-link').click(function() {
//   //     $('.nav-link').removeClass('active');
//   //     $(this).addClass('active');
//   //   });
//   // });
  
//   // .navbar-nav .nav-link.active {
//   //   background-color: #007bff;
//   //   color: #fff;
//   // }
  
//   // user_login Page Option select change bg color of active class
  
//   $(".registation-option-row .option_regis").on("click", function () {
//     $(".registation-option-row .option_regis").removeClass("reg_active");
//     $(this).addClass("reg_active");
  
//     var bgColor = $(this).data("skin");
//     $("body").css("background-color", bgColor);
//   });
  
  
  
  
  
  
  
  
  
//   // Change password eyes icon with input tpye text by jquery
  
//   // Create password field
//   $(".eyes-toggle-password").click(function () {
//     $(this).toggleClass("fa-eye fa-eye-slash");
//     var inputPass = $($(this).attr("toggle"));
//     var inputPassword = $(".use_registration_password");
//     if (inputPassword.attr("type") == "password") {
//       inputPassword.attr("type", "text");
//     } else {
//       inputPassword.attr("type", "password");
//     }
//   });
  
  
  
  
//   // Create confirm repeat password field
//   $(".eyes-toggle-Rpassword").click(function () {
//     $(this).toggleClass("fa-eye fa-eye-slash");
//     var inputPass = $($(this).attr("toggle"));
//     var inputPassword = $(".use_registration_Rpassword");
//     if (inputPassword.attr("type") == "password") {
//       inputPassword.attr("type", "text");
//     } else {
//       inputPassword.attr("type", "password");
//     }
//   });
  
  
  
  
//   // Create confirm repeat password field
//   $(".eyes-toggle-login_password").click(function () {
//     $(this).toggleClass("fa-eye fa-eye-slash");
//     var inputPass = $($(this).attr("toggle"));
//     var inputPassword = $(".user_login_pass");
//     if (inputPassword.attr("type") == "password") {
//       inputPassword.attr("type", "text");
//     } else {
//       inputPassword.attr("type", "password");
//     }
//   });
  
  
  
  
//   // current password change
//   $(document).ready(function() {
//     $(".eyes-toggle-password").click(function () {
//       $(this).toggleClass("fa-eye fa-eye");
//       var inputPass = $($(this).attr("toggle"));
//       var inputPassword = $(".current_password");
//       if (inputPassword.attr("type") == "password") {
//         inputPassword.attr("type", "text");
//       } else {
//         inputPassword.attr("type", "password");
//       }
//     });
//   });
  
//   // New password change
//   $(document).ready(function() {
//     $(".eyes-toggle-password").click(function () {
//       $(this).toggleClass("fa-eye fa-eye");
//       var inputPass = $($(this).attr("toggle"));
//       var inputPassword = $(".new_password");
//       if (inputPassword.attr("type") == "password") {
//         inputPassword.attr("type", "text");
//       } else {
//         inputPassword.attr("type", "password");
//       }
//     });
//   });
  
//   // confirm password change
//   $(document).ready(function() {
//     $(".eyes-toggle-password").click(function () {
//       $(this).toggleClass("fa-eye fa-eye");
//       var inputPass = $($(this).attr("toggle"));
//       var inputPassword = $(".conf_password");
//       if (inputPassword.attr("type") == "password") {
//         inputPassword.attr("type", "text");
//       } else {
//         inputPassword.attr("type", "password");
//       }
//     });
//   });
  
  
  
//   // Script for video
//   $(document).ready(function () {
//     $(".video-layer").click(function () {
//       $(".video-layer").css({ display: "none" });
//       $("video").trigger("play");
//     });
//   });
  
  
  
  
  
//   // -----Country Code Selection
// //   var mobileCodeInput = $("#mobile_code");
  
// //   mobileCodeInput.intlTelInput({
// //     initialCountry: "ae",
// //     separateDialCode: true,
// //     // utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
// //   });
  
// //   // Set the default country code
// //   var defaultCountryCode = mobileCodeInput.intlTelInput("getSelectedCountryData").dialCode;
// //   mobileCodeInput.val("+" + defaultCountryCode);
  
// //   // Update the input with the selected country code
// //   mobileCodeInput.on("countrychange", function() {
// //     var countryCode = mobileCodeInput.intlTelInput("getSelectedCountryData").dialCode;
// //     mobileCodeInput.val("+" + countryCode);
// //   });
  
  
  
  
  
//     // sidebar dropdown menu icon rotate script
  
//     $(document).ready(function() {
  
//       $(".main-sidebar .sidebar-menu li").click(function() {
//         console.log('clicked');
//       });
  
//     });
  
  
  
  
//     // voucher details slider
//     // $(function() {
//     //   // Owl Carousel
//     //   var vouchersilder = $(".vouchersilder");
//     //   vouchersilder.owlCarousel({
//     //     items: 1,
//     //     margin: 10,
//     //     loop: true,
//     //     nav: false,
//     //     autoplay:true
//     //   });
//     // });
  
  
  
  
  
  
//     // change password box toggle hide and show script
//     $(document).ready(function() {
//       $(".change_pass_row span").click(function() {
//         $(".change_pass_input_row").toggle();
//       });
//     });
  
        
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
  
    
  
  
  
  
  
  
  
  
    
  
  
  
  