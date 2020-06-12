controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    right_or_left(1)
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    up_and_down_radius(-1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    up_and_down_radius(-1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() - time > time_inc) {
        active_slider.selected = false
        if (active_slider == slider_sides) {
            active_slider = slider_color
        } else if (active_slider == slider_color) {
            active_slider = slider_starting_angle
        } else {
            active_slider = slider_sides
        }
        active_slider.selected = true
        time = game.runtime()
    }
})
function set_slider_positions (width: number) {
    slider_between = (160 - 3 * width) / 4
    this_left = slider_between
    slider_sides.left = this_left
    this_left = this_left + (width + slider_between)
    slider_color.left = this_left
    this_left = this_left + (width + slider_between)
    slider_starting_angle.left = this_left
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (game.runtime() - time > time_inc) {
        right_or_left(-1)
        time = game.runtime()
    }
})
function up_and_down_radius (amount: number) {
    tmp = Math.min(Math.max(myPolygon.radius + amount, 10), 50)
    slider_radius.value = tmp
    myPolygon.radius = tmp
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() - time > time_inc) {
        if (active_slider.thumb_text.isEmpty()) {
            active_slider.thumb_text = active_slider.data
        } else {
            active_slider.thumb_text = ""
        }
    }
    time = game.runtime()
})
function right_or_left (inc: number) {
    if (active_slider == slider_sides) {
        active_slider.value += inc
        slider_starting_angle.value = 0
        myPolygon.sides += inc
        myPolygon.sides = Math.min(Math.max(myPolygon.sides, 3), 30)
    } else if (active_slider == slider_color) {
        active_slider.value += inc
        myPolygon.color += inc
        myPolygon.color = (myPolygon.color + inc) % 16
    } else {
        tmp_angle = Math.round(inc * (360 / myPolygon.sides) / 8)
        active_slider.value += tmp_angle % 360
        myPolygon.angle += tmp_angle
    }
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    up_and_down_radius(1)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (game.runtime() - time > time_inc) {
        right_or_left(1)
        time = game.runtime()
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    up_and_down_radius(1)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    right_or_left(-1)
})
let tmp_angle = 0
let tmp = 0
let this_left = 0
let slider_between = 0
let active_slider: Slider = null
let slider_radius: Slider = null
let slider_color: Slider = null
let slider_starting_angle: Slider = null
let slider_sides: Slider = null
let myPolygon: Polygon = null
let time_inc = 0
let time = 0
time = game.runtime()
time_inc = 0
myPolygon = polygon.createPolygon(3, 20, 6, 0)
let slider_width = 40
slider_sides = slider.create(3, 3, 30, slider_width, 6)
slider_starting_angle = slider.create(0, 0, 360, slider_width, 6)
slider_color = slider.create(6, 1, 15, slider_width, 6)
slider_radius = slider.create(20, 10, 50, 6, slider_width, Orientation.Vertical)
slider_radius.left = 6
slider_sides.data = "sides"
slider_starting_angle.data = "starting angle"
slider_color.data = "color"
slider_sides.selected = true
set_slider_positions(slider_width)
active_slider = slider_sides
