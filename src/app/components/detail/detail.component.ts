import { Component } from '@angular/core';
import { AppState, Post } from '../../state/app/app.state';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FetchPostById } from '../../state/app/app.actions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  public id: string;
  @Select(AppState.selectedPost) post?: Observable<Post>;
  @Select(AppState.loading) loading?: Observable<boolean>;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.store.dispatch(new FetchPostById(parseInt(this.id) || 1));
  }
}
