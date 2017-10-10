import { Component, HostListener, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  






















  // @ViewChild('mainContent') mainContent : ElementRef;
  // pageChanged = false;
  
  // constructor(private renderer: Renderer, private router: Router){

  // }

  // @HostListener('window:scroll', ['$event']) 
  // onScroll(event) {
  //   console.log(this.mainContent.nativeElement);
    
  //   if(!this.pageChanged){
  //     this.goToPage();
  //   }
  // }

  // goToPage(){
  //   this.pageChanged = true;
  //   let pageID = Number(this.getPageID(this.router.url));
  //   let newUrl = '/';
  //   window.addEventListener('wheel', (e) => {
      
  //     if (e.deltaY < 0) {
  //         newUrl = this.getUrl(pageID - 1);
  //     }

  //     if (e.deltaY > 0) {
  //         newUrl = this.getUrl(pageID + 1);
  //     }

  //     setTimeout(() => {
  //       if(newUrl !== undefined){
  //         this.router.navigate([newUrl]);
  //         pageID = this.getPageID(newUrl);
  //       }
  //     }, 1000);

  //     setTimeout(() => {
  //       // this.renderer.setElementStyle(this.mainContent.nativeElement, 'overflow', 'hidden');
  //       this.pageChanged = false;
  //     }, 2000);

  //   }); 
  // }

  // getPageID(url){
  //   switch (url){
  //     case '/': 
  //       return 0;
  //     case '/transform':
  //       return 1;
  //     case '/contact':
  //       return 2
  //     default:
  //       return;
  //   }
  // }

  // getUrl(pageID){
  //   console.log(pageID)
  //   switch (pageID){
  //     case 0:
  //       return '/';
  //     case 1:
  //         return '/transform';
  //     case 2:
  //       return '/contact';
  //     default:
  //       return;
  //   }
  // }
}
