// Alex Mux | Go Project: Let's Make a PONG Game in Golang! | 2024
// https://www.youtube.com/watch?v=V_OGeYj6p00

package main

import (
	"log"
	"github.com/hajimehoshi/ebiten/v2"

	"github.com/hajimehoshi/ebiten/v2/vector"
	"image/color"

	"github.com/hajimehoshi/ebiten/v2/text"
	"golang.org/x/image/font/basicfont"
	"fmt"
)

const (
	screenWidth = 640
	screenHeight = 480
	ballSpeed = 3	// Speed in pixels/tick (at default 60 ticks/second)
	paddleSpeed = 6
)

//////////////////////////////////////////////////////////////////////////////
type Object struct {
	X, Y, W, H int	// 0,0 is top left corner
}

type Paddle struct {
	Object
}

type Ball struct {
	Object
	dxdt int	// x velocity per tick
	dydt int	// y velocity per tick
}

type Game struct {
	paddle Paddle
	ball Ball
	score int
	highScore int
}

//////////////////////////////////////////////////////////////////////////////
func main() {
	ebiten.SetWindowTitle("Pong in Ebitengine")
	ebiten.SetWindowSize(screenWidth, screenHeight)

	paddle := Paddle{
		Object: Object{
			X: 600,
			Y: 200,
			W: 15,
			H: 100,
		},
	}
	ball := Ball{
		Object: Object{
			X: 0,
			Y: 0,
			W: 15,
			H: 15,
		},
		dxdt: ballSpeed,
		dydt: ballSpeed,
	}

	g := &Game{
		paddle: paddle,
		ball: ball,
	}

	err := ebiten.RunGame(g)
	if err != nil {
		log.Fatal(err)
	}
}

//////////////////////////////////////////////////////////////////////////////
func (g *Game) Layout(outsideWidth, outsideHeight int) (int, int) {
	return screenWidth, screenHeight
}

func (g *Game) Draw(screen *ebiten.Image) {
	vector.DrawFilledRect(screen,
		float32(g.paddle.X), float32(g.paddle.Y),
		float32(g.paddle.W), float32(g.paddle.H),
		color.White, false,
	)
	vector.DrawFilledRect(screen,
		float32(g.ball.X), float32(g.ball.Y),
		float32(g.ball.W), float32(g.ball.H),
		color.White, false,
	)

	scoreStr := "Score: " + fmt.Sprint(g.score)
	text.Draw(screen, scoreStr, basicfont.Face7x13, 10, 10, color.White)

	highScoreStr := "High Score: " + fmt.Sprint(g.highScore)
	text.Draw(screen, highScoreStr, basicfont.Face7x13, 10, 30, color.White)
}

func (g *Game) Update() error {
	g.paddle.MoveOnKeyPress()
	g.ball.Move()
	g.CollideWithWall()
	g.CollideWithPaddle()
	return nil
}

//////////////////////////////////////////////////////////////////////////////
func (p *Paddle) MoveOnKeyPress() {
	if ebiten.IsKeyPressed(ebiten.KeyArrowDown) {
		p.Y += paddleSpeed
		if p.Y > screenHeight - p.H {
			// Don't allow the paddle to move off the bottom of screen
			p.Y = screenHeight - p.H
		}
	}
	if ebiten.IsKeyPressed(ebiten.KeyArrowUp) {
		p.Y -= paddleSpeed
		if p.Y < 0 {
			// Don't allow the paddle to move off the top of screen
			p.Y = 0
		}
	}
}

func (b *Ball) Move() {
	b.X += b.dxdt
	b.Y += b.dydt
}

func (g *Game) Reset() {
	g.ball.X = 0
	g.ball.Y = 0

	g.score = 0
}

func (g *Game) CollideWithWall() {
	if g.ball.X >= screenWidth {
		g.Reset()	// Right wall causes a game over
	} else if g.ball.X <= 0 {
		g.ball.dxdt = ballSpeed
	} else if g.ball.Y <= 0 {
		g.ball.dydt = ballSpeed
	} else if g.ball.Y >= screenHeight - g.ball.H {
		g.ball.dydt = -ballSpeed
	}
}

func (g *Game) CollideWithPaddle() {
	// Does the top-right or bottom-right corner of the ball touch the front of the paddle?
	if g.DoesPointTouchFrontOfPaddle(g.ball.X + g.ball.W, g.ball.Y) ||
	   g.DoesPointTouchFrontOfPaddle(g.ball.X + g.ball.W, g.ball.Y + g.ball.H) {
		//g.LogInfo("CollideWithPaddle")
		g.ball.dxdt = -ballSpeed
		g.score++
		if g.score > g.highScore {
			g.highScore = g.score
		}
	}
}

func (g *Game) DoesPointTouchFrontOfPaddle(x, y int) bool {
	// The "FrontOfPaddle" is a rectangle bounded by:
	// - top & bottom of paddle (inclusive)
	// - left verticle edge of paddle (inclusive)
	// - right verticle imaginary line where the width is:
	//     the distance the ball moves per tick in the
	//     X direction i.e. ballSpeed (exclusive)
	// Hence, for a point on the ball travelling in the X direction:
	// - the point can never "jump over" the front of the paddle
	// - the point can only ever land in this rectangle once per collision;
	//   and after bouncing, the point will be outside this rectangle
	return	x >= g.paddle.X && x < g.paddle.X + ballSpeed &&
		y >= g.paddle.Y && y <= g.paddle.Y + g.paddle.H
}
/*
func (g *Game) LogInfo(msg string) {
	log.Printf("Ball(%3d,%3d) Speed(%2d) | Paddle(%3d,%3d)(%3d,%3d) | %s\n",
		g.ball.X, g.ball.Y, g.ball.dxdt,
		g.paddle.X, g.paddle.Y,
		g.paddle.X+g.paddle.W, g.paddle.Y+g.paddle.H, msg)
}
 */

