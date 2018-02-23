$(".js-modal-btn").modalVideo();
//getting dynamic video id from html 
var video_id = $("#video-url").text();
var options = { videoId: video_id+'?modestbranding=1', start: 0 , mute: true, };
$('.video-background').tubular(options);
            // f-UGhWj1xww cool sepia hd
            // 49SKbS7Xwf4 beautiful barn sepia
