import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = { 
           name: 'Vinay Shinde', 
           email: 'vinayshinde299@example.com',
           photoUrl: "ProfilePic.jpg" 
         }; 
  connections = [
    { name: 'Mandar Kulkarni' },
    { name: 'Rushi Bhapkar' }
  ];
  newPost = { content: '', image: null as File | null };
  
  posts: Array<{ content: string; imageUrl: string }> = [ 
    { content: 'This is a sample post!', imageUrl: "ProfilePic.jpg" } 
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onSubmitPost() {
    const post = { 
      content: this.newPost.content, 
      imageUrl: this.newPost.image ? URL.createObjectURL(this.newPost.image) : "ProfilePic.jpg" 
    };
    this.posts.push(post);
    this.newPost = { content: '', image: null };
  }

  onImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.newPost.image = input.files[0];
    }
  }

  navigateToSettings() {
    this.router.navigate(['/settings']);
  }

  logout() {
    console.log('Logging out...');
    this.router.navigate(['/login']);
  }

  manageNetwork() {
    console.log('Managing network...');
  }
}
