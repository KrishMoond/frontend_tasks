import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrudService, Post } from '../crud';

@Component({
  selector: 'app-crud',
  imports: [CommonModule, FormsModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css'
})
export class Crud implements OnInit {
  posts: Post[] = [];
  form: Post = { title: '', body: '', userId: 1 };
  editingId: number | null = null;
  message = '';

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.crudService.getPosts().subscribe(data => this.posts = data);
  }

  submit() {
    if (this.editingId !== null) {
      this.crudService.updatePost(this.editingId, this.form).subscribe(() => {
        const idx = this.posts.findIndex(p => p.id === this.editingId);
        if (idx !== -1) this.posts[idx] = { ...this.form, id: this.editingId! };
        this.showMessage('Post updated!');
        this.reset();
      });
    } else {
      this.crudService.createPost(this.form).subscribe(newPost => {
        this.posts.unshift(newPost);
        this.showMessage('Post created!');
        this.reset();
      });
    }
  }

  edit(post: Post) {
    this.editingId = post.id!;
    this.form = { title: post.title, body: post.body, userId: post.userId };
  }

  delete(id: number) {
    this.crudService.deletePost(id).subscribe(() => {
      this.posts = this.posts.filter(p => p.id !== id);
      this.showMessage('Post deleted!');
    });
  }

  reset() {
    this.form = { title: '', body: '', userId: 1 };
    this.editingId = null;
  }

  showMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 2500);
  }
}
