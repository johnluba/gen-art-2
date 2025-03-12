# Geometric Animation with p5.js

This project is an animated geometric composition built using [p5.js](https://p5js.org/).  
It features animated circles, rectangles, lines, and patterns that create a dynamic, abstract visual inspired by a custom colour palette.

## Features

- Smooth geometric animations at 60fps
- Custom colour palette inspired by warm and cool tones
- Animated concentric circles, rectangles, lines, and connecting arcs
- Responsive layout that adapts to window size
- Simple interaction: press the space bar to restart the animation

## How It Works

- The animation runs on a loop of **900 frames** (15 seconds at 60fps).
- Each draw function adds elements to the canvas based on `progress` through the animation cycle.
- The visual structure includes:
  - Grids and background lines
  - Large animated circles and rings
  - Rotating and shifting rectangles
  - Small dots and diamonds that create patterns
  - Connecting lines and arcs for detail

## Controls

- **Space Bar**: Restart the animation
- **Window Resize**: Automatically resizes the canvas

## Files

- `index.html`: Loads the p5.js library and links the script
- `sketch.js`: Contains the animation code
- No external assets required

## How to Run Locally

1. Install [VS Code](https://code.visualstudio.com/) (or any code editor).
2. Download or clone this repository.
3. Open the folder in VS Code.
4. Open `index.html` directly in your browser.
   - For better results (if loading external assets later), run a simple local server:
     ```bash
     npx serve .
     ```
     Or use the Live Server extension in VS Code.

## Colour Palette

| Colour Name  | RGB Values      |
| ------------ | --------------- |
| Orange       | [255, 140, 0]   |
| Light Orange | [255, 170, 80]  |
| Red          | [220, 60, 50]   |
| Burgundy     | [160, 30, 60]   |
| Blue         | [30, 60, 110]   |
| Light Blue   | [100, 140, 180] |
| Navy         | [20, 30, 60]    |
| Cream        | [250, 240, 225] |
| Black        | [20, 20, 20]    |
| Gray         | [150, 150, 150] |
| Light Gray   | [200, 200, 200] |
| Pink         | [230, 120, 150] |
| Beige        | [245, 230, 210] |

## Dependencies

- [p5.js](https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js)

## Future Improvements

- Add user interactions (e.g. click elements to change colours)
- Export animation frames or save as a GIF
- Optimise for mobile devices

## License

MIT License
