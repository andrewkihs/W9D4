const FollowToggle = require("./follow_toggle");

$(() => {
  
  followButton();
});

const followButton = () => {
  $('.follow-toggle').each(function(index, element) {
    // debugger
    // const $el = $(element);
    const ft = new FollowToggle(element);
    const followState = ft.followState;
    const userId = ft.userId;
    element.append(ft.render());
    // console.log(`${index} ${followState} ${userId}`);
    // console.log(element);
  });
}