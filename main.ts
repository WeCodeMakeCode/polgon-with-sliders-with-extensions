controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    b_found = false
    ndx = 0
    while (!(b_found) && ndx < sliders.length) {
        if (sliders[ndx].selected) {
            sliders[ndx].selected = false
            sliders[(ndx + 1) % sliders.length].selected = true
            b_found = true
        }
        ndx += 1
    }
    if (!(b_found)) {
        sliders[0].selected = true
    }
})
function set_slider_positions (width: number) {
    slider_between = (160 - 3 * width) / 4
    this_left = slider_between
    for (let value of sliders) {
        value.left = this_left
        this_left = this_left + (width + slider_between)
    }
}
function make_sliders (left: number, width: number, name: string) {
	
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sliders) {
        if (value.selected) {
            if (value.thumb_text.isEmpty()) {
                value.thumb_text = value.data
            } else {
                value.thumb_text = ""
            }
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sliders) {
        if (value.selected) {
            value.value += 1
            if (value.data == "sides") {
                p.sides += 1
            } else if (value.data == "color") {
                p.color += 1
            } else {
                p.angle += 1
            }
        }
    }
})
let this_left = 0
let slider_between = 0
let ndx = 0
let b_found = false
let sliders: Slider[] = []
let p: Polygon = null
p = polygon.createPolygon(3, 30)
let slider_width = 40
let slider_sides = slider.create(3, 3, 30, slider_width, 6)
let slider_starting_angle = slider.create(0, 0, 360, slider_width, 6)
let slider_color = slider.create(3, 1, 15, slider_width, 6)
sliders = [slider_sides, slider_starting_angle, slider_color]
slider_sides.selected = true
set_slider_positions(slider_width)
slider_sides.data = "sides"
slider_starting_angle.data = "starting angle"
slider_color.data = "color"
