/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

class FollowToggle{
  constructor($el){
    this.$el = $el;
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.render();
    this.handleClick();
  };

  render() {
    if (this.followState){
      return 'Unfollow!';
    } else {
      return 'Follow!';
    }
  }

  handleClick() {
    $("li").off().on("click", ".follow-toggle", (e) => {
      console.log(e.currentTarget);
      if (this.followState){
        return $.ajax({
          method: "",
          url: "",

        })
      } else {
        return $.ajax({
          method: "",
          url: "",
        });
      }; 
    });
  };
}

module.exports = FollowToggle;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");

$(() => {
  
  followButton();
});

const followButton = () => {
  $('.follow-toggle').each(function(index, element) {
    const $el = $(element);
    const ft = new FollowToggle($el);
    const followState = ft.followState;
    const userId = ft.userId;
    $el.append(ft.render());
    // console.log(`${index} ${followState} ${userId}`);
    // console.log(element);
  });
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map