import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "./course.service";
import {Course} from "./course";

@Component({
   templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{

  course: Course;

  constructor(
    private activateRoute: ActivatedRoute,
    private courseService: CourseService
  ){}

  ngOnInit(): void {
    this.course = this.courseService.retrieveById(+this.activateRoute.snapshot.paramMap.get('id'));
  }

  save(): void{
    this.courseService.save(this.course);
  }
}
