class UiButton extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key, hoverKey, text, targetCallback) {
    super(scene, x, y);
    this.scene = scene; // the scene this container will be added to
    this.x = x; // the x pos of our container
    this.y = y; // the y pos of our container
    this.key = key; // the background img of our button
    this.hoverKey = hoverKey; // img displayed when hovered
    this.text = text; // text that will be displayed on button
    this.targetCallback = targetCallback; // callback function that is triggered on click

    // create our UI Button
    this.createButton();
    // add this container to our Phaser Scene
    this.scene.add.existing(this);
  }

  createButton() {
    // create button
    this.button = this.scene.add.image(0, 0, this.key);
    // make button interactive
    this.button.setInteractive({ useHandCursor: true });
    // scale button
    this.button.setScale(1.4);

    // create button text
    this.buttonText = this.scene.add.text(0, 0, this.text, {
      fontSize: "26px",
      fill: "#fff",
    });
    // center the button text
    Phaser.Display.Align.In.Center(this.buttonText, this.button);

    // add two game objects to container
    this.add(this.button);
    this.add(this.buttonText);

    // listen for events
    this.button.on("pointerdown", () => {
      this.targetCallback();
    });

    this.button.on("pointerover", () => {
      this.button.setTexture(this.hoverKey);
    });

    this.button.on("pointerout", () => {
      this.button.setTexture(this.key);
    });
  }
}
