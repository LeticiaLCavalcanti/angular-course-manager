import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "./course.service";
import {Course} from "./course";
import {Observable} from "rxjs";

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
    this.courseService.retrieveById(+this.activateRoute.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error', err)
    });
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: course => console.log('saved with success'),
      error: err => console.log('Error', err)
    });
  }
}
