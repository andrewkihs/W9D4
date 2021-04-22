class FollowToggle{
  constructor(el){
    //debugger
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on("click", this.handleClick);
    //debugger
  };

  render() {
    //debugger
    if (this.followState){
      return 'Unfollow!';
    } else {
      return 'Follow!';
    }
  }

  handleClick(e) {
    // this.$el.on("click", (e) => {
      // debugger
      e.preventDefault();

      console.log(this.userId);
      console.log(e.currentTarget);
      console.log($(e.currentTarget).data("user-id"));

      const currentUser = this.userId;
      const followee = ($(e.currentTarget).data("user-id"));
      if (!this.followState){
        //debugger
        return $.ajax({
          method: "POST",
          url: `/users/${followee}/follow`,
          data: {follower_id: currentUser},
          dataType: "json",
          success: () => {
            //debugger
            this.followState = true;
            this.render();
            //debugger
          },
          error: error => {
            //debugger
          }
        })
      } else {
        //debugger
        return $.ajax({
          method: "DELETE",
          url: `/users/${followee}/follow`,
          success: () => {
            //debugger
            this.followState = false;
            this.render();
            //debugger
          },
          error: error => {
            //debugger
          }
        });
      }; 
    // });
  };
}

module.exports = FollowToggle;