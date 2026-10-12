package ru.glevse.myproj

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HomeRest {
    @GetMapping("/main")
    fun home(): String {
        return "hello world"
    }
}