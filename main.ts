controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    s1.selected = true
    s1.value += 1
    p.sides += 1
})
let p: Polygon = null
let s1: Slider = null
let slider_width = 40
s1 = slider.create(50, 0, 100, 40, 6)
let s2 = slider.create(50, 0, 100, 40, 6)
let s3 = slider.create(50, 0, 100, 40, 6)
let slider_between = (160 - 3 * slider_width) / 4
let t = slider_between
s1.left = t
t = t + (slider_width + slider_between)
s2.left = t
t = t + (slider_width + slider_between)
s3.left = t
s1.data = "sides"
s2.data = "starting angle"
s3.data = "color"
let sliders = [s1, s2, s3]
p = polygon.createPolygon(3, 30)
