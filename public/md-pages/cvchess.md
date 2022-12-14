**Who:** Me and 3 other Brown University sophomores (Firstname Lastname, Firstname Lastname, and Firstname Lastname)

**What:** Program which tracks chess moves through a live camera feed and updates a digital display of the board

**When:** May 2022

**Where:** Brown University's CSCI 1430 Computer Vision course

**Why:**

- Apply problem solving skills and traditional CV techniques to put a new spin on an overdone project
- Avoid "black box" deep learning methods for chess recognition in favor of a more transparent algorithm
- Strengthen Python and OpenCV skills

**How:**
Built entirely in Python using OpenCV and the python-chess package.

**Can I try it?**
You can read the full report [here]() and view the source code on [my Github]().

![cv chess project thumbnail](/assets/projects/cvchess/thumbnail.png)

This project was created in collaboration with three other second-year Brown University students for our Computer Vision class final. It was programmed entirely in Python using OpenCV and the Python chess-board package (for displaying the digital board graphic).

Chess board recognition is an overdone project in CV, but our goal was to take a different approach. With an emphasis on socially responsible and transparent computing methods, we were the only students in the class to implement our project entirely free of "black box" deep learning and using entirely traditional CV algorithms.

The project takes snapshots of the live webcam feed of a chessboard when a player clocks a move and uses Hough Line Transforms and Canny Edge Detection to identify the board and piece locations. Using our own method of tracking the game state and ranking board intensity changes, we could produce FEN strings with updated piece locations and captures to display a digital version of the board in real time.

### Process

|              ![hough transforms](/assets/projects/cvchess/hough.png)              |
| :-------------------------------------------------------------------------------: |
| Hough Transforms extract board edges which produce clustered intersection points. |

|                 ![warped board](/assets/projects/cvchess/warp.png)                  |
| :---------------------------------------------------------------------------------: |
| The board image is warped using the matrix of corners to divide it up into squares. |

|                                                                                                       ![full UI](/assets/projects/cvchess/display.png)                                                                                                       |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Final user interface of the program displaying from left to right: the live webcam feed, most recent snapshot with Hough Lines and board corners, the warped board image with filled squares outlined, and the digital board with the identified game state. |

### Demo Video

<video
  src="/assets/projects/cvchess/samplevid.mp4"
  alt="chess demo video"
  controls
/>
