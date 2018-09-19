// import { DemoLoadBalancing } from "app";

cc.Class({
  extends: cc.Component,

  properties: {
    label: {
      default: null,
      type: cc.Label
    },
    // defaults, set visually when attaching this script to the Canvas
    text: "Hello, World!",
    roomNameInput: cc.EditBox,
    log: cc.RichText,
  },

  // use this for initialization
  onLoad: function() {
    // this.label.string = this.text;

    this.app = new DemoLoadBalancing();
    this.app.start();
  },

  onButtonClick(event, customData) {
    switch (customData) {
      case "JoinGame":
        break;
      case "JoinRandomGame":
        break;
      case "NewGame":
      console.log('this.app.isInLobby() = ' + this.app.isInLobby());
        if (this.app.isInLobby()) {
          var name = this.roomNameInput.string;
          console.log('name = ' + name);
          this.app.output("New Game");
          this.app.createRoom(name.length > 0 ? name : undefined);
        } else {
          this.app.output("Reload page to connect to Master");
        }
        return false;
        break;
      case "Send":
        break;
      case "ChangeColor":
        break;
      case "Leave":
        break;
    }
  }
});
