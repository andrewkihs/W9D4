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