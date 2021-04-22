const FollowToggle = require("./follow_toggle");

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