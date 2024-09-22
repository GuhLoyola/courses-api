import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';

import { CreateCourseDto } from 'src/dtos/courses/create-course.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CoursesService } from '../services/courses.service';

@Controller('courses')
export class CoursesController {
    constructor(
        private coursesService: CoursesService
    ) { }

    @Get()
    @ApiOkResponse({ description: 'List of all courses' })
    async getCourses() {
        const courses = await this.coursesService.getCourses();

        return courses;
    }

    @Get(':courseId')
    @ApiOkResponse({ description: 'List a course using Id' })
    async getCourse(@Param('courseId') courseId) {
        const course = await this.coursesService.getCourse(courseId);

        return course
    }

    @Post()
    @ApiCreatedResponse({ description: 'Add a new course' })
    async addCourse(
        @Body() createCourseDto: CreateCourseDto
    ) {
        const course = await this.coursesService.addCourse(createCourseDto);

        return course;
    }

    @Delete()
    @ApiOkResponse({ description: 'Remove a course using Id' })
    async deleteCourse(@Query() query) {
        const courses = await this.coursesService.deleteCourse(query.courseId);
        return courses;
    }
}
