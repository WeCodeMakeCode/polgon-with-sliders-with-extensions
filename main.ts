controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    right_or_left(1)
})
function right_or_left (inc: number) {
    for (let value3 of sliders) {
        if (value3.selected) {
            value3.value += inc
            if (value3.data == "sides") {
                p.sides += inc
            } else if (value3.data == "color") {
                p.color += inc
            } else {
                p.angle += inc
            }
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() - time > time_inc) {
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
        time = game.runtime()
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
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (game.runtime() - time > time_inc) {
        right_or_left(-1)
        time = game.runtime()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() - time > time_inc) {
        for (let value2 of sliders) {
            if (value2.selected) {
                if (value2.thumb_text.isEmpty()) {
                    value2.thumb_text = value2.data
                } else {
                    value2.thumb_text = ""
                }
            }
        }
        time = game.runtime()
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (game.runtime() - time > time_inc) {
        right_or_left(1)
        time = game.runtime()
    }
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    right_or_left(-1)
})
let this_left = 0
let slider_between = 0
let b_found = false
let p: Polygon = null
let time_inc = 0
let time = 0
time = game.runtime()
time_inc = 2000
let sliders: Slider[] = []
let ndx = 0
p = polygon.createPolygon(3, 30, 6, 0)
let slider_width = 40
let slider_sides = slider.create(3, 3, 30, slider_width, 6)
let slider_starting_angle = slider.create(0, 0, 360, slider_width, 6)
let slider_color = slider.create(6, 1, 15, slider_width, 6)
sliders = [slider_sides, slider_starting_angle, slider_color]
slider_sides.data = "sides"
slider_starting_angle.data = "starting angle"
slider_color.data = "color"
slider_sides.selected = true
set_slider_positions(slider_width)
