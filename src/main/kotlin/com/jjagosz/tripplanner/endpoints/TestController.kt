package com.jjagosz.tripplanner.endpoints

import com.jjagosz.tripplanner.model.Greeting
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.util.concurrent.atomic.AtomicLong

@RestController
@RequestMapping("/api/v1")
class TestController {

    val counter = AtomicLong()

    @GetMapping("/greet")
    fun greeting(@RequestParam(value = "name", defaultValue = "World") name: String) = Greeting(counter.incrementAndGet(), "Welcome $name")

}