import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title: 'Personal Website',
      desc: 'This is the website you are currently on!',
      technologies: ['Angular', 'Bootstrap 4'],
      github: 'leaguestats',
      color: 'pastel-red'
    },
    {
      title: 'Dartboard Score Tracker',
      desc: 'Me and my roommate loved playing darts, but hated keeping score on pieces of paper, throwing them away, and then forgetting who had more wins over the other. I made this app to help keep track of the score and historical game data. I also made this with the intention of it eventually going live so that anyone out there can use it for free.In the future I plan on adding login functionality and a data dashboard for each profile. ',
      technologies: ['React', 'Styled Components'],
      github: 'Interview',
      color: 'pastel-blue'
    },
    {
      title: 'Nothin But Net (NBN)',
      desc: "A friend of mine has a passion is basketball and is seeking a career in it. This website is a place where he can unload all of his views on the sport and a place to make team information easily accessbile to him and others.",
      technologies: ['Vue', 'VueX'],
      github: 'Interview',
      color: 'pastel-green'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
