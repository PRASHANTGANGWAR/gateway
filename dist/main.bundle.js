webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/aboutus/aboutus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aboutus/aboutus.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- Header width bg - fixed version -->\n    <section class=\"hfsl-banner event-listing-hero\" [ngStyle]=\"{'background-image': 'url(' + bgimg + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n        <div class=\"overlay\"></div>\n        <div class=\"context\">\n            <div class=\"container\">\n                 <h2>{{howwork.heroHeading}}</h2>\n                 <p>{{howwork.heroText}}</p>\n            </div>\n        </div>\n\n    </section>\n    <!-- Header width bg - fixed version end -->\n\n    <!-- how it works section - fixed version -->\n    <section class=\"about-top-sec image-with-text-home padbot0\">\n        <div class=\"container\">\n            <div class=\"row-first\">\n                <div class=\"img-box\"><img src=\"{{startedimg1}}\" alt=\"\"></div>\n                <div class=\"content-box\">\n                    <h3>{{started1.showcaseImageTitleText1}}</h3>\n                    <p>{{started1.showcaseImageTitleDescription}} </p>\n                    \n                </div>\n            </div>\n            <div class=\"row-first row-second\">\n                \n                <div class=\"img-box\"><img src=\"{{startedimg2}}\" alt=\"\"></div>\n                <div class=\"content-box\">\n                    \n                    <h3>{{started1.showcaseTitle2}}</h3>\n                    <p>{{started1.showcaseDescription2}} </p>\n                    \n                </div>\n                \n            </div>\n            <div class=\"row-first\">\n                \n                <div class=\"img-box\"><img src=\"{{startedimg3}}\" alt=\"\"></div>\n                <div class=\"content-box\">\n                    \n                    <h3>{{started1.showcaseTitle3}}</h3>\n                    <p>{{started1.showcaseDescription3}} <p>\n                    \n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- how it works section - fixed version end -->\n\t\n\t\n\t<!--our values section - fixed version-->\n    <section class=\"our-values-warp\">\n        <div class=\"container\">\n            <h2>{{values.ourValueHeading}}</h2>\n            <ul>\n               <li>\n                 <div class=\"img-box\"><img src=\"{{image1}}\" alt=\"\"></div>\n                 <h4>{{values.title1}}</h4>  \n               </li>\n               <li>\n                 <div class=\"img-box\"><img src=\"{{image2}}\" alt=\"\"></div>\n             <h4>{{values.title2}}</h4>  \n               </li>\n               <li>\n                 <div class=\"img-box\"><img src=\"{{image3}}\" alt=\"\"></div>\n                 <h4>{{values.title3}} </h4>  \n               </li>\n               <li>\n                 <div class=\"img-box\"><img src=\"{{image4}}\" alt=\"\"></div>\n                 <h4>{{values.title4}}</h4>  \n               </li> \n               <!--li>\n                 <div class=\"img-box\"><img src=\"{{image5}}\" alt=\"\"></div>\n                 <h4>{{values.title5}}</h4>  \n               </li>\n               <li>\n                 <div class=\"img-box\"><img src=\"{{image6}}\" alt=\"\"></div>\n                 <h4>{{values.title6}}</h4>  \n               </li>\n               <li>\n                 <div class=\"img-box\"><img src=\"{{image7}}\" alt=\"\"></div>\n                 <h4>{{values.title7}}</h4>  \n               </li>\n               <li>\n                 <div class=\"img-box\"><img src=\"{{image8}}\" alt=\"\"></div>\n                 <h4>{{values.title8}} </h4>  \n               </li--> \n            </ul>\n        </div>\n    </section>\n    <!--our values section - fixed version end-->\n\t\n\t\n\n\n    <!--  Discover more section - fixed version -->\n    <section class=\"discover-whole\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"lefcol\">\n                    <div class=\"box-t\">\n                        <h3>{{discover.discoverHeadingBlueBlock}}</h3>\n                        <p>{{discover.discoverMoreDescription}}</p>\n                    </div>\n                    <div class=\"box-video-sm\">\n                        <a href=\"javascript:void(0)\" class=\"js-modal-btn\" [attr.data-video-id]=\"discover.smallVideoBlock1YoutubeLinkId\">\n                            <div class=\"box-video-img\"><img src=\"{{videoimage3}}\" alt=\"\"></div>\n                            <div class=\"box-text\">\n                                <h3>{{discover.smallVideoBlock1Text}}</h3>\n                            </div>\n                        </a>\n                    </div>\n                    <div class=\"box-video-sm\">\n                        <a href=\"javascript:void(0)\" class=\"js-modal-btn\" [attr.data-video-id]=\"discover.smallVideoBlock2YoutubeLinkId\">\n                            <div class=\"box-video-img\"><img src=\"{{videoimage4}}\" alt=\"\"></div>\n                            <div class=\"box-text\">\n                                <h3>{{discover.smallVideoBlock2Text}}</h3>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"rigcol\">\n                    <div class=\"box-video-sm\">\n                        <a href=\"javascript:void(0)\" class=\"js-modal-btn\" [attr.data-video-id]=\"discover.largeVideoBlock1YoutubeLinkId\">\n                            <div class=\"box-video-img\"><img src=\"{{videoimage1}}\" alt=\"\"></div>\n                            <div class=\"box-text\">\n                                 <h3>{{discover.largeVideoBlock1Quote}}</h3>\n                                <span>{{discover.largeVideoBlock1Name}}</span>\n                            </div>\n                        </a>\n                    </div>\n                    <div class=\"box-video-sm\">\n                        <a href=\"javascript:void(0)\" class=\"js-modal-btn\" [attr.data-video-id]=\"discover.largeVideoBlock2YoutubeLinkId\">\n                            <div class=\"box-video-img\"><img src=\"{{videoimage2}}\" alt=\"\"></div>\n                            <div class=\"box-text\">\n                                <h3>{{discover.largeVideoBlock2Quote}}</h3>\n                                <span>{{discover.largeVideoBlock2Name}}</span>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--  Discover more section - fixed version end -->\n\n\n\n    <!-- start CTA block - fixed version -->\n     <section class=\"cta-block\" >\n        <div class=\"container\">\n            <h2 class=\"whithead\">{{chatData.standardCtaInfoPackDescription}}</h2>\n            <div class=\"buttons\">\n                <a href='#' class=\"borbtn\" data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal-static\">{{chatData.standardCtaInfoPackButtonText}}</a>\n            </div>\n            <p>{{chatData.standardCtaInfoPackAfterButtonText}}</p>\n        </div>\n    </section>\n    <!-- start CTA block - fixed version -->\n<!-- Get an info pack Modal -->\n  <div class=\"modal fade\" id=\"get-an-info-pack-modal-static\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body no-pad\">\n                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\" >&times;</button>\n                    <div class=\"col-sm-5 col-md-5 right-img-main no-pad hidden-xs hidden-sm\">\n                        <div class=\"right-img-full\">\n                            <div class=\"right-img-full\" style=\"background: url(images/generic-info.jpg) no-repeat center;\"></div>\n                            <!--  <img \n                             [src]=\"comunitylatestDetail.featured_image.url\" alt=\"\" style= \n                             \"height: -webkit-fill-available;\"> -->\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-7 getinfowp\">\n                   \n                        <div class=\"wp-main\">\n                         <h3 style=\"color: #105dac;\">\n                            <div class=\"title-img-round\">\n                                <img src=\"images/Gateway-icon-only-square.png\" alt=\"\" class=\"\">    \n                            </div>\n                            Get an info pack\n                         </h3>\n                         <!-- <div class=\"profile-row\">\n                            <div class=\"profile-img\"><img src=\"images/img11.png\" alt=\"\"></div> \n                            <p><strong> Melinda James</strong> | +61 421 223 221 | melinda.james@gty.com.au</p>\n                         </div> -->\n                         <div class=\"divider\"></div>\n<!--                         <div class=\"form-getinfo-succes\">\n                            <div class=\"row\">\n                            <div class=\"col-sm-2\"><img src=\"images/form-sucess.png\" alt=\"\"></div>    \n                            <div class=\"col-sm-10\"><p class=\"pera-textbig\"> Thank you for your enquiry. We've emailed you the info pack. You can view it by clicking the button below.</p>\n                            <button (click)=\"infoPdf(genericInfo.info_pack?.info_pdf.url)\" \n                             class=\"btn btn-org\">View the info pack Now</button></div>\n                            </div>\n                        </div> -->\n                         <div class=\"form-wp-getinfo\">\n                             <div class=\"row\">\n                                <!-- form starts here-->\n                                <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\" \n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required> \n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>  \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\" \n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\" \n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\" #plan=\"ngModel\">   \n                                        </div>\n                                    </div>  \n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\" \n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\" \n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>  \n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p> \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\" \n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div> \n                                    <div class=\"col-sm-12\">\n                                    <button  class=\"btn btn-org\"  id=\"send-sucess\"\n                                     (click)=\"getInfo(infoForm)\" style=\"background: #105dac; border-color:#105dac;\" \n                                    (mouseover)=\"changeColor($event)\" \n                                    (mouseout)=\"changeColor($event)\" type=\"submit\">Get an info pack</button>\n                                    </div>\n                                </form>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end  Get an info pack Modal -->\n "

/***/ }),

/***/ "../../../../../src/app/aboutus/aboutus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutusComponent = (function () {
    function AboutusComponent(apiService, router, segment) {
        this.apiService = apiService;
        this.router = router;
        this.segment = segment;
        this.started1 = {};
        this.discover = {};
        this.chatData = {};
        this.howwork = {};
        this.values = {};
        this.submitted = false;
        this.info = { firstname: '', lastname: '', phone: '', email: '' };
    }
    AboutusComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
        this.getGenericInfopack();
        var that = this;
        //CTA chat
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.chatData = data.fields;
        });
        // how we started
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/47kSDBgP8skQCE6gksIyCm?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.started1 = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["showcaseImageTitleMedia"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.startedimg1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["showcaseImage2"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.startedimg2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["showcaseImage3"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.startedimg3 = data.fields.file.url;
            });
        });
        //About us
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/3V6Lb3JXkk0gA8MACsiesk?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.howwork = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.Fullwidthbackgroundimage.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.bgimg = data.fields.file.url;
            });
        });
        // Our values
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/2zecbysV9yEISmYWYiSMAK?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.values = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["icon1"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["icon2"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["icon3"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image3 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["icon4"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.image4 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["icon5"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image5 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["icon6"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image6 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["icon7"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image7 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["icon8"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image8 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.Fullwidthbackgroundimage.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.bgimg = data.fields.file.url;
            });
        });
        // discover a new lifestyle
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/3NEHHnI8BqUY0koaiGQ4SQ?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            data.fields.smallVideoBlock1YoutubeLinkId = data.fields.smallVideoBlock1YoutubeLink.replace("https://youtu.be/", "");
            data.fields.smallVideoBlock2YoutubeLinkId = data.fields.smallVideoBlock2YoutubeLink.replace("https://youtu.be/", "");
            data.fields.largeVideoBlock1YoutubeLinkId = data.fields.largeVideoBlock1YoutubeLink.replace("https://youtu.be/", "");
            data.fields.largeVideoBlock2YoutubeLinkId = data.fields.largeVideoBlock2YoutubeLink.replace("https://youtu.be/", "");
            that.discover = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["largeVideoBlock1Image"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.videoimage1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["largeVideoBlock2Image"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.videoimage2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["smallVideoBlock1Image"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.videoimage3 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["smallVideoBlock2Image"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.videoimage4 = data.fields.file.url;
                $.getScript('js/modal-video.js');
                $.getScript('js/customCarousel.js');
            });
        });
    };
    AboutusComponent.prototype.getGenericInfopack = function () {
        var _this = this;
        this.apiService.get('/pdf_info_packs/featured_pack').subscribe(function (res) {
            _this.genericInfo = res;
            window.localStorage.setItem('generic_url', _this.genericInfo.info_pack.info_pdf.url);
        });
    };
    AboutusComponent.prototype.getInfo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var userData = {};
            userData.firstname = this.info.firstname;
            userData.lastname = this.info.lastname;
            userData.plan = this.info.plan;
            userData.phone = this.info.phone;
            userData.email = this.info.email;
            userData.description = this.info.area;
            window.localStorage.setItem('generic_data', JSON.stringify(userData));
            console.log('success!');
            this.segment.track('GetInfoPack', {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area
            }).then(function () {
                window.localStorage.setItem('genericCheck', '1');
                _this.router.navigateByUrl('/success');
                $('#get-an-info-pack-modal-static')[0].style.display = 'none';
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                console.log("Event sended");
            });
        }
        else {
            console.log('validation failed!');
        }
    };
    AboutusComponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : '#105dac';
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#ffffff';
    };
    AboutusComponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#414952';
    };
    AboutusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__("../../../../../src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__("../../../../../src/app/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _c || Object])
    ], AboutusComponent);
    return AboutusComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=aboutus.component.js.map

/***/ }),

/***/ "../../../../../src/app/aboutus/aboutus.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return aboutusModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutus_component__ = __webpack_require__("../../../../../src/app/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var aboutusRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_2__aboutus_component__["a" /* AboutusComponent */]
    }
]);
var aboutusModule = (function () {
    function aboutusModule() {
    }
    aboutusModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* SharedModule */],
                aboutusRouting
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aboutus_component__["a" /* AboutusComponent */]
            ],
            providers: []
        })
    ], aboutusModule);
    return aboutusModule;
}());

//# sourceMappingURL=aboutus.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<layout-header></layout-header>\n\n<router-outlet></router-outlet>\n\n<layout-footer></layout-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(Meta, title) {
        this.Meta = Meta;
        this.title = title;
        this.communities = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Gateway Lifestyle | Over 50s Residential Communities');
        this.Meta.updateTag({ name: 'description', content: 'Gateway' });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Meta"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Meta"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_designs_home_designs_module__ = __webpack_require__("../../../../../src/app/home-designs/home-designs.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enquiry_form_enquiry_module__ = __webpack_require__("../../../../../src/app/enquiry-form/enquiry.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_event_module__ = __webpack_require__("../../../../../src/app/event/event.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__howitworks_howitworks_module__ = __webpack_require__("../../../../../src/app/howitworks/howitworks.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aboutus_aboutus_module__ = __webpack_require__("../../../../../src/app/aboutus/aboutus.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__blog_blog_module__ = __webpack_require__("../../../../../src/app/blog/blog.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__privacy_privacy_module__ = __webpack_require__("../../../../../src/app/privacy/privacy.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__legal_legal_module__ = __webpack_require__("../../../../../src/app/legal/legal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ourteam_ourteam_module__ = __webpack_require__("../../../../../src/app/ourteam/ourteam.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__careers_careers_module__ = __webpack_require__("../../../../../src/app/careers/careers.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__faq_faq_module__ = __webpack_require__("../../../../../src/app/faq/faq.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__getintouch_getintouch_module__ = __webpack_require__("../../../../../src/app/getintouch/getintouch.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__thanks_enquiring_thanks_module__ = __webpack_require__("../../../../../src/app/thanks-enquiring/thanks.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pageNotFound_pageNotFound_module__ = __webpack_require__("../../../../../src/app/pageNotFound/pageNotFound.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__homeforsale_homeforsale_module__ = __webpack_require__("../../../../../src/app/homeforsale/homeforsale.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__community_communities_module__ = __webpack_require__("../../../../../src/app/community/communities.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__testimonial_testimonial_module__ = __webpack_require__("../../../../../src/app/testimonial/testimonial.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__buying_process_howitworks_module__ = __webpack_require__("../../../../../src/app/buying-process/howitworks.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var rootRouting = __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([]);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_27__shared__["d" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_27__shared__["e" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_26__buying_process_howitworks_module__["a" /* buyingProcessModule */],
                __WEBPACK_IMPORTED_MODULE_25__testimonial_testimonial_module__["a" /* TestimonialModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_6__enquiry_form_enquiry_module__["a" /* enquiryModule */],
                __WEBPACK_IMPORTED_MODULE_7__event_event_module__["a" /* eventModule */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_5__home_designs_home_designs_module__["a" /* HomeDesignsModule */],
                __WEBPACK_IMPORTED_MODULE_8__howitworks_howitworks_module__["a" /* howitworksModule */],
                __WEBPACK_IMPORTED_MODULE_9__aboutus_aboutus_module__["a" /* aboutusModule */],
                __WEBPACK_IMPORTED_MODULE_10__blog_blog_module__["a" /* blogModule */],
                __WEBPACK_IMPORTED_MODULE_11__privacy_privacy_module__["a" /* privacyModule */],
                __WEBPACK_IMPORTED_MODULE_12__legal_legal_module__["a" /* legalModule */],
                __WEBPACK_IMPORTED_MODULE_13__ourteam_ourteam_module__["a" /* ourteamModule */],
                __WEBPACK_IMPORTED_MODULE_14__careers_careers_module__["a" /* careersModule */],
                __WEBPACK_IMPORTED_MODULE_15__faq_faq_module__["a" /* faqModule */],
                __WEBPACK_IMPORTED_MODULE_16__getintouch_getintouch_module__["a" /* getintouchModule */],
                __WEBPACK_IMPORTED_MODULE_17__thanks_enquiring_thanks_module__["a" /* thanksenquiringModule */],
                rootRouting,
                __WEBPACK_IMPORTED_MODULE_27__shared__["g" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_18__pageNotFound_pageNotFound_module__["a" /* pageNotFoundModule */],
                __WEBPACK_IMPORTED_MODULE_19__homeforsale_homeforsale_module__["a" /* homeforsaleModule */],
                __WEBPACK_IMPORTED_MODULE_21_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_20__community_communities_module__["a" /* communitiesModule */],
                __WEBPACK_IMPORTED_MODULE_22_ng2_search_filter__["Ng2SearchPipeModule"],
                __WEBPACK_IMPORTED_MODULE_23_ng2_order_pipe__["Ng2OrderModule"],
                __WEBPACK_IMPORTED_MODULE_24_ngx_segment_analytics__["a" /* SegmentModule */].forRoot({ apiKey: 'amiQRpJhALYD4uIyy8CbwwtT2axHGQhs', debug: true })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__shared__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_27__shared__["h" /* SharedService */],
                __WEBPACK_IMPORTED_MODULE_27__shared__["b" /* CommunitiesService */],
                __WEBPACK_IMPORTED_MODULE_27__shared__["f" /* HomesService */],
                __WEBPACK_IMPORTED_MODULE_27__shared__["c" /* EventService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!--from-our-blog section-->\n   \t\n   \t\t<section class=\"from-our-blog\">\n   \t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"blog-section-heading\">\n\t\t\t\t\t<h3>From our blog</h3>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"blog-list\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"blog-single-div\" style=\"background: url(../images/blog1.png) no-repeat center center;\">\n\t\t\t\t\t\t\t\t<h3>Move into a Lifestyle Community and watch your finances thrive </h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"blog-single-div\" style=\"background: url(../images/blog2.png) no-repeat center center;\">\n\t\t\t\t\t\t\t\t<h3>8 Reasons Why Over 50s Lifestyle Villages are the Smart Choice</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"blog-single-div\" style=\"background: url(../images/blog3.png) no-repeat center center;\">\n\t\t\t\t\t\t\t\t<h3>The 7 Lifestyle Options You Have for Retirement</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"more-articles\"><a href=\"#\">explore more articles</a></div>\n\t\t\t</div>\n   \t\t</section>\n   \n    <!--end-->"

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__("../../../../../src/app/blog/blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());

//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return blogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var blogRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'blog',
        component: __WEBPACK_IMPORTED_MODULE_2__blog_component__["a" /* BlogComponent */]
    }
]);
var blogModule = (function () {
    function blogModule() {
    }
    blogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* SharedModule */],
                blogRouting
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__blog_component__["a" /* BlogComponent */]
            ],
            providers: []
        })
    ], blogModule);
    return blogModule;
}());

//# sourceMappingURL=blog.module.js.map

/***/ }),

/***/ "../../../../../src/app/buying-process/howitworks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/buying-process/howitworks.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- Header width bg - fixed version -->\n\t<section class=\"hfsl-banner how-it-work-hero\"\n[ngStyle]=\"{'background-image': 'url(' + bgimg + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n\t\t<div class=\"overlay\"></div>\n\t\t<div class=\"context\">\n\t\t\t<div class=\"container\">\n\t\t\t\t <h2>{{howwork.heroHeading}}</h2>\n        \t\t <p>{{howwork.heroText}}</p>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n    <!-- Header width bg - fixed version end -->\n\n    <!-- how it works section - fixed version -->\n\t<section class=\"about-top-sec image-with-text-home how-works\">\n        <div class=\"container\">\n            <div class=\"row-first\">\n                <div class=\"img-box\"><img src=\"{{startedimg1}}\" alt=\"\"></div>\n                <div class=\"content-box\">\n                    <h3>{{started1.showcaseImageTitleText1}}</h3>\n                    <p>{{started1.showcaseImageTitleDescription}} </p>\n\n                </div>\n            </div>\n            <div class=\"row-first row-second\">\n\n                <div class=\"img-box\"><img src=\"{{startedimg2}}\" alt=\"\"></div>\n                <div class=\"content-box\">\n\n                    <h3>{{started1.showcaseTitle2}}</h3>\n                    <p>{{started1.showcaseDescription2}} </p>\n\n                </div>\n\n            </div>\n            <div class=\"row-first\">\n\n                <div class=\"img-box\"><img src=\"{{startedimg3}}\" alt=\"\"></div>\n                <div class=\"content-box\">\n\n                   <h3>{{started1.showcaseTitle3}}</h3>\n                    <p>{{started1.showcaseDescription3}} </p>\n\n                </div>\n            </div>\n        </div>\n    </section>\n\t<!-- how it works section - fixed version end -->\n\n\n\t<!-- faqs blue block - fixed version -->\n    <section class=\"faq\">\n        <div class=\"container\">\n            <div class=\"panel-group\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <div class=\"panel-title\">\n                            <a data-toggle=\"collapse\" class=\"collapsed\" href=\"#collapse0\">{{faqTitle.faqTitle1}}</a>\n                        </div>\n                        <div id=\"collapse0\" class=\"panel-collapse collapse\">\n                            <div class=\"panel-data\">{{faqTitle.faqDescription1}}</div>\n                        </div>\n                    </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <div class=\"panel-title\">\n                            <a data-toggle=\"collapse\" class=\"collapsed\" href=\"#collapse1\">{{faqTitle.faqTitle2}}</a>\n                        </div>\n                        <div id=\"collapse1\" class=\"panel-collapse collapse\">\n                            <div class=\"panel-data\">{{faqTitle.faqDescription2}}</div>\n                        </div>\n                    </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <div class=\"panel-title\">\n                            <a data-toggle=\"collapse\" class=\"collapsed\" href=\"#collapse2\">{{faqTitle.faqTitle3}}</a>\n                        </div>\n                        <div id=\"collapse2\" class=\"panel-collapse collapse\">\n                            <div class=\"panel-data\">{{faqTitle.faqDescription3}}</div>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n            <div class=\"faq-btn\">\n                <a routerLink=\"/faqs\">see more faqs</a>\n            </div>\n            </div>\n    </section>\n\t<!-- faqs blue block - fixed version end -->\n\n    <!-- How it work image no. 1- fixed version -->\n  <section class=\"how-work\" [ngStyle]=\"{'background-image': 'url(' + imageId + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"work-title\">\n          <h3>{{howItWorksHeading.howItWorksHeading}}</h3>\n          <p>{{howItWorksHeading.howItWorksDescription}}</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"how-work-main\">\n          <div class=\"col-md-4\">\n            <div class=\"work-col\">\n              <div class=\"icon\"><img src=\"{{image1}}\"></div>\n              <h4>{{howItWorksHeading.heading1}}</h4>\n              <p>{{howItWorksHeading.description1}}</p>\n              <div class=\"dwn-pdf\">\n                <a href=\"{{pdf1}}\" download target=\"_blank\">{{mediatext1}}</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"work-col\">\n                <div class=\"icon\"><img src=\"{{image2}}\"></div>\n                <h4>{{howItWorksHeading.heading2}}</h4>\n                <p>{{howItWorksHeading.description2}}</p>\n                <div class=\"dwn-pdf\">\n                    <a href=\"{{pdf2}}\" download target=\"_blank\">{{mediatext2}}</a>\n                </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"work-col\">\n                <div class=\"icon\"><img src=\"{{image3}}\"></div>\n                <h4>{{howItWorksHeading.heading3}}</h4>\n                <p>{{howItWorksHeading.description3}}</p>\n                <div class=\"dwn-pdf\">\n                    <a href=\"{{pdf3}}\" download target=\"_blank\">{{mediatext3}}</a>\n                </div>\n            </div>\n        </div>\n        </div>\n      </div>\n    </div>\n\n\n  </section>\n  <!-- How it work image no. 1- fixed version end -->\n\n\n\n\n\t<!-- featured homes Section - fixed version -->\n\t<section class=\"sale-at-Aspley our-home-designe padtop90\" id=\"featured-home\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<h2 class=\"heading\">Featured homes</h2>\n\t\t\t\t<div class=\"heading-right-link\"><a routerLink=\"/homes-for-sale\">Discover all {{homeCount}} homes for sale</a></div>\n\t\t\t\t<div class=\"divider\"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"tab-content\">\n\t\t\t<!-- all homes tab -->\n\t\t\t<div role=\"tabpanel\" class=\"tab-pane active\" id=\"All-homes\">\n\t\t\t\t<div class=\"lookingsomthing-warp home-carousel\">\n\t\t\t\t\t<div class=\"inner-box-warp\">\n\n\t\t\t\t\t\t<div class=\"center slider\">\n\t\t\t\t\t\t\t<!-- community card -->\n\t\t\t\t\t\t\t<div *ngFor=\"let home of featuredHomes;let jj = index\">\n\t\t\t\t\t\t\t\t<ul class=\"home-for-sale\">\n\t\t\t\t\t\t\t\t\t<li class=\"detail-list\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-slider-warp mart-bot14\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sl-box\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"home.status=='sold'\" class=\"paid-btn\">sold</span>\n\n                                                    <span *ngIf=\"home.status=='under_offer'\" class=\"paid-btn\" style=\"background: #f89923;\">Under Offer</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"carousel{{jj}}\" class=\"carousel slide\" data-interval=\"false\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-inner home-carousel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item\" *ngFor=\"let _image of home.images;let ii = index\" [ngClass]=\"{active: ii===0}\">\n\t\t\t\t\t\t\t                                  <img\n\t\t\t\t\t\t\t                                  [src]=\"_image\"\n\t\t\t\t\t\t\t                                  alt=\"\">\n\t\t\t\t\t\t\t                              </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"left carousel-control\" href=\"#carousel{{jj}}\" data-slide=\"prev\">‹</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"right carousel-control\" href=\"#carousel{{jj}}\" data-slide=\"next\">›</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n                                            <a href=\"homes-for-sale/{{home.id}}\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pr-b\" *ngIf=\"home?.list_price\">${{home.list_price | number:'1.0'}}</div>\n\t\t\t\t\t\t\t\t\t\t\t<p>{{home.address}} {{home.address1}}</p>\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"margt25\"><i class=\"sicon\" [ngStyle]=\"{'background-image': 'url(' + home?.community?.community_icon?.url + ')','background-repeat': 'no-repeat','background-position': 'center'}\"></i> Located in {{home.community.first_name}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"afs-wp\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"bed\"></i> {{home.no_of_bedrooms}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"tub\"></i> {{home.no_of_bathrooms}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"car\"></i> {{home.car_space}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"home?.record_type == 'Pre-loved'\" class=\"new-btn new-btn\" style=\"border: 1px solid #62717f; color: #62717f!important; \">Pre Loved</div>\n                                                <div *ngIf=\"home?.record_type == 'New'\" class=\"new-btn new-btn\">New</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- end of all homes tab -->\n\t\t</div>\n\n\n\t</section>\n\t<!-- featured homes Section - fixed version end -->\n\n    <!--from-our-blog section - fixed version -->\n    <section class=\"from-our-blog\">\n        <div class=\"container\">\n            <div class=\"blog-section-heading\">\n                <h3>{{ourBlogsTitle}}</h3>\n                <p>{{ourBlogsDescription}}</p>\n            </div>\n            <div class=\"blog-list\">\n                <ul>\n                    <li>\n                        <a href=\"{{blogLink1}}\" target=\"_blank\">\n                        <div class=\"blog-single-div blog-post-1\" [ngStyle]=\"{'background-image': 'url(' + blogBackgroundImage1 + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n                            <h3>{{blogTitle1}}</h3>\n                        </div>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"{{blogLink2}}\" target=\"_blank\">\n                        <div class=\"blog-single-div blog-post-2\" [ngStyle]=\"{'background-image': 'url(' + blogBackgroundImage2 + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n                            <h3>{{blogTitle2}}</h3>\n                        </div>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"{{blogLink3}}\" target=\"_blank\">\n                        <div class=\"blog-single-div blog-post-3\" [ngStyle]=\"{'background-image': 'url(' + blogBackgroundImage3 + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n                            <h3>{{blogTitle3}}</h3>\n                        </div>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"more-articles\">\n                <a href=\"https://live.gatewaylifestyle.com.au/\" target=\"_blank\">{{exploreMoreButton}}</a>\n            </div>\n        </div>\n    </section>\n    <!--from-our-blog section - fixed version -->\n\n    <!-- start CTA block - fixed version -->\n    <section class=\"cta-block\">\n        <div class=\"container\">\n            <h2 class=\"whithead\">{{chatData.standardCtaInfoPackDescription}}</h2>\n            <div class=\"buttons\">\n                <a href='#' data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal-static\" class=\"borbtn\">{{chatData.standardCtaInfoPackButtonText}}</a>\n            </div>\n            <p>{{chatData.standardCtaInfoPackAfterButtonText}}</p>\n        </div>\n    </section>\n    <!-- end CTA block - fixed version -->\n\n    <!-- Get an info pack Modal -->\n  <div class=\"modal fade\" id=\"get-an-info-pack-modal-static\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body no-pad\">\n                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  (mouseover)=\"onHover($event)\"\n                                    (mouseout)=\"onHover($event)\" >&times;</button>\n                    <div class=\"col-sm-5 col-md-5 right-img-main no-pad hidden-xs hidden-sm\">\n                        <div class=\"right-img-full\">\n                            <div class=\"right-img-full\" style=\"background: url(images/generic-info.jpg) no-repeat center;\"></div>\n                            <!--  <img\n                             [src]=\"comunitylatestDetail.featured_image.url\" alt=\"\" style=\n                             \"height: -webkit-fill-available;\"> -->\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-7 getinfowp\">\n\n                        <div class=\"wp-main\">\n                         <h3 style=\"color: #105dac;\">\n                            <div class=\"title-img-round\">\n                                <img src=\"images/Gateway-icon-only-square.png\" alt=\"\" class=\"\">\n                            </div>\n                            Get an info pack\n                         </h3>\n                         <!-- <div class=\"profile-row\">\n                            <div class=\"profile-img\"><img src=\"images/img11.png\" alt=\"\"></div>\n                            <p><strong> Melinda James</strong> | +61 421 223 221 | melinda.james@gty.com.au</p>\n                         </div> -->\n                         <div class=\"divider\"></div>\n<!--                         <div class=\"form-getinfo-succes\">\n                            <div class=\"row\">\n                            <div class=\"col-sm-2\"><img src=\"images/form-sucess.png\" alt=\"\"></div>\n                            <div class=\"col-sm-10\"><p class=\"pera-textbig\"> Thank you for your enquiry. We've emailed you the info pack. You can view it by clicking the button below.</p>\n                            <button (click)=\"infoPdf(genericInfo.info_pack?.info_pdf.url)\"\n                             class=\"btn btn-org\">View the info pack Now</button></div>\n                            </div>\n                        </div> -->\n                         <div class=\"form-wp-getinfo\">\n                             <div class=\"row\">\n                                <!-- form starts here-->\n                                <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\"\n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\"\n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\"\n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\"\n                                           [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\"\n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\" #plan=\"ngModel\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\"\n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\"\n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\"\n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                    <button  class=\"btn btn-org\"  id=\"send-sucess\"\n                                     (click)=\"getInfo(infoForm)\" style=\"background: #105dac; border-color:#105dac;\"\n                                    (mouseover)=\"changeColor($event)\"\n                                    (mouseout)=\"changeColor($event)\" type=\"submit\">Get an info pack</button>\n                                    </div>\n                                </form>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end  Get an info pack Modal -->\n"

/***/ }),

/***/ "../../../../../src/app/buying-process/howitworks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buyingProcessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var buyingProcessComponent = (function () {
    function buyingProcessComponent(apiService, router, segment) {
        this.apiService = apiService;
        this.router = router;
        this.segment = segment;
        this.faqTitle = [];
        this.steps = [];
        this.howItWorksHeading = {};
        this.showData = false;
        this.isDataAvailable = false;
        this.submitted = false;
        this.info = { firstname: '', lastname: '', phone: '', email: '' };
    }
    buyingProcessComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
        //fetching the list of featured homes
        this.apiService.get('/home_for_sales/featured_home').subscribe(function (res) {
            _this.isDataAvailable = true;
            _this.featuredHomes = res.homes;
            $.getScript('js/customSlick.js');
            _this.getGenericInfopack();
        }, function (err) {
            console.log(err);
        });
        //count of homes
        this.apiService.get('/communities/count_for_home_and_community').subscribe(function (res) {
            _this.homeCount = res.home_count;
        }, function (err) {
            console.log(err);
        });
        var that = this;
        //How secure is my tenure
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/2XHeIJcpmEsugKmSEUEE4W?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.faqTitle = data.fields;
        });
        that.showData = true;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/10h4Zli6MwKKQOuya0smM2?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.blogLink1 = data.fields.blogLink1;
            that.blogLink2 = data.fields.blogLink2;
            that.blogLink3 = data.fields.blogLink3;
            that.blogTitle1 = data.fields.blogTitle1;
            that.blogTitle2 = data.fields.blogTitle2;
            that.blogTitle3 = data.fields.blogTitle3;
            that.exploreMoreButton = data.fields.exploreMoreButton;
            that.ourBlogsDescription = data.fields.ourBlogsDescription;
            that.ourBlogsTitle = data.fields.ourBlogsTitle;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.blogBackgroundImage1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.blogBackgroundImage1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.blogBackgroundImage2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.blogBackgroundImage2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.blogBackgroundImage3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.blogBackgroundImage3 = data.fields.file.url;
            });
        });
        //How it work
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/30FFiYoNOMoAGm82q4QE0Y?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.howwork = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.Fullwidthbackgroundimage.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.bgimg = data.fields.file.url;
            });
        });
        // Three images/pdf   
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/4Lvoax98XCEy2GESceswac?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.howItWorksHeading = data.fields;
            that.mediatext1 = data.fields.downloadPdfText1;
            that.mediatext2 = data.fields.downloadPdfText2;
            ;
            that.mediatext3 = data.fields.downloadPdfText3;
            ;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.fullWidthImageBackground.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.imageId = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["icon1"][0].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.image1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["icon2"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.image2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["icon3"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.image3 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["downloadPdfMedia1"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.pdf1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["downloadPdfMeadi2"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.pdf2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["downloadPdfMedia3"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.pdf3 = data.fields.file.url;
            });
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.chatData = data.fields;
        });
        // how we started
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/QPQq5AVJE2UAAEcYoKWUQ?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.started1 = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["showcaseImageTitleMedia"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.startedimg1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["showcaseImage2"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.startedimg2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["showcaseImage3"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.startedimg3 = data.fields.file.url;
            });
        });
    };
    buyingProcessComponent.prototype.getGenericInfopack = function () {
        var _this = this;
        this.apiService.get('/pdf_info_packs/featured_pack').subscribe(function (res) {
            _this.genericInfo = res;
            window.localStorage.setItem('generic_url', _this.genericInfo.info_pack.info_pdf.url);
        });
    };
    buyingProcessComponent.prototype.getInfo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var userData = {};
            userData.firstname = this.info.firstname;
            userData.lastname = this.info.lastname;
            userData.plan = this.info.plan;
            userData.phone = this.info.phone;
            userData.email = this.info.email;
            userData.description = this.info.area;
            window.localStorage.setItem('generic_data', JSON.stringify(userData));
            console.log('success!');
            this.segment.track('GetInfoPack', {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area
            }).then(function () {
                window.localStorage.setItem('genericCheck', '1');
                _this.router.navigateByUrl('/success');
                $('#get-an-info-pack-modal-static')[0].style.display = 'none';
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                console.log("Event sended");
            });
        }
        else {
            console.log('validation failed!');
        }
    };
    buyingProcessComponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : '#105dac';
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#ffffff';
    };
    buyingProcessComponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#414952';
    };
    buyingProcessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-howitworks',
            template: __webpack_require__("../../../../../src/app/buying-process/howitworks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/buying-process/howitworks.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _c || Object])
    ], buyingProcessComponent);
    return buyingProcessComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=howitworks.component.js.map

/***/ }),

/***/ "../../../../../src/app/buying-process/howitworks.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buyingProcessModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__howitworks_component__ = __webpack_require__("../../../../../src/app/buying-process/howitworks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var howitworksRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'buying-process',
        component: __WEBPACK_IMPORTED_MODULE_2__howitworks_component__["a" /* buyingProcessComponent */]
    }
]);
var buyingProcessModule = (function () {
    function buyingProcessModule() {
    }
    buyingProcessModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* SharedModule */],
                howitworksRouting
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__howitworks_component__["a" /* buyingProcessComponent */]
            ],
            providers: []
        })
    ], buyingProcessModule);
    return buyingProcessModule;
}());

//# sourceMappingURL=howitworks.module.js.map

/***/ }),

/***/ "../../../../../src/app/careers/careers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/careers/careers.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header width bg - fixed version -->\n    <section class=\"hfsl-banner event-listing-hero\" [ngStyle]=\"{'background-image': 'url(' + bgimg + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n        <div class=\"overlay\"></div>\n        <div class=\"context\">\n            <div class=\"container\">\n                 <h2>{{careers.heroHeading}}</h2>\n                 <p>{{careers.heroText}}</p>\n            </div>\n        </div>\n    </section>\n    <!-- Header width bg - fixed version end -->\n\t\n\t<!--our values section - fixed version-->\n    <section class=\"our-values-warp careers-page\">\n        <div class=\"container\">\n            <h2>{{ourValues.ourValueHeading}}</h2>\n            <ul>\n               <li>\n                 <div class=\"img-box\"><img src=\"{{image1}}\" alt=\"\"></div>\n                 <h4>{{ourValues.title1}}</h4>  \n               </li>\n               <li>\n                 <div class=\"img-box\"><img src=\"{{image2}}\" alt=\"\"></div>\n                 <h4>{{ourValues.title2}}</h4>  \n               </li>\n               <li>\n                 <div class=\"img-box\"><img src=\"{{image3}}\" alt=\"\"></div>\n                 <h4>{{ourValues.title3}}</h4>  \n               </li>\n               <li>\n                 <div class=\"img-box\"><img src=\"{{image4}}\" alt=\"\"></div>\n                 <h4>{{ourValues.title4}}</h4>  \n               </li> \n               <!--li>\n                 <div class=\"img-box\"><img src=\"{{image5}}\" alt=\"\"></div>\n                 <h4>{{ourValues.title5}}</h4>  \n               </li>\n               <li>\n                 <div class=\"img-box\"><img src=\"{{image6}}\" alt=\"\"></div>\n                 <h4>{{ourValues.title6}}</h4>  \n               </li>\n               <li>\n                 <div class=\"img-box\"><img src=\"{{image7}}\" alt=\"\"></div>\n                 <h4>{{ourValues.title7}}</h4>  \n               </li>\n               <li>\n                 <div class=\"img-box\"><img src=\"{{image8}}\" alt=\"\"></div>\n                 <h4>{{ourValues.title8}}</h4>  \n               </li--> \n            </ul>\n        </div>\n    </section>\n    <!--our values section - fixed version end-->\n\t\n\t\n\t\n    <!--Video background block-->\n    <section class=\"video-background\">\n        <div class=\"container\">\n            <div class=\"center-info\">\n                <h4 class=\"emp-name\">{{video1.staffName}}</h4>\n                <span class=\"emp-position\">{{video1.staffTitle}}</span>\n                <p>{{video1.introduction}}</p>\n                <div class=\"video-popup-btn\"><a href=\"javascript:void(0);\" class=\"js-modal-btn\" [attr.data-video-id]=\"video1.videoBackgroundUrl\">Watch the video</a></div>\n            </div>\n        </div>\n        <div style=\"display: none\" id=\"video-url\">{{video1.videoBackgroundUrl}}</div>\n    </section>\n    <!--END Video background block-->  \n   \n\n    <!-- start CTA block - fixed version -->\n    <section class=\"cta-block career-block-cta\">\n        <div class=\"container\">\n            <h2 class=\"whithead\">{{careersCTA.ctaHeading}}</h2>\n             <p>{{careersCTA.ctaDescription}}</p>\n            <div class=\"buttons\">\n                <a href=\"{{careersCTA.ctaLeftButtonUrl}}\" class=\"borbtn\">{{careersCTA.ctaLeftButton}}</a>\n                 <!-- <a href=\"#\" class=\"borbtn\"  data-toggle=\"modal\" data-target=\"#cv-modal\">{{careersCTA.ctaRightButton}}</a> -->\n            </div>\n           \n        </div>\n    </section>\n    <!-- start CTA block - fixed version -->"

/***/ }),

/***/ "../../../../../src/app/careers/careers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CareersComponent = (function () {
    function CareersComponent(segment) {
        this.segment = segment;
        this.showData = false;
        this.video1 = {};
        this.ourValues = {};
        this.careers = {};
        this.careersCTA = {};
    }
    CareersComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
        var that = this;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5HrgsmbdNCOMwMk8KmAAye?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.careers = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.Fullwidthbackgroundimage.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.bgimg = data.fields.file.url;
            });
        });
        that.showData = true;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/2zecbysV9yEISmYWYiSMAK?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.ourValues = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.icon1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.icon2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.icon3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image3 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.icon4.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image4 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.icon5.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image5 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.icon6.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image6 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.icon7.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image7 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.icon8.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image8 = data.fields.file.url;
            });
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/pUbvdX7HvU4gWUckWQq04?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.video1 = data.fields;
            $.getScript('js/modal-video.js');
            $.getScript('js/jquery.tubular.1.0.js');
            $.getScript("js/customCarousel.js");
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/3TGc10BLDW2SuAg4a0CAos?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.careersCTA = data.fields;
        });
    };
    CareersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-careers',
            template: __webpack_require__("../../../../../src/app/careers/careers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/careers/careers.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _a || Object])
    ], CareersComponent);
    return CareersComponent;
    var _a;
}());

//# sourceMappingURL=careers.component.js.map

/***/ }),

/***/ "../../../../../src/app/careers/careers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return careersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__careers_component__ = __webpack_require__("../../../../../src/app/careers/careers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var careersRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'careers',
        component: __WEBPACK_IMPORTED_MODULE_2__careers_component__["a" /* CareersComponent */]
    }
]);
var careersModule = (function () {
    function careersModule() {
    }
    careersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* SharedModule */],
                careersRouting
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__careers_component__["a" /* CareersComponent */]
            ],
            providers: []
        })
    ], careersModule);
    return careersModule;
}());

//# sourceMappingURL=careers.module.js.map

/***/ }),

/***/ "../../../../../src/app/community/communities.component.html":
/***/ (function(module, exports) {

module.exports = "  <!--Communities top section-->\n  <section class=\"communities\">\n     <div class=\"container\">\n      <h2>Communities</h2>\n      <p class=\"pera-textbig\">Discover a lifestyle that works for you from 50+ <br /> communities across NSW, QLD and VIC.</p>\n     </div>\n   </section>\n     <!--end of communities top section-->\n\n  <!-- start location map section-->\n  <div class=\"commu-bottom-map\">\n    <div id=\"map-boxmain\">\n        <div id=\"map\">\n          <div class=\"map-btn-main\">\n            <ul>\n              <li (click)=\"newLocation('nsw')\" id=\"nsw\">NSW</li>\n              <li (click)=\"newLocation('qsl')\" id=\"qsl\">QLD</li>\n              <li (click)=\"newLocation('vct')\" id=\"vct\">VIC</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n  </div>\n   \n  \n   \n   \n\n  <!-- start community filter -->\n  <section class=\"community-filter\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-7\"><h2 class=\"heading\">Looking for something specific?</h2></div>\n<!--         <div class=\"col-sm-5 text-right\"><span class=\"chb-cl\">\n          <div class=\"checkbox\" (click)=\"checkitnow()\">\n        <label (click)=\"checkitnow()\" for=\"test1\">\n          <input type=\"checkbox\" id=\"test1\" value=\"\" (click)=\"checkitnow()\">\n          Show only communities with homes for sale\n        </label>\n      </div>\n        </span></div> -->\n        <div class=\"col-sm-5 text-right\">\n          <span class=\"chb-cl\">\n            <div class=\"checkbox\">\n              <input type=\"checkbox\" id=\"check4\" value=\"\">\n              <label for=\"check4\" (click)=\"showHomes()\">Show only communities with homes for sale</label>\n            </div>\n          </span>\n        </div>\n      </div>\n      <div class=\"row margtb\">\n        <div class=\"col-sm-6 search-section\">\n          <div class=\"form-group\">\n          <div class=\"input-group input-group-lg\">\n\n            <div class=\"icon-addon addon-lg\">\n              <input [(ngModel)]=\"filter\" type=\"text\" placeholder=\"Search for a community, suburb or state\" class=\"texts\" id=\"search-com\">\n              <label  class=\"glyphicon glyphicon-search\"></label>\n            </div>\n            <span class=\"input-group-btn\">\n              <button class=\"btn-s\" (click)=\"geoLocation('distance')\" type=\"button\">Go!</button>\n            </span>\n          </div>\n        </div>\n        </div>\n        <div class=\"col-sm-6 text-right checkbox-section\">\n                  <!--   <div class=\"checkbox-main nsw\" \n                    (click)=\"getCommunityList('all')\">\n                        <input type=\"checkbox\" name=\"\" id=\"check1\" checked=\"\">\n                        <label>All</label>\n                    </div> -->\n          <div class=\"checkbox-main nsw\">\n            <input type=\"checkbox\" name=\"\" id=\"check1\" checked=\"\">\n            <label for=\"check1\" (click)=\"getCommunityList('new south wales')\">NSW</label>\n          </div>\n          <div class=\"checkbox-main qld\">\n            <input type=\"checkbox\" name=\"\" id=\"check2\" checked=\"\">\n            <label for=\"check2\" (click)=\"getCommunityList('queensland')\">QLD</label>\n          </div>\n          <div class=\"checkbox-main vic\">\n            <input type=\"checkbox\" name=\"\" id=\"check3\" checked=\"\">\n            <label for=\"check3\" (click)=\"getCommunityList('victoria')\">VIC</label>\n          </div>\n        </div>\n      </div>\n      <!--  dropdown filter -->\n      <div class=\"row sortinglisting\">\n        <div class=\"col-sm-6 showing\" *ngIf=\"(communityListing| filter:filter).length\">\n          <p>Showing <span>{{(communityListing | filter:filter).length}} of {{originalLength}}</span> communities</p>\n        </div>\n        <div class=\"col-sm-6 showing\" *ngIf=\"!(communityListing| filter:filter).length\"><p> No result found. Please search another community.</p></div>\n        <div class=\"col-sm-6 sorted text-right\"> \n\n         <select class=\"selectpicker-dropdown\" \n         (change)=\"sort($event.target.value)\">\n          <!-- <option value=\"\"></option> -->\n          <option value=\"orderby_name\">Sort A to Z</option>\n          <option value=\"distance\"> Sort by distance</option>\n          </select>\n        </div>\n      </div>\n      <!--  end of dropdown filter -->\n    </div>\n  </section>\n  <!-- end community filter -->\n   \n  <!--listing card -->  \n    <section class=\"lookingsomthing-warp\">\n    <div class=\"container\">\n      <div class=\"inner-box-warp\">\n        <ul class=\"append-data\">\n          <!-- product detail card -->        \n          <li class=\"detail-list\" *ngFor=\"let community of communityListing | orderBy: key | filter:filter; let i = index\">\n              <div class=\"img-slider-warp\">\n                  <div class=\"sl-box\">\n                      <div id=\"carousel2{{i}}\" class=\"carousel slide\" data-interval=\"false\">\n                          <div class=\"carousel-inner\">                                    \n                              <div class=\"item active\">\n                                  <img class=\"com-img\" \n                                  [src]=\"community.featured_image.url\" \n                                  alt=\"\">\n                              </div>                                  \n                              <div class=\"item\" *ngFor=\"let _image of community.community_images\">\n                                  <img class=\"com-img\" \n                                  [src]=\"_image.community_images.url\" \n                                  alt=\"\">\n                              </div>\n                          </div> \n                          <a class=\"left carousel-control\" href=\"#carousel2{{i}}\" data-slide=\"prev\" style=\"top: 26%;\">‹</a>\n                          <a class=\"right carousel-control\" href=\"#carousel2{{i}}\" data-slide=\"next\" style=\"top: 26%;\">›</a>\n                      </div>\n                  </div>\n                  <div class=\"circle-icon\">\n                      <img [src]=\"community.community_icon.url\" alt=\"\"></div>\n              </div>\n              <a routerLink=\"/community/{{community.slug}}\">\n                   <div>\n                      <h3 id=\"aspley\" [ngStyle]= \"{'color':community.primary_color}\">{{community.first_name}}<span> {{community.last_name}}</span></h3>  \n                       <p>{{community.street_address}}</p>\n                       <h4 *ngIf=\"community.home_from\"><i class=\"home-icon\"></i> Homes from ${{community.home_from | number:'1.0'}}</h4>\n                  </div>\n              </a>           \n          </li>\n        </ul>\n      </div>\n    </div>\n  </section>\n  <!--End -->\n    \n    <!-- start CTA block -->\n  <section class=\"cta-block scroll\">\n        <div class=\"container\">\n            <h2 class=\"whithead\">Let's chat about your next home <br> and discuss if Gateway is right <br>for you.</h2>\n            <div class=\"buttons\">\n                <a href='#' data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal-static\" class=\"borbtn\">Get an info pack</a> \n            </div>\n            <p>Or give us a call on 1300 361 311.</p>\n        </div>\n    </section>\n      <!-- Get an info pack Modal -->\n  <div class=\"modal fade\" id=\"get-an-info-pack-modal-static\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body no-pad\">\n                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\" >&times;</button>\n                    <div class=\"col-sm-5 col-md-5 right-img-main no-pad hidden-xs hidden-sm\">\n                        <div class=\"right-img-full\">\n                            <div class=\"right-img-full\" style=\"background: url(images/generic-info.jpg) no-repeat center;\"></div>\n                            <!--  <img \n                             [src]=\"comunitylatestDetail.featured_image.url\" alt=\"\" style= \n                             \"height: -webkit-fill-available;\"> -->\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-7 getinfowp\">\n                   \n                        <div class=\"wp-main\">\n                         <h3 style=\"color: #105dac;\">\n                            <div class=\"title-img-round\">\n                                <img src=\"images/Gateway-icon-only-square.png\" alt=\"\" class=\"\">    \n                            </div>\n                            Get an info pack\n                         </h3>\n                         <!-- <div class=\"profile-row\">\n                            <div class=\"profile-img\"><img src=\"images/img11.png\" alt=\"\"></div> \n                            <p><strong> Melinda James</strong> | +61 421 223 221 | melinda.james@gty.com.au</p>\n                         </div> -->\n                         <div class=\"divider\"></div>\n<!--                         <div class=\"form-getinfo-succes\">\n                            <div class=\"row\">\n                            <div class=\"col-sm-2\"><img src=\"images/form-sucess.png\" alt=\"\"></div>    \n                            <div class=\"col-sm-10\"><p class=\"pera-textbig\"> Thank you for your enquiry. We've emailed you the info pack. You can view it by clicking the button below.</p>\n                            <button (click)=\"infoPdf(genericInfo.info_pack?.info_pdf.url)\" \n                             class=\"btn btn-org\">View the info pack Now</button></div>\n                            </div>\n                        </div> -->\n                         <div class=\"form-wp-getinfo\">\n                             <div class=\"row\">\n                                <!-- form starts here-->\n                                <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\" \n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required> \n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>  \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\" \n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\" \n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\" #plan=\"ngModel\">   \n                                        </div>\n                                    </div>  \n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\" \n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\" \n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>  \n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p> \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\" \n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div> \n                                    <div class=\"col-sm-12\">\n                                    <button  class=\"btn btn-org\"  id=\"send-sucess\"\n                                     (click)=\"getInfo(infoForm)\" style=\"background: #105dac; border-color:#105dac;\" \n                                    (mouseover)=\"changeColor($event)\" \n                                    (mouseout)=\"changeColor($event)\" type=\"submit\">Get an info pack</button>\n                                    </div>\n                                </form>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end  Get an info pack Modal -->"

/***/ }),

/***/ "../../../../../src/app/community/communities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return communitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mapbox_js__ = __webpack_require__("../../../../mapbox.js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mapbox_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mapbox_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var communitiesComponent = (function () {
    function communitiesComponent(router, fb, apiService, sharedService, segment) {
        this.router = router;
        this.fb = fb;
        this.apiService = apiService;
        this.sharedService = sharedService;
        this.segment = segment;
        this.errors = {};
        this.isSubmitting = false;
        this.communityListing = [];
        this.communityLists = [];
        this.filter = '';
        this.newmap = null;
        this.headerTitle = { first_name: 'logo', primary_color: '#003C6B', last_name: 'Lifestyle', secondary_color: '#62717f' };
        //sorting
        this.key = 'orderby_name'; //set default
        this.reverse = false;
        this.isDataAvailable = false;
        this.states = ['new south wales', 'queensland', 'victoria'];
        this.homes = false;
        this.submitted = false;
        this.info = { firstname: '', lastname: '', phone: '', email: '' };
        // create form group using the form builder
        this.settingsForm = this.fb.group({
            image: '',
            username: '',
            bio: '',
            email: '',
            password: ''
        });
        // Optional: subscribe to changes on the form
        // this.settingsForm.valueChanges.subscribe(values => this.updateUser(values));
    }
    communitiesComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    communitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.getScript("js/leaflet.markercluster.js");
        window.scrollTo(0, 0);
        this.sharedService.publishData(this.headerTitle);
        this.segment.page().then(function () { return console.log("Event sended"); });
        //fetching the list of all communities
        this.apiService.getCommunitiesList('/communities').subscribe(function (res) {
            _this.isDataAvailable = true;
            _this.communityListing = res.communities;
            _this.originalLength = res.communities.length;
            console.log(_this.communityListing);
            for (var i = 0; i < _this.communityListing.length; i++) {
                _this.communityListing[i].orderby_name = _this.communityListing[i].first_name.toLowerCase();
            }
            window.localStorage.setItem('communityListing', JSON.stringify(_this.communityListing));
            _this.updateMap();
            _this.geoLocation("1");
            _this.getGenericInfopack();
        }, function (err) {
            console.log(err);
        });
    };
    communitiesComponent.prototype.handleLocationError = function (browserHasGeolocation, infoWindow, pos, map) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    };
    communitiesComponent.prototype.geoLocation = function (key) {
        var that = this;
        if (this.communityListing.length) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    for (var i = 0; i < that.communityListing.length; i++) {
                        that.communityListing[i].distance = that.calculateDistance(that.communityListing[i].latitude, pos.lat, that.communityListing[i].longitude, pos.lng);
                    }
                    window.localStorage.setItem('communityListing', JSON.stringify(that.communityListing));
                    if (key == 'distance') {
                        that.key = key;
                        that.reverse = !that.reverse;
                    }
                }, function () {
                });
            }
        }
    };
    communitiesComponent.prototype.calculateDistance = function (lat1, lat2, long1, long2) {
        var p = 0.017453292519943295; // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c((lat1) * p) * (1 - c(((long1 - long2) * p))) / 2;
        var dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
        return dis;
    };
    communitiesComponent.prototype.updateMap = function () {
        var content, marker;
        __WEBPACK_IMPORTED_MODULE_5_mapbox_js__["mapbox"].accessToken = 'pk.eyJ1Ijoic2VtYWwtemVhbG91cyIsImEiOiJjaWt4bHNoa20wMHp1dWFtM20yZjIzYXg0In0.MkDy4_XRL-MKTWHBh7swDw';
        var map = __WEBPACK_IMPORTED_MODULE_5_mapbox_js__["mapbox"].map('map', 'mapbox.streets').setView([-32.105143, 149.209900], 6).on('dblclick', function (e) {
            // Zoom exactly to each double-clicked point
            map.setView(e.latlng, map.getZoom() + 2);
        });
        this.newmap = map;
        if (map.scrollWheelZoom) {
            map.scrollWheelZoom.disable();
        }
        var width = $(window).width();
        if (width < 812) {
            map.scrollWheelZoom.disable();
            map.doubleClickZoom.disable();
            map.dragging.disable();
            if (map.tap)
                map.tap.disable();
        }
        else {
            map.scrollWheelZoom.disable();
            map.doubleClickZoom.enable();
            map.dragging.enable();
            if (map.tap)
                map.tap.enable();
        }
        var that = this;
        setTimeout(function () {
            var markers = new __WEBPACK_IMPORTED_MODULE_5_mapbox_js__["MarkerClusterGroup"]();
            var title = '<span>Sussex Inlet</span> by Gateway Lifestyle';
            var link = 'community-detail-page-final.html';
            for (var i = 0; i < that.communityListing.length; i++) {
                content = '<a href= "/community/' + that.communityListing[i].slug + '"><div class="map_image"><div class="img_outer_div"><img src="' + that.communityListing[i].featured_image.url + '"></div><div class="circle-icon"><img src="' + that.communityListing[i].community_icon.url + '" alt=""></div></div><div class="map_title">' + '<span style="color:' + that.communityListing[i].primary_color + '">' + that.communityListing[i].first_name + '</span> ' + that.communityListing[i].last_name + ' </div><div class="map_state">' + that.communityListing[i].suburb + ', ' + that.communityListing[i].state + '</div></a>';
                marker = __WEBPACK_IMPORTED_MODULE_5_mapbox_js__["marker"](new __WEBPACK_IMPORTED_MODULE_5_mapbox_js__["LatLng"](that.communityListing[i].latitude, that.communityListing[i].longitude), {
                    icon: __WEBPACK_IMPORTED_MODULE_5_mapbox_js__["mapbox"].marker.icon({ 'marker-symbol': 'circle', 'marker-size': 'large', 'marker-color': '#003c6b', 'title': 'a[2]', 'background': '#003c6b' }),
                });
                marker.bindPopup(content);
                markers.addLayer(marker);
            }
            map.addLayer(markers);
        }, 4000);
    };
    communitiesComponent.prototype.newLocation = function (state) {
        if (state == "nsw") {
            // original this.newmap.setView([-32.7506344,145.5529504],7);
            this.newmap.setView([-31.425165, 153.076421], 6);
            $("#nsw").addClass('active-map');
            $("#qsl").removeClass('active-map');
            $("#vct").removeClass('active-map');
        }
        else if (state == "qsl") {
            // original this.newmap.setView([-19.1390567,141.3202005],6);
            this.newmap.setView([-27.456412, 153.100749], 8);
            $("#qsl").addClass('active-map');
            $("#nsw").removeClass('active-map');
            $("#vct").removeClass('active-map');
        }
        else if (state == "vct") {
            this.newmap.setView([-36.5607967, 143.2413592], 7);
            $("#vct").addClass('active-map');
            $("#nsw").removeClass('active-map');
            $("#qsl").removeClass('active-map');
        }
    };
    communitiesComponent.prototype.gotto = function (page) {
        this.router.navigateByUrl('/community/' + page);
    };
    communitiesComponent.prototype.getCommunityList = function (value) {
        //reset search
        if ((this.states).indexOf(value) == -1) {
            this.states.push(value);
        }
        else {
            (this.states).splice((this.states).indexOf(value), 1);
        }
        this.checkFilters();
    };
    communitiesComponent.prototype.checkitnow = function (page) {
        this.router.navigateByUrl('/community/' + page);
        console.log('i am checked');
    };
    /*eventSearch(ev:any){
      console.log(ev);
      let communitiesList = JSON.parse(window.localStorage.getItem('communityListing'));
      this.communityListing = communitiesList;
    }*/
    communitiesComponent.prototype.getHomeForsale = function () {
        this.communityLists = [];
        for (var i = 0; i < this.communityListing.length; i++) {
            if (this.communityListing[i].hfs == true) {
                this.communityLists.push(this.communityListing[i]);
            }
        }
    };
    communitiesComponent.prototype.showHomes = function () {
        this.homes = this.homes == true ? false : true;
        this.checkFilters();
    };
    communitiesComponent.prototype.checkFilters = function () {
        if (this.states.length != 0) {
            this.communityListing = [];
            var communitiesData = JSON.parse(window.localStorage.getItem('communityListing'));
            for (var i = 0; i < communitiesData.length; i++) {
                if (this.homes) {
                    if ((this.states).indexOf(communitiesData[i].state.toLowerCase()) != -1 && communitiesData[i].home_for_sale > 0) {
                        this.communityListing.push(communitiesData[i]);
                    }
                }
                else {
                    if ((this.states).indexOf(communitiesData[i].state.toLowerCase()) != -1) {
                        this.communityListing.push(communitiesData[i]);
                    }
                }
            }
        }
        else {
            this.communityListing = [];
            var communitiesData = JSON.parse(window.localStorage.getItem('communityListing'));
            if (!this.homes) {
                this.communityListing = communitiesData;
            }
            else {
                for (var i = 0; i < communitiesData.length; i++) {
                    if (communitiesData[i].home_for_sale > 0) {
                        this.communityListing.push(communitiesData[i]);
                    }
                }
            }
        }
    };
    communitiesComponent.prototype.getGenericInfopack = function () {
        var _this = this;
        this.apiService.get('/pdf_info_packs/featured_pack').subscribe(function (res) {
            _this.genericInfo = res;
            window.localStorage.setItem('generic_url', _this.genericInfo.info_pack.info_pdf.url);
        });
    };
    communitiesComponent.prototype.getInfo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var userData = {};
            userData.firstname = this.info.firstname;
            userData.lastname = this.info.lastname;
            userData.plan = this.info.plan;
            userData.phone = this.info.phone;
            userData.email = this.info.email;
            userData.description = this.info.area;
            window.localStorage.setItem('generic_data', JSON.stringify(userData));
            console.log('success!');
            this.segment.track('GetInfoPack', {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area
            }).then(function () {
                window.localStorage.setItem('genericCheck', '1');
                _this.router.navigateByUrl('/success');
                $('#get-an-info-pack-modal-static')[0].style.display = 'none';
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                console.log("Event sended");
            });
        }
        else {
            console.log('validation failed!');
        }
    };
    communitiesComponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : '#105dac';
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#ffffff';
    };
    communitiesComponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#414952';
    };
    communitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'community-page',
            template: __webpack_require__("../../../../../src/app/community/communities.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["h" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["h" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _e || Object])
    ], communitiesComponent);
    return communitiesComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=communities.component.js.map

/***/ }),

/***/ "../../../../../src/app/community/communities.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return communitiesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_markdown__ = __webpack_require__("../../../../angular2-markdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__community_resolver__ = __webpack_require__("../../../../../src/app/community/community-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__community_slug_resolver__ = __webpack_require__("../../../../../src/app/community/community-slug-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__communities_component__ = __webpack_require__("../../../../../src/app/community/communities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__community_component__ = __webpack_require__("../../../../../src/app/community/community.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_safe_pipe__ = __webpack_require__("../../../../safe-pipe/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_safe_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_safe_pipe__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var settingsRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'communities',
        component: __WEBPACK_IMPORTED_MODULE_5__communities_component__["a" /* communitiesComponent */]
    },
    {
        path: ':slug',
        component: __WEBPACK_IMPORTED_MODULE_6__community_component__["a" /* communityComponent */],
        resolve: {
            community: __WEBPACK_IMPORTED_MODULE_3__community_resolver__["a" /* CommuntyResolver */]
        }
    },
    {
        path: 'community/:slug',
        component: __WEBPACK_IMPORTED_MODULE_6__community_component__["a" /* communityComponent */],
        resolve: {
            community: __WEBPACK_IMPORTED_MODULE_4__community_slug_resolver__["a" /* CommuntySlugResolver */]
        }
    }
]);
var communitiesModule = (function () {
    function communitiesModule() {
    }
    communitiesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_angular2_markdown__["a" /* MarkdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__shared__["g" /* SharedModule */],
                settingsRouting,
                __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__["Ng2SearchPipeModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng2_order_pipe__["Ng2OrderModule"],
                __WEBPACK_IMPORTED_MODULE_10_safe_pipe__["SafePipeModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__communities_component__["a" /* communitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__community_component__["a" /* communityComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__community_resolver__["a" /* CommuntyResolver */],
                __WEBPACK_IMPORTED_MODULE_4__community_slug_resolver__["a" /* CommuntySlugResolver */]
            ]
        })
    ], communitiesModule);
    return communitiesModule;
}());

//# sourceMappingURL=communities.module.js.map

/***/ }),

/***/ "../../../../../src/app/community/community-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommuntyResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommuntyResolver = (function () {
    function CommuntyResolver(communitiesService, router) {
        this.communitiesService = communitiesService;
        this.router = router;
    }
    CommuntyResolver.prototype.resolve = function (route, state) {
        //   return this.articlesService.get(route.params['slug'])
        //          .map(
        //            article => {
        //              if (this.userService.getCurrentUser().username === article.author.username) {
        //                return article;
        //              } else {
        //                this.router.navigateByUrl('/');
        //              }
        //            }
        //          )
        //          .catch((err) => this.router.navigateByUrl('/'));
        var slugComponent = this.communitiesService.get(route.params['slug']);
        if (slugComponent) {
            // return slugComponent;
            // this.router.navigateByUrl('/community/'+slugComponent);
        }
        else {
            this.router.navigateByUrl('/pagenotfound');
        }
        return slugComponent;
    };
    CommuntyResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* CommunitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* CommunitiesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], CommuntyResolver);
    return CommuntyResolver;
    var _a, _b;
}());

//# sourceMappingURL=community-resolver.js.map

/***/ }),

/***/ "../../../../../src/app/community/community-slug-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommuntySlugResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommuntySlugResolver = (function () {
    function CommuntySlugResolver(communitiesService, router) {
        this.communitiesService = communitiesService;
        this.router = router;
    }
    CommuntySlugResolver.prototype.resolve = function (route, state) {
        var slugComponent = this.communitiesService.get(route.params['slug']);
        if (slugComponent) {
            // return slugComponent;
            // this.router.navigateByUrl('/community/'+slugComponent);
        }
        else {
            this.router.navigateByUrl('/pagenotfound');
        }
        return slugComponent;
    };
    CommuntySlugResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* CommunitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* CommunitiesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], CommuntySlugResolver);
    return CommuntySlugResolver;
    var _a, _b;
}());

//# sourceMappingURL=community-slug-resolver.js.map

/***/ }),

/***/ "../../../../../src/app/community/community.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- Media gallery -->\n    <div class=\"media-gallery premium \">\n        <!-- hero display -->\n        <div class=\"banner-res\">\n            <div class=\"ban-slider\">\n                <img [src]=\"comunitylatestDetail.featured_image.url\">\n            </div>\n            <!-- responsive community logo goes here -->\n            <div class=\"sm-imgba\">\n            <img [src]=\"comunitylatestDetail.community_logo.url\"></div>\n            <!-- responsive community logo goes here -->\n        </div>\n        <!-- end of hero display -->\n        <!-- modal triggers -->\n        <!-- <div class=\"all-photo-btn\"> -->\n            <div class=\"container\">\n                <a href=\"javascript:void(0);\" id=\"firstImageTrigger\" data-eventname=\"photoView\" class=\"aphotos detail_btn\" \n            (mouseover)=\"changeColor($event)\" \n            (mouseout)=\"changeColor($event)\" [ngStyle]=\"{'color': comunitylatestDetail.primary_color}\">All Photos</a>\n            </div>\n        <!-- </div> -->\n        <!-- modal assets here -->\n        <ul id=\"lightGallery\" class=\"gallery hidden-xs\">\n            <li class=\"gallery-image\" attr.data-img-src=\"{{comunitylatestDetail.featured_image.url}}\" attr.data-src=\"{{comunitylatestDetail.featured_image.url}}\">\n                <img [src]=\"comunitylatestDetail.featured_image.url\" alt=\"\" />\n            </li>\n            <!-- <div *ngIf = \"comunitylatestDetail.community_images.length\"> -->\n                <li class=\"gallery-image\" *ngFor=\"let _image of comunitylatestDetail.community_images\" attr.data-img-src=\"{{_image.community_images.url}}\" attr.data-src=\"{{_image.community_images.url}}\">\n                <!-- <img [src]=\"_image.community_images.url\" alt=\"\" /> -->\n                </li>\n            <!-- </div> -->\n        </ul>\n        <!-- end of modal assets here -->\n        <div id=\"galleryLoader\" class=\"image-placeholder\">\n            <div class=\"image-loader-wrap with-icon animated\">\n                <div class=\"image-loader\"></div>\n                <span class=\"f-icon\">\n               <span class=\"icon domain-icon-ic_home\"></span>\n                </span>\n            </div>\n        </div>\n        <!-- end of modal triggers -->\n    </div>\n    <!-- end of Media gallery -->\n\n    <!--Belong section start-->\n    <section class=\"belong-section\">\n        <div class=\"secondary-nav-mobile\" *ngIf= \"comunityDetail.info_pack?.info_pdf?.url\">\n            <a href=\"tel:1300361311\" class=\"nav-mobile-left\" [ngStyle]=\"{'background': comunitylatestDetail.primary_color}\">\n                <div class=\"mob-data\">\n                    <div class=\"mob-img\">\n                        <img src=\"images/call.png\" />\n                    </div>\n                    <span>call</span>\n                </div>\n            </a>\n            <a href=\"#\" class=\"nav-mobile-right\" data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal\" [ngStyle]=\"{'background': comunitylatestDetail.primary_color} \" >\n                <div class=\"mob-data\">\n                    <div class=\"mob-img\">\n                        <img src=\"images/get-an-info.png\" />\n                    </div>\n                    <span>get an info pack</span>\n                </div>\n            </a>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-7 w642 col-md-9\">\n                    <div class=\"card\">\n                        <ul class=\"nav nav-tabs resno\" role=\"tablist\">\n                            <li class=\"active sc\" *ngIf=\"comunitylatestDetail?.community_title || comunitylatestDetail?.community_description\"><a\n                                    [ngStyle]=\"{'color': comunitylatestDetail.primary_color}\"\n                                (click)=\"scrollTo(WhyLive)\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Why live here?<div [ngStyle]=\"{'background': comunitylatestDetail.primary_color}\" class=\"bottom-line\"></div></a></li>\n                            <li class=\"sc\" *ngIf=\"comunityDetail?.homes.length\"><a (mouseover)=\"after($event)\" \n                        (mouseout)=\"after($event)\"\n                                (click)=\"scrollTo(HomeSales)\">Homes for sale<div style= \"background: none\" class=\"bottom-line\"></div></a></li>\n                            <li class=\"sc\" *ngIf=\"comunityDetail?.events.length\"><a (mouseover)=\"after($event)\" \n                        (mouseout)=\"after($event)\"\n                                (click)=\"scrollTo(Opendays)\">Open days<div style= \"background: none\" class=\"bottom-line\"></div></a></li>\n                            <li class=\"sc\"><a (mouseover)=\"after($event)\" \n                        (mouseout)=\"after($event)\"\n                                (click)=\"scrollTo(Location)\">Location<div style= \"background: none\" class=\"bottom-line\"></div></a></li>\n                        </ul>\n                        <!-- Tab panes -->\n                        <div class=\"tab-content\">\n                            <div role=\"tabpanel\" class=\"tab-pane active sc\" id=\"home\" *ngIf=\"comunitylatestDetail?.community_title || comunitylatestDetail?.community_description\">\n                                <h3 class=\"big-heading\" \n                                [ngStyle]=\"{'color': comunitylatestDetail.primary_color}\">{{comunitylatestDetail?.community_title}}</h3>\n                                <div class=\"read-more-hide\" id=\"mark\">\n\n                                    <markdown  [data]=\"comunitylatestDetail?.community_description\"></markdown>\n\n                                    \n                                </div>\n                                 <a id=\"read-more\" class=\"read-more\" (click)=\"readMore()\"> <span>Read More</span></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-5 col-md-3 right-top glance-block\">\n                    <div class=\"right-box-top\">\n                        <div class=\"glance-logo\">\n                            <img [src]=\"comunitylatestDetail.community_logo.url\" \n                            alt=\"\">\n                        </div>    \n                        <h3 *ngIf=\"comunitylatestDetail.home_from\">Homes from ${{comunitylatestDetail.home_from | number:'1.0'}}</h3>\n                        <h3>Call 1300 361 311</h3>\n                        <div class=\"bot\">\n                            <div class=\"img-b\"><img [src]=\"comunitylatestDetail.salesperson_image.url\" alt=\"\"></div>\n                            <div class=\"rt-col\">\n                                <p><strong>{{comunitylatestDetail.salesperson_name}}</strong></p>\n                                <p>{{comunitylatestDetail.phone}}</p>\n                                <p>{{comunitylatestDetail.email}}</p>\n                            </div>\n\n                        </div>\n                        <button (mouseover)=\"changeInfoColor($event)\" \n                        (mouseout)=\"changeInfoColor($event)\" id=\"info-com\" class=\"btn btn-org\" data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal\" \n                        [ngStyle]=\"{'background-color': comunitylatestDetail.primary_color,'border-color':comunitylatestDetail.primary_color}\" *ngIf= \"comunityDetail.info_pack?.info_pdf?.url\">Get an info pack</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- end of Belong section start-->\n\n    <!-- Why live here -->\n    <section class=\"why-live-here pad-b0\" [hidden]=\"!comunityDetail.why_live_heres.length\" #WhyLive>\n        <!-- heading starts here -->\n        <div class=\"container\">\n            <h2 class=\"heading\">Why live here?</h2>\n            <div class=\"divider\">\n            </div>\n        </div>\n        <!-- heading starts here -->\n        <!--  Sliders starts here -->\n        <div class=\"slider\">\n            <div class=\"container\">\n                <div id=\"myCarousel\" class=\"carousel slide\"  data-interval=\"false\" data-ride=\"carousel\">\n                    <!-- Wrapper for slides -->\n                    <div class=\"carousel-inner\" id=\"why-live\">\n                        <!-- <div class=\"item active\">\n                            <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/eXY2Mda-Hlw\" frameborder=\"0\" allowfullscreen=\"\" kwframeid=\"1\">\n                            </iframe>\n                            <h2 class=\"heading-orang\">Modern Facilities</h2>\n                            <p class=\"pera-textbig\">\n                                Geteway Lifestyle Aspley is popular with those on the cusp of retirement <br>\n                                 and those who are newly retired, thanks to its urban location and ease of <br>\n                                 access to transport option. You can enjoy all the benefits of downsizing <br>\n                                your home while still enjoying every modern convenience.\n                            </p>\n                        </div> -->\n                        <div class=\"item\" *ngFor=\"let why_live_here of comunityDetail.why_live_heres; let i=index\"  [ngClass]=\"{active: i==0}\">\n                            <iframe *ngIf=\"!why_live_here.image_present\" width=\"100%\" height=\"100%\" [src]=\"why_live_here.youtube_url_link | safe: 'resourceUrl'\" frameborder=\"0\" allowfullscreen=\"\" kwframeid=\"1\">\n                            </iframe>\n                            <img *ngIf=\"why_live_here.image_present\" [src]='why_live_here.image.url'>\n                            <h2 class=\"heading-orang\" [ngStyle]=\"{'color': comunitylatestDetail.primary_color}\">{{why_live_here.title}}</h2>\n                            <p class=\"pera-textbig\">\n                            <markdown>{{why_live_here.description}}</markdown>\n                               \n                            </p>\n                        </div>\n                    </div>\n                    <!-- Left and right controls -->\n                    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n                    <span class=\"fa fa-chevron-left glyphicon-chevron-left\"></span>\n                    <span class=\"sr-only\">Previous</span>\n                    </a>\n                    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n                    <span class=\"fa fa-chevron-right glyphicon-chevron-right\"></span>\n                    <span class=\"sr-only\">Next</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <!--  end Sliders starts here -->\n    </section>\n    <!-- end of Why live here -->\n\n    <!-- Start Home for sale at Aspley Section-->\n    <section class=\"sale-at-Aspley padbot0 margbot80\" id=\"Homes-for-sale\" #HomeSales [hidden]= \"!comunityDetail?.homes.length\">\n        <div class=\"container\">\n            <div class=\"card\">\n                <h2 class=\"heading\">Homes in this community</h2>\n                <ul class=\"nav nav-tabs right-tab right-sidetab\" role=\"tablist\">\n                    <li role=\"presentation\" class=\"active\">\n                        <a href=\"#All-homes\" aria-controls=\"All-homes\" role=\"tab\" data-toggle=\"tab\" [ngStyle]=\"{'color': comunitylatestDetail?.primary_color}\">All homes<div [ngStyle]=\"{'background': comunitylatestDetail?.primary_color}\" class=\"bottom-line\"></div></a>\n                    </li>\n                    <li role=\"presentation\" *ngIf=\"newHomes?.length\">\n                        <a href=\"#New-Homes\" aria-controls=\"New-Homes\" role=\"tab\" data-toggle=\"tab\" (mouseover)=\"after($event)\" \n                        (mouseout)=\"after($event)\">New Homes<div style=\"background: none\" class=\"bottom-line\"></div></a>\n                    </li>\n                    <li role=\"presentation\" *ngIf=\"preLoved?.length\">\n                        <a href=\"#Pre-loved-homes\" aria-controls=\"Pre-loved-homes\" role=\"tab\" data-toggle=\"tab\" (mouseover)=\"after($event)\" \n                        (mouseout)=\"after($event)\">Pre-loved homes<div style=\"background: none\" class=\"bottom-line\"></div></a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        \n          <div class=\"tab-content\">\n            <!-- all homes tab -->\n            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"All-homes\">\n                <div class=\"center slider sale-box\">                    \n                    <div *ngFor=\"let home of comunityDetail?.homes\">\n                        <li class=\"width-fullnomarg\">\n                            <div class=\"img-show-box\">\n                                <div class=\"homefor-sale-box-img\">\n                                <a routerLink=\"/homes-for-sale/{{home.id}}\"><img *ngIf=\"home?.images?.length\" \n                                    [src]=\"home.images[0]\" alt=\"\"></a>\n                                </div>\n                                <a routerLink=\"/homes-for-sale/{{home.id}}\"><h4 [ngStyle]=\"{'color': comunitylatestDetail?.primary_color}\">{{home.address}}</h4></a>\n                               <a *ngIf=\"home?.list_price\" routerLink=\"/homes-for-sale/{{home.id}}\"> <p>${{home.list_price | number : '1.0'}}</p> </a>                           \n                            </div>\n\n                        </li>\n                    </div>         \n                </div>\n            </div>\n            <!-- end of all homes tab -->\n            <!-- new home tab -->\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"New-Homes\" *ngIf=\"newHomes?.length\">\n                <div class=\"center slider sale-box\">                    \n                    <div *ngFor=\"let new of newHomes\">\n                        <li class=\"width-fullnomarg\">\n                            <div class=\"img-show-box\">\n                                <div class=\"homefor-sale-box-img\">\n                                <a routerLink=\"/homes-for-sale/{{new.id}}\"><img *ngIf=\"new?.images?.length\" [src]=\"new.images[0]\" alt=\"\"></a>\n                                </div>\n                                <a routerLink=\"/homes-for-sale/{{new.id}}\"><h4 [ngStyle]=\"{'color': comunitylatestDetail?.primary_color}\">{{new.address}}</h4></a> \n                                <a *ngIf=\"new?.list_price\" routerLink=\"/homes-for-sale/{{new.id}}\"> <p>${{new.list_price | number : '1.0'}}</p> </a>                            \n                            </div>\n\n                        </li>\n                    </div>          \n                </div>\n            </div>\n            <!-- end of new home tab -->\n            <!-- preloved tab -->\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"Pre-loved-homes\" *ngIf=\"preLoved?.length\">\n                <div class=\"center slider sale-box\">                    \n                    <div *ngFor=\"let loved of preLoved\">\n                        <li class=\"width-fullnomarg\">\n                            <div class=\"img-show-box\">\n                                <div class=\"homefor-sale-box-img\">\n                                <a routerLink=\"/homes-for-sale/{{loved.id}}\"><img *ngIf=\"loved?.images?.length\" \n                                    [src]=\"loved.images[0]\" alt=\"\"></a>\n                                </div>\n                                <a routerLink=\"/homes-for-sale/{{loved.id}}\"><h4 [ngStyle]=\"{'color': comunitylatestDetail?.primary_color}\">{{loved.address}}</h4></a>\n                                 <a *ngIf=\"loved?.list_price\" routerLink=\"/homes-for-sale/{{loved.id}}\"> <p>${{loved.list_price | number : '1.0'}}</p> </a>                             \n                            </div>\n\n                        </li>\n                    </div>\n                </div> \n            </div>\n            <!-- ennd of preloved tab -->\n        </div>  \n        \n        <div class=\"container\">\n             <div class=\"bot-but\">\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\" (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\"><i class=\"icon\"></i>Show me all {{comunityDetail?.homes.length}} homes</a>\n            </div>\n        </div>\n        <!-- Tab panes -->\n\n    </section>\n    <!-- end Home for sale at Aspley Section-->\n\n \n    <!-- start Community Masterplan section -->\n    <section class=\"community-masterplan\" *ngIf=\"comunitylatestDetail.masterplan_pdf?.url || comunitylatestDetail.masterplan_image?.url || comunitylatestDetail.legend_image?.url\">\n        <div class=\"container\">\n            <div class=\"top-file-lw\">\n                <h2 class=\"heading\">Community Masterplan</h2>\n               <!--  PDF link goes here -->\n                <a *ngIf=\"comunitylatestDetail.masterplan_pdf?.url\" href=\"https://www.admin.gatewaylifestyle.com.au{{comunitylatestDetail.masterplan_pdf.url}}\" target=\"_blank\"><i></i> Download PDF</a>\n                <!-- end of PDF link goes here -->\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"masterplan-wp\">\n                <div class=\"box\">\n                   <!--  master plan image goes here -->\n                    <div class=\"left-side-image\" *ngIf=\"comunitylatestDetail.masterplan_image?.url\">\n                        <!-- map goes here -->\n                        <img [src]=\"comunitylatestDetail.masterplan_image.url\" alt=\"\"/>\n                        <!-- end of map goes here -->\n                    </div>\n                    <div class=\"right-side-image\" *ngIf=\"comunitylatestDetail.legend_image?.url\">\n                        <!-- legend goes here -->\n                        <img [src]=\"comunitylatestDetail.legend_image.url\" alt=\"\"/>\n                        <!-- end of legend goes here -->\n                    </div>\n                    <!--  end of master plan image goes here -->\n                </div>               \n            </div>\n        </div>\n    </section>\n    <!--end-->\n\n    <!-- Offer section -->\n    <section class=\"offer-headline-admin\" *ngIf=\"comunityDetail.offer\" \n    [ngStyle]=\"{'background': '-webkit-linear-gradient(left, '+comunitylatestDetail.primary_color+' 0%, '+comunitylatestDetail.secondary_color +' 100%)'}\">\n    <div class=\"col-sm-12 col-md-6 no-pad hidden-xs hidden-sm\"><img [src]=\"comunityDetail.offer.image.url\" alt=\"\"></div>\n        <div class=\"col-sm-12 col-md-6\">\n            <div class=\"rg-box\">\n                <h2>{{comunityDetail.offer.title}}</h2>\n                <p>{{comunityDetail.offer.description}}</p>\n                <div class=\"buttons sc\" (click)=\"offerDetails(comunityDetail.offer.more_about)\"><a class=\"ods-btn\" \n        [ngStyle]=\"{'color': comunitylatestDetail.primary_color}\" (mouseover)=\"onOffer($event)\" \n                                    (mouseout)=\"onOffer($event)\">See offer details</a></div>\n            </div>\n        </div>\n    </section>\n     <!-- end  Offer section -->\n\n    <!-- facilities Section-->\n    <section class=\"sale-at-Aspley padbot0 margbot80\"\n    *ngIf=\"comunityDetail.community_facilities?.length\">\n        <div class=\"container\">\n            <div class=\"card\">\n                <h2 class=\"heading\">Community facilities</h2>\n                <div class=\"divider\"></div>\n                <p class=\"text-fac\">You'll never want to leave the grounds with the facilities available at {{comunitylatestDetail.first_name}}!</p>\n            </div>\n        </div>\n          <div class=\"tab-content\">\n            <div class=\"tab-pane active\" >\n                <div class=\"center slider sale-box\">                    \n                    <div *ngFor=\"let community_facility of comunityDetail.community_facilities\">\n                        <li class=\"width-fullnomarg\">\n                            <div class=\"img-show-box\">\n                                <div class=\"homefor-sale-box-img\">\n                                <img [src]=\"community_facility.image.url\" \n                                alt=\"\">\n                                </div>\n                                <h4 class=\"marg-tb\" [ngStyle]=\"{'color': comunitylatestDetail.primary_color}\">{{community_facility.name}}</h4>                             \n                            </div>\n\n                        </li>\n                    </div>   \n                </div>\n            </div>\n        </div>  \n        \n        <div class=\"container\">\n             <div class=\"bot-but\">\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#myfaci\" (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\"><i class=\"icon\"></i>Show me all {{comunityDetail.community_facilities.length}} facilities</a>\n            </div>\n        </div>\n        <!-- Tab panes -->\n\n    </section>\n    <!-- end of  facilities Section-->\n\n    <!-- open days Section-->\n    <section class=\"sale-at-Aspley padbot0 margbot80 margtop0\" id=\"Open-days\" #Opendays [hidden]= \"!comunityDetail.events.length\">\n        <div class=\"container\">\n            <div class=\"card\">\n                <h2 class=\"heading\">{{comunityDetail.events.length}} Planned open days</h2>\n                <div class=\"divider\"></div>\n            </div>\n        </div>\n          <div class=\"tab-content\">\n            <div class=\"tab-pane active\" >\n                <div class=\"center slider sale-box\">                    \n                    <div  *ngFor=\"let event of comunityDetail.events\">\n                        <a routerLink=\"/events/{{event.id}}\">\n                            <li class=\"width-fullnomarg\">\n                                <div class=\"box\">\n                                    <div class=\"date-box\" \n                                    [ngStyle]=\"{'background': '-webkit-linear-gradient(left, '+comunitylatestDetail.primary_color+' 0%, '+comunitylatestDetail.secondary_color +' 100%)'}\">\n                                        <div class=\"date\" \n                                        (click)=\"goToEventDetail(event.id)\">\n                                            <span>{{event.day}}</span>\n                                            <span>{{event.month}}</span>\n                                        </div>\n                                    </div>\n                                    <h5>Read more & RSVP.</h5>\n                                </div>\n                            </li>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>  \n        \n        <div class=\"container\">\n             <div class=\"bot-but\">\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#mydays\" (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\"><i class=\"icon\"></i>Show me all {{comunityDetail.events.length}} open days</a>\n            </div>\n        </div>\n        <!-- Tab panes -->\n\n    </section>\n    <!-- end of open day Section-->\n\n    <!--Map section-->\n    <section id=\"Location\" #Location>\n         <div class=\"community-location-map\">\n            <iframe [src]=\"'https://www.google.com/maps/embed/v1/place?key=AIzaSyDgocn8utrn5kblteaLLZ1-aLEZIl9aRok&q='+ comunitylatestDetail.street_address | safe: 'resourceUrl'\" width=\"100%\" height=\"100%\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n           <div class=\"container\">\n                <!-- address details -->\n                <div class=\"address-details\">\n                    <ul class=\"map-pin\">\n                        <li class=\"address\">{{comunitylatestDetail.street_address}}</li>\n                        <a href=\"https://www.google.com/maps/dir//{{comunitylatestDetail?.street_address }}\" target=\"_blank\"><li class=\"link\">View directions</li></a>\n                    </ul>\n                </div>\n                <!-- end of address details -->\n           </div>\n            \n        </div>\n    </section>\n     <!-- end of map section-->\n\n    <!-- nearby Section-->\n    <section class=\"sale-at-Aspley padbot0 margbot80\" *ngIf=\"comunityDetail?.near_bys.length\">\n        <div class=\"container\">\n            <div class=\"card\">\n                <h2 class=\"heading\">What's nearby?</h2>\n                <div class=\"divider\"></div>\n            </div>\n        </div>\n          <div class=\"tab-content\">\n            <div class=\"tab-pane active\" >\n                <div class=\"center slider sale-box\">                    \n                    <div *ngFor=\"let nearbys of comunityDetail.near_bys\">\n                        <li class=\"width-fullnomarg\">\n                            <div class=\"img-show-box\">\n                                <div class=\"homefor-sale-box-img\">\n                                <img [src]=\"nearbys.image.url\" alt=\"\">\n                                </div>\n                                <h4 [ngStyle]=\"{'color': comunitylatestDetail.primary_color}\">{{nearbys.name}}</h4>\n                                <p>{{nearbys.distance}}</p>                             \n                            </div>\n\n                        </li>\n                    </div> \n                </div>\n            </div>\n        </div>  \n        \n        <div class=\"container\">\n             <div class=\"bot-but\">\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#mynearby\" (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\"><i class=\"icon\"></i>Show me all {{comunityDetail.near_bys.length}} things to do around here</a>\n            </div>\n        </div>\n        <!-- Tab panes -->\n\n    </section>\n    <!-- end of nearby Section-->\n    <!-- CTA section-->\n    <section class=\"leaving-at-aspley\" [ngStyle]=\"{'background': '-webkit-linear-gradient(left, '+comunitylatestDetail.primary_color+' 0%, '+comunitylatestDetail.secondary_color +' 100%)'}\">\n        <div class=\"container\">\n            <h2>Start living at {{comunitylatestDetail.first_name}}. <br />you deserve it.</h2>\n            <img [src]=\"comunitylatestDetail.salesperson_image.url\" alt=\"\">\n            <span>Talk to {{comunitylatestDetail.salesperson_name}} now on {{comunitylatestDetail.phone}}</span>\n            <div class=\"buttons\" *ngIf= \"comunityDetail.info_pack?.info_pdf?.url\">\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal\" class=\"ods-btn\" [ngStyle]=\"{'color': comunitylatestDetail.primary_color}\">Get an info pack</a> \n                <a (mouseover)=\"onfb($event)\" (mouseout)=\"onfb($event)\"*ngIf=\"comunityDetail?.facebook_links.length\" href='{{comunityDetail?.facebook_links[0].link}}' class=\"trans-btn\" target=\"_blank\">Join Us on facebook</a>\n            </div>\n        </div>\n    </section>\n    <!-- end CTA section-->\n\n    <!-- \n    // All modal components below //\n    -->\n\n    <!-- Get an info pack Modal -->\n    <div class=\"modal fade\" id=\"get-an-info-pack-modal\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body no-pad\">\n                     <button (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\" type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <div class=\"col-sm-5 col-md-5 right-img-main no-pad hidden-xs hidden-sm\">\n                        <div class=\"right-img-full\">\n                            <div class=\"right-img-full\" [ngStyle]=\"{'background-image': 'url(' + comunitylatestDetail.featured_image.url + ')','background-repeat': 'no-repeat','background-position': 'center'}\"></div>\n                            <!--  <img \n                             [src]=\"comunitylatestDetail.featured_image.url\" alt=\"\" style= \n                             \"height: -webkit-fill-available;\"> -->\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-7 getinfowp\">\n                   \n                        <div class=\"wp-main\">\n                         <h3 [ngStyle]=\"{'color': comunitylatestDetail.primary_color}\">\n                            <div class=\"title-img-round\">\n                                <img \n                                [src]=comunitylatestDetail.community_icon.url alt=\"\" class=\"\">    \n                            </div>\n                            Get an info pack\n                         </h3>\n                         <div class=\"profile-row\">\n                            <div class=\"profile-img\"><img [src]=\"comunitylatestDetail.salesperson_image.url\" alt=\"\" width=\"32px\" height=\"32px\"></div> \n                            <p><strong> {{comunitylatestDetail.salesperson_name}}</strong> | {{comunitylatestDetail.phone}} | {{comunitylatestDetail.email}}</p>\n                         </div>\n                         <div class=\"divider\"></div>\n<!--                         <div class=\"form-getinfo-succes\">\n                            <div class=\"row\">\n                            <div class=\"col-sm-2\"><img src=\"images/form-sucess.png\" alt=\"\"></div>    \n                            <div class=\"col-sm-10\"><p class=\"pera-textbig\"> Thank you for your enquiry. We've emailed you the info pack. You can view it by clicking the button below.</p>\n                            <button (click)=\"infoPdf(comunityDetail.info_pack.info_pdf.url)\" \n                            (mouseover)=\"changeInfoColor($event)\" \n                        (mouseout)=\"changeInfoColor($event)\" class=\"btn btn-org\" [ngStyle]=\"{'background-color': comunitylatestDetail.primary_color,'border-color':comunitylatestDetail.primary_color}\">View the info pack Now</button></div>\n                            </div>\n                        </div> -->\n                         <div class=\"form-wp-getinfo\">\n                             <div class=\"row\">\n                             <!-- form starts here-->\n                                <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\" \n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required> \n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>  \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\" \n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\" \n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\" #plan=\"ngModel\">   \n                                        </div>\n                                    </div>  \n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\" \n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\" \n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>  \n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p> \n                                        </div>\n                                    </div> \n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\" \n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div> \n                                    <div class=\"col-sm-12\">\n                                    <button  \n                                    (mouseover)=\"changeInfoColor($event)\" \n                                   (mouseout)=\"changeInfoColor($event)\" \n                                  [ngStyle]=\"{'background-color': comunitylatestDetail.primary_color,'border-color': comunitylatestDetail.primary_color}\" class=\"btn btn-org\"  id=\"send-sucess\"\n                                     (click)=\"getInfo(infoForm)\" type=\"submit\">Get an info pack</button>\n                                    </div>\n                                </form>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end  Get an info pack Modal -->\n\n    <!-- Modal all 28 homes-->\n    <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\">&times;</button>\n                    <section class=\"sale-at-Aspley\">\n                        <div class=\"container\">\n                            <div class=\"card\">\n                                <h2 class=\"heading mgtm20\">Homes in this community</h2>\n                                <ul class=\"nav nav-tabs right-tab right-sidetab\" role=\"tablist\">\n                                    <li role=\"presentation\" class=\"active\">\n                                        <a href=\"#model-All-homes\" aria-controls=\"All-homes\" role=\"tab\" data-toggle=\"tab\" [ngStyle]=\"{'color': comunitylatestDetail?.primary_color}\">All homes<div [ngStyle]=\"{'background': comunitylatestDetail?.primary_color}\" class=\"bottom-line\"></div></a>\n                                    </li>\n                                    <li role=\"presentation\" *ngIf=\"newHomes?.length\">\n                                        <a href=\"#model-New-Homes\" aria-controls=\"New-Homes\" role=\"tab\" data-toggle=\"tab\" (mouseover)=\"after($event)\" \n                                        (mouseout)=\"after($event)\">New Homes<div style= \"background: none\" class=\"bottom-line\"></div></a>\n                                    </li>\n                                    <li role=\"presentation\"                 *ngIf=\"preLoved?.length\">\n                                        <a href=\"#model-Pre-loved-homes\" aria-controls=\"Pre-loved-homes\" role=\"tab\" data-toggle=\"tab\" (mouseover)=\"after($event)\" \n                                        (mouseout)=\"after($event)\">Pre-loved homes<div style= \"background: none\" class=\"bottom-line\"></div></a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <!-- Tab panes -->\n                            <div class=\"tab-content\">\n                                <div role=\"tabpanel\" class=\"tab-pane active\" id=\"model-All-homes\">\n                                    <div class=\"sale-box\">\n                                        <li *ngFor=\"let home of comunityDetail?.homes\">\n                                            <div class=\"img-show-box\">\n                                                <div class=\"homefor-sale-box-img\">\n                                                <a href =\"/homes-for-sale/{{home.id}}\" ><img \n                                                  *ngIf=\"home?.images?.length\"  [src]=\"home.images[0]\" alt=\"\"></a>\n                                                </div>\n                                                <a href =\"/homes-for-sale/{{home.id}}\" ><h4 [ngStyle]=\"{'color': comunitylatestDetail?.primary_color}\">{{home.address}}</h4></a>\n                                                <a *ngIf=\"home?.list_price\" href=\"/homes-for-sale/{{home.id}}\" ><p>${{home.list_price | number : '1.0'}}</p></a>\n                                            </div>\n                                        </li>\n                                    </div>\n                                </div>\n                                <div role=\"tabpanel\" class=\"tab-pane\" id=\"model-New-Homes\" *ngIf=\"newHomes?.length\">\n                                    <ul class=\"sale-box\">\n                                        <li *ngFor=\"let new of newHomes\">\n                                            <div class=\"img-show-box\">\n                                                <div class=\"homefor-sale-box-img\">\n                                                <a routerLink=\"/homes-for-sale/{{new.id}}\" data-dismiss=\"modal\"><img \n                                                   *ngIf=\"new?.images?.length\" [src]=\"new.images[0]\" alt=\"\"></a>\n                                                </div>\n                                                <a routerLink=\"/homes-for-sale/{{new.id}}\" data-dismiss=\"modal\"><h4 [ngStyle]=\"{'color': comunitylatestDetail?.primary_color}\">{{new.address}}</h4></a>\n                                                 <a *ngIf=\"new?.list_price\" routerLink=\"/homes-for-sale/{{new.id}}\" data-dismiss=\"modal\"><p>${{new.list_price | number : '1.0'}}</p></a>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div role=\"tabpanel\" class=\"tab-pane\" id=\"model-Pre-loved-homes\" *ngIf=\"preLoved?.length\">\n                                    <ul class=\"sale-box\">\n                                        <li *ngFor=\"let loved of preLoved\">\n                                            <div class=\"img-show-box\">\n                                                <div class=\"homefor-sale-box-img\">\n                                                <a routerLink=\"/homes-for-sale/{{loved.id}}\" data-dismiss=\"modal\"><img \n                                                   *ngIf=\"loved?.images?.length\" [src]=\"loved.images[0]\" alt=\"\"></a>\n                                                </div>\n                                                <a routerLink=\"/homes-for-sale/{{loved.id}}\" data-dismiss=\"modal\"><h4 [ngStyle]=\"{'color': comunitylatestDetail?.primary_color}\">{{loved.address}}</h4></a>\n                                                <a *ngIf=\"loved?.list_price\" routerLink=\"/homes-for-sale/{{loved.id}}\" data-dismiss=\"modal\"><p>${{loved.list_price | number : '1.0'}}</p></a>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n\n                    </section>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end Modal all 28 homes -->\n\n    <!-- Modal facilities-->\n    <div class=\"modal fade\" id=\"myfaci\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\">&times;</button>\n                    <section class=\"sale-at-Aspley\">\n                        <div class=\"container\">\n                            <div class=\"card\">\n                                <h2 class=\"heading\">Community facilities</h2>\n                                <div class=\"divider\"></div>\n                                <p class=\"text-fac\">You'll never want to leave the grounds with the facilities available at {{comunitylatestDetail.first_name}}!</p>\n                            </div>\n                            <!-- Tab panes -->\n                            <div class=\"tab-content\">\n                                <!-- content -->\n                                <div class=\"sale-box\">\n                                    <li *ngFor=\"let community_facility of comunityDetail.community_facilities\">\n                                        <div class=\"img-show-box\">\n                                            <div class=\"homefor-sale-box-img\">\n                                            <img [src]=\"community_facility.image.url\" alt=\"\">\n                                            </div>\n                                            <h4 class=\"marg-tb\" \n                                            [ngStyle]=\"{'color': comunitylatestDetail.primary_color}\">{{community_facility.name}}</h4>\n                                        </div>\n                                    </li>\n                                </div>\n                                <!-- end of content -->\n                            </div>\n                        </div>\n\n                    </section>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end Modal facilities-->\n\n    <!-- Modal open days-->\n    <div class=\"modal fade\" id=\"mydays\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\">&times;</button>\n                    <section class=\"sale-at-Aspley\">\n                        <div class=\"container\">\n                            <div class=\"card\">\n                                <h2 class=\"heading\">{{comunityDetail.events.length}} Planned open days</h2>\n                                <div class=\"divider\"></div>\n                            </div>\n                            <!-- Tab panes -->\n                            <div class=\"tab-content\">\n                                <!-- content -->\n                                <div class=\"sale-box\">\n                                    <!-- first in order -->\n                                    <a *ngFor=\"let event of comunityDetail.events\" routerLink=\"/events/{{event.id}}\" data-dismiss=\"modal\">\n                                        <li class=\"width-fullnomarg\">\n                                            <div class=\"box\">\n                                                <div class=\"date-box\" [ngStyle]=\"{'background': '-webkit-linear-gradient(left, '+comunitylatestDetail.primary_color+' 0%, '+comunitylatestDetail.secondary_color +' 100%)'}\">\n                                                    <div class=\"date\">\n                                                        <span>{{event.day}}</span>\n                                                        <span>{{event.month}}</span>\n                                                    </div>\n                                                </div>\n                                                <h5>Read more & RSVP.</h5>\n                                            </div>\n                                        </li>\n                                    </a>\n                                </div>\n                                <!-- end of content -->\n                            </div>\n                        </div>\n\n                    </section>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end Modal open days-->\n\n    <!-- what's nearby modal-->\n    <div class=\"modal fade\" id=\"mynearby\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\">&times;</button>\n                    <section class=\"sale-at-Aspley\">\n                        <div class=\"container\">\n                            <div class=\"card\">\n                                <h2 class=\"heading\">What's nearby?</h2>\n                                <div class=\"divider\"></div>\n                            </div>\n                            <!-- Tab panes -->\n                            <div class=\"tab-content\">\n                                <!-- content -->\n                                <div class=\"sale-box\">\n                                    <li *ngFor=\"let nearbys of comunityDetail.near_bys\">\n                                        <div class=\"img-show-box\">\n                                            <div class=\"homefor-sale-box-img\">\n                                            <img [src]=\"nearbys.image.url\" alt=\"\">\n                                            </div>\n                                            <h4 [ngStyle]=\"{'color': comunitylatestDetail.primary_color}\">{{nearbys.name}}</h4>\n                                            <p>{{nearbys.distance}}</p>\n                                        </div>\n                                    </li>\n                                </div>\n                                <!-- end of content -->\n                            </div>\n                        </div>\n\n                    </section>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end what's nearby -->"

/***/ }),

/***/ "../../../../../src/app/community/community.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return communityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var communityComponent = (function () {
    function communityComponent(route, router, apiService, sharedService, fb, segment, Meta, title) {
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.sharedService = sharedService;
        this.fb = fb;
        this.segment = segment;
        this.Meta = Meta;
        this.title = title;
        this.info = { firstname: '', lastname: '', phone: '', email: '' };
        this.submitted = false;
        this.errors = {};
        this.cities = {};
        this.countries = [];
        this.cityOption = [];
        this.outputs = [];
        this.citySelect = false;
        this.preLoved = [];
        this.newHomes = [];
        this.bodyClasses = "community-detail-page";
        this.month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.isDataAvailable = false;
        this.comunityDetail = {};
        this.comunitylatestDetail = {};
        this.shortName = '';
        // create form group using the form builder
        this.settingsForm = this.fb.group({
            image: '',
            username: '',
            bio: '',
            email: '',
            password: ''
        });
    }
    communityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            $('body').addClass(_this.bodyClasses);
            window.scrollTo(0, 0);
            _this.segment.page().then(function () { return console.log("Event sended"); });
            var user_data = JSON.parse(window.localStorage.getItem('user_data'));
            if (user_data) {
                _this.info.firstname = user_data.firstname;
                _this.info.lastname = user_data.lastname;
                _this.info.plan = user_data.plan;
                _this.info.phone = user_data.phone;
                _this.info.email = user_data.email;
                _this.info.area = user_data.description;
            }
            var slugValue = params['slug'];
            var data = { "community": { "short_name": slugValue } };
            _this.apiService.getCommunitiesDetail('/communities/find_community', data).subscribe(function (result) {
                _this.title.setTitle(result.community.seo_title);
                _this.Meta.updateTag({ name: 'description', content: result.community.meta_description });
                _this.comunityDetail = result;
                _this.comunitylatestDetail = result.community;
                _this.isDataAvailable = true;
                var title = {};
                title.first_name = _this.comunitylatestDetail.first_name;
                title.primary_color = _this.comunitylatestDetail.primary_color;
                title.last_name = _this.comunitylatestDetail.last_name;
                title.secondary_color = _this.comunitylatestDetail.secondary_color;
                _this.sharedService.publishData(title);
                console.log(title, "title");
                _this.shortName = _this.comunitylatestDetail.short_name;
                if (_this.comunityDetail.events.length) {
                    var event_date = void 0;
                    var day = void 0;
                    var mon = void 0;
                    for (var i = 0; i < _this.comunityDetail.events.length; i++) {
                        event_date = new Date(_this.comunityDetail.events[i].start_time);
                        day = event_date.getUTCDate();
                        mon = _this.month[event_date.getUTCMonth()];
                        _this.comunityDetail.events[i]["day"] = day;
                        _this.comunityDetail.events[i]["month"] = mon;
                    }
                }
                if (_this.comunityDetail.homes.length) {
                    _this.comunityDetail.homes.forEach(function (home) {
                        if (home.record_type == "Pre-loved") {
                            _this.preLoved.push(home);
                        }
                        else if (home.record_type == "New") {
                            _this.newHomes.push(home);
                        }
                    });
                }
                $.getScript('js/slider.js'); // autoattaching itself
                $.getScript('js/customSlick.js');
            });
        });
    };
    communityComponent.prototype.ngOnDestroy = function () {
        $('body').removeClass(this.bodyClasses);
        this.title.setTitle('Gateway Lifestyle | Over 50s Residential Communities');
        this.Meta.updateTag({ name: 'description', content: 'Gateway' });
        var headerTitle = { first_name: 'logo', primary_color: '#003C6B', last_name: 'Lifestyle', secondary_color: '#62717f' };
        this.sharedService.publishData(headerTitle);
    };
    communityComponent.prototype.readMore = function () {
        $(".read-more-hide").toggleClass("show-content");
        if ($(".tab-pane").find(".show-content")) {
            $("#read-more").hide();
        }
    };
    ;
    communityComponent.prototype.getInfo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var userData = {};
            userData.firstname = this.info.firstname;
            userData.lastname = this.info.lastname;
            userData.plan = this.info.plan;
            userData.phone = this.info.phone;
            userData.email = this.info.email;
            userData.description = this.info.area;
            window.localStorage.setItem('user_data', JSON.stringify(userData));
            console.log('success!');
            this.segment.track('GetInfoPack', {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area,
                community_short_name: this.shortName
            }).then(function () {
                window.localStorage.setItem('basicinfo_url', _this.comunityDetail.info_pack.info_pdf.url);
                window.localStorage.setItem('genericCheck', '0');
                _this.router.navigateByUrl('/success');
                $('#get-an-info-pack-modal')[0].style.display = 'none';
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                console.log("Event sended");
            });
        }
        else {
            console.log('validation failed!');
        }
    };
    communityComponent.prototype.infoPdf = function (url) {
        var info_url = 'https://gateway-lifestyle.herokuapp.com' + url;
        window.open(info_url, "_blank");
    };
    communityComponent.prototype.goToFb = function () {
        var url = '';
        if (!/^http[s]?:\/\//.test(this.comunityDetail.facebook_links[0].link)) {
            url += 'http://';
        }
        url += this.comunityDetail.facebook_links[0].link;
        window.open(url, "_blank");
    };
    communityComponent.prototype.scrollTo = function (element) {
        element.scrollIntoView({ behavior: "smooth" });
    };
    communityComponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? this.comunitylatestDetail.primary_color : '#ffffff';
        $event.target.style.color = $event.type == "mouseover" ? '#ffffff' : this.comunitylatestDetail.primary_color;
    };
    communityComponent.prototype.changeInfoColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : this.comunitylatestDetail.primary_color;
        $event.target.style.color = $event.type == "mouseover" ? this.comunitylatestDetail.primary_color : '#ffffff';
    };
    communityComponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? this.comunitylatestDetail.primary_color : '#414952';
    };
    communityComponent.prototype.after = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? this.comunitylatestDetail.primary_color : '#414952';
        $event.target.getElementsByTagName('div')[0].style.background = $event.type == "mouseover" ? this.comunitylatestDetail.primary_color : 'none';
    };
    communityComponent.prototype.offerDetails = function (offer_url) {
        window.open(offer_url, "_blank");
    };
    communityComponent.prototype.onOffer = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? '#ffffff' : this.comunitylatestDetail.primary_color;
    };
    communityComponent.prototype.onfb = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? this.comunitylatestDetail.primary_color : '#ffffff';
    };
    communityComponent.prototype.goToHomeDetail = function (page) {
        this.router.navigateByUrl('/homes-for-sale/' + page);
    };
    communityComponent.prototype.goToEventDetail = function (event_id) {
        this.router.navigateByUrl('/events/' + event_id);
    };
    communityComponent.prototype.selectOption = function (value) {
        this.citySelect = true;
        this.cityOption = this.cities[value];
    };
    communityComponent.prototype.selectOptionCity = function (value) {
        this.outputs = [{ '1': value }, { '2': value }, { '3': value }, { '4': value }, { '5': value }, { '6': value }, { '7': value }, { '8': value }, { '9': value }, { '10': value }];
    };
    communityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'community-slug-page',
            template: __webpack_require__("../../../../../src/app/community/community.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["h" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["h" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["Meta"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["Meta"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["Title"]) === "function" && _h || Object])
    ], communityComponent);
    return communityComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=community.component.js.map

/***/ }),

/***/ "../../../../../src/app/enquiry-form/enquiry.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n         <form [formGroup]=\"enqueryForm\" (ngSubmit)=\"submitForm()\">\n          <fieldset [disabled]=\"isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"First Name\"\n                formControlName=\"firstName\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Last Name\"\n                formControlName=\"lastName\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Email\"\n                formControlName=\"email\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"number\"\n                placeholder=\"Phone\"\n                formControlName=\"phone\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"number\"\n                placeholder=\"Postcode\"\n                formControlName=\"postcode\" />\n            </fieldset>\n\n             <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Which community is this regarding?\"\n                formControlName=\"community\" />\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\">\n              Send\n            </button>\n\n          </fieldset>\n        </form>\n      </div>\n    </div>\n  </div>  "

/***/ }),

/***/ "../../../../../src/app/enquiry-form/enquiry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enquiryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var enquiryComponent = (function () {
    function enquiryComponent(router, fb, segment) {
        this.router = router;
        this.fb = fb;
        this.segment = segment;
        this.isSubmitting = false;
        this.enqueryForm = this.fb.group({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            postcode: '',
            community: ''
        });
    }
    enquiryComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
    };
    enquiryComponent.prototype.submitForm = function () {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!(this.enqueryForm.value.firstName && this.enqueryForm.value.lastName)) {
            alert("Name property is missing");
        }
        else if (!this.enqueryForm.value.email) {
            alert("email property is missing");
        }
        else if (reg.test(this.enqueryForm.value.email) == false) {
            alert("email is not valid");
        }
        else if (!this.enqueryForm.value.phone) {
            alert("phone property is missing");
        }
        else if (!this.enqueryForm.value.postcode) {
            alert("postcode property is missing");
        }
        else {
            this.isSubmitting = true;
            alert("Enquiry successful accepted");
        }
    };
    enquiryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'enquiry-page',
            template: __webpack_require__("../../../../../src/app/enquiry-form/enquiry.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _c || Object])
    ], enquiryComponent);
    return enquiryComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=enquiry.component.js.map

/***/ }),

/***/ "../../../../../src/app/enquiry-form/enquiry.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enquiryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enquiry_component__ = __webpack_require__("../../../../../src/app/enquiry-form/enquiry.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var enquiryRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'enquiry',
        component: __WEBPACK_IMPORTED_MODULE_3__enquiry_component__["a" /* enquiryComponent */]
    }
]);
var enquiryModule = (function () {
    function enquiryModule() {
    }
    enquiryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__shared__["g" /* SharedModule */],
                enquiryRouting
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__enquiry_component__["a" /* enquiryComponent */]
            ],
            providers: []
        })
    ], enquiryModule);
    return enquiryModule;
}());

//# sourceMappingURL=enquiry.module.js.map

/***/ }),

/***/ "../../../../../src/app/event/event-slug-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSlugResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventSlugResolver = (function () {
    function EventSlugResolver(eventService, router) {
        this.eventService = eventService;
        this.router = router;
    }
    EventSlugResolver.prototype.resolve = function (route, state) {
        var slugComponent = this.eventService.get(route.params['slug']);
        if (slugComponent) {
        }
        else {
            this.router.navigateByUrl('/pagenotfound');
        }
        return slugComponent;
    };
    EventSlugResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["c" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["c" /* EventService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], EventSlugResolver);
    return EventSlugResolver;
    var _a, _b;
}());

//# sourceMappingURL=event-slug-resolver.js.map

/***/ }),

/***/ "../../../../../src/app/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h4 *ngIf=\"!isDataAvailable\">Loading...</h4>\n<div *ngIf=\"isDataAvailable\" style=\"padding: 30px;\">\n\t<h3>{{eventDetail.name}}</h3>\n\t<p>{{eventDetail.description}}</p>\n\t<button class=\"btn btn primary\" (click)=\"eventUrl()\">Register for the Event</button>\n</div> -->\n<!-- event top section-->\n <section class=\"event-detail-topwarp\">\n     <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-8 pad-r0\">\n              <h2 class=\"hidden-xs\" [ngStyle]=\"{'color':eventDetail?.event_community.primary_color}\">{{eventDetail.name}}</h2>\n              <div class=\"img-box\"><img [src]=\"eventDetail.image_url\" alt=\"\"></div>\n              <h2 class=\"des-hide\" [ngStyle]=\"{'color':eventDetail?.event_community.primary_color}\">{{eventDetail.name}}</h2>\n              <p class=\"pera-textbig\">{{eventDetail.description}}\n             </p>\n          </div>\n          <div class=\"col-sm-4 pad-l0\">\n              <div class=\"r-box\">\n                  <span>{{eventDetail.event_date}}</span>\n                  <span>{{eventDetail.event_month}}</span>\n                  <p class=\"padding-event\">{{eventDetail.new_start_time | date:'shortTime'}} – {{eventDetail.new_end_time | date:'shortTime'}} AEST</p>\n                  <div class=\"devider\"></div>\n                  <p *ngIf=\"eventDetail.venue\"><strong>Location</strong></p>\n                  <p class=\"last\">{{eventDetail.venue}}</p>\n                  <a href=\"{{eventDetail.event_url}}\" target=\"_blank\"><button class=\"btn btn-org\"\n                    [ngStyle]=\"{'background':eventDetail?.event_community.primary_color,'border-color':eventDetail?.event_community.primary_color}\" (mouseover)=\"changeColor($event)\" (mouseout)=\"changeColor($event)\">Free rsvp</button></a>\n              </div>\n          </div>\n        </div>\n\n     </div>\n </section>\n\n<!-- start Go To Community  section -->\n<section class=\"goto-community\" [ngStyle]=\"{'background-image': 'url(' + eventDetail?.event_community.featured_image.url + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n    <div class=\"container\">\n\t\t<div class=\"box-warp\">\n\t\t\t<div class=\"logo-community\"><img\n                [src]=\"eventDetail?.event_community.community_logo.url\" alt=\"\"></div>\n\t\t\t<p class=\"pera-textbig\">This event is in {{eventDetail?.event_community.first_name}} {{eventDetail?.event_community.last_name}}.</p>\n\t\t\t<p class=\"pera-textbig\">{{eventDetail?.event_community.first_name}} is a peaceful residential area set around Little Cabbage Tree Creek, in the northern suburbs of Brisbane.</p>\n\t\t\t<button class=\"btntheme\" (click)=\"goToCommunity(eventDetail?.event_community.slug)\"\n            [ngStyle]=\"{'background':eventDetail?.event_community.primary_color,'border-color':eventDetail?.event_community.primary_color}\" (mouseover)=\"changeColor($event)\" (mouseout)=\"changeColor($event)\">Go To Community</button>\n\t\t</div>\n\t</div>\n</section>\n<!-- start Planned Open days section -->\n\n<!-- open days Section-->\n<section class=\"sale-at-Aspley padbot0 \" id=\"Open-days\" *ngIf=\"eventDetail?.events_in_community.length\">\n    <div class=\"container\">\n        <div class=\"card\">\n            <h2 class=\"heading\">All open days in this community</h2>\n            <div class=\"divider\"></div>\n        </div>\n    </div>\n      <div class=\"tab-content\">\n        <div class=\"tab-pane active\" >\n            <div class=\"center slider sale-box\">\n            \t<div *ngFor=\"let ev of eventDetail.events_in_community\">\n                    <ul>\n                        <a href=\"/events/{{ev.id}}\">\n                            <li class=\"width-fullnomarg\">\n                                <div class=\"box\">\n                                    <div class=\"date-box\" [ngStyle]=\"{'background': '-webkit-linear-gradient(left, '+eventDetail?.event_community.primary_color+' 0%, '+eventDetail?.event_community.secondary_color +' 100%)'}\">\n                                        <div class=\"date\">\n                                            <span>{{ev.ev_day}}</span>\n                                            <span>{{ev.ev_month}}</span>\n                                        </div>\n                                    </div>\n                                    <h5>Read more & RSVP.</h5>\n                                </div>\n                            </li>\n                        </a>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"container\">\n         <div class=\"bot-but\">\n            <a href=\"#\" data-toggle=\"modal\" data-target=\"#mydays\" (mouseover)=\"onHover($event)\" (mouseout)=\"onHover($event)\"><i class=\"icon\"></i>Show me all {{eventDetail.events_in_community?.length}} open days</a>\n        </div>\n    </div>\n    <!-- Tab panes -->\n\n</section>\n<!-- end of open day Section-->\n\n<!-- Start Home for sale at Aspley Section-->\n    <section class=\"sale-at-Aspley padbot0 margbot80\" id=\"Homes-for-sale\"\n    [hidden]= \"!eventDetail?.community_homes.length\">\n        <div class=\"container\">\n            <div class=\"card\">\n                <h2 class=\"heading\">Homes in this community</h2>\n                <ul class=\"nav nav-tabs right-tab right-sidetab\" role=\"tablist\">\n                    <li role=\"presentation\" class=\"active\">\n                        <a href=\"#All-homes\" aria-controls=\"All-homes\" role=\"tab\" data-toggle=\"tab\" [ngStyle]=\"{'color': eventDetail?.event_community.primary_color}\">All homes<div [ngStyle]=\"{'background': eventDetail?.event_community.primary_color}\" class=\"bottom-line\"></div></a>\n                    </li>\n                    <li role=\"presentation\" *ngIf=\"newHomes?.length\">\n                        <a href=\"#New-Homes\" aria-controls=\"New-Homes\" role=\"tab\" data-toggle=\"tab\" (mouseover)=\"after($event)\"\n                        (mouseout)=\"after($event)\">New Homes<div style=\"background: none\" class=\"bottom-line\"></div></a>\n                    </li>\n                    <li role=\"presentation\" *ngIf=\"preLoved?.length\">\n                        <a href=\"#Pre-loved-homes\" aria-controls=\"Pre-loved-homes\" role=\"tab\" data-toggle=\"tab\" (mouseover)=\"after($event)\"\n                        (mouseout)=\"after($event)\">Pre-loved homes<div style=\"background: none\" class=\"bottom-line\"></div></a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n\n          <div class=\"tab-content\">\n            <!-- all homes tab -->\n            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"All-homes\">\n                <div class=\"center slider sale-box\">\n                    <div *ngFor=\"let home of eventDetail?.community_homes\">\n                        <li class=\"width-fullnomarg\">\n                            <div class=\"img-show-box\">\n                                <div class=\"homefor-sale-box-img\">\n                                <a routerLink=\"/homes-for-sale/{{home.id}}\"><img *ngIf=\"home?.images?.length\"\n                                    [src]=\"home.images[0]\" alt=\"\"></a>\n                                </div>\n                                <a routerLink=\"/homes-for-sale/{{home.id}}\"><h4 [ngStyle]=\"{'color': eventDetail?.event_community.primary_color}\">{{home.address}}</h4></a>\n                               <a *ngIf=\"home?.list_price\" routerLink=\"/homes-for-sale/{{home.id}}\"> <p>${{home.list_price | number : '1.0'}}</p> </a>\n                            </div>\n\n                        </li>\n                    </div>\n                </div>\n            </div>\n            <!-- end of all homes tab -->\n            <!-- new home tab -->\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"New-Homes\" *ngIf=\"newHomes?.length\">\n                <div class=\"center slider sale-box\">\n                    <div *ngFor=\"let new of newHomes\">\n                        <li class=\"width-fullnomarg\">\n                            <div class=\"img-show-box\">\n                                <div class=\"homefor-sale-box-img\">\n                                <a href=\"/homes-for-sale/{{new.id}}\"><img *ngIf=\"new?.images?.length\" [src]=\"new.images[0]\" alt=\"\"></a>\n                                </div>\n                                <a href=\"/homes-for-sale/{{new.id}}\"><h4 [ngStyle]=\"{'color': eventDetail?.event_community.primary_color}\">{{new.address}}</h4></a>\n                                <a *ngIf=\"new?.list_price\" href=\"/homes-for-sale/{{new.id}}\"> <p>${{new.list_price | number : '1.0'}}</p> </a>\n                            </div>\n\n                        </li>\n                    </div>\n                </div>\n            </div>\n            <!-- end of new home tab -->\n            <!-- preloved tab -->\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"Pre-loved-homes\" *ngIf=\"preLoved?.length\">\n                <div class=\"center slider sale-box\">\n                    <div *ngFor=\"let loved of preLoved\">\n                        <li class=\"width-fullnomarg\">\n                            <div class=\"img-show-box\">\n                                <div class=\"homefor-sale-box-img\">\n                                <a routerLink=\"/homes-for-sale/{{loved.id}}\"><img *ngIf=\"loved?.images?.length\"\n                                    [src]=\"loved.images[0]\" alt=\"\"></a>\n                                </div>\n                                <a routerLink=\"/homes-for-sale/{{loved.id}}\"><h4 [ngStyle]=\"{'color': eventDetail?.event_community.primary_color}\">{{loved.address}}</h4></a>\n                                 <a *ngIf=\"loved?.list_price\" routerLink=\"/homes-for-sale/{{loved.id}}\"> <p>${{loved.list_price | number : '1.0'}}</p> </a>\n                            </div>\n\n                        </li>\n                    </div>\n                </div>\n            </div>\n            <!-- ennd of preloved tab -->\n        </div>\n\n        <div class=\"container\">\n             <div class=\"bot-but\">\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\" (mouseover)=\"onHover($event)\"\n                                    (mouseout)=\"onHover($event)\"><i class=\"icon\"></i>Show me all {{eventDetail?.community_homes.length}} homes</a>\n            </div>\n        </div>\n        <!-- Tab panes -->\n\n    </section>\n<!-- end Home for sale at Aspley Section-->\n\n<!-- start leaving at aspley section-->\n<section class=\"leaving-at-aspley\" [ngStyle]=\"{'background': '-webkit-linear-gradient(left, '+eventDetail?.event_community.primary_color+' 0%, '+eventDetail?.event_community.secondary_color +' 100%)'}\">\n    <div class=\"container\">\n        <h2>Open days and events are the <br /> best way to experience our<br /> homes and communities.</h2>\n\n        <div class=\"buttons\">\n            <a href=\"{{eventDetail.event_url}}\" target=\"_blank\" class=\"ods-btn\" [ngStyle]=\"{'color':eventDetail?.event_community.primary_color}\">RSVP now</a>\n        </div>\n    </div>\n</section>\n\n<!--\nStart model warper\n-->\n\n\n<!-- Modal open days-->\n<div class=\"modal fade\" id=\"mydays\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  (mouseover)=\"onHover($event)\" (mouseout)=\"onHover($event)\">&times;</button>\n                <section class=\"sale-at-Aspley\">\n                    <div class=\"container\">\n                        <div class=\"card\">\n                            <h2 class=\"heading\">{{eventDetail.events_in_community?.length}} Planned open days</h2>\n                            <div class=\"divider\"></div>\n                        </div>\n                        <!-- Tab panes -->\n                        <div class=\"tab-content\">\n                            <!-- content -->\n                            <div class=\"sale-box\" *ngFor=\"let ev of eventDetail.events_in_community\">\n                                <!-- first in order -->\n                                <a href=\"/events/{{ev.id}}\">\n                                    <li class=\"width-fullnomarg\">\n                                        <div class=\"box\">\n                                            <div class=\"date-box\" [ngStyle]=\"{'background': '-webkit-linear-gradient(left, '+eventDetail?.event_community.primary_color+' 0%, '+eventDetail?.event_community.secondary_color +' 100%)'}\">\n                                                <div class=\"date\">\n                                                    <span>{{ev.ev_day}}</span>\n                                                    <span>{{ev.ev_month}}</span>\n                                                </div>\n                                            </div>\n                                           <h5>Read more & RSVP.</h5>\n                                        </div>\n                                    </li>\n                                </a>\n                                <!-- end of fourth in order -->\n                            </div>\n                            <!-- end of content -->\n                        </div>\n                    </div>\n\n                </section>\n            </div>\n\n        </div>\n\n    </div>\n</div>\n\n<!-- Modal all 28 homes-->\n    <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (mouseover)=\"onHover($event)\"\n                                    (mouseout)=\"onHover($event)\">&times;</button>\n                    <section class=\"sale-at-Aspley\">\n                        <div class=\"container\">\n                            <div class=\"card\">\n                                <h2 class=\"heading mgtm20\">Homes in this community</h2>\n                                <ul class=\"nav nav-tabs right-tab right-sidetab\" role=\"tablist\">\n                                    <li role=\"presentation\" class=\"active\">\n                                        <a href=\"#model-All-homes\" aria-controls=\"All-homes\" role=\"tab\" data-toggle=\"tab\" [ngStyle]=\"{'color': eventDetail?.event_community.primary_color}\">All homes<div [ngStyle]=\"{'background': eventDetail?.event_community.primary_color}\" class=\"bottom-line\"></div></a>\n                                    </li>\n                                    <li role=\"presentation\" *ngIf=\"newHomes?.length\">\n                                        <a href=\"#model-New-Homes\" aria-controls=\"New-Homes\" role=\"tab\" data-toggle=\"tab\" (mouseover)=\"after($event)\"\n                                        (mouseout)=\"after($event)\">New Homes<div style= \"background: none\" class=\"bottom-line\"></div></a>\n                                    </li>\n                                    <li role=\"presentation\" *ngIf=\"preLoved?.length\">\n                                        <a href=\"#model-Pre-loved-homes\" aria-controls=\"Pre-loved-homes\" role=\"tab\" data-toggle=\"tab\" (mouseover)=\"after($event)\"\n                                        (mouseout)=\"after($event)\">Pre-loved homes<div style= \"background: none\" class=\"bottom-line\"></div></a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <!-- Tab panes -->\n                            <div class=\"tab-content\">\n                                <div role=\"tabpanel\" class=\"tab-pane active\" id=\"model-All-homes\">\n                                    <div class=\"sale-box\">\n                                        <li *ngFor=\"let home of eventDetail?.community_homes\">\n                                            <div class=\"img-show-box\">\n                                                <div class=\"homefor-sale-box-img\">\n                                                <a href =\"/homes-for-sale/{{home.id}}\"><img *ngIf=\"home?.images?.length\"\n                                                    [src]=\"home.images[0]\" alt=\"\" ></a>\n                                                </div>\n                                                <a href=\"/homes-for-sale/{{home.id}}\"><h4 [ngStyle]=\"{'color': eventDetail?.event_community.primary_color}\" >{{home.address}}</h4></a>\n                                                <a *ngIf=\"home?.list_price\" href=\"/homes-for-sale/{{home.id}}\" ><p>${{home.list_price | number : '1.0'}}</p></a>\n                                            </div>\n                                        </li>\n                                    </div>\n                                </div>\n                                <div role=\"tabpanel\" class=\"tab-pane\" id=\"model-New-Homes\" *ngIf=\"newHomes?.length\">\n                                    <ul class=\"sale-box\">\n                                        <li *ngFor=\"let new of newHomes\">\n                                            <div class=\"img-show-box\">\n                                                <div class=\"homefor-sale-box-img\">\n                                                <a href=\"/homes-for-sale/{{new.id}}\"><img *ngIf=\"new?.images?.length\"\n                                                    [src]=\"new.images[0]\" alt=\"\" ></a>\n                                                </div>\n                                                <a href=\"/homes-for-sale/{{new.id}}\"><h4 [ngStyle]=\"{'color': eventDetail?.event_community.primary_color}\" >{{new.address}}</h4></a>\n                                                 <a *ngIf=\"new?.list_price\" href=\"/homes-for-sale/{{new.id}}\" ><p>${{new.list_price | number : '1.0'}}</p></a>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div role=\"tabpanel\" class=\"tab-pane\" id=\"model-Pre-loved-homes\" *ngIf=\"preLoved?.length\">\n                                    <ul class=\"sale-box\">\n                                        <li *ngFor=\"let loved of preLoved\">\n                                            <div class=\"img-show-box\">\n                                                <div class=\"homefor-sale-box-img\">\n                                                <a href=\"/homes-for-sale/{{loved.id}}\"><img *ngIf=\"loved?.images?.length\"\n                                                    [src]=\"loved.images[0]\" alt=\"\" ></a>\n                                                </div>\n                                                <a href=\"/homes-for-sale/{{loved.id}}\"><h4 [ngStyle]=\"{'color': eventDetail?.event_community.primary_color}\" >{{loved.address}}</h4></a>\n                                                <a *ngIf=\"loved?.list_price\" href=\"/homes-for-sale/{{loved.id}}\" ><p>${{loved.list_price | number : '1.0'}}</p></a>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n\n                    </section>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n<!--end Modal all 28 homes -->\n"

/***/ }),

/***/ "../../../../../src/app/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var eventComponent = (function () {
    function eventComponent(router, fb, apiService, route, segment, sharedService) {
        this.router = router;
        this.fb = fb;
        this.apiService = apiService;
        this.route = route;
        this.segment = segment;
        this.sharedService = sharedService;
        this.isSubmitting = false;
        this.eventDetail = {};
        this.isDataAvailable = false;
        this.month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.openDays = {};
        this.preLoved = [];
        this.newHomes = [];
        this.enqueryForm = this.fb.group({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            postcode: '',
            community: ''
        });
    }
    eventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            window.scrollTo(0, 0);
            _this.segment.page().then(function () { return console.log("Event sended"); });
            var slugValue = params['slug'];
            _this.apiService.getEventDetail('/events/' + slugValue).subscribe(function (res) {
                console.log(res);
                _this.isDataAvailable = true;
                _this.eventDetail = res;
                //publish event to change the top menu logo name
                var title = {};
                title.first_name = _this.eventDetail.event_community.first_name;
                title.primary_color = _this.eventDetail.event_community.primary_color;
                title.last_name = _this.eventDetail.event_community.last_name;
                title.secondary_color = _this.eventDetail.event_community.secondary_color;
                _this.sharedService.publishData(title);
                var startTime = new Date(_this.eventDetail.start_time);
                var endTime = new Date(_this.eventDetail.end_time);
                var new_start_time = new Date(startTime.getUTCFullYear(), startTime.getUTCMonth(), startTime.getUTCDate(), startTime.getUTCHours(), startTime.getUTCMinutes(), startTime.getUTCSeconds());
                var new_end_time = new Date(endTime.getUTCFullYear(), endTime.getUTCMonth(), endTime.getUTCDate(), endTime.getUTCHours(), endTime.getUTCMinutes(), endTime.getUTCSeconds());
                var _date = new Date(_this.eventDetail.start_time);
                var event_date = _date.getUTCDate();
                var event_month = _this.month[_date.getUTCMonth()];
                /*let event_hrs = _date.getUTCHours() > 12 ? _date.getUTCHours()-12:_date.getUTCHours();
                let event_min = _date.getUTCMinutes();*/
                _this.eventDetail["event_date"] = event_date;
                _this.eventDetail["event_month"] = event_month;
                _this.eventDetail["new_start_time"] = new_start_time;
                _this.eventDetail["new_end_time"] = new_end_time;
                var ev_date;
                var ev_day;
                var ev_month;
                if (_this.eventDetail.events_in_community.length) {
                    for (var i = 0; i < _this.eventDetail.events_in_community.length; i++) {
                        ev_date = new Date(_this.eventDetail.events_in_community[i].start_time);
                        ev_day = ev_date.getUTCDate();
                        ev_month = _this.month[ev_date.getUTCMonth()];
                        _this.eventDetail.events_in_community[i]["ev_day"] = ev_day;
                        _this.eventDetail.events_in_community[i]["ev_month"] = ev_month;
                    }
                }
                if (_this.eventDetail.community_homes.length) {
                    _this.eventDetail.community_homes.forEach(function (home) {
                        if (home.record_type == "Pre-loved") {
                            _this.preLoved.push(home);
                        }
                        else if (home.record_type == "New") {
                            _this.newHomes.push(home);
                        }
                    });
                }
                $.getScript('js/customSlick.js');
            }, function (err) {
                console.log(err);
            });
        });
    };
    eventComponent.prototype.ngOnDestroy = function () {
        var headerTitle = { first_name: 'Gateway', primary_color: '#003C6B', last_name: 'Lifestyle', secondary_color: '#62717f' };
        this.sharedService.publishData(headerTitle);
    };
    /* getLinkedCommunity(){
       let data = {"community": { "short_name" : "grafton"}};
       this.apiService.post('/communities/find_community',data).subscribe(result=>{
         this.openDays = result;
         if(this.openDays.events.length){
           let event_date:any;
           let day:any;
           let mon:any;
           for(var i=0;i<this.openDays.events.length;i++){
             event_date = new Date(this.openDays.events[i].start_time);
             day = event_date.getUTCDate();
             mon = this.month[event_date.getUTCMonth()];
             this.openDays.events[i]["day"]= day;
             this.openDays.events[i]["month"]= mon;
           }
         }
       });
     }*/
    eventComponent.prototype.eventUrl = function () {
        window.open(this.eventDetail.event_url, "_blank");
    };
    eventComponent.prototype.goToCommunity = function (community_name) {
        this.router.navigateByUrl('/community/' + community_name);
    };
    eventComponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : this.eventDetail.event_community.primary_color;
        $event.target.style.color = $event.type == "mouseover" ? this.eventDetail.event_community.primary_color : '#ffffff';
    };
    eventComponent.prototype.changeRsvp = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? this.eventDetail.event_community.primary_color : '#ffffff';
        $event.target.style.color = $event.type == "mouseover" ? '#ffffff' : this.eventDetail.event_community.primary_color;
    };
    eventComponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? this.eventDetail.event_community.primary_color : '#414952';
    };
    eventComponent.prototype.after = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? this.eventDetail.event_community.primary_color : '#414952';
        $event.target.getElementsByTagName('div')[0].style.background = $event.type == "mouseover" ? this.eventDetail.event_community.primary_color : 'none';
    };
    eventComponent.prototype.submitForm = function () {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!(this.enqueryForm.value.firstName && this.enqueryForm.value.lastName)) {
            alert("Name property is missing");
        }
        else if (!this.enqueryForm.value.email) {
            alert("email property is missing");
        }
        else if (reg.test(this.enqueryForm.value.email) == false) {
            alert("email is not valid");
        }
        else if (!this.enqueryForm.value.phone) {
            alert("phone property is missing");
        }
        else if (!this.enqueryForm.value.postcode) {
            alert("postcode property is missing");
        }
        else {
            this.isSubmitting = true;
            alert("Enquiry successful accepted");
        }
    };
    eventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'enquiry-page/:slug',
            template: __webpack_require__("../../../../../src/app/event/event.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["h" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["h" /* SharedService */]) === "function" && _f || Object])
    ], eventComponent);
    return eventComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=event.component.js.map

/***/ }),

/***/ "../../../../../src/app/event/event.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eventModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_slug_resolver__ = __webpack_require__("../../../../../src/app/event/event-slug-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_component__ = __webpack_require__("../../../../../src/app/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_component__ = __webpack_require__("../../../../../src/app/event/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_order_pipe__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var eventRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'events',
        component: __WEBPACK_IMPORTED_MODULE_5__events_component__["a" /* EventsComponent */],
    },
    {
        path: 'events/:slug',
        component: __WEBPACK_IMPORTED_MODULE_4__event_component__["a" /* eventComponent */],
        resolve: {
            home: __WEBPACK_IMPORTED_MODULE_2__event_slug_resolver__["a" /* EventSlugResolver */]
        }
    }
]);
var eventModule = (function () {
    function eventModule() {
    }
    eventModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* SharedModule */],
                eventRouting,
                __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__["Ng2SearchPipeModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng2_order_pipe__["Ng2OrderModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__event_component__["a" /* eventComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__event_slug_resolver__["a" /* EventSlugResolver */]
            ]
        })
    ], eventModule);
    return eventModule;
}());

//# sourceMappingURL=event.module.js.map

/***/ }),

/***/ "../../../../../src/app/event/events.component.html":
/***/ (function(module, exports) {

module.exports = " <!--Listing page Header width bg-->\n<section class=\"hfsl-banner event-listing-hero\">\n    <div class=\"overlay\"></div>\n    <div class=\"context\">\n        <div class=\"container\">\n             <h2>Attend an open day to discover Gateway</h2>\n             <p>Our upcoming open days are listed below. Open days are a great way to see homes, meet residents and see if it's right for you. They're free to attend.</p>\n        </div>\n    </div>\n</section>\n\n\n  \n  <!-- start community filter -->\n  <section class=\"community-filter\">\n    <div class=\"container\">\n<!--       <div class=\"row\">\n        <div class=\"col-sm-7\"><h2 class=\"heading\">Looking for something specific?</h2></div>\n        <div class=\"col-sm-5 text-right\">\n          <span class=\"chb-cl\">\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\" value=\"\">\n                Show only communities with homes for sale\n              </label>\n            </div>\n          </span>\n        </div>\n      </div> -->\n      <div class=\"row margtb\">\n        <div class=\"col-sm-6 search-section\">\n          <div class=\"form-group\">\n          <div class=\"input-group input-group-lg\">\n\n            <div class=\"icon-addon addon-lg\">\n              <input [(ngModel)]=\"filter\" type=\"text\" placeholder=\"Search for a community, suburb or state\" class=\"texts\" id=\"search-com\">\n              <label  class=\"glyphicon glyphicon-search\"></label>\n            </div>\n            <span class=\"input-group-btn\">\n              <button class=\"btn-s\" (click)=\"geoLocation('distance')\" type=\"button\">Go!</button>\n            </span>\n          </div>\n        </div>\n        </div>\n        <div class=\"col-sm-6 text-right checkbox-section\">\n          <div class=\"checkbox-main nsw\">\n            <input type=\"checkbox\" name=\"\" id=\"check1\" checked=\"\">\n            <label for=\"check1\" (click)=\"getEventsList('new south wales')\">NSW</label>\n          </div>\n          <div class=\"checkbox-main qld\">\n            <input type=\"checkbox\" name=\"\" id=\"check2\" checked=\"\">\n            <label for=\"check2\" (click)=\"getEventsList('queensland')\">QLD</label>\n          </div>\n          <div class=\"checkbox-main vic\">\n            <input type=\"checkbox\" name=\"\" id=\"check3\" checked=\"\">\n            <label for=\"check3\" (click)=\"getEventsList('victoria')\">VIC</label>\n          </div>\n        </div>\n      </div>\n\n        <div class=\"row sortinglisting\">\n          <div class=\"col-sm-6 showing\" *ngIf=\"(events| filter:filter).length\">\n            <p>Showing <span>{{(events | filter:filter)?.length}} of {{originalLength}}</span> upcoming events</p>\n          </div>\n          <div class=\"col-sm-6 showing\" *ngIf=\"!(events| filter:filter).length\"><p> No result found. Please search another event.</p></div>\n          <div class=\"col-sm-6 sorted text-right\">\n\n           <select class=\"selectpicker-dropdown\" (change)=\"sort($event.target.value)\">\n            <option value=\"start_time\">Sorted by date</option>\n            <option value=\"orderby_name\">Sort A to Z</option>\n            <option value=\"distance\"> Sort by distance</option>\n            </select>\n          </div>\n        </div>\n    </div>\n  </section>\n  <!-- end community filter -->\n   \n    <!--event listing page card -->  \n              <section class=\"lookingsomthing-warp\" *ngIf=\"!isDataAvailable\">\n                Loading....\n              </section>\n              <section class=\"lookingsomthing-warp\" *ngIf=\"isDataAvailable\">\n                <div class=\"container\">\n                  <div class=\"inner-box-warp\">\n                    <ul class=\"append-data\">\n                        <!-- product detail card -->\n                            <li *ngFor=\"let event of events | orderBy: key | filter:filter; let i = index\"\n                            [ngClass]=\"{'no-event-image': event.image_url==null}\">\n                                <div class=\"img-slider-warp mart-bot14\">\n                                    <div *ngIf=\"event.image_url\" class=\"sl-box\">\n                                        <img [src]=\"event.image_url\" alt=\"\">\n                                    </div>                  \n                                </div>\n                                <a routerLink=\"/events/{{event.id}}\">\n                                    <div class=\"el-b-b\">\n                                        <h2>{{event.name}}</h2>\n                                        <ul>\n                                            <li><i class=\"date\"></i> {{event.event_date}}</li> \n                                            <li><i class=\"time\"></i> {{event.new_start_time | date:'shortTime'}} - {{event.new_end_time | date:'shortTime'}} AEST</li> \n                                            <li *ngIf=\"event.venue\"><i class=\"address\"></i> {{event.venue}}</li> \n                                        </ul>             \n                                        <div class=\"rsvp\">Read more &amp; RSVP</div>\n                                    </div>\n                                  </a>\n                            </li>           \n                    </ul>\n                  </div>\n                </div>\n              </section>\n    <!--End -->\n   \n   \n   <!-- start CTA block -->\n  <section class=\"cta-block\">\n    <div class=\"container\">\n      <h2 class=\"whithead\">Let's chat about your next home <br> and discuss if Gateway is right <br>for you.</h2>\n      <div class=\"buttons\">\n        <a href='#' data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal-static\" class=\"borbtn\">Get an info pack</a> \n      </div>\n      <p>Or give us a call on 1300 361 311.</p>\n    </div>\n  </section>\n  <!-- end CTA block -->\n  <!-- Get an info pack Modal -->\n  <div class=\"modal fade\" id=\"get-an-info-pack-modal-static\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body no-pad\">\n                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\" >&times;</button>\n                    <div class=\"col-sm-5 col-md-5 right-img-main no-pad hidden-xs hidden-sm\">\n                        <div class=\"right-img-full\">\n                            <div class=\"right-img-full\" style=\"background: url(images/generic-info.jpg) no-repeat center;\"></div>\n                            <!--  <img \n                             [src]=\"comunitylatestDetail.featured_image.url\" alt=\"\" style= \n                             \"height: -webkit-fill-available;\"> -->\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-7 getinfowp\">\n                   \n                        <div class=\"wp-main\">\n                         <h3 style=\"color: #105dac;\">\n                            <div class=\"title-img-round\">\n                                <img src=\"images/Gateway-icon-only-square.png\" alt=\"\" class=\"\">    \n                            </div>\n                            Get an info pack\n                         </h3>\n                         <!-- <div class=\"profile-row\">\n                            <div class=\"profile-img\"><img src=\"images/img11.png\" alt=\"\"></div> \n                            <p><strong> Melinda James</strong> | +61 421 223 221 | melinda.james@gty.com.au</p>\n                         </div> -->\n                         <div class=\"divider\"></div>\n<!--                         <div class=\"form-getinfo-succes\">\n                            <div class=\"row\">\n                            <div class=\"col-sm-2\"><img src=\"images/form-sucess.png\" alt=\"\"></div>    \n                            <div class=\"col-sm-10\"><p class=\"pera-textbig\"> Thank you for your enquiry. We've emailed you the info pack. You can view it by clicking the button below.</p>\n                            <button (click)=\"infoPdf(genericInfo.info_pack?.info_pdf.url)\" \n                             class=\"btn btn-org\">View the info pack Now</button></div>\n                            </div>\n                        </div> -->\n                         <div class=\"form-wp-getinfo\">\n                             <div class=\"row\">\n                                <!-- form starts here-->\n                                <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\" \n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required> \n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>  \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\" \n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\" \n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\" #plan=\"ngModel\">   \n                                        </div>\n                                    </div>  \n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\" \n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\" \n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>  \n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p> \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\" \n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div> \n                                    <div class=\"col-sm-12\">\n                                    <button  class=\"btn btn-org\"  id=\"send-sucess\"\n                                     (click)=\"getInfo(infoForm)\" style=\"background: #105dac; border-color:#105dac;\" \n                                    (mouseover)=\"changeColor($event)\" \n                                    (mouseout)=\"changeColor($event)\" type=\"submit\">Get an info pack</button>\n                                    </div>\n                                </form>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end  Get an info pack Modal -->"

/***/ }),

/***/ "../../../../../src/app/event/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsComponent = (function () {
    function EventsComponent(router, apiService, segment) {
        this.router = router;
        this.apiService = apiService;
        this.segment = segment;
        this.isDataAvailable = false;
        this.filter = '';
        this.key = 'start_time'; //set default
        this.reverse = false;
        this.states = ['new south wales', 'queensland', 'victoria'];
        this.submitted = false;
        this.info = { firstname: '', lastname: '', phone: '', email: '' };
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
        this.apiService.getEventsList('/events').subscribe(function (res) {
            console.log(res);
            _this.isDataAvailable = true;
            _this.events = res.events;
            _this.originalLength = res.events.length;
            var startTime;
            var endTime;
            var new_start_time;
            var new_end_time;
            for (var i = 0; i < _this.events.length; i++) {
                if (_this.events[i].name) {
                    _this.events[i].orderby_name = _this.events[i].name.toLowerCase();
                }
                if (_this.events[i].state) {
                    _this.events[i].state = _this.events[i].state.toLowerCase();
                }
                startTime = new Date(_this.events[i].start_time);
                endTime = new Date(_this.events[i].end_time);
                new_start_time = new Date(startTime.getUTCFullYear(), startTime.getUTCMonth(), startTime.getUTCDate(), startTime.getUTCHours(), startTime.getUTCMinutes(), startTime.getUTCSeconds());
                new_end_time = new Date(endTime.getUTCFullYear(), endTime.getUTCMonth(), endTime.getUTCDate(), endTime.getUTCHours(), endTime.getUTCMinutes(), endTime.getUTCSeconds());
                var _date = new Date(_this.events[i].start_time).toUTCString();
                var event_date = _date.substring(5, 16);
                _this.events[i]["event_date"] = event_date;
                _this.events[i]["new_start_time"] = new_start_time;
                _this.events[i]["new_end_time"] = new_end_time;
            }
            window.localStorage.setItem('events', JSON.stringify(_this.events));
            _this.geoLocation("1");
            _this.getGenericInfopack();
        }, function (err) {
            console.log(err);
        });
    };
    EventsComponent.prototype.geoLocation = function (key) {
        this.events = JSON.parse(window.localStorage.getItem('events'));
        var that = this;
        if (this.events.length) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    for (var i = 0; i < that.events.length; i++) {
                        that.events[i].distance = that.calculateDistance(that.events[i].latitude, pos.lat, that.events[i].longitude, pos.lng);
                    }
                    window.localStorage.setItem('events', JSON.stringify(that.events));
                    if (key == 'distance') {
                        that.key = key;
                        that.reverse = !that.reverse;
                    }
                }, function () {
                });
            }
        }
    };
    EventsComponent.prototype.calculateDistance = function (lat1, lat2, long1, long2) {
        var p = 0.017453292519943295; // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c((lat1) * p) * (1 - c(((long1 - long2) * p))) / 2;
        var dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
        return dis;
    };
    EventsComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    EventsComponent.prototype.gotoPage = function (id) {
        this.router.navigateByUrl('/events/' + id);
    };
    EventsComponent.prototype.getEventsList = function (value) {
        if ((this.states).indexOf(value) == -1) {
            this.states.push(value);
        }
        else {
            (this.states).splice((this.states).indexOf(value), 1);
        }
        if (this.states.length == 0) {
            this.events = JSON.parse(window.localStorage.getItem('events'));
        }
        else {
            this.events = [];
            var eventsData = JSON.parse(window.localStorage.getItem('events'));
            for (var i = 0; i < eventsData.length; i++) {
                if ((this.states).indexOf(eventsData[i].state.toLowerCase()) != -1) {
                    this.events.push(eventsData[i]);
                }
            }
        }
    };
    EventsComponent.prototype.getGenericInfopack = function () {
        var _this = this;
        this.apiService.get('/pdf_info_packs/featured_pack').subscribe(function (res) {
            _this.genericInfo = res;
            window.localStorage.setItem('generic_url', _this.genericInfo.info_pack.info_pdf.url);
        });
    };
    EventsComponent.prototype.getInfo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var userData = {};
            userData.firstname = this.info.firstname;
            userData.lastname = this.info.lastname;
            userData.plan = this.info.plan;
            userData.phone = this.info.phone;
            userData.email = this.info.email;
            userData.description = this.info.area;
            window.localStorage.setItem('generic_data', JSON.stringify(userData));
            console.log('success!');
            this.segment.track('GetInfoPack', {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area
            }).then(function () {
                window.localStorage.setItem('genericCheck', '1');
                _this.router.navigateByUrl('/success');
                $('#get-an-info-pack-modal-static')[0].style.display = 'none';
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                console.log("Event sended");
            });
        }
        else {
            console.log('validation failed!');
        }
    };
    EventsComponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : '#105dac';
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#ffffff';
    };
    EventsComponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#414952';
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'events-page',
            template: __webpack_require__("../../../../../src/app/event/events.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _c || Object])
    ], EventsComponent);
    return EventsComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=events.component.js.map

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <!-- Header width bg - fixed version -->\n\t<section class=\"hfsl-banner faq-hero-section faq-banner\" [ngStyle]=\"{'background-image': 'url(' + bgimg + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n\t\t<div class=\"overlay\"></div>\n\t\t<div class=\"context\">\n\t\t\t<div class=\"container\">\n\t\t\t\t <h2>{{howworkHeroheading}}</h2>\n        \t\t <p>{{howworkHerotext}}</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"dwn-pdf\">\n\t\t\t<a download href=\"{{howworkpdf}}\" target=\"_blank\">Download <span>pdf</span></a>\n\t\t</div>\n\t</section>\n    <!-- Header width bg - fixed version end -->\n\n\n\n\t<!-- faq white section - fixed version -->\n    <section class=\"faq white\" *ngIf=\"showData\">\n    \t<div class=\"container\">\n    \t\t<div class=\"panel-group\">\n    \t\t \t<div class=\"panel panel-default\" *ngFor=\"let query of heroheading; let j = index;\">\n    \t\t\t  <div class=\"panel-heading\">\n    \t\t\t\t<div class=\"panel-title\">\n    \t\t\t\t  <a data-toggle=\"collapse\" class=\"collapsed\" href=\"#collapse{{j}}\">{{query.Question}} </a>\n    \t\t\t\t</div>\n\n    \t\t\t  <div id=\"collapse{{j}}\" class=\"panel-collapse collapse\">\n    \t\t\t\t<div class=\"panel-data\">{{query.Description}}</div>\n    \t\t\t\t</div>\n    \t\t\t  </div>\n\n    \t\t\t</div>\n\n    \t\t</div>\n\n      </div>\n    </section>\n    <!-- faq white section - fixed version end -->\n\n    <section class=\"how-work\" [ngStyle]=\"{'background-image': 'url(' + imageId + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"work-title\">\n          <h3>{{howItWorksHeading.howItWorksHeading}}</h3>\n          <p>{{howItWorksHeading.howItWorksDescription}}</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"how-work-main\">\n          <div class=\"col-md-4\">\n                        <div class=\"work-col\"   >\n                            <div  class=\"icon\"><img src=\"{{image1}}\"></div>\n                            <h4>{{howItWorksHeading.howItWorksHeadingBold}}</h4>\n                            <p>{{howItWorksHeading.paragraphText}}</p>\n\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"work-col\"   >\n                            <div  class=\"icon\"><img src=\"{{image2}}\"></div>\n                            <h4>{{howItWorksHeading.howItWorksHeadingBold2}}</h4>\n                            <p>{{howItWorksHeading.sectionParagraph2}}</p>\n\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"work-col\"   >\n                            <div  class=\"icon\"><img src=\"{{image3}}\"></div>\n                            <h4>{{howItWorksHeading.howItWorksHeadingBold3}}</h4>\n                            <p>{{howItWorksHeading.sectionParagraph3}}</p>\n\n                        </div>\n                    </div>\n        </div>\n      </div>\n    </div>\n\n\n  </section>\n\n\n\n    <!-- How it work section - fixed version -->\n\n\n\n   <!-- faq white section - fixed version -->\n   <!--  <section class=\"faq white\">\n    \t<div class=\"container\">\n    \t\t<div class=\"panel-group\">\n\n    \t\t\t<div class=\"panel panel-default\">\n    \t\t\t  <div class=\"panel-heading\">\n    \t\t\t\t<div class=\"panel-title\">\n    \t\t\t\t  <a data-toggle=\"collapse\" class=\"collapsed\" href=\"#collapse11\">Are there any legal costs or stamp duty payable when I purchase? </a>\n    \t\t\t\t</div>\n\n    \t\t\t  <div id=\"collapse11\" class=\"panel-collapse collapse\">\n    \t\t\t\t<div class=\"panel-data\">No, there are no Government charges such as stamp duty, you are not even required to engage a Solicitor unless you desire to do so.</div>\n    \t\t\t\t</div>\n    \t\t\t  </div>\n\n    \t\t\t</div>\n\n    \t\t\t<div class=\"panel panel-default\">\n    \t\t\t  <div class=\"panel-heading\">\n    \t\t\t\t<div class=\"panel-title\">\n    \t\t\t\t  <a data-toggle=\"collapse\" class=\"collapsed\" href=\"#collapse12\">How secure is my tenure? </a>\n    \t\t\t\t</div>\n\n    \t\t\t  <div id=\"collapse12\" class=\"panel-collapse collapse\">\n    \t\t\t\t<div class=\"panel-data\">The tenure is secured by a site agreement which is similar to a lease. Each state is governed by different legislation, so site agreements may vary from state to state.</div>\n    \t\t\t\t</div>\n    \t\t\t  </div>\n    \t\t\t</div>\n\n    \t\t\t<div class=\"panel panel-default\">\n    \t\t\t  <div class=\"panel-heading\">\n    \t\t\t\t<div class=\"panel-title\">\n    \t\t\t\t  <a data-toggle=\"collapse\" class=\"collapsed\" href=\"#collapse13\">Can my family or friends stay with me? </a>\n    \t\t\t\t</div>\n\n    \t\t\t\t <div id=\"collapse13\" class=\"panel-collapse collapse\">\n    \t\t\t\t\t<div class=\"panel-data\">Yes, your guests can stay and enjoy the community facilities and activities. As a security measure you will need to advise management for any extended stay by visitors. Children are also welcome, but they do need to be supervised whilst in the community.</div>\n    \t\t\t\t</div>\n    \t\t\t  </div>\n    \t\t\t</div>\n    \t\t\t<div class=\"panel panel-default\">\n    \t\t\t  <div class=\"panel-heading\">\n    \t\t\t\t<div class=\"panel-title\">\n    \t\t\t\t  <a data-toggle=\"collapse\" class=\"collapsed\" href=\"#collapse14\">Are singles welcome? </a>\n    \t\t\t\t</div>\n\n    \t\t\t\t <div id=\"collapse14\" class=\"panel-collapse collapse\">\n    \t\t\t\t\t<div class=\"panel-data\">Yes, most defnitely, our single residents bloom when they are welcomed into the community, quickly making new friends and taking up new interests.</div>\n    \t\t\t\t</div>\n    \t\t\t  </div>\n    \t\t\t</div>\n    \t\t\t<div class=\"panel panel-default\">\n    \t\t\t  <div class=\"panel-heading\">\n    \t\t\t\t<div class=\"panel-title\">\n    \t\t\t\t  <a data-toggle=\"collapse\" class=\"collapsed\" href=\"#collapse15\">Can I bring my own pet? </a>\n    \t\t\t\t</div>\n\n    \t\t\t\t <div id=\"collapse15\" class=\"panel-collapse collapse\">\n    \t\t\t\t\t<div class=\"panel-data\">Most of our communities are pet friendly, however a pet agreement needs to be signed prior to moving into the community.</div>\n    \t\t\t\t</div>\n    \t\t\t  </div>\n    \t\t\t</div>\n\n    \t\t\t<div class=\"panel panel-default\">\n    \t\t\t  <div class=\"panel-heading\">\n    \t\t\t\t<div class=\"panel-title\">\n    \t\t\t\t  <a data-toggle=\"collapse\" class=\"collapsed\" href=\"#collapse16\">Are the homes covered by builder’s warranties? </a>\n    \t\t\t\t</div>\n\n    \t\t\t\t <div id=\"collapse16\" class=\"panel-collapse collapse\">\n    \t\t\t\t\t<div class=\"panel-data\">Yes, there is a six year structural warranty on all new homes including a three month maintenance period. If you purchase a pre-loved home in an existing community the remaining warranties are transferred to you.</div>\n    \t\t\t\t</div>\n    \t\t\t  </div>\n    \t\t\t</div>\n\n\t\t\t\t<div class=\"panel panel-default\">\n    \t\t\t  <div class=\"panel-heading\">\n    \t\t\t\t<div class=\"panel-title\">\n    \t\t\t\t  <a data-toggle=\"collapse\" class=\"collapsed\" href=\"#collapse17\">Can I bequeath my home?</a>\n    \t\t\t\t</div>\n\n    \t\t\t\t <div id=\"collapse17\" class=\"panel-collapse collapse\">\n    \t\t\t\t\t<div class=\"panel-data\">Yes, the home becomes a part of your estate. Your beneficiaries can reside in the community if they meet the criteria, or they simply sell the home.</div>\n    \t\t\t\t</div>\n    \t\t\t  </div>\n    \t\t\t</div>\n\n\t\t\t\t<div class=\"panel panel-default\">\n    \t\t\t  <div class=\"panel-heading\">\n    \t\t\t\t<div class=\"panel-title\">\n    \t\t\t\t  <a data-toggle=\"collapse\" class=\"collapsed\" href=\"#collapse18\">Are the homes treated for pests or termites? </a>\n    \t\t\t\t</div>\n\n    \t\t\t\t <div id=\"collapse18\" class=\"panel-collapse collapse\">\n    \t\t\t\t\t<div class=\"panel-data\">Yes, the homes are constructed with termite resistant products and are treated in accordance with the local Council building regulations and Australian Standards. Each home will need to be treated annually at the owner’s expense.</div>\n    \t\t\t\t</div>\n    \t\t\t  </div>\n    \t\t\t</div>\n\n\n\n    \t\t</div>\n\n      </div>\n    </section> -->\n     <!-- faq white section - fixed version  end -->\n\n\n\t<!--from-our-blog section - fixed version -->\n   \t<section class=\"from-our-blog\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"blog-section-heading\">\n\t\t\t\t<h3>{{ourBlogsTitle}}</h3>\n\t\t\t\t<p>{{ourBlogsDescription}}</p>\n\t\t\t</div>\n\t\t\t<div class=\"blog-list\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"{{blogLink1}}\" target=\"_blank\">\n\t\t\t\t\t\t<div class=\"blog-single-div blog-post-1\" [ngStyle]=\"{'background-image': 'url(' + blogBackgroundImage1 + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n\t\t\t\t\t\t\t<h3>{{blogTitle1}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"{{blogLink2}}\" target=\"_blank\">\n\t\t\t\t\t\t<div class=\"blog-single-div blog-post-2\" [ngStyle]=\"{'background-image': 'url(' + blogBackgroundImage2 + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n\t\t\t\t\t\t\t<h3>{{blogTitle2}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"{{blogLink3}}\" target=\"_blank\">\n\t\t\t\t\t\t<div class=\"blog-single-div blog-post-3\" [ngStyle]=\"{'background-image': 'url(' + blogBackgroundImage3 + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n\t\t\t\t\t\t\t<h3>{{blogTitle3}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"more-articles\">\n                <a href=\"https://live.gatewaylifestyle.com.au/\" target=\"_blank\">{{exploreMoreButton}}</a>\n            </div>\n\t\t</div>\n\t</section>\n    <!--from-our-blog section - fixed version end -->\n\n\n    <!-- featured homes Section - fixed version -->\n\t<section class=\"sale-at-Aspley our-home-designe padtop90\" id=\"featured-home\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<h2 class=\"heading\">Featured homes</h2>\n\t\t\t\t<div class=\"heading-right-link\"><a routerLink=\"/homes-for-sale\">Discover all {{homeCount}} homes for sale</a></div>\n\t\t\t\t<div class=\"divider\"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"tab-content\">\n\t\t\t<!-- all homes tab -->\n\t\t\t<div role=\"tabpanel\" class=\"tab-pane active\" id=\"All-homes\">\n\t\t\t\t<div class=\"lookingsomthing-warp home-carousel\">\n\t\t\t\t\t<div class=\"inner-box-warp\">\n\n\t\t\t\t\t\t<div class=\"center slider\">\n\t\t\t\t\t\t\t<!-- community card -->\n\t\t\t\t\t\t\t<div *ngFor=\"let home of featuredHomes;let jj = index\">\n\t\t\t\t\t\t\t\t<ul class=\"home-for-sale\">\n\t\t\t\t\t\t\t\t\t<li class=\"detail-list\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-slider-warp mart-bot14\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sl-box\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"home.status=='sold'\" class=\"paid-btn\">sold</span>\n\n                                                    <span *ngIf=\"home.status=='under_offer'\" class=\"paid-btn\" style=\"background: #f89923;\">Under Offer</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"carousel{{jj}}\" class=\"carousel slide\" data-interval=\"false\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-inner home-carousel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item\" *ngFor=\"let _image of home.images;let ii = index\" [ngClass]=\"{active: ii===0}\">\n\t\t\t\t\t\t\t                                  <img\n\t\t\t\t\t\t\t                                  [src]=\"_image\"\n\t\t\t\t\t\t\t                                  alt=\"\">\n\t\t\t\t\t\t\t                              </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"left carousel-control\" href=\"#carousel{{jj}}\" data-slide=\"prev\">‹</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"right carousel-control\" href=\"#carousel{{jj}}\" data-slide=\"next\">›</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n                                            <a href=\"homes-for-sale/{{home.id}}\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pr-b\" *ngIf=\"home?.list_price\">${{home?.list_price | number:'1.0'}}</div>\n\t\t\t\t\t\t\t\t\t\t\t<p>{{home.address}} {{home.address1}}</p>\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"margt25\"><i class=\"sicon\" [ngStyle]=\"{'background-image': 'url(' + home?.community?.community_icon?.url + ')','background-repeat': 'no-repeat','background-position': 'center'}\"></i> Located in {{home.community.first_name}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"afs-wp\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"bed\"></i> {{home.no_of_bedrooms}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"tub\"></i> {{home.no_of_bathrooms}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"car\"></i> {{home.car_space}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"home?.record_type == 'Pre-loved'\" class=\"new-btn new-btn\" style=\"border: 1px solid #62717f; color: #62717f!important; \">Pre Loved</div>\n                                                <div *ngIf=\"home?.record_type == 'New'\" class=\"new-btn new-btn\">New</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- end of all homes tab -->\n\t\t</div>\n\n\n\t</section>\n\t<!-- featured homes Section - fixed version end -->\n\n    <!-- start CTA block - fixed version -->\n    <section class=\"cta-block\">\n        <div class=\"container\">\n            <h2 class=\"whithead\">{{standardCtaInfoPackDescription}}</h2>\n            <div class=\"buttons\">\n                <a href='#' data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal-static\" class=\"borbtn\">{{standardCtaInfoPackButtonText}}</a>\n            </div>\n            <p>{{standardCtaInfoPackAfterButtonText}}</p>\n        </div>\n    </section>\n     <!-- start CTA block - fixed version end -->\n\n    <!-- Get an info pack Modal -->\n  <div class=\"modal fade\" id=\"get-an-info-pack-modal-static\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body no-pad\">\n                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  (mouseover)=\"onHover($event)\"\n                                    (mouseout)=\"onHover($event)\" >&times;</button>\n                    <div class=\"col-sm-5 col-md-5 right-img-main no-pad hidden-xs hidden-sm\">\n                        <div class=\"right-img-full\">\n                            <div class=\"right-img-full\" style=\"background: url(images/generic-info.jpg) no-repeat center;\"></div>\n                            <!--  <img\n                             [src]=\"comunitylatestDetail.featured_image.url\" alt=\"\" style=\n                             \"height: -webkit-fill-available;\"> -->\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-7 getinfowp\">\n\n                        <div class=\"wp-main\">\n                         <h3 style=\"color: #105dac;\">\n                            <div class=\"title-img-round\">\n                                <img src=\"images/Gateway-icon-only-square.png\" alt=\"\" class=\"\">\n                            </div>\n                            Get an info pack\n                         </h3>\n                         <!-- <div class=\"profile-row\">\n                            <div class=\"profile-img\"><img src=\"images/img11.png\" alt=\"\"></div>\n                            <p><strong> Melinda James</strong> | +61 421 223 221 | melinda.james@gty.com.au</p>\n                         </div> -->\n                         <div class=\"divider\"></div>\n<!--                         <div class=\"form-getinfo-succes\">\n                            <div class=\"row\">\n                            <div class=\"col-sm-2\"><img src=\"images/form-sucess.png\" alt=\"\"></div>\n                            <div class=\"col-sm-10\"><p class=\"pera-textbig\"> Thank you for your enquiry. We've emailed you the info pack. You can view it by clicking the button below.</p>\n                            <button (click)=\"infoPdf(genericInfo.info_pack?.info_pdf.url)\"\n                             class=\"btn btn-org\">View the info pack Now</button></div>\n                            </div>\n                        </div> -->\n                         <div class=\"form-wp-getinfo\">\n                             <div class=\"row\">\n                                <!-- form starts here-->\n                                <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\"\n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\"\n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\"\n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\"\n                                           [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\"\n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\" #plan=\"ngModel\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\"\n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\"\n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\"\n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                    <button  class=\"btn btn-org\"  id=\"send-sucess\"\n                                     (click)=\"getInfo(infoForm)\" style=\"background: #105dac; border-color:#105dac;\"\n                                    (mouseover)=\"changeColor($event)\"\n                                    (mouseout)=\"changeColor($event)\" type=\"submit\">Get an info pack</button>\n                                    </div>\n                                </form>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end  Get an info pack Modal -->\n"

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FAQComponent = (function () {
    function FAQComponent(apiService, router, segment) {
        this.apiService = apiService;
        this.router = router;
        this.segment = segment;
        this.heroheading = [];
        this.steps = [];
        this.howItWorksHeading = {};
        this.backgroundImage = {};
        this.showData = false;
        this.submitted = false;
        this.info = { firstname: '', lastname: '', phone: '', email: '' };
        this.chatData = {};
        this.isDataAvailable = false;
    }
    FAQComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
        this.getGenericInfopack();
        var that = this;
        //fetching the list of featured homes
        this.apiService.get('/home_for_sales/featured_home').subscribe(function (res) {
            _this.isDataAvailable = true;
            _this.featuredHomes = res.homes;
            $.getScript('js/customSlick.js');
        }, function (err) {
            console.log(err);
        });
        //count of homes
        this.apiService.get('/communities/count_for_home_and_community').subscribe(function (res) {
            _this.homeCount = res.home_count;
        }, function (err) {
            console.log(err);
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/10h4Zli6MwKKQOuya0smM2?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.blogLink1 = data.fields.blogLink1;
            that.blogLink2 = data.fields.blogLink2;
            that.blogLink3 = data.fields.blogLink3;
            that.blogTitle1 = data.fields.blogTitle1;
            that.blogTitle2 = data.fields.blogTitle2;
            that.blogTitle3 = data.fields.blogTitle3;
            that.exploreMoreButton = data.fields.exploreMoreButton;
            that.ourBlogsDescription = data.fields.ourBlogsDescription;
            that.ourBlogsTitle = data.fields.ourBlogsTitle;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.blogBackgroundImage1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.blogBackgroundImage1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.blogBackgroundImage2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.blogBackgroundImage2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.blogBackgroundImage3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.blogBackgroundImage3 = data.fields.file.url;
            });
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.standardCtaInfoPackDescription = data.fields.standardCtaInfoPackDescription;
            that.standardCtaInfoPackButtonText = data.fields.standardCtaInfoPackButtonText;
            that.standardCtaInfoPackAfterButtonText = data.fields.standardCtaInfoPackAfterButtonText;
        });
        //How it work
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/6bvyAwb7hemaakY808u0YO?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.howworkHeroheading = data.fields.heroheading;
            that.howworkHerotext = data.fields.Herotext;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.Fullwidthbackgroundimage.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.bgimg = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.downloadpdf.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.howworkpdf = data.fields.file.url;
            });
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/53s8poBY8oyMeA86qqGaEI?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            for (var i = 1; i <= Object.keys(data.fields).length / 2; ++i) {
                that.heroheading.push({ 'Question': data.fields["faqTitle" + i],
                    'Description': data.fields["faqDescription" + i] });
            }
        });
        that.showData = true;
        /*  $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1F0bexMbKcmkaOkEW4UEIg?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
           function(data, status){
           that.howItWorksHeading= data.fields;
     
           for(var i=1; i<=Object.keys(data).length+1;++i){
             that.steps.push({'Heading': data.fields["howItWorksHeadingBold" + i],
                   'Description': data.fields["description" + i]})
             }
     
     
     
             $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.fullWidthImageBackground.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
                   function(data,status){
                 
                   that.imageId= data.fields.file.url;
     
                   });
     
         })*/
        // Three images/pdf   
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1F0bexMbKcmkaOkEW4UEIg?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.howItWorksHeading = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.fullWidthImageBackground.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.imageId = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["howItWorksIcon1"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["howItWorksIcon2"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["howItWorksIcon3"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image3 = data.fields.file.url;
            });
        });
    };
    FAQComponent.prototype.getGenericInfopack = function () {
        var _this = this;
        this.apiService.get('/pdf_info_packs/featured_pack').subscribe(function (res) {
            _this.genericInfo = res;
            window.localStorage.setItem('generic_url', _this.genericInfo.info_pack.info_pdf.url);
        });
    };
    FAQComponent.prototype.getInfo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var userData = {};
            userData.firstname = this.info.firstname;
            userData.lastname = this.info.lastname;
            userData.plan = this.info.plan;
            userData.phone = this.info.phone;
            userData.email = this.info.email;
            userData.description = this.info.area;
            window.localStorage.setItem('generic_data', JSON.stringify(userData));
            console.log('success!');
            this.segment.track('GetInfoPack', {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area
            }).then(function () {
                window.localStorage.setItem('genericCheck', '1');
                _this.router.navigateByUrl('/success');
                $('#get-an-info-pack-modal-static')[0].style.display = 'none';
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                console.log("Event sended");
            });
        }
        else {
            console.log('validation failed!');
        }
    };
    FAQComponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : '#105dac';
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#ffffff';
    };
    FAQComponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#414952';
    };
    FAQComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__("../../../../../src/app/faq/faq.component.html"),
            styles: [__webpack_require__("../../../../../src/app/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _c || Object])
    ], FAQComponent);
    return FAQComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=faq.component.js.map

/***/ }),

/***/ "../../../../../src/app/faq/faq.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return faqModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var faqRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'faqs',
        component: __WEBPACK_IMPORTED_MODULE_2__faq_component__["a" /* FAQComponent */]
    }
]);
var faqModule = (function () {
    function faqModule() {
    }
    faqModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* SharedModule */],
                faqRouting
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faq_component__["a" /* FAQComponent */]
            ],
            providers: []
        })
    ], faqModule);
    return faqModule;
}());

//# sourceMappingURL=faq.module.js.map

/***/ }),

/***/ "../../../../../src/app/getintouch/getintouch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/getintouch/getintouch.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Get in touch Heading - fixed version -->\n\t<section class=\"communities\">\n\t\t <div class=\"container\">\n\t\t\t<h2>{{address.getInTouchHeading}}</h2>\n\t\t\t<div class=\"row topbox-con\">\n\t\t\t  <div class=\"col-sm-4\">\n\t\t\t\t<p class=\"pera-textbig\" >\n\t\t\t\t\t<markdown [data]=\"address.residentDescription\"></markdown>\n\t\t\t\t</p>\n\t\t\t\t<p></p>\n\t\t\t\t<!-- <p class=\"pera-textbig\"> <a href=\"#\">1300 361 311 </a><br><a href=\"mailto:sales@gty.com.au\">sales@gty.com.au</a></p> -->\n\t\t\t  </div>\n\t\t\t  <div class=\"col-sm-4\">\n\t\t\t\t<p class=\"pera-textbig\" >\n\t\t\t\t<markdown [data]=\"address.generalEnquiriesDescription\"></markdown>\n\t\t\t\t</p>\n\t\t\t\t<p></p>\n\t\t\t\t<!-- <p class=\"pera-textbig\"><a href=\"#\"> +61 2 8818 9600</a> <br><a href=\"mailto:info@gty.com.au\">info@gty.com.au</a></p> -->\n\t\t\t  </div>\n\t\t\t  <div class=\"col-sm-4\">\n\t\t\t\t<p class=\"pera-textbig\" >\n\t\t\t\t<markdown [data]=\"address.investorEnquiriesDescription\"></markdown>\n\t\t\t\t</p>\n\t\t\t\t<p></p>\n\t\t\t\t<!-- <p class=\"pera-textbig\"><a href=\"#\">+61 2 8818 9600</a> <br><a href=\"mailto:investors@gty.com.au\">investors@gty.com.au</a></p> -->\n\t\t\t  </div>  \n\t\t\t</div>\n\t\t </div>\n\t </section>\n\t<!-- Get in touch Heading - fixed version end -->\n\t \n\t \n\t<!-- Get in touch form and address - fixed version -->\n\t<section class=\"getintouch-form-warp\">\n\t\t<div class=\"container\">\n\t\t\t <div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12 pull-right col-xs-12  col-md-4\">\n\t\t\t\t\t<div class=\"address-boxes\">\n\t\t\t\t\t\t<div class=\"box\" *ngFor=\"let query of getinTouch;let i = index;\">                        \n\t\t\t\t\t\t   <div class=\"box1\" [ngStyle]=\"{'background': 'url(' + query.image + ')','background-repeat': 'no-repeat','background-position': 'center'}\" >\n\t\t\t\t\t\t\t\t<div class=\"content-wp\" >\n\t\t\t\t\t\t\t\t\t<h2>{{query.Heading}}</h2>\n\t\t\t\t\t\t\t\t\t<p>{{query.Description}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t<div class=\"git-form\">\n\t\t\t\t\t\t <div class=\"row\">\n\t\t\t\t\t\t <!-- form starts here-->\n                           <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\" \n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required> \n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>  \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\" \n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\" \n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\" #plan=\"ngModel\">   \n                                        </div>\n                                    </div>  \n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\" \n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\" \n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>  \n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p> \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\" \n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div> \n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<button class=\"btn-blue\" id=\"send-sucess\"\n                                     (click)=\"getInfo(infoForm)\" \n                                    type=\"submit\">Get in touch</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t </form>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t </div>\n\t\t\t\t</div>\n\t\t\t </div>\n\t\t</div>\n\t</section>\n\t<!-- Get in touch form and address - fixed version end -->\n  \n    <!-- featured homes Section - fixed version -->\n\t<section class=\"sale-at-Aspley padbot0 margbot80 margtop0\" id=\"featured-home\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<h2 class=\"heading\">Featured homes</h2>\n\t\t\t\t<div class=\"heading-right-link\"><a routerLink=\"/homes-for-sale\">Discover all {{homeCount}} homes for sale</a></div>\n\t\t\t\t<div class=\"divider\"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"tab-content\">\n\t\t\t<!-- all homes tab -->\n\t\t\t<div role=\"tabpanel\" class=\"tab-pane active\" id=\"All-homes\">\n\t\t\t\t<div class=\"lookingsomthing-warp home-carousel\">\n\t\t\t\t\t<div class=\"inner-box-warp\">\n\n\t\t\t\t\t\t<div class=\"center slider\">\n\t\t\t\t\t\t\t<!-- community card -->\n\t\t\t\t\t\t\t<div *ngFor=\"let home of featuredHomes;let jj = index\">\n\t\t\t\t\t\t\t\t<ul class=\"home-for-sale\">\n\t\t\t\t\t\t\t\t\t<li class=\"detail-list\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-slider-warp mart-bot14\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sl-box\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"home.status=='sold'\" class=\"paid-btn\">sold</span>\n\n                                                    <span *ngIf=\"home.status=='under_offer'\" class=\"paid-btn\" style=\"background: #f89923;\">Under Offer</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"carousel{{jj}}\" class=\"carousel slide\" data-interval=\"false\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-inner home-carousel\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item\" *ngFor=\"let _image of home.images;let ii = index\" [ngClass]=\"{active: ii===0}\">\n\t\t\t\t\t\t\t                                  <img \n\t\t\t\t\t\t\t                                  [src]=\"_image\" \n\t\t\t\t\t\t\t                                  alt=\"\">\n\t\t\t\t\t\t\t                              </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"left carousel-control\" href=\"#carousel{{jj}}\" data-slide=\"prev\">‹</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"right carousel-control\" href=\"#carousel{{jj}}\" data-slide=\"next\">›</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"homes-for-sale/{{home.id}}\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pr-b\" *ngIf=\"home?.list_price\">${{home?.list_price |number:'1.0'}}</div>\n\t\t\t\t\t\t\t\t\t\t\t<p>{{home.address}} {{home.address1}}</p>\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"margt25\"><i class=\"sicon\" [ngStyle]=\"{'background-image': 'url(' + home?.community?.community_icon?.url + ')','background-repeat': 'no-repeat','background-position': 'center'}\"></i> Located in {{home.community.first_name}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"afs-wp\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"bed\"></i> {{home.no_of_bedrooms}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"tub\"></i> {{home.no_of_bathrooms}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"car\"></i> {{home.car_space}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t <div *ngIf=\"home?.record_type == 'Pre-loved'\" class=\"new-btn new-btn\" style=\"border: 1px solid #62717f; color: #62717f!important; \">Pre Loved</div>\n                                                <div *ngIf=\"home?.record_type == 'New'\" class=\"new-btn new-btn\">New</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- end of all homes tab -->\n\t\t</div>\n\n\n\t</section>\n\t<!-- featured homes Section - fixed version -->"

/***/ }),

/***/ "../../../../../src/app/getintouch/getintouch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetintouchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetintouchComponent = (function () {
    function GetintouchComponent(apiService, router, segment) {
        this.apiService = apiService;
        this.router = router;
        this.segment = segment;
        this.address = {};
        this.showData = false;
        this.getinTouch = [];
        this.getinTouchHeading = [];
        this.submitted = false;
        this.info = { firstname: '', lastname: '', phone: '', email: '' };
    }
    GetintouchComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
        //fetching the list of featured homes
        this.apiService.get('/home_for_sales/featured_home').subscribe(function (res) {
            _this.featuredHomes = res.homes;
            $.getScript('js/customSlick.js');
            _this.getGenericInfopack();
        }, function (err) {
            console.log(err);
        });
        //count of homes
        this.apiService.get('/communities/count_for_home_and_community').subscribe(function (res) {
            _this.homeCount = res.home_count;
        }, function (err) {
            console.log(err);
        });
        var that = this;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/6YIrecwB4AmqgogWCqYQ8k?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            for (var i = 1; i <= Object.keys(data).length; ++i) {
                that.getinTouch.push({ 'Heading': data.fields["addressHeading" + i],
                    'Description': data.fields["addressDescription" + i], 'backgroundImage': data.fields["backgroundImage" + i].sys.id });
            }
            $.each(that.getinTouch, function (i, item) {
                console.log(item);
                $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + item.backgroundImage + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                    console.log(data);
                    that.getinTouch[i].image = data.fields.file.url;
                });
            });
        });
        that.showData = true;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/2551z2CiskC2MsACMeuoSY?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.address = data.fields;
        });
    };
    GetintouchComponent.prototype.getGenericInfopack = function () {
        var _this = this;
        this.apiService.get('/pdf_info_packs/featured_pack').subscribe(function (res) {
            _this.genericInfo = res;
            window.localStorage.setItem('generic_url', _this.genericInfo.info_pack.info_pdf.url);
        });
    };
    GetintouchComponent.prototype.getInfo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var userData = {};
            userData.firstname = this.info.firstname;
            userData.lastname = this.info.lastname;
            userData.plan = this.info.plan;
            userData.phone = this.info.phone;
            userData.email = this.info.email;
            userData.description = this.info.area;
            window.localStorage.setItem('generic_data', JSON.stringify(userData));
            console.log('success!');
            this.segment.track('GetInfoPack', {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area
            }).then(function () {
                window.localStorage.setItem('genericCheck', '1');
                _this.router.navigateByUrl('/success');
                console.log("Event sended");
            });
        }
        else {
            console.log('validation failed!');
        }
    };
    GetintouchComponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : '#105dac';
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#ffffff';
    };
    GetintouchComponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#414952';
    };
    GetintouchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-getintouch',
            template: __webpack_require__("../../../../../src/app/getintouch/getintouch.component.html"),
            styles: [__webpack_require__("../../../../../src/app/getintouch/getintouch.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _c || Object])
    ], GetintouchComponent);
    return GetintouchComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=getintouch.component.js.map

/***/ }),

/***/ "../../../../../src/app/getintouch/getintouch.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getintouchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getintouch_component__ = __webpack_require__("../../../../../src/app/getintouch/getintouch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_markdown__ = __webpack_require__("../../../../angular2-markdown/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var getintouchRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'enquire-now',
        component: __WEBPACK_IMPORTED_MODULE_2__getintouch_component__["a" /* GetintouchComponent */]
    }
]);
var getintouchModule = (function () {
    function getintouchModule() {
    }
    getintouchModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_angular2_markdown__["a" /* MarkdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* SharedModule */],
                getintouchRouting
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__getintouch_component__["a" /* GetintouchComponent */]
            ],
            providers: []
        })
    ], getintouchModule);
    return getintouchModule;
}());

//# sourceMappingURL=getintouch.module.js.map

/***/ }),

/***/ "../../../../../src/app/home-designs/home-designs.component.html":
/***/ (function(module, exports) {

module.exports = "  <section class=\"hfsl-banner our-home-design-hero\" [ngStyle]=\"{'background-image': 'url(' + bgimg + ')','background-repeat': 'no-repeat','background-position': 'center'}\" *ngIf=\"showData\">\n    <div class=\"overlay\"></div>\n    <div class=\"context\">\n      <div class=\"container\">\n         <h2>{{hsection.heroheading}}</h2>\n             <p>{{hsection.Herotext}}</p>\n      </div>\n    </div>\n    <div class=\"dwn-pdf\">\n      <a href=\"{{hdownPDF}}\" target=\"_blank\">Download <span>pdf</span></a>\n    </div>\n  </section>\n   <!-- Header width bg - fixed version  end -->\n\n\n    <!-- Hotspot section  - fixed version end -->\n<section class=\"why-live-here hotspot-page\">\n        <!-- heading starts here -->\n        <div class=\"container\">\n            <div class=\"hotspot-heading\">\n        <h2 class=\"heading\">{{msection.headingText}}</h2>\n        <div class=\"hedig-sub\">{{msection.description}}</div>\n          </div>\n        </div>\n        <!-- heading starts here -->\n        <!--  Sliders starts here -->\n        <div class=\"slider\">\n            <div class=\"container\">\n                <div id=\"myCarousel\" class=\"carousel slide\" data-interval=\"false\" data-ride=\"carousel\">\n                    <!-- Wrapper for slides -->\n                    <div class=\"carousel-inner\">\n                        <div class=\"item active\">\n                            <div class=\"item-inner\">\n                              <img src=\"{{hotspotImage1}}\">\n                              <div class=\"hotspot-hint link1\">\n                                <a class=\"\" href=\"javascript:void(0);\">click</a>\n                                <div class=\"hint-disk\">\n                                  <markdown [data]=\"hhsection.ourHomeHotspotDescription1\"></markdown>\n                                </div>\n                              </div>\n                              <div class=\"hotspot-hint link2\">\n                                <a class=\"\" href=\"javascript:void(0);\">click</a>\n                                <div class=\"hint-disk\">\n                                  <markdown [data]=\"hhsection.ourHomeHotspotDescription2\"></markdown>\n                                </div>\n                              </div>\n                              <div class=\"hotspot-hint link3\">\n                                <a class=\"\" href=\"javascript:void(0);\">click</a>\n                                <div class=\"hint-disk\">\n                                  <markdown [data]=\"hhsection.ourHomeHotspotDescription3\"></markdown>\n                                </div>\n                              </div>\n                              <div class=\"hotspot-hint link4\">\n                                <a class=\"\" href=\"javascript:void(0);\">click</a>\n                                <div class=\"hint-disk\">\n                                  <markdown [data]=\"hhsection.ourHomeHotspotDescription4\"></markdown>\n                                </div>\n                              </div>\n                            </div>\n                        </div>\n                       <div class=\"item\">\n                            <div class=\"item-inner\">\n                              <img src=\"{{hotspotImage2}}\">\n                              <div class=\"hotspot-hint link5\">\n                  <a class=\"\" href=\"javascript:void(0);\">click</a>\n                  <div class=\"hint-disk\">\n                    <markdown [data]=\"hhsection.ourHomeHotspotDescription1Slide2\"></markdown>\n                  </div>\n                </div>\n                <div class=\"hotspot-hint link6\">\n                  <a class=\"\" href=\"javascript:void(0);\">click</a>\n                  <div class=\"hint-disk\">\n                    <markdown [data]=\"hhsection.ourHomeHotspotDescription2Slide2\"></markdown>\n                  </div>\n                </div>\n                <div class=\"hotspot-hint link33\">\n                  <a class=\"\" href=\"javascript:void(0);\">click</a>\n                  <div class=\"hint-disk\">\n                    <markdown [data]=\"hhsection.ourHomeHotspotDescription3Slide2\"></markdown>\n                  </div>\n                </div>\n                <div class=\"hotspot-hint link44\">\n                  <a class=\"\" href=\"javascript:void(0);\">click</a>\n                  <div class=\"hint-disk\">\n                    <markdown [data]=\"hhsection.ourHomeHotspotDescription4Slide2\"></markdown>\n                  </div>\n                </div>\n              </div>\n                        </div>\n                        <div class=\"item\">\n                            <div class=\"item-inner\">\n                              <img src=\"{{hotspotImage3}}\">\n                              <div class=\"hotspot-hint link1\">\n                                <a class=\"\" href=\"javascript:void(0);\">click</a>\n                                <div class=\"hint-disk\">\n                                  <markdown [data]=\"hhsection.ourHomeHotspotDescription1Slide3\"></markdown>\n                                </div>\n                              </div>\n                              <div class=\"hotspot-hint link2\">\n                                <a class=\"\" href=\"javascript:void(0);\">click</a>\n                                <div class=\"hint-disk\">\n                                  <markdown [data]=\"hhsection.ourHomeHotspotDescription2Slide3\"></markdown>\n                                </div>\n                              </div>\n                              <div class=\"hotspot-hint link7\">\n                                <a class=\"\" href=\"javascript:void(0);\">click</a>\n                                <div class=\"hint-disk\">\n                                  <markdown [data]=\"hhsection.ourHomeHotspotDescription3Slide3\"></markdown>\n                                </div>\n                              </div>\n                              <div class=\"hotspot-hint link8\">\n                                <a class=\"\" href=\"javascript:void(0);\">click</a>\n                                <div class=\"hint-disk\">\n                                  <markdown [data]=\"hhsection.ourHomeHotspotDescription4Slide3\"></markdown>\n                                </div>\n                              </div>\n              </div>\n                        </div>\n                        <div class=\"item\">\n                            <div class=\"item-inner\">\n                              <img src=\"{{hotspotImage4}}\">\n                              <div class=\"hotspot-hint link1\">\n                  <a class=\"\" href=\"javascript:void(0);\">click</a>\n                  <div class=\"hint-disk\">\n                    <markdown [data]=\"hhsection.ourHomeHotspotDescription1Slide4\"></markdown>\n                    <!-- <h2>{{hhsection.ourHomeHotspotDescription1Slide4}}</h2> -->\n                  </div>\n                </div>\n                <div class=\"hotspot-hint link2\">\n                  <a class=\"\" href=\"javascript:void(0);\">click</a>\n                  <div class=\"hint-disk\">\n                  <markdown [data]=\"hhsection.ourHomeHotspotDescription2Slide4\"></markdown>\n                    <!-- <h2>{{hhsection.ourHomeHotspotDescription2Slide4}}</h2> -->\n                  </div>\n                </div>\n                <div class=\"hotspot-hint link3\">\n                  <a class=\"\" href=\"javascript:void(0);\">click</a>\n                  <div class=\"hint-disk\">\n                  <markdown [data]=\"hhsection.ourHomeHotspotDescription3Slide4\"></markdown>\n                    <!-- <h2>{{hhsection.ourHomeHotspotDescription3Slide4}}</h2> -->\n                  </div>\n                </div>\n                <div class=\"hotspot-hint link4\">\n                  <a class=\"\" href=\"javascript:void(0);\">click</a>\n                  <div class=\"hint-disk\">\n                  <markdown [data]=\"hhsection.ourHomeHotspotDescription4Slide4\"></markdown>\n                    <!-- <h2>{{hhsection.ourHomeHotspotDescription4Slide4}}</h2> -->\n                  </div>\n                </div>\n              </div>\n                        </div>\n                    </div>\n                    <!-- Left and right controls -->\n                    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n                      <span class=\"fa fa-chevron-left glyphicon-chevron-left\"></span>\n                      <span class=\"sr-only\">Previous</span>\n                    </a>\n                    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n                      <span class=\"fa fa-chevron-right glyphicon-chevron-right\"></span>\n                      <span class=\"sr-only\">Next</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <!--  end Sliders starts here -->\n    </section>\n    <!-- Hotspot section  - fixed version end -->\n\n    <!-- How it work section no image  - fixed version -->\n    <section class=\"how-work no-image our-home-design-howit-work\" *ngIf=\"showData\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"work-title\">\n          <h3>{{dbsection.howItWorksHeading}}</h3>\n          <p>{{dbsection.howItWorksDescription}}</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"how-work-main\">\n          <div class=\"col-md-4\">\n            <div class=\"work-col\">\n              <div class=\"icon\"><img [src]=\"dbimag1\"></div>\n              <h4>{{dbsection.title1}}</h4>\n              <p>{{dbsection.description1}} </p>\n              <div class=\"dwn-pdf\">\n                <a href=\"{{dbpdf1}}\" target=\"_blank\">{{dbsection.downloadPdfTitle1}}</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"work-col\">\n              <div class=\"icon\"><img [src]=\"dbimag2\"></div>\n              <h4>{{dbsection.title2}}</h4>\n              <p>{{dbsection.description2}}</p>\n              <div class=\"dwn-pdf\">\n                <a href=\"{{dbpdf2}}\" target=\"_blank\">{{dbsection.downloadPdfTitle2}}</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"work-col\">\n              <div class=\"icon\"><img [src]=\"dbimag3\"></div>\n              <h4>{{dbsection.title3}}</h4>\n              <p>{{dbsection.description3}}</p>\n              <div class=\"dwn-pdf\">\n                <a href=\"{{dbpdf3}}\" target=\"_blank\">{{dbsection.downloadPdfTitle3}}</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n     <!-- How it work section no image  - fixed version end -->\n\n    <!-- Media gallery - fixed version -->\n    <section class=\"media-gallery-our-home-designe\">\n    <div class=\"media-gallery premium\">\n      <!-- hero display -->\n      <div class=\"banner-res\">\n        <div class=\"ban-slider\">\n          <img src=\"{{sliderImages[0]}}\">\n        </div>\n      </div>\n      <!-- end of hero display -->\n      <!-- modal triggers -->\n      <div class=\"container\">\n          <a href=\"javascript:;\" id=\"firstImageTrigger\" data-eventname=\"photoView\"   class=\"aphotos design\">{{imgslisection.ourHomeFullWidthSliderText}}</a>\n      </div>\n      <!-- modal assets here -->\n      <ul id=\"lightGallery\" class=\"gallery hidden-xs\">\n        <li class=\"gallery-image\" attr.data-img-src=\"{{sliderImages[0]}}\" attr.data-src=\"{{sliderImages[0]}}\">\n          <img src=\"{{sliderImages[0]}}\" alt=\"\" />\n        </li>\n        <li class=\"gallery-image\" attr.data-img-src=\"{{sliderImage}}\" attr.data-src=\"{{sliderImage}}\" *ngFor=\"let sliderImage of sliderImages\">\n        </li>\n        <!-- <li class=\"gallery-image\" attr.data-img-src=\"{{sliderImage2}}\" attr.data-src=\"{{sliderImage2}}\">\n        </li>\n        <li class=\"gallery-image\" attr.data-img-src=\"{{sliderImage3}}\" attr.data-src=\"{{sliderImage3}}\">\n        </li>\n        <li class=\"gallery-image\" attr.data-img-src=\"{{sliderImage4}}\" attr.data-src=\"{{sliderImage4}}\">\n        </li>\n        <li class=\"gallery-image\" attr.data-img-src=\"{{sliderImage5}}\" attr.data-src=\"{{sliderImage5}}\">\n        </li> -->\n        <!-- <li class=\"gallery-image\" data-img-src=\"images/Buchanan.jpg\" data-src=\"images/Buchanan.jpg\">\n        </li>\n        <li class=\"gallery-image\" data-img-src=\"images/Ferguson.jpg\" data-src=\"images/Ferguson.jpg\">\n        </li>\n        <li class=\"gallery-image\" data-img-src=\"images/GL-Greenbanks-Low-Res-02.jpg\" data-src=\"images/GL-Greenbanks-Low-Res-02.jpg\">\n        </li>\n        <li class=\"gallery-image\" data-img-src=\"images/GL-Greenbanks-Low-Res-22.jpg\" data-src=\"images/GL-Greenbanks-Low-Res-22.jpg\">\n        </li> -->\n      </ul>\n      <!-- end of modal assets here -->\n      <div id=\"galleryLoader\" class=\"image-placeholder\">\n        <div class=\"image-loader-wrap with-icon animated\">\n          <div class=\"image-loader\"></div>\n          <span class=\"f-icon\">\n           <span class=\"icon domain-icon-ic_home\"></span>\n          </span>\n        </div>\n      </div>\n      <!-- end of modal triggers -->\n    </div>\n    </section>\n    <!-- end of Media gallery -fixed version end -->\n\n    <!--How we started block - fixed version -->\n  <section class=\"about-top-sec image-with-text-home\" *ngIf=\"showData\">\n    <div class=\"container\">\n      <div class=\"row-first\">\n        <div class=\"img-box\"><img [src]=\"firstImage\" alt=\"\"></div>\n        <div class=\"content-box\">\n          <h3>{{showsection.showcaseImageTitleText1}}</h3>\n          <p>{{showsection.showcaseImageTitleDescription}}</p>\n          <div class=\"circle-blue\"></div>\n        </div>\n      </div>\n      <div class=\"row-first row-second\">\n        <!--<div class=\"circle-blue\"></div>-->\n        <div class=\"img-box\"><img [src]=\"secondImage\" alt=\"\"></div>\n        <div class=\"content-box\">\n          <!--<div class=\"circle-blue up-circle\"></div>-->\n          <h3>{{showsection.showcaseTitle2}}</h3>\n              <p>{{showsection.showcaseDescription2}}</p>\n          <div class=\"circle-blue bottom-circle\"></div>\n        </div>\n      </div>\n      <div class=\"row-first\">\n        <div class=\"circle-blue top-circle\"></div>\n        <div class=\"img-box\"><img [src]=\"thirdImage\" alt=\"\"></div>\n        <div class=\"content-box\">\n          <div class=\"circle-blue\"></div>\n          <h3>{{showsection.showcaseTitle3}}</h3>\n          <p>{{showsection.showcaseDescription3}}</p>\n\n        </div>\n      </div>\n    </div>\n  </section>\n    <!--end How we started - fixed version end-->\n\n    <!-- featured homes Section - fixed version -->\n  <section class=\"sale-at-Aspley our-home-designe\" id=\"featured-home\">\n    <div class=\"container\">\n      <div class=\"card\">\n        <h2 class=\"heading\">Featured homes</h2>\n        <div class=\"heading-right-link\"><a routerLink=\"/homes-for-sale\">Discover all {{homeCount}} homes for sale</a></div>\n        <div class=\"divider\"></div>\n      </div>\n    </div>\n\n    <div class=\"tab-content\">\n      <!-- all homes tab -->\n      <div role=\"tabpanel\" class=\"tab-pane active\" id=\"All-homes\">\n        <div class=\"lookingsomthing-warp home-carousel\">\n          <div class=\"inner-box-warp\">\n\n            <div class=\"center slider\">\n              <!-- community card -->\n              <div *ngFor=\"let home of featuredHomes;let jj = index\">\n                <ul class=\"home-for-sale\">\n                  <li class=\"detail-list\">\n                      <div class=\"img-slider-warp mart-bot14\">\n                        <div class=\"sl-box\">\n                          <span *ngIf=\"home.status=='sold'\" class=\"paid-btn\">sold</span>\n\n                                                    <span *ngIf=\"home.status=='under_offer'\" class=\"paid-btn\" style=\"background: #f89923;\">Under Offer</span>\n                          <div id=\"carousel{{jj}}\" class=\"carousel slide\" data-interval=\"false\">\n                            <div class=\"carousel-inner home-carousel\">\n                            <div class=\"item\" *ngFor=\"let _image of home.images;let ii = index\" [ngClass]=\"{active: ii===0}\">\n                                                <img\n                                                [src]=\"_image\"\n                                                alt=\"\">\n                                            </div>\n                            </div>\n                            <a class=\"left carousel-control\" href=\"#carousel{{jj}}\" data-slide=\"prev\">‹</a>\n                            <a class=\"right carousel-control\" href=\"#carousel{{jj}}\" data-slide=\"next\">›</a>\n                          </div>\n\n                        </div>\n                      </div>\n                                            <a href=\"homes-for-sale/{{home.id}}\">\n                      <div class=\"pr-b\" *ngIf=\"home?.list_price\">${{home?.list_price | number:'1.0'}}</div>\n                      <p>{{home.address}} {{home.address1}}</p>\n                      <h4 class=\"margt25\"><i class=\"sicon\" [ngStyle]=\"{'background-image': 'url(' + home?.community?.community_icon?.url + ')','background-repeat': 'no-repeat','background-position': 'center'}\"></i> Located in {{home.community.first_name}}</h4>\n                      <div class=\"afs-wp\">\n                        <ul>\n                          <li><i class=\"bed\"></i> {{home.no_of_bedrooms}}</li>\n                          <li><i class=\"tub\"></i> {{home.no_of_bathrooms}}</li>\n                          <li><i class=\"car\"></i> {{home.car_space}}</li>\n                        </ul>\n                        <div *ngIf=\"home?.record_type == 'Pre-loved'\" class=\"new-btn new-btn\" style=\"border: 1px solid #62717f; color: #62717f!important; \">Pre Loved</div>\n                                                <div *ngIf=\"home?.record_type == 'New'\" class=\"new-btn new-btn\">New</div>\n                      </div>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- end of all homes tab -->\n    </div>\n\n\n  </section>\n  <!-- featured homes Section - fixed version end -->\n\n    <!-- start CTA block - fixed version -->\n    <section class=\"cta-block\" *ngIf=\"showData\">\n        <div class=\"container\">\n            <h2 class=\"whithead\">{{ctasection.standardCtaInfoPackDescription}}</h2>\n            <div class=\"buttons\">\n                <a href='#' data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal-static\" class=\"borbtn\">{{ctasection.standardCtaInfoPackButtonText}}</a>\n            </div>\n            <p>{{ctasection.standardCtaInfoPackAfterButtonText}}</p>\n        </div>\n    </section>\n    <!--  CTA block - fixed version end -->\n        <!-- Get an info pack Modal -->\n  <div class=\"modal fade\" id=\"get-an-info-pack-modal-static\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body no-pad\">\n                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  (mouseover)=\"onHover($event)\"\n                                    (mouseout)=\"onHover($event)\" >&times;</button>\n                    <div class=\"col-sm-5 col-md-5 right-img-main no-pad hidden-xs hidden-sm\">\n                        <div class=\"right-img-full\">\n                            <div class=\"right-img-full\" style=\"background: url(images/generic-info.jpg) no-repeat center;\"></div>\n                            <!--  <img\n                             [src]=\"comunitylatestDetail.featured_image.url\" alt=\"\" style=\n                             \"height: -webkit-fill-available;\"> -->\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-7 getinfowp\">\n\n                        <div class=\"wp-main\">\n                         <h3 style=\"color: #105dac;\">\n                            <div class=\"title-img-round\">\n                                <img src=\"images/Gateway-icon-only-square.png\" alt=\"\" class=\"\">\n                            </div>\n                            Get an info pack\n                         </h3>\n                         <!-- <div class=\"profile-row\">\n                            <div class=\"profile-img\"><img src=\"images/img11.png\" alt=\"\"></div>\n                            <p><strong> Melinda James</strong> | +61 421 223 221 | melinda.james@gty.com.au</p>\n                         </div> -->\n                         <div class=\"divider\"></div>\n<!--                         <div class=\"form-getinfo-succes\">\n                            <div class=\"row\">\n                            <div class=\"col-sm-2\"><img src=\"images/form-sucess.png\" alt=\"\"></div>\n                            <div class=\"col-sm-10\"><p class=\"pera-textbig\"> Thank you for your enquiry. We've emailed you the info pack. You can view it by clicking the button below.</p>\n                            <button (click)=\"infoPdf(genericInfo.info_pack?.info_pdf.url)\"\n                             class=\"btn btn-org\">View the info pack Now</button></div>\n                            </div>\n                        </div> -->\n                         <div class=\"form-wp-getinfo\">\n                             <div class=\"row\">\n                                <!-- form starts here-->\n                                <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\"\n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\"\n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\"\n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\"\n                                           [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\"\n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\" #plan=\"ngModel\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\"\n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\"\n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\"\n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                    <button  class=\"btn btn-org\"  id=\"send-sucess\"\n                                     (click)=\"getInfo(infoForm)\" style=\"background: #105dac; border-color:#105dac;\"\n                                    (mouseover)=\"changeColor($event)\"\n                                    (mouseout)=\"changeColor($event)\" type=\"submit\">Get an info pack</button>\n                                    </div>\n                                </form>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end  Get an info pack Modal -->\n"

/***/ }),

/***/ "../../../../../src/app/home-designs/home-designs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDesignsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeDesignsComponent = (function () {
    function HomeDesignsComponent(apiService, router, segment) {
        this.apiService = apiService;
        this.router = router;
        this.segment = segment;
        this.isDataAvailable = false;
        this.sysIds = [];
        this.sliderImages = [];
        this.showData = false;
        this.firstImage = "";
        this.secondImage = "";
        this.thirdImage = "";
        this.bgimg = "";
        this.hdownPDF = "";
        this.hotspotImage1 = "";
        this.hotspotImage2 = "";
        this.hotspotImage3 = "";
        this.hotspotImage4 = "";
        this.dbimag1 = "";
        this.dbimag2 = "";
        this.dbimag3 = "";
        this.dbpdf1 = "";
        this.dbpdf2 = "";
        this.dbpdf3 = "";
        this.submitted = false;
        this.info = { firstname: '', lastname: '', phone: '', email: '' };
    }
    HomeDesignsComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
        //fetching the list of featured homes
        this.apiService.get('/home_for_sales/featured_home').subscribe(function (res) {
            _this.isDataAvailable = true;
            _this.featuredHomes = res.homes;
            $.getScript('js/customSlick.js');
            _this.getGenericInfopack();
        }, function (err) {
            console.log(err);
        });
        //count of homes
        this.apiService.get('/communities/count_for_home_and_community').subscribe(function (res) {
            _this.homeCount = res.home_count;
        }, function (err) {
            console.log(err);
        });
        var self = this;
        // header section
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/gxzbmM8Br26miwWQuImkm?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            self.hsection = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["downloadpdf"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                self.hdownPDF = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["Fullwidthbackgroundimage"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                self.bgimg = data.fields.file.url;
            });
        });
        // middle section
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1Lo1zQ5CrWAYmaoUySiEAk?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            self.msection = data.fields;
        });
        // our home hotspot section
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/CaJyLjIhhIiccw2iUmQII?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            self.hhsection = data.fields;
            console.log(data.fields);
            // images of hotspot section 
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + self.hhsection.ourHomeHotspotSliderImage.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                self.hotspotImage1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + self.hhsection.ourHomeHotspotSliderImage2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                self.hotspotImage2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + self.hhsection.ourHomeHotspotSliderImage3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                self.hotspotImage3 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + self.hhsection.ourHomeHotspotSliderImage4.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                self.hotspotImage4 = data.fields.file.url;
                setTimeout(function () {
                    $.getScript('js/homedesign_hotspot.js');
                }, 1000);
            });
        });
        // download brochure section
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/6ccfpcFydUcYKuacCQmWkS?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            self.dbsection = data.fields;
            console.log(data.fields);
            //function for images
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + self.dbsection.icon1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                self.dbimag1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + self.dbsection.icon2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                self.dbimag2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + self.dbsection.icon3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                self.dbimag3 = data.fields.file.url;
            });
            // api call for getting pdfs
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + self.dbsection.downloadPdfMedia1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                self.dbpdf1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + self.dbsection.downloadPdfMedia2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                self.dbpdf2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + self.dbsection.downloadPdfMedia3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                self.dbpdf3 = data.fields.file.url;
            });
        });
        // image slider section
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1SfL2pUMHyU84yM8I0eK0U?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            self.imgslisection = data.fields;
            self.imgslisection.ourHomeFullWidthSlider.forEach(function (data) {
                self.sysIds.push(data.sys.id);
            });
            $.getScript('js/slider.js');
            // getting images for slider
            /*self.sysIds.forEach(id => {
              $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
                function(data,status){
                  self.sliderImages.push(data.fields.file.url)
                });
            });*/
            var promises = [];
            self.sysIds.forEach(function (id) {
                promises.push($.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85"));
            });
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].forkJoin(promises)
                .subscribe(function (response) {
                response.forEach(function (item) {
                    self.sliderImages.push(item.fields.file.url);
                });
            });
        });
        // showcase section
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/4sQG94E3HG0UUKY0qKSW4I?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            self.showsection = data.fields;
            // for getting images url 
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["showcaseImageTitleMedia"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                self.firstImage = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["showcaseImage2"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                self.secondImage = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["showcaseImage3"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                self.thirdImage = data.fields.file.url;
                self.showData = true;
            });
        });
        // cta section
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            self.ctasection = data.fields;
        });
    };
    HomeDesignsComponent.prototype.getGenericInfopack = function () {
        var _this = this;
        this.apiService.get('/pdf_info_packs/featured_pack').subscribe(function (res) {
            _this.genericInfo = res;
            window.localStorage.setItem('generic_url', _this.genericInfo.info_pack.info_pdf.url);
        });
    };
    HomeDesignsComponent.prototype.getInfo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var userData = {};
            userData.firstname = this.info.firstname;
            userData.lastname = this.info.lastname;
            userData.plan = this.info.plan;
            userData.phone = this.info.phone;
            userData.email = this.info.email;
            userData.description = this.info.area;
            window.localStorage.setItem('generic_data', JSON.stringify(userData));
            console.log('success!');
            this.segment.track('GetInfoPack', {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area
            }).then(function () {
                window.localStorage.setItem('genericCheck', '1');
                _this.router.navigateByUrl('/success');
                $('#get-an-info-pack-modal-static')[0].style.display = 'none';
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                console.log("Event sended");
            });
        }
        else {
            console.log('validation failed!');
        }
    };
    HomeDesignsComponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : '#105dac';
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#ffffff';
    };
    HomeDesignsComponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#414952';
    };
    HomeDesignsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-designs',
            template: __webpack_require__("../../../../../src/app/home-designs/home-designs.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _c || Object])
    ], HomeDesignsComponent);
    return HomeDesignsComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=home-designs.component.js.map

/***/ }),

/***/ "../../../../../src/app/home-designs/home-designs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDesignsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_markdown__ = __webpack_require__("../../../../angular2-markdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_designs_component__ = __webpack_require__("../../../../../src/app/home-designs/home-designs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var homeDesignsRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'home-designs',
        component: __WEBPACK_IMPORTED_MODULE_3__home_designs_component__["a" /* HomeDesignsComponent */]
    }
]);
var HomeDesignsModule = (function () {
    function HomeDesignsModule() {
    }
    HomeDesignsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_angular2_markdown__["a" /* MarkdownModule */].forRoot(),
                homeDesignsRouting,
                __WEBPACK_IMPORTED_MODULE_4__shared__["g" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home_designs_component__["a" /* HomeDesignsComponent */]
            ],
            providers: []
        })
    ], HomeDesignsModule);
    return HomeDesignsModule;
}());

//# sourceMappingURL=home-designs.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "    <!--  Owl slider for the homepage - fixed version -->\n    <section class=\"home-slider home-v3-slider\">\n      <div class=\"header-slider-main\">\n        <div class=\"owl-carousel owl-theme\">\n          <div class=\"item\">            \n              <div class=\"slider-bg\" [ngStyle]=\"{'background-image': 'url(' + image1 + ')','background-repeat': 'no-repeat','background-position': 'center'}\" >\n                <div class=\"slider-text\">\n                  <div class=\"slider-text-inner\">\n                    <h2>{{slider1Title}}</h2>\n                    <p>{{slider1Description}}</p>\n                    <hr>\n                    <div class=\"buttons\">\n                      <a href=\"{{slider1ButtonUrl}}\" class=\"btn-blue\">{{slider1ButtonText}}</a> \n                  </div>\n              </div>\n                </div>\n              </div>\n          </div>\n          <div class=\"item\">            \n              <div class=\"slider-bg\" [ngStyle]=\"{'background-image': 'url(' + image2 + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n                <div class=\"slider-text\">\n                  <div class=\"slider-text-inner\">\n                    <h2>{{slider2Title}}</h2>\n                    <p>{{slider2Description}}</p>\n                    <hr>\n                    <div class=\"buttons\">\n                      <a href=\"{{slider2ButtonUrl}}\" class=\"btn-blue\">{{slider2ButtonText}}</a> \n                  </div>\n              </div>\n                </div>\n              </div>\n          </div>\n          <div class=\"item\">            \n              <div class=\"slider-bg\" [ngStyle]=\"{'background-image': 'url(' + image3 + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n                <div class=\"slider-text\">\n                  <div class=\"slider-text-inner\">\n                    <h2>{{slider3Title}}</h2>\n                    <p>{{slider3Description}}</p>\n                    <hr>\n                    <div class=\"buttons\">\n                      <a href=\"{{slider3ButtonUrl}}\" class=\"btn-blue\">{{slider3ButtonText}}</a> \n                  </div>\n              </div>\n                </div>\n              </div>\n          </div>\n          <div class=\"item\">            \n              <div class=\"slider-bg\" [ngStyle]=\"{'background-image': 'url(' + image4 + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n                <div class=\"slider-text\">\n                  <div class=\"slider-text-inner\">\n                    <h2>{{slider4Title}}</h2>\n                    <p>{{slider4Description}}</p>\n                    <hr>\n                    <div class=\"buttons\">\n                      <a href=\"{{slider4ButtonUrl}}\" class=\"btn-blue\">{{slider4ButtonText}}</a> \n                  </div>\n              </div>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n\n      <!--our values section - fixed version-->\n      <div class=\"home-four-button-v4 mobile-none\">\n          <div class=\"container\">         \n              <ul>\n                <li class=\"open-days\">\n                  <a routerLink=\"/events\">\n                     <h4>Open days</h4>  \n                  </a>\n                </li>\n                <li class=\"resident-stories\">\n                  <a routerLink=\"/resident-stories\">\n                   <h4>Resident stories</h4>  \n                  </a>\n                </li>\n                <li class=\"explore-design\">\n                  <a routerLink=\"/home-designs\">\n                   <h4>Explore our designs</h4>  \n                  </a>\n                </li>\n                <li class=\"latest-news\">\n                  <a href=\"http://live.gatewaylifestyle.com.au/\" target=\"_blank\">\n                   <h4>Latest news</h4>  \n                  </a>\n                </li>                         \n              </ul>\n          </div>\n      </div>\n      <!--our values section - fixed version end-->\n    </section>\n    <!--  Owl slider for the homepage - fixed version end -->\n\n    <!--our values section - fixed version-->\n    <section class=\"home-four-button-v2 desktop-none\">\n        <div class=\"container\">         \n            <ul>\n               <li>\n                <a routerLink=\"/events\">\n                 <div class=\"img-box\"><img src=\"images/open-days-icon.png\" alt=\"\"></div>\n                 <h4>Open days</h4>  \n              </a>\n               </li>\n               <li>\n                  <a routerLink=\"/resident-stories\">\n                 <div class=\"img-box\"><img src=\"images/resident-stories-icon.png\" alt=\"\"></div>\n                 <h4>Resident stories</h4>  \n              </a>\n               </li>\n               <li>\n                  <a routerLink=\"/home-designs\">\n                 <div class=\"img-box\"><img src=\"images/explore-our-designs-icon.png\" alt=\"\"></div>\n                 <h4>Explore our designs</h4>  \n              </a>\n               </li>\n               <li>\n                  <a href=\"http://live.gatewaylifestyle.com.au/\" target=\"_blank\">\n                 <div class=\"img-box\"><img src=\"images/latest-news-icon.png\" alt=\"\"></div>\n                 <h4>Latest news</h4>  \n              </a>\n               </li>                         \n            </ul>\n        </div>\n    </section>\n    <!--our values section - fixed version end-->\n\n\n\n\n    <!-- OLD for reference\n\n     <section class=\"home-slider home-v2-slider\">\n      <div class=\"header-slider-main\">\n        <div class=\"owl-carousel owl-theme\">\n          <div class=\"item\">            \n              <div class=\"slider-bg\" [ngStyle]=\"{'background-image': 'url(' + image1 + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n                <div class=\"slider-text\">\n                  <div class=\"slider-text-inner\">\n                    <h2>{{slider1Title}}</h2>\n                    <p>{{slider1Description}}</p>\n                    <hr>\n                    <div class=\"buttons\">\n                      <a href=\"{{slider1ButtonUrl}}\" class=\"btn-blue\">{{slider1ButtonText}}</a> \n                  </div>\n              </div>\n                </div>\n              </div>\n          </div>\n          <div class=\"item\">            \n              <div class=\"slider-bg\" [ngStyle]=\"{'background-image': 'url(' + image2 + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n                <div class=\"slider-text\">\n                  <div class=\"slider-text-inner\">\n                    <h2>{{slider2Title}}</h2>\n                    <p>{{slider2Description}}</p>\n                    <hr>\n                    <div class=\"buttons\">\n                      <a href=\"{{slider2ButtonUrl}}\" class=\"btn-blue\">{{slider2ButtonText}}</a> \n                  </div>\n              </div>\n                </div>\n              </div>\n          </div>\n          <div class=\"item\">            \n              <div class=\"slider-bg\" [ngStyle]=\"{'background-image': 'url(' + image3 + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n                <div class=\"slider-text\">\n                  <div class=\"slider-text-inner\">\n                    <h2>{{slider3Title}}</h2>\n                    <p>{{slider3Description}}</p>\n                    <hr>\n                    <div class=\"buttons\">\n                      <a href=\"{{slider3ButtonUrl}}\" class=\"btn-blue\">{{slider3ButtonText}}</a> \n                  </div>\n              </div>\n                </div>\n              </div>\n          </div>\n          <div class=\"item\">            \n              <div class=\"slider-bg\" [ngStyle]=\"{'background-image': 'url(' + image4 + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n                <div class=\"slider-text\">\n                  <div class=\"slider-text-inner\">\n                    <h2>{{slider4Title}}</h2>\n                    <p>{{slider4Description}}</p>\n                    <hr>\n                    <div class=\"buttons\">\n                      <a href=\"{{slider4ButtonUrl}}\" class=\"btn-blue\">{{slider4ButtonText}}</a> \n                  </div>\n              </div>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    \n\n      \n    <section class=\"home-four-button-v2\">\n        <div class=\"container\">         \n            <ul>\n               <li>\n                <div class=\"single-box\">\n                  <a routerLink=\"/events\">\n                   <div class=\"img-box\"><img src=\"images/open-days-icon.png\" alt=\"\"></div>\n                   <h4>Open days</h4>  \n                  </a>\n                </div>\n               </li>\n               <li>\n                <div class=\"single-box\">\n                  <a routerLink=\"/resident-stories\">\n                   <div class=\"img-box\"><img src=\"images/resident-stories-icon.png\" alt=\"\"></div>\n                   <h4>Resident stories</h4>  \n                  </a>\n                </div>\n               </li>\n               <li>\n                <div class=\"single-box\">\n                  <a routerLink=\"/home-designs\">\n                   <div class=\"img-box\"><img src=\"images/explore-our-designs-icon.png\" alt=\"\"></div>\n                   <h4>Explore our designs</h4>  \n                </a>\n              </div>\n               </li>\n               <li>\n                <div class=\"single-box\">\n                  <a href=\"http://live.gatewaylifestyle.com.au/\" target=\"_blank\">\n                   <div class=\"img-box\"><img src=\"images/latest-news-icon.png\" alt=\"\"></div>\n                   <h4>Latest news</h4>  \n                  </a>\n                </div>\n               </li>                         \n            </ul>\n        </div>\n    </section> -->\n    \n\n  <!-- Intro - get more section start - fixed version -->\n  <section class=\"home-getmore\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 getmore-left\">\n                <h2>{{headerBelow.blockheading}}</h2>\n                <p>{{headerBelow.blockdescription}}</p>\n                <a href=\"javascript:void(0)\" class=\"js-modal-btn\" [attr.data-video-id]=\"headerBelow.youTubeLinkId\">\n                    <div class=\"video-box\"><img src=\"{{videoImage}}\" alt=\"\">\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-sm-6 getmore-right\">\n             <ul>\n               <li>\n                 <div class=\"imgbox\"><img src=\"{{icon1}}\" alt=\"\"></div>\n                 <h3>{{headerBelow.featureHeading1Bold}}</h3>\n                 <p>{{headerBelow.featureDescription1}}</p>  \n               </li> \n               <li>\n                 <div class=\"imgbox\"><img src=\"{{icon2}}\" alt=\"\"></div>\n                 <h3>{{headerBelow.featureHeading2Bold}}</h3>\n                 <p>{{headerBelow.featureDescription2}}</p>  \n               </li>\n               <li>\n                 <div class=\"imgbox\"><img src=\"{{icon3}}\" alt=\"\"></div>\n                 <h3>{{headerBelow.featureHeading3Bold}}</h3>\n                 <p>{{headerBelow.featureDescription3}}</p>  \n               </li>\n               <li>\n                 <div class=\"imgbox\"><img src=\"{{icon4}}\" alt=\"\"></div>\n                 <h3>{{headerBelow.featureHeading4Bold}}</h3>\n                 <p>{{headerBelow.featureDescription4}}</p>  \n               </li> \n             </ul>   \n            </div>\n          </div>\n        </div>\n\n</section>\n  <!-- Intro - get more section start - fixed version end -->\n\n    <!--testimonial section start - fixed version -->\n    <section class=\"hometestimonial resident-stories\">\n        <div class=\"hometestimonial-left\">\n            <div class=\"testi-warp\">\n                <div class=\"owl-carousel owl-theme\">\n                    <div class=\"item active\">\n                        <div class=\"testimonial4_slide\">\n                            <div class=\"testimonial_text_inner\">\n                                <h4>{{blue_split.quote}}</h4>\n                                <p>{{blue_split.pareText1}}</p>\n                                <div class=\"testimonial-name\">{{blue_split.personsName1}}</div>\n                                <span>{{blue_split.communityName1}}</span>                               \n                            </div>\n                        </div>\n\n                        <div class=\"testimonial-right\" [ngStyle]=\"{'background': 'url(' + sliderImg1 + ')','background-repeat': 'no-repeat','background-position': 'center'}\"></div>\n\n                    </div>\n                    <div class=\"item active\">\n                        <div class=\"testimonial4_slide\">\n                            <div class=\"testimonial_text_inner\">\n                                <h4>{{blue_split.quote2}}</h4>\n                                <p>{{blue_split.pareText2}}</p>\n                                <div class=\"testimonial-name\">{{blue_split.personsName2}}</div>\n                                <span>{{blue_split.communityName2}}</span>\n                            </div>\n                        </div>\n                        <div class=\"testimonial-right\" [ngStyle]=\"{'background': 'url(' + sliderImg2 + ')','background-repeat': 'no-repeat','background-position': 'center'}\"></div>\n                   </div>\n                    <div class=\"item active\">\n                        <div class=\"testimonial4_slide\">\n                            <div class=\"testimonial_text_inner\">\n                                <h4>{{blue_split.quote3}}</h4>\n                                <p>{{blue_split.pareText3}}</p>\n                                <div class=\"testimonial-name\">{{blue_split.personsName3}}</div>\n                                <span>{{blue_split.communityName3}}</span>\n                            </div>\n                        </div>\n                        <div class=\"testimonial-right\" [ngStyle]=\"{'background': 'url(' + sliderImg3 + ')','background-repeat': 'no-repeat'}\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--testimonial section end - fixed version end -->\n\n  <!--testimonial section end - fixed version end -->\n\n    <!-- featured homes Section - fixed version -->\n  <section class=\".sale-at-Aspley-home padbot0 margbot80 margtop0\" id=\"featured-home\">\n    <div class=\"container\">\n      <div class=\"card\">\n        <h2 class=\"heading\">Featured homes</h2>\n        <div class=\"heading-right-link\"><a routerLink=\"/homes-for-sale\">Discover all {{homeCount}} homes for sale</a></div>\n        <div class=\"divider\"></div>\n      </div>\n    </div>\n\n    <div class=\"tab-content\">\n      <!-- all homes tab -->\n      <div role=\"tabpanel\" class=\"tab-pane active\" id=\"All-homes\">\n        <div class=\"lookingsomthing-warp home-carousel\">\n          <div class=\"inner-box-warp\">\n\n            <div class=\"center slider\">\n              <!-- community card -->\n              <div *ngFor=\"let home of featuredHomes;let jj = index\">\n                <ul class=\"home-for-sale\">\n                  <li class=\"detail-list\">\n                      <div class=\"img-slider-warp mart-bot14\">\n                        <div class=\"sl-box\">\n                          <span *ngIf=\"home.status=='sold'\" class=\"paid-btn\">sold</span>\n\n                                                    <span *ngIf=\"home.status=='under_offer'\" class=\"paid-btn\" style=\"background: #f89923;\">Under Offer</span>\n                          <div id=\"carousel{{jj}}\" class=\"carousel slide\" data-interval=\"false\">\n                            <div class=\"carousel-inner home-carousel\">                              \n                            <div class=\"item\" *ngFor=\"let _image of home.images;let ii = index\" [ngClass]=\"{active: ii===0}\">\n                                                <img \n                                                [src]=\"_image\" \n                                                alt=\"\">\n                                            </div>\n                            </div>\n                            <a class=\"left carousel-control\" href=\"#carousel{{jj}}\" data-slide=\"prev\">‹</a>\n                            <a class=\"right carousel-control\" href=\"#carousel{{jj}}\" data-slide=\"next\">›</a>\n                          </div>\n\n                        </div>\n                      </div>\n                                            <a routerLink=\"homes-for-sale/{{home.id}}\">\n                      <div class=\"pr-b\" *ngIf=\"home?.list_price\">${{home?.list_price | number:'1.0'}}</div>\n                      <p>{{home.address}} {{home.address1}}</p>\n                      <h4 class=\"margt25\"><i class=\"sicon\" [ngStyle]=\"{'background-image': 'url(' + home?.community?.community_icon?.url + ')','background-repeat': 'no-repeat','background-position': 'center'}\"></i> Located in {{home.community.first_name}}</h4>\n                      <div class=\"afs-wp\">\n                        <ul>\n                          <li><i class=\"bed\"></i> {{home.no_of_bedrooms}}</li>\n                          <li><i class=\"tub\"></i> {{home.no_of_bathrooms}}</li>\n                          <li><i class=\"car\"></i> {{home.car_space}}</li>\n                        </ul>\n                        <div *ngIf=\"home?.record_type == 'Pre-loved'\" class=\"new-btn new-btn\" style=\"border: 1px solid #62717f; color: #62717f!important; \">Pre Loved</div>\n                                                <div *ngIf=\"home?.record_type == 'New'\" class=\"new-btn new-btn\">New</div>\n                      </div>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- end of all homes tab -->\n    </div>\n\n\n  </section>\n  <!-- featured homes Section - fixed version end -->\n\n  <!-- How it work image no. 1- fixed version -->\n  <section class=\"how-work\" [ngStyle]=\"{'background-image': 'url(' + backimage + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"work-title\">\n          <h3>{{steps.title}}</h3>\n          <p>{{steps.howItWorksDescription}}</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"how-work-main\">\n          <div class=\"col-md-4\">\n            <div class=\"work-col\">\n              <div class=\"icon\"><img src=\"{{HowIcon1}}\"></div>\n              <h4>{{steps.howItWorksHeadingBold}}</h4>\n              <p>{{steps.paragraphText}}</p>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"work-col\">\n              <div class=\"icon\"><img src=\"{{HowIcon2}}\"></div>\n              <h4>{{steps.howItWorksHeadingBold2}}</h4>\n              <p>{{steps.sectionParagraph2}}</p>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"work-col\">\n              <div class=\"icon\"><img src=\"{{HowIcon3}}\"></div>\n              <h4>{{steps.howItWorksHeadingBold3}}</h4>\n              <p>{{steps.sectionParagraph3}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  </section>\n  <!-- How it work image no. 1- fixed version end -->\n\n\n    <!-- featured communities Section fixed version -->\n  <section class=\"sale-at-Aspley padbot0 margbot80\" id=\"Homes-for-sale\">\n    <div class=\"container\">\n      <div class=\"card\">\n        <h2 class=\"heading\">Featured communities</h2>\n        <div class=\"heading-right-link\"><a href=\"/communities\">Discover all {{comunitiesCount}} communities</a></div>\n        <div class=\"divider\"></div>\n      </div>\n    </div>\n\n    <div class=\"tab-content\">\n      <!-- all homes tab -->\n      <div role=\"tabpanel\" class=\"tab-pane active\">\n        <div class=\"lookingsomthing-warp home-carousel\">\n          <div class=\"inner-box-warp\">\n\n            <div class=\"center slider sale-box\">\n              <!-- community card -->\n              <div *ngFor=\"let home of featuredComunities;let jj = index\">\n                <ul class=\"append-data\">\n                  <li class=\"detail-list\">\n                    \n                      <div class=\"img-slider-warp\">\n                        <div class=\"sl-box\">\n                          <div id=\"carousell{{jj}}\" class=\"carousel slide\" data-interval=\"false\">\n                            <div class=\"carousel-inner home-carousel\">\n                              <div class=\"item active\" *ngFor=\"let _image of home.community_images;let ii = index\" [ngClass]=\"{active: ii===0}\">\n                                <img \n                                                [src]=\"_image.community_images.url\" \n                                                alt=\"\">\n                              </div>\n                            </div>\n                            <a class=\"left carousel-control\" href=\"#carousell{{jj}}\" data-slide=\"prev\">‹</a>\n                            <a class=\"right carousel-control\" href=\"#carousell{{jj}}\" data-slide=\"next\">›</a>\n                          </div>\n                        </div>\n                        <div class=\"circle-icon\"><img src=\"{{home.community_icon.url}}\" alt=\"\"></div>\n                      </div>\n                      <a routerLink=\"/community/{{home.slug}}\">\n                      <div>\n                        <h3 class=\"colorsec\" [ngStyle]= \"{'color':home.primary_color}\">{{home.first_name}} <span>{{home.last_name}}</span></h3>\n                        <p>{{home.street_address}}</p>\n                        <h4 *ngIf=\"home.home_from\"><i class=\"home-icon\"></i> Homes from ${{home.home_from | number:'1.0'}}</h4>\n                      </div>\n                    </a>\n                  </li>\n                </ul>\n\n              </div>\n              <!-- community card -->\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <!-- end of all homes tab -->\n    </div>\n\n\n  </section>\n  <!-- featured communities Section fixed version end -->\n\n  <!--  Discover more section - fixed version -->\n  <section class=\"discover-whole\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"lefcol\">\n          <div class=\"box-t\">\n            <h3>{{discoverHeadingBlueBlock}}</h3>\n            <p>{{discoverMoreDescription}}</p>\n          </div>\n          <div class=\"box-video-sm\">\n            <a href=\"javascript:void(0)\" class=\"js-modal-btn\" [attr.data-video-id]=\"discover.smallVideoBlock1YoutubeLinkId\">\n              <div class=\"box-video-img-sml\"><img src=\"{{Smallvideo1Img}}\" alt=\"\"></div>\n              <div class=\"box-text\">\n                <h3>{{smallVideoBlock1Text}}</h3>\n              </div>\n            </a>\n          </div>\n          <div class=\"box-video-sm\">\n            <a href=\"javascript:void(0)\" class=\"js-modal-btn\" [attr.data-video-id]=\"discover.smallVideoBlock2YoutubeLinkId\">\n              <div class=\"box-video-img-sml\"><img src=\"{{Smallvideo2Img}}\" alt=\"\"></div>\n              <div class=\"box-text\">\n                <h3>{{smallVideoBlock2Text}}</h3>\n              </div>\n            </a>\n          </div>\n        </div>\n        <div class=\"rigcol\">\n          <div class=\"box-video-sm\">\n            <a href=\"javascript:void(0)\" class=\"js-modal-btn\" [attr.data-video-id]=\"discover.largeVideoBlock1YoutubeLinkId\">\n              <div class=\"box-video-img\"><img src=\"{{Bigvideo1Img}}\" alt=\"\"></div>\n              <div class=\"box-text\">\n                <h3><i>{{largeVideoBlock1Quote}}</i></h3>\n                <span>{{largeVideoBlock1Name}}</span>\n              </div>\n            </a>\n          </div>\n          <div class=\"box-video-sm\">\n            <a href=\"javascript:void(0)\" class=\"js-modal-btn\" [attr.data-video-id]=\"discover.largeVideoBlock2YoutubeLinkId\">\n              <div class=\"box-video-img\"><img src=\"{{Bigvideo2Img}}\" alt=\"\"></div>\n              <div class=\"box-text\">\n                <h3><i>{{largeVideoBlock2Quote}}</i></h3>\n                <span>{{largerVideoBlock2Name}}</span>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!--  Discover more section - fixed version end -->\n\n\n  <!--Newsletter section - fixed version -->\n    <section class=\"newsletter\">\n        <div class=\"container\">\n            <div class=\"newsletter-main\">\n                <div class=\"left\">\n                    <h4>Stay in the loop</h4>\n                    <p>Want to stay updated as we add more communities and houses for sale? Just enter your email and we'll send you a note\n                        each month.</p>\n                </div>\n                <div class=\"right\">\n                    <form ngNoForm action=\"https://orangebicycle.createsend.com/t/t/s/bdybk/\" method=\"post\" id=\"subForm\">\n                        <input id=\"fieldEmail\" class=\"email\" name=\"cm-bdybk-bdybk\" placeholder=\"Enter your email\" type=\"email\" required />\n                        <button type=\"submit\">Subscribe</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </section>\n  <!--Newsletter section - fixed version -->\n\n  <!-- start CTA block - fixed version -->\n   <section class=\"cta-block\">\n        <div class=\"container\">\n            <h2 class=\"whithead\">{{standardCtaInfoPackDescription}}</h2>\n            <div class=\"buttons\">\n                <a href='#' data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal-static\" class=\"borbtn\">{{standardCtaInfoPackButtonText}}</a>\n            </div>\n            <p>{{standardCtaInfoPackAfterButtonText}}</p>\n        </div>\n    </section>\n  <!-- start CTA block - fixed version -->\n     <!-- Get an info pack Modal -->\n  <div class=\"modal fade\" id=\"get-an-info-pack-modal-static\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body no-pad\">\n                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\" >&times;</button>\n                    <div class=\"col-sm-5 col-md-5 right-img-main no-pad hidden-xs hidden-sm\">\n                        <div class=\"right-img-full\">\n                            <div class=\"right-img-full\" style=\"background: url(images/generic-info.jpg) no-repeat center;\"></div>\n                            <!--  <img \n                             [src]=\"comunitylatestDetail.featured_image.url\" alt=\"\" style= \n                             \"height: -webkit-fill-available;\"> -->\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-7 getinfowp\">\n                   \n                        <div class=\"wp-main\">\n                         <h3 style=\"color: #105dac;\">\n                            <div class=\"title-img-round\">\n                                <img src=\"images/Gateway-icon-only-square.png\" alt=\"\" class=\"\">    \n                            </div>\n                            Get an info pack\n                         </h3>\n                         <!-- <div class=\"profile-row\">\n                            <div class=\"profile-img\"><img src=\"images/img11.png\" alt=\"\"></div> \n                            <p><strong> Melinda James</strong> | +61 421 223 221 | melinda.james@gty.com.au</p>\n                         </div> -->\n                         <div class=\"divider\"></div>\n<!--                         <div class=\"form-getinfo-succes\">\n                            <div class=\"row\">\n                            <div class=\"col-sm-2\"><img src=\"images/form-sucess.png\" alt=\"\"></div>    \n                            <div class=\"col-sm-10\"><p class=\"pera-textbig\"> Thank you for your enquiry. We've emailed you the info pack. You can view it by clicking the button below.</p>\n                            <button (click)=\"infoPdf(genericInfo.info_pack?.info_pdf.url)\" \n                             class=\"btn btn-org\">View the info pack Now</button></div>\n                            </div>\n                        </div> -->\n                         <div class=\"form-wp-getinfo\">\n                             <div class=\"row\">\n                                <!-- form starts here-->\n                                <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\" \n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required> \n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>  \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\" \n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\" \n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\" #plan=\"ngModel\">   \n                                        </div>\n                                    </div>  \n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\" \n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\" \n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>  \n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p> \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\" \n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div> \n                                    <div class=\"col-sm-12\">\n                                    <button  class=\"btn btn-org\"  id=\"send-sucess\"\n                                     (click)=\"getInfo(infoForm)\" style=\"background: #105dac; border-color:#105dac;\" \n                                    (mouseover)=\"changeColor($event)\" \n                                    (mouseout)=\"changeColor($event)\" type=\"submit\">Get an info pack</button>\n                                    </div>\n                                </form>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end  Get an info pack Modal -->\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(router, apiService, segment, sharedService) {
        this.router = router;
        this.apiService = apiService;
        this.segment = segment;
        this.sharedService = sharedService;
        this.header = "";
        this.headerBelow = {};
        this.image1 = "";
        this.image2 = "";
        this.image3 = "";
        this.image4 = "";
        this.icon1 = "";
        this.icon2 = "";
        this.icon3 = "";
        this.icon4 = "";
        this.steps = "";
        this.HowIcon1 = "";
        this.HowIcon2 = "";
        this.HowIcon3 = "";
        this.HowIcon4 = "";
        this.backimage = "";
        this.testimonialsQuote = "";
        this.testimonialsQuote2 = "";
        this.testimonialsQuote3 = "";
        this.testimonialsQuoteDesc = "";
        this.testimonialsQuoteDesc2 = "";
        this.testimonialsQuoteDesc3 = "";
        this.testimonialsImage = "";
        this.testimonialsImage2 = "";
        this.testimonialsImage3 = "";
        this.blue_split = {};
        this.discover = {};
        this.bodyClasses = "nav-v4";
        this.submitted = false;
        this.info = { firstname: '', lastname: '', phone: '', email: '' };
        this.href = "";
        this.hr = false;
        this.tags = [];
        this.tagsLoaded = false;
        this.location = {};
        this.data = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.publishPage("Home");
        $('body').addClass(this.bodyClasses);
        $(".nav-v2").hide();
        $(".nav-v4").show();
        $.getScript("js/leaflet.markercluster.js");
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
        this.getGenericInfopack();
        this.apiService.get('/home_for_sales/featured_home').subscribe(function (res) {
            _this.featuredHomes = res.homes;
        }, function (err) {
            console.log(err);
        });
        //count of homes
        this.apiService.get('/communities/count_for_home_and_community').subscribe(function (res) {
            _this.homeCount = res.home_count;
            _this.comunitiesCount = res.community_count;
        }, function (err) {
            console.log(err);
        });
        this.apiService.get('/communities/featured_community').subscribe(function (res) {
            _this.featuredComunities = res.communities;
            $.getScript('js/customSlick.js');
        }, function (err) {
            console.log(err);
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/3NEHHnI8BqUY0koaiGQ4SQ?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            data.fields.smallVideoBlock1YoutubeLinkId = data.fields.smallVideoBlock1YoutubeLink.replace("https://youtu.be/", "");
            data.fields.smallVideoBlock2YoutubeLinkId = data.fields.smallVideoBlock2YoutubeLink.replace("https://youtu.be/", "");
            data.fields.largeVideoBlock1YoutubeLinkId = data.fields.largeVideoBlock1YoutubeLink.replace("https://youtu.be/", "");
            data.fields.largeVideoBlock2YoutubeLinkId = data.fields.largeVideoBlock2YoutubeLink.replace("https://youtu.be/", "");
            that.discover = data.fields;
            that.discoverHeadingBlueBlock = data.fields.discoverHeadingBlueBlock;
            that.discoverMoreDescription = data.fields.discoverMoreDescription;
            that.smallVideoBlock1Text = data.fields.smallVideoBlock1Text;
            that.smallVideoBlock2Text = data.fields.smallVideoBlock2Text;
            that.largeVideoBlock1Name = data.fields.largeVideoBlock1Name;
            that.largeVideoBlock1Quote = data.fields.largeVideoBlock1Quote;
            that.largeVideoBlock1YoutubeLink = data.fields.largeVideoBlock1YoutubeLink;
            that.largerVideoBlock2Name = data.fields.largerVideoBlock2Name;
            that.largeVideoBlock2Quote = data.fields.largeVideoBlock2Quote;
            that.largeVideoBlock2YoutubeLink = data.fields.largeVideoBlock2YoutubeLink;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.largeVideoBlock1Image.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.Bigvideo1Img = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.largeVideoBlock2Image.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.Bigvideo2Img = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.smallVideoBlock1Image.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.Smallvideo1Img = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.smallVideoBlock2Image.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.Smallvideo2Img = data.fields.file.url;
            });
        });
        //standard CTA
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.standardCtaInfoPackDescription = data.fields.standardCtaInfoPackDescription;
            that.standardCtaInfoPackButtonText = data.fields.standardCtaInfoPackButtonText;
            that.standardCtaInfoPackAfterButtonText = data.fields.standardCtaInfoPackAfterButtonText;
        });
        //count of homes
        /*this.apiService.get('/communities/count_for_home_and_community').subscribe((res:any)=>{
            this.comunitiesCount = res.home_count;
          },
          err=>{
            console.log(err);
        });*/
        var that = this;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1StNUKTcrmOGo4Iyam2U8I?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.header = data.fields;
            that.slider1Title = data.fields.slider1Title;
            that.slider1Description = data.fields.slider1Description;
            that.slider1ButtonUrl = data.fields.slider1ButtonUrl;
            that.slider1ButtonText = data.fields.slider1ButtonText;
            that.slider2Title = data.fields.slider2Title;
            that.slider2ButtonUrl = data.fields.slider2ButtonUrl;
            that.slider2Description = data.fields.slider2Description;
            that.slider2ButtonText = data.fields.slider2ButtonText;
            that.slider3Title = data.fields.slider3Title;
            that.slider3ButtonUrl = data.fields.slider3ButtonUrl;
            that.slider3Description = data.fields.slider3Description;
            that.slider3ButtonText = data.fields.slider3ButtonText;
            that.slider4Title = data.fields.slider4Title;
            that.slider4ButtonUrl = data.fields.slider4ButtonUrl;
            that.slider4Description = data.fields.slider4Description;
            that.slider4ButtonText = data.fields.slider4ButtonText;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.slider1Image.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.slider2Image.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.slider3Image.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image3 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.slider4Image.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image4 = data.fields.file.url;
                $.getScript("js/owl-carouselCustom.js");
            });
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5JgGsuP63myKG4o0s00gqk?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            data.fields.youTubeLinkId = data.fields.youTubeLink.replace("https://youtu.be/", "");
            ;
            that.headerBelow = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.videoImagePreview.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.videoImage = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.featureIcon1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.icon1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.featureIcon2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.icon2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.featureIcon3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.icon3 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.featureIcon4.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.icon4 = data.fields.file.url;
                $.getScript("js/modal-video.js");
                $.getScript('js/customCarousel.js');
            });
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1F0bexMbKcmkaOkEW4UEIg?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.steps = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.howItWorksIcon1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.HowIcon1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.howItWorksIcon2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.HowIcon2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.howItWorksIcon3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.HowIcon3 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.fullWidthImageBackground.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.backimage = data.fields.file.url;
            });
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/uJj7daZX20WcmOe2sSGCI?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.blue_split = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.sliderImage1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.sliderImg1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.sliderImage2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.sliderImg2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.sliderImage3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.sliderImg3 = data.fields.file.url;
            });
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5GSasSCYo0KsSKK8cCmCi6?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.testimonialsQuote = data.fields.quote;
            that.testimonialsQuote2 = data.fields.quote2;
            that.testimonialsQuote3 = data.fields.quote3;
            that.testimonialsQuoteDesc = data.fields.nameAndCommunityLivesIn;
            that.testimonialsQuoteDesc2 = data.fields.nameAndCommunityLivesIn2;
            that.testimonialsQuoteDesc3 = data.fields.nameAndCommunityLivesIn3;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.testimonialImage1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.testimonialsImage = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.testimonialImage2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.testimonialsImage2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.testimonialImage3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.testimonialsImage3 = data.fields.file.url;
            });
        });
    };
    HomeComponent.prototype.getGenericInfopack = function () {
        var _this = this;
        this.apiService.get('/pdf_info_packs/featured_pack').subscribe(function (res) {
            _this.genericInfo = res;
            window.localStorage.setItem('generic_url', _this.genericInfo.info_pack.info_pdf.url);
        });
    };
    HomeComponent.prototype.getInfo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var userData = {};
            userData.firstname = this.info.firstname;
            userData.lastname = this.info.lastname;
            userData.plan = this.info.plan;
            userData.phone = this.info.phone;
            userData.email = this.info.email;
            userData.description = this.info.area;
            window.localStorage.setItem('generic_data', JSON.stringify(userData));
            console.log('success!');
            this.segment.track('GetInfoPack', {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area
            }).then(function () {
                window.localStorage.setItem('genericCheck', '1');
                _this.router.navigateByUrl('/success');
                $('#get-an-info-pack-modal-static')[0].style.display = 'none';
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                console.log("Event sended");
            });
        }
        else {
            console.log('validation failed!');
        }
    };
    HomeComponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : '#105dac';
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#ffffff';
    };
    HomeComponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#414952';
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        $('body').removeClass(this.bodyClasses);
        $(".nav-v2").show();
        $(".nav-v4").hide();
        this.sharedService.publishPage("");
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-page',
            template: __webpack_require__("../../../../../src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["h" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["h" /* SharedService */]) === "function" && _d || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_markdown__ = __webpack_require__("../../../../angular2-markdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var homeRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]
    }
]);
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_angular2_markdown__["a" /* MarkdownModule */].forRoot(),
                homeRouting,
                __WEBPACK_IMPORTED_MODULE_4__shared__["g" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]
            ],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/homeforsale/home-slug-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSlugResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeSlugResolver = (function () {
    function HomeSlugResolver(homesService, router) {
        this.homesService = homesService;
        this.router = router;
    }
    HomeSlugResolver.prototype.resolve = function (route, state) {
        var slugComponent = this.homesService.get(route.params['slug']);
        if (slugComponent) {
        }
        else {
            this.router.navigateByUrl('/pagenotfound');
        }
        return slugComponent;
    };
    HomeSlugResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["f" /* HomesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["f" /* HomesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], HomeSlugResolver);
    return HomeSlugResolver;
    var _a, _b;
}());

//# sourceMappingURL=home-slug-resolver.js.map

/***/ }),

/***/ "../../../../../src/app/homeforsale/homePage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homePagecomponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var homePagecomponent = (function () {
    function homePagecomponent(router, apiService, route, segment, sharedService) {
        this.router = router;
        this.apiService = apiService;
        this.route = route;
        this.segment = segment;
        this.sharedService = sharedService;
        this.homePage = '';
        this.info = { firstname: '', lastname: '', phone: '', email: '' };
        this.submitted = false;
        this.slider_images = [];
        this.month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.preLoved = [];
        this.newHomes = [];
        this.bodyClasses = "community-detail-page";
        this.shortName = '';
    }
    homePagecomponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.segment.page().then(function () { return console.log("Event sended"); });
            $('body').addClass(_this.bodyClasses);
            window.scrollTo(0, 0);
            var user_data = JSON.parse(window.localStorage.getItem('user_data'));
            if (user_data) {
                _this.info.firstname = user_data.firstname;
                _this.info.lastname = user_data.lastname;
                _this.info.plan = user_data.plan;
                _this.info.phone = user_data.phone;
                _this.info.email = user_data.email;
                _this.info.area = user_data.description;
            }
            var slugValue = params['slug'];
            _this.apiService.getHomeDetail('/home_for_sales/' + slugValue).subscribe(function (res) {
                console.log(res);
                _this.fullDetail = res;
                _this.home_detail = res.home_for_sale;
                _this.linkedCommunity = res.home_community;
                _this.shortName = _this.linkedCommunity.short_name;
                var title = {};
                title.first_name = _this.linkedCommunity.first_name;
                title.primary_color = _this.linkedCommunity.primary_color;
                title.last_name = _this.linkedCommunity.last_name;
                title.secondary_color = _this.linkedCommunity.secondary_color;
                _this.sharedService.publishData(title);
                $.getScript('js/slider.js'); // autoattaching itself
                $.getScript('js/customSlick.js');
                for (var i = 1; i < _this.home_detail.images.length; i++) {
                    _this.slider_images.push(_this.home_detail.images[i]);
                }
                if (_this.fullDetail.community_events.length) {
                    var event_date = void 0;
                    var day = void 0;
                    var mon = void 0;
                    for (var j = 0; j < _this.fullDetail.community_events.length; j++) {
                        event_date = new Date(_this.fullDetail.community_events[j].start_time);
                        day = event_date.getUTCDate();
                        mon = _this.month[event_date.getUTCMonth()];
                        _this.fullDetail.community_events[j]["day"] = day;
                        _this.fullDetail.community_events[j]["month"] = mon;
                    }
                    _this.fullDetail.other_homes.forEach(function (home) {
                        if (home.record_type == "Pre-loved") {
                            _this.preLoved.push(home);
                        }
                        else if (home.record_type == "New") {
                            _this.newHomes.push(home);
                        }
                    });
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    homePagecomponent.prototype.ngOnDestroy = function () {
        $('body').removeClass(this.bodyClasses);
        var headerTitle = { first_name: 'logo', primary_color: '#003C6B', last_name: 'Lifestyle', secondary_color: '#62717f' };
        this.sharedService.publishData(headerTitle);
    };
    homePagecomponent.prototype.readMore = function () {
        $(".read-more-hide").toggleClass("show-content");
        if ($(".tab-pane").find(".show-content")) {
            $("#read-more").hide();
        }
    };
    ;
    homePagecomponent.prototype.getInfo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var userData = {};
            userData.firstname = this.info.firstname;
            userData.lastname = this.info.lastname;
            userData.plan = this.info.plan;
            userData.phone = this.info.phone;
            userData.email = this.info.email;
            userData.description = this.info.area;
            window.localStorage.setItem('user_data', JSON.stringify(userData));
            console.log('success!');
            this.segment.track('GetInfoPack', {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area,
                community_short_name: this.shortName
            }).then(function () {
                console.log("Event sended");
                window.localStorage.setItem('basicinfo_url', _this.fullDetail.community_info_pack.info_pdf.url);
                window.localStorage.setItem('genericCheck', '0');
                _this.router.navigateByUrl('/success');
                $('#get-an-info-pack-modal')[0].style.display = 'none';
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
            });
        }
        else {
            console.log('validation failed!');
        }
    };
    homePagecomponent.prototype.scrollTo = function (element) {
        element.scrollIntoView({ behavior: "smooth" });
    };
    homePagecomponent.prototype.goToCommunity = function (community_name) {
        this.router.navigateByUrl('/community/' + community_name);
    };
    homePagecomponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? this.linkedCommunity.primary_color : '#ffffff';
        $event.target.style.color = $event.type == "mouseover" ? '#ffffff' : this.linkedCommunity.primary_color;
    };
    homePagecomponent.prototype.changeInfoColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : this.linkedCommunity.primary_color;
        $event.target.style.color = $event.type == "mouseover" ? this.linkedCommunity.primary_color : '#ffffff';
    };
    homePagecomponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? this.linkedCommunity.primary_color : '#414952';
    };
    homePagecomponent.prototype.after = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? this.linkedCommunity.primary_color : '#414952';
        $event.target.getElementsByTagName('div')[0].style.background = $event.type == "mouseover" ? this.linkedCommunity.primary_color : 'none';
    };
    homePagecomponent.prototype.onOffer = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? '#ffffff' : this.linkedCommunity.primary_color;
    };
    homePagecomponent.prototype.onfb = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? this.linkedCommunity.primary_color : '#ffffff';
    };
    homePagecomponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-for-sale',
            template: __webpack_require__("../../../../../src/app/homeforsale/homepage.comonent.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["h" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["h" /* SharedService */]) === "function" && _e || Object])
    ], homePagecomponent);
    return homePagecomponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=homePage.component.js.map

/***/ }),

/***/ "../../../../../src/app/homeforsale/homeforsale.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    padding-top: 50px;\n}\n.dropdown.dropdown-lg .dropdown-menu {\n    margin-top: -1px;\n    padding: 6px 20px;\n}\n.input-group-btn .btn-group {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n}\n.btn-group .btn {\n    border-radius: 0;\n    margin-left: -1px;\n}\n.btn-group .btn:last-child {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n.btn-group .form-horizontal .btn[type=\"submit\"] {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.form-horizontal .form-group {\n    margin-left: 0;\n    margin-right: 0;\n}\n.form-group .form-control:last-child {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n\n@media screen and (min-width: 768px) {\n    #adv-search {\n        width: 500px;\n        margin: 0 auto;\n    }\n    .dropdown.dropdown-lg {\n        position: static !important;\n    }\n    .dropdown.dropdown-lg .dropdown-menu {\n        min-width: 500px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homeforsale/homeforsale.component.html":
/***/ (function(module, exports) {

module.exports = "    <!--Listing page Header width bg-->\n    <section class=\"hfsl-banner home-for-sale-listing-hero\">\n        <div class=\"overlay\"></div>     \n        <div class=\"context\">\n            <div class=\"container\">\n                 <h2>Find your next home with Gateway Lifestyle</h2>\n\n                 <p>All our currently available new homes are listed below. Give us a call on 1300 361 311 to arrange a viewing and get more info.</p>\n            </div>\n        </div>\n    </section>\n\n    <!-- start community filter -->\n    <section class=\"community-filter\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-7\"><h2 class=\"heading\">Choose your next home</h2></div>\n            </div>\n            <div class=\"row margtb\">\n                <div class=\"col-sm-6 search-section\">\n                    <div class=\"form-group\">\n                    <div class=\"input-group input-group-lg\">\n\n                        <div class=\"icon-addon addon-lg\">\n                            <input [(ngModel)]=\"filter\" type=\"text\" placeholder=\"Search for a community, suburb or state\" class=\"texts\">\n                            <label  class=\"glyphicon glyphicon-search\"></label>\n                        </div>\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn-s\" (click)=\"geoLocation('distance')\" type=\"button\">Go!</button>\n                        </span>\n                    </div>\n                </div>\n                </div>\n                <div class=\"col-sm-6 text-right checkbox-section\">\n                    <div class=\"checkbox-main nsw\">\n                        <input type=\"checkbox\" name=\"\" id=\"check1\" checked=\"\">\n                        <label for=\"check1\" (click)=\"getHomesList('nsw')\">NSW</label>\n                    </div>\n                    <div class=\"checkbox-main qld\">\n                        <input type=\"checkbox\" name=\"\" id=\"check2\" checked=\"\">\n                        <label for=\"check2\" (click)=\"getHomesList('qld')\">QLD</label>\n                    </div>\n                    <div class=\"checkbox-main vic\">\n                        <input type=\"checkbox\" name=\"\" id=\"check3\" checked=\"\">\n                        <label for=\"check3\" (click)=\"getHomesList('vic')\">VIC</label>\n                    </div>\n                </div>\n            </div>\n\n            <!--  dropdown filter -->\n            <div class=\"row sortinglisting\">\n                <div class=\"col-sm-6 showing\" *ngIf=\"(homeForSales| filter:filter).length\">\n                    <p>Showing <span>{{(homeForSales| filter:filter)?.length}} of {{originalLength}}</span> homes for sale</p>\n                </div>\n                <div class=\"col-sm-6 showing\" *ngIf=\"!(homeForSales| filter:filter).length\"><p> No result found. Please search another home for sale.</p></div>\n                <div class=\"col-sm-6 sorted text-right\"> \n                 <select class=\"selectpicker-dropdown\" \n                 (change)=\"sort($event.target.value)\">\n                    <option value=\"list_price\" selected=\"\">Sort by price (low to high)</option>\n                    <option value=\"list_price\"> Sort by price (high to low) </option>\n                    <option value=\"distance\"> Sort by distance </option>\n                    <!-- <option value=\"#\">Sort A to Z</option> -->\n                  </select>\n                </div>\n            </div>\n            <!--  end of dropdown filter -->\n        </div>\n    </section>\n    <!-- end community filter -->\n   \n    <!--Home for sale card -->  \n    <section class=\"lookingsomthing-warp\">\n        <div class=\"container\">             \n            <div class=\"inner-box-warp\">\n                <ul class=\"append-data home-for-sale\">\n                    <!-- product detail card -->                                    \n                    <li class=\"detail-list\" *ngFor=\"let home of homeForSales | orderBy: key:reverse | filter:filter; let i = index\">\n\n                            <div class=\"img-slider-warp mart-bot14\">                           \n                                <div class=\"sl-box\">\n                                    <span *ngIf=\"home.status=='under_offer'\" class=\"under-offer-btn\">Under offer</span>\n                                    <span *ngIf=\"home.status=='sold'\" class=\"paid-btn\">Sold</span>\n                                    <div id=\"carousel2{{i}}\" class=\"carousel slide\"  data-interval=\"false\">\n                                        <div class=\"carousel-inner\">                                    \n                                            <div *ngFor=\"let img of home.images; let j=index\" \n                                            [ngClass]=\"{'item':true, 'active' : j==0}\">\n                                                <img [src]=\"img\" alt=\"\">\n                                            </div>                       \n                                        </div> \n                                    <a class=\"left carousel-control\" href=\"#carousel2{{i}}\" data-slide=\"prev\">‹</a>\n                                    <a class=\"right carousel-control\" href=\"#carousel2{{i}}\" data-slide=\"next\">›</a>\n                                    </div>\n                                </div>                  \n                            </div>\n                            <a routerLink=\"/homes-for-sale/{{home.id}}\" >\n                            <div class=\"pr-b\">${{home.list_price | number : '1.0'}}</div>  \n                            <p>{{home.address}} {{home.address1}}</p>\n                            <h4 class=\"margt25\"><i class=\"sicon\" \n                                [ngStyle]=\"{'background-image': 'url(' + home?.community?.community_icon?.url + ')','background-repeat': 'no-repeat','background-position': 'center'}\"></i> Located in {{home?.community?.first_name}}</h4>\n                            <div class=\"afs-wp\">\n                                <ul>\n                                    <li><i class=\"bed\"></i> {{home.no_of_bedrooms}}</li>\n                                    <li><i class=\"tub\"></i> {{home.no_of_bathrooms}}</li>\n                                    <li><i class=\"car\"></i> {{home.car_space}}</li>\n                                </ul>\n                                <div *ngIf=\"home.record_type=='New'\" href=\"#\" class=\"new-btn new-btn\">new</div>\n                                <div *ngIf=\"home.record_type=='Pre-loved'\" href=\"#\" class=\"new-btn pre-l\">Pre Loved</div>\n                            </div>    \n                        </a>\n                    </li>   \n                </ul>\n            </div>\n        </div>\n    </section>\n    <!--End -->\n\n    <!-- start CTA block -->\n    <section class=\"cta-block scroll\">\n        <div class=\"container\">\n            <h2 class=\"whithead\">Let's chat about your next home <br> and discuss if Gateway is right <br>for you.</h2>\n            <div class=\"buttons\">\n                <a href='#' data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal-static\" class=\"borbtn\">Get an info pack</a> \n            </div>\n            <p>Or give us a call on 1300 361 311.</p>\n        </div>\n    </section>\n    <!-- end CTA block -->\n        <!-- Get an info pack Modal -->\n  <div class=\"modal fade\" id=\"get-an-info-pack-modal-static\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body no-pad\">\n                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\" >&times;</button>\n                    <div class=\"col-sm-5 col-md-5 right-img-main no-pad hidden-xs hidden-sm\">\n                        <div class=\"right-img-full\">\n                            <div class=\"right-img-full\" style=\"background: url(images/generic-info.jpg) no-repeat center;\"></div>\n                            <!--  <img \n                             [src]=\"comunitylatestDetail.featured_image.url\" alt=\"\" style= \n                             \"height: -webkit-fill-available;\"> -->\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-7 getinfowp\">\n                   \n                        <div class=\"wp-main\">\n                         <h3 style=\"color: #105dac;\">\n                            <div class=\"title-img-round\">\n                                <img src=\"images/Gateway-icon-only-square.png\" alt=\"\" class=\"\">    \n                            </div>\n                            Get an info pack\n                         </h3>\n                         <!-- <div class=\"profile-row\">\n                            <div class=\"profile-img\"><img src=\"images/img11.png\" alt=\"\"></div> \n                            <p><strong> Melinda James</strong> | +61 421 223 221 | melinda.james@gty.com.au</p>\n                         </div> -->\n                         <div class=\"divider\"></div>\n<!--                         <div class=\"form-getinfo-succes\">\n                            <div class=\"row\">\n                            <div class=\"col-sm-2\"><img src=\"images/form-sucess.png\" alt=\"\"></div>    \n                            <div class=\"col-sm-10\"><p class=\"pera-textbig\"> Thank you for your enquiry. We've emailed you the info pack. You can view it by clicking the button below.</p>\n                            <button (click)=\"infoPdf(genericInfo.info_pack?.info_pdf.url)\" \n                             class=\"btn btn-org\">View the info pack Now</button></div>\n                            </div>\n                        </div> -->\n                         <div class=\"form-wp-getinfo\">\n                             <div class=\"row\">\n                                <!-- form starts here-->\n                                <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\" \n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required> \n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>  \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\" \n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\" \n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\" #plan=\"ngModel\">   \n                                        </div>\n                                    </div>  \n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\" \n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\" \n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>  \n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p> \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\" \n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div> \n                                    <div class=\"col-sm-12\">\n                                    <button  class=\"btn btn-org\"  id=\"send-sucess\"\n                                     (click)=\"getInfo(infoForm)\" style=\"background: #105dac; border-color:#105dac;\" \n                                    (mouseover)=\"changeColor($event)\" \n                                    (mouseout)=\"changeColor($event)\" type=\"submit\">Get an info pack</button>\n                                    </div>\n                                </form>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end  Get an info pack Modal -->"

/***/ }),

/***/ "../../../../../src/app/homeforsale/homeforsale.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homeForSalescomponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var homeForSalescomponent = (function () {
    function homeForSalescomponent(router, apiService, segment) {
        this.router = router;
        this.apiService = apiService;
        this.segment = segment;
        this.homeForSales = [];
        this.filter = '';
        this.states = ['nsw', 'qld', 'vic'];
        this.new_homes = false;
        this.key = 'list_price'; //set default
        this.reverse = false;
        this.submitted = false;
        this.info = { firstname: '', lastname: '', phone: '', email: '' };
        this.new_homes_list = [];
    }
    homeForSalescomponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
        this.apiService.getHomesList('/home_for_sales').subscribe(function (res) {
            _this.homeForSales = res.home_for_sale;
            // Creating a new list for New homes only
            for (var i = 0; i < _this.homeForSales.length; i++) {
                if (_this.homeForSales[i].record_type == "New") {
                    _this.homeForSales[i].com_name = _this.homeForSales[i].community.first_name;
                    _this.new_homes_list.push(_this.homeForSales[i]);
                }
            }
            _this.homeForSales = _this.new_homes_list;
            _this.originalLength = _this.homeForSales.length;
            window.localStorage.setItem('home_sale_list', JSON.stringify(_this.new_homes_list));
            _this.geoLocation("1");
            _this.getGenericInfopack();
        }, function (err) {
            console.log(err);
        });
    };
    homeForSalescomponent.prototype.sort = function (key) {
        this.key = key;
        if (key == "distance") {
            this.reverse = !this.reverse;
        }
        this.reverse = !this.reverse;
    };
    homeForSalescomponent.prototype.geoLocation = function (key) {
        var that = this;
        if (this.homeForSales.length) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    for (var i = 0; i < that.homeForSales.length; i++) {
                        that.homeForSales[i].distance = that.calculateDistance(that.homeForSales[i].community.latitude, pos.lat, that.homeForSales[i].community.longitude, pos.lng);
                    }
                    window.localStorage.setItem('home_sale_list', JSON.stringify(that.homeForSales));
                    if (key == 'distance') {
                        that.key = key;
                        that.reverse = !that.reverse;
                        that.reverse = !that.reverse;
                    }
                }, function () {
                });
            }
        }
    };
    homeForSalescomponent.prototype.calculateDistance = function (lat1, lat2, long1, long2) {
        var p = 0.017453292519943295; // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c((lat1) * p) * (1 - c(((long1 - long2) * p))) / 2;
        var dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
        return dis;
    };
    homeForSalescomponent.prototype.getHomesList = function (value) {
        if ((this.states).indexOf(value) == -1) {
            this.states.push(value);
        }
        else {
            (this.states).splice((this.states).indexOf(value), 1);
        }
        this.checkFilters();
    };
    homeForSalescomponent.prototype.showNewOnly = function () {
        this.new_homes = this.new_homes == true ? false : true;
        this.checkFilters();
    };
    homeForSalescomponent.prototype.checkFilters = function () {
        if (this.states.length != 0) {
            this.homeForSales = [];
            var homesData = JSON.parse(window.localStorage.getItem('home_sale_list'));
            for (var i = 0; i < homesData.length; i++) {
                if (this.new_homes) {
                    if ((this.states).indexOf(homesData[i].state.toLowerCase()) != -1 && homesData[i].record_type == "New") {
                        this.homeForSales.push(homesData[i]);
                    }
                }
                else {
                    if ((this.states).indexOf(homesData[i].state.toLowerCase()) != -1) {
                        this.homeForSales.push(homesData[i]);
                    }
                }
            }
        }
        else {
            this.homeForSales = [];
            var homesData = JSON.parse(window.localStorage.getItem('home_sale_list'));
            if (!this.new_homes) {
                this.homeForSales = homesData;
            }
            else {
                for (var i = 0; i < homesData.length; i++) {
                    if (homesData[i].record_type == "New") {
                        this.homeForSales.push(homesData[i]);
                    }
                }
            }
        }
    };
    homeForSalescomponent.prototype.getGenericInfopack = function () {
        var _this = this;
        this.apiService.get('/pdf_info_packs/featured_pack').subscribe(function (res) {
            _this.genericInfo = res;
            window.localStorage.setItem('generic_url', _this.genericInfo.info_pack.info_pdf.url);
        });
    };
    homeForSalescomponent.prototype.getInfo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var userData = {};
            userData.firstname = this.info.firstname;
            userData.lastname = this.info.lastname;
            userData.plan = this.info.plan;
            userData.phone = this.info.phone;
            userData.email = this.info.email;
            userData.description = this.info.area;
            window.localStorage.setItem('generic_data', JSON.stringify(userData));
            console.log('success!');
            this.segment.track('GetInfoPack', {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area
            }).then(function () {
                window.localStorage.setItem('genericCheck', '1');
                _this.router.navigateByUrl('/success');
                $('#get-an-info-pack-modal-static')[0].style.display = 'none';
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                console.log("Event sended");
            });
        }
        else {
            console.log('validation failed!');
        }
    };
    homeForSalescomponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : '#105dac';
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#ffffff';
    };
    homeForSalescomponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#414952';
    };
    homeForSalescomponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-for-sale',
            template: __webpack_require__("../../../../../src/app/homeforsale/homeforsale.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homeforsale/homeforsale.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _c || Object])
    ], homeForSalescomponent);
    return homeForSalescomponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=homeforsale.component.js.map

/***/ }),

/***/ "../../../../../src/app/homeforsale/homeforsale.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homeforsaleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_slug_resolver__ = __webpack_require__("../../../../../src/app/homeforsale/home-slug-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homeforsale_component__ = __webpack_require__("../../../../../src/app/homeforsale/homeforsale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__homePage_component__ = __webpack_require__("../../../../../src/app/homeforsale/homePage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_safe_pipe__ = __webpack_require__("../../../../safe-pipe/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_safe_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_safe_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homeforsalepreloved_component__ = __webpack_require__("../../../../../src/app/homeforsale/homeforsalepreloved.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var homeforsaleRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'homes-for-sale',
        component: __WEBPACK_IMPORTED_MODULE_3__homeforsale_component__["a" /* homeForSalescomponent */]
    },
    {
        path: 'pre-loved',
        component: __WEBPACK_IMPORTED_MODULE_9__homeforsalepreloved_component__["a" /* homeForSalesPrecomponent */]
    },
    {
        path: 'homes-for-sale/:slug',
        component: __WEBPACK_IMPORTED_MODULE_4__homePage_component__["a" /* homePagecomponent */],
        resolve: {
            home: __WEBPACK_IMPORTED_MODULE_2__home_slug_resolver__["a" /* HomeSlugResolver */]
        }
    }
]);
var homeforsaleModule = (function () {
    function homeforsaleModule() {
    }
    homeforsaleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__shared__["g" /* SharedModule */],
                homeforsaleRouting,
                __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__["Ng2SearchPipeModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng2_order_pipe__["Ng2OrderModule"],
                __WEBPACK_IMPORTED_MODULE_8_safe_pipe__["SafePipeModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__homeforsale_component__["a" /* homeForSalescomponent */],
                __WEBPACK_IMPORTED_MODULE_4__homePage_component__["a" /* homePagecomponent */],
                __WEBPACK_IMPORTED_MODULE_9__homeforsalepreloved_component__["a" /* homeForSalesPrecomponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__home_slug_resolver__["a" /* HomeSlugResolver */]
            ]
        })
    ], homeforsaleModule);
    return homeforsaleModule;
}());

//# sourceMappingURL=homeforsale.module.js.map

/***/ }),

/***/ "../../../../../src/app/homeforsale/homeforsalepreloved.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    padding-top: 50px;\n}\n.dropdown.dropdown-lg .dropdown-menu {\n    margin-top: -1px;\n    padding: 6px 20px;\n}\n.input-group-btn .btn-group {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n}\n.btn-group .btn {\n    border-radius: 0;\n    margin-left: -1px;\n}\n.btn-group .btn:last-child {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n.btn-group .form-horizontal .btn[type=\"submit\"] {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.form-horizontal .form-group {\n    margin-left: 0;\n    margin-right: 0;\n}\n.form-group .form-control:last-child {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n\n@media screen and (min-width: 768px) {\n    #adv-search {\n        width: 500px;\n        margin: 0 auto;\n    }\n    .dropdown.dropdown-lg {\n        position: static !important;\n    }\n    .dropdown.dropdown-lg .dropdown-menu {\n        min-width: 500px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homeforsale/homeforsalepreloved.component.html":
/***/ (function(module, exports) {

module.exports = "    <!--Listing page Header width bg-->\n    <section class=\"hfsl-banner home-for-sale-listing-hero-pre-loved\">\n        <div class=\"overlay\"></div>     \n        <div class=\"context\">\n            <div class=\"container\">\n                <h2>Pre-loved homes for sale</h2>\n                <p>All our pre-loved homes for sale are listed below. Click on each one for more info and contact details.</p>\n            </div>\n        </div>\n    </section>\n\n    <!-- start community filter -->\n    <section class=\"community-filter\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\"><h2 class=\"heading-ful\">Looking for new homes? <a routerLink=\"/homes-for-sale\">Go here instead</a></h2></div>\n            </div>\n            <div class=\"row margtb\">\n                <div class=\"col-sm-6 search-section\">\n                    <div class=\"form-group\">\n                    <div class=\"input-group input-group-lg\">\n\n                        <div class=\"icon-addon addon-lg\">\n                            <input [(ngModel)]=\"filter\" type=\"text\" placeholder=\"Search for a community, suburb or state\" class=\"texts\">\n                            <label  class=\"glyphicon glyphicon-search\"></label>\n                        </div>\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn-s\" (click)=\"geoLocation('distance')\" type=\"button\">Go!</button>\n                        </span>\n                    </div>\n                </div>\n                </div>\n                <div class=\"col-sm-6 text-right checkbox-section\">\n                    <div class=\"checkbox-main nsw\">\n                        <input type=\"checkbox\" name=\"\" id=\"check1\" checked=\"\">\n                        <label for=\"check1\" (click)=\"getHomesList('nsw')\">NSW</label>\n                    </div>\n                    <div class=\"checkbox-main qld\">\n                        <input type=\"checkbox\" name=\"\" id=\"check2\" checked=\"\">\n                        <label for=\"check2\" (click)=\"getHomesList('qld')\">QLD</label>\n                    </div>\n                    <div class=\"checkbox-main vic\">\n                        <input type=\"checkbox\" name=\"\" id=\"check3\" checked=\"\">\n                        <label for=\"check3\" (click)=\"getHomesList('vic')\">VIC</label>\n                    </div>\n                </div>\n            </div>\n\n            <!--  dropdown filter -->\n            <div class=\"row sortinglisting\">\n                <div class=\"col-sm-6 showing\" *ngIf=\"(homeForSales| filter:filter).length\">\n                    <p>Showing <span>{{(homeForSales| filter:filter)?.length}} of {{originalLength}}</span>  pre-loved homes</p>\n                </div>\n                <div class=\"col-sm-6 showing\" *ngIf=\"!(homeForSales| filter:filter).length\"><p> No result found. Please search another home for sale.</p></div>\n                <div class=\"col-sm-6 sorted text-right\"> \n                 <select class=\"selectpicker-dropdown\" \n                 (change)=\"sort($event.target.value)\">\n                    <option value=\"list_price\" selected=\"\">Sort by price (low to high)</option>\n                    <option value=\"list_price\"> Sort by price (high to low) </option>\n                    <option value=\"distance\"> Sort by distance </option>\n                    <!-- <option value=\"#\">Sort A to Z</option> -->\n                  </select>\n                </div>\n            </div>\n            <!--  end of dropdown filter -->\n        </div>\n    </section>\n    <!-- end community filter -->\n   \n    <!--Home for sale card -->  \n    <section class=\"lookingsomthing-warp\">\n        <div class=\"container\">             \n            <div class=\"inner-box-warp\">\n                <ul class=\"append-data home-for-sale\">\n                    <!-- product detail card -->                                    \n                    <li class=\"detail-list\" *ngFor=\"let home of homeForSales | orderBy: key:reverse | filter:filter; let i = index\">\n\n                            <div class=\"img-slider-warp mart-bot14\">                           \n                                <div class=\"sl-box\">\n                                    <span *ngIf=\"home.status=='under_offer'\" class=\"under-offer-btn\">Under offer</span>\n                                    <span *ngIf=\"home.status=='sold'\" class=\"paid-btn\">Sold</span>\n                                    <div id=\"carousel2{{i}}\" class=\"carousel slide\"  data-interval=\"false\">\n                                        <div class=\"carousel-inner\">                                    \n                                            <div *ngFor=\"let img of home.images; let j=index\" \n                                            [ngClass]=\"{'item':true, 'active' : j==0}\">\n                                                <img [src]=\"img\" alt=\"\">\n                                            </div>                       \n                                        </div> \n                                    <a class=\"left carousel-control\" href=\"#carousel2{{i}}\" data-slide=\"prev\">‹</a>\n                                    <a class=\"right carousel-control\" href=\"#carousel2{{i}}\" data-slide=\"next\">›</a>\n                                    </div>\n                                </div>                  \n                            </div>\n                            <a routerLink=\"/homes-for-sale/{{home.id}}\" >\n                            <div class=\"pr-b\">${{home.list_price | number : '1.0'}}</div>  \n                            <p>{{home.address}} {{home.address1}}</p>\n                            <h4 class=\"margt25\"><i class=\"sicon\" \n                                [ngStyle]=\"{'background-image': 'url(' + home?.community?.community_icon?.url + ')','background-repeat': 'no-repeat','background-position': 'center'}\"></i> Located in {{home?.community?.first_name}}</h4>\n                            <div class=\"afs-wp\">\n                                <ul>\n                                    <li><i class=\"bed\"></i> {{home.no_of_bedrooms}}</li>\n                                    <li><i class=\"tub\"></i> {{home.no_of_bathrooms}}</li>\n                                    <li><i class=\"car\"></i> {{home.car_space}}</li>\n                                </ul>\n                                <div *ngIf=\"home.record_type=='New'\" href=\"#\" class=\"new-btn new-btn\">new</div>\n                                <div *ngIf=\"home.record_type=='Pre-loved'\" href=\"#\" class=\"new-btn pre-l\">Pre Loved</div>\n                            </div>    \n                        </a>\n                    </li>   \n                </ul>\n            </div>\n        </div>\n    </section>\n    <!--End -->\n\n    <!-- start CTA block -->\n    <section class=\"cta-block scroll\">\n        <div class=\"container\">\n            <h2 class=\"whithead\">Let's chat about your next home <br> and discuss if Gateway is right <br>for you.</h2>\n            <div class=\"buttons\">\n                <a href='#' data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal-static\" class=\"borbtn\">Get an info pack</a> \n            </div>\n            <p>Or give us a call on 1300 361 311.</p>\n        </div>\n    </section>\n    <!-- end CTA block -->\n        <!-- Get an info pack Modal -->\n  <div class=\"modal fade\" id=\"get-an-info-pack-modal-static\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body no-pad\">\n                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\" >&times;</button>\n                    <div class=\"col-sm-5 col-md-5 right-img-main no-pad hidden-xs hidden-sm\">\n                        <div class=\"right-img-full\">\n                            <div class=\"right-img-full\" style=\"background: url(images/generic-info.jpg) no-repeat center;\"></div>\n                            <!--  <img \n                             [src]=\"comunitylatestDetail.featured_image.url\" alt=\"\" style= \n                             \"height: -webkit-fill-available;\"> -->\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-7 getinfowp\">\n                   \n                        <div class=\"wp-main\">\n                         <h3 style=\"color: #105dac;\">\n                            <div class=\"title-img-round\">\n                                <img src=\"images/Gateway-icon-only-square.png\" alt=\"\" class=\"\">    \n                            </div>\n                            Get an info pack\n                         </h3>\n                         <!-- <div class=\"profile-row\">\n                            <div class=\"profile-img\"><img src=\"images/img11.png\" alt=\"\"></div> \n                            <p><strong> Melinda James</strong> | +61 421 223 221 | melinda.james@gty.com.au</p>\n                         </div> -->\n                         <div class=\"divider\"></div>\n<!--                         <div class=\"form-getinfo-succes\">\n                            <div class=\"row\">\n                            <div class=\"col-sm-2\"><img src=\"images/form-sucess.png\" alt=\"\"></div>    \n                            <div class=\"col-sm-10\"><p class=\"pera-textbig\"> Thank you for your enquiry. We've emailed you the info pack. You can view it by clicking the button below.</p>\n                            <button (click)=\"infoPdf(genericInfo.info_pack?.info_pdf.url)\" \n                             class=\"btn btn-org\">View the info pack Now</button></div>\n                            </div>\n                        </div> -->\n                         <div class=\"form-wp-getinfo\">\n                             <div class=\"row\">\n                                <!-- form starts here-->\n                                <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\" \n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required> \n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>  \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\" \n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\" \n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\" #plan=\"ngModel\">   \n                                        </div>\n                                    </div>  \n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\" \n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\" \n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>  \n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p> \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\" \n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div> \n                                    <div class=\"col-sm-12\">\n                                    <button  class=\"btn btn-org\"  id=\"send-sucess\"\n                                     (click)=\"getInfo(infoForm)\" style=\"background: #105dac; border-color:#105dac;\" \n                                    (mouseover)=\"changeColor($event)\" \n                                    (mouseout)=\"changeColor($event)\" type=\"submit\">Get an info pack</button>\n                                    </div>\n                                </form>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end  Get an info pack Modal -->"

/***/ }),

/***/ "../../../../../src/app/homeforsale/homeforsalepreloved.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homeForSalesPrecomponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var homeForSalesPrecomponent = (function () {
    function homeForSalesPrecomponent(router, apiService, segment) {
        this.router = router;
        this.apiService = apiService;
        this.segment = segment;
        this.homeForSales = [];
        this.filter = '';
        this.states = ['nsw', 'qld', 'vic'];
        this.new_homes = false;
        this.key = 'list_price'; //set default
        this.reverse = false;
        this.submitted = false;
        this.info = { firstname: '', lastname: '', phone: '', email: '' };
        this.pre_homes_list = [];
    }
    homeForSalesPrecomponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
        this.apiService.getHomesList('/home_for_sales').subscribe(function (res) {
            _this.homeForSales = res.home_for_sale;
            // Creating a new list for Pre loved homes only
            for (var i = 0; i < _this.homeForSales.length; i++) {
                if (_this.homeForSales[i].record_type == "Pre-loved") {
                    _this.homeForSales[i].com_name = _this.homeForSales[i].community.first_name;
                    _this.pre_homes_list.push(_this.homeForSales[i]);
                }
            }
            _this.homeForSales = _this.pre_homes_list;
            _this.originalLength = _this.homeForSales.length;
            window.localStorage.setItem('pre_home_sale_list', JSON.stringify(_this.pre_homes_list));
            _this.geoLocation("1");
            _this.getGenericInfopack();
        }, function (err) {
            console.log(err);
        });
    };
    homeForSalesPrecomponent.prototype.sort = function (key) {
        this.key = key;
        if (key == "distance") {
            this.reverse = !this.reverse;
        }
        this.reverse = !this.reverse;
    };
    homeForSalesPrecomponent.prototype.geoLocation = function (key) {
        var that = this;
        if (this.homeForSales.length) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    for (var i = 0; i < that.homeForSales.length; i++) {
                        that.homeForSales[i].distance = that.calculateDistance(that.homeForSales[i].community.latitude, pos.lat, that.homeForSales[i].community.longitude, pos.lng);
                    }
                    window.localStorage.setItem('pre_home_sale_list', JSON.stringify(that.homeForSales));
                    if (key == 'distance') {
                        that.key = key;
                        that.reverse = !that.reverse;
                        that.reverse = !that.reverse;
                    }
                }, function () {
                });
            }
        }
    };
    homeForSalesPrecomponent.prototype.calculateDistance = function (lat1, lat2, long1, long2) {
        var p = 0.017453292519943295; // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c((lat1) * p) * (1 - c(((long1 - long2) * p))) / 2;
        var dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
        return dis;
    };
    homeForSalesPrecomponent.prototype.getHomesList = function (value) {
        if ((this.states).indexOf(value) == -1) {
            this.states.push(value);
        }
        else {
            (this.states).splice((this.states).indexOf(value), 1);
        }
        this.checkFilters();
    };
    homeForSalesPrecomponent.prototype.showNewOnly = function () {
        this.new_homes = this.new_homes == true ? false : true;
        this.checkFilters();
    };
    homeForSalesPrecomponent.prototype.checkFilters = function () {
        if (this.states.length != 0) {
            this.homeForSales = [];
            var homesData = JSON.parse(window.localStorage.getItem('pre_home_sale_list'));
            for (var i = 0; i < homesData.length; i++) {
                if (this.new_homes) {
                    if ((this.states).indexOf(homesData[i].state.toLowerCase()) != -1 && homesData[i].record_type == "New") {
                        this.homeForSales.push(homesData[i]);
                    }
                }
                else {
                    if ((this.states).indexOf(homesData[i].state.toLowerCase()) != -1) {
                        this.homeForSales.push(homesData[i]);
                    }
                }
            }
        }
        else {
            this.homeForSales = [];
            var homesData = JSON.parse(window.localStorage.getItem('pre_home_sale_list'));
            if (!this.new_homes) {
                this.homeForSales = homesData;
            }
            else {
                for (var i = 0; i < homesData.length; i++) {
                    if (homesData[i].record_type == "New") {
                        this.homeForSales.push(homesData[i]);
                    }
                }
            }
        }
    };
    homeForSalesPrecomponent.prototype.getGenericInfopack = function () {
        var _this = this;
        this.apiService.get('/pdf_info_packs/featured_pack').subscribe(function (res) {
            _this.genericInfo = res;
            window.localStorage.setItem('generic_url', _this.genericInfo.info_pack.info_pdf.url);
        });
    };
    homeForSalesPrecomponent.prototype.getInfo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var userData = {};
            userData.firstname = this.info.firstname;
            userData.lastname = this.info.lastname;
            userData.plan = this.info.plan;
            userData.phone = this.info.phone;
            userData.email = this.info.email;
            userData.description = this.info.area;
            window.localStorage.setItem('generic_data', JSON.stringify(userData));
            console.log('success!');
            this.segment.track('GetInfoPack', {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area
            }).then(function () {
                window.localStorage.setItem('genericCheck', '1');
                _this.router.navigateByUrl('/success');
                $('#get-an-info-pack-modal-static')[0].style.display = 'none';
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                console.log("Event sended");
            });
        }
        else {
            console.log('validation failed!');
        }
    };
    homeForSalesPrecomponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : '#105dac';
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#ffffff';
    };
    homeForSalesPrecomponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#414952';
    };
    homeForSalesPrecomponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pre-loved-homes-for-sale',
            template: __webpack_require__("../../../../../src/app/homeforsale/homeforsalepreloved.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homeforsale/homeforsalepreloved.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _c || Object])
    ], homeForSalesPrecomponent);
    return homeForSalesPrecomponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=homeforsalepreloved.component.js.map

/***/ }),

/***/ "../../../../../src/app/homeforsale/homepage.comonent.html":
/***/ (function(module, exports) {

module.exports = "    <!-- Media gallery -->\n    <div class=\"media-gallery premium \">\n        <!-- hero display -->\n        <div class=\"banner-res\">\n            <div class=\"ban-slider\">\n                <img [src]=\"home_detail?.images[0]\">\n            </div>\n            <!-- responsive community logo goes here -->\n            <div class=\"sm-imgba\"><img [src]=\"linkedCommunity?.community_logo.url\"></div>\n            <!-- responsive community logo goes here -->\n        </div>\n        <!-- end of hero display -->\n        <!-- modal triggers -->\n        <div class=\"container\">\n        <a href=\"javascript:void(0);\" id=\"firstImageTrigger\" data-eventname=\"photoView\"   class=\"aphotos detail_btn\" (mouseover)=\"changeColor($event)\" \n        (mouseout)=\"changeColor($event)\" [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">All Photos</a> \n        </div>\n        <!-- modal assets here -->\n        <ul id=\"lightGallery\" class=\"gallery hidden-xs\">\n            <li class=\"gallery-image\" attr.data-img-src=\"{{home_detail?.images[0]}}\" attr.data-src=\"{{home_detail?.images[0]}}\">\n                <img [src]=\"home_detail?.images[0]\" alt=\"\" />\n            </li>\n            <li class=\"gallery-image\" *ngFor=\"let _image of slider_images\" attr.data-img-src=\"{{_image}}\" attr.data-src=\"{{_image}}\">\n            </li>\n        </ul>\n        <!-- end of modal assets here -->\n        <div id=\"galleryLoader\" class=\"image-placeholder\">\n            <div class=\"image-loader-wrap with-icon animated\">\n                <div class=\"image-loader\"></div>\n                <span class=\"f-icon\">\n               <span class=\"icon domain-icon-ic_home\"></span>\n                </span>\n            </div>\n        </div>\n        <!-- end of modal triggers -->\n    </div>\n    <!-- end of Media gallery -->\n\n    <!--Belong section start - Home for sales -->\n    <section class=\"belong-section\">\n       <div class=\"secondary-nav-mobile\">\n            <a href=\"tel:{{linkedCommunity?.phone}}\" class=\"nav-mobile-left\" [ngStyle]=\"{'background': linkedCommunity?.primary_color}\">\n                <div class=\"mob-data\">\n                    <div class=\"mob-img\">\n                        <img src=\"images/call.png\" />\n                    </div>\n                    <span>call</span>\n                </div>\n            </a>\n            <a *ngIf=\"fullDetail?.community_info_pack?.info_pdf?.url\" class=\"nav-mobile-right\" data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal\" [ngStyle]=\"{'background': linkedCommunity?.primary_color}\">\n                <div class=\"mob-data\">\n                    <div class=\"mob-img\">\n                        <img src=\"images/get-an-info.png\" />\n                    </div>\n                    <span>get an info pack</span>\n                </div>\n            </a>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-5 des-hide col-md-3 right-top my-block\">\n                    <div class=\"right-box-top\">\n                        <div class=\"tp-w\">\n                            \n                            <h2>${{home_detail?.list_price}} \n                               <span *ngIf=\"home_detail?.status=='sold'\" class=\"under-offer\" style=\"background: #25A45F;\">Sold</span>\n                            <span *ngIf=\"home_detail?.status=='under_offer'\" class=\"under-offer\">Under Offer</span></h2>\n                            <p>{{home_detail?.address}}</p>\n                            \n                        </div>    \n                        \n                        <ul class=\"iconwpservices\">\n                          <li>\n                           <i class=\"icon bed\"></i>\n                           {{home_detail?.no_of_bedrooms}}\n                          </li> \n                          <li>\n                           <i class=\"icon bath\"></i>\n                           {{home_detail?.no_of_bathrooms}}   \n                          </li> \n                          <li>\n                           <i class=\"icon parking\"></i>\n                           {{home_detail?.car_space}} \n                          </li>  \n                          <span *ngIf=\"home_detail?.record_type=='New'\" class=\"new\">New</span>\n                            <span *ngIf=\"home_detail?.record_type=='Pre-loved'\" class=\"new pre-l\" style=\"color: #62717F; \n                            border: 1px solid #62717F;\">Pre Loved</span>  \n                        </ul>  \n                         \n                        \n                    </div>\n                </div>\n                <div class=\"col-sm-7 w642 col-md-9\">\n                    <div class=\"card\">\n                        <ul class=\"nav nav-tabs resno\" role=\"tablist\">\n                            <li class=\"active sc\" *ngIf=\"home_detail?.headline || home_detail?.description\"><a href=\"#home\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\" [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">About this home<div [ngStyle]=\"{'background': linkedCommunity?.primary_color}\" class=\"bottom-line\"></div></a></li>\n                            <li class=\"sc\" *ngIf=\"fullDetail?.community_facilities?.length\"><a (click)=\"scrollTo(facilities)\" (mouseover)=\"after($event)\" \n                        (mouseout)=\"after($event)\">Community facilities<div style=\"background: none\" class=\"bottom-line\" ></div></a></li>\n                            <li class=\"sc\" *ngIf=\"fullDetail?.near_bys.length\"><a (click)=\"scrollTo(activities)\" (mouseover)=\"after($event)\" \n                        (mouseout)=\"after($event)\">Activities<div style=\"background: none\" class=\"bottom-line\"></div></a></li>\n                            <li class=\"sc\"><a (click)=\"scrollTo(Location)\" (mouseover)=\"after($event)\" \n                        (mouseout)=\"after($event)\">Location<div style=\"background: none\" class=\"bottom-line\"></div></a></li>\n                        </ul>\n                        <!-- Tab panes -->\n                        <div class=\"tab-content\">\n                            <div role=\"tabpanel\" class=\"tab-pane active sc\" id=\"home\" *ngIf=\"home_detail?.headline || home_detail?.description\">\n                                <h3 class=\"big-heading\" [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">{{home_detail?.headline}}</h3>\n                                <div class=\"read-more-hide\">\n                                    <p class=\"pera-textbig\">{{home_detail?.description}}</p>\n                                </div>\n                                <a id=\"read-more\" class=\"read-more\" (click)=\"readMore()\"> <span>Read More</span></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-5 col-md-3 hidden-xs right-top my-data-block\">\n                    <div class=\"right-box-top\">\n                        <div class=\"tp-w\">\n                            <span *ngIf=\"home_detail?.status=='sold'\" class=\"under-offer\" style=\"background: #25A45F;\">Sold</span>\n                            <span *ngIf=\"home_detail?.status=='under_offer'\" class=\"under-offer\">Under Offer</span>\n                            <h2>{{home_detail?.address}}</h2>\n                            <!-- <h2> Zillmere Road</h2> -->\n                            <p>{{home_detail?.address1}}</p>\n                            <span *ngIf=\"home_detail?.record_type=='New'\" class=\"new\">New</span>\n                            <span *ngIf=\"home_detail?.record_type=='Pre-loved'\" class=\"new pre-l\" style=\"color: #62717F; \n                            border: 1px solid #62717F;\">Pre Loved</span>\n                        </div>    \n                        <h3>${{home_detail?.list_price | number : '1.0'}}</h3>\n                        <ul class=\"iconwpservices\">\n                          <li>\n                           <i class=\"icon bed\"></i>\n                           <span>{{home_detail?.no_of_bedrooms}} Beds</span>   \n                          </li> \n                          <li>\n                           <i class=\"icon bath\"></i>\n                           <span>{{home_detail?.no_of_bathrooms}} Baths</span>   \n                          </li> \n                          <li>\n                           <i class=\"icon parking\"></i>\n                           <span>{{home_detail?.car_space}} Parking</span>   \n                          </li>    \n                        </ul>    \n                        <div class=\"bot\">\n                            <div class=\"img-b\"><img [src]=\"linkedCommunity?.salesperson_image?.url\" alt=\"\"></div>\n                            <div class=\"rt-col\">\n                                <p><strong>{{linkedCommunity?.salesperson_name}}</strong></p>\n                                <p>{{linkedCommunity?.phone}}</p>\n                                <p>{{linkedCommunity?.email}}</p>\n                            </div>\n\n                        </div>\n                        <button *ngIf=\"fullDetail?.community_info_pack?.info_pdf?.url\"  (mouseover)=\"changeInfoColor($event)\" \n                        (mouseout)=\"changeInfoColor($event)\" [ngStyle]=\"{'background-color': linkedCommunity?.primary_color,'border-color':linkedCommunity?.primary_color}\"  class=\"btn btn-org\" data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal\">Get an info pack</button>\n                    </div>\n                </div>\n                </div>\n            </div>\n    </section>\n    <!-- end Belong section start - Home for sales -->\n\n     <!-- start Community Masterplan section -->\n    <section class=\"community-masterplan\" *ngIf=\"fullDetail?.home_design\">\n        <div class=\"container\">\n            <div class=\"top-file-lw\">\n                <h2 class=\"heading\">Layout & highlights</h2>\n                <a *ngIf=\"fullDetail?.home_design?.floorplan_pdf?.url\" href=\"https://www.admin.gatewaylifestyle.com.au{{fullDetail?.home_design?.floorplan_pdf?.url}}\" target=\"_blank\"><i></i> Download Floorplan PDF</a>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"masterplan-wp highlights\">\n                <div class=\"box\">\n                    <div class=\"left-side-image\">\n                        <img \n                        [src]=\"fullDetail?.home_design?.floorplan_image?.url\" alt=\"\"/>\n                    </div>\n                    <div class=\"right-side-image\">\n                        <ul class=\"text-highlight\">\n                            <li class=\"highlight-heading\">{{fullDetail?.home_design?.feature_title1}}</li>\n                            <li class=\"highlight-text\">{{fullDetail?.home_design?.description1}} </li>\n                        </ul>\n                        <ul class=\"text-highlight\">\n                            <li class=\"highlight-heading\">{{fullDetail?.home_design?.feature_title2}}</li>\n                            <li class=\"highlight-text\">{{fullDetail?.home_design?.description2}}</li>\n                        </ul>\n                        <ul class=\"text-highlight\">\n                            <li class=\"highlight-heading\">{{fullDetail?.home_design?.feature_title3}}</li>\n                            <li class=\"highlight-text\">{{fullDetail?.home_design?.description3}}</li>\n                        </ul>\n                        <ul class=\"text-highlight\">\n                            <li class=\"highlight-heading\">{{fullDetail?.home_design?.feature_title4}}</li>\n                            <li class=\"highlight-text\">{{fullDetail?.home_design?.description4}}</li>\n                        </ul>\n                    </div>\n                </div>               \n            </div>\n        </div>\n    </section>\n    <!--end-->\n\n    \n    <!-- start Go To Community  section -->\n    <section class=\"goto-community\" [ngStyle]=\"{'background-image': 'url(' + linkedCommunity?.featured_image.url + ')','background-repeat': 'no-repeat','background-position': 'center'}\">        \n        <div class=\"container\">\n            <div class=\"box-warp\">\n                <div class=\"logo-community\"><img [src]=\"linkedCommunity?.community_logo.url\" alt=\"\"></div>\n                <p class=\"pera-textbig\">This home is located in {{linkedCommunity?.first_name}} {{linkedCommunity?.last_name}}.</p>\n                <p class=\"pera-textbig\">{{linkedCommunity?.first_name}} is a peaceful residential area set around Little Cabbage Tree Creek, in the northern suburbs of Brisbane.</p>\n                <button class=\"btntheme\" (click)=\"goToCommunity(linkedCommunity?.slug)\" (mouseover)=\"changeInfoColor($event)\" \n                        (mouseout)=\"changeInfoColor($event)\" [ngStyle]=\"{'background-color': linkedCommunity?.primary_color,'border-color':linkedCommunity?.primary_color}\">Go To Community</button>\n            </div>\n        </div>\n    </section>\n    <!--end-->\n\n    <!-- Start Home for sale at Aspley Section-->\n    <section class=\"sale-at-Aspley padbot0 margbot80\" id=\"Homes-for-sale\"  \n    *ngIf= \"fullDetail?.other_homes.length\">\n        <div class=\"container\">\n            <div class=\"card\">\n                <h2 class=\"heading\">Homes in this community</h2>\n                <ul class=\"nav nav-tabs right-tab right-sidetab\" role=\"tablist\">\n                    <li role=\"presentation\" class=\"active\">\n                        <a href=\"#All-homes\" aria-controls=\"All-homes\" role=\"tab\" data-toggle=\"tab\" [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">All homes<div [ngStyle]=\"{'background': linkedCommunity?.primary_color}\" class=\"bottom-line\"></div></a>\n                    </li>\n                    <li role=\"presentation\" *ngIf=\"newHomes?.length\">\n                        <a href=\"#New-Homes\" aria-controls=\"New-Homes\" role=\"tab\" data-toggle=\"tab\" (mouseover)=\"after($event)\" \n                        (mouseout)=\"after($event)\">New Homes<div style=\"background: none\" class=\"bottom-line\"></div></a>\n                    </li>\n                    <li role=\"presentation\" *ngIf=\"preLoved?.length\">\n                        <a href=\"#Pre-loved-homes\" aria-controls=\"Pre-loved-homes\" role=\"tab\" data-toggle=\"tab\" (mouseover)=\"after($event)\" \n                        (mouseout)=\"after($event)\">Pre-loved homes<div style=\"background: none\" class=\"bottom-line\"></div></a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        \n          <div class=\"tab-content\">\n            <!-- all homes tab -->\n            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"All-homes\">\n                <div class=\"center slider sale-box\">                    \n                    <div *ngFor=\"let home of fullDetail?.other_homes\">\n                        <li class=\"width-fullnomarg\">\n                            <div class=\"img-show-box\">\n                                <div class=\"homefor-sale-box-img\">\n                                <a href=\"/homes-for-sale/{{home.id}}\"><img *ngIf=\"home?.images?.length\" [src]=\"home.images[0]\" alt=\"\"></a>\n                                </div>\n                                <a href=\"/homes-for-sale/{{home.id}}\"><h4 [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">{{home.address}}</h4></a>\n                               <a *ngIf=\"home?.list_price\" href=\"/homes-for-sale/{{home.id}}\"> <p>${{home.list_price | number : '1.0'}}</p> </a>                           \n                            </div>\n\n                        </li>\n                    </div>         \n                </div>\n            </div>\n            <!-- end of all homes tab -->\n            <!-- new home tab -->\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"New-Homes\" *ngIf=\"newHomes?.length\">\n                <div class=\"center slider sale-box\">                    \n                    <div *ngFor=\"let new of newHomes\">\n                        <li class=\"width-fullnomarg\">\n                            <div class=\"img-show-box\">\n                                <div class=\"homefor-sale-box-img\">\n                                <a href=\"/homes-for-sale/{{new.id}}\"><img *ngIf=\"new?.images?.length\" [src]=\"new.images[0]\" alt=\"\"></a>\n                                 </div>\n                                <a href=\"/homes-for-sale/{{new.id}}\"><h4 [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">{{new.address}}</h4></a> \n                                <a *ngIf=\"new?.list_price\" href=\"/homes-for-sale/{{new.id}}\"> <p>${{new.list_price | number : '1.0'}}</p> </a>                            \n                            </div>\n\n                        </li>\n                    </div>          \n                </div>\n            </div>\n            <!-- end of new home tab -->\n            <!-- preloved tab -->\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"Pre-loved-homes\" *ngIf=\"preLoved?.length\">\n                <div class=\"center slider sale-box\">                    \n                    <div *ngFor=\"let loved of preLoved\">\n                        <li class=\"width-fullnomarg\">\n                            <div class=\"img-show-box\">\n                                <div class=\"homefor-sale-box-img\">\n                                <a href=\"/homes-for-sale/{{loved.id}}\"><img  \n                                  *ngIf=\"loved?.images?.length\" [src]=\"loved.images[0]\" alt=\"\"></a>\n                                </div>\n                                <a href=\"/homes-for-sale/{{loved.id}}\"><h4 [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">{{loved.address}}</h4></a>\n                                 <a *ngIf=\"loved?.list_price\" href=\"/homes-for-sale/{{loved.id}}\"> <p>${{loved.list_price | number : '1.0'}}</p> </a>                             \n                            </div>\n\n                        </li>\n                    </div>\n                </div> \n            </div>\n            <!-- ennd of preloved tab -->\n        </div>  \n        \n        <div class=\"container\">\n             <div class=\"bot-but\">\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\" (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\"><i class=\"icon\"></i>Show me all {{fullDetail?.other_homes.length}} homes</a>\n            </div>\n        </div>\n        <!-- Tab panes -->\n\n    </section>\n    <!-- end Home for sale at Aspley Section-->\n\n   <!-- Offer section -->\n    <section class=\"offer-headline-admin\" *ngIf=\"fullDetail?.community_offer\" [ngStyle]=\"{'background': '-webkit-linear-gradient(left, '+linkedCommunity?.primary_color+' 0%, '+linkedCommunity?.secondary_color +' 100%)'}\">\n        <div class=\"col-sm-12 col-md-6 no-pad hidden-xs hidden-sm\"><img [src]=\"fullDetail?.community_offer.image.url\" alt=\"\"></div>\n        <div class=\"col-sm-12 col-md-6\">\n            <div class=\"rg-box\">\n                <h2>{{fullDetail?.community_offer.title}}</h2>\n                <p>{{fullDetail?.community_offer.description}}</p>\n                <div class=\"buttons sc\"><a [ngStyle]=\"{'color': linkedCommunity?.primary_color}\" href=\"{{fullDetail?.community_offer.more_about}}\" class=\"ods-btn\" target=\"_blank\" (mouseover)=\"onOffer($event)\" \n                                    (mouseout)=\"onOffer($event)\">See offer details</a></div>\n            </div>\n        </div>\n    </section>\n     <!-- end  Offer section -->\n\n    <!-- facilities Section-->\n    <section class=\"sale-at-Aspley padbot0 margbot80 margtop0\" #facilities [hidden]=\"!fullDetail?.community_facilities?.length\">\n        <div class=\"container\">\n            <div class=\"card\">\n                <h2 class=\"heading\">Community facilities</h2>\n                <div class=\"divider\"></div>\n                <p class=\"text-fac\">You'll never want to leave the grounds with the facilities available at {{linkedCommunity?.first_name}}!</p>\n            </div>\n        </div>\n          <div class=\"tab-content\">\n            <div class=\"tab-pane active\" >\n                <div class=\"center slider sale-box\">                    \n                    <div *ngFor=\"let community_facility of fullDetail?.community_facilities\">\n                        <li class=\"width-fullnomarg\">\n                            <div class=\"img-show-box\">\n                                <div class=\"homefor-sale-box-img\">\n                                <img [src]=\"community_facility.image.url\" alt=\"\">\n                                </div>\n                                <h4 class=\"marg-tb\" [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">{{community_facility.name}}</h4>                             \n                            </div>\n\n                        </li>\n                    </div>        \n                </div>\n            </div>\n        </div>  \n        \n        <div class=\"container\">\n             <div class=\"bot-but\">\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#myfaci\" (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\"><i class=\"icon\"></i>Show me all {{fullDetail?.community_facilities.length}} facilities</a>\n            </div>\n        </div>\n        <!-- Tab panes -->\n\n    </section>\n    <!-- end of  facilities Section-->\n\n    <!-- open days Section-->\n    <section class=\"sale-at-Aspley padbot0 margbot80 margtop0\" id=\"Open-days\" \n    *ngIf= \"fullDetail?.community_events.length\">\n        <div class=\"container\">\n            <div class=\"card\">\n                <h2 class=\"heading\">{{fullDetail?.community_events.length}} Planned open days</h2>\n                <div class=\"divider\"></div>\n            </div>\n        </div>\n          <div class=\"tab-content\" *ngIf=\"fullDetail?.community_events.length\">\n            <div class=\"tab-pane active\" >\n                <div class=\"center slider sale-box\">                    \n                    <div *ngFor=\"let event of fullDetail?.community_events\">\n                        <a routerLink=\"/events/{{event.id}}\">\n                            <li class=\"width-fullnomarg\">\n                                <div class=\"box\">\n                                    <div class=\"date-box\" [ngStyle]=\"{'background': '-webkit-linear-gradient(left, '+linkedCommunity?.primary_color+' 0%, '+linkedCommunity?.secondary_color +' 100%)'}\">\n                                        <div class=\"date\">\n                                            <span>{{event.day}}</span>\n                                            <span>{{event.month}}</span>\n                                        </div>\n                                    </div>\n                                    <h5>Read more & RSVP.</h5>\n                                </div>\n                            </li>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>  \n        \n        <div class=\"container\">\n             <div class=\"bot-but\">\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#mydays\" (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\"><i class=\"icon\"></i>Show me all {{fullDetail?.community_events.length}} open days</a>\n            </div>\n        </div>\n        <!-- Tab panes -->\n\n    </section>\n    <!-- end of open day Section-->\n\n    <!--Map section-->\n    <section id=\"Location\" #Location>\n        <div class=\"community-location-map\">\n            <iframe [src]=\"'https://www.google.com/maps/embed/v1/place?key=AIzaSyDgocn8utrn5kblteaLLZ1-aLEZIl9aRok&q='+ linkedCommunity?.street_address | safe: 'resourceUrl'\" width=\"100%\" height=\"100%\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n           <div class=\"container\">\n                <!-- address details -->\n                <div class=\"address-details\">\n                    <ul class=\"map-pin\">\n                        <li class=\"address\">{{linkedCommunity?.street_address}}</li>\n                        <a href=\"https://www.google.com/maps/dir//{{ linkedCommunity?.street_address }}\" target=\"_blank\"><li class=\"link\">View directions</li></a>\n                    </ul>\n                </div>\n                <!-- end of address details -->\n           </div>\n            \n        </div>\n    </section>\n     <!-- end of map section-->\n\n    <!-- nearby Section-->\n    <section class=\"sale-at-Aspley padbot0 margbot80\" #activities [hidden]= \"!fullDetail?.near_bys.length\">\n        <div class=\"container\">\n            <div class=\"card\">\n                <h2 class=\"heading\">What's nearby?</h2>\n                <div class=\"divider\"></div>\n            </div>\n        </div>\n          <div class=\"tab-content\">\n            <div class=\"tab-pane active\" >\n                <div class=\"center slider sale-box\">                    \n                    <div *ngFor=\"let nby of fullDetail?.near_bys\">\n                        <li class=\"width-fullnomarg\">\n                            <div class=\"img-show-box\">\n                                <div class=\"homefor-sale-box-img\">\n                                <img src=\"{{nby.image.url}}\" alt=\"\">\n                                </div>\n                                <h4 [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">{{nby.name}}</h4>\n                                <p>{{nby.distance}}</p>                             \n                            </div>\n\n                        </li>\n                    </div>\n                </div>\n            </div>\n        </div>  \n        \n        <div class=\"container\">\n             <div class=\"bot-but\">\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#mynearby\"  (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\"><i class=\"icon\"></i>Show me all {{fullDetail?.near_bys.length}} things to do around here</a>\n            </div>\n        </div>\n        <!-- Tab panes -->\n\n    </section>\n    <!-- end of nearby Section-->\n\n    <!-- CTA section-->\n    <section class=\"leaving-at-aspley\" [ngStyle]=\"{'background': '-webkit-linear-gradient(left, '+linkedCommunity?.primary_color+' 0%, '+linkedCommunity?.secondary_color +' 100%)'}\">\n        <div class=\"container\">\n            <h2>Let’s chat about {{home_detail?.address}} and see if it’s right for you.</h2>\n            <img [src]=\"linkedCommunity?.salesperson_image?.url\" alt=\"\">\n            <span>Talk to {{linkedCommunity?.salesperson_name}} now on {{linkedCommunity?.phone}}</span>\n            <div class=\"buttons sc\" *ngIf=\"fullDetail?.community_info_pack?.info_pdf?.url\">\n                <a *ngIf=\"fullDetail?.community_info_pack.info_pdf.url\" data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal\" class=\"ods-btn\" [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">Get an info pack</a> \n                <a (mouseover)=\"onfb($event)\" (mouseout)=\"onfb($event)\"\n                *ngIf=\"fullDetail?.facebook_links.length\" href='{{fullDetail?.facebook_links[0].link}}' target=\"_blank\" class=\"trans-btn\">Join Us on facebook</a>\n            </div>\n        </div>\n    </section>\n    <!-- end CTA section-->\n\n    <!-- \n    // All modal components below //\n    -->\n\n    <!-- Get an info pack Modal -->\n    <div class=\"modal common-modal fade\" id=\"get-an-info-pack-modal\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body no-pad\">\n                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\">&times;</button>\n                    <div class=\"col-sm-5 col-md-5 right-img-main no-pad hidden-xs hidden-sm\">\n                        <div class=\"right-img-full\" [ngStyle]=\"{'background-image': 'url(' + linkedCommunity?.featured_image.url + ')','background-repeat': 'no-repeat','background-position': 'center'}\"></div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-7 getinfowp\">\n                   \n                        <div class=\"wp-main\">\n                         <h3 [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">\n                            <div class=\"title-img-round\">\n                                <img [src]=\"linkedCommunity?.community_icon.url\" alt=\"\" class=\"\">    \n                            </div>\n                            Get an info pack\n                         </h3>\n                         <div class=\"profile-row\">\n                            <div class=\"profile-img\"><img [src]=\"linkedCommunity?.salesperson_image?.url\" alt=\"\"></div> \n                            <p><strong> {{linkedCommunity?.salesperson_name}}</strong> | {{linkedCommunity?.phone}} | {{linkedCommunity?.email}}</p>\n                         </div>\n                         <div class=\"divider\"></div>\n<!--                         <div class=\"form-getinfo-succes\">\n                            <div class=\"row\">\n                            <div class=\"col-sm-2\"><img src=\"images/form-sucess.png\" alt=\"\"></div>    \n                            <div class=\"col-sm-10\"><p class=\"pera-textbig\"> Thank you for your enquiry. We've emailed you the info pack. You can view it by clicking the button below.</p>\n                            <button (click)=\"infoPdf(fullDetail?.community_info_pack?.info_pdf?.url)\" \n                            (mouseover)=\"changeInfoColor($event)\" \n                        (mouseout)=\"changeInfoColor($event)\" class=\"btn btn-org\" [ngStyle]=\"{'background-color': linkedCommunity?.primary_color,'border-color':linkedCommunity?.primary_color}\">View the info pack Now</button></div>\n                            </div>\n                        </div> -->\n                         <div class=\"form-wp-getinfo\">\n                             <div class=\"row\">\n                                <!-- form starts here-->\n                                <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\" \n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required> \n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>  \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\" \n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\" [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\" \n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\" #plan=\"ngModel\">   \n                                        </div>\n                                    </div>  \n                                    <div class=\"clearfix\"></div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\" \n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\" \n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>  \n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p> \n                                        </div>\n                                    </div> \n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\" \n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div> \n                                    <div class=\"col-sm-12\">\n                                    <button \n                                    (mouseover)=\"changeInfoColor($event)\" \n                                    (mouseout)=\"changeInfoColor($event)\" \n                                    [ngStyle]=\"{'background-color': linkedCommunity?.primary_color,'border-color': linkedCommunity?.primary_color}\" class=\"btn btn-org\"  id=\"send-sucess\"\n                                     (click)=\"getInfo(infoForm)\" type=\"submit\">Get an info pack</button>\n                                    </div>\n                                </form>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end  Get an info pack Modal -->\n\n\n\n    <!-- Modal all 28 homes-->\n    <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\">&times;</button>\n                    <section class=\"sale-at-Aspley\">\n                        <div class=\"container\">\n                            <div class=\"card\">\n                                <h2 class=\"heading mgtm20\">Homes in this community</h2>\n                                <ul class=\"nav nav-tabs right-tab right-sidetab\" role=\"tablist\">\n                                    <li role=\"presentation\" class=\"active\">\n                                        <a href=\"#model-All-homes\" aria-controls=\"All-homes\" role=\"tab\" data-toggle=\"tab\" [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">All homes<div [ngStyle]=\"{'background': linkedCommunity?.primary_color}\" class=\"bottom-line\"></div></a>\n                                    </li>\n                                    <li role=\"presentation\" *ngIf=\"newHomes?.length\">\n                                        <a href=\"#model-New-Homes\" aria-controls=\"New-Homes\" role=\"tab\" data-toggle=\"tab\" (mouseover)=\"after($event)\" \n                                        (mouseout)=\"after($event)\">New Homes<div style= \"background: none\" class=\"bottom-line\"></div></a>\n                                    </li>\n                                    <li role=\"presentation\" *ngIf=\"preLoved?.length\">\n                                        <a href=\"#model-Pre-loved-homes\" aria-controls=\"Pre-loved-homes\" role=\"tab\" data-toggle=\"tab\" (mouseover)=\"after($event)\" \n                                        (mouseout)=\"after($event)\">Pre-loved homes<div style= \"background: none\" class=\"bottom-line\"></div></a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <!-- Tab panes -->\n                            <div class=\"tab-content\">\n                                <div role=\"tabpanel\" class=\"tab-pane active\" id=\"model-All-homes\">\n                                    <div class=\"sale-box\">\n                                        <li *ngFor=\"let home of fullDetail?.other_homes\">\n                                            <div class=\"img-show-box\">\n                                                <div class=\"homefor-sale-box-img\">\n                                                <a href=\"/homes-for-sale/{{home.id}}\"><img *ngIf=\"home?.images?.length\" \n                                                    [src]=\"home.images[0]\" alt=\"\"></a>\n                                                </div>\n                                                <a href=\"/homes-for-sale/{{home.id}}\"><h4 [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">{{home.address}}</h4></a>\n                                                <a *ngIf=\"home?.list_price\" href=\"/homes-for-sale/{{home.id}}\"><p>${{home.list_price | number : '1.0'}}</p></a>\n                                            </div>\n                                        </li>\n                                    </div>\n                                </div>\n                                <div role=\"tabpanel\" class=\"tab-pane\" id=\"model-New-Homes\" *ngIf=\"newHomes?.length\">\n                                    <ul class=\"sale-box\">\n                                        <li *ngFor=\"let new of newHomes\">\n                                            <div class=\"img-show-box\">\n                                                <div class=\"homefor-sale-box-img\">\n                                                <a href=\"/homes-for-sale/{{new.id}}\"><img *ngIf=\"new?.images?.length\" [src]=\"new.images[0]\" alt=\"\"></a>\n                                                </div>\n                                                <a href=\"/homes-for-sale/{{new.id}}\"><h4 [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">{{new.address}}</h4></a>\n                                                 <a *ngIf=\"new?.list_price\" href=\"/homes-for-sale/{{new.id}}\"><p>${{new.list_price | number : '1.0'}}</p></a>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div role=\"tabpanel\" class=\"tab-pane\" id=\"model-Pre-loved-homes\" *ngIf=\"preLoved?.length\">\n                                    <ul class=\"sale-box\">\n                                        <li *ngFor=\"let loved of preLoved\">\n                                            <div class=\"img-show-box\">\n                                                <div class=\"homefor-sale-box-img\">\n                                                <a href=\"/homes-for-sale/{{loved.id}}\"><img *ngIf=\"loved?.images?.length\" \n                                                    [src]=\"loved.images[0]\" alt=\"\"></a>\n                                                </div>\n                                                <a href=\"/homes-for-sale/{{loved.id}}\"><h4 [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">{{loved.address}}</h4></a>\n                                                <a *ngIf=\"loved?.list_price\" href=\"/homes-for-sale/{{loved.id}}\"><p>${{loved.list_price | number : '1.0'}}</p></a>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n\n                    </section>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end Modal all 28 homes -->\n\n    <!-- Modal facilities-->\n    <div class=\"modal fade\" id=\"myfaci\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\">&times;</button>\n                    <section class=\"sale-at-Aspley\">\n                        <div class=\"container\">\n                            <div class=\"card\">\n                                <h2 class=\"heading\">Community facilities</h2>\n                                <div class=\"divider\"></div>\n                                <p class=\"text-fac\">You'll never want to leave the grounds with the facilities available at {{linkedCommunity?.first_name}}!</p>\n                            </div>\n                            <!-- Tab panes -->\n                            <div class=\"tab-content\">\n                                <!-- content -->\n                                <div class=\"sale-box\">\n                                    <li *ngFor=\"let community_facility of fullDetail?.community_facilities\">\n                                        <div class=\"img-show-box\">\n                                            <div class=\"homefor-sale-box-img\">\n                                            <img [src]=\"community_facility.image.url\" alt=\"\">\n                                            </div>\n                                            <h4 class=\"marg-tb\" [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">{{community_facility.name}}</h4>\n                                        </div>\n                                    </li>\n                                </div>\n                                <!-- end of content -->\n                            </div>\n                        </div>\n\n                    </section>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end Modal facilities-->\n\n    <!-- Modal open days-->\n    <div class=\"modal fade\" id=\"mydays\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\">&times;</button>\n                    <section class=\"sale-at-Aspley\">\n                        <div class=\"container\">\n                            <div class=\"card\">\n                                <h2 class=\"heading\">{{fullDetail?.community_events.length}} Planned open days</h2>\n                                <div class=\"divider\"></div>\n                            </div>\n                            <!-- Tab panes -->\n                            <div class=\"tab-content\">\n                                <!-- content -->\n                                <div class=\"sale-box\">\n                                    <!-- first in order -->\n                                    <a routerLink=\"/events/{{event.id}}\" *ngFor=\"let event of fullDetail?.community_events\" data-dismiss=\"modal\">\n                                        <li class=\"width-fullnomarg\">\n                                            <div class=\"box\">\n                                                <div class=\"date-box\"  [ngStyle]=\"{'background': '-webkit-linear-gradient(left, '+linkedCommunity?.primary_color+' 0%, '+linkedCommunity.secondary_color +' 100%)'}\">\n                                                    <div class=\"date\">\n                                                        <span>{{event.day}}</span>\n                                                        <span>{{event.month}}</span>\n                                                    </div>\n                                                </div>\n                                                <h5>Read more & RSVP.</h5>\n                                            </div>\n                                        </li>\n                                    </a>\n                                </div>\n                                <!-- end of content -->\n                            </div>\n                        </div>\n\n                    </section>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end Modal open days-->\n\n    <!-- what's nearby modal-->\n    <div class=\"modal fade\" id=\"mynearby\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\">&times;</button>\n                    <section class=\"sale-at-Aspley\">\n                        <div class=\"container\">\n                            <div class=\"card\">\n                                <h2 class=\"heading\">What's nearby?</h2>\n                                <div class=\"divider\"></div>\n                            </div>\n                            <!-- Tab panes -->\n                            <div class=\"tab-content\">\n                                <!-- content -->\n                                <div class=\"sale-box\">\n                                    <li *ngFor=\"let nearbys of fullDetail?.near_bys\">\n                                        <div class=\"img-show-box\">\n                                            <div class=\"homefor-sale-box-img\">\n                                            <img [src]=\"nearbys.image.url\" alt=\"\">\n                                            </div>\n                                            <h4 [ngStyle]=\"{'color': linkedCommunity?.primary_color}\">{{nearbys.name}}</h4>\n                                            <p>{{nearbys.distance}}</p>\n                                        </div>\n                                    </li>\n                                </div>\n                                <!-- end of content -->\n                            </div>\n                        </div>\n\n                    </section>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end what's nearby -->"

/***/ }),

/***/ "../../../../../src/app/howitworks/howitworks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/howitworks/howitworks.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <!-- Header width bg - fixed version -->\n    <section class=\"hfsl-banner our-home-design-hero how-it-work\"[ngStyle]=\"{'background': 'url(' + bgimg + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n        <div class=\"overlay\"></div>\n        <div class=\"context\">\n            <div class=\"container\">\n                 <h2>{{howwork.heroheading}}</h2>\n                 <p>{{howwork.heroText}}</p>\n            </div>\n        </div>\n        <div class=\"dwn-pdf\">\n            <a href=\"{{pdf}}\" target=\"_blank\" download>Download PDF</a>\n        </div>\n    </section>\n   <!-- Header width bg - fixed version  end -->\n\n\n\n\n    <!-- Intro - What is a land-lease community? -->\n    <section class=\"home-getmore how-it-work\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 getmore-left\">\n                <h2>{{started1.blockheading}}</h2>\n                <p>{{started1.blockdescription}}</p>\n            </div>\n            <div class=\"col-sm-6 getmore-right\">\n             <ul>\n               <li>\n                 <div class=\"imgbox\"><img src=\"{{startedimg1}}\" alt=\"\"></div>\n                 <h3>{{started1.featureHeading1Bold}}</h3>\n                 <p>{{started1.featureDescription1}}</p>\n               </li>\n               <li>\n                 <div class=\"imgbox\"><img src=\"{{startedimg2}}\" alt=\"\"></div>\n                 <h3>{{started1.featureHeading2Bold}}</h3>\n                 <p>{{started1.featureDescription2}}</p>\n               </li>\n               <li>\n                 <div class=\"imgbox\"><img src=\"{{startedimg3}}\" alt=\"\"></div>\n                 <h3>{{started1.featureHeading3Bold}}</h3>\n                 <p>{{started1.featureDescription3}}</p>\n               </li>\n               <li>\n                 <div class=\"imgbox\"><img src=\"{{startedimg4}}\" alt=\"\"></div>\n                 <h3>{{started1.featureHeading4Bold}}</h3>\n                 <p>{{started1.featureDescription4}}</p>\n               </li>\n             </ul>\n            </div>\n          </div>\n        </div>\n    </section>\n    <!-- Intro - What is a land-lease community? -->\n\n\n\n\n    <!-- Offer section -->\n    <section class=\"offer-headline-admin how-it-work\">\n        <div class=\"col-sm-12 col-md-6 no-pad hidden-xs hidden-sm\">\n\n\n\n        <img src=\"{{img}}\" alt=\"\"></div>\n        <div class=\"col-sm-12 col-md-6\">\n            <div class=\"rg-box\">\n                <h2>{{blue_gradient.headingText}}</h2>\n                <p>{{blue_gradient.contentText}}</p>\n                <div class=\"buttons\"><a href=\"{{blue_gradient.buttonUrl}}\" target=\"_blank\" class=\"ods-btn\">{{blue_gradient.buttonText}}</a></div>\n            </div>\n        </div>\n    </section>\n     <!-- end  Offer section -->\n\n\n\n\n\n    <!-- Why is it the smarter option? -->\n    <!-- removed asked code -->\n   <!--  <section class=\"how-it-works what-land-lease\">\n        <div class=\"container\">\n            <div class=\"top-heading\">\n                <div class=\"work-title\">\n                    <h3>{{why_smart.howItWorksHeading}}</h3>\n                    <p>{{why_smart.howItWorksDescription}}</p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"\">\n                    <div class=\"col-md-4\">\n                        <div class=\"work-col\">\n                            <h4>{{why_smart.heading1}}</h4>\n                            <p>{{why_smart.description1}} </p>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"work-col\">\n                            <h4>{{why_smart.heading2}}</h4>\n                            <p>{{why_smart.description2}}</p>\n\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"work-col\">\n                            <h4>{{why_smart.heading3}}</h4>\n                            <p>{{why_smart.description3}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section> -->\n     <!-- Why is it the smarter option? end -->\n\n\n    <!--Video background block-->\n    <section class=\"video-background how-works-video\">\n        <div class=\"container\">\n\n\n                    <a href=\"javascript:void(0);\" class=\"js-modal-btn\" [attr.data-video-id]=\"video1.videoBackgroundUrl\">\n                        <img src=\"./images/play-icon.png\">\n                    </a>\n                    <div style=\"display: none\" id=\"video-url\">{{video1.videoBackgroundUrl}}</div>\n\n\n        </div>\n    </section>\n    <!--END Video background block-->\n\n\n\n    <!-- Why is it the smarter option? -->\n    <section class=\"how-it-works what-land-lease\">\n        <div class=\"container\">\n            <div class=\"top-heading\">\n                <div class=\"work-title\">\n                    <h3>{{cost.howItWorksHeading}}</h3>\n                    <p>{{cost.howItWorksDescription}} </p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"\">\n                    <div class=\"col-md-4\">\n                        <div class=\"work-col\">\n                            <div class=\"icon\"><img src=\"{{cost1}}\"></div>\n                            <h4>{{cost.heading1}}</h4>\n                            <p>{{cost.description1}}</p>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"work-col\">\n                            <div class=\"icon\"><img src=\"{{cost2}}\"></div>\n                            <h4>{{cost.heading2}}</h4>\n                            <p>{{cost.description2}}</p>\n\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"work-col\">\n                            <div class=\"icon\"><img src=\"{{cost3}}\"></div>\n                            <h4>{{cost.heading3}}</h4>\n                            <p>{{cost.description3}} </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n     <!-- Why is it the smarter option? end -->\n\n\n\n\n\n    <!-- featured homes Section - fixed version -->\n    <section class=\"sale-at-Aspley our-home-designe\" id=\"featured-home\">\n        <div class=\"container\">\n            <div class=\"card\">\n                <h2 class=\"heading\">Featured homes</h2>\n                <div class=\"heading-right-link\"><a routerLink=\"/homes-for-sale\">Discover all {{homeCount}} homes for sale</a></div>\n                <div class=\"divider\"></div>\n            </div>\n        </div>\n\n        <div class=\"tab-content\">\n            <!-- all homes tab -->\n            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"All-homes\">\n                <div class=\"lookingsomthing-warp home-carousel\">\n                    <div class=\"inner-box-warp\">\n\n                        <div class=\"center slider\">\n                            <!-- community card -->\n                            <div *ngFor=\"let home of featuredHomes;let jj = index\">\n                                <ul class=\"home-for-sale\">\n                                    <li class=\"detail-list\">\n                                            <div class=\"img-slider-warp mart-bot14\">\n                                                <div class=\"sl-box\">\n                                                    <span *ngIf=\"home.status=='sold'\" class=\"paid-btn\">sold</span>\n\n                                                    <span *ngIf=\"home.status=='under_offer'\" class=\"paid-btn\" style=\"background: #f89923;\">Under Offer</span>\n                                                    <div id=\"carousel{{jj}}\" class=\"carousel slide\" data-interval=\"false\">\n                                                        <div class=\"carousel-inner home-carousel\">\n                                                        <div class=\"item\" *ngFor=\"let _image of home.images;let ii = index\" [ngClass]=\"{active: ii===0}\">\n                                                              <img\n                                                              [src]=\"_image\"\n                                                              alt=\"\">\n                                                          </div>\n                                                        </div>\n                                                        <a class=\"left carousel-control\" href=\"#carousel{{jj}}\" data-slide=\"prev\">‹</a>\n                                                        <a class=\"right carousel-control\" href=\"#carousel{{jj}}\" data-slide=\"next\">›</a>\n                                                    </div>\n\n                                                </div>\n                                            </div>\n                                            <a href=\"homes-for-sale/{{home.id}}\">\n                                            <div class=\"pr-b\" *ngIf=\"home?.list_price\">${{home.list_price | number:'1.0'}}</div>\n                                            <p>{{home.address}} {{home.address1}}</p>\n                                            <h4 class=\"margt25\"><i class=\"sicon\" [ngStyle]=\"{'background-image': 'url(' + home?.community?.community_icon?.url + ')','background-repeat': 'no-repeat','background-position': 'center'}\"></i> Located in {{home.community.first_name}}</h4>\n                                            <div class=\"afs-wp\">\n                                                <ul>\n                                                    <li><i class=\"bed\"></i> {{home.no_of_bedrooms}}</li>\n                                                    <li><i class=\"tub\"></i> {{home.no_of_bathrooms}}</li>\n                                                    <li><i class=\"car\"></i> {{home.car_space}}</li>\n                                                </ul>\n                                                <div *ngIf=\"home?.record_type == 'Pre-loved'\" class=\"new-btn new-btn\" style=\"border: 1px solid #62717f; color: #62717f!important; \">Pre Loved</div>\n                                                <div *ngIf=\"home?.record_type == 'New'\" class=\"new-btn new-btn\">New</div>\n                                            </div>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- end of all homes tab -->\n        </div>\n\n\n    </section>\n    <!-- featured homes Section fixed version end -->\n\n     <!-- start CTA block -->\n    <section class=\"cta-block\">\n        <div class=\"container\">\n            <h2 class=\"whithead\">{{standardCtaInfoPackDescription}}</h2>\n            <div class=\"buttons\">\n                <a href='#' data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal-static\" class=\"borbtn\">{{standardCtaInfoPackButtonText}}</a>\n            </div>\n            <p>{{standardCtaInfoPackAfterButtonText}}</p>\n        </div>\n    </section>\n    <!-- end CTA block -->\n        <!-- Get an info pack Modal -->\n  <div class=\"modal fade\" id=\"get-an-info-pack-modal-static\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body no-pad\">\n                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  (mouseover)=\"onHover($event)\"\n                                    (mouseout)=\"onHover($event)\" >&times;</button>\n                    <div class=\"col-sm-5 col-md-5 right-img-main no-pad hidden-xs hidden-sm\">\n                        <div class=\"right-img-full\">\n                            <div class=\"right-img-full\" style=\"background: url(images/generic-info.jpg) no-repeat center;\"></div>\n                            <!--  <img\n                             [src]=\"comunitylatestDetail.featured_image.url\" alt=\"\" style=\n                             \"height: -webkit-fill-available;\"> -->\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-7 getinfowp\">\n\n                        <div class=\"wp-main\">\n                         <h3 style=\"color: #105dac;\">\n                            <div class=\"title-img-round\">\n                                <img src=\"images/Gateway-icon-only-square.png\" alt=\"\" class=\"\">\n                            </div>\n                            Get an info pack\n                         </h3>\n                         <!-- <div class=\"profile-row\">\n                            <div class=\"profile-img\"><img src=\"images/img11.png\" alt=\"\"></div>\n                            <p><strong> Melinda James</strong> | +61 421 223 221 | melinda.james@gty.com.au</p>\n                         </div> -->\n                         <div class=\"divider\"></div>\n<!--                         <div class=\"form-getinfo-succes\">\n                            <div class=\"row\">\n                            <div class=\"col-sm-2\"><img src=\"images/form-sucess.png\" alt=\"\"></div>\n                            <div class=\"col-sm-10\"><p class=\"pera-textbig\"> Thank you for your enquiry. We've emailed you the info pack. You can view it by clicking the button below.</p>\n                            <button (click)=\"infoPdf(genericInfo.info_pack?.info_pdf.url)\"\n                             class=\"btn btn-org\">View the info pack Now</button></div>\n                            </div>\n                        </div> -->\n                         <div class=\"form-wp-getinfo\">\n                             <div class=\"row\">\n                                <!-- form starts here-->\n                                <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\"\n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\"\n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\"\n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\"\n                                           [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\"\n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\" #plan=\"ngModel\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\"\n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\"\n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\"\n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                    <button  class=\"btn btn-org\"  id=\"send-sucess\"\n                                     (click)=\"getInfo(infoForm)\" style=\"background: #105dac; border-color:#105dac;\"\n                                    (mouseover)=\"changeColor($event)\"\n                                    (mouseout)=\"changeColor($event)\" type=\"submit\">Get an info pack</button>\n                                    </div>\n                                </form>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end  Get an info pack Modal -->\n\n        <!--Video popup JS-->\n    <script src=\"../js/modal-video.js\"></script>\n    <script src=\"../js/jquery-modal-video.js\"></script>\n    <script src=\"../js/jquery.tubular.1.0.js\"></script>\n    <script type=\"text/javascript\">\n    $(\".js-modal-btn\").modalVideo();\n    </script>\n    <script>\n        $('document').ready(function() {\n            var options = { videoId: 'qCNfNLHe7Vs?modestbranding=1', start: 0 , mute: true, };\n            $('.video-background').tubular(options);\n            // f-UGhWj1xww cool sepia hd\n            // 49SKbS7Xwf4 beautiful barn sepia\n        });\n    </script>\n\n\n    <script>\n        if (window.shr) { window.shr.setup({ count: { classname: 'btn__count' } }); }\n    </script>\n\n    <script src=\"http://cdn.trackduck.com/toolbar/prod/td.js\" async data-trackduck-id=\"59c1f6d531124d3462e66c65\"></script>\n"

/***/ }),

/***/ "../../../../../src/app/howitworks/howitworks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowitworksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HowitworksComponent = (function () {
    function HowitworksComponent(apiService, router, segment) {
        this.apiService = apiService;
        this.router = router;
        this.segment = segment;
        this.faqTitle = [];
        this.steps = [];
        this.howItWorksHeading = {};
        this.showData = false;
        this.isDataAvailable = false;
        this.submitted = false;
        this.info = { firstname: '', lastname: '', phone: '', email: '' };
    }
    HowitworksComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
        //fetching the list of featured homes
        this.apiService.get('/home_for_sales/featured_home').subscribe(function (res) {
            _this.isDataAvailable = true;
            _this.featuredHomes = res.homes;
            $.getScript('js/customSlick.js');
            _this.getGenericInfopack();
        }, function (err) {
            console.log(err);
        });
        //count of homes
        this.apiService.get('/communities/count_for_home_and_community').subscribe(function (res) {
            _this.homeCount = res.home_count;
        }, function (err) {
            console.log(err);
        });
        var that = this;
        //How secure is my tenure
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/2XHeIJcpmEsugKmSEUEE4W?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.faqTitle = data.fields;
        });
        that.showData = true;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/10h4Zli6MwKKQOuya0smM2?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.blogLink1 = data.fields.blogLink1;
            that.blogLink2 = data.fields.blogLink2;
            that.blogLink3 = data.fields.blogLink3;
            that.blogTitle1 = data.fields.blogTitle1;
            that.blogTitle2 = data.fields.blogTitle2;
            that.blogTitle3 = data.fields.blogTitle3;
            that.exploreMoreButton = data.fields.exploreMoreButton;
            that.ourBlogsDescription = data.fields.ourBlogsDescription;
            that.ourBlogsTitle = data.fields.ourBlogsTitle;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.blogBackgroundImage1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.blogBackgroundImage1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.blogBackgroundImage2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.blogBackgroundImage2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.blogBackgroundImage3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.blogBackgroundImage3 = data.fields.file.url;
            });
        });
        //standard CTA
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.standardCtaInfoPackDescription = data.fields.standardCtaInfoPackDescription;
            that.standardCtaInfoPackButtonText = data.fields.standardCtaInfoPackButtonText;
            that.standardCtaInfoPackAfterButtonText = data.fields.standardCtaInfoPackAfterButtonText;
        });
        //How it work
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1m0fmbTu0AAmoQo6u2qGem?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.howwork = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.Fullwidthbackgroundimage.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.bgimg = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.downloadpdf.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.pdf = data.fields.file.url;
            });
        });
        // Three images/pdf   
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/4Lvoax98XCEy2GESceswac?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.howItWorksHeading = data.fields;
            that.mediatext1 = data.fields.downloadPdfText1;
            that.mediatext2 = data.fields.downloadPdfText2;
            ;
            that.mediatext3 = data.fields.downloadPdfText3;
            ;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.fullWidthImageBackground.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.imageId = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/9VCUAqX5dc0/assets/" + data.fields["videoBackgroundUrl"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.video_url = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["icon1"][0].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.image1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["icon2"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.image2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["icon3"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.image3 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/44NBACEyWc0MKYqeCG0Oy6/assets/" + data.fields["downloadPdf"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.pdf1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["downloadPdfMeadi2"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.pdf2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["downloadPdfMedia3"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.pdf3 = data.fields.file.url;
            });
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.chatData = data.fields;
        });
        // how we started
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/3j4bppaZgcWUqkueIoAEcI?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.started1 = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["featureIcon1"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.startedimg1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["featureIcon2"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.startedimg2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["featureIcon3"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.startedimg3 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["featureIcon4"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.startedimg4 = data.fields.file.url;
            });
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5Z6A0Amf16wycASWKCyGcA?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.blue_gradient = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.leftBackgroundImage.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.img = data.fields.file.url;
            });
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1m3VHXYcTyEWEqqYw8Kiea?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.why_smart = data.fields;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/7gCyVkppjquiwKCYWo0Kes?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.cost = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["headingIcon1"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.cost1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["headingIcon2"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.cost2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields["headingIcon3"].sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.cost3 = data.fields.file.url;
            });
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.blue_cta = data.fields;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5pnmAVNOZUgM4460QAeqiw?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.video = data.fields;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5pnmAVNOZUgM4460QAeqiw?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.video1 = data.fields;
            $.getScript('js/modal-video.js');
            $.getScript('js/jquery.tubular.1.0.js');
            $.getScript("js/customCarousel.js");
        });
    };
    HowitworksComponent.prototype.getGenericInfopack = function () {
        var _this = this;
        this.apiService.get('/pdf_info_packs/featured_pack').subscribe(function (res) {
            _this.genericInfo = res;
            window.localStorage.setItem('generic_url', _this.genericInfo.info_pack.info_pdf.url);
        });
    };
    HowitworksComponent.prototype.getInfo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var userData = {};
            userData.firstname = this.info.firstname;
            userData.lastname = this.info.lastname;
            userData.plan = this.info.plan;
            userData.phone = this.info.phone;
            userData.email = this.info.email;
            userData.description = this.info.area;
            window.localStorage.setItem('generic_data', JSON.stringify(userData));
            console.log('success!');
            this.segment.track('GetInfoPack', {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area
            }).then(function () {
                window.localStorage.setItem('genericCheck', '1');
                _this.router.navigateByUrl('/success');
                $('#get-an-info-pack-modal-static')[0].style.display = 'none';
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                console.log("Event sended");
            });
        }
        else {
            console.log('validation failed!');
        }
    };
    HowitworksComponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : '#105dac';
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#ffffff';
    };
    HowitworksComponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#414952';
    };
    HowitworksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-howitworks',
            template: __webpack_require__("../../../../../src/app/howitworks/howitworks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/howitworks/howitworks.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _c || Object])
    ], HowitworksComponent);
    return HowitworksComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=howitworks.component.js.map

/***/ }),

/***/ "../../../../../src/app/howitworks/howitworks.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return howitworksModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__howitworks_component__ = __webpack_require__("../../../../../src/app/howitworks/howitworks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var howitworksRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'how-it-works',
        component: __WEBPACK_IMPORTED_MODULE_2__howitworks_component__["a" /* HowitworksComponent */]
    }
]);
var howitworksModule = (function () {
    function howitworksModule() {
    }
    howitworksModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* SharedModule */],
                howitworksRouting
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__howitworks_component__["a" /* HowitworksComponent */]
            ],
            providers: []
        })
    ], howitworksModule);
    return howitworksModule;
}());

//# sourceMappingURL=howitworks.module.js.map

/***/ }),

/***/ "../../../../../src/app/legal/legal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/legal/legal.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- privacy-policy -->\n    <section class=\"privacy-policy legal\">\n    \t<div class=\"communities\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<h2>{{termsHeading}}</h2>\n    \t\t</div>\n\t\t</div>\n\t\t\n\t\t\n\t\t<div class=\"privacy-sec\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<markdown [data]=\"terms\"></markdown>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/legal/legal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LegalComponent = (function () {
    function LegalComponent(segment) {
        this.segment = segment;
    }
    LegalComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
        $.getScript('js/custom.js');
        var that = this;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/4hfv6OH4AwyeMagS0YckkU?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            console.log(data);
            that.terms = data.fields.privacyPolicyContent;
            that.termsHeading = data.fields.privacyPolicyHeading;
        });
    };
    LegalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-legal',
            template: __webpack_require__("../../../../../src/app/legal/legal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/legal/legal.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _a || Object])
    ], LegalComponent);
    return LegalComponent;
    var _a;
}());

//# sourceMappingURL=legal.component.js.map

/***/ }),

/***/ "../../../../../src/app/legal/legal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return legalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__legal_component__ = __webpack_require__("../../../../../src/app/legal/legal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_markdown__ = __webpack_require__("../../../../angular2-markdown/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var legalRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'legal',
        component: __WEBPACK_IMPORTED_MODULE_2__legal_component__["a" /* LegalComponent */]
    }
]);
var legalModule = (function () {
    function legalModule() {
    }
    legalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_angular2_markdown__["a" /* MarkdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* SharedModule */],
                legalRouting
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__legal_component__["a" /* LegalComponent */]
            ],
            providers: []
        })
    ], legalModule);
    return legalModule;
}());

//# sourceMappingURL=legal.module.js.map

/***/ }),

/***/ "../../../../../src/app/ourteam/ourteam.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ourteam/ourteam.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header width bg - fixed version -->\n    <section class=\"hfsl-banner our-team-hero\" [ngStyle]=\"{'background-image': 'url(' + bgimg + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n       <div class=\"overlay\"></div>     \n        <div class=\"context\">\n            <div class=\"container\">\n                 <h2>{{ourteamHerohead}}</h2>\n                 <p>{{ourteamHerotext}}</p>\n            </div>\n        </div>\n    </section>\n    <!-- Header width bg - fixed version end -->\n    \n    <!-- start directors block -->\n    <section class=\"directors-block\">\n        <div class=\"container\">\n           <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <h2>{{ourTeamDirectorHeading}}</h2>\n                </div>    \n           </div>\n           <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"directors-col\">\n                        <div class=\"profile-img\">\n                            <img src=\"{{directorimg1}}\" alt=\"\">\n                        </div>\n                        <h3 class=\"name\">{{directorTitle1}}</h3>\n                        <h3 class=\"designation\">{{directorDesignation1}}</h3>\n                        <!-- <p>{{directorDescription1}}</p> -->\n                        <markdown [data]=\"directorDescription1\"></markdown>\n                    </div>\n                    <div class=\"directors-col\">\n                        <div class=\"profile-img\">\n                            <img src=\"{{directorimg4}}\" alt=\"\">\n                        </div>\n                        <h3 class=\"name\">{{directorTitle4}}</h3>\n                        <h3 class=\"designation\">{{directorDesignation4}}</h3>\n                        <!-- <p>{{directorDescription4}}</p> -->\n                        <markdown [data]=\"directorDescription4\"></markdown>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"directors-col\">\n                        <div class=\"profile-img\">\n                            <img src=\"{{directorimg2}}\" alt=\"\">\n                        </div>\n                        <h3 class=\"name\">{{directorTitle2}}</h3>\n                        <h3 class=\"designation\">{{directorDesignation2}}</h3>\n                        <!-- <p>{{directorDescription2}}</p> -->\n                        <markdown [data]=\"directorDescription2\"></markdown>\n                    </div>\n                    <div class=\"directors-col\">\n                        <div class=\"profile-img\">\n                            <img src=\"{{directorimg5}}\" alt=\"\">\n                        </div>\n                        <h3 class=\"name\">{{directorTitle5}}</h3>\n                        <h3 class=\"designation\">{{directorDesignation5}}</h3>\n                        <!-- <p>{{directorDescription5}}</p> -->\n                        <markdown [data]=\"directorDescription5\"></markdown>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"directors-col\">\n                        <div class=\"profile-img\">\n                            <img src=\"{{directorimg3}}\" alt=\"\">\n                        </div>\n                        <h3 class=\"name\">{{directorTitle3}}</h3>\n                        <h3 class=\"designation\">{{directorDesignation3}}</h3>\n                        <!-- <p>{{directorDescription3}}</p> -->\n                        <markdown [data]=\"directorDescription3\"></markdown>\n                    </div>\n                </div>\n           </div>\n        </div>\n    </section>\n    <!-- end directors block -->\n\n\n\n    <!-- start directors block -->\n    <section class=\"directors-block\">\n        <div class=\"container\">\n           <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <h2>{{managementHeading}}</h2>\n                </div>    \n           </div>\n           <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"directors-col\">\n                        <div class=\"profile-img\">\n                            <img src=\"{{managementimg1}}\" alt=\"\">\n                        </div>\n                        <h3 class=\"name\">{{managementTitle1}}</h3>\n                        <h3 class=\"designation\">{{managementDesignation1}}</h3>\n                        <!-- <p>{{managementDescription1}}</p> -->\n                        <markdown [data]=\"managementDescription1\"></markdown>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"directors-col\">\n                        <div class=\"profile-img\">\n                            <img src=\"{{managementimg2}}\" alt=\"\">\n                        </div>\n                        <h3 class=\"name\">{{managementTitle2}}</h3>\n                        <h3 class=\"designation\">{{managementDesignation2}}</h3>\n                        <!-- <p>{{managementDescription2}}</p> -->\n                        <markdown [data]=\"managementDescription2\"></markdown>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"directors-col\">\n                        <div class=\"profile-img\">\n                            <img src=\"{{managementimg3}}\" alt=\"\">\n                        </div>\n                        <h3 class=\"name\">{{managementTitle3}}</h3>\n                        <h3 class=\"designation\">{{managementDesignation3}}</h3>\n                        <!-- <p>{{managementDescription3}}</p> -->\n                        <markdown [data]=\"managementDescription3\"></markdown>\n                    </div>\n                </div>\n           </div>\n           <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"directors-col col-with-image\">\n                        <div class=\"profile-img\">\n                            <img src=\"{{managementimg4}}\" alt=\"\">\n                        </div>\n                        <h3 class=\"name\">{{managementTitle4}}</h3>\n                        <h3 class=\"designation\">{{managementDesignation4}}</h3>\n                        <!-- <p>{{managementDescription4}}</p> -->\n                        <markdown [data]=\"managementDescription4\"></markdown>\n                    </div>\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"our-team-main-img\">\n                        <img src=\"{{teamimg}}\" alt=\"\">\n                    </div>\n                </div>\n           </div>\n        </div>\n    </section>\n    <!-- end directors block -->\n\n\n   <!-- featured homes Section - fixed version -->\n    <section class=\"sale-at-Aspley our-home-designe\" id=\"featured-home\">\n        <div class=\"container\">\n            <div class=\"card\">\n                <h2 class=\"heading\">Featured homes</h2>\n                <div class=\"heading-right-link\"><a routerLink=\"/homes-for-sale\">Discover all {{homeCount}} homes for sale</a></div>\n                <div class=\"divider\"></div>\n            </div>\n        </div>\n\n        <div class=\"tab-content\">\n            <!-- all homes tab -->\n            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"All-homes\">\n                <div class=\"lookingsomthing-warp home-carousel\">\n                    <div class=\"inner-box-warp\">\n\n                        <div class=\"center slider\">\n                            <!-- community card -->\n                            <div *ngFor=\"let home of featuredHomes;let jj = index\">\n                                <ul class=\"home-for-sale\">\n                                    <li class=\"detail-list\">\n                                            <div class=\"img-slider-warp mart-bot14\">\n                                                <div class=\"sl-box\">\n                                                    <span *ngIf=\"home.status=='sold'\" class=\"paid-btn\">sold</span>\n\n                                                    <span *ngIf=\"home.status=='under_offer'\" class=\"paid-btn\" style=\"background: #f89923;\">Under Offer</span>\n                                                    <div id=\"carousel{{jj}}\" class=\"carousel slide\" data-interval=\"false\">\n                                                        <div class=\"carousel-inner home-carousel\">                                                          \n                                                        <div class=\"item\" *ngFor=\"let _image of home.images;let ii = index\" [ngClass]=\"{active: ii===0}\">\n                                                              <img \n                                                              [src]=\"_image\" \n                                                              alt=\"\">\n                                                          </div>\n                                                        </div>\n                                                        <a class=\"left carousel-control\" href=\"#carousel{{jj}}\" data-slide=\"prev\">‹</a>\n                                                        <a class=\"right carousel-control\" href=\"#carousel{{jj}}\" data-slide=\"next\">›</a>\n                                                    </div>\n\n                                                </div>\n                                            </div>\n                                            <a href=\"homes-for-sale/{{home.id}}\">\n                                            <div class=\"pr-b\" *ngIf=\"home?.list_price\">${{home?.list_price | number:'1.0'}}</div>\n                                            <p>{{home.address}} {{home.address1}}</p>\n                                            <h4 class=\"margt25\"><i class=\"sicon\" [ngStyle]=\"{'background-image': 'url(' + home?.community?.community_icon?.url + ')','background-repeat': 'no-repeat','background-position': 'center'}\"></i> Located in {{home.community.first_name}}</h4>\n                                            <div class=\"afs-wp\">\n                                                <ul>\n                                                    <li><i class=\"bed\"></i> {{home.no_of_bedrooms}}</li>\n                                                    <li><i class=\"tub\"></i> {{home.no_of_bathrooms}}</li>\n                                                    <li><i class=\"car\"></i> {{home.car_space}}</li>\n                                                </ul>\n                                                <div *ngIf=\"home?.record_type == 'Pre-loved'\" class=\"new-btn new-btn\" style=\"border: 1px solid #62717f; color: #62717f!important; \">Pre Loved</div>\n                                                <div *ngIf=\"home?.record_type == 'New'\" class=\"new-btn new-btn\">New</div>\n                                            </div>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- end of all homes tab -->\n        </div>\n\n\n    </section>\n    <!-- featured homes Section - fixed version -->\n\n\n    <!-- start CTA block -->\n    <!-- <section class=\"join-our-team\" [ngStyle]=\"{'background-image': 'url(' + imageBackground + ')','background-repeat': 'no-repeat','background-position': 'center'}\"> -->\n    <section class=\"join-our-team\">\n        <div class=\"container\">\n            <div class=\"join-our-team-inner\">\n                <h2>{{ctaHeading}}</h2>\n                <p>{{ctaDescription}}</p>\n                <div class=\"buttons\">\n                    <a href=\"{{ctaButtonUrl}}\" class=\"btn-blue\">{{ctaButtonText}}</a> \n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- end CTA block -->\n\n\n\n\t<!-- start CTA block - fixed version -->\n\t <!-- <section class=\"cta-block\">\n        <div class=\"container\">\n            <h2 class=\"whithead\">{{standardCtaInfoPackDescription}}</h2>\n            <div class=\"buttons\">\n                <a href='#' data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal-static\" class=\"borbtn\">{{standardCtaInfoPackButtonText}}</a>\n            </div>\n            <p>{{standardCtaInfoPackAfterButtonText}}</p>\n        </div>\n    </section> -->\n\t<!-- start CTA block - fixed version -->\n        \n    <!-- Get an info pack Modal -->\n  <div class=\"modal fade\" id=\"get-an-info-pack-modal-static\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body no-pad\">\n                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\" >&times;</button>\n                    <div class=\"col-sm-5 col-md-5 right-img-main no-pad hidden-xs hidden-sm\">\n                        <div class=\"right-img-full\">\n                            <div class=\"right-img-full\" style=\"background: url(images/generic-info.jpg) no-repeat center;\"></div>\n                            <!--  <img \n                             [src]=\"comunitylatestDetail.featured_image.url\" alt=\"\" style= \n                             \"height: -webkit-fill-available;\"> -->\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-7 getinfowp\">\n                   \n                        <div class=\"wp-main\">\n                         <h3 style=\"color: #105dac;\">\n                            <div class=\"title-img-round\">\n                                <img src=\"images/Gateway-icon-only-square.png\" alt=\"\" class=\"\">    \n                            </div>\n                            Get an info pack\n                         </h3>\n                         <!-- <div class=\"profile-row\">\n                            <div class=\"profile-img\"><img src=\"images/img11.png\" alt=\"\"></div> \n                            <p><strong> Melinda James</strong> | +61 421 223 221 | melinda.james@gty.com.au</p>\n                         </div> -->\n                         <div class=\"divider\"></div>\n<!--                         <div class=\"form-getinfo-succes\">\n                            <div class=\"row\">\n                            <div class=\"col-sm-2\"><img src=\"images/form-sucess.png\" alt=\"\"></div>    \n                            <div class=\"col-sm-10\"><p class=\"pera-textbig\"> Thank you for your enquiry. We've emailed you the info pack. You can view it by clicking the button below.</p>\n                            <button (click)=\"infoPdf(genericInfo.info_pack?.info_pdf.url)\" \n                             class=\"btn btn-org\">View the info pack Now</button></div>\n                            </div>\n                        </div> -->\n                         <div class=\"form-wp-getinfo\">\n                             <div class=\"row\">\n                                <!-- form starts here-->\n                                <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\" \n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required> \n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>  \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\" \n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\" \n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\" #plan=\"ngModel\">   \n                                        </div>\n                                    </div>  \n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\" \n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\" \n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>  \n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p> \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\" \n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div> \n                                    <div class=\"col-sm-12\">\n                                    <button  class=\"btn btn-org\"  id=\"send-sucess\"\n                                     (click)=\"getInfo(infoForm)\" style=\"background: #105dac; border-color:#105dac;\" \n                                    (mouseover)=\"changeColor($event)\" \n                                    (mouseout)=\"changeColor($event)\" type=\"submit\">Get an info pack</button>\n                                    </div>\n                                </form>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end  Get an info pack Modal -->\n"

/***/ }),

/***/ "../../../../../src/app/ourteam/ourteam.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurteamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OurteamComponent = (function () {
    function OurteamComponent(apiService, router, segment) {
        this.apiService = apiService;
        this.router = router;
        this.segment = segment;
        this.submitted = false;
        this.info = { firstname: '', lastname: '', phone: '', email: '' };
    }
    OurteamComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
        this.getGenericInfopack();
        //fetching the list of featured homes
        this.apiService.get('/home_for_sales/featured_home').subscribe(function (res) {
            _this.featuredHomes = res.homes;
            $.getScript('js/customSlick.js');
        }, function (err) {
            console.log(err);
        });
        //count of homes
        this.apiService.get('/communities/count_for_home_and_community').subscribe(function (res) {
            _this.homeCount = res.home_count;
        }, function (err) {
            console.log(err);
        });
        var that = this;
        //standard CTA
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.chatData = data.fields;
            that.standardCtaInfoPackDescription = data.fields.standardCtaInfoPackDescription;
            that.standardCtaInfoPackButtonText = data.fields.standardCtaInfoPackButtonText;
            that.standardCtaInfoPackAfterButtonText = data.fields.standardCtaInfoPackAfterButtonText;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/4KY0JTdHeg8K2OwUocUYWs?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.ctaHeading = data.fields.ctaHeading;
            that.ctaDescription = data.fields.ctaDescription;
            that.ctaButtonUrl = data.fields.ctaButtonUrl;
            that.ctaButtonText = data.fields.ctaButtonText;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.imageBackground.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.imageBackground = data.fields.file.url;
            });
        });
        // Our Team heroheading
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/4C5dMcRcxawKycsymqcesG?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.ourteamHerohead = data.fields.heroHeading;
            that.ourteamHerotext = data.fields.heroText;
            // that.ourteamHerohead = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.Fullwidthbackgroundimage.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.bgimg = data.fields.file.url;
            });
        });
        // Board of directors
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/69tq9IrCIEyQqyigoqcyOw?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.ourTeamDirectorHeading = data.fields.ourTeamDirectorHeading;
            that.directorTitle1 = data.fields.directorTitle1;
            that.directorTitle2 = data.fields.directorTitle2;
            that.directorTitle3 = data.fields.directorTitle3;
            that.directorTitle4 = data.fields.directorTitle4;
            that.directorTitle5 = data.fields.directorTitle5;
            that.directorDesignation1 = data.fields.directorDesignation1;
            that.directorDesignation2 = data.fields.directorDesignation2;
            that.directorDesignation3 = data.fields.directorDesignation3;
            that.directorDesignation4 = data.fields.directorDesignation4;
            that.directorDesignation5 = data.fields.directorDesignation5;
            that.directorDescription1 = data.fields.directorDescription1;
            that.directorDescription2 = data.fields.directorDescription2;
            that.directorDescription3 = data.fields.directorDescription3;
            that.directorDescription4 = data.fields.directorDescription4;
            that.directorDescription5 = data.fields.directorDescription5;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.directorFeatureImage1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.directorimg1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.directorFeatureImage2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.directorimg2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.directorFeatureImage3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.directorimg3 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.directorFeatureImage4.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.directorimg4 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.directorFeatureImage5.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.directorimg5 = data.fields.file.url;
            });
        });
        // Our Management
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/64oiBjEC2cKkkoAaSg4cO2?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.teamManagement = data.fields;
            that.managementHeading = data.fields.managementHeading;
            that.managementTitle1 = data.fields.managementTitle1;
            that.managementTitle2 = data.fields.managementTitle2;
            that.managementTitle3 = data.fields.managementTitle3;
            that.managementTitle4 = data.fields.managementTitle4;
            that.managementDesignation1 = data.fields.managementDesignation1;
            that.managementDesignation2 = data.fields.managementDesignation2;
            that.managementDesignation3 = data.fields.managementDesignation3;
            that.managementDesignation4 = data.fields.managementDesignation4;
            that.managementDescription2 = data.fields.managementDescription2;
            that.managementDescription3 = data.fields.managementDescription3;
            that.managementDescription4 = data.fields.managementDescription4;
            that.managementDescription1 = data.fields.managementDescription1;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.managementFeatureImage1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.managementimg1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.managementFeatureImage2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.managementimg2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.managementFeatureImage3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.managementimg3 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.managementFeatureImage4.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.managementimg4 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.managementRightImage.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                console.log(data);
                that.teamimg = data.fields.file.url;
            });
        });
    };
    OurteamComponent.prototype.getGenericInfopack = function () {
        var _this = this;
        this.apiService.get('/pdf_info_packs/featured_pack').subscribe(function (res) {
            _this.genericInfo = res;
            window.localStorage.setItem('generic_url', _this.genericInfo.info_pack.info_pdf.url);
        });
    };
    OurteamComponent.prototype.getInfo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var userData = {};
            userData.firstname = this.info.firstname;
            userData.lastname = this.info.lastname;
            userData.plan = this.info.plan;
            userData.phone = this.info.phone;
            userData.email = this.info.email;
            userData.description = this.info.area;
            window.localStorage.setItem('generic_data', JSON.stringify(userData));
            console.log('success!');
            this.segment.track('GetInfoPack', {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area
            }).then(function () {
                window.localStorage.setItem('genericCheck', '1');
                _this.router.navigateByUrl('/success');
                $('#get-an-info-pack-modal-static')[0].style.display = 'none';
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                console.log("Event sended");
            });
        }
        else {
            console.log('validation failed!');
        }
    };
    OurteamComponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : '#105dac';
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#ffffff';
    };
    OurteamComponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#414952';
    };
    OurteamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ourteam',
            template: __webpack_require__("../../../../../src/app/ourteam/ourteam.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ourteam/ourteam.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _c || Object])
    ], OurteamComponent);
    return OurteamComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=ourteam.component.js.map

/***/ }),

/***/ "../../../../../src/app/ourteam/ourteam.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ourteamModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ourteam_component__ = __webpack_require__("../../../../../src/app/ourteam/ourteam.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_markdown__ = __webpack_require__("../../../../angular2-markdown/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ourteamRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'team',
        component: __WEBPACK_IMPORTED_MODULE_2__ourteam_component__["a" /* OurteamComponent */]
    }
]);
var ourteamModule = (function () {
    function ourteamModule() {
    }
    ourteamModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_angular2_markdown__["a" /* MarkdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* SharedModule */],
                ourteamRouting
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ourteam_component__["a" /* OurteamComponent */]
            ],
            providers: []
        })
    ], ourteamModule);
    return ourteamModule;
}());

//# sourceMappingURL=ourteam.module.js.map

/***/ }),

/***/ "../../../../../src/app/pageNotFound/pageNotFound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"error-template\">\n                <h1>\n                    Oops!</h1>\n                <h2>\n                    404 Not Found</h2>\n                <div class=\"error-details\">\n                    Sorry, an error has occured, Requested page not found!\n                </div>\n                <div class=\"error-actions\">\n                    <a routerLink=\"/\" class=\"btn btn-primary btn-lg\"><span class=\"glyphicon glyphicon-home\"></span>\n                        Take Me Home </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<style>\n\nbody { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);}\n.error-template {padding: 40px 15px;text-align: center;}\n.error-actions {margin-top:15px;margin-bottom:15px;}\n.error-actions .btn { margin-right:10px; }\n</style>"

/***/ }),

/***/ "../../../../../src/app/pageNotFound/pageNotFound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageNotFoundcomponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pageNotFoundcomponent = (function () {
    function pageNotFoundcomponent(router) {
        this.router = router;
        this.authType = '';
        this.title = '';
        this.isSubmitting = false;
    }
    pageNotFoundcomponent.prototype.ngOnInit = function () {
    };
    pageNotFoundcomponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-not-found',
            template: __webpack_require__("../../../../../src/app/pageNotFound/pageNotFound.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], pageNotFoundcomponent);
    return pageNotFoundcomponent;
    var _a;
}());

//# sourceMappingURL=pageNotFound.component.js.map

/***/ }),

/***/ "../../../../../src/app/pageNotFound/pageNotFound.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageNotFoundModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pageNotFound_component__ = __webpack_require__("../../../../../src/app/pageNotFound/pageNotFound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var pagenotfoundRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'pagenotfound',
        component: __WEBPACK_IMPORTED_MODULE_2__pageNotFound_component__["a" /* pageNotFoundcomponent */]
    }
]);
var pageNotFoundModule = (function () {
    function pageNotFoundModule() {
    }
    pageNotFoundModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* SharedModule */],
                pagenotfoundRouting
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pageNotFound_component__["a" /* pageNotFoundcomponent */]
            ],
            providers: []
        })
    ], pageNotFoundModule);
    return pageNotFoundModule;
}());

//# sourceMappingURL=pageNotFound.module.js.map

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".privacy-policy .privacy-sec .container .row p strong {\npadding-top: 60px;\npadding-bottom: 30px;\ndisplay: inline-block;\nwidth: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- privacy-policy -->\n    <section class=\"privacy-policy\">\n    \t<div class=\"communities\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<h2>{{privacyPolicyHeading}}</h2>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"privacy-sec\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<markdown [data]=\"privacyContent\"></markdown>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyComponent = (function () {
    function PrivacyComponent(segment) {
        this.segment = segment;
    }
    PrivacyComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
        $.getScript('js/custom.js');
        var that = this;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/2sm1KR6nAAIWOcseEu8YwW?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            console.log(data);
            that.privacyContent = data.fields.privacyPolicyContent;
            that.privacyPolicyHeading = data.fields.privacyPolicyHeading;
        });
    };
    PrivacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__("../../../../../src/app/privacy/privacy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/privacy/privacy.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _a || Object])
    ], PrivacyComponent);
    return PrivacyComponent;
    var _a;
}());

//# sourceMappingURL=privacy.component.js.map

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return privacyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacy_component__ = __webpack_require__("../../../../../src/app/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_markdown__ = __webpack_require__("../../../../angular2-markdown/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var privacyRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'privacy',
        component: __WEBPACK_IMPORTED_MODULE_2__privacy_component__["a" /* PrivacyComponent */]
    }
]);
var privacyModule = (function () {
    function privacyModule() {
    }
    privacyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_angular2_markdown__["a" /* MarkdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* SharedModule */],
                privacyRouting
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__privacy_component__["a" /* PrivacyComponent */]
            ],
            providers: []
        })
    ], privacyModule);
    return privacyModule;
}());

//# sourceMappingURL=privacy.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/community-helpers/event-block.component.html":
/***/ (function(module, exports) {

module.exports = "   "

/***/ }),

/***/ "../../../../../src/app/shared/community-helpers/event-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventBlockComponent = (function () {
    function EventBlockComponent() {
        this.comunitylatestDetail = {};
    }
    Object.defineProperty(EventBlockComponent.prototype, "config", {
        set: function (config) {
            if (config) {
                this.comunitylatestDetail = config;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EventBlockComponent.prototype, "config", null);
    EventBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'event-block',
            template: __webpack_require__("../../../../../src/app/shared/community-helpers/event-block.component.html")
        })
    ], EventBlockComponent);
    return EventBlockComponent;
}());

//# sourceMappingURL=event-block.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/community-helpers/facility-block.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/shared/community-helpers/facility-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacilityBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FacilityBlockComponent = (function () {
    function FacilityBlockComponent() {
        this.Name = "";
    }
    Object.defineProperty(FacilityBlockComponent.prototype, "config", {
        set: function (config) {
            if (config) {
                this.Name = config;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FacilityBlockComponent.prototype, "config", null);
    FacilityBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'facility-block',
            template: __webpack_require__("../../../../../src/app/shared/community-helpers/facility-block.component.html")
        })
    ], FacilityBlockComponent);
    return FacilityBlockComponent;
}());

//# sourceMappingURL=facility-block.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/community-helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_block_component__ = __webpack_require__("../../../../../src/app/shared/community-helpers/event-block.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__event_block_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facility_block_component__ = __webpack_require__("../../../../../src/app/shared/community-helpers/facility-block.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__facility_block_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__community_helpers__ = __webpack_require__("../../../../../src/app/shared/community-helpers/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout__ = __webpack_require__("../../../../../src/app/shared/layout/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__layout__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__layout__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_errors_component__ = __webpack_require__("../../../../../src/app/shared/list-errors.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__services__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__services__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__services__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__services__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__services__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__shared_module__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/footer.component.html":
/***/ (function(module, exports) {

module.exports = "    <footer>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"col-sm-3 col-md-3\">\n                        <a href=\"#\"><img src=\"images/logo-footer.png\" class=\"footer\" alt=\"\"></a>\n                    </div>\n                    <div class=\"col-sm-9\">\n                        <ul class=\"firstwp\">\n                            <li><a routerLink=\"/homes-for-sale\">{{counts?.home_count}} homes for sale across Australia</a></li>\n                            <li><a routerLink=\"/communities\">{{counts?.community_count}} communities across Australia</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n                    <div class=\"col-sm-12\">\n                         <div class=\"divider\"></div>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-12\">\n                    <div class=\"col-sm-3 hidden-xs\">\n                        <a href=\"https://www.youtube.com/channel/UCjGfwIYWUHULZwRtgAMOaVg/videos?sort=p&view=0&flow=grid\" target=\"_blank\"><img src=\"images/youtube.png\" class=\"footer-icon \" alt=\"\"></a>\n                        <a href=\"https://www.facebook.com/gatewaylifestyle\" target=\"_blank\"><img src=\"images/fb-footer.png\" class=\"footer-icon \" alt=\"\"></a>\n                    </div>\n                    <div class=\"col-sm-9\">\n                        <ul>\n                            <li><a routerLink=\"/how-it-works\">How it works</a></li>\n                            <li><a routerLink=\"/about\">About Gateway</a></li>\n                            <li><a href=\"https://live.gatewaylifestyle.com.au/\" target=\"_blank\">Blog</a></li>\n                            <li><a routerLink=\"/privacy\">Privacy</a></li>\n                            <li><a routerLink=\"/legal\">Terms & Conditions</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"col-sm-3 des-hide\">\n                        <a href=\"#\"><img class=\"footer-icon\" src=\"images/youtube.png\" alt=\"\"></a>\n                        <a href=\"#\"><img class=\"footer-icon\" src=\"images/fb-footer.png\" alt=\"\"></a> \n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = (function () {
    function FooterComponent(apiService, route, router) {
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.today = Date.now();
        this.homesLength = 0;
        this.getCommunities();
        //this.getHomeForSales();
    }
    FooterComponent.prototype.ngAfterViewInit = function () {
        $.getScript('js/custom.js');
        $.getScript("js/wow.min.js");
        // $.getScript("js/modal-video.js"),
        $.getScript("js/jquery-modal-video.js");
        $.getScript("js/owl.carousel.js");
        $.getScript('js/sticky-nav.js');
    };
    FooterComponent.prototype.goToFb = function () {
        var url = '';
        /* if (!/^http[s]?:\/\//.test(this.comunityDetail.facebook_links[0].link)) {
             url += 'http://';
         }
 
         url += this.comunityDetail.facebook_links[0].link;*/
        window.open("https://www.facebook.com", "_blank");
    };
    FooterComponent.prototype.getCommunities = function () {
        var _this = this;
        //fetching the list of all communities
        this.apiService.get('/communities/count_for_home_and_community').subscribe(function (res) {
            _this.counts = res;
            console.log(_this.counts);
        }, function (err) {
            console.log(err);
        });
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'layout-footer',
            template: __webpack_require__("../../../../../src/app/shared/layout/footer.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], FooterComponent);
    return FooterComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/header.component.html":
/***/ (function(module, exports) {

module.exports = "    <!--  Fixed Mega menu -->\n    <header class=\"nav-v2\" >\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-2 col-sm-12 col-sm-12 col-xs-12 logo-outer\">\n                    <div class=\"community-nav-name\" *ngIf=\"communityTitle && communityTitle?.first_name != 'logo'\">\n                        <ul>\n                            <li class=\"brand\"><a routerLink=\"/\" [ngStyle]=\"{'color': communityTitle?.primary_color}\">{{communityTitle?.first_name}}</a></li>\n                            <li><a routerLink=\"/\" [ngStyle]=\"{'color': '#62717f'}\">{{communityTitle?.last_name}}</a></li>\n                        </ul>\n                    </div>\n\n                    \n                    <div class=\"logo logo-res\" *ngIf=\"!communityTitle || communityTitle?.first_name == 'logo'\">\n                        <a routerLink=\"/\"><img width=\"131\" src=\"images/logo.svg\" alt=\"\"/></a>\n                    </div>\n                </div>\n\n                <div class=\"col-md-10 col-sm-12 col-sm-12 col-xs-12\">\n                    <nav class=\"navbar\">\n                        <div class=\"navbar-header\">\n                            <button type=\"button\" class=\"navbar-toggle\" id=\"resbtn-show\">\n                                <span class=\"sr-only\">Toggle navigation</span>\n                                <span class=\"icon-bar\"></span>\n                                <span class=\"icon-bar\"></span>\n                                <span class=\"icon-bar\"></span>\n                            </button>\n                            <!--a class=\"navbar-brand logo-res\" href=\"index.html\"><img src=\"images/logo.png\" alt=\"\"></a-->\n                        </div>\n                        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n                            <ul class=\"nav navbar-nav navbar-right\">\n                                <li class=\"bold-menu\"><a routerLink=\"/homes-for-sale\">Homes for sale</a></li>\n                                <li class=\"bold-menu\"><a routerLink=\"/communities\">Communities</a></li>\n                                <li class=\"bold-menu\"><a routerLink=\"/how-it-works\">How it works</a></li>\n                                <li class=\"bold-menu\"><a routerLink=\"/about\">About us</a></li>\n                                <li  class=\"menu2\" id=\"top-menu\"><a routerLink=\"/enquire-now\">Contact</a></li>\n                                <li  class=\"menu2\" id=\"top-menu1\"><a href=\"http://investor.gatewaylifestyle.com.au/Investor-Centre/\" target=\"_blank\">Investors</a></li>\n                                <li  class=\"menu2\"><a href=\"http://glhp.com.au/\" target=\"_blank\">Holiday parks</a></li>\n                                <li class=\"dropdown mega-dropdown\">\n                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">More <i class=\"fa fa-chevron-down\"></i></a>\n                                    <div class=\"dropdown-menu mega-dropdown-menu\">\n                                        <div class=\"container width970\">\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-4\">\n                                                    <a routerLink=\"/home-designs\" class=\"img-box-hover\">\n                                                        <div class=\"img-box\">\n                                                            <img src=\"images/menu-img5.png\" alt=\"\" >\n                                                            <h2>Explore our designs</h2>\n                                                        </div>\n                                                    </a>\n                                                    <a routerLink=\"/faqs\" class=\"img-box-hover\">    \n                                                        <div class=\"img-box\">\n                                                            <img src=\"images/menu-img6.png\" alt=\"\">\n                                                            <h2>Frequently Asked Questions</h2>\n                                                        </div>\n                                                    </a>\n                                                </div>\n                                                <div class=\"col-sm-4\">\n                                                    <h3 class=\"menuheading3\">Living at Gateway</h3>\n                                                    <ul>\n                                                        <li><a routerLink=\"/pre-loved\">Pre-loved homes</a></li>\n                                                        <li><a routerLink=\"/team\">Our team</a></li>\n                                                        <li><a routerLink=\"/careers\">Careers</a></li>\n                                                        <li><a routerLink=\"/events\">Open days</a></li>\n                                                        <li><a routerLink=\"/resident-stories\">Resident stories</a></li>\n                                                        <li><a routerLink=\"/buying-process\">Buying Process</a></li>\n                                                        <li class=\"blog-link\"><a href=\"http://live.gatewaylifestyle.com.au/\" target=\"_blank\">Latest news</a></li>\n                                                    </ul>\n                                                </div>\n                                                <div class=\"col-sm-4 in\">\n                                                    <h3 class=\"menuheading3 last-title\">Get more info</h3>\n                                                    <p>Discover a rich, fulfilling over 50s lifestyle in our communities across NSW, QLD and VIC with hundreds of new and pre loved homes.</p>\n                                                    <a data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal-header\"><button class=\"btn\" id=\"getin\">GET AN INFO PACK</button></a>\n                                                    <div class=\"bot-ml\">\n                                                        <a href=\"mailto:sales@gty.com.au\"><i class=\"fa fa-envelope\"></i>sales@gty.com.au</a>\n                                                        <a href=\"tel:1300 361 311\"><i class=\"fa fa-phone\"></i> 1300 361 311</a>\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li class=\"last-child\"><a href=\"tel:1300  361 311\">1300  361 311</a></li>\n                                <div class=\"bottom-section-mb\">\n                                    <div class=\"bot-ml\">\n                                        <a href=\"mailto:sales@gty.com.au\"><i class=\"fa fa-envelope\"></i> sales@gty.com.au</a>\n                                        <a href=\"tel:1300 361 311\"><i class=\"fa fa-phone\"></i> 1300 361 311</a>\n                                    </div>\n                                     <a data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal-header\"><button class=\"btn\" id=\"getin2\">GET AN INFO PACK</button></a>\n                                </div>\n                            </ul>\n\n                        </div>\n                        <!--/.nav-collapse -->\n                    </nav>\n                    <div class=\"search-wp\">\n                        <i class=\"search-icon\" id=\"show-search-btn\"></i>\n                        <div class=\"searchform\" id=\"show-sw\">\n                            <form id=\"search\">\n                                <i class=\"search-icon ico2\"></i>\n                                <input #box1 type=\"text\" class=\"s\" id=\"s1\" placeholder=\"Start typing here...\"  (keyup.enter)=\"searchHeader(box1.value,$event)\">\n                                <a id=\"close\" class=\"close\"><i class=\"fa fa-times\"></i></a>\n                                <div class=\"search-container\">\n                                    <div class=\"col-sm-4\">\n                                        <h3 class=\"search-mhead\">New Homes For Sale   <a routerLink=\"/homes-for-sale\" (click)= \"closeSearch()\">More</a></h3>\n                                        <ul class=\"hm_search search-box\" id=\"hm\">\n                                        </ul>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <h3 class=\"search-mhead\">Communities   <a routerLink=\"/communities\" (click)= \"closeSearch()\">More</a></h3>\n                                        <ul class=\"com_search search-box\" id=\"com\">\n\n                                        </ul>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <h3 class=\"search-mhead\">Events   <a routerLink=\"/events\" (click)= \"closeSearch()\">More</a></h3>\n                                        <ul class=\"event-search\">\n                                        </ul>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n<!-- Get an info pack Modal -->\n  <div class=\"modal fade\" id=\"get-an-info-pack-modal-header\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body no-pad\">\n                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\" >&times;</button>\n                    <div class=\"col-sm-5 col-md-5 right-img-main no-pad hidden-xs hidden-sm\">\n                        <div class=\"right-img-full\">\n                            <div class=\"right-img-full\" style=\"background: url(images/generic-info.jpg) no-repeat center;\"></div>\n                            <!--  <img \n                             [src]=\"comunitylatestDetail.featured_image.url\" alt=\"\" style= \n                             \"height: -webkit-fill-available;\"> -->\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-7 getinfowp\">\n                   \n                        <div class=\"wp-main\">\n                         <h3 style=\"color: #105dac;\">\n                            <div class=\"title-img-round\">\n                                <img src=\"images/Gateway-icon-only-square.png\" alt=\"\" class=\"\">    \n                            </div>\n                            Get an info pack\n                         </h3>\n                         <div class=\"profile-row\">\n                            <!-- <div class=\"profile-img\"><img src=\"images/img11.png\" alt=\"\"></div> \n                            <p><strong> Melinda James</strong> | +61 421 223 221 | melinda.james@gty.com.au</p> -->\n                         </div>\n                         <div class=\"divider\"></div>\n<!--                         <div class=\"form-getinfo-succes\">\n                            <div class=\"row\">\n                            <div class=\"col-sm-2\"><img src=\"images/form-sucess.png\" alt=\"\"></div>    \n                            <div class=\"col-sm-10\"><p class=\"pera-textbig\"> Thank you for your enquiry. We've emailed you the info pack. You can view it by clicking the button below.</p>\n                            <button (click)=\"infoPdf(genericInfo.info_pack?.info_pdf.url)\" \n                             class=\"btn btn-org\">View the info pack Now</button></div>\n                            </div>\n                        </div> -->\n                         <div class=\"form-wp-getinfo\">\n                             <div class=\"row\">\n                                <!-- form starts here-->\n                                <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\" \n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\" maxlength=\"20\" \n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required> \n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>  \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\" \n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\" maxlength=\"20\" [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\" \n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\"  maxlength=\"9\" #plan=\"ngModel\">   \n                                        </div>\n                                    </div>  \n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\" \n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\" \n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>  \n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p> \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\" \n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div> \n                                    <div class=\"col-sm-12\">\n                                    <button  class=\"btn btn-org\"  id=\"send-sucess\"\n                                     (click)=\"getInfo(infoForm)\" style=\"background: #105dac; border-color:#105dac;\" \n                                    (mouseover)=\"changeColor($event)\" \n                                    (mouseout)=\"changeColor($event)\" type=\"submit\">Get an info pack</button>\n                                    </div>\n                                </form>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end  Get an info pack Modal -->\n    </header>\n    <!--  Fixed Mega menu end -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- nav -v4 -->\n\n\n<!--  Fixed Mega menu -->\n    <header class=\"nav-v4\" style=\"display: none\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-2 col-sm-12 col-sm-12 col-xs-12 logo-outer\">\n                    <div class=\"logo\">\n                        <a routerLink=\"/\"><img id=\"homelogoimg\" width=\"215\" src=\"images/gateway-homelogo.png\" alt=\"\"/></a>\n                    </div>\n                   \n                </div>\n                <div class=\"col-md-10 col-sm-12 col-sm-12 col-xs-12\">\n                    <nav class=\"navbar\">\n                        <div class=\"navbar-header\">\n                            <button type=\"button\" class=\"navbar-toggle\" id=\"resbtn-show_v4\">\n                                <span class=\"sr-only\">Toggle navigation</span>\n                                <span class=\"icon-bar\"></span>\n                                <span class=\"icon-bar\"></span>\n                                <span class=\"icon-bar\"></span>\n                            </button>\n                            \n                        </div>\n                        <div id=\"navbar_v4\" class=\"navbar-collapse collapse\">\n                            <div >\n                            <ul class=\"topmenu-v4\">\n                                <li><a routerLink=\"/faqs\">FAQs</a></li>\n                                <li><a routerLink=\"/events\">Open Days</a></li>\n                                <li><a href=\"http://investor.gatewaylifestyle.com.au/Investor-Centre/\">Investors</a></li>\n                                <li><a href=\"http://glhp.com.au/\">Holiday parks</a></li>\n                                <li><a routerLink=\"/enquire-now\">Contact us</a></li>                         \n                                <li class=\"get-an-info-btn\"><a data-toggle=\"modal\" id=\"getin_v4\" class=\"btn-blue\" data-target=\"#get-an-info-pack-modal-header_v4\">GET INFO PACK</a></li> \n\n                            </ul></div>\n                            <ul class=\"nav navbar-nav navbar-right\">\n                                <li class=\"bold-menu\"><a routerLink=\"/homes-for-sale\">Homes for sale</a></li>\n                                <li class=\"bold-menu\"><a routerLink=\"/communities\">Communities</a></li>\n                                <li class=\"bold-menu\"><a routerLink=\"/how-it-works\">How it works</a></li>\n                                <li class=\"bold-menu\"><a routerLink=\"/about\">About us</a></li>\n                                <li id=\"top-menu_v4\" class=\"desktop-none\"><a routerLink=\"/enquire-now\">Contact</a></li>\n                                <li id=\"top-menu1_v4\" class=\"desktop-none\"><a href=\"http://investor.gatewaylifestyle.com.au/Investor-Centre/\" target=\"blank\">Investors</a></li>\n                                <li class=\"desktop-none\"><a href=\"http://glhp.com.au/\">Holiday parks</a></li>\n                                <li class=\"dropdown mega-dropdown\">\n                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">More <i class=\"fa fa-chevron-down\"></i></a>\n                                    <div class=\"dropdown-menu mega-dropdown-menu\">\n                                        <div class=\"container width970\">\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-4\">\n                                                    <a routerLink=\"/home-designs\" class=\"img-box-hover\">\n                                                        <div class=\"img-box\">\n                                                            <img src=\"images/menu-img1.jpg\" alt=\"\">\n                                                            <h2>Explore our designs</h2>\n                                                        </div>\n                                                    </a>\n                                                    <a href=\"#\" class=\"img-box-hover\">    \n                                                        <div class=\"img-box\">\n                                                             <img src=\"images/menu-img6.png\" alt=\"\">\n                                                            <h2>Frequently asked questions</h2>\n                                                        </div>\n                                                    </a>\n                                                </div>\n                                                <div class=\"col-sm-4\">\n                                                    <h3 class=\"menuheading3\">Living at Gateway</h3>\n                                                    <ul>\n                                                        <li><a routerLink=\"/pre-loved\">Pre-loved homes</a></li>\n                                                        <li><a routerLink=\"/team\">Our team</a></li>\n                                                        <li><a routerLink=\"/careers\">Careers</a></li>\n                                                        <li><a routerLink=\"/events\">Open days</a></li>\n                                                        <li><a routerLink=\"/resident-stories\">Resident stories</a></li>\n                                                        <li><a routerLink=\"/buying-process\">Buying Process</a></li>\n                                                        <li class=\"blog-link\"><a href=\"http://live.gatewaylifestyle.com.au/\" target=\"_blank\">Latest news</a></li>\n                                                    </ul>\n                                                </div>\n                                                <div class=\"col-sm-4 in\">\n                                                    <h3 class=\"menuheading3 last-title\">Get more info</h3>\n                                                    <p>Discover a rich, fulfilling over 50s lifestyle in our communities across NSW, QLD adn VIC with hundreds of new and pre loved homes.</p>\n                                                <a data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal-header_v4\"><button class=\"btn\" id=\"getin2_v4\">GET AN INFO PACK</button></a>\n                                                    <div class=\"bot-ml\">\n                                                        <a href=\"mailto:sales@gty.com.au\"><i class=\"fa fa-envelope\"></i> sales@gty.com.au</a>\n                                                        <a href=\"tel:1300 361 311\"><i class=\"fa fa-phone\"></i> 1300 361 311</a>\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li class=\"last-child bold-menu\"><a href=\"tel:1300  361 311\">1300  361 311</a></li>\n                                <div class=\"bottom-section-mb\">\n                                    <div class=\"bot-ml\">\n                                        <a href=\"mailto:sales@gty.com.au\"><i class=\"fa fa-envelope\"></i> sales@gty.com.au</a>\n                                        <a href=\"tel:1300 361 311\"><i class=\"fa fa-phone\"></i> 1300 361 311</a>\n                                    </div>\n                                     <a data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal-header_v4\"><button class=\"btn\" id=\"getin2_v4\">GET AN INFO PACK</button></a>\n                                </div>\n                            </ul>\n\n                        </div>\n                        <!--/.nav-collapse -->\n                    </nav>\n                    <div class=\"search-wp\">\n                        <i class=\"search-icon\" id=\"show-search-btn_v4\"></i>\n                        <div class=\"searchform\" id=\"show-sw_v4\">\n                            <form id=\"search\">\n                                <i class=\"search-icon ico2\"></i>\n                                <input #box2 type=\"text\" class=\"s\" id=\"s2\" placeholder=\"Start typing here...\" (keyup.enter)=\"searchHeader(box2.value,$event)\">\n                                <a id=\"close\" class=\"close\"><i class=\"fa fa-times\"></i></a>\n                                <div class=\"search-container\">\n                                    <div class=\"col-sm-4\">\n                                        <h3 class=\"search-mhead\">New Homes For Sale   <a routerLink=\"/homes-for-sale\" (click)= \"closeSearch()\">More</a></h3>\n                                        <ul class=\"hm_search search-box\" id=\"hm\">\n                                        </ul>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <h3 class=\"search-mhead\">Communities   <a outerLink=\"/communities\" (click)= \"closeSearch()\">More</a></h3>\n                                        <ul class=\"com_search search-box\" id=\"com\">\n                                            <!-- <li><span class=\"community\"><img src=\"images/search5.png\" alt=\"\"> </span>Aspley by Gateway Lifestyle</li> -->\n\n                                        </ul>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <h3 class=\"search-mhead\">Events   <a routerLink=\"/events\" (click)= \"closeSearch()\">More</a></h3>\n                                        <ul class=\"event-search\">\n                                           \n                                        </ul>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Get an info pack Modal -->\n  <div class=\"modal fade\" id=\"get-an-info-pack-modal-header_v4\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body no-pad\">\n                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\" >&times;</button>\n                    <div class=\"col-sm-5 col-md-5 right-img-main no-pad hidden-xs hidden-sm\">\n                        <div class=\"right-img-full\">\n                            <div class=\"right-img-full\" style=\"background: url(images/generic-info.jpg) no-repeat center;\"></div>\n                            <!--  <img \n                             [src]=\"comunitylatestDetail.featured_image.url\" alt=\"\" style= \n                             \"height: -webkit-fill-available;\"> -->\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-7 getinfowp\">\n                   \n                        <div class=\"wp-main\">\n                         <h3 style=\"color: #105dac;\">\n                            <div class=\"title-img-round\">\n                                <img src=\"images/Gateway-icon-only-square.png\" alt=\"\" class=\"\">    \n                            </div>\n                            Get an info pack\n                         </h3>\n                         <div class=\"profile-row\">\n                            <!-- <div class=\"profile-img\"><img src=\"images/img11.png\" alt=\"\"></div> \n                            <p><strong> Melinda James</strong> | +61 421 223 221 | melinda.james@gty.com.au</p> -->\n                         </div>\n                         <div class=\"divider\"></div>\n<!--                         <div class=\"form-getinfo-succes\">\n                            <div class=\"row\">\n                            <div class=\"col-sm-2\"><img src=\"images/form-sucess.png\" alt=\"\"></div>    \n                            <div class=\"col-sm-10\"><p class=\"pera-textbig\"> Thank you for your enquiry. We've emailed you the info pack. You can view it by clicking the button below.</p>\n                            <button (click)=\"infoPdf(genericInfo.info_pack?.info_pdf.url)\" \n                             class=\"btn btn-org\">View the info pack Now</button></div>\n                            </div>\n                        </div> -->\n                         <div class=\"form-wp-getinfo\">\n                             <div class=\"row\">\n                                <!-- form starts here-->\n                                <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\" \n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\" maxlength=\"20\" \n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required> \n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>  \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\" \n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\" maxlength=\"20\" [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\" \n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\"  maxlength=\"9\" #plan=\"ngModel\">   \n                                        </div>\n                                    </div>  \n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\" \n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\" \n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>  \n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p> \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\" \n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div> \n                                    <div class=\"col-sm-12\">\n                                    <button  class=\"btn btn-org\"  id=\"send-sucess_v4\"\n                                     (click)=\"getInfo(infoForm)\" style=\"background: #105dac; border-color:#105dac;\" \n                                    (mouseover)=\"changeColor($event)\" \n                                    (mouseout)=\"changeColor($event)\" type=\"submit\">Get an info pack</button>\n                                    </div>\n                                </form>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    </header>\n    <!--  Fixed Mega menu end -->"

/***/ }),

/***/ "../../../../../src/app/shared/layout/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = (function () {
    function HeaderComponent(
        //public nav: NavbarService,
        router, apiService, segment, sharedService, location) {
        this.router = router;
        this.apiService = apiService;
        this.segment = segment;
        this.sharedService = sharedService;
        this.location = location;
        this.homeForSales = [];
        this.communities = [];
        this.events = [];
        this.info = { firstname: '', lastname: '', phone: '', email: '' };
        this.submitted = false;
        this.href = "";
        this.hideElement = false;
        this.getGenericInfopack();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.nav.show();
        this.sharedService.caseNumber$.subscribe(function (data) {
            _this.communityTitle = data;
            var generic_data = JSON.parse(window.localStorage.getItem('generic_data'));
            console.log(_this.communityTitle, "communityTitle");
        });
        this.sharedService.pageInfo$.subscribe(function (data) {
            console.log("page info here" + data);
            _this.route = data;
        });
    };
    HeaderComponent.prototype.searchHeader = function (value, event) {
        var _this = this;
        event.preventDefault();
        $(".hm_search").empty();
        $(".event-search").empty();
        $(".com_search").empty();
        //show loading inside the fields until we get api response
        $('<li>Loading...</li>').appendTo(".hm_search");
        $('<li>Loading...</li>').appendTo(".event-search");
        $('<li>Loading...</li>').appendTo(".com_search");
        var data = { "search": value };
        this.apiService.post("/communities/universal_search", data).subscribe(function (res) {
            //hide loading inside the fields
            $(".hm_search").empty();
            $(".event-search").empty();
            $(".com_search").empty();
            console.log(res);
            _this.communities = res.community;
            _this.events = res.events;
            _this.homeForSales = res.home_for_sales;
            //append html inside the respective fileds
            _this.searchEvents();
            _this.searchCommunity();
            _this.searchHomes();
        });
    };
    HeaderComponent.prototype.searchCommunity = function () {
        if (!this.communities.length) {
            $('<li>No result found</li>').appendTo(".com_search");
        }
        else {
            for (var i = 0; i < this.communities.length; i++) {
                if (i === 3) {
                    break;
                }
                $('<a href= "/community/' + this.communities[i].slug + '">' + '<li>' + '<span>' + '<img src="' + this.communities[i].community_icon.url + '" alt="">' + '</span>' + this.communities[i].first_name + ' ' + this.communities[i].last_name + '</li>' + '</a>').appendTo(".com_search");
            }
        }
    };
    HeaderComponent.prototype.searchEvents = function () {
        if (!this.events.length) {
            $('<li>No result found</li>').appendTo(".event-search");
        }
        else {
            for (var i = 0; i < this.events.length; i++) {
                if (i === 3) {
                    break;
                }
                //this.eventsToAdd = '<a href= "/events/'+this.events[i].id+'">'+'<li>'+'<div class="event-search-box">'+'<span>'+this.events[i].start_date+'</span>'+'<span>'+this.events[i].start_month+'</span>'+'</div>'+'<p><strong>'+this.events[i].name+'</strong></p>'+'<p>'+ this.events[i].venue+'</p>'+'</li>'+'</a>';
                $('<a href= "/events/' + this.events[i].id + '">' + '<li>' + '<div class="event-search-box">' + '<span>' + this.events[i].start_date + '</span>' + '<span>' + this.events[i].start_month + '</span>' + '</div>' + '<p><strong>' + this.events[i].name + '</strong></p>' + '<p>' + this.events[i].venue + '</p>' + '</li>' + '</a>').appendTo(".event-search");
            }
        }
    };
    HeaderComponent.prototype.searchHomes = function () {
        if (!this.homeForSales.length) {
            $('<li>No result found</li>').appendTo(".hm_search");
        }
        else {
            for (var i = 0; i < this.homeForSales.length; i++) {
                if (i === 3) {
                    break;
                }
                if (this.homeForSales[i].images == null) {
                    this.homeForSales[i].images = [];
                }
                $('<a href= "/homes-for-sale/' + this.homeForSales[i].id + '">' + '<li>' + '<span>' + '<img src="' + this.homeForSales[i].images[0] + '" alt="">' + '</span>' + this.homeForSales[i].address + ' ' + this.homeForSales[i].address1 + '</li>' + '</a>').appendTo(".hm_search");
            }
        }
    };
    HeaderComponent.prototype.getGenericInfopack = function () {
        var _this = this;
        this.apiService.get('/pdf_info_packs/featured_pack').subscribe(function (res) {
            _this.genericInfo = res;
            window.localStorage.setItem('generic_url', _this.genericInfo.info_pack.info_pdf.url);
        });
    };
    HeaderComponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : '#105dac';
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#ffffff';
    };
    HeaderComponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#414952';
    };
    HeaderComponent.prototype.getInfo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var userData = {};
            userData.firstname = this.info.firstname;
            userData.lastname = this.info.lastname;
            userData.plan = this.info.plan;
            userData.phone = this.info.phone;
            userData.email = this.info.email;
            userData.description = this.info.area;
            window.localStorage.setItem('generic_data', JSON.stringify(userData));
            console.log('success!');
            this.segment.track('GetInfoPack', {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area
            }).then(function () {
                window.localStorage.setItem('genericCheck', '1');
                _this.router.navigateByUrl('/success');
                $('#get-an-info-pack-modal-header')[0].style.display = 'none';
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                console.log("Event sended");
            });
        }
        else {
            console.log('validation failed!');
        }
    };
    /*  closeMenu(){
       $("#navbar").slideToggle();
       $("#resbtn-show").toggleClass('open-men');
      }*/
    HeaderComponent.prototype.closeSearch = function () {
        $("#show-sw").removeClass("open");
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'layout-header',
            template: __webpack_require__("../../../../../src/app/shared/layout/header.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services__["e" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["e" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _e || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component__ = __webpack_require__("../../../../../src/app/shared/layout/footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_component__ = __webpack_require__("../../../../../src/app/shared/layout/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__header_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/list-errors.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"error-messages\" *ngIf=\"errorList\">\n  <li *ngFor=\"let error of errorList\">\n    {{ error }}\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/shared/list-errors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListErrorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListErrorsComponent = (function () {
    function ListErrorsComponent() {
        this.formattedErrors = [];
    }
    Object.defineProperty(ListErrorsComponent.prototype, "errors", {
        set: function (errorList) {
            this.formattedErrors = [];
            if (errorList.errors) {
                for (var field in errorList.errors) {
                    this.formattedErrors.push(field + " " + errorList.errors[field]);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ListErrorsComponent.prototype, "errorList", {
        get: function () { return this.formattedErrors; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models__["a" /* Errors */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models__["a" /* Errors */]) === "function" && _a || Object),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__models__["a" /* Errors */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models__["a" /* Errors */]) === "function" && _b || Object])
    ], ListErrorsComponent.prototype, "errors", null);
    ListErrorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'list-errors',
            template: __webpack_require__("../../../../../src/app/shared/list-errors.component.html")
        })
    ], ListErrorsComponent);
    return ListErrorsComponent;
    var _a, _b;
}());

//# sourceMappingURL=list-errors.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/community.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Community */
var Community = (function () {
    function Community() {
    }
    return Community;
}());

//# sourceMappingURL=community.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/errors.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Errors; });
var Errors = (function () {
    function Errors() {
        this.errors = {};
    }
    return Errors;
}());

//# sourceMappingURL=errors.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/event.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Event */
var Event = (function () {
    function Event() {
    }
    return Event;
}());

//# sourceMappingURL=event.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/home.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Home */
var Home = (function () {
    function Home() {
    }
    return Home;
}());

//# sourceMappingURL=home.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors_model__ = __webpack_require__("../../../../../src/app/shared/models/errors.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__errors_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__community_model__ = __webpack_require__("../../../../../src/app/shared/models/community.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_model__ = __webpack_require__("../../../../../src/app/shared/models/home.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_model__ = __webpack_require__("../../../../../src/app/shared/models/event.model.ts");
/* unused harmony namespace reexport */

;



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { JwtService } from './jwt.service';
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.communityData = [];
        this.communityslugs = [];
        this.homeData = [];
        this.homeIds = [];
        this.eventData = [];
        this.eventIds = [];
    }
    ApiService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */](headersConfig);
    };
    ApiService.prototype.formatErrors = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json());
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */](); }
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiBase + path, { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiBase + path, JSON.stringify(body), { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiBase + path, JSON.stringify(body), { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiBase + path, { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getCommunitiesList = function (path, params) {
        var _this = this;
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */](); }
        if (this.communitiesList) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].of(this.communitiesList);
        }
        else {
            return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiBase + path, { headers: this.setHeaders() })
                .catch(this.formatErrors)
                .map(function (res) { return res.json(); })
                .do(function (data) { _this.communitiesList = data; });
        }
    };
    ApiService.prototype.getCommunitiesDetail = function (path, body) {
        var _this = this;
        if (body === void 0) { body = {}; }
        if (this.communityslugs.indexOf(body.community.short_name) != -1) {
            for (var i = 0; i < this.communityData.length; i++) {
                if (this.communityData[i][0].community.slug == body.community.short_name) {
                    return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].of(this.communityData[i][0]);
                }
            }
        }
        else {
            return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiBase + path, JSON.stringify(body), { headers: this.setHeaders() })
                .catch(this.formatErrors)
                .map(function (res) { return res.json(); })
                .do(function (data) {
                _this.communityData.push([data]);
                if (_this.communityslugs.indexOf(data.community.slug) == -1) {
                    _this.communityslugs.push(data.community.slug);
                }
            });
        }
    };
    ApiService.prototype.getHomesList = function (path, params) {
        var _this = this;
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */](); }
        if (this.homes) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].of(this.homes);
        }
        else {
            return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiBase + path, { headers: this.setHeaders() })
                .catch(this.formatErrors)
                .map(function (res) { return res.json(); })
                .do(function (data) { _this.homes = data; });
        }
    };
    ApiService.prototype.getHomeDetail = function (path, params) {
        var _this = this;
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */](); }
        var ind = parseInt(path.substring(path.lastIndexOf('/') + 1));
        if (this.homeIds.indexOf(ind) != -1) {
            for (var i = 0; i < this.homeData.length; i++) {
                if (this.homeData[i][0].home_for_sale.id == ind) {
                    return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].of(this.homeData[i][0]);
                }
            }
        }
        else {
            return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiBase + path, { headers: this.setHeaders() })
                .catch(this.formatErrors)
                .map(function (res) { return res.json(); })
                .do(function (data) {
                _this.homeData.push([data]);
                if (_this.homeIds.indexOf(data.home_for_sale.id) == -1) {
                    _this.homeIds.push(data.home_for_sale.id);
                }
            });
        }
    };
    ApiService.prototype.getEventsList = function (path, params) {
        var _this = this;
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */](); }
        if (this.events) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].of(this.events);
        }
        else {
            return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiBase + path, { headers: this.setHeaders() })
                .catch(this.formatErrors)
                .map(function (res) { return res.json(); })
                .do(function (data) { _this.events = data; });
        }
    };
    ApiService.prototype.getEventDetail = function (path, params) {
        var _this = this;
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */](); }
        var ind = parseInt(path.substring(path.lastIndexOf('/') + 1));
        if (this.eventIds.indexOf(ind) != -1) {
            for (var i = 0; i < this.eventData.length; i++) {
                if (this.eventData[i][0].id == ind) {
                    return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].of(this.eventData[i][0]);
                }
            }
        }
        else {
            return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiBase + path, { headers: this.setHeaders() })
                .catch(this.formatErrors)
                .map(function (res) { return res.json(); })
                .do(function (data) {
                _this.eventData.push([data]);
                if (_this.eventIds.indexOf(data.id) == -1) {
                    _this.eventIds.push(data.id);
                }
            });
        }
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ApiService);
    return ApiService;
    var _a;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/community.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunitiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommunitiesService = (function () {
    function CommunitiesService(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.communities = [];
    }
    CommunitiesService.prototype.get = function (slug) {
        var _this = this;
        var data = { "community": { "short_name": slug } };
        return this.apiService.getCommunitiesDetail('/communities/find_community', data).map(function (res) {
            if (res.status == "SUCCESS") {
                return slug;
            }
            else {
                _this.router.navigateByUrl('/pagenotfound');
            }
        });
    };
    CommunitiesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], CommunitiesService);
    return CommunitiesService;
    var _a, _b;
}());

//# sourceMappingURL=community.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventService = (function () {
    function EventService(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.events = [];
    }
    EventService.prototype.get = function (slug) {
        var _this = this;
        return this.apiService.getEventDetail('/events/' + slug).map(function (res) {
            if (res.status == "SUCCESS") {
                return slug;
            }
            else {
                _this.router.navigateByUrl('/pagenotfound');
            }
        });
        /*if(this.events.indexOf(slug)==-1){
          //do nothing
        }else {
         return slug;
        }*/
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], EventService);
    return EventService;
    var _a, _b;
}());

//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomesService = (function () {
    function HomesService(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.home = [];
    }
    HomesService.prototype.get = function (slug) {
        var _this = this;
        return this.apiService.getHomeDetail('/home_for_sales/' + slug).map(function (res) {
            if (res.status == "SUCCESS") {
                return slug;
            }
            else {
                _this.router.navigateByUrl('/pagenotfound');
            }
        });
    };
    HomesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], HomesService);
    return HomesService;
    var _a, _b;
}());

//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__community_service__ = __webpack_require__("../../../../../src/app/shared/services/community.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__community_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_service__ = __webpack_require__("../../../../../src/app/shared/services/home.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__home_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_service__ = __webpack_require__("../../../../../src/app/shared/services/event.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__event_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sharedata_service__ = __webpack_require__("../../../../../src/app/shared/services/sharedata.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__sharedata_service__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/sharedata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedService = (function () {
    function SharedService() {
        this.caseNumber = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.pageInfo = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.caseNumber$ = this.caseNumber.asObservable();
        this.pageInfo$ = this.pageInfo.asObservable();
    }
    SharedService.prototype.publishData = function (data) {
        this.caseNumber.next(data);
    };
    SharedService.prototype.publishPage = function (data) {
        this.pageInfo.next(data);
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SharedService);
    return SharedService;
}());

//# sourceMappingURL=sharedata.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__community_helpers__ = __webpack_require__("../../../../../src/app/shared/community-helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_errors_component__ = __webpack_require__("../../../../../src/app/shared/list-errors.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__community_helpers__["b" /* FacilityBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_5__community_helpers__["a" /* EventBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_6__list_errors_component__["a" /* ListErrorsComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__community_helpers__["b" /* FacilityBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_5__community_helpers__["a" /* EventBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__list_errors_component__["a" /* ListErrorsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/testimonial/testimonial.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <section class=\"hfsl-banner resident-stories\">\n        <div class=\"overlay\"></div>     \n        <div class=\"context\">\n            <div class=\"container\">\n                 <h2>Resident stories</h2>\n                 <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. </p>\n                 <a href=\"javascript:void(0)\" class=\"js-modal-btn\" data-video-id=\"eXY2Mda-Hlw\">Watch the video</a>\n            </div>\n        </div>\n    </section> -->\n\n\n<section class=\"hfsl-banner resident-stories\" [ngStyle]=\"{'background': 'url(' + VImg + ')','background-repeat': 'no-repeat','background-position': 'center'}\">\n        <div class=\"overlay\"></div>     \n        <div class=\"context\">\n            <div class=\"container\">\n                 <h2>{{discover1.heroheading}}</h2>\n                 <p>{{discover1.heroText}}</p>\n                 <a href=\"javascript:void(0)\" class=\"js-modal-btn\" [attr.data-video-id]=\"discover1.video1\">Watch the video</a>\n            </div>\n        </div>\n</section>\n\n\n   <!-- Header width bg - fixed version  end -->\n    \n    \n    <section class=\"single-testimonial\">\n        <div class=\"container\">\n            <div class=\"testimonial-text\">{{heading1.testimonialEntry}}</div>\n            <div class=\"testimonial-name\">{{heading1.personsName}} </div>\n            <span>{{heading1.communityName}}</span>\n        </div>\n    </section>\n    \n    \n    <section class=\"testimonial-video\">\n        <div class=\"container\">\n            <ul>\n                <li>\n                    <div class=\"single-video\">\n                        <a href=\"javascript:void(0)\" class=\"js-modal-btn\" [attr.data-video-id]=\"discover.smallVideoBlock1YoutubeLinkId\">\n                            <img src=\"{{Bigvideo1Img}}\" alt=\"\">\n                            <div class=\"video-text\">{{video_text.xTestimonialEntry1}}</div>\n                            <div class=\"auth-name\">{{video_text.xPersonsName1}}</div>\n                            <span>{{video_text.xCommunityName1}}</span>\n                        </a>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"single-video\">\n                        <a href=\"javascript:void(0)\" class=\"js-modal-btn\" [attr.data-video-id]=\"discover.smallVideoBlock2YoutubeLinkId\">\n                            <img src=\"{{Bigvideo2Img}}\" alt=\"\" >\n                            <div class=\"video-text\">{{video_text.xTestimonialEntry2}}</div>\n                            <div class=\"auth-name\">{{video_text.xPersonsName2}}</div>\n                            <span>{{video_text.xCommunityName2}}</span>\n                        </a>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"single-video\">\n                        <a href=\"javascript:void(0)\" class=\"js-modal-btn\" [attr.data-video-id]=\"discover.largeVideoBlock1YoutubeLinkId\">\n                            <img src=\"{{Smallvideo1Img}}\" alt=\"\" >\n                            <div class=\"video-text\">{{video_text.xTestimonialEntry3}}</div>\n                            <div class=\"auth-name\">{{video_text.xPersonsName3}}</div>\n                            <span>{{video_text.xCommunityName3}}</span>\n                        </a>\n                    </div>\n                </li>\n                <li class=\"hide\">\n                    <div class=\"single-video\">\n                        <a href=\"javascript:void(0)\" class=\"js-modal-btn\" [attr.data-video-id]=\"discover.smallVideoBlock3YoutubeLinkId\">\n                            <img src=\"{{Smallvideo2Img}}\" alt=\"\" >\n                            <div class=\"video-text\">{{video_text.testimonialEntry4}}</div>\n                            <div class=\"auth-name\">{{video_text.personsName4}}</div>\n                            <span>{{video_text.communityName4}}</span>\n                        </a>\n                    </div>\n                </li>\n                <li class=\"hide\">\n                    <div class=\"single-video\">\n                        <a href=\"javascript:void(0)\" class=\"js-modal-btn\" [attr.data-video-id]=\"discover.smallVideoBlock4YoutubeLinkId\">\n                            <img src=\"{{Smallvideo3Img}}\" alt=\"\" >\n                            <div class=\"video-text\">{{video_text.testimonialEntry5}}</div>\n                            <div class=\"auth-name\">{{video_text.personsName5}}</div>\n                            <span>{{video_text.communityName5}}</span>\n                        </a>\n                    </div>\n                </li>\n                <li class=\"hide\">\n                    <div class=\"single-video\">\n                        <a href=\"javascript:void(0)\" class=\"js-modal-btn\" [attr.data-video-id]=\"discover.smallVideoBlock5YoutubeLinkId\">\n                            <img src=\"{{Smallvideo4Img}}\" alt=\"\" >\n                            <div class=\"video-text\">{{video_text.testimonialEntry6}}</div>\n                            <div class=\"auth-name\">{{video_text.personsName6}}</div>\n                            <span>{{video_text.communityName6}}</span>\n                        </a>\n                    </div>\n                </li>\n                <!--li class=\"hide\">\n                    <div class=\"single-video\">\n                        <a href=\"javascript:void(0)\" class=\"js-modal-btn\" data-video-id=\"ANWHG2rRmq0\">\n                            <img src=\"images/discover-img1.png\" alt=\"\" >\n                            <div class=\"video-text\">“ What I really like about living here is the friends that I’ve made... ”</div>\n                            <div class=\"auth-name\">Peter & Laura Thompson</div>\n                            <span>Yamba Waters</span>\n                        </a>\n                    </div>\n                </li>\n                <li class=\"hide\">\n                    <div class=\"single-video\">\n                        <a href=\"javascript:void(0)\" class=\"js-modal-btn\" data-video-id=\"Em2D4uZvifA\">\n                            <img src=\"images/discover-img1.png\" alt=\"\" >\n                            <div class=\"video-text\">“ What I really like about living here is the friends that I’ve made... ”</div>\n                            <div class=\"auth-name\">Peter & Laura Thompson</div>\n                            <span>Yamba Waters</span>\n                        </a>\n                    </div>\n                </li>\n                <li class=\"hide\">\n                    <div class=\"single-video\">\n                        <a href=\"javascript:void(0)\" class=\"js-modal-btn\" data-video-id=\"9J87tEN-s4w\">\n                            <img src=\"images/discover-img1.png\" alt=\"\" >\n                            <div class=\"video-text\">“ What I really like about living here is the friends that I’ve made... ”</div>\n                            <div class=\"auth-name\">Peter & Laura Thompson</div>\n                            <span>Yamba Waters</span>\n                        </a>\n                    </div>\n                </li>\n                <li class=\"hide\">\n                    <div class=\"single-video\">\n                        <a href=\"javascript:void(0)\" class=\"js-modal-btn\" data-video-id=\"eXY2Mda-Hlw\">\n                            <img src=\"images/discover-img1.png\" alt=\"\" >\n                            <div class=\"video-text\">“ What I really like about living here is the friends that I’ve made... ”</div>\n                            <div class=\"auth-name\">Peter & Laura Thompson</div>\n                            <span>Yamba Waters</span>\n                        </a>\n                    </div>\n                </li>\n                <li class=\"hide\">\n                    <div class=\"single-video\">\n                        <a href=\"javascript:void(0)\" class=\"js-modal-btn\" data-video-id=\"eXY2Mda-Hlw\">\n                            <img src=\"images/discover-img1.png\" alt=\"\" >\n                            <div class=\"video-text\">“ What I really like about living here is the friends that I’ve made... ”</div>\n                            <div class=\"auth-name\">Peter & Laura Thompson</div>\n                            <span>Yamba Waters</span>\n                        </a>\n                    </div>\n                </li -->\n                \n            </ul>\n            <div class=\"bottom-btn\">\n                <a class=\"view-all-video\" href=\"javascript:void(0);\">View all videos</a>\n            </div>\n        </div>\n    </section>\n    \n    \n    \n    <section class=\"single-testimonial\">\n        <div class=\"container\">\n            <div class=\"testimonial-text\">{{heading2.testimonialEntry}}</div>\n            <div class=\"testimonial-name\">{{heading2.personsName}}</div>\n            <span>{{heading1.communityName}}</span>\n        </div>\n    </section>\n    \n    \n    \n    <!--testimonial section start - fixed version -->\n    <section class=\"hometestimonial resident-stories\">\n        <div class=\"hometestimonial-left\">\n            <div class=\"testi-warp\">\n                <div class=\"owl-carousel owl-theme\">\n                    <div class=\"item active\">\n                        <div class=\"testimonial4_slide\">\n                            <div class=\"testimonial_text_inner\">\n                                <h4>{{blue_split.quote}}</h4>\n                                <p>{{blue_split.pareText1}}</p>\n                                <div class=\"testimonial-name\">{{blue_split.personsName1}}</div>\n                                <span>{{blue_split.communityName1}}</span>                               \n                            </div>\n                        </div>\n\n                        <div class=\"testimonial-right\" [ngStyle]=\"{'background-image': 'url(' + sliderImg1 + ')','background-repeat': 'no-repeat','background-position': 'center'}\"></div>\n\n                    </div>\n                    <div class=\"item active\">\n                        <div class=\"testimonial4_slide\">\n                            <div class=\"testimonial_text_inner\">\n                                <h4>{{blue_split.quote2}}</h4>\n                                <p>{{blue_split.pareText2}}</p>\n                                <div class=\"testimonial-name\">{{blue_split.personsName2}}</div>\n                                <span>{{blue_split.communityName2}}</span>\n                            </div>\n                        </div>\n                        <div class=\"testimonial-right\" [ngStyle]=\"{'background': 'url(' + sliderImg2 + ')','background-repeat': 'no-repeat','background-position': 'center'}\"></div>\n                     </div>\n                    <div class=\"item active\">\n                        <div class=\"testimonial4_slide\">\n                            <div class=\"testimonial_text_inner\">\n                                <h4>{{blue_split.quote3}}</h4>\n                                <p>{{blue_split.pareText3}}</p>\n                                <div class=\"testimonial-name\">{{blue_split.personsName3}}</div>\n                                <span>{{blue_split.communityName3}}</span>\n                            </div>\n                        </div>\n                        <div class=\"testimonial-right\" [ngStyle]=\"{'background': 'url(' + sliderImg3 + ')','background-repeat': 'no-repeat'}\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--testimonial section end - fixed version end -->\n    \n\n    \n    \n    <!-- featured homes Section - fixed version -->\n    <section class=\"sale-at-Aspley our-home-designe\" id=\"featured-home\">\n        <div class=\"container\">\n            <div class=\"card\">\n                <h2 class=\"heading\">Featured homes</h2>\n                <div class=\"heading-right-link\"><a routerLink=\"/homes-for-sale\">Discover all {{homeCount}} homes for sale</a></div>\n                <div class=\"divider\"></div>\n            </div>\n        </div>\n\n        <div class=\"tab-content\">\n            <!-- all homes tab -->\n            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"All-homes\">\n                <div class=\"lookingsomthing-warp home-carousel\">\n                    <div class=\"inner-box-warp\">\n\n                        <div class=\"center slider\">\n                            <!-- community card -->\n                            <div *ngFor=\"let home of featuredHomes;let jj = index\">\n                                <ul class=\"home-for-sale\">\n                                    <li class=\"detail-list\">\n                                            <div class=\"img-slider-warp mart-bot14\">\n                                                <div class=\"sl-box\">\n                                                    <span *ngIf=\"home.status=='sold'\" class=\"paid-btn\">sold</span>\n\n                                                    <span *ngIf=\"home.status=='under_offer'\" class=\"paid-btn\" style=\"background: #f89923;\">Under Offer</span>\n                                                    <div id=\"carousel{{jj}}\" class=\"carousel slide\" data-interval=\"false\">\n                                                        <div class=\"carousel-inner home-carousel\">                                                          \n                                                        <div class=\"item\" *ngFor=\"let _image of home.images;let ii = index\" [ngClass]=\"{active: ii===0}\">\n                                                              <img \n                                                              [src]=\"_image\" \n                                                              alt=\"\">\n                                                          </div>\n                                                        </div>\n                                                        <a class=\"left carousel-control\" href=\"#carousel{{jj}}\" data-slide=\"prev\">‹</a>\n                                                        <a class=\"right carousel-control\" href=\"#carousel{{jj}}\" data-slide=\"next\">›</a>\n                                                    </div>\n\n                                                </div>\n                                            </div>\n                                            <a href=\"homes-for-sale/{{home.id}}\">\n                                            <div class=\"pr-b\" *ngIf=\"home?.list_price\">${{home.list_price | number:'1.0'}}</div>\n                                            <p>{{home.address}} {{home.address1}}</p>\n                                            <h4 class=\"margt25\"><i class=\"sicon\" [ngStyle]=\"{'background-image': 'url(' + home?.community?.community_icon?.url + ')','background-repeat': 'no-repeat','background-position': 'center'}\"></i> Located in {{home.community.first_name}}</h4>\n                                            <div class=\"afs-wp\">\n                                                <ul>\n                                                    <li><i class=\"bed\"></i> {{home.no_of_bedrooms}}</li>\n                                                    <li><i class=\"tub\"></i> {{home.no_of_bathrooms}}</li>\n                                                    <li><i class=\"car\"></i> {{home.car_space}}</li>\n                                                </ul>\n                                                <div *ngIf=\"home?.record_type == 'Pre-loved'\" class=\"new-btn new-btn\" style=\"border: 1px solid #62717f; color: #62717f!important; \">Pre Loved</div>\n                                                <div *ngIf=\"home?.record_type == 'New'\" class=\"new-btn new-btn\">New</div>\n                                            </div>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- end of all homes tab -->\n        </div>\n\n\n    </section>\n    <!-- featured homes Section fixed version end -->\n\n    <!-- start CTA block -->\n    <section class=\"cta-block\">\n        <div class=\"container\">\n            <h2 class=\"whithead\">{{standardCtaInfoPackDescription}}</h2>\n            <div class=\"buttons\">\n                <a href='#' data-toggle=\"modal\" data-target=\"#get-an-info-pack-modal-static\" class=\"borbtn\">{{standardCtaInfoPackButtonText}}</a>\n            </div>\n            <p>{{standardCtaInfoPackAfterButtonText}}</p>\n        </div>\n    </section>\n    <!-- end CTA block -->\n        <!-- Get an info pack Modal -->\n  <div class=\"modal fade\" id=\"get-an-info-pack-modal-static\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body no-pad\">\n                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  (mouseover)=\"onHover($event)\" \n                                    (mouseout)=\"onHover($event)\" >&times;</button>\n                    <div class=\"col-sm-5 col-md-5 right-img-main no-pad hidden-xs hidden-sm\">\n                        <div class=\"right-img-full\">\n                            <div class=\"right-img-full\" style=\"background: url(images/generic-info.jpg) no-repeat center;\"></div>\n                            <!--  <img \n                             [src]=\"comunitylatestDetail.featured_image.url\" alt=\"\" style= \n                             \"height: -webkit-fill-available;\"> -->\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-7 getinfowp\">\n                   \n                        <div class=\"wp-main\">\n                         <h3 style=\"color: #105dac;\">\n                            <div class=\"title-img-round\">\n                                <img src=\"images/Gateway-icon-only-square.png\" alt=\"\" class=\"\">    \n                            </div>\n                            Get an info pack\n                         </h3>\n                         <!-- <div class=\"profile-row\">\n                            <div class=\"profile-img\"><img src=\"images/img11.png\" alt=\"\"></div> \n                            <p><strong> Melinda James</strong> | +61 421 223 221 | melinda.james@gty.com.au</p>\n                         </div> -->\n                         <div class=\"divider\"></div>\n<!--                         <div class=\"form-getinfo-succes\">\n                            <div class=\"row\">\n                            <div class=\"col-sm-2\"><img src=\"images/form-sucess.png\" alt=\"\"></div>    \n                            <div class=\"col-sm-10\"><p class=\"pera-textbig\"> Thank you for your enquiry. We've emailed you the info pack. You can view it by clicking the button below.</p>\n                            <button (click)=\"infoPdf(genericInfo.info_pack?.info_pdf.url)\" \n                             class=\"btn btn-org\">View the info pack Now</button></div>\n                            </div>\n                        </div> -->\n                         <div class=\"form-wp-getinfo\">\n                             <div class=\"row\">\n                                <!-- form starts here-->\n                                <form #infoForm=\"ngForm\" novalidate>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.firstname\" \n                                           class=\"form-control\" placeholder = \"First name*\" name=\"firstname\" type=\"text\" #firstname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': firstname.invalid && submitted == true }\" required> \n                                           <p class=\"requiedred\" [hidden]=\"firstname.valid || submitted == false\">\n                                            Please Enter First name\n                                            </p>  \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.lastname\" \n                                           class=\"form-control\" placeholder = \"Last name*\" name=\"lastname\" type=\"text\" #lastname=\"ngModel\" \n                                           [ngClass]=\"{'red-border-class': lastname.invalid && submitted == true }\" required>\n                                           <p class=\"requiedred\" [hidden]=\"lastname.valid || submitted == false\">\n                                            Please Enter Last name\n                                        </p>   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.plan\" \n                                           class=\"form-control\" placeholder =\"When are you planning on buying?\" name=\"plan\" type=\"text\" #plan=\"ngModel\">   \n                                        </div>\n                                    </div>  \n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.phone\" \n                                           class=\"form-control\" placeholder = \"Phone\" name=\"phone\" type=\"tel\" #phone=\"ngModel\">   \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                           <input [(ngModel)]=\"info.email\" \n                                           class=\"form-control\" placeholder = \"Email*\" name=\"email\" type=\"email\" #email=\"ngModel\" [ngClass]=\"{'red-border-class': email.invalid && submitted == true }\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>  \n                                           <p class=\"requiedred\" [hidden]=\"email.valid || submitted == false\">\n                                            Please Enter your email\n                                            </p> \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                           <textarea [(ngModel)]=\"info.area\" \n                                           class=\"form-control\" placeholder=\"Anything else you'd like to tell us?\" name=\"area\" type=\"text\" #area=\"ngModel\" rows=\"7\" ></textarea>\n                                        </div>\n                                    </div> \n                                    <div class=\"col-sm-12\">\n                                    <button  class=\"btn btn-org\"  id=\"send-sucess\"\n                                     (click)=\"getInfo(infoForm)\" style=\"background: #105dac; border-color:#105dac;\" \n                                    (mouseover)=\"changeColor($event)\" \n                                    (mouseout)=\"changeColor($event)\" type=\"submit\">Get an info pack</button>\n                                    </div>\n                                </form>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    <!--end  Get an info pack Modal --> "

/***/ }),

/***/ "../../../../../src/app/testimonial/testimonial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestimonialComponent = (function () {
    function TestimonialComponent(router, apiService, segment) {
        this.router = router;
        this.apiService = apiService;
        this.segment = segment;
        this.header = "";
        this.headerBelow = {};
        this.image1 = "";
        this.image2 = "";
        this.image3 = "";
        this.icon1 = "";
        this.icon2 = "";
        this.icon3 = "";
        this.icon4 = "";
        this.steps = "";
        this.HowIcon1 = "";
        this.HowIcon2 = "";
        this.HowIcon3 = "";
        this.HowIcon4 = "";
        this.backimage = "";
        this.testimonialsQuote = "";
        this.testimonialsQuote2 = "";
        this.testimonialsQuote3 = "";
        this.testimonialsQuoteDesc = "";
        this.testimonialsQuoteDesc2 = "";
        this.testimonialsQuoteDesc3 = "";
        this.testimonialsImage = "";
        this.testimonialsImage2 = "";
        this.testimonialsImage3 = "";
        this.discover = {};
        this.bodyClasses = "home";
        this.submitted = false;
        this.info = { firstname: '', lastname: '', phone: '', email: '' };
        this.tags = [];
        this.tagsLoaded = false;
        this.location = {};
        this.data = [];
    }
    TestimonialComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
        this.getGenericInfopack();
        this.apiService.get('/home_for_sales/featured_home').subscribe(function (res) {
            _this.featuredHomes = res.homes;
        }, function (err) {
            console.log(err);
        });
        //count of homes
        this.apiService.get('/communities/count_for_home_and_community').subscribe(function (res) {
            _this.homeCount = res.home_count;
            _this.comunitiesCount = res.community_count;
        }, function (err) {
            console.log(err);
        });
        this.apiService.get('/communities/featured_community').subscribe(function (res) {
            _this.featuredComunities = res.communities;
            $.getScript('js/customSlick.js');
        }, function (err) {
            console.log(err);
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/vszV3g9Ts4IGMAIMswQQS?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            data.fields.video1 = data.fields.youtubeUrl.replace("https://youtu.be/", "");
            that.discover1 = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.Fullwidthbackgroundimage.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.VImg = data.fields.file.url;
            });
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/7pyApp1eFia86qo00aSAKa?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            data.fields.smallVideoBlock1YoutubeLinkId = data.fields.xYoutubeId1.replace("https://youtu.be/", "");
            data.fields.smallVideoBlock2YoutubeLinkId = data.fields.xYoutubeId2.replace("https://youtu.be/", "");
            data.fields.largeVideoBlock1YoutubeLinkId = data.fields.xYoutubeId3.replace("https://youtu.be/", "");
            data.fields.smallVideoBlock3YoutubeLinkId = data.fields.youtubeId4.replace("https://youtu.be/", "");
            data.fields.smallVideoBlock4YoutubeLinkId = data.fields.youtubeId5.replace("https://youtu.be/", "");
            data.fields.smallVideoBlock5YoutubeLinkId = data.fields.youtubeId6.replace("https://youtu.be/", "");
            that.discover = data.fields;
            that.discoverHeadingBlueBlock = data.fields.discoverHeadingBlueBlock;
            that.discoverMoreDescription = data.fields.discoverMoreDescription;
            that.smallVideoBlock1Text = data.fields.smallVideoBlock1Text;
            that.smallVideoBlock2Text = data.fields.smallVideoBlock2Text;
            that.largeVideoBlock1Name = data.fields.largeVideoBlock1Name;
            that.largeVideoBlock1Quote = data.fields.largeVideoBlock1Quote;
            that.largeVideoBlock1YoutubeLink = data.fields.largeVideoBlock1YoutubeLink;
            that.largerVideoBlock2Name = data.fields.largerVideoBlock2Name;
            that.largeVideoBlock2Quote = data.fields.largeVideoBlock2Quote;
            that.largeVideoBlock2YoutubeLink = data.fields.largeVideoBlock2YoutubeLink;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/7pyApp1eFia86qo00aSAKa?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.video_text = data.fields;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.xImageBackground1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.Bigvideo1Img = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.xImageBackground2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.Bigvideo2Img = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.xImageBackground3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.Smallvideo1Img = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.imageBackground4.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.Smallvideo2Img = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.imageBackground5.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.Smallvideo3Img = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.imageBackground6.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.Smallvideo4Img = data.fields.file.url;
            });
        });
        //standard CTA
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.standardCtaInfoPackDescription = data.fields.standardCtaInfoPackDescription;
            that.standardCtaInfoPackButtonText = data.fields.standardCtaInfoPackButtonText;
            that.standardCtaInfoPackAfterButtonText = data.fields.standardCtaInfoPackAfterButtonText;
        });
        //count of homes
        /*this.apiService.get('/communities/count_for_home_and_community').subscribe((res:any)=>{
            this.comunitiesCount = res.home_count;
          },
          err=>{
            console.log(err);
        });*/
        var that = this;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1StNUKTcrmOGo4Iyam2U8I?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.header = data.fields;
            that.slider1Title = data.fields.slider1Title;
            that.slider1Description = data.fields.slider1Description;
            that.slider1ButtonUrl = data.fields.slider1ButtonUrl;
            that.slider1ButtonText = data.fields.slider1ButtonText;
            that.slider2Title = data.fields.slider2Title;
            that.slider2ButtonUrl = data.fields.slider2ButtonUrl;
            that.slider2Description = data.fields.slider2Description;
            that.slider2ButtonText = data.fields.slider2ButtonText;
            that.slider3Title = data.fields.slider3Title;
            that.slider3ButtonUrl = data.fields.slider3ButtonUrl;
            that.slider3Description = data.fields.slider3Description;
            that.slider3ButtonText = data.fields.slider3ButtonText;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.slider1Image.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.slider2Image.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.slider3Image.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.image3 = data.fields.file.url;
                $.getScript("js/owl-carouselCustom.js");
            });
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5JgGsuP63myKG4o0s00gqk?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            data.fields.youTubeLinkId = data.fields.youTubeLink.replace("https://youtu.be/", "");
            ;
            that.headerBelow = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.videoImagePreview.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.videoImage = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.featureIcon1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.icon1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.featureIcon2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.icon2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.featureIcon3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.icon3 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.featureIcon4.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.icon4 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/7pyApp1eFia86qo00aSAKa?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.video2 = data.fields;
                $.getScript('js/modal-video.js');
                $.getScript('js/jquery.tubular.1.0.js');
                $.getScript("js/customCarousel.js");
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/cGSRPLJGI8Wsy6KQqiAEA?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.heading1 = data.fields;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/34aiQXEiKQwuCI0iysO28c?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.heading2 = data.fields;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/uJj7daZX20WcmOe2sSGCI?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.blue_split = data.fields;
                $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.sliderImage1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                    that.sliderImg1 = data.fields.file.url;
                });
                $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.sliderImage2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                    that.sliderImg2 = data.fields.file.url;
                });
                $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.sliderImage3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                    that.sliderImg3 = data.fields.file.url;
                });
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/3qKDRwKGJqQGYKEcmQUeGK?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.info_pack = data.fields;
            });
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1F0bexMbKcmkaOkEW4UEIg?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.steps = data.fields;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.howItWorksIcon1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.HowIcon1 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.howItWorksIcon2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.HowIcon2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.howItWorksIcon3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.HowIcon3 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.fullWidthImageBackground.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.backimage = data.fields.file.url;
            });
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5GSasSCYo0KsSKK8cCmCi6?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
            that.testimonialsQuote = data.fields.quote;
            that.testimonialsQuote2 = data.fields.quote2;
            that.testimonialsQuote3 = data.fields.quote3;
            that.testimonialsQuoteDesc = data.fields.nameAndCommunityLivesIn;
            that.testimonialsQuoteDesc2 = data.fields.nameAndCommunityLivesIn2;
            that.testimonialsQuoteDesc3 = data.fields.nameAndCommunityLivesIn3;
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.testimonialImage1.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.testimonialsImage = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.testimonialImage2.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.testimonialsImage2 = data.fields.file.url;
            });
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/" + data.fields.testimonialImage3.sys.id + "?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", function (data, status) {
                that.testimonialsImage3 = data.fields.file.url;
            });
        });
    };
    TestimonialComponent.prototype.getGenericInfopack = function () {
        var _this = this;
        this.apiService.get('/pdf_info_packs/featured_pack').subscribe(function (res) {
            _this.genericInfo = res;
            window.localStorage.setItem('generic_url', _this.genericInfo.info_pack.info_pdf.url);
        });
    };
    TestimonialComponent.prototype.getInfo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var userData = {};
            userData.firstname = this.info.firstname;
            userData.lastname = this.info.lastname;
            userData.plan = this.info.plan;
            userData.phone = this.info.phone;
            userData.email = this.info.email;
            userData.description = this.info.area;
            window.localStorage.setItem('generic_data', JSON.stringify(userData));
            console.log('success!');
            this.segment.track('GetInfoPack', {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area
            }).then(function () {
                window.localStorage.setItem('genericCheck', '1');
                _this.router.navigateByUrl('/success');
                $('#get-an-info-pack-modal-static')[0].style.display = 'none';
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                console.log("Event sended");
            });
        }
        else {
            console.log('validation failed!');
        }
    };
    TestimonialComponent.prototype.changeColor = function ($event) {
        $event.target.style.backgroundColor = $event.type == "mouseover" ? '#ffffff' : '#105dac';
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#ffffff';
    };
    TestimonialComponent.prototype.onHover = function ($event) {
        $event.target.style.color = $event.type == "mouseover" ? '#105dac' : '#414952';
    };
    TestimonialComponent.prototype.ngOnDestroy = function () {
        $('body').removeClass(this.bodyClasses);
    };
    TestimonialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'testimonial',
            template: __webpack_require__("../../../../../src/app/testimonial/testimonial.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _c || Object])
    ], TestimonialComponent);
    return TestimonialComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=testimonial.component.js.map

/***/ }),

/***/ "../../../../../src/app/testimonial/testimonial.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_markdown__ = __webpack_require__("../../../../angular2-markdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__testimonial_component__ = __webpack_require__("../../../../../src/app/testimonial/testimonial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var testimonialRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'resident-stories',
        component: __WEBPACK_IMPORTED_MODULE_3__testimonial_component__["a" /* TestimonialComponent */]
    }
]);
var TestimonialModule = (function () {
    function TestimonialModule() {
    }
    TestimonialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_angular2_markdown__["a" /* MarkdownModule */].forRoot(),
                testimonialRouting,
                __WEBPACK_IMPORTED_MODULE_4__shared__["g" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__testimonial_component__["a" /* TestimonialComponent */]
            ],
            providers: []
        })
    ], TestimonialModule);
    return TestimonialModule;
}());

//# sourceMappingURL=testimonial.module.js.map

/***/ }),

/***/ "../../../../../src/app/thanks-enquiring/thanks-enquiring.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/thanks-enquiring/thanks-enquiring.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Header -->    \n<section class=\"communities page-title-common\">\n\t <div class=\"container\">\n\t\t<h2>Thanks for enquiring!</h2>\n\t\t<p class=\"pera-textbig\">We’ve emailed you the info pack. You can also view it now by clicking the button below or keep browsing.</p>\t\t\t\n\t\t<div class=\"view-info-pack\"><a href=\"{{infoUrl}}\" target=\"_blank\">VIEW INFO PACK</a></div>\n\t </div>\n </section>\n<!-- END -->\n    "

/***/ }),

/***/ "../../../../../src/app/thanks-enquiring/thanks-enquiring.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThanksEnquiringComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__ = __webpack_require__("../../../../ngx-segment-analytics/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThanksEnquiringComponent = (function () {
    function ThanksEnquiringComponent(segment) {
        this.segment = segment;
    }
    ThanksEnquiringComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.segment.page().then(function () { return console.log("Event sended"); });
        if (window.localStorage.getItem('genericCheck') == '0') {
            this.infoUrl = 'https://www.admin.gatewaylifestyle.com.au' + window.localStorage.getItem('basicinfo_url');
        }
        else if (window.localStorage.getItem('genericCheck') == '1') {
            this.infoUrl = 'https://www.admin.gatewaylifestyle.com.au' + window.localStorage.getItem('generic_url');
        }
    };
    ThanksEnquiringComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-thanks-enquiring',
            template: __webpack_require__("../../../../../src/app/thanks-enquiring/thanks-enquiring.component.html"),
            styles: [__webpack_require__("../../../../../src/app/thanks-enquiring/thanks-enquiring.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__["b" /* SegmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_segment_analytics__["b" /* SegmentService */]) === "function" && _a || Object])
    ], ThanksEnquiringComponent);
    return ThanksEnquiringComponent;
    var _a;
}());

//# sourceMappingURL=thanks-enquiring.component.js.map

/***/ }),

/***/ "../../../../../src/app/thanks-enquiring/thanks.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return thanksenquiringModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thanks_enquiring_component__ = __webpack_require__("../../../../../src/app/thanks-enquiring/thanks-enquiring.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var thanksenquiringRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'success',
        component: __WEBPACK_IMPORTED_MODULE_2__thanks_enquiring_component__["a" /* ThanksEnquiringComponent */]
    }
]);
var thanksenquiringModule = (function () {
    function thanksenquiringModule() {
    }
    thanksenquiringModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* SharedModule */],
                thanksenquiringRouting
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__thanks_enquiring_component__["a" /* ThanksEnquiringComponent */]
            ],
            providers: []
        })
    ], thanksenquiringModule);
    return thanksenquiringModule;
}());

//# sourceMappingURL=thanks.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    apiBase: 'https://www.admin.gatewaylifestyle.com.au'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
var bootstrapPromise = Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//Logging bootstrap information
bootstrapPromise.then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map