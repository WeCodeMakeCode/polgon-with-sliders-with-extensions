function make_sliders (left: number, width: number, name: string) {
	
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sliders) {
    	
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    slider_sides.selected = true
    slider_sides.value += 1
    p.sides += 1
})
let sliders: Slider[] = []
let slider_sides: Slider = null
let p: Polygon = null
p = polygon.createPolygon(3, 30)
let slider_width = 40
slider_sides = slider.create(3, 3, 30, 40, 6)
let slider_starting_angle = slider.create(0, 0, 360, 40, 6)
let slider_color = slider.create(3, 1, 15, 40, 6)
let slider_between = (160 - 3 * slider_width) / 4
let t = slider_between
slider_sides.left = t
t = t + (slider_width + slider_between)
slider_starting_angle.left = t
t = t + (slider_width + slider_between)
slider_color.left = t
slider_sides.data = "sides"
slider_starting_angle.data = "starting angle"
slider_color.data = "color"
sliders = [slider_sides, slider_starting_angle, slider_color]
