package ru.glevse.myproj

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class MyProjApplication

fun main(args: Array<String>) {
    runApplication<MyProjApplication>(*args)
}
