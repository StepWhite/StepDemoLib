
// alert("hi");
import $ from "jquery";

$(function () {
   $("li:odd").css({"color": "green"});
   $("li:even").css({ "background": "red" });
});